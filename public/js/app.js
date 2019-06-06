'use strict';
const url = 'http://localhost:3000/weather?address=';
let address = '';

const weatherForm = document.getElementById('weatherSearch'),
      searchTerm = document.getElementById('searchTerm');
let   msg1=document.getElementById('msg-1'),
      msg2=document.getElementById('msg-2');

weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  msg1.textContent = 'Loading...';
  address = searchTerm.value;
  fetch(url+address).then((response)=>{
    response.json().then((data)=>{
      if (data.error) {
        msg1.textContent = 'An error occurred:' + data.error;
      } else {
        msg1.textContent = 'Weather forecast:' + data.forecast;
        msg2.textContent = data.address;
      }
    });
  });
});