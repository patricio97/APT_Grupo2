

const express = require('express');

const app = express();

require('./routes_api')(app);

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});