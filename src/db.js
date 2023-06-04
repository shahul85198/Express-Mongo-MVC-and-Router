const mongoose = require("mongoose");

//mongodb://localhost:27017
// url -> mongodb://server:port/collectionname

function dbintilializer() {
mongoose
.connect("mongodb://localhost:27017/mern")
.then(()=> {
    console.log('MONGODB connected')
}).catch(error => console.error(error))
}

module.exports = {
    dbintilializer
}
