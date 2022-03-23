const path = require('path');
const fs = require('fs');
const request = require('request');

const datapath = path.join(__dirname, '../chirps.json');

let chirpArray = [
    {name: 'Reid', chirp: 'green'},
    {name: 'Garrett', chirp: 'purple'},
    {name: 'Haylee', chirp: 'violet'},
    {name: 'Josh', chirp: 'yellow'},
    {name: 'Roderick', chirp: 'pink'}
]

let data = JSON.stringify(chirpArray);

fs.writeFile(datapath, data, (err) => {
    console.log(err);
});