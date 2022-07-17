const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Check the API Latency!",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({ content: `:ping_pong: Pong!\nLatency: ${interaction.createdAt / interaction.createdTimestamp}ms`, ephemeral: true });
    }
}