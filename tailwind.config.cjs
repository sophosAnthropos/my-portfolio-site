/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}", "./index.html"],
  theme: {
    extend: {
        backgroundImage: {
          'projectsButton': "url('./src/assets/Images/SiteForBG.jpg')",

          'contactButton': "url('./src/assets/Images/emailBG.jpg')",
        }
    },
  },
  plugins: [],
}
