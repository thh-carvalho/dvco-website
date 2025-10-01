// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // Add your file paths here, e.g.:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. Define the Keyframes for the animation
      keyframes: {
        'border-grow-shrink': {
          '0%': { width: '0%' },
          '25%': { width: '100%' }, // Grow from L-to-R (since left is fixed at 0)
          '75%': { width: '100%' }, // Hold 
          '100%': { width: '0%' },  // Shrink from L-to-R, completing the loop
        },
      },
      // 2. Define the Animation Utility
      animation: {
        // Use a duration (e.g., 4s) and set it to loop infinitely
        'border-loop': 'border-grow-shrink 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', 
      },
    },
  },
  plugins: [],
};

export default config;