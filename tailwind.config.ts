import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-base':   '#fffaf5',
        'warm-border': '#fde8cc',
        'warm-dark':   '#1c0a00',
        'dark-base':   '#1a0f00',
        'dark-muted':  '#261500',
      },
    },
  },
  plugins: [],
};

export default config;
