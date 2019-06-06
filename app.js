'use strict';
const requests = require('./utils/requests');
const address = process.argv[2];
if(address) {
  requests.geocode(address, (err, geolocation) => {
    if (err) return console.log(err);
    requests.forecast(geolocation, (err, forecast) => {
      if (err) return console.log(err);
      console.log(forecast)
    });
  });
}
else console.log('no address provided!');