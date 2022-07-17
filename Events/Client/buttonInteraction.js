const { ButtonInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    once: false,
    execute(interaction, client) {
        if (!interaction.isButton()) return;

        const Button = client.buttons.get(interaction.customId);

        if (Button.permission && !interaction.member.permissions.has(Button.permission)) {
            return;
        }

        Button.execute(interaction, client);
    }
}