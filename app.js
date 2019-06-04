'use strict';
const requests = require('./requests');

requests.geocode('Sofia, Bulgaria', (err, data)=>{
  requests.forecast(data, (err, data)=> {
    console.log('err in forecast?', err);
    console.log('data in forecast?', data);
  });
});