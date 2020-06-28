var should = require('should/as-function');
var app = require("../app");
var request = require('supertest');

describe('test server', function () {
    it('should be true', function () {
        should(5).be.exactly(5).and.be.a.Number();
    });
});

describe('test router', function () {
    it('should return main page', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
    it('should return conversion data', function (done) {
        request(app)
            .get('/convert?base=EUR&target=USD&amount=100')
            .expect(200, done);
    });
    it('should return history data', function (done) {
        request(app)
            .get('/history')
            .expect(200, done);
    });
    it('should return scripts', function (done) {
        request(app)
            .get('/scripts/index.js')
            .expect(200, done);
    });
    it('should return static assets', function (done) {
        request(app)
            .get('/static/Arrow.png')
            .expect(200, done);
    });
    it('should return styles dir', function (done) {
        request(app)
            .get('/styles/index.css')
            .expect(200, done);
    });
});

describe('test data validation', function () {
    it('should reject XSS injection (amount params)', function (done) {
        request(app)
            .get('/convert?amount="\<script src=\"...\">\""')
            .expect(400, done);
    });
    it('should reject XSS injection (base params)', function (done) {
        request(app)
            .get('/convert?base="\<script src=\"...\">\""')
            .expect(400, done);
    });
    it('should reject XSS injection (target params)', function (done) {
        request(app)
            .get('/convert?target="\<script src=\"...\">\""')
            .expect(400, done);
    });
    it('should reject non-nummeric amount', function (done) {
        request(app)
            .get('/convert?amount=abcd&base=EUR&target=USD')
            .expect(400, done);
    });
    it('should reject invalid base currency', function (done) {
        request(app)
            .get('/convert?amount=100&base=JPY&target=EUR')
            .expect(400, done);
    });
    it('should reject invalid target currency', function (done) {
        request(app)
            .get('/convert?amount=100&base=EUR&target=RMB')
            .expect(400, done);
    });
});