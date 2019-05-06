import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import mq from '../mq'

const GroupBlock = styled('div', {
  shouldForwardProp: (propName: string) => isPropValid(propName) && propName !== 'height'
})<{ height?: number | number[] }>(props =>
  mq()({
    padding: ['10px 5px', '20px 10px'],
    border: '2px dashed #00a8ff',
    '& > div': {
      height: props.height
    }
  })
)

export default GroupBlock
