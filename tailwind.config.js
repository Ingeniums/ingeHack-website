module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "ingehack-black": "#0c1c2d",
      "ingehack-green": "#9fd21a",
      "ingehack-white": "#fff",
      "ingehack-gray": "#1a2332",
      "ingehack-blue": "#5dafd1",
    },
    extend: {
      fontFamily: {
        Matrix: ["Matrix", "sans-serif"],
        NeuHaasBold: ["NeuHaasBold", "sans-serif"],
        NeuHaasRegular: ["NeuHaasRegular", "sans-serif"],
        TypographLight: ["TypographLight", "sans-serif"],
        DoctorGlitch: ["DoctorGlitch", "sans-serif"],
      },
      screen: {
        "2xl": "1560px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1560px",
      },
    },
  },
  plugins: [],
};
