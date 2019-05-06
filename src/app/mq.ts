import facepaint from 'facepaint'
import THEME from './theme'

const mq = (breakpoints: object = THEME.breakpoints) => {
  const mediaQueries: string[] = Object.values(breakpoints).map(
    (breakpoint: number) => `@media(min-width: ${breakpoint}px)`
  )

  return facepaint(mediaQueries, { overlap: true })
}

export default mq
