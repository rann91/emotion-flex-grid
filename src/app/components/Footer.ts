import styled from '@emotion/styled'
import mq from '../mq'

const Footer = styled.footer(
  mq()({
    paddingBottom: [15, null, null, null, null, 20],
    fontSize: 12,
    a: {
      color: '#00a8ff',
      textDecoration: 'none'
    }
  })
)

export default Footer
