/** @type {import('tailwindcss').Config} */
// const backgroundUrl = require('vite').loadEnv(process.env.NODE_ENV, process.cwd()).VITE_OSS_URL;
module.exports = {
  important: true,
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx,vue}',
    './src/**/**/*.{html,js,ts,jsx,tsx,vue}',
    './src/**/**/**/*.{html,js,ts,jsx,tsx,vue}',
    './src/**/**/**/**/*.{html,js,ts,jsx,tsx,vue}',
    './src/*.{html,js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {},
      textColor: {},
      backgroundColor: {},
      backgroundImage: {},
      backgroundSize: {},
      borderColor: {},
      boxShadow: {}
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
