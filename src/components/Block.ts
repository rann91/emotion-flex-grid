import styled from '@emotion/styled'
import { mq } from '../lib/utilities/mq'

const Block = styled.div(
  mq()({
    height: [30, 40],
    lineHeight: ['30px', '40px'],
    color: '#fff',
    fontSize: [10, 12],
    backgroundColor: '#00a8ff'
  })
)

export default Block
