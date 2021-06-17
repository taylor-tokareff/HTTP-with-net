const net = require('net');
const fs = require('fs');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const fsPromises = fs.promises;
const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if (request.path === '/' && request.method === 'GET') {
      socket.write(createResponse({ body: 'hi' }));
    }
    else if (request.path === '/echo' && request.method === 'POST') {
      socket.write(createResponse({ body: request.body, contentType: 'text/plain', status: '200 OK' })
      );
    }
    else if (request.path === '/red' && request.method === 'GET') {
      socket.write(createResponse({
        body: '<h1>red<h1>'
      })
      );
    }
    else if (request.path === '/green' && request.method === 'GET') {
      socket.write(createResponse({ body: '<h1>green<h1>' })
      );
    }
    else if (request.path === '/blue' && request.method === 'GET') {
      socket.write(createResponse({ body: '<h1>blue<h1>' })
      );
    }
    else if (request.path === '/index.html' && request.method === 'GET') {
      return fsPromises.readFile('./public/index.html', 'utf8')
        .then(data => socket.end(createResponse({ body: data, status: '200', contentType: 'text/html' })));
    }
    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });



});



module.exports = app;

// plan!!!
// use server that goes into a public folder and gets an index.html file and sends it's content as a response if no file is found return not found message
// write a test for the route that will fail because there is no route yet
//make the route that imports the fs api
// make the index.html file
//check to see test passes
//if passes celebrate!

