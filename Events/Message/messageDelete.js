const { MessageEmbed, MessageDelete, Message, WebhookClient } = require("discord.js");

module.exports = {
    name: "messageDelete",
    /**
     * 
     * @param {Message} message 
     */
    execute(message) {
        if (message.author.bot) return;

        const LogClient = new WebhookClient({ id: '955171357031800832', token: 'FM6AKWRnyVorp99RNZi3d8K_G1oUgzt6gztyQpsS8uTLI5GnX9Kctqo2VTHx3mnVFGlD' });

        if (message.content === "") return;

        const LogEmbed = new MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true, size: 512 }) })
            .setColor("#303136")
            .setDescription(
                `**User:** ${message.author.tag} (${message.author.id}) \n**Action:** MessageDelete\n**Content:**\n${message.toString()}`
            )
            .setTimestamp();

        if (message.attachments.size >= 1) {
            Response.addField(`Attachments`, `${message.attachments.map(a => a.url)}`, true)
        }

        LogClient.send({ embeds: [LogEmbed] });
    }
}