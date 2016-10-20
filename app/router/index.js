"use strict";

const express = require("express");

const router = express.Router();

const home = require("./home.js"); 

router.use("/home", home);

router.get("/", (request, response) => response.redirect("/home"));

module.exports = router;
