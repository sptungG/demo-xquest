import { TQuest } from "../contexts/page-store";

export const MockTemplateQuests: TQuest[] = [
  {
    name: "Join Discord 👾",
    desc: `🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!`,
    star: 0,
    type: "ONCE",
  },
  {
    name: "Follow us 🌈",
    desc: `🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!`,
    star: 0,
    type: "ONCE",
  },
  {
    name: "Invite 20 fren to join our crew3 🤲",
    desc: `Complete ‘Invite 15 fren to join our crew3 🤲' to unlock`,
    star: 0,
    type: "DAILY",
  },
  {
    name: "Visit Manta Website",
    desc: `Please Visit Manta Network official website`,
    star: 0,
    type: "DAILY",
  },
  {
    name: "Subscribe Manta Network Youtube Channel 📹",
    desc: `Watch Manta Network Youtube Clips at Link Subscribe Sisu Network Youtube Channel`,
    star: 0,
    type: "ONCE",
  },
];

export const MockOnboardingQuests: TQuest[] = [
  {
    name: "Daily connect",
    desc: `The easiest quest! Just connect to Crew3 and claim this one every day.`,
    star: 10,
    type: "DAILY",
    category: "Onboarding",
  },
  {
    name: "Follow us 🌈",
    desc: "",
    star: 25,
    type: "ONCE",
    category: "Onboarding",
  },
  {
    name: "Visit Manta Website",
    desc: "Please Visit Manta Network official website",
    star: 50,
    type: "ONCE",
    category: "Onboarding",
  },
  {
    name: "Read Manta Document",
    desc: "🎯 Read document about Manta Network",
    star: 120,
    type: "DAILY",
    category: "Onboarding",
  },
  {
    name: "Join Discord 👾",
    desc: "Get a Discord Role and introduce yourself to the community...",
    star: 25,
    type: "ONCE",
    category: "Onboarding",
  },
  {
    name: "Manta Discord Introduction 👾",
    desc: "Complete 'Join Discord 👾' to unlock",
    star: 120,
    type: "DAILY",
    category: "Onboarding",
  },
  {
    name: "Subscribe Manta Network Youtube Channel 📹",
    desc: "Watch Manta Network Youtube Clips at Link Subscribe Sisu Network Youtube Channel",
    star: 120,
    type: "DAILY",
    category: "Onboarding",
  },
];
