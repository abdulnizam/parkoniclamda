const connection = require('./db_config.js');

var loopCalculate = function (rows, token) {
  for (var i = 0, len = rows.length; i < len; i++) {
    var rows = rows[i];
    if (rows.id === token) {
      return rows;
    }
  }
  return null;
}

exports.findByToken = function(token, cb) {

  var query = `SELECT * from oauth_access_tokens where id = '${token}'`;

  connection.query(query,function(err,rows) {
    
    process.nextTick(function() {
      var res = loopCalculate(rows, token)
      return cb(null, res);
    });

  });
  
}
