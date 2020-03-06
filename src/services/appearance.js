import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"


const colors = {
    green: {
        id: "green",
        name: "Green",
        import: green
      },
    lightGreen: {
        id: "light-green",
        name: "Light Green",
        import: lightGreen
    },
    orange: {
        id: "orange",
        name: "Orange",
        import: orange
    },
    deepOrange: {
        id: "deep-orange",
        name: "Deep Orange",
        import: deepOrange
    },
    blue: {
        id: "blue",
        name: "Blue",
        import: blue
    },
    red: {
        id: "red",
        name: "Red",
        import: red
    }
}

const appearance = {};

const defaultTheme = createMuiTheme({
    palette: {
      primary: colors['orange'].import,
      secondary: colors['blue'].import,
      error: colors['red'].import,
      success: colors['green'].import,
      type: "light"
    },

    primaryColor: colors['orange'],
    secondaryColor: colors['blue'],
    dark: false
  });

appearance.defaultTheme = defaultTheme;

export default appearance;