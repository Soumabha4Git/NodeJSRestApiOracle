
const express = require('express');
const router = express.Router();

const getModels = require('../models/get');
var sqlSelectByAllQuery = "SELECT ID, COURSE_NAME, RATING, PRICE, TRAINER_NAME, NUMBER_OF_DAYS FROM COURSES";



router.get('/all',(req,res) => {  
    sqlSelectQuery = `${sqlSelectByAllQuery}  ORDER BY TO_NUMBER(ID)`  
    getModels.dbConnectFunc(sqlSelectQuery,(resultJson) => {  
        tempResultJson = JSON.parse(resultJson);          
        // res.send(JSON.stringify(tempResultJson));
        res.json(tempResultJson);
    });
})


router.get('/:id',(req,res) => {
    sqlSelectByIdQuery = `${sqlSelectByAllQuery}  WHERE ID =  '${req.params.id}'`;
    console.log(sqlSelectByIdQuery);
    getModels.dbConnectFunc(sqlSelectByIdQuery,(resultJson) => {  
        tempResultJson = JSON.parse(resultJson);          
        // res.send(JSON.stringify(tempResultJson));
        res.json(tempResultJson);
    });
    
})


module.exports = router;