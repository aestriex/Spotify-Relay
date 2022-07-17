const { Schema, model } = require("mongoose");

module.exports = model("ModlogChannel", new Schema({
    GuildID: String,
    ModlogChannel: String,
}))