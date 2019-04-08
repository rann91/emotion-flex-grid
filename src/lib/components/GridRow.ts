import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

export type GridRowWrapValue = 'wrap' | 'wrap-reverse' | 'nowrap'

export type GridRowAlignValue = 'start' | 'center' | 'end'

export type GridRowJustifyValue = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

export type GridRowDirectionValue = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export interface GridRowProps {
  wrap?: GridRowWrapValue | GridRowWrapValue[]
  align?: GridRowAlignValue | GridRowAlignValue[]
  justify?: GridRowJustifyValue | GridRowJustifyValue[]
  direction?: GridRowDirectionValue | GridRowDirectionValue[]
}

const alignProp = (align: GridRowAlignValue | GridRowAlignValue[]) => {
  const map: { [key in GridRowAlignValue]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  }

  return Array.isArray(align) ? align.map(key => map[key]) : map[align]
}

const justifyProp = (justify: GridRowJustifyValue | GridRowJustifyValue[]) => {
  const map: { [key in GridRowJustifyValue]: string } = {
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
    ...theme.defaults.gridRow,
    display: 'flex',
    flexWrap: props.wrap || null,
    flexDirection: props.direction || null,
    alignItems: props.align ? alignProp(props.align) : null,
    justifyContent: props.justify ? justifyProp(props.justify) : null
  })
})

export default GridRow
