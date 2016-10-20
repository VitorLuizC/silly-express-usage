"use strict";

const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const config = require("./config");
const router = require("./router");

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "pug");

app.use("/", router);

server.listen(config.server.port, config.server.host, config.server.callback);
