

const express = require('express');

const app = express();

require('../barbersync_App/routes')(app);

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});