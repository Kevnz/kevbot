'use scrict';

require('babel/register');

const server = require('./api');

server.listen(process.env.PORT || 4545, function () {
    console.log('%s listening at %s', server.name, server.url);
});
