import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

export type GridColumnWidthValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridColumnSpaceKey = 's' | 'm' | 'l' | 'xl'

export type GridColumnTextAlignValue = 'left' | 'right' | 'center'

export interface GridColumnProps {
  width?: GridColumnWidthValue | GridColumnWidthValue[]
  order?: number
  textAlign?: GridColumnTextAlignValue | GridColumnTextAlignValue[]
  p?: GridColumnSpaceKey | GridColumnSpaceKey[]
  px?: GridColumnSpaceKey | GridColumnSpaceKey[]
  py?: GridColumnSpaceKey | GridColumnSpaceKey[]
  pt?: GridColumnSpaceKey | GridColumnSpaceKey[]
  pr?: GridColumnSpaceKey | GridColumnSpaceKey[]
  pb?: GridColumnSpaceKey | GridColumnSpaceKey[]
  pl?: GridColumnSpaceKey | GridColumnSpaceKey[]
  m?: GridColumnSpaceKey | GridColumnSpaceKey[]
  mx?: GridColumnSpaceKey | GridColumnSpaceKey[]
  my?: GridColumnSpaceKey | GridColumnSpaceKey[]
  mt?: GridColumnSpaceKey | GridColumnSpaceKey[]
  mr?: GridColumnSpaceKey | GridColumnSpaceKey[]
  mb?: GridColumnSpaceKey | GridColumnSpaceKey[]
  ml?: GridColumnSpaceKey | GridColumnSpaceKey[]
}

const widthCss = (width: GridColumnWidthValue | GridColumnWidthValue[]) => {
  const percentage = (columnWidth: number) => `${(columnWidth / 12) * 100}%`
  return Array.isArray(width) ? width.map(value => percentage(value)) : percentage(width)
}

const spacingCss = (theme: any, spaceKey: GridColumnSpaceKey | GridColumnSpaceKey[]) => {
  const spacing = (key: string) => theme.spacings[key]
  return Array.isArray(spaceKey) ? spaceKey.map(value => spacing(value)) : spacing(spaceKey)
}

const GridColumn = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'width'
})<GridColumnProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    width: props.width ? widthCss(props.width) : null,
    order: props.order || null,
    textAlign: props.textAlign || null,
    padding: props.p ? spacingCss(theme, props.p) : null,
    paddingTop: props.pt ? spacingCss(theme, props.pt) : props.py ? spacingCss(theme, props.py) : null,
    paddingRight: props.pr ? spacingCss(theme, props.pr) : props.px ? spacingCss(theme, props.px) : null,
    paddingBottom: props.pb ? spacingCss(theme, props.pb) : props.py ? spacingCss(theme, props.py) : null,
    paddingLeft: props.pl ? spacingCss(theme, props.pl) : props.px ? spacingCss(theme, props.px) : null,
    margin: props.m ? spacingCss(theme, props.m) : null,
    marginTop: props.mt ? spacingCss(theme, props.mt) : props.my ? spacingCss(theme, props.my) : null,
    marginRight: props.mr ? spacingCss(theme, props.mr) : props.mx ? spacingCss(theme, props.mx) : null,
    marginBottom: props.mb ? spacingCss(theme, props.mb) : props.my ? spacingCss(theme, props.my) : null,
    marginLeft: props.ml ? spacingCss(theme, props.ml) : props.mx ? spacingCss(theme, props.mx) : null
  })
})

export default GridColumn
