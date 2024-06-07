/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('/src/assets/background.jpeg')",
      }),
      colors: {
        primary: {
          light: '#93c5fd', // Light variant of your primary color
          DEFAULT: '#CED058', // Default primary color
          dark: '#1e40af', // Dark variant of your primary color
        },
        secondary: {
          light: '#fbbf24', // Light variant of your secondary color
          DEFAULT: '#f59e0b', // Default secondary color
          dark: '#b45309', // Dark variant of your secondary color
        },
      },
    },
  },
  plugins: [],
}

