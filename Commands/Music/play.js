const { CommandInteraction } = require("discord.js");
const { Player } = require("jericho-player");

module.exports = {
    name: "play",
    description: "Play a song from Spotify, such as a track, playlist, or podcast.",
    /**
     * @param {CommandInteraction} interaction
     * @param {Player} client.player
     */
    options: [
        {
            name: "query",
            description: "The query to search for.",
            type: "STRING",
            required: true
        }
    ],
    async execute(interaction, client) {
        const song = interaction.options.getString('query');
        const Player = client.player;
        let queuedsong;
        const queue = Player.CreateQueue(interaction.guild.id);
        
        let user = await interaction.member.fetch();
        let channel = await user.voice.channel;
        if (!channel) {
            return interaction.reply('You must be in a voice channel to use this command.');
        };

        queue.play(song, channel, user);
        return interaction.reply(`Now playing **${song}**, added by \<@${user.id}>.`, {"allowedMentions": { "users" : []}}).catch(err => {})
    }


};