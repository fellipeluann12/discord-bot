const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Entra e toca um vídeo do youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Você precisa estar conectado em um canal para executar este comando"');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Você não tem as permissões necessárias!');
        if (!permissions.has('SPEAK')) return message.channel.send('Você não tem as permissões necessárias!');
        if (!args.length) return message.channel.send("Está faltando alguma coisa!");

        const validURL = (str) => {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if (!regex.test(str)) {
                return false;
            } else {
                return true;
            }
        }

        if (validURL(args[0])) {

            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], { filter: 'audioonly' });

            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                    //message.channel.send('leaving channel');
                });

            //await message.reply(`:musical_note: Tocando agora: ******. Essa é a braba!`)

            return
        }


        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }
        const video = await videoFinder(args.join(' '));

        if (video) {
            const stream = ytdl(video.url, { filter: 'audioonly' });
            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                });
            await message.reply(`:musical_note: Tocando agora: ***${video.title}***. Essa é a braba!`)
        } else {
            message.channel.send('Não foi encontrado nenhum resultado.');
        }
    }
}