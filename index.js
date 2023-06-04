const express = require("express");
const app = express();
app.use(express.json());

const db = require("./src/db.js");
db.dbintilializer();

const userroutes = require("./src/routes/user.routes.js");
const userprofileroutes = require('./src/routes/userprofile.routes.js')
const user = require('./src/models/user.model.js');

app.use("/user", userroutes);
app.use('/profile', userprofileroutes)
app.listen(3000, () => {
    console.log('server is running..')
})











/*
app.get("/users",() => {});
app.post("/users", () => {});
app.put("/users/:username", () => {});
app.delete("/users/:username", () => {});

app.get("/usersprofiles",() => {});
app.post("/usersprofiles", () => {});
app.put("/usersprofiles/:username", () => {});
app.delete("/usersprofiles/:username", () => {});

app.get("/job",() => {});
app.post("/jobs", () => {});
app.put("/job/:jobid", () => {});
app.delete("/job/:jobid", () => {});

app.get("/products",() => {});
app.post("/products", () => {});
app.put("/products/:id", () => {});
app.delete("/products/:id", () => {});

*/

/*const express = require("express");
const app = express();
app.use(express.json())

app.get("/", (req, res) => res.json({

    status: 'ok',
    message: 'Api running..'
}))

app.post('/register', (req, res) => {
    const user = req.body;
    res.json({
        status: "ok",
        data: user
    });
})
app.listen(3000, () => {
    console.log('server is running')
})

/*app.post('/eendpot', () => {
    // data
    const data = req.body;
    //data validation
    ifa(!data.fn) {
        return res.status(400).json({})
    }
    if (!data.fn) {

    }
    // data insert in db
    debugger.query('insert data in some table')
        .then()
        .catch()
    //response send
})
*/
/*app.post('/another', () => {
    // data
    const data = req.body;
    //data validation
    ifa(!data.employid) {
        return res.status(400).json({})
    }
    if (!data.amount) {

    }
    // data insert in db
    debugger.query('insert data in some table')
        .then()
        .catch()
    //response send
})*/


