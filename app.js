'use strict';
const requests = require('./requests');

requests.geocode('Sofia, Bulgaria', (err, geolocation)=>{
  if(err)return console.log(err);
  requests.forecast(geolocation, (err, forecast)=> {
    if(err)return console.log(err);
    console.log(forecast)
  });
});