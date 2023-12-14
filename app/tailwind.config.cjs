/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0c4a6e",
          secondary: "#7dd3fc",
          accent: "#0c4a6e",
          neutral: "#0ea5e9",
          "base-100": "#0c4a6e", // sky-900
        },
      },
    ],
  },
}
