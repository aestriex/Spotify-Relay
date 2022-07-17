const { Events } = require("../Validation/EventNames");
const Ascii = require("ascii-table");

module.exports = async (client, PG) => {
    const Table = new Ascii("Events Loaded");

    (await PG(`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
        const event = require(file);

        if (!Events.includes(event.name) || !event.name) {
            const L = file.split("/")
            await Table.addRow(`${event.name}` || "MISSING", `Name is unavailable or invalid. File: ${L[6]}`);
            return;
        };

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client))
        } else {
            client.on(event.name, (...args) => event.execute(...args, client))
        };

        await Table.addRow(event.name, "Loaded")
    });

    console.log(Table.toString());
}