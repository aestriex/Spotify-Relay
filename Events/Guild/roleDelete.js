const { MessageEmbed, Role, WebhookClient } = require("discord.js");

module.exports = {
    name: "roleDelete",
    /**
     * 
     * @param {Role} role 
     */
    execute(role) {
        const LogClient = new WebhookClient({ id: '955171357031800832', token: "FM6AKWRnyVorp99RNZi3d8K_G1oUgzt6gztyQpsS8uTLI5GnX9Kctqo2VTHx3mnVFGlD" });

        const LogEmbed = new MessageEmbed()
            .setColor("#303136")
            .setDescription(
                `**Action:** RoleDelete\n**Name:** \`${role.name}\``
            )
            .setTimestamp();

        LogClient.send({ embeds: [LogEmbed] });
    }
}