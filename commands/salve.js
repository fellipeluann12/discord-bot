module.exports = {
	name: 'salve',
    description: 'Manda um salve!',
    guildOnly: true,
    cooldown: 2,
	execute(message) {
		message.channel.send('Salve salve.');
	},
};