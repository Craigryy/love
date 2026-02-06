// Configuration for personalized messages
// Create different configs for different people

export interface AppConfig {
  steps: {
    content: string;
    image: string;
  }[];
  title: string;
}

// Default configuration (Person 1)
export const defaultConfig: AppConfig = {
  steps: [
    {
      content: "Hey baby",
      image: "/character/one.png",
    },
    {
      content: `I know recently you haven't been so well...
Madonna University, your girls, Mmesoma...
even money...`,
      image: "/character/two.png",
    },
    {
      content: `I just wanted to tell you how proud I am of you.`,
      image: "/character/three.png",
    },
    {
      content: `You are amazing, annoying, sometimes scary.
But I wouldn't change any part of you.`,
      image: "/character/four.png",
    },
    {
      content: `You've handled everything with such strength,
and I admire that about you.`,
      image: "/character/five.png",
    },
    {
      content: "So I got a question for you...",
      image: "/character/six.png",
    },
    {
      content: "Will you buy me food?",
      image: "/character/seven.png",
    },
  ],
  title: "Mummy Tee",
};

// Person 2 configuration - customize this for the second person
// Edit the messages below to personalize for Person 2
export const person2Config: AppConfig = {
  steps: [
    {
      content: "Hey baby", // 👈 Change this message
      image: "/character/one.png",
    },
    {
      content: `I know recently you haven't been so well...
Madonna University, your girls, Mmesoma...
even money...`, // 👈 Change this message
      image: "/character/two.png",
    },
    {
      content: `I just wanted to tell you how proud I am of you.`, // 👈 Change this message
      image: "/character/three.png",
    },
    {
      content: `You are amazing, annoying, sometimes scary.
But I wouldn't change any part of you.`, // 👈 Change this message
      image: "/character/four.png",
    },
    {
      content: `You've handled everything with such strength,
and I admire that about you.`, // 👈 Change this message
      image: "/character/five.png",
    },
    {
      content: "So I got a question for you...", // 👈 Change this message
      image: "/character/six.png",
    },
    {
      content: "Will you buy me food?", // 👈 Change this message
      image: "/character/seven.png",
    },
  ],
  title: "Mummy Tee", // 👈 Change the title if needed
};

// Get config based on environment variable or default
// Set VITE_PERSON=person2 in Netlify to use person2Config
const getConfig = (): AppConfig => {
  const person = import.meta.env.VITE_PERSON || "default";
  
  switch (person) {
    case "person2":
      return person2Config;
    default:
      return defaultConfig;
  }
};

export const appConfig = getConfig();

