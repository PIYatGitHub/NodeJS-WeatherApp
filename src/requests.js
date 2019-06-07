const request = require('request');

const geocode = (address, cb) => {
  const g_coding_config = {
      baseUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
      params:`access_token=${'your-token-here'}&limit=1`
    },
    geo_coding = `${g_coding_config.baseUrl}/${address}.json?${g_coding_config.params}`;
  request({url:geo_coding, json:true},(err, res)=>{
    if       (err)                       cb('Unable to connect to the location service...', undefined);
    else if  (!res.body.features.length) cb('apparently you did enter the wrong thing..., please check your input carefully', undefined);
    else {
      cb(undefined,
        { latitude:    res.body.features[0].center[1],
          longitude:  res.body.features[0].center[0],
          location:   res.body.features[0].place_name
        });
    }
  });

};

const forecast = (data, cb) =>{
  const d_sky_config = {
    baseUrl: 'https://api.darksky.net/forecast',
    key: 'your-key-here',
    long: data.longitude,
    lat:  data.latitude,
    params:'units=si'
  },
  dark_sky = `${d_sky_config.baseUrl}/${d_sky_config.key}/${d_sky_config.lat},${d_sky_config.long}?${d_sky_config.params}`;
  request({url:dark_sky, json:true},(err, res)=>{
  if       (err)            cb('unable to connect to the weather service...', undefined);
  else if  (res.body.error) cb('apparently you did enter the wrong thing..., please check your input carefully', undefined);
  else                      cb(undefined, `${res.body.daily.data[0].summary} It is currently ${res.body.currently.temperature} degrees outside with wind @ ${res.body.currently.windSpeed}km/h.\r\n` +
                            `Humidity is: ${res.body.currently.humidity} and the pressure is: ${res.body.currently.pressure} hPa.\r\n` +
                            `Today, the  highest temperature will be ${res.body.daily.data[0].temperatureHigh}C, and the lowest will be ${res.body.daily.data[0].temperatureLow}C.`);
});

};

module.exports = {
  geocode,
  forecast
};
