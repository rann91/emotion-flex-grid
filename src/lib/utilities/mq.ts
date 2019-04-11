import facepaint from 'facepaint'
import THEME from '../constants/theme'

export const mq = (breakpoints: object = THEME.breakpoints) => {
  const mediaQueries: string[] = Object.values(breakpoints).map(
    (breakpoint: number) => `@media(min-width: ${breakpoint}px)`
  )

  return facepaint(mediaQueries, { overlap: true })
}
