import { DarkTheme } from "@react-navigation/native"

export const colors = {
  primary: '#4d7ce0', //'#48f',
  primaryHover: '#648feb', //'#69f',
  primaryActive: '#2f62cf', // '#36d',
  fadedPrimary: '#3d495f', //'#356',
  fadedPrimaryHover: '#435474', //'#457',
  fadedPrimaryActive: '#2b3e61', //'#246',
  secondary: '#fd3',
  navbar: '#282c34', // '#334',
  black: '#000',
  white: '#fff',
  white1: '#eee',
  white2: '#ddd',
  dark: '#444'
}

export default {
  dark: false,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.white1,
    card: colors.navbar,
    text: colors.white
  }
}