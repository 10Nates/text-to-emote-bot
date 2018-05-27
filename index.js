const Discord = require('discord.js');
const bot = new Discord.Client();
const cmd = require('./extras');
bot.on('message', (message) => {
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === '!emojify') {
        msg0 = message.content.toLowerCase().replace(/!emojify /g, '');
        msg = cmd.emojiconvert(msg0);
        message.channel.send(msg);
        cmd.logmsg(msg, message, bot);
    }

    if (command === '!emojicntrl') {
        ChanID = args[0].replace(/<#|>/g, '');
        rmvcntrl = message.content.replace(args[0] + ' ', '');
        msg0 = rmvcntrl.toLowerCase().replace(/!emojicntrl /g, '');
        msg = cmd.emojiconvert(msg0);
        bot.channels.get(ChanID).send(msg);
        cmd.logmsg(msg, message, bot);
    }

    if (command === '!emojihelp') {
        msgstart = 'To Emojify your statement, type "!Emojify [Message]". To control where the statement goes, use "!Emojicntrl [#Channel] [Message]".';
        msg = cmd.emojiconvert(msgstart);
        message.channel.send(msg);
        cmd.logmsg(msg, message, bot);
    }

    if (command === '!ebojify') {
        msgpre = message.content.toLowerCase().replace(/!ebojify /g, '').replace(/no/g,"yesn't").replace(/yes/g,"non't");
        msg = msgpre.replace(/b/g, '🅱️').replace(/p/g,'🅱️').replace(/g/g,'🅱️').replace(/c/g,'🅱️').replace(/d/g, '🅱️');
        message.channel.send(msg);
        cmd.logmsg(msg, message, bot);
    }

    cmd.runHive(message, bot);
    

});

bot.login(process.env.Token);
