const hastebin = require('hastebin-gen');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
  if(message.channel.type !== "text") return;
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Dm`ni Kontrol Edermisin ?:postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const hastEmb = new Discord.RichEmbed()
 hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)
      .setURL(hastLink)
      .addField('Link: ', `${hastLink}`)
      .setFooter('EROS | NOT SİSTEMİ yapımcım Enes.么#4653')
      
      .setDescription(`📥**Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=665944756307623945&scope=bot&permissions=805314622) \n🔶**Destek Sunucusu İçin** [TIKLA](https://discord.gg/QvcXf7W)`)
      
       return message.author.sendEmbed(hastEmb)
  }).catch(console.error);  
   
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
     kategori: "not"

};

exports.help = {
  name: 'not',
  description: 'Hastebine kod/cümle yüklersiniz.',
  usage: 'not [kod/cümle]'
};
