module.exports.run = async(client) => {
    client.on('ready', () => {
        client.user.setStatus('available')
        client.user.setPresence({
            game: {
                name: '!help',
            }
        });
    })
}