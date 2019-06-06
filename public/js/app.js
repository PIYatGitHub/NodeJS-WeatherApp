'use strict';

const url = 'http://localhost:3000/weather?',
address = 'address=Sofia,Bulgaria';

fetch(url+address).then((response)=>{
  response.json().then((data)=>{
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data)
    }

  });
});