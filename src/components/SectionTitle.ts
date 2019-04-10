import styled from '@emotion/styled'
import { mq } from '../lib/utilities/mq'

const SectionTitle = styled.h2(
  mq()({
    paddingTop: 15,
    fontSize: [18, 21],
    fontWeight: 300,
    textTransform: 'uppercase'
  })
)

export default SectionTitle
