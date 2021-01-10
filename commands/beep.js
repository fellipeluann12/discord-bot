module.exports = {
	name: 'beep',
    description: 'Beep!',
    guildOnly: true,
    cooldown: 2,
	execute(message) {
		message.channel.send('Boop.');
	},
};