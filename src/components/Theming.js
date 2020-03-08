import { createTheming } from '@callstack/react-theme-provider'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.blue,
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: colors.blue,
      link: colors.blue,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: colors.blue,
      text: colors.white,
      bodyBg: colors.darkBG,
      headerBg: colors.darkBG,
      link: colors.darkLink,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
