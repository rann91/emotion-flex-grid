import DEFAULT from '../constants/theme'

const mergeThemes = (theme: any) => ({
  ...DEFAULT,
  ...theme
})

export default mergeThemes
