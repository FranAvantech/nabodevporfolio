/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#D0F4F7',
          200: '#A1E9EF',
          300: '#71DDE6',
          400: '#42D2DE',
          500: '#3BBDC4', // Main turquoise
          600: '#2E95A0',
          700: '#216F7C',
          800: '#154A57',
          900: '#092533'
        },
        secondary: {
          100: '#EFE8FA',
          200: '#DFD2F5',
          300: '#C7B8E0', // Lilac
          400: '#B09ECB',
          500: '#9A84B7',
          600: '#7D6A9A',
          700: '#61517D',
          800: '#443860',
          900: '#281F43'
        },
        accent: {
          100: '#DCFAE8',
          200: '#BEF5D1',
          300: '#9CDEAA', // Light green
          400: '#79C883',
          500: '#57B25C',
          600: '#468F4A',
          700: '#356C38',
          800: '#234926',
          900: '#122714'
        },
        neutral: {
          50: '#F5F9FA',  // Soft white
          100: '#EAF0F2',
          200: '#D5E2E6',
          300: '#B9CDD3',
          400: '#93AFB8',
          500: '#6E919C',
          600: '#547584',
          700: '#3D596A',
          800: '#293C4D',
          900: '#142330'
        }
      },
      fontFamily: {
        'heading': ['Fredoka', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'game': '0 8px 0 0 rgba(0, 0, 0, 0.2)',
        'game-hover': '0 4px 0 0 rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
};