# Emotion Flex Grid
A simple, responsive flexbox grid. Made with [Emotion](https://emotion.sh).

## Getting started
Make sure you have set up __Emotion__ and __Emotion Styled__ correctly in your project. See the [docs](https://emotion.sh/docs/introduction) for more info.

Install the package:

```
npm i emotion-flex-grid
```

Import the components:

```jsx
import React from 'react'
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

const App = () => {
  <GridWrap>
    <GridRow>
      <GridColumn>
        <div>Content here</div>
      </GridColumn>
    </GridRow>
  </GridWrap>
}
```

For a full example of this package, check out the [demo](https://rann91.github.io/emotion-flex-grid/)

## Components
Emotion Flex Grid comes with 3 components: GridWrap, GridRow and GridColumn. With these components you can set up a full grid layuout for your website. Below you can see a detailed description on how to use each component.

<!-- - Numeric values will automatically be converted to a pixel value by Emotion
- Passing a array of values will set properties for different breakpoints (mobile-first) -->

### <GridWrap \/>
Will always center horizontally. Has a default width of 1200px.

| Prop | Description | Values |
| :--- | :--- | :--- |
| maxWidth | max-width | `number` `string` |

<!-- Example:
```js
// Fixed maxWidth
<GridWrap maxWidth={1200} />

// Pass a string value with an unit
<GridWrap maxWidth={'1200rem'} />

// Pas an array for different breakpoints
// 320px by default, 768px on the first breakpoint, 1200px on the second breakpoint
<GridWrap maxWidth={[320, 768, 1200]} />
``` -->

### <GridRow \/>
All props are optional. Wraps columns by default.

| Prop | Description | Values |
| :--- | :--- | :--- |
| wrap | flex-wrap | `wrap` `wrap-reverse` `nowrap` `wrap` |
| direction | flex-direction | `row` `row-reverse` `column` `column-reverse` |
| align | align-items | `start` `center` `end` |
| justify | justify-content | `start` `center` `end` `between` `around` |

### <GridColumn \/>
All props are optional. When no width is given, column will flex (auto width).

| Prop | Description | Values |
| :--- | :--- | :--- |
| width | width | `1 to 12`
| order | flex order | `number`
| align | align-self | `start` `center` `end`
| textAlign | text-align | `left` `right` `center`
| p | padding | `xs` `s` `m` `l` `xl` `xxl` |
| px | horizontal padding | `xs` `s` `m` `l` `xl` `xxl` |
| py | vertical padding | `xs` `s` `m` `l` `xl` `xxl` |
| pt | padding-top | `xs` `s` `m` `l` `xl` `xxl` |
| pr | padding-right | `xs` `s` `m` `l` `xl` `xxl` |
| pb | padding-bottom | `xs` `s` `m` `l` `xl` `xxl` |
| pl | padding-left | `xs` `s` `m` `l` `xl` `xxl` |
| m | margin | `xs` `s` `m` `l` `xl` `xxl` |
| mx | horizontal margin | `xs` `s` `m` `l` `xl` `xxl` |
| my | vertical margin | `xs` `s` `m` `l` `xl` `xxl` |
| mt | margin-top | `xs` `s` `m` `l` `xl` `xxl` |
| mr | margin-right | `xs` `s` `m` `l` `xl` `xxl` |
| mb | margin-bottom | `xs` `s` `m` `l` `xl` `xxl` |
| ml | margin-left | `xs` `s` `m` `l` `xl` `xxl` |

## Customization
This package comes with default values for the maximum width, breakpoints and spacings.

## Browser support
Tested in all major browsers. For IE11, the [babel polyfill](https://babeljs.io/docs/en/babel-polyfill) needs to be included in your project.

## Inspired by
- [Rebass Grid](https://rebassjs.org/grid)
- [Flexbox Grid](http://flexboxgrid.com/)
