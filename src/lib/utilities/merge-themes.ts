import THEME from '../constants/theme'

const mergeThemes = (propTheme: any) => ({
  ...THEME,
  ...propTheme
})

export default mergeThemes
