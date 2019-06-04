'use strict';
const request = require('request');
const url = 'https://api.darksky.net/forecast/3a5eff48956d3831f67dab05b8fda0d7/37.8267,-122.4233'

request({url},(err, res)=>{
  console.log(res);
});