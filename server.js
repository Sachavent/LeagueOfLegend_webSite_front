// server.js
const express = require('express');
const app = express();
const path = require('path');

/**
 * Resolving the problem of "No Access allow origin"
 */
/*app.get('/*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://lol-data-angular2.herokuapp.com/');
    res.header('Access-Control-Allow-Credentials', true);
    next();
}
);*/

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
    res.header('Access-Control-Allow-Credentials', true);

    res.sendFile(path.join(__dirname + '/dist/index.html'));

});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200);