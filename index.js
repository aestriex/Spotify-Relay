const { Client, Collection } = require("discord.js");
const client = new Client({ intents: [3165440, 'GUILD_VOICE_STATES', 'GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILDS'] });
const { Token, DatabaseURL } = require("./config.json");
const { Player } = require("jericho-player");

const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);

client.config = require("./config.json")
client.commands = new Collection();
client.player = new Player(client);

require("./Handlers/Events")(client, PG);
require("./Handlers/Commands")(client, PG);

client.login(Token);