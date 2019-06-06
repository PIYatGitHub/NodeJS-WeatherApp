'use strict';
const url = 'http://localhost:3000/weather?address=';
let address = '';

const weatherForm = document.getElementById('weatherSearch'),
      searchTerm = document.getElementById('searchTerm');

weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  address = searchTerm.value;

  fetch(url+address).then((response)=>{
    response.json().then((data)=>{
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data)
      }
    });
  });

});


