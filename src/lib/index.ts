import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import facepaint from 'facepaint'

/**
 *
 * Typings
 */
type ResponsiveProp<T> = T | Array<T | null>

type Wrap = 'wrap' | 'wrap-reverse' | 'nowrap'

type WrapProp = ResponsiveProp<Wrap>

type Align = 'start' | 'center' | 'end'

type AlignProp = ResponsiveProp<Align>

type Justify = 'start' | 'center' | 'end' | 'between' | 'around'

type JustifyProp = ResponsiveProp<Justify>

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

type DirectionProp = ResponsiveProp<Direction>

type Width = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | string

type WidthProp = ResponsiveProp<Width>

type OrderProp = ResponsiveProp<number>

type TextAlign = 'left' | 'right' | 'center'

type TextAlignProp = ResponsiveProp<TextAlign>

type Spacing = string | 0

type SpacingProp = ResponsiveProp<Spacing>

type DisplayProp = ResponsiveProp<string>

type FlexProp = ResponsiveProp<string>

/**
 *
 * Constants
 */
const THEME = {
  breakpoints: {
    xs: 480,
    s: 768,
    m: 1024,
    l: 1280,
    xl: 1440,
    xxl: 1920
  },
  spacings: {
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
    xl: 30,
    xxl: 60
  },
  defaults: {
    grid: {
      wrap: {
        maxWidth: 1200
      }
    }
  }
}

/**
 *
 * Utilities
 */
const mergeThemes = (propTheme: any) => ({
  ...THEME,
  ...propTheme
})

const mq = (breakpoints: object) => {
  const mediaQueries: string[] = Object.values(breakpoints).map(
    (breakpoint: number) => `@media(min-width: ${breakpoint}px)`
  )

  return facepaint(mediaQueries, { overlap: true })
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

  return Array.isArray(align) ? align.map((key) => (key !== null ? map[key] : null)) : map[align]
}

const justifyCss = (justify: JustifyProp | undefined) => {
  if (!justify) {
    return null
  }

  const map: { [key in Justify]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around'
  }

  return Array.isArray(justify) ? justify.map((key) => (key !== null ? map[key] : null)) : map[justify]
}

const widthCss = (width: WidthProp | undefined) => {
  if (width === undefined) {
    return null
  }

  const percentage = (columnWidth: number | null) => (columnWidth !== null ? `${(columnWidth / 12) * 100}%` : null)

  return Array.isArray(width)
    ? width.map((value) => (typeof value === 'string' ? value : percentage(value)))
    : typeof width === 'string'
    ? width
    : percentage(width)
}

const spacingCss = (theme: any, spaceKey: SpacingProp | undefined) => {
  if (!spaceKey && spaceKey !== 0) {
    return null
  }

  const spacing = (key: string | null | 0) => (key !== null && key !== 0 ? theme.spacings[key] : key === 0 ? 0 : null)

  return Array.isArray(spaceKey) ? spaceKey.map((value) => spacing(value)) : spacing(spaceKey)
}

/**
 *
 * Components
 */
export interface GridWrapProps {
  display?: DisplayProp
  maxWidth?: ResponsiveProp<number | string>
}

export const GridWrap = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'display'
})<GridWrapProps>((props) => {
  const theme = mergeThemes(props.theme)
  const { maxWidth } = theme.defaults.grid.wrap

  return mq(theme.breakpoints)({
    display: props.display || null,
    width: '100%',
    margin: 'auto',
    maxWidth: props.maxWidth || maxWidth
  })
})

export interface GridRowProps {
  display?: DisplayProp
  wrap?: WrapProp
  direction?: DirectionProp
  align?: AlignProp
  justify?: JustifyProp
}

export const GridRow = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'wrap' && prop !== 'direction' && prop !== 'display'
})<GridRowProps>((props) => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    display: props.display || 'flex',
    flexWrap: props.wrap || null,
    flexDirection: props.direction || null,
    alignItems: alignCss(props.align),
    justifyContent: props.justify ? justifyCss(props.justify) : null
  })
})

export interface GridColumnProps {
  display?: DisplayProp
  width?: WidthProp
  offset?: WidthProp
  order?: OrderProp
  align?: AlignProp
  textAlign?: TextAlignProp
  flex?: FlexProp
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

export const GridColumn = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'width' && prop !== 'display' && prop !== 'offset'
})<GridColumnProps>((props) => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    display: props.display || null,
    flex: props.flex !== undefined ? props.flex : props.width === undefined ? '1 0 auto' : null,
    width: widthCss(props.width),
    order: props.order !== undefined ? props.order : null,
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
    marginLeft: props.offset ? widthCss(props.offset) : spacingCss(theme, props.ml || props.mx)
  })
})
