/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#4a4f54",
          "200": "#363c43",
        },
        white: "#fff",
        gray: {
          "100": "#28292f",
          "200": "#171717",
          "300": "rgba(255, 255, 255, 0.03)",
        },
        "gray-40": "#a3adb2",
        darkgray: "#969696",
        dimgray: "rgba(97, 97, 97, 0.82)",
        lightskyblue: "#96bee7",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "lg-9": "18.9px",
        "10xs-3": "2.3px",
        "11xs-2": "1.2px",
        xl: "20px",
        "10xs-5": "2.5px",
        "4xl": "23px",
        "8xl": "27px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
