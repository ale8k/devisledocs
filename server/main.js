// Importing Packages
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importing and Setting up Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/devisledocs');

// Importing Routes
const tutorials = require("./routes/tutorials");
const users = require("./routes/users")

// Enable cors for all requests
app.use(cors());

// Main App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(cookieParser());
// app.use(session({secret: "Your secret key"}));

app.use("/tutorials", tutorials);
app.use("/users", users);

app.listen(5000);


