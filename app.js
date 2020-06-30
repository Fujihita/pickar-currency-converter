var express = require('express');
var app = express();
var https = require('https');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var connection = MongoClient.connect(url);

router.use('/scripts', express.static(__dirname + '/scripts'));
router.use('/styles', express.static(__dirname + '/styles'));
router.use('/static', express.static(__dirname + '/static'));

var rates = {
  USD: 1,
  CHF: 1,
  EUR: 1
}

function importHistory(amount, result, base, target)
{
  record = {
    tstamp: Date.now(),
    input: amount,
    output: result,
    base: base,
    target: target
  }
  connection.then(
    function(db) {
      db.db("logs").collection("history").insertOne(record, function(err) {
        if (err) throw err;
      })
    },
    function(err){
      if (err) throw err;
    }
  );
}

function exportHistory()
{
  return connection.then(
    function(db){
      return db.db("logs").collection("history").find().toArray()
    },
    function (err){
      if (err) throw err;
    }
  );
}

function updateRate(){
  https.get({
    host: 'api.exchangeratesapi.io',
    path: '/latest?symbols=USD,CHF',
  },
  function (res) {
      var body = '';
      res.on('data', function (chunk) { body += chunk; });
      res.on('end', function () {
        rates = JSON.parse(body).rates;
        rates.EUR = 1;
      }.bind({ rates: this.rates }));
    });
}

router.get('/', function (req, res) {
  res.sendFile('views/index.html', { root: __dirname });
});

router.get('/convert', function (req, res) {
  amount = req.query.amount;
  base = req.query.base;
  target = req.query.target;

  if (isNaN(amount))
    res.status(400).send("Error: Invalid amount!");
  else if (!rates.hasOwnProperty(base))
    res.status(400).send("Error: Invalid base currency!");
  else if (!rates.hasOwnProperty(target))
    res.status(400).send("Error: Invalid target currency!");
  else
    {
      result = amount * rates[target] / rates[base];
      importHistory(amount, result, base, target);
      res.send(result.toString());
    }
}.bind({ rates: this.rates }));

router.get('/history', function (req, res) {
  exportHistory().then(
    function(history){
      res.json(history);
    },
    function(err){
      res.send(err);
    }
  );
});

app.use('/', router);

updateRate();
setInterval(updateRate, 60 * 60 * 1000);

app.listen(process.env.PORT || 3000);

module.exports = app
