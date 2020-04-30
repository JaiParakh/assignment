const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/user');
const event = require('./routes/event');

app.use(bodyParser.json());

//const db = require('./config/keys').mongoURI;

mongoose.connect("mongodb://localhost:27017/Events");

mongoose.connection.on('connected', () => {
    console.log("Connected to mongodb");
});
const port = 5000;
app.use('/event', event);

app.use('/user', user);

app.listen(port, () => {
    console.log("Server is up");
});

