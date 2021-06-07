module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand-white"),
            h1: { color: theme("colors.brand-yellow") },
            h2: { color: theme("colors.brand-yellow") },
            h3: { color: theme("colors.brand-yellow") },
            h4: { color: theme("colors.brand-yellow") },
            h5: { color: theme("colors.brand-yellow") },
            h6: { color: theme("colors.brand-yellow") },

            code: {
              color: theme("colors.brand-yellow"),
            },
            a: {
              color: theme("colors.brand-link"),
            },
          },
        },
      }),
      colors: {
        instagram: "#E4405F",
        linkedin: "#0077B5",
        github: "#181717",
        "brand-yellow": "#ffd23f",
        "brand-blue": "#5FBFF9",
        "brand-green": "#20FC8F",
        "brand-white": "#f7fff7",
        "brand-link": "#adb5bd",
        background: "#212529",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
