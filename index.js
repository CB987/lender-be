require('dotenv').config();

const express = require('express'); 
const app = express(); 
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());