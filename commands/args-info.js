module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	guildOnly: true,
	cooldown: 2,
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		message.channel.send(`First argument: ${args[0]}`);
	},
};