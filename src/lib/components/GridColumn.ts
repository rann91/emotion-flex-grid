import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import mergeThemes from '../utilities/merge-themes'
import { mq } from '../utilities/mq'

type Width = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type Align = 'start' | 'center' | 'end'

type TextAlign = 'left' | 'right' | 'center'

export interface GridColumnProps {
  width?: Width | Width[]
  order?: number | number[]
  align?: Align
  textAlign?: TextAlign | TextAlign[]
  p?: string | string[]
  px?: string | string[]
  py?: string | string[]
  pt?: string | string[]
  pr?: string | string[]
  pb?: string | string[]
  pl?: string | string[]
  m?: string | string[]
  mx?: string | string[]
  my?: string | string[]
  mt?: string | string[]
  mr?: string | string[]
  mb?: string | string[]
  ml?: string | string[]
}

const widthCss = (width: Width | Width[]) => {
  const percentage = (columnWidth: number) => `${(columnWidth / 12) * 100}%`
  return Array.isArray(width) ? width.map(value => percentage(value)) : percentage(width)
}

const alignCss = (align: Align | Align[]) => {
  const map: { [key in Align]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  }

  return Array.isArray(align) ? align.map(key => map[key]) : map[align]
}

const spacingCss = (theme: any, spaceKey: string | string[]) => {
  const spacing = (key: string) => theme.spacings[key]
  return Array.isArray(spaceKey) ? spaceKey.map(value => spacing(value)) : spacing(spaceKey)
}

const GridColumn = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'width'
})<GridColumnProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    flex: !props.width ? 'auto' : null,
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
