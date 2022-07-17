const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 3165440 });
const { Token, DatabaseURL } = require("./config.json");

const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);

client.commands = new Collection();

require("./Handlers/Events")(client, PG);
require("./Handlers/Commands")(client, PG);

client.login(Token);