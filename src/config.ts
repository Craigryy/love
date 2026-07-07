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
      content: `I know how much you've cried and felt hurt...`,
      image: "/character/two.png",
    },
    {
      content: "But ,I just want to tell you how much I love you Mama Coco ✨💖 and how proud I am of you.",
      image: "/character/three.png",
    },
    {
      content: "I don't know if words will ever truly capture how I feel about you. But I'll try.",
      image: "/character/four.png",
    },
    {
      content: `Because when I look at you... I don't just see beauty, I see kindness, I see strength, I see love, I see a heart worth protecting.`,
      image: "/character/five.png",
    },
    {
      content: "Your smile has a way of making everything feel lighter. You are beautiful in every sense of the word.",
      image: "/character/six.png",
    },
    {
      content: "The more I admire you, the more I appreciate you, the more I know you, the more my heart chooses you.",
      image: "/character/seven.png",
    },
    {
      content: "I may be selfish, and I don't know what the future holds, but I just want to spend more time with you, for I will always be grateful to have met you.",
      image: "/character/one.png",
    },
    {
      content: "So I have a very important question for you...",
      image: "/character/six.png",
    },
    {
      content: "Promise you will not leave me, because I can't leave you?",
      image: "/character/seven.png",
    },
  ],
  title: "For Missesage 💖",
};

// Person 2 configuration - customize this for the second person
// Edit the messages below to personalize for Person 2
export const person2Config: AppConfig = {
  steps: [
    {
      content: "Hey baby",
      image: "/character/one.png",
    },
    {
      content: `I know how much you've cried and felt hurt...`,
      image: "/character/two.png",
    },
    {
      content: "I just want to say how much I love you Mama Coco ✨💖 and how proud I am of you.",
      image: "/character/three.png",
    },
    {
      content: "I don't know if words will ever truly capture how I feel about you. But I'll try.",
      image: "/character/four.png",
    },
    {
      content: `Because when I look at you... I don't just see beauty, I see kindness, I see strength, I see love, I see a heart worth protecting.`,
      image: "/character/five.png",
    },
    {
      content: "Your smile has a way of making everything feel lighter. You are beautiful in every sense of the word.",
      image: "/character/six.png",
    },
    {
      content: "The more I admire you, the more I appreciate you, the more I know you, the more my heart chooses you.",
      image: "/character/seven.png",
    },
    {
      content: "I may be selfish, and I don't know what the future holds, but I just want to spend more time with you, for I will always be grateful to have met you.",
      image: "/character/one.png",
    },
    {
      content: "So I have a very important question for you...",
      image: "/character/six.png",
    },
    {
      content: "Promise you will not leave me, because I can't leave you?",
      image: "/character/seven.png",
    },
  ],
  title: "For Missesage 💖",
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
