/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f3',
          100: '#ffddea',
          200: '#ffc2dd',
          300: '#ff94c9',
          400: '#ff56a6',
          500: '#ff0040',
          600: '#e8003a',
          700: '#c70031',
          800: '#a3002c',
          900: '#8a0029',
        },
        gold: {
          50: '#fffdf0',
          100: '#fffce3',
          200: '#fff8c1',
          300: '#fff085',
          400: '#ffe04d',
          500: '#ffd700',
          600: '#e6c300',
          700: '#cc9900',
          800: '#996600',
          900: '#664400',
        },
        neon: {
          50: '#f0fcff',
          100: '#e3f9ff',
          200: '#c1f2ff',
          300: '#8ae8ff',
          400: '#47d9ff',
          500: '#00d4ff',
          600: '#00b8e6',
          700: '#009acc',
          800: '#007aa3',
          900: '#005c7a',
        },
        dark: {
          50: '#f8f8f8',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#2d2d2d',
          700: '#1a1a1a',
          800: '#141414',
          900: '#0a0a0a',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          '100%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gaming-hero': 'linear-gradient(135deg, rgba(255,0,64,0.1) 0%, rgba(0,212,255,0.1) 50%, rgba(255,215,0,0.1) 100%)',
      }
    },
  },
  plugins: [],
};