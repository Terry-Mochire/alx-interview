#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2] + '/';

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const characters = data.characters;
    console.log(characters);
    printCharacters(characters);
  }
});

function printCharacters (characters) {
  for (let i = 0; i < characters.length; i++) {
    request(characters[i], function (error, response, body) {
      if (error) {
        console.log(error);
      } else {
        const data = JSON.parse(response.body);
        console.log(data.name);
      }
    });
  }
}
