'use strict';
const express = require ('express');
const path = require ('path');

const app = express();
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res)=>{
  res.render('index', {
    title: 'Weather App',
    name: 'PIY'
  })
});

app.get('/weather', (req, res)=>{
  res.send('Your weather view...');
});

app.listen(3000, ()=> console.log('started correctly on 3000!'));