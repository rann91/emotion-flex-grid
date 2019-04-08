import styled from '@emotion/styled'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

export interface GridWrapProps {
  maxWidth?: number | string | Array<number | string>
}

const GridWrap = styled.div<GridWrapProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    width: '100%',
    margin: 'auto',
    maxWidth: props.maxWidth || theme.defaults.gridWrap.maxWidth
  })
})

export default GridWrap
