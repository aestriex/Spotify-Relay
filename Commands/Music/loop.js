module.exports = {
    name: "loop",
    description: "Loop the current track or queue.",
    async execute(interaction, client) {
        var looped = 0;

        const Queue = client.player.GetQueue(interaction.guild.id)

        if (looped === 0 || looped === 3) {
            Queue.loop("track");
            looped = 1;
            return interaction.reply("The current track will now loop.");
        } else if (looped === 1) {
            Queue.loop("queue");
            looped = 2;
            return interaction.reply("The queue will now loop.");
        } else if (looped === 2) {
            Queue.loop("track");
            looped = 3;
            return interaction.reply("Loop has been disabled.");
        }
        
    }


};