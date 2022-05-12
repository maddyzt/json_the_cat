const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  let newUrl = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName.toString();

  request(newUrl, (error, response, body) => {
    if (error) {
      callback(error);
    }

    const data = JSON.parse(body);

    if (!data[0]) {
      callback(error, "breed not found");
    } else {
      for (let i of data) {
        callback(null, i.description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };