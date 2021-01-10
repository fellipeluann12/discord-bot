module.exports = {
    name: 'leave',
    description: 'Parar a música e o bot sai do canal.',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send("Você precisar estar conectado em um canal para ser capaz de parar a música!");
        await voiceChannel.leave();
        //await message.channel.send('Saindo do canal... :rage:');
    }
}