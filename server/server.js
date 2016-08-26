// TODO: gzip & svg compression on static resources?
var express = require('express');
var app = express();
var http = require('http')
var server = http.Server(app);
var io = require('socket.io')(server);

// Socket IO setup
var socketPort = process.env.PORT || 3000;

server.listen(socketPort, function() {
  console.log('listening on *:' + socketPort);
});

io.on('connection', function(socket) {
  console.log('User Connected');
  io.emit('routes', routes);

  socket.on('disconnect', function() {
    console.log('User Disconnected');
  });

  // TODO: We need to have a list of all the stops, even though we mainly care
  // about the prediction data.
  socket.on('getScheduleByRoute', function(route) {
    var sendSchedule = processResponse(function(responseJson) {
      scheduleByRoute[route] = responseJson;
      io.emit('scheduleByRoute', responseJson);
    });
    http.request(apiOptionsFactory('schedulebyroute', '&route=' + route), sendSchedule).end();
  });
});

// MBTA API
// Encapsulate this shit yo
var routes = {};
var scheduleByRoute = {};
var API_PARAMS = {
  key: 'wX9NwuHnZU2ToO7GmGR9uw',
  format: 'json'
};

var apiOptionsFactory = function(apiTarget, additionalParams) {
  additionalParams = additionalParams || '';
  return {
    host: 'realtime.mbta.com',
    path: '/developer/api/v2/' + apiTarget + '/?api_key=' + API_PARAMS.key + '&format=' + API_PARAMS.format + additionalParams
  };
}

var processRoutes = processResponse(function(responseJson) {
  routes = responseJson;
});

function processResponse(callback) {
  return function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been recieved
    response.on('end', function () {
      console.log("Completed routes request.");
      callback(JSON.parse(str));
    });
  }
}

console.log("requesting routes...");
http.request(apiOptionsFactory('routes'), processRoutes).end();
