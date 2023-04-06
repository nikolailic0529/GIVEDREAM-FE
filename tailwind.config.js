/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',

    "!./node_modules",
  ],
  // purge: [
  //   './pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  // ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "secondary-text": "#babcd2",
        border: "#666",
        pink: "#F95ACC",
        "darkest-blue": "#030118",
        "table-border": "#61606E",
      },
    },
  },
  plugins: [],
}

