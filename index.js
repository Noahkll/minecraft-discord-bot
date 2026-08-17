const {
  Client,
  GatewayIntentBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  Events
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "launch_minecraft") {
    await interaction.reply({
      content: "🟡 Tentative de lancement du serveur Minecraft...",
      ephemeral: true
    });

    // Le lancement Aternos sera ajouté ici ensuite.
  }
});

client.login(process.env.DISCORD_TOKEN);
