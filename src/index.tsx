import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { GridColumn, GridRow, GridWrap } from './lib'

const Section = styled.section()

const Inner = styled.div({
  height: '30px',
  backgroundColor: '#1e90ff'
})

const App: FunctionComponent = () => (
  <Section>
    <GridWrap maxWidth={['1200rem']}>
      <GridRow>
        <GridColumn size={[12, 4]} p={'s'}>
          <Inner />
        </GridColumn>
        <GridColumn size={[12, 4]} p={'s'}>
          <Inner />
        </GridColumn>
        <GridColumn size={[12, 4]} p={'s'}>
          <Inner />
        </GridColumn>
      </GridRow>
    </GridWrap>
  </Section>
)

ReactDOM.render(<App />, document.getElementById('example'))

if (module.hot) {
  module.hot.accept()
}
