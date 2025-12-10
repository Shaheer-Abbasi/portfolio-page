/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#f0fefa",
          100: "#e6fbf9",
          300: "#6ee7e6",
          500: "#00d4c8",
          700: "#00b3a6",
        },
      },
      keyframes: {
        "gradient-xy": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-xy": "gradient-xy 12s ease infinite",
      },
    },
  },
  plugins: [],
};