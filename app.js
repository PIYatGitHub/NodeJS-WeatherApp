'use strict';
const request = require('request');


const d_sky_config = {
  baseUrl: 'https://api.darksky.net/forecast',
  key: '3a5eff48956d3831f67dab05b8fda0d7',
  long: '-122.73',
  lat:'37.8267',
  params:''
},
  g_coding_config = {
  baseUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  place: 'Sofia, Bulgaria',
  params:`access_token=${'pk.eyJ1Ijoic2V3Ym90IiwiYSI6ImNqd2htbDEwbTF6amozeW51dndobDhnZ3QifQ.GchJ-b6ohzKuedU8VGs4mA'}&limit=1`
};


const dark_sky = `${d_sky_config.baseUrl}/${d_sky_config.key}/${d_sky_config.lat},${d_sky_config.long}?${d_sky_config.params}`;
const geo_coding = `${g_coding_config.baseUrl}/${g_coding_config.place}.json?${g_coding_config.params}`;

// request({url:dark_sky, json:true},(err, res)=>{
//   if       (err)            console.log('unable to connect to the weather service...');
//   else if  (res.body.error) console.log('apparently you did enter the wrong thing..., please check your input carefully');
//   else                      console.log(res.body.currently);
// });

request({url:geo_coding, json:true},(err, res)=>{
  if       (err)                       console.log('unable to connect to the location service...');
  else if  (!res.body.features.length) console.log('apparently you did enter the wrong thing..., please check your input carefully');
  else                                 console.log('latitude: ', res.body.features[0].center[0], 'longitude: ', res.body.features[0].center[1]);
});
