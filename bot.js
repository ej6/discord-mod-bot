const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
    if (!message.member.roles.cache.has('ROLE_ID_HERE')) return;
    
    else if(message.content.toLowerCase().includes("lawyer")) {
        message.channel.send('https://cdn.discordapp.com/attachments/888130339308994610/1013663165499854879/3d-saul-saul-goodman.gif');
    }
    
    else if(message.content.toLowerCase().includes(".mp4")) {
        message.channel.send('https://cdn.discordapp.com/attachments/990436042320527371/1012586355773165608/MemeFeedBot-224.gif');
    }
    
    else if(message.content.toLowerCase().includes(".mov")) {
        message.channel.send('https://cdn.discordapp.com/attachments/990436042320527371/1012586355773165608/MemeFeedBot-224.gif');
    }
    
    else if(message.content.toLowerCase().includes(".webm")) {
        message.channel.send('https://cdn.discordapp.com/attachments/990436042320527371/1012586355773165608/MemeFeedBot-224.gif');
    }
    
    else if(message.content.toLowerCase().includes(".jpg")) {
        message.channel.send('https://cdn.discordapp.com/attachments/990436042320527371/1012586355773165608/MemeFeedBot-224.gif');
    }
    
    else if(message.content.toLowerCase().includes(".jpeg")) {
        message.channel.send('https://cdn.discordapp.com/attachments/990436042320527371/1012586355773165608/MemeFeedBot-224.gif');
    }
    
    else if(message.content.toLowerCase().includes(".png")) {
        message.channel.send('https://cdn.discordapp.com/attachments/990436042320527371/1012586355773165608/MemeFeedBot-224.gif');
    }
    
    else if(message.content.toLowerCase().includes("nigg")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("n i g g")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("ni g g")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("n ig g")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("n i gg")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("nig g")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("n igg")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("beaner")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("fag")) {
        message.delete()
        message.reply("plz do not send homophobic stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("jew")) {
        message.delete()
        message.reply("plz do not send racist stuff or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("retard")) {
        message.delete()
        message.reply("plz do not send stuff like that or try to bypass chat filters. Thank You!");
    }
    
    else if(message.content.toLowerCase().includes("tiktok.com")) {
        message.delete()
        message.reply("tiktok is ass just saying");
    }
    
    else if(message.content.toLowerCase().includes("youtube.com")) {
        message.delete()
        message.reply("honestly you shouldnt advertise in other peoples servers");
    }
    
    else if(message.content.toLowerCase().includes("ddos")) {
        message.delete()
        message.reply("plz, do not speak about any illegal activities in this discord server. Thanks!");
    }
    
    else if(message.content.toLowerCase().includes("booting")) {
        message.delete()
        message.reply("plz, do not speak about any illegal activities in this discord server. Thanks!");
    }
    
    else if(message.content.toLowerCase().includes("hack")) {
        message.delete()
        message.reply("plz, do not speak about any illegal activities in this discord server. Thanks!");
    }
    
    else if(message.content.toLowerCase().includes("pentest")) {
        message.delete()
        message.reply("plz, do not speak about any illegal activities in this discord server. Thanks!");
    }

});

bot.login('BOT_TOKEN_HERE')
