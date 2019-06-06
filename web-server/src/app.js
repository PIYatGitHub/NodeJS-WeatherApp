'use strict';
const express = require ('express');
const path = require ('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.get('/weather', (req, res)=>{
  res.send('Your weather view...');
});

app.listen(3000, ()=> console.log('started correctly on 3000!'));