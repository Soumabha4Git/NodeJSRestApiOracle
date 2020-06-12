
const express = require('express');
const router = express.Router();

const deleteModels = require('../models/delete');
var sqlDeleteByIdQuery = '';

const getModels = require('../models/get');
var sqlSelectByIdQuery = '';

router.delete('/:id',(req,res) => {
  
    sqlSelectByIdQuery = `SELECT ID, COURSE_NAME, RATING, PRICE, TRAINER_NAME, NUMBER_OF_DAYS FROM COURSES  WHERE ID =  '${req.params.id}'`; 
    console.log(sqlSelectByIdQuery); 
    getModels.dbConnectFunc(sqlSelectByIdQuery,(resultJson) => {  
        tempResultJson = JSON.parse(resultJson);          
        res.json(tempResultJson);
    });

    sqlDeleteByIdQuery = `DELETE FROM COURSES WHERE ID =  '${req.params.id}'`;
    console.log(sqlDeleteByIdQuery);
    deleteModels.dbConnectFunc(sqlDeleteByIdQuery,(resultJson) => {  
        tempResultJson = resultJson;  
        console.log('Number of inserted rows is '+tempResultJson); 
    });
    ;
})

module.exports = router;