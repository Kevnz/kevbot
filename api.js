'use strict';

const restify = require('restify');

const server = restify.createServer();

const weather = require('weather');

server.use(restify.queryParser());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

server.get('/noregrests', (req, res) => {

 
 weather({location: 'Honolulu, Hawaii'}, (data) {
   if (data.temp > 30) {
     console.log("Damn it's hot!");
   }
 });
    res.json(200,  data);
});

 



export default server;