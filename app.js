const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    config = require('./config/server'),
    ejs = require('ejs'),
    fileUpload = require('express-fileupload')

// Set up EJS for rendering files and use response for local var storage in EJS
app.engine('html', ejs.renderFile);
ejs.localsName = 'response';

if (process.env.NODE_ENV === 'prod') {
    app.set('trust proxy', 1);
}

// Set up server parsing and logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (config) {
    app.use(morgan(config.logging));
}

app.use(fileUpload());

app.get('/', async function (req, res) {res.render('index.ejs');});

module.exports = app;