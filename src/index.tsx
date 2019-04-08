import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { GridColumn, GridRow, GridWrap } from './lib'
import { mq } from './lib/utilities/mq'
import THEME from './lib/constants/theme'

const globalStyles = css({
  body: {
    fontFamily: '"Open Sans", sans-serif'
  },
  a: {
    color: '#19b5fe',
    textDecoration: 'none'
  }
})

const Block = styled.div({
  height: 30,
  lineHeight: '30px',
  color: '#fff',
  fontSize: 12,
  backgroundColor: '#19b5fe'
})

const Title = styled.h1(
  mq(THEME.breakpoints)({
    fontSize: [24, 32],
    fontWeight: 'bold'
  })
)

const App: FunctionComponent = () => (
  <>
    <Global styles={globalStyles} />
    <GridColumn mx={['s', 'm']}>
      <GridWrap>
        <GridColumn width={12} textAlign='center' p={['s', 'm']} pt={['l', 'xl']}>
          <GridColumn pb={['s', 'm']}>
            <Title>Emotion Flex Grid</Title>
          </GridColumn>
          <p>
            A simple flexbox grid. Made with{' '}
            <a href='https://emotion.sh' target='_blank'>
              Emotion
            </a>
            .
          </p>
        </GridColumn>
        <GridRow>
          <GridColumn width={12} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={6} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
          <GridColumn width={6} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={4} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
          <GridColumn width={4} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
          <GridColumn width={4} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={3} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
          <GridColumn width={3} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
          <GridColumn width={3} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
          <GridColumn width={3} p={['xs', 's']} textAlign='center'>
            <Block />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={2} p={['xs', 's']}>
            <Block />
          </GridColumn>
          <GridColumn width={8} p={['xs', 's']}>
            <Block />
          </GridColumn>
          <GridColumn width={2} p={['xs', 's']}>
            <Block />
          </GridColumn>
        </GridRow>
      </GridWrap>
    </GridColumn>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
