const { MessageEmbed, MessageActionRow, MessageButton, ButtonInteraction } = require("discord.js");

module.exports = {
    name: "info",
    description: "Get information about the bot!",
    /**
     * @param {ButtonInteraction} interaction 
     */
    execute(interaction, client) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const information = new MessageEmbed()
            .setTitle("Spotify Relay - Information")
            .setDescription("Spotify Relay is a bot allowing users to listen to their favorite songs and podcasts via Discord. Here are all of our commands, and what they do!")
            .setFields(
                {name: "Server Count", value: `${client.guilds.cache.size}`, inline: true },
                {name: "Total Members Served", value: `${client.users.cache.size}`, inline: true},
                {name: "Client Uptime", value: `\`\`\`${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds\`\`\``, inline: false}
            )
            .setFooter({text: "Report bugs and suggest your ideas via the GitHub repository or Support Server!"})
            .setColor("#303136");
    
        interaction.reply({embeds: [information]})
    }
}