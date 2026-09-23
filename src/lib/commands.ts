export interface Command {
  syntax: string;
  description: string;
}

export interface CommandCategory {
  name: string;
  commands: Command[];
}

export const commandCategories: CommandCategory[] = [
  {
    name: "Team management",
    commands: [
      { syntax: "/xteam", description: "Show help" },
      { syntax: "/xteam list", description: "List all teams" },
      { syntax: "/xteam create <name>", description: "Create a team" },
      { syntax: "/xteam add <player> <team>", description: "Add an online player to a team" },
      { syntax: "/xteam delete <team>", description: "Delete a team — members become teamless, their random names free up" },
    ],
  },
  {
    name: "Loadouts",
    commands: [
      { syntax: "/xteam createkit <kitName>", description: "Save your full inventory — hotbar, storage, armor, offhand — as a kit with exact slot positions" },
      { syntax: "/xteam givekit <kitName> <team>", description: "Clear each online member's inventory and restore the kit into the same slots; armor auto-equips" },
      { syntax: "/xteam clear <team>", description: "Clear online members' inventories, including armor" },
    ],
  },
  {
    name: "Effects & control",
    commands: [
      { syntax: "/xteam effectgive <effect> <team> <time>", description: "Give a status effect to the whole team — time like 10s, 30s, 1m, 5m, 1h, 1d" },
      { syntax: "/xteam glow <on|off> <team>", description: "Scoreboard glow for the whole team" },
      { syntax: "/xteam freeze <team>", description: "Freeze the team in their current block — enforced client-side too, not just server-side" },
      { syntax: "/xteam unfreeze <team>", description: "Unfreeze" },
    ],
  },
  {
    name: "Identity",
    commands: [
      { syntax: "/xteam randomnames <set|reset> <team>", description: "Set assigns each member a unique random name from a pool of 1,000,000 usernames, server-wide unique. Reset clears them. Updates tab list, nameplates, and chat." },
      { syntax: "/xteam randomskins <team>", description: "Coming soon — not yet functional" },
    ],
  },
  {
    name: "Movement",
    commands: [
      { syntax: "/xteam tp <team> @p", description: "Teleport the team to the nearest player" },
      { syntax: "/xteam tp <team> <x> <y> <z>", description: "Teleport the team to coordinates, e.g. /xteam tp legends 120 63 100" },
      { syntax: "/xteam tp <team> <player>", description: "Teleport the team to a named player, e.g. /xteam tp legends Itsredfox_" },
    ],
  },
];

export const quickstartSteps = [
  "/xteam create legends",
  "/xteam add Itsredfox_ legends",
  "/xteam createkit pvpkit",
  "/xteam givekit pvpkit legends",
  "/xteam freeze legends",
  "/xteam randomnames set legends",
  "/xteam tp legends @p",
];
