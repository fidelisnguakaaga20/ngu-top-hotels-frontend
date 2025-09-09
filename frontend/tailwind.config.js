/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#F7F8F9",
        primary: "#222222",
        accent: "#34495E", // note: valid hex (was "#3449SE")
      },
    },
  },
  plugins: [],
};
