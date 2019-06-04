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

module.exports = {
  geocode:  geocode
};
