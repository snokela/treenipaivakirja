import { DefaultTheme } from "react-native-paper";

const theme =  {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: '#cfeff1',
    elevation: {
      ...DefaultTheme.colors.elevation,
      // level1: '#a2d9dc',
      level1: '#a2d9dc',
    }
  },
}

export default theme;