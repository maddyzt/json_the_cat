const request = require('request');
const argArray = process.argv.slice(2);
const breed = argArray[0];

let newUrl = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed.toString();

request(newUrl, (error, response, body) => {
  if (error) {
    console.log("error: ", error);
  };
  
  const data = JSON.parse(body);

  for (let i of data) {
    console.log(i);
  };


});
