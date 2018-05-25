const Discord = require('discord.js');
const bot = new Discord.Client();
function getlength(number) {
    return number.toString().length;
}
ChanID = 'No ChanID specified';

module.exports = {

    logmsg: function logmsg(msg, message, bot) {
        bot.channels.get('449044829578723341').send(`recieved: ${message.author.username} - ${message.content}`);
        bot.channels.get('449044829578723341').send(`Sent: ${msg}`);
        console.log(message.author.username + ' - ' + message.content);
        console.log(`sent: ${msg}`);
    },

    emojiconvert: function emojiconvert(msgstart) {
        msg1 = msgstart.replace(/a/g, '🅰');
        msg2 = msg1.replace(/b/g, '🅱️');
        msg3 = msg2.replace(/c/g, '©️');
        msg4 = msg3.replace(/d/g, '🇩');
        msg5 = msg4.replace(/e/g, '🇪');
        msg6 = msg5.replace(/f/g, '🇫');
        msg7 = msg6.replace(/g/g, '🇬');
        msg8 = msg7.replace(/h/g, '♓');
        msg9 = msg8.replace(/i/g, 'ℹ️');
        msg10 = msg9.replace(/j/g, '🇯');
        msg11 = msg10.replace(/k/g, '🇰');
        msg12 = msg11.replace(/l/g, '🇱');
        msg13 = msg12.replace(/m/g, '♏️');
        msg14 = msg13.replace(/n/g, '🇳');
        msg15 = msg14.replace(/o/g, '🅾️');
        msg16 = msg15.replace(/p/g, '🅿️');
        msg17 = msg16.replace(/q/g, '🇶');
        msg18 = msg17.replace(/r/g, '®️');
        msg19 = msg18.replace(/s/g, '💲');
        msg20 = msg19.replace(/t/g, '✝️');
        msg21 = msg20.replace(/u/g, '🇺');
        msg22 = msg21.replace(/v/g, '🇻');
        msg23 = msg22.replace(/w/g, '🇼');
        msg24 = msg23.replace(/x/g, '❌');
        msg25 = msg24.replace(/y/g, '🇾');
        msg26 = msg25.replace(/z/g, '🇿');
        msg27 = msg26.replace(/ /g, ' ⬜ ');
        msg28 = msg27.replace(/!/g, '❗️');
        msg29 = msg28.replace('?', '❓');
        msg30 = msg29.replace(/©️🇱/g, '🆑');
        msg31 = msg30.replace(/🅰🅱️/g, '🆎');
        msg32 = msg31.replace(/🅾️🇰/g, '🆗');
        msg33 = msg32.replace(/✝️♏️/g, '™️');
        msg34 = msg33.replace('+', '➕');
        msg35 = msg34.replace(/-/g, '➖');
        msg36 = msg35.replace(/10/g, '🔟');
        msg37 = msg36.replace(/0/g, '0️⃣');
        msg38 = msg37.replace(/1/g, '1️⃣');
        msg39 = msg38.replace(/2/g, '2️⃣');
        msg40 = msg39.replace(/3/g, '3️⃣');
        msg41 = msg40.replace(/4/g, '4️⃣');
        msg42 = msg41.replace(/5/g, '5️⃣');
        msg43 = msg42.replace(/6/g, '6️⃣');
        msg44 = msg43.replace(/7/g, '7️⃣');
        msg45 = msg44.replace(/8/g, '8️⃣');
        msg = msg45.replace(/9/g, '9️⃣');
        return msg
    },

    runHive: function runHive(message, bot) {
        const argz = message.content.split(/ +/g);
        if (message.author.id === '186507006008360960') {
            if (message.channel.id === '449043802485948418') {
                if (getlength(argz[0]) == 18) {
                    msg = message.content.replace(argz[0] + ' ', ''); /*.replace(/!!HIVEMINDovrd /g, '')*/
                    bot.channels.get(argz[0]).send(msg);
                    bot.channels.get('449044829578723341').send(`recieved: ${message.author.username} - ${message.content}`);
                    bot.channels.get('449044829578723341').send(`Sent: ${msg} to <#${argz[0]}>`);
                    console.log(message.author.username + ' - ' + message.content);
                    console.log(`Sent: ${msg} to <#${argz[0]}>`);
                    ChanID = argz[0];
                } else {
                    bot.channels.get(ChanID).send(message.content);
                    bot.channels.get('449044829578723341').send(`recieved: ${message.author.username} - ${message.content}`);
                    bot.channels.get('449044829578723341').send(`Sent: ${message.content} to <#${ChanID}>`);
                    console.log(message.author.username + ' - ' + message.content);
                    console.log(`Sent: ${message.content} to <#${ChanID}>`);
                }
            }
        }
    }

}