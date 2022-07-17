module.exports = {
    name: "skip",
    description: "Skip the current track.",
    async execute(interaction, client) {
        const Queue = client.player.GetQueue(interaction.guild.id)

        await Queue.skip();
        return interaction.reply("Skipped the current track.");
    }


};