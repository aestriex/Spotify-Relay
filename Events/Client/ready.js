const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../config.json");

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    execute(client) {
        console.log("Client online!")

        if (!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Client is connected to the database.');
        }).catch(err => {
            console.log("Databse Intiation Error: " + err);
        });
    }
}