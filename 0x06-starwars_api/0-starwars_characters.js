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
    printCharacters(characters, 0);
  }
});

function printCharacters (characters, index) {
    if (index < characters.length) {
        request(characters[index], function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            const data = JSON.parse(body);
            console.log(data.name);
            printCharacters(characters, index + 1);
        }
        });
    }
}
