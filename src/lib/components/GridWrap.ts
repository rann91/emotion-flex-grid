import styled from '@emotion/styled'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

export interface GridWrapProps {
  maxWidth?: number | string | Array<number | string>
}

const GridWrap = styled.div<GridWrapProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    ...theme.defaults.gridWrap,
    width: '100%',
    margin: 'auto',
    maxWidth: props.maxWidth || null
  })
})

export default GridWrap
