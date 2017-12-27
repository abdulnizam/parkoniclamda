const connection = require('../db_config.js');

var records = [
    { id: 1, username: 'jack', token: '123456789', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, username: 'jill', token: 'abcdefghi', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

exports.findByToken = function(token, cb) {

  var query   = `SELECT * from oauth_access_tokens where id = '${token}'`;

  connection.query(query,function(err,rows) {
     
    process.nextTick(function() {
      for (var i = 0, len = rows.length; i < len; i++) {
        var rows = rows[i];
        if (rows.id === token) {
          return cb(null, rows);
        }
      }
      return cb(null, null);
    });

  });


  
}
