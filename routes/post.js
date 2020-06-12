const express = require('express');
const router = express.Router();

const postModels = require('../models/post');

var sqlInsertQuery = '';

router.post('/',(req,res) => {
    sqlInsertQuery = `INSERT INTO COURSES VALUES ( '${req.body.id}','${req.body.courseName}','${req.body.rating}','${req.body.price}','${req.body.trainerName}','${req.body.numberOfDays}'  )`;
    console.log(sqlInsertQuery);    
    postModels.dbConnectFunc(sqlInsertQuery, (resultJson) => {  
        tempResultJson = resultJson;  
        console.log('Number of inserted rows is '+tempResultJson);   
      });
      res.send(req.body);
})


module.exports = router;