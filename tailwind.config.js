/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
      },
      backgroundImage: {
        "hero-pattern": "url('https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1470&q=80')",
      },
    },
  },
  plugins: [],
};