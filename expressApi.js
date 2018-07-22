if (!global._babelPolyfill) {
   require('babel-polyfill')
}

const serverless = require('serverless-http')
const express = require('express')
const app = express()
const tokens = require('./passport')
const passport = require('passport')
const Strategy = require('passport-http-bearer').Strategy
app.use(require('morgan')('combined'))

passport.use(new Strategy(
  function(token, cb) {
    tokens.findByToken(token, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      return cb(null, user);
    });
  }));

app.get('/', 
	function (req, res) {
	  res.send('Oauth2 is not Setup')
	})

app.get('/tests', 
	passport.authenticate('bearer', { session: false }),
	function (req, res) {
	  res.send('oauth2 is Setup')
	})

export const api = serverless(app)
