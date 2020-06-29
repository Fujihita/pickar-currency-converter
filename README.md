# pickar-currency-converter

A full-stack development code challenge from pickar. Develop a currency converter for EUR-CHR-USD with conversion history log. The exchange rate is queried from exchangeratesapi.io as oppose to their suggested currencylayer.com as the latter offers too limited API access with free subscription and the former is fully free.

## stats
[![Build Status](https://travis-ci.org/Fujihita/pickar-currency-converter.svg?branch=master)](https://travis-ci.org/Fujihita/pickar-currency-converter)
[![codecov](https://codecov.io/gh/Fujihita/pickar-currency-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/Fujihita/pickar-currency-converter)

Version: 0.0.5

Project started: Sunday 28 June 2020

Project published: Monday 29 June 2020

Status: In development

### webstack
* Back-end: Nodejs, Expressjs
* Front-end: Vuejs, HTML/CSS
* Test suite: Mocha, Supertest, Should, Nyc
* Database: N/A.

# build
Download the source code, cd into it and run npm

```
npm install
```
```
npm start
```
The site should be accessible on localhost:3000

### backlog (by priority)
* Vuejs data bind conversion result UI.
* Vuejs client-side routing.
* Implement conversion history query API.
* Code conversion history UI design + Vuejs data binding.
* Set up a database + necessary connectors (SQL/Mongodb).
* Improve client-side input validation to limit invalid input spam.
* ~~Set up devop pipeline to github (travis + codecov).~~
* ~~Set up a periodic worker to update internal exchange rate cache every hour.~~
* Adapt CSS to support mobile screen sizes (progressive webapp update)