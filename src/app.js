const express = require('express'); 
const { route } = require('./routes');
const app =express();
const routes =require('./routes');

app.use(express.json());

app.use('/',routes);

module.exports=app;
