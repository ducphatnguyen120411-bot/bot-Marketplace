const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
require("./db"); // load database

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`✅ Bot online: ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong! Bot Marketplace đang hoạt động");
  }
});

client.login(process.env.TOKEN);
