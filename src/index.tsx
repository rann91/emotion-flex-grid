import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { GridColumn, GridRow, GridWrap } from './lib'
import { mq } from './lib/utilities/mq'
import THEME from './lib/constants/theme'

const globalStyles = css({
  html: {
    fontSize: '1px'
  },
  body: {
    fontSize: '16rem',
    fontFamily: '"Open Sans", sans-serif'
  }
})

const Section = styled.section()

const Block = styled.div({
  height: '30px',
  backgroundColor: '#19b5fe'
})

const Title = styled.h1(
  mq(THEME.breakpoints)({
    fontSize: ['24rem', '32rem'],
    fontWeight: 'bold'
  })
)

const App: FunctionComponent = () => (
  <Section>
    <Global styles={globalStyles} />
    <GridColumn mx={['s', 'm']}>
      <GridWrap maxWidth={'1200rem'}>
        <GridColumn width={12} textAlign='center' p={['s', 'm']} pt={['m', 'l']}>
          <GridColumn pb={['s', 'm']}>
            <Title>Emotion Flex Grid</Title>
          </GridColumn>
          <p>A simple flexbox grid. Made with Emotion.</p>
        </GridColumn>
        <GridRow>
          <GridColumn width={[12, 4]} p={['s', 'm']}>
            <Block />
          </GridColumn>
          <GridColumn width={[12, 4]} p={['s', 'm']}>
            <Block />
          </GridColumn>
          <GridColumn width={[12, 4]} p={['s', 'm']}>
            <Block />
          </GridColumn>
        </GridRow>
      </GridWrap>
    </GridColumn>
  </Section>
)

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
