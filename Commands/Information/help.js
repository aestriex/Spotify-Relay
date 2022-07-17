const { MessageEmbed, MessageActionRow, MessageButton, ButtonInteraction } = require("discord.js");

module.exports = {
    name: "help",
    description: "View all our commands and what they do.",
    /**
     * @param {ButtonInteraction} interaction 
     */
    execute(interaction) {

        const helpPanel = new MessageEmbed()
            .setTitle("Spotify Relay - Commands")
            .setDescription("Spotify Relay is a bot allowing users to listen to their favorite songs and podcasts via Discord. Here are all of our commands, and what they do!\n\n" +

            "**General Commands**" +
            "\n **• /help** - View all our commands and what they do." +
            "\n **• /info** - Get information about the bot!" +
            "\n **• /ping** - Check the API Latency!" +
            "\n **• /invite** - Add our bot to your discord server!" +
            "\n **• /support** - Get an invite to our support server!" +
            
            "\n\n**Music Commands**" +
            "\n **• /play** - Play a song from Spotify, such as a track, playlist, or podcast." +
            "\n **• /nowplaying** - Get the current playing track." +
            "\n **• /pause** - Pause the current track." +
            "\n **• /unpause** - Resume the current track." +
            "\n **• /stop** - Clear the queue and stop the player." +
            "\n **• /skip** - Skip the current track." +
            "\n **• /loop** - Loop the current track." +
            "\n **• /shuffle** - Shuffle the queue." +
            "\n **• /volume** - Change the player's volume." +
            "\n **• /seek** - Seek through the current playing track or song." +
            "\n **• /queue** - View the current queue.")
            .setColor("#17D860");
    
        const helpButtonsRow = new MessageActionRow();

        helpButtonsRow.addComponents(
            new MessageButton()
                .setLabel("Support Server")
                .setStyle("LINK")
                .setURL("https://example.com")
                .setDisabled(true),
            new MessageButton()
                .setLabel("Source Code")
                .setStyle("LINK")
                .setURL("https://github.com/aestriex/Spotify-Relay")
        )

        interaction.reply({embeds: [helpPanel], components: [helpButtonsRow]})
    }
}