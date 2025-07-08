/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        rozha: ['"Rozha One"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#1A71F6',
        borderGray: '#E7E7E7',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        'home-gradient': 'linear-gradient(120.56deg, #010C37 8.71%, #000000 61.69%)',
        'text-gradient': 'linear-gradient(206.18deg, #FFFED4 16.39%, #FFFC97 83.61%)',
      },
    },
  },
  plugins: [],
}
