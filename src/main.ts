require("dotenv").config();
import path from "path";
import { CommandoClient } from "discord.js-commando"
const client = new CommandoClient({
  commandPrefix: "d!",
  owner: "599588626698993699",
  invite: "https://discord.gg/gtJrZymtq7",
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["music", "Music commands"],
    ["mod", "Moderation commands"],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn({filter: /^([^.].*)\.(js|ts)$/, dirname: path.join(__dirname, "commands")});

client.once("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!!`);
});

client.login();