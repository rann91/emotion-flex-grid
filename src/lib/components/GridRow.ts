import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

type Wrap = 'wrap' | 'wrap-reverse' | 'nowrap'

type Align = 'start' | 'center' | 'end'

type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export interface GridRowProps {
  wrap?: Wrap | Wrap[]
  align?: Align | Align[]
  justify?: Justify | Justify[]
  direction?: Direction | Direction[]
}

const alignCss = (align: Align | Align[]) => {
  const map: { [key in Align]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  }

  return Array.isArray(align) ? align.map(key => map[key]) : map[align]
}

const justifyCss = (justify: Justify | Justify[]) => {
  const map: { [key in Justify]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  }

  return Array.isArray(justify) ? justify.map(key => map[key]) : map[justify]
}

const GridRow = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'wrap'
})<GridRowProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    display: 'flex',
    flexWrap: props.wrap || theme.defaults.gridRow.flexWrap,
    flexDirection: props.direction || null,
    alignItems: props.align ? alignCss(props.align) : null,
    justifyContent: props.justify ? justifyCss(props.justify) : null
  })
})

export default GridRow
