import styled from '@emotion/styled'
import { mq } from '../lib/utilities/mq'

const Footer = styled.footer(
  mq()({
    paddingBottom: [15, 15, 15, 15, 15, 20],
    fontSize: 12,
    a: {
      color: '#00a8ff',
      textDecoration: 'none'
    }
  })
)

export default Footer
