
const alter = require('./mod/alter');

require('dotenv').config();
const Q = require('@nmq/q/client');

const alterFile = (file) => {
 
  alter.readFile(file)
    .then(data => {
      alter.writeFile(file, alter.upper(data));
      Q.publish('files', 'save', {name: 'test'});
    })
    .catch(error => Q.publish('files','file-error', error));
};


let file = process.argv.slice(2).shift();
alterFile(file);