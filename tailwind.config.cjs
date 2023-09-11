/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}", "./index.html"],
  theme: {
    extend: {
        backgroundImage: {

          'contactButton': "url('./src/assets/Images/emailBG.jpg')",

          'sunsetOne': "url('./src/assets/Images/Moms_Sunset_Photo.jpg')",

          'sunsetTwo': "url('./src/assets/Images/Moms_Sunset_Photo_2.jpg')",

          'sunsetThree': "url('./src/assets/Images/Moms_Sunset_Photo_3.jpg')",

          'sunsetComboLandscape': "url('./src/assets/Images/Moms_Sunset_Photos_Combined_Landscape.png')",

          'sunsetComboPortrait': "url('./src/assets/Images/Moms_Sunset_Photos_Combined_Portrait.png')",
        }
    },
  },
  plugins: [],
}

