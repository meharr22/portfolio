import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssAspectRatio from '@tailwindcss/aspect-ratio';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        serif: ["'Noto Serif SC'", 'serif'],
        sans: ["'Noto Sans SC'", 'sans-serif'],
      },
      letterSpacing: {
        zen: '0.05em',
      },
      colors: {
  border: 'hsl(222 47% 20%)',
  input: 'hsl(222 47% 20%)',
  ring: 'hsl(217 91% 60%)',

  background: 'hsl(222 47% 6%)',      // 🖤 deep black-blue
  foreground: 'hsl(0 0% 100%)',       // ⚪ white

  primary: {
    DEFAULT: 'hsl(217 91% 60%)',      // 🔵 blue
    foreground: 'hsl(0 0% 100%)',
  },

  secondary: {
    DEFAULT: 'hsl(222 47% 12%)',
    foreground: 'hsl(0 0% 100%)',
  },

  destructive: {
    DEFAULT: 'hsl(0 62% 50%)',
    foreground: 'hsl(0 0% 100%)',
  },

  muted: {
    DEFAULT: 'hsl(222 47% 14%)',
    foreground: 'hsl(215 20% 70%)',
  },

  accent: {
    DEFAULT: 'hsl(217 91% 60%)',      // 🔵 blue accent
    foreground: 'hsl(0 0% 100%)',
  },

  popover: {
    DEFAULT: 'hsl(222 47% 8%)',
    foreground: 'hsl(0 0% 100%)',
  },

  card: {
    DEFAULT: 'hsl(222 47% 10%)',
    foreground: 'hsl(0 0% 100%)',
  },

  sidebar: {
    DEFAULT: 'hsl(222 47% 8%)',
    foreground: 'hsl(0 0% 100%)',
    primary: 'hsl(217 91% 60%)',
    'primary-foreground': 'hsl(0 0% 100%)',
    accent: 'hsl(217 91% 60%)',
    'accent-foreground': 'hsl(0 0% 100%)',
    border: 'hsl(222 47% 20%)',
    ring: 'hsl(217 91% 60%)',
  },
},
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssAspectRatio],
} satisfies Config;