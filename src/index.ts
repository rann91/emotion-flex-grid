import styled from '@emotion/styled'
import facepaint from 'facepaint'

const mq = facepaint([
  '@media(min-width: 768px)',
  '@media(min-width: 1024px)',
  '@media(min-width: 1280px)'
])

export const Wrap = styled.div({
  width: '100%',
  maxWidth: '1200px',
  margin: 'auto'
})

export const Row = styled.div({
  display: 'flex',
  flexWrap: 'wrap'
})

export const Col = styled.div(
  mq({
    flexBasis: ['100%', '50%'],
    padding: '10px'
  })
)
