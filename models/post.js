let connection;
var oracledb = require('oracledb');

// oracledb.autoCommit = true;

function dbConnectFunc(sqlQuery,callback) {
	var resultJson = 'tryresultJson' ;
	try {
		connection = oracledb.getConnection( {
			user: 'ora_user',
			password: 'ora_password',
			connectString: 'localhost/orcl'
		}, function (err, connection) {
			if (err) {
				console.error(err);
				return;
			}
			connection.execute(
				sqlQuery,
				// {autoCommit: true},
				function (err, result) {
					if (err) {
						console.error(err);
						return;
					}					                    
					 resultJson = `[${result.rowsAffected}]`;					 
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