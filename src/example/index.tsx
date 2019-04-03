import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { Col, Row, Wrap } from '..'

const Section = styled.section({
  padding: '10px 0'
})

const Inner = styled.div({
  height: '400px',
  backgroundColor: 'blue',
  color: 'white'
})

const App: FunctionComponent = () => (
  <Section>
    <Wrap>
      <Row>
        <Col>
          <Inner>Col 1</Inner>
        </Col>
        <Col>
          <Inner>Col 2</Inner>
        </Col>
      </Row>
    </Wrap>
  </Section>
)

ReactDOM.render(<App />, document.getElementById('example'))

if (module.hot) {
  module.hot.accept()
}
