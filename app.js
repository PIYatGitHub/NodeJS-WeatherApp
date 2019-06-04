'use strict';
const requests = require('./requests');

const d_sky_config = {
  baseUrl: 'https://api.darksky.net/forecast',
  key: '3a5eff48956d3831f67dab05b8fda0d7',
  long: '-122.73',
  lat:'37.8267',
  params:''
};

const dark_sky = `${d_sky_config.baseUrl}/${d_sky_config.key}/${d_sky_config.lat},${d_sky_config.long}?${d_sky_config.params}`;

// request({url:dark_sky, json:true},(err, res)=>{
//   if       (err)            console.log('unable to connect to the weather service...');
//   else if  (res.body.error) console.log('apparently you did enter the wrong thing..., please check your input carefully');
//   else                      console.log(res.body.currently);
// });

requests.geocode('Sofia, Bulgaria', (err, data)=>{
  console.log('err?', err);
  console.log('data:', data);
});