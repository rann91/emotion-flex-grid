import styled from '@emotion/styled'
import { mq } from '../../lib/utilities/mq'

const Main = styled.main(
  mq()({
    paddingTop: [0, 15, 15, 15, 15, 30],
    paddingBottom: 10
  })
)

export default Main
