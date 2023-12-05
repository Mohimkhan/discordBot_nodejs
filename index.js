import { Client, GatewayIntentBits } from 'discord.js';
// MTE2MTc5MTg3NjcxMDUzNTE2OA.GdlJjy._Xwi1enkyNq3SZX5u6hbEcoyDa2tkcdc4Ga8tM
import dotenv from 'dotenv';
dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    message.reply({
        content: 'Hi from bot'
    });
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction);
    if (interaction.commandName === 'ping') {
        await interaction.reply('pong!!!');
    }
})


client.login(process.env.TOKEN);