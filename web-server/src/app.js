'use strict';
const express = require ('express');
const path = require ('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.get('/about', (req, res)=>{
  res.send('About us...');
});

app.get('/help', (req, res)=>{
  res.send('Need some help? We have you covered!');
});

app.get('/weather', (req, res)=>{
  res.send('Your weather view...');
});

app.listen(3000, ()=> console.log('started correctly on 3000!'));