"use strict";

const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
    response.render("home");
});

module.exports = router;