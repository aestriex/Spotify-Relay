const { MessageEmbed, MessageUpdate, Message, WebhookClient } = require("discord.js");

module.exports = {
    name: "messageUpdate",
    async execute(oldMessage, newMessage) {
        const LogClient = new WebhookClient({ id: '955171357031800832', token: "FM6AKWRnyVorp99RNZi3d8K_G1oUgzt6gztyQpsS8uTLI5GnX9Kctqo2VTHx3mnVFGlD" });

        if (oldMessage.content === "" || newMessage.content === "") return;

        const LogEmbed = new MessageEmbed()
            .setAuthor({ name: oldMessage.author.tag, iconURL: oldMessage.author.avatarURL({ dynamic: true, size: 512 }) })
            .setColor("#303136")
            .setDescription(
                `**User:** ${oldMessage.author.tag} (${oldMessage.author.id}) \n**Action:** MessageUpdate`
            )
            .addField("Old Message", oldMessage.toString())
            .addField("New Message", newMessage.toString())
            .setTimestamp();

        if (oldMessage.attachments.size >= 1) {
            Response.addField(`Attachments`, `${oldMessage.attachments.map(a => a.url)}`, true)
        }

        LogClient.send({ embeds: [LogEmbed] });
    }


}