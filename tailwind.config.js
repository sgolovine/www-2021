/* eslint-disable global-require */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand-white"),
            h1: {
              color: theme("colors.brand-yellow"),
            },
            h2: {
              color: theme("colors.brand-yellow"),
            },
            h3: {
              color: theme("colors.brand-yellow"),
            },
            h4: {
              color: theme("colors.brand-yellow"),
            },
            h5: {
              color: theme("colors.brand-yellow"),
            },
            h6: {
              color: theme("colors.brand-yellow"),
            },

            code: {
              color: theme("colors.brand-blue"),
            },
            a: {
              color: theme("colors.brand-yellow"),
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
        "off-black": "#212529",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
