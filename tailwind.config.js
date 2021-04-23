module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            h2: {
              color: theme("colors.brand-yellow"),
            },
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
