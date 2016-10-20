"use strict";

const config = Object.freeze({
    port: 8080,
    host: "localhost",
    callback: serverSetupMesage
});

function serverSetupMesage() {
    console.log(`
        Application server was started.
        Application server is listening at ${config.host}:${config.port}.
    `);
}

module.exports = config;