const express = require("express");
const userprofilerouter = express.Router();

userprofilerouter
   .get('/', (req, res) => res.send("user profile get response"))

   userprofilerouter
   .post('/', (req, res) => res.send("user profile post response"))

   userprofilerouter
   .put('/', (req, res) => res.send("user profile put response"))

userprofilerouter
   .delete('/', (req, res) => res.send("user profile delete response"))

module.exports = userprofilerouter


