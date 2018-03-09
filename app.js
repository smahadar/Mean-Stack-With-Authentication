const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', ()=> {
    console.log('connected to database' +config.database); 
})

//On error
mongoose.connection.on('error', (err) => {
    console.log('Database error:' +err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = process.env.PORT || 8080;

//CORS Middleware
app.use(cors());


//set static folder
app.use(express.static(path.join(__dirname, 'public')));


//body parser middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users );

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid EndPoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})
app.listen(port, () => {
    console.log('server started on port' +port);
});