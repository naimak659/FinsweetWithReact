/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cmyellow: "#FCD980",
        cmLightBlue: "#2405F2",
        cmGrey: "#BBBBCB",
        cmDarkBlue: "#282938",
        cmAccent: "#EEF4FA",
        cmTintBlue: "#1C1E53",
        graBluB: "#1C1E53",
        graBlul: "rgba(28, 30, 83, 0.5)",
      },
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        manrope: '"Manrope", sans-serif',
      },

    },
  },
  plugins: [],
};
