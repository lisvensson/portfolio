import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-base':   '#fdf6ee',
        'warm-border': '#e8d5be',
        'warm-dark':   '#492b10',
        'dark-base':   '#1e0e00',
        'dark-muted':  '#2d1500',
        orange: {
          50:  '#fdf6ee',
          100: '#faebd7',
          200: '#e8d5be',
          300: '#d4b896',
          400: '#e5a361',
          500: '#d4915a',
          600: '#c47a35',
          700: '#a86225',
          800: '#6b3a1f',
          900: '#492b10',
          950: '#2d1500',
        },
        amber: {
          400: '#e5a361',
          500: '#c47a35',
          600: '#a86225',
          700: '#7a5030',
        },
      },
    },
  },
  plugins: [],
};

export default config;
