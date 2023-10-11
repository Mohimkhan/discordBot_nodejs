import { Client, GatewayIntentBits } from 'discord.js';
// MTE2MTc5MTg3NjcxMDUzNTE2OA.GdlJjy._Xwi1enkyNq3SZX5u6hbEcoyDa2tkcdc4Ga8tM
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message)=>{
    if (message.author.bot) return;
    message.reply({
        content: 'Hi from bot'
    });
})


client.login('MTE2MTc5MTg3NjcxMDUzNTE2OA.GNite9.tCk27rTyi513N9vWlAjQ35d3FDcuFOfLdLjgAA');