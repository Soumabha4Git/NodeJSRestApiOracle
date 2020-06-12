let connection;
var oracledb = require('oracledb');
var beautify = require("json-beautify");


var tempResultJson = '';



function dbConnectFunc(sqlQuery,callback) {
	var resultJson = '' ;
	
	
	try {	

			connection = oracledb.getConnection( {
				user: 'ora_user',
				password: 'ora_password',
				connectString: 'localhost/orcl'
			}, function (err, connection) {
				if (err) {
					reject(err);
					return;
				}
				connection.execute(
					sqlQuery,					
					function (err, result) {
						if (err) {
							console.error(err);
							return;
						}
						for (var i = 0; i < result.rows.length; i++) { 						
								tempResultJson = tempResultJson+'{\"id\" : \"'+result.rows[i][0]+'\" , \"courseName\" : \"'+result.rows[i][1]+'\" , \"rating\" : \"'+result.rows[i][2]+'\" , \"price\" : \"'+result.rows[i][3]+'\" , \"trainerName\" : \"'+result.rows[i][4]+'\" , \"numberOfDays\" : \"'+ result.rows[i][5] + '\"},';
								/*
                                tempResultJson = { 
                                    id: result.rows[i][0],
                                    courseName: result.rows[i][1], 
                                    rating:result.rows[i][2],
                                    price:result.rows[i][3],
                                    trainerName:result.rows[i][4],
                                    numberOfDays:result.rows[i][5]
                                };
									
                                tempResultJson = tempResultJson + JSON.stringify(tempResultJson)+","; 
                                console.log(` tempResultJson is ${tempResultJson}`);
								*/
                            } 
                        resultJson = `[ ${tempResultJson.substring(0,tempResultJson.length-1)} ]`;				 
						 // resultJson = JSON.stringify(resultJson);                         
						 // console.log(` resultJson is ${resultJson}`);
						 tempResultJson = '';
						callback(resultJson) ;						 
					}
					
					);
					
			});
			console.log("Successfully connected to Oracle!");
			
			return resultJson;
			
			
		} catch (err) {
			console.log("Error: ", err);
		} finally {
			if (connection) {
				try {    
					 connection.close();                
				} catch (err) {
					console.log("Error when closing the database connection: ", err);
				}
			}
		}


	
	
}

exports.dbConnectFunc = dbConnectFunc;