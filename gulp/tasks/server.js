var gulp = require('gulp');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 2020;
const app = express();

var options = require('../config').server;

// must specify options hash even if no options provided!

module.exports = function() {


    // serve static assets normally
    app.use(express.static(options.dest));

    console.log(options.dest + "/api/");

    //app.use(options.css.root, express.static(options.css.dest));
    //app.use(options.js.root, express.static(options.js.dest));

    // passing through html requests
    app.get('*:file.html', function (request, response){
        var file = request.params.file;
        response.sendFile(path.resolve(options.dest, '', file + ".html"));
    });
    // passing through ico requests
    app.get('*:file.ico', function (request, response){
        var file = request.params.file;
        response.sendFile(path.resolve(options.dest, '', file + ".ico"));
    });
    // passing through css requests
    app.get('*:file.css', function (request, response){
      var file = request.params.file;
      response.sendFile(path.resolve(options.dest, options.css.root, file + ".css"));
    });
    // passing through JS directory requests
    app.get('*:file.js', function (request, response){
      var file = request.params.file;
      response.sendFile(path.resolve(options.dest, options.js.root, file + ".js"));
    });

    // passing through resources directory
    app.get(options.resources.root + '/*/:file', function (request, response){
        var file = request.params["0"] + "/" + request.params.file;
        console.log(file);
        response.sendFile(path.resolve(options.dest, options.resources.root, file));
    });

    // I am passing all other requests through to the main / route which will have the react Router handle
    app.get('*', function (request, response){

      // toggle the line below if you want to test the header api injection locally !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //response.setHeader("api-endpoint", "http://fssharttla01.ground.fedex.com/");

      response.sendFile(path.resolve(options.dest, '', 'index.html'))
    });

    app.listen(port);
    console.log("server started on port " + port);

};
