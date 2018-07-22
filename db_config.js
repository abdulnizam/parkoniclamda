var mysql      = require('mysql')

var connection_info = function (event) {
  	if(event.principalId)
	{
		$connection_info = {
		    host     : 'localhost',
		  	port     : '3306',
		    user     : 'valtrans',
		    password : 'valtrans@123',
		    database : 'parkonic_dev'
		}

	} else {
		$connection_info = {
		    host     : 'valtransdb.cqlt28njzgkt.eu-west-1.rds.amazonaws.com',
		    user     : 'valtransDB',
		    password : 'ValTrans17',
		    database: 'parkonic_dev'
		}
	}

	return $connection_info;
}


exports.connection = ( event ) => {
	return mysql.createConnection(connection_info(event))
}

// connection.connect()
// exports.connection = connection