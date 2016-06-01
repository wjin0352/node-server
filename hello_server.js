var express = require('express');

var app = express();

// For this project you should write an HTTP server which returns information about the HTTP request, encoded as JSON. In order to get the necessary information you may need to review the IncomingMessage documentation. The Request object inherits from IncomingMessage.


app.get('/', function(request, response) {
  // console.log(request.headers);
  console.log(request);

  response.json({
    name: 'Kim, Gordon',
    instrument: 'Bass'
  });
  // response.send("Hello world");
});

// When you visit /headers the server should return an object containing the request headers.
app.get('/headers', function(request, response) {
  var requestHeaders = request.headers;

  response.json({
    req: requestHeaders
  });
});

// When you visit /headers/:header_name the server should return a string containing the contents of the specified header.
app.get('/headers/:header_name', function(request, response) {
  // console.log(request.params);
  var headerName = request.params.header_name;
  console.log(headerName);
  response.json({
    headerName: request.headers[headerName.toString()]
    // headerName: request.headers.headerName
  });
});

// When you visit /version the server should return a string containing the HTTP version of the request.
app.get('/version', function (request, response) {
  response.json({
    version: request.httpVersion
  })
});


app.get('/:firstname/:lastname', function(request, response) {
  var first = request.params.firstname;
  var last = request.params.lastname;
  response.send(["Hello", first, last].join(" "));
  console.log(request);
});

app.get('/:jedi/:firstname/:lastname', function(request, response) {
  var first = request.params.firstname.split('',2);
  var last = request.params.lastname.split('',3);
  var jedi_name = first.join('') + last.join('') ;
  response.send("Hello, " + jedi_name + ".");
  console.log(request);
});

app.listen(3000);


// app.listen(3000, function () {
//   console.log('hello world');
// });

// app.listen(process.env.PORT, process.env.IP);





