import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { ResponsiveProp } from '../typings'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

type Wrap = 'wrap' | 'wrap-reverse' | 'nowrap'

type WrapProp = ResponsiveProp<Wrap>

type Align = 'start' | 'center' | 'end'

type AlignProp = ResponsiveProp<Align>

type Justify = 'start' | 'center' | 'end' | 'between' | 'around'

type JustifyProp = ResponsiveProp<Justify>

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

type DirectionProp = ResponsiveProp<Direction>

export interface GridRowProps {
  wrap?: WrapProp
  direction?: DirectionProp
  align?: AlignProp
  justify?: JustifyProp
}

const alignCss = (align: AlignProp) => {
  const map: { [key in Align]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  }

  return Array.isArray(align) ? align.map(key => (key !== null ? map[key] : null)) : map[align]
}

const justifyCss = (justify: JustifyProp) => {
  const map: { [key in Justify]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around'
  }

  return Array.isArray(justify) ? justify.map(key => (key !== null ? map[key] : null)) : map[justify]
}

const GridRow = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && (prop !== 'wrap' && prop !== 'direction')
})<GridRowProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    display: 'flex',
    flexWrap: props.wrap || null,
    flexDirection: props.direction || null,
    alignItems: props.align ? alignCss(props.align) : null,
    justifyContent: props.justify ? justifyCss(props.justify) : null
  })
})

export default GridRow
