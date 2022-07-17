const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Fetch the latency of the bot.",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({ content: `:ping_pong: Pong!\nLatency: ${interaction.createdAt / interaction.createdTimestamp}ms`, ephemeral: true });
    }
}