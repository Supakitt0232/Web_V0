var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt')
const saltRound = 10
var jwt = require('jsonwebtoken')
const tksecret = 'PreProject'

app.use(cors())

const mysql = require('mysql2')

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'test_pre'
})

app.post('/register',jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password,saltRound,function(err,hash){
    connection.execute(
      'INSERT INTO users (name,surname,username,email,password,user_role) VALUE (?,?,?,?,?,?)', 
      [req.body.name,req.body.surname,req.body.username,req.body.email,hash,req.body.user_role],
      function(err,result,fields){
        if(err) {
          res.json({status:'error ',message :err})
          return
        }
        res.json({status:'ok'})
      }
    )
  })
})

app.post('/login',jsonParser, function (req, res, next) {
  connection.execute(
    'SELECT * from users WHERE username = ?', 
    [req.body.username],
    function(err,users,fields){
      if(err) {
        res.json({status:'error ',message :err})
        return
      }
      if (users.length == 0) {
        res.json({status:'error ',message : 'No user found'})
      }
      bcrypt.compare(req.body.password,users[0].password,function(err,isLogin){
        if (isLogin){
          var token = jwt.sign({username:users[0].username},tksecret,{expiresIn: '1h'})
          res.json({status:'ok',message:'Login Success',token})
        }
        else{
          res.json({status:'ok',message:'Login Failed'})
        }
      })
    }
  )
})

app.post('/authen',jsonParser, function (req, res, next) {
  try{
    const token = req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(token,tksecret)
    res.json({status: 'ok',decoded})
  } catch(err) {
    res.json({status: 'error',message: err.message})
  }
  
})


app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})