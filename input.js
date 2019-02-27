const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('simple', 'Simple')
bot.registry.registerGroup('music', 'Music')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.author.bot)return 
    if(message.content =='Hello Garon')
    {
        message.reply('Hello, Request a song retard.');
    }
});

bot.on('ready' ,function (){
    console.log("Ready");
})

client.login(process.env.BOT_TOKEN);
