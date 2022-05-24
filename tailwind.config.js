module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      white: "#d4d3d3",
      blurrBlack: `rgb(${200}, ${4}, ${34}, ${0.8})`,

    },
    extend: {
      fontFamily: {
        naruto: ["naruto"]
      },
      backgroundImage: {
        brush: "url('../public/assets/images/brush.png')"
      },
      backgroundSize: {
        "450": "400%",
        "350": "350%"
      },
      backgroundPosition: {
        topBarHidden: "-150px",
        topBarShown: "300px",
        bottBarShown: "-60px"

      },
      width: {
        mediumView: "70vw",
        blurrAreaW: "110vw",
      },
      height: {
        blurrAreaH: "110vh"
      },
      bottom: {
        "6%": '6%'
      },
      right: {
        "6%": '6%'
      }
    },
  },
  plugins: [],
}
