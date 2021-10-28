
const express = require ('express');
const path = require ('path');
const app = express();
const pathToIndex = path.resolve(__dirname, '../client/index.html');
app.use('/*',()=>
{'help'})
module.exports = app;

