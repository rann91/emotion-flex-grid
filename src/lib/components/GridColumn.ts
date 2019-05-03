import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import { ResponsiveProp } from '../typings'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

type Width = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type WidthProp = ResponsiveProp<Width>

type OrderProp = ResponsiveProp<number>

type Align = 'start' | 'center' | 'end'

type AlignProp = ResponsiveProp<Align>

type TextAlign = 'left' | 'right' | 'center'

type TextAlignProp = ResponsiveProp<TextAlign>

type SpacingProp = ResponsiveProp<string>

export interface GridColumnProps {
  width?: WidthProp
  order?: OrderProp
  align?: AlignProp
  textAlign?: TextAlignProp
  p?: SpacingProp
  px?: SpacingProp
  py?: SpacingProp
  pt?: SpacingProp
  pr?: SpacingProp
  pb?: SpacingProp
  pl?: SpacingProp
  m?: SpacingProp
  mx?: SpacingProp
  my?: SpacingProp
  mt?: SpacingProp
  mr?: SpacingProp
  mb?: SpacingProp
  ml?: SpacingProp
}

const widthCss = (width: WidthProp) => {
  const percentage = (columnWidth: number | null) => (columnWidth !== null ? `${(columnWidth / 12) * 100}%` : null)

  return Array.isArray(width) ? width.map(value => percentage(value)) : percentage(width)
}

const alignCss = (align: AlignProp) => {
  const map: { [key in Align]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  }

  return Array.isArray(align) ? align.map(key => (key !== null ? map[key] : null)) : map[align]
}

const spacingCss = (theme: any, spaceKey: SpacingProp) => {
  const spacing = (key: string | null) => (key !== null ? theme.spacings[key] : null)

  return Array.isArray(spaceKey) ? spaceKey.map(value => spacing(value)) : spacing(spaceKey)
}

const GridColumn = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'width'
})<GridColumnProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    flex: !props.width ? 1 : null,
    msFlex: !props.width ? 'auto' : null,
    width: props.width ? widthCss(props.width) : null,
    order: props.order || null,
    alignSelf: props.align ? alignCss(props.align) : null,
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
