'use strict';
const express = require ('express');
const hbs = require ('hbs');
const path = require ('path');
const requests = require('./requests');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine','hbs');                                       //setup for handlebars --> include it!
app.set('views',path.join(__dirname, '../templates/views'));        //setup for handlebars --> set the views dir to be called templates!
hbs.registerPartials(path.join(__dirname, '../templates/partials'));//setup for handlebars --> set the partials dir
app.use(express.static(path.join(__dirname, '../public')));         //setup for static dir to serve, e.g. the public folder...

app.get('', (req, res)=>{
  res.render('index', {
    title: 'Weather App',
    name: 'PIY'
  })
});

app.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About me',
    texts: ['I am a very dedicated dev!']
  })
});

app.get('/help', (req, res)=>{
  res.render('help', {
    title: 'Help is on the way!',
    texts: ['We are more than glad to help you out! Here are some FAQs, but ' +
    'should you struggle to find an answer, then by all means contact us ' +
    'with the form below!', 'Still confused? Drop us a line below...']
  })
});

app.get('/weather', (req, res)=>{
  if(!req.query.address){
    return res.send({error: 'No address provided!'});
  }
requests.geocode(req.query.address, (err, geoLocation)=>{
  if (err) return res.send({error: err});

  requests.forecast(geoLocation, (err, forecast)=>{
    if (err) return res.send({error: err});
    res.send({forecast, address: `longitude: ${geoLocation.longitude.toFixed(2)}, latitude: ${geoLocation.latitude.toFixed(2)}`})
  });

  });
});

app.get('*', (req, res)=>{
  res.render('404', {
    title: 'Oops... we failed to match this one!',
    subtitle: 'Our server returned a 404 status code of not found!',
    credit: 'Image credit: '
  })
});

app.listen(port, ()=> console.log(`started correctly on ${port}!`));