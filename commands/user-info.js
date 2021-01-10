module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	guildOnly: true,
	cooldown: 2,
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};