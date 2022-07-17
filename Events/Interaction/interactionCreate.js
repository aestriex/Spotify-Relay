const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

/**
 * @param {CommandInteraction} interaction
 * @param {Client} client
 */
module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor("RED")
                        .setDescription("Error while executing command.")
                ]
            }) && client.commands.delete(interaction.commandName);

            command.execute(interaction, client)
        }
    }


}