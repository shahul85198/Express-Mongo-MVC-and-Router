const mongoose = require("mongoose");
/*
Users
----------------------------------------------------------------
name (String)   |   email (String)    | isActive (Boolean)
----------------------------------------------------------------

const schema = new mongoose.Schema({
  name: String,
  email: String,
  isActive: Boolean
})

const profileSchema = new mongoose.Schema({
  pic: 'String',
  address: 'string'
  userId: 'Number'
})

mongoose.model('User', schema);
mongoose.model('UserProfile', schema);
*/

const UserSchema = new mongoose.Schema({
  name: 'String',
  email: 'String',
  isActive: 'Boolean'
});                       
const user = mongoose.model('User', UserSchema);
module.exports = user;
 
 
 
 
 /*const mongoose = require("mongoose");
//const types = mongoose.SchemaType;
const Userschema = new mongoose.Schema({
    name: 'string',          //   name:types.string
    email: 'string',           //email: types.string,
    isactive: 'boolean'
});

//schema to match models

const User = mongoose.model('User', Userschema)

module.exports = User;
*/

/*
const schema = new mongoose.schema({
    name: string,
    email: string,
    isactive: boolean
})

const proffileschema = new mongoose.schema({
    pic: string,
    address: 'string',
    userid: 'number'
})

mongoose.model('user', schema);
mongoose.model('userprofile', schema);

*/
