module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'ingehack-black':'#0d0d0d',
      'ingehack-green': '#00ff00',
      'ingehack-white': '#fff',
      'ingehack-gray': '#292929'
    },
    extend: {
      fontFamily: {
        Rubik: ["Rubik Wet Paint", "cursive"],
        Orbitron: ["Orbitron", "sans-serif"]
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },

  },
  plugins: [],
}
