const { CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    description: "Display a pane that details every command the bot offers.",
    /**
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const helpPane = new MessageEmbed()
            .setTitle("Spotify Relay - Commands")
            .setDescription("Spotify Relay is a bot allowing users to listen to their favorite songs and podcasts via Discord.");
            // ADD COLOR
    
        const helpButtonsRow = new MessageActionRow();

        helpButtonsRow.addComponents(
            new MessageButton()
            .setLabel("Support Server")
            .setStyle("LINK")
            .setDisabled(true),
            new MessageButton
            .setLabel("Source Code")
            .setStyle("LINK")
            .
        )
    }
}