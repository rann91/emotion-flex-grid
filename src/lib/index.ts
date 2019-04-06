import styled from '@emotion/styled'
import facepaint from 'facepaint'

export interface GridWrapProps {
  maxWidth?: number | string | Array<number | string>
}

export type GridRowWrapValue = 'wrap' | 'wrap-reverse' | 'nowrap'

export type GridRowAlignValue = 'start' | 'center' | 'end'

export type GridRowJustifyValue =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'

export type GridRowDirectionValue =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'

export interface GridRowProps {
  wrap?: GridRowWrapValue | GridRowWrapValue[]
  align?: GridRowAlignValue | GridRowAlignValue[]
  justify?: GridRowJustifyValue | GridRowJustifyValue[]
  direction?: GridRowDirectionValue | GridRowDirectionValue[]
}

export type GridColumnWidthValue =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12

export type GridColumnSpaceKey = 's' | 'm' | 'l' | 'xl'

export type GridColumnTextAlignValue = 'left' | 'right' | 'center'

export interface GridColumnProps {
  size?: GridColumnWidthValue | GridColumnWidthValue[]
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

const mergeThemes = (theme: any) => ({
  ...DEFAULT_THEME,
  ...theme
})

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

const widthProp = (size: GridColumnWidthValue | GridColumnWidthValue[]) =>
  Array.isArray(size)
    ? size.map(value => `${(value / 12) * 100}%`)
    : `${(size / 12) * 100}%`

const spaceProp = (
  theme: any,
  spaceKey: GridColumnSpaceKey | GridColumnSpaceKey[]
) =>
  Array.isArray(spaceKey)
    ? spaceKey.map(value => theme.spacings[value])
    : theme.spacings[spaceKey]

export const DEFAULT_THEME = {
  breakpoints: {
    s: 768,
    m: 1024,
    l: 1280,
    xl: 1440
  },
  spacings: {
    s: 10,
    m: 15,
    l: 30,
    xl: 60
  }
}

export const mq = (breakpoints: object = DEFAULT_THEME.breakpoints) => {
  const mediaQueries: string[] = Object.values(breakpoints).map(
    (breakpoint: number) => `@media(min-width: ${breakpoint}px)`
  )

  return facepaint(mediaQueries, { overlap: true })
}

export const GridWrap = styled.div<GridWrapProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    width: '100%',
    margin: 'auto',
    maxWidth: props.maxWidth || null
  })
})

export const GridRow = styled.div<GridRowProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    display: 'flex',
    flexWrap: props.wrap || 'wrap',
    flexDirection: props.direction || null,
    alignItems: props.align ? alignProp(props.align) : null,
    jusityContent: props.justify ? justifyProp(props.justify) : null
  })
})

export const GridColumn = styled.div<GridColumnProps>(props => {
  const theme = mergeThemes(props.theme)

  return mq(theme.breakpoints)({
    width: props.size ? widthProp(props.size) : null,
    order: props.order || null,
    textAlign: props.textAlign || null,
    padding: props.p ? spaceProp(theme, props.p) : null,
    paddingTop: props.pt
      ? spaceProp(theme, props.pt)
      : props.py
      ? spaceProp(theme, props.py)
      : null,
    paddingRight: props.pr
      ? spaceProp(theme, props.pr)
      : props.px
      ? spaceProp(theme, props.px)
      : null,
    paddingBottom: props.pb
      ? spaceProp(theme, props.pb)
      : props.py
      ? spaceProp(theme, props.py)
      : null,
    paddingLeft: props.pl
      ? spaceProp(theme, props.pl)
      : props.px
      ? spaceProp(theme, props.px)
      : null,
    margin: props.m ? spaceProp(theme, props.m) : null,
    marginTop: props.mt
      ? spaceProp(theme, props.mt)
      : props.my
      ? spaceProp(theme, props.my)
      : null,
    marginRight: props.mr
      ? spaceProp(theme, props.mr)
      : props.mx
      ? spaceProp(theme, props.mx)
      : null,
    marginBottom: props.mb
      ? spaceProp(theme, props.mb)
      : props.my
      ? spaceProp(theme, props.my)
      : null,
    marginLeft: props.ml
      ? spaceProp(theme, props.ml)
      : props.mx
      ? spaceProp(theme, props.mx)
      : null
  })
})
