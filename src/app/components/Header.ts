import styled from '@emotion/styled'
import { mq } from '../../lib/utilities/mq'

const Header = styled.header(
  mq()({
    paddingTop: [40, 50],
    paddingBottom: [40, 50],
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#2f3640'
  })
)

export default Header
