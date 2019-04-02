import styled from '@emotion/styled'

export const Wrap = styled.div({
  width: '100%',
  maxWidth: '1200px',
  margin: 'auto'
})

export const Row = styled.div({
  display: 'flex',
  flexWrap: 'wrap'
})

export const Col = styled.div({
  flexBasis: '50%',
  padding: '10px'
})

export default {
  Wrap,
  Row,
  Col
}
