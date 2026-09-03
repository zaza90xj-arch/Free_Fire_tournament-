/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#FFD700',
          600: '#F5C400',
        },
        purple: {
          500: '#9B66FF',
          600: '#7A47CC',
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}