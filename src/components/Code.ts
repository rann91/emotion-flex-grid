import styled from '@emotion/styled'
import { mq } from '../lib/utilities/mq'

const Code = styled.pre(
  mq()({
    padding: [10, 15],
    fontSize: [12, 14],
    whiteSpace: 'pre-wrap',
    border: '2px solid #dcdde1',
    backgroundColor: '#f5f6fa'
  })
)

export default Code
