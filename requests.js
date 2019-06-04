const request = require('request');

const geocode = (address, cb) => {
  const g_coding_config = {
      baseUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
      params:`access_token=${'pk.eyJ1Ijoic2V3Ym90IiwiYSI6ImNqd2htbDEwbTF6amozeW51dndobDhnZ3QifQ.GchJ-b6ohzKuedU8VGs4mA'}&limit=1`
    },
    geo_coding = `${g_coding_config.baseUrl}/${address}.json?${g_coding_config.params}`;
  request({url:geo_coding, json:true},(err, res)=>{
    if       (err)                       cb('Unable to connect to the location service...', undefined);
    else if  (!res.body.features.length) cb('apparently you did enter the wrong thing..., please check your input carefully', undefined);
    else{
      cb(undefined,
        {latitude:    res.body.features[0].center[0],
          longitude:  res.body.features[0].center[1],
          location:   res.body.features[0].place_name
        });
    }
  });

};

const forecast = (data, cb) =>{
  const d_sky_config = {
    baseUrl: 'https://api.darksky.net/forecast',
    key: '3a5eff48956d3831f67dab05b8fda0d7',
    long: data.longitude,
    lat:  data.latitude,
    params:''
  },
    dark_sky = `${d_sky_config.baseUrl}/${d_sky_config.key}/${d_sky_config.lat},${d_sky_config.long}?${d_sky_config.params}`;
  request({url:dark_sky, json:true},(err, res)=>{
  if       (err)            cb('unable to connect to the weather service...', undefined);
  else if  (res.body.error) cb('apparently you did enter the wrong thing..., please check your input carefully', undefined);
  else                      cb(undefined, res.body.currently);
});

};

module.exports = {
  geocode,
  forecast
};
