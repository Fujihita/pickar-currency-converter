# pickar-currency-converter

A full-stack development code challenge from pickar. Develop a currency converter for EUR-CHR-USD with conversion history log. The exchange rate is queried from exchangeratesapi.io's free API and is updated hourly.

## stats
[![Build Status](https://travis-ci.org/Fujihita/pickar-currency-converter.svg?branch=master)](https://travis-ci.org/Fujihita/pickar-currency-converter)
[![codecov](https://codecov.io/gh/Fujihita/pickar-currency-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/Fujihita/pickar-currency-converter)

Version: 1.0.0

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

A local instance of mongodb server on the default address mongodb://localhost:27017 is required for conversion history logging functionalities.

## screenshots
![Portrait converter](https://i.imgur.com/jM9xjeL.png)
![Landscape converter](https://i.imgur.com/AIVu7U6.png)
![Portrait history](https://i.imgur.com/Ulkt1Sa.png)
![Landscape history](https://i.imgur.com/Lx0TjTY.png)