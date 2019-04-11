import styled from '@emotion/styled'
import { mq } from '../../lib/utilities/mq'

const Description = styled.p(
  mq()({
    paddingTop: [10],
    fontSize: [12, 14],
    color: '#718093'
  })
)

export default Description
