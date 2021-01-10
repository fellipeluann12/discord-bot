module.exports = {
	name: 'ping',
    description: 'Ping!',
    guildOnly: true,
    cooldown: 2,
	execute(message) {
		message.channel.send('Pong.');
	},
};