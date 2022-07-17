module.exports = (client, PG) => {
    const buttonsFolder = await PG(`${process.cwd()}/Buttons/**/*.js`);

    buttonsFolder.map(async (file) => {
        const buttonFile = require(file);

        if (!buttonFile.id) return;
        client.buttons.set(buttonFile.id, buttonFile)
    })
}