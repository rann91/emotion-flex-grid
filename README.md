# Emotion Flex Grid

![npm](https://img.shields.io/npm/v/emotion-flex-grid.svg?color=%2344cc11&style=flat-square)
![Travis (.org)](https://img.shields.io/travis/rann91/emotion-flex-grid.svg?style=flat-square)
![npm](https://img.shields.io/badge/size-36.8kB-brightgreen.svg?style=flat-square)
![npm](https://img.shields.io/npm/dt/emotion-flex-grid.svg?style=flat-square)

A simple, responsive flexbox grid. Made with [Emotion](https://emotion.sh).

## Getting started

Make sure you have set up emotion with styled correctly. See the [Emotion docs](https://emotion.sh/docs/introduction) for more info. After that, install this package with NPM and import the components you need in your React application. For a detailed description about using the components, please see the [Components](#Components) section.

```
npm i emotion-flex-grid
```

```jsx
import React from 'react'
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

const App = () => (
  <section>
    <GridColumn mx={['s', 'm']}>
      <GridWrap>
        <GridRow>
          <GridColumn width={[12, 3]}>
            <div>Content</div>
          </GridColumn>
          <GridColumn width={[12, 3]}>
            <div>Content</div>
          </GridColumn>
          <GridColumn width={[12, 3]}>
            <div>Content</div>
          </GridColumn>
        </GridRow>
      </GridWrap>
    </GridColumn>
  </section>
)
```

For a full example, check out the [demo](https://rann91.github.io/emotion-flex-grid/).

## Components

This package comes with 3 components: GridWrap, GridRow and GridColumn. With these components you can set up a complete grid for your website. Columns are based on a _12 column_ grid system. Below you can see a full overview of each component and the props you can pass to each component.

Numeric values will automatically be converted to a pixel value by Emotion. You can pass an array of values (specified below for each component) to set values for different breakpoints (mobile-first). To skip breakpoints, you can use `null`. See the [Customization](#Customization) section for more info on changing the default breakpoints, spacings and other defaults.

### Responsive display

Each component has a `display` prop, which can be used to change the css display property. You can use this to hide or show elements on specific breakpoints.

### <GridWrap \/>

Use this component to place your content inside a container with a maximum width. Will always center horizontally. Has a default max-width of _1200px_.

| Prop     | Description | Values            |
| :------- | :---------- | :---------------- |
| display  | display     | `string`          |
| maxWidth | max-width   | `number` `string` |

```jsx
// Numeric value
<GridWrap maxWidth={1200} />

// Custom string value
<GridWrap maxWidth='1200rem' />

// Disable max-width
<GridWrap maxWidth='none' />

// Array of values for different breakpoints
<GridWrap maxWidth={['none', 960, 1200 ]} />
```

### <GridRow \/>

Use this component in combination with GridColumn. All props are optional.

| Prop      | Description     | Values                                        |
| :-------- | :-------------- | :-------------------------------------------- |
| display   | display         | `string`                                      |
| wrap      | flex-wrap       | `wrap` `wrap-reverse` `nowrap` `wrap`         |
| direction | flex-direction  | `row` `row-reverse` `column` `column-reverse` |
| align     | align-items     | `start` `center` `end`                        |
| justify   | justify-content | `start` `center` `end` `between` `around`     |

```jsx
<GridRow wrap='nowrap' align='center' justify='between'>
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>
```

### <GridColumn \/>

Use this component inside a GridRow or use it standalone. All props are optional. When no width **and** flex are given, columns will automatically flex (when inside a GridRow).

| Prop      | Description        | Values                      |
| :-------- | :----------------- | :-------------------------- |
| display   | display            | `string`                    |
| width     | width              | `1 to 12` `string`          |
| offset    | offset             | same as width               |
| order     | flex order         | `number`                    |
| align     | align-self         | `start` `center` `end`      |
| textAlign | text-align         | `left` `right` `center`     |
| flex      | flex               | `string`                    |
| p         | padding            | `xs` `s` `m` `l` `xl` `xxl` |
| px        | horizontal padding | `xs` `s` `m` `l` `xl` `xxl` |
| py        | vertical padding   | `xs` `s` `m` `l` `xl` `xxl` |
| pt        | padding-top        | `xs` `s` `m` `l` `xl` `xxl` |
| pr        | padding-right      | `xs` `s` `m` `l` `xl` `xxl` |
| pb        | padding-bottom     | `xs` `s` `m` `l` `xl` `xxl` |
| pl        | padding-left       | `xs` `s` `m` `l` `xl` `xxl` |
| m         | margin             | `xs` `s` `m` `l` `xl` `xxl` |
| mx        | horizontal margin  | `xs` `s` `m` `l` `xl` `xxl` |
| my        | vertical margin    | `xs` `s` `m` `l` `xl` `xxl` |
| mt        | margin-top         | `xs` `s` `m` `l` `xl` `xxl` |
| mr        | margin-right       | `xs` `s` `m` `l` `xl` `xxl` |
| mb        | margin-bottom      | `xs` `s` `m` `l` `xl` `xxl` |
| ml        | margin-left        | `xs` `s` `m` `l` `xl` `xxl` |

```jsx
<GridRow>
  <GridColumn width={4} p={['s', 'm']} />
  <GridColumn width={4} p={['s', 'm']} />
  <GridColumn width={4} p={['s', 'm']} />
</GridRow>
```

## Customization

This package comes with default values for the breakpoints, spacings, max-width and flex-direction. If you want to use other values than specified in this package, you need to set up theming in your project. See the [Emotion Theming](https://emotion.sh/docs/theming) docs to set this up quickly. When you have set up theming, create a theme configuration. Below is an example of the theme configuration used in this package:

```js
const theme = {
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
```

Simply copy this configuration to your own theme configuration and adjust the values for your project.

**Note: make sure you don't change the structure of the configuration above, otherwise things will break!**

## Inspiration

- [Rebass Grid](https://rebassjs.org/grid)
- [Flexbox Grid](http://flexboxgrid.com/)
