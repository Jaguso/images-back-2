const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./api/routes/users');
const pictureRoutes = require('./api/routes/pictures');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);
app.use('/pictures', pictureRoutes);


module.exports = app;