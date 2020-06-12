const express = require('express');
const router = express.Router();


const putModels = require('../models/put');

var sqlUpdateQuery = '';

router.put('/:id',(req,res) => {    
    sqlUpdateQuery = `UPDATE COURSES SET COURSE_NAME = '${req.body.courseName}' , RATING= '${req.body.rating}' , PRICE = '${req.body.price}' , TRAINER_NAME = '${req.body.trainerName}' , NUMBER_OF_DAYS = '${req.body.numberOfDays}'  WHERE ID =  '${req.params.id}'`;
    console.log(sqlUpdateQuery);    
    putModels.dbConnectFunc(sqlUpdateQuery, (resultJson) => {  
        tempResultJson = resultJson;  
        console.log('Number of inserted rows is '+tempResultJson);   
      });
      res.send(req.body);
})


module.exports = router;