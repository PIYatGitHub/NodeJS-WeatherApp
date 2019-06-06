'use strict';
const express = require ('express');
const path = require ('path');
const app = express();

app.set('view engine','hbs');                               //setup for handlebars
app.set('views',path.join(__dirname, '../templates'));      //setup for handlebars
app.use(express.static(path.join(__dirname, '../public'))); //setup for static dir to serve!

app.get('', (req, res)=>{
  res.render('index', {
    title: 'Weather App',
    name: 'PIY'
  })
});

app.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About us',
    texts: ['We are a small, but very busy weather app site. Hope you enjoy our service!']
  })
});

app.get('/help', (req, res)=>{
  res.render('help', {
    title: 'Help is on the way!',
    texts: ['We are more than glad to help you out! Here are some FAQs, but ' +
    'should you struggle to find an answer, then by all means contact us' +
    'with the form below!']
  })
});

app.get('/weather', (req, res)=>{
  res.send('Your weather view...');
});

app.listen(3000, ()=> console.log('started correctly on 3000!'));