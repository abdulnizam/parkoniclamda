'use strict'

if (!global._babelPolyfill) {
   require('babel-polyfill')
}

var config = require("./db_config.js")

export const users = (event, context, callback) => {
  var connection = config.connection(event)
  connection.connect()
  
  var query="SELECT * FROM users"
  console.info(connection);
  connection.query(query,function(err,rows) {
      const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: 'DB Configure',
            input: rows,
          }),
      }
      
      context.succeed(response)

  })

    
}