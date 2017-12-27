'use strict'

if (!global._babelPolyfill) {
   require('babel-polyfill')
}

var connection = require("./db_config.js")

export const users = (event, context, callback) => {
  var query="SELECT * FROM users"

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