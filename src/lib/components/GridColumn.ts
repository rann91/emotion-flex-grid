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

const widthCss = (width: WidthProp | undefined) => {
  if (!width) {
    return null
  }

  const percentage = (columnWidth: number | null) => (columnWidth !== null ? `${(columnWidth / 12) * 100}%` : null)

  return Array.isArray(width) ? width.map(value => percentage(value)) : percentage(width)
}

const alignCss = (align: AlignProp | undefined) => {
  if (!align) {
    return null
  }

  const map: { [key in Align]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  }

  return Array.isArray(align) ? align.map(key => (key !== null ? map[key] : null)) : map[align]
}

const spacingCss = (theme: any, spaceKey: SpacingProp | undefined) => {
  if (!spaceKey) {
    return null
  }

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
    width: widthCss(props.width),
    order: props.order || null,
    alignSelf: alignCss(props.align),
    textAlign: props.textAlign || null,
    padding: spacingCss(theme, props.p),
    paddingTop: spacingCss(theme, props.pt || props.py),
    paddingRight: spacingCss(theme, props.pr || props.px),
    paddingBottom: spacingCss(theme, props.pb || props.py),
    paddingLeft: spacingCss(theme, props.pl || props.px),
    margin: spacingCss(theme, props.m),
    marginTop: spacingCss(theme, props.mt || props.my),
    marginRight: spacingCss(theme, props.mr || props.mx),
    marginBottom: spacingCss(theme, props.mb || props.my),
    marginLeft: spacingCss(theme, props.ml || props.mx)
  })
})

export default GridColumn
