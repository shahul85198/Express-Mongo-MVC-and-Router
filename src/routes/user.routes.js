const express = require("express");
const userrouter = express.Router();
const controller = require("../controllers/user.controller.js")
//const User = require('../models/user.model.js')

//userrouter.get('/', (req,res) => {
  //  return controller.getallusers(req,res);
//})

userrouter.get('/', controller.getallusers);
userrouter.get('/:userid', controller.getuserdetails)
userrouter.post('/', controller.createuser);
userrouter.put('/', controller.updateuser);
userrouter.delete('/userid', controller.deleteuser);


userrouter.post('/login',controller.login)

module.exports = userrouter;


/*
userrouter.post('/login', function(req, res) {
   return res.send("LOGIN API WORKING")
})
*/




/*
userrouter
   .get('/', (req, res) => res.send("user get response"))

userrouter
   .post('/', (req, res) => res.send("user post response"))

userrouter
   .put('/', (req, res) => res.send("user put response"))

userrouter
   .delete('/', (req, res) => res.send("user delete response"))

*/




