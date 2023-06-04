


const user = require("../models/user.model.js");


function getallusers(req, res) {

    user.find({})
    .then(rows => res.json(rows))
    .catch(err => res.json({ status: "fail"}))
   // return res.send("get all users API")
}

function getuserdetails(req,res) {
  const id = req.params.userid;
  user.findById(id)
  .then(row => {
    if(!row) {
        return res.json({status: "fail"})
    }
    res.json(row)
  })
  .catch(err => res.json({ status: "fail"}))
}

function createuser(req, res) {
    const body = req.body;
    if(!body.emaol) {
        return res.status(400).send("email is required")
    }
    const user = new User({
        email: body.email,
        name: body.name
    });
    user.save().then(dbuser => res.send(dbuser))
    .catch(err => res.status(400).send(err))
   // return res.send("post create user")
}

function updateuser(req,res) {
    return res.send("update user data")
}

function deleteuser(req,res) {
    const id = req.params.userid;
    user
    .findByIdAndRemove(id)
    .then(value => res.send("user delete"))
    .catch(err => res.send("user not find"))
    return res.send("delete user data");
}

 function login (req,res) {
    const body = req.body;
    //const email = body.email
    if(!body.email) {
     return res.status(400).send("email is required..")
    }
    
    User.findOne({email})
    .then(value => {
     if(!value) {
         return res.status(400).send(`${email} is not found`)
     }
     res.send(value);
    })
    .catch(err => res.send(err))
 
     return res.send(`API WORKING FINE ${email}`)
 }

module.exports = {
    getallusers,
    createuser,
    updateuser,
    deleteuser,
    getuserdetails,
    login
}