/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      container: {
  			center: true,
  			padding: '1rem',
  			screens: {
  				'xl': '1140px',
  				'lg': '960px',
  				'md': '768px',
  				'sm': '576px'
  			}
  		},
    },
  },
  plugins: [],
}