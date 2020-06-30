# pickar-currency-converter

A full-stack development code challenge from pickar. Develop a currency converter for EUR-CHR-USD with conversion history log. The exchange rate is queried from exchangeratesapi.io's free API and is updated hourly.

## stats
[![Build Status](https://travis-ci.org/Fujihita/pickar-currency-converter.svg?branch=master)](https://travis-ci.org/Fujihita/pickar-currency-converter)
[![codecov](https://codecov.io/gh/Fujihita/pickar-currency-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/Fujihita/pickar-currency-converter)

Version: 0.1.1

Project started: Sunday 28 June 2020

Project published: Monday 29 June 2020

Status: Completed

## webstack
* Back-end: Nodejs, Expressjs
* Front-end: Vuejs, HTML/CSS
* Test suite: Mocha, Istanbul/Nyc, Codecov, TravisCI
* Database: MongoDB

## build
Download the source code, cd into it and run npm

```
npm install
```
```
npm start
```
The webapp should be accessible on http://localhost:3000
A local instance of mongodb server on the default address mongodb://localhost:27017 is required for logging functionalities.

## backlog (by priority)
* ~~Vuejs data bind conversion result UI.~~
* ~~Vuejs client-side routing.~~
* ~~Implement conversion history query API.~~
* ~~Code conversion history UI design + Vuejs data binding.~~
* ~~Set up a database + necessary connectors (SQL/Mongodb).~~
* ~~Improve client-side input validation to limit invalid input spam.~~
* ~~Set up devop pipeline to github (travis + codecov).~~
* ~~Set up a periodic worker to update internal exchange rate cache every hour.~~
* Set up devop for front-end Vuejs interface.
* Adapt converter's CSS to support mobile screen sizes.