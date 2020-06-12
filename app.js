const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');


const getRoute = require('./routes/get');
const postRoute = require('./routes/post');
const putRoute = require('./routes/put');
const deleteRoute = require('./routes/delete');

app.use(bodyParser.json());

app.use('/get',getRoute);
app.use('/post',postRoute);
app.use('/put',putRoute);
app.use('/delete',deleteRoute);




app.listen(8083);