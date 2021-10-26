var express = require('express');
var path = require('path');
const app = express();
const pathToIndex;
path.resolve(__dirname, '../client/index.html') = pathToIndex;
app.use('/*', function(req, res){
res.sendFile(pathToIndex)

})
module.exports= app;