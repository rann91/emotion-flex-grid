import styled from '@emotion/styled'
import { mq } from '../../lib/utilities/mq'

const Subtitle = styled.p(
  mq()({
    maxWidth: [230, 300, 'none'],
    margin: 'auto',
    paddingTop: [15],
    fontSize: [14, 18],
    fontWeight: 300,
    lineHeight: 1.4
  })
)

export default Subtitle
