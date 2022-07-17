const { Queue } = require("discord-player");

module.exports = {
    name: "queue",
    description: "Display the current queue.",
    execute(interaction, client) {
        Queue.map()
    }


};