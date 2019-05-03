import styled from '@emotion/styled'
import { ResponsiveProp } from '../typings'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

export interface GridWrapProps {
  maxWidth?: ResponsiveProp<number | string>
}

const GridWrap = styled.div<GridWrapProps>(props => {
  const theme = mergeThemes(props.theme)
  const { maxWidth } = theme.defaults.grid.wrap

  return mq(theme.breakpoints)({
    width: '100%',
    margin: 'auto',
    maxWidth: props.maxWidth || maxWidth
  })
})

export default GridWrap
