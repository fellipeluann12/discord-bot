module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	guildOnly: true,
	cooldown: 2,
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};