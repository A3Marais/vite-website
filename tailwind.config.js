/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Primary": "#00235B",
        "Secondary": "#F0F0F0",
        "Three": "#009FBD",
        "t3xt": "#FFFFE8",
        'button': '#025464'
      },
      button: {
        DEFAULT: "#025464", // Replace with your desired button color
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};


