# How to Deploy to Multiple People

You can deploy this app to multiple people using **one repository**! Here's how:

## Option 1: Multiple Netlify Sites (Recommended)

### For Person 1 (Default):
1. Push your code to GitHub/GitLab
2. Go to Netlify → "Add new site" → "Import an existing project"
3. Connect your repository
4. Netlify will auto-detect settings from `netlify.toml`
5. Deploy! (Uses default config)

### For Person 2:
1. Go to Netlify → "Add new site" → "Import an existing project"
2. Connect the **same repository**
3. In Build settings, add an Environment Variable:
   - Key: `VITE_PERSON`
   - Value: `person2`
4. Deploy! (Uses person2Config)

**Result:** Two different URLs, same codebase! 🎉

## Option 2: Customize Config File

Edit `src/config.ts` to customize messages for each person:

```typescript
// Person 1 config (default)
export const defaultConfig: AppConfig = {
  steps: [
    { content: "Hey baby", image: "/character/one.png" },
    // ... customize messages here
  ],
  title: "Person 1 Name",
};

// Person 2 config
export const person2Config: AppConfig = {
  steps: [
    { content: "Hey beautiful", image: "/character/one.png" },
    // ... customize messages here
  ],
  title: "Person 2 Name",
};
```

## Option 3: Build Locally and Deploy Manually

1. Edit `src/config.ts` for Person 1
2. Run `npm run build`
3. Deploy `dist` folder to Netlify Site 1

4. Edit `src/config.ts` for Person 2 (change `person2Config`)
5. Set `VITE_PERSON=person2` or modify the default config
6. Run `npm run build` again
7. Deploy `dist` folder to Netlify Site 2

## Quick Setup for Person 2

1. Open `src/config.ts`
2. Edit the `person2Config` object with personalized messages
3. Deploy to Netlify with `VITE_PERSON=person2` environment variable

That's it! One repo, multiple personalized deployments! 💕

