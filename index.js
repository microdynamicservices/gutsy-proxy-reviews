require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');

const port = process.env.PORT || 3004;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/dist')));


app.listen(port);