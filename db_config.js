var mysql      = require('mysql')
var env = 'dev'

if(env == 'local')
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
var connection = mysql.createConnection($connection_info)

connection.connect()
module.exports = connection