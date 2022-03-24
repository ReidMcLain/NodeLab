const path = require('path');
const fs = require('fs');

let chirpArray = [
    {name: 'Reid', chirp: 'green'},
    {name: 'Garrett', chirp: 'purple'},
    {name: 'Haylee', chirp: 'violet'},
    {name: 'Josh', chirp: 'yellow'},
    {name: 'Roderick', chirp: 'pink'}
]

const datapath = path.join(__dirname, '../chirps.json');
const data = JSON.stringify(chirpArray);

fs.writeFileSync(datapath, data);

const chirpsFromFile = fs.readFileSync(datapath);

console.log(JSON.parse(chirpsFromFile));