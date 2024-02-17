/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins']
      },
      backgroundColor: {
        'bgcolorprimary':'#F5F5F9',
        'bgcolorsecondary': '#FFFFFF',
        'bgcolorthird': '#D9D9D9',
        'bg-biru-button': '#696CFF',
        'bg-kuning-button': '#FFAB00',
        'bg-merah-button': '#FFAB00',
        'bg-green-button': '#29B7D3',
        'bg-link-button': '#5255DA',
        'bg-header': '#D9D9D9'
      },
      textColor: {
        'primary-text-color': '#84919D',
        'secondary-text-color': '#4D5F71',
        'warning-text-color': '#FF3E1D',
        'information-text-color': '#71DD37'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

