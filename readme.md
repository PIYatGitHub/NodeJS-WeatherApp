## The weather app
This app uses async web requests to get your data and show it to you via the browser. 
It will provide the simplest of UI so that you don't get confused... 

### Getting started for users
Initially the app runs @ the terminal, but the final version will come with a nice url and everything. 
So what you need to do is simply type in your address at the field provided and see the
forecast for it. 
<br>
Example input: Sofia
<br>
Please do note that only the top result of the search is returned, so if you see something
weird or mismatching, then you may need to change the search to something more precise,
for example: Sofia, Bulgaria. 
<br>
So all you really need to do is visit the following link: and get it done! 
<br>
<b>Enjoy!</b>

### Getting started for devs
If you want to run this application, you will have to register at the dark sky web api and the map box web
api at the following links: 
<br>
DarkSky: https://darksky.net
<br>
MapBox: https://www.mapbox.com/
<br> 
If you see some API keys I left during development, just assume they are all invalid by the time you get to them.
<br>
Once you get your API keys simply replace the mocked keys in the following snippets, 
located at the requests.js file in the utils folder: 
```
   const g_coding_config = {
      baseUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
      params:`access_token=${'your-token-here'}&limit=1`
    },
   
   const d_sky_config = {
       baseUrl: 'https://api.darksky.net/forecast',
       key: 'your key-here',
       long: data.longitude,
       lat:  data.latitude,
       params:'units=si'
     },
```
Naturally, do not forget to run the good old ``npm install`` command as you will 
need some node modules to get it all working. 
