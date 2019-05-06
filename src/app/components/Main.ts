import styled from '@emotion/styled'
import mq from '../mq'

const Main = styled.main(
  mq()({
    paddingTop: [0, 15, null, null, null, 30],
    paddingBottom: 10
  })
)

export default Main
