// tailwind.config.js
module.exports = {
    // ...
    theme: {
      extend: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
        animation: {
          'gradient-x': 'gradient-x 5s ease infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
          },
        },
        colors: {
          gray: {
            900: '#0a0a0a',
            800: '#1a1a1a',
            700: '#2a2a2a',
          },
          purple: {
            500: '#8b5cf6',
            600: '#7c3aed',
          },
          blue: {
            500: '#3b82f6',
            600: '#2563eb',
          }
        }
      }
      
    }
  }