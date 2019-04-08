import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { GridColumn, GridRow, GridWrap } from './lib'
import { mq } from './lib/utilities/mq'

const globalStyles = css(
  mq()({
    body: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: [14, 16]
    },
    a: {
      color: '#19b5fe',
      textDecoration: 'none'
    }
  })
)

const Section = styled.section()

const Block = styled.div(
  mq()({
    height: 30,
    lineHeight: '30px',
    color: '#fff',
    fontSize: [10, 12],
    backgroundColor: '#19b5fe'
  })
)

const GroupBlock = styled.div({
  backgroundColor: 'rgba(0, 0, 0, 0.075)'
})

const Title = styled.h1(
  mq()({
    paddingBottom: 5,
    fontSize: [24, 36],
    fontWeight: 'bold'
  })
)

const SectionTitle = styled.h2(
  mq()({
    fontSize: [16, 21],
    fontWeight: 'bold'
  })
)

const App: FunctionComponent = () => (
  <>
    <Global styles={globalStyles} />
    <header>
      <GridColumn width={12} textAlign='center' pt='xl' pb={['l', 'xl']}>
        <Title>Emotion Flex Grid</Title>
        <p>
          A simple flexbox grid. Made with{' '}
          <a href='https://emotion.sh' target='_blank'>
            Emotion
          </a>
          .
        </p>
      </GridColumn>
    </header>
    <GridColumn mx={['s', 'm']}>
      <GridWrap>
        <Section>
          <GridColumn width={12} px={['xs', 's']}>
            <SectionTitle>Basic columns</SectionTitle>
            <p>Based on a 12 column grid.</p>
          </GridColumn>
          <GridRow>
            <GridColumn width={12} p={['xs', 's']} textAlign='center'>
              <Block>12 / 12</Block>
            </GridColumn>
            <GridColumn width={6} p={['xs', 's']} textAlign='center'>
              <Block>6 / 12</Block>
            </GridColumn>
            <GridColumn width={6} p={['xs', 's']} textAlign='center'>
              <Block>6 / 12</Block>
            </GridColumn>
            <GridColumn width={4} p={['xs', 's']} textAlign='center'>
              <Block>4 / 12</Block>
            </GridColumn>
            <GridColumn width={4} p={['xs', 's']} textAlign='center'>
              <Block>4 / 12</Block>
            </GridColumn>
            <GridColumn width={4} p={['xs', 's']} textAlign='center'>
              <Block>4 / 12</Block>
            </GridColumn>
            <GridColumn width={3} p={['xs', 's']} textAlign='center'>
              <Block>3 / 12</Block>
            </GridColumn>
            <GridColumn width={3} p={['xs', 's']} textAlign='center'>
              <Block>3 / 12</Block>
            </GridColumn>
            <GridColumn width={3} p={['xs', 's']} textAlign='center'>
              <Block>3 / 12</Block>
            </GridColumn>
            <GridColumn width={3} p={['xs', 's']} textAlign='center'>
              <Block>3 / 12</Block>
            </GridColumn>
            <GridColumn width={2} p={['xs', 's']} textAlign='center'>
              <Block>2 / 12</Block>
            </GridColumn>
            <GridColumn width={8} p={['xs', 's']} textAlign='center'>
              <Block>8 / 12</Block>
            </GridColumn>
            <GridColumn width={2} p={['xs', 's']} textAlign='center'>
              <Block>2 / 12</Block>
            </GridColumn>
          </GridRow>
        </Section>

        <Section>
          <GridColumn width={12} px={['xs', 's']}>
            <SectionTitle>Alignment</SectionTitle>
            <p>Align items</p>
          </GridColumn>
          <GridColumn width={12} p={['xs', 's']}>
            <GroupBlock>
              <GridRow align='start' style={{ height: 90 }}>
                <GridColumn width={4} textAlign='center' pr={['s', 'l']}>
                  <Block>start</Block>
                </GridColumn>
                <GridColumn width={4} textAlign='center' px={['xs', 's']}>
                  <Block>start</Block>
                </GridColumn>
                <GridColumn width={4} textAlign='center' pl={['s', 'l']}>
                  <Block>start</Block>
                </GridColumn>
              </GridRow>
            </GroupBlock>
          </GridColumn>

          <GridColumn width={12} p={['xs', 's']}>
            <GroupBlock>
              <GridRow align='center' style={{ height: 90 }}>
                <GridColumn width={4} textAlign='center' pr={['s', 'l']}>
                  <Block>center</Block>
                </GridColumn>
                <GridColumn width={4} textAlign='center' px={['xs', 's']}>
                  <Block>center</Block>
                </GridColumn>
                <GridColumn width={4} textAlign='center' pl={['s', 'l']}>
                  <Block>center</Block>
                </GridColumn>
              </GridRow>
            </GroupBlock>
          </GridColumn>

          <GridColumn width={12} p={['xs', 's']}>
            <GroupBlock>
              <GridRow align='end' style={{ height: 90 }}>
                <GridColumn width={4} textAlign='center' pr={['s', 'l']}>
                  <Block>end</Block>
                </GridColumn>
                <GridColumn width={4} textAlign='center' px={['xs', 's']}>
                  <Block>end</Block>
                </GridColumn>
                <GridColumn width={4} textAlign='center' pl={['s', 'l']}>
                  <Block>end</Block>
                </GridColumn>
              </GridRow>
            </GroupBlock>
          </GridColumn>

          <GridColumn width={12} px={['xs', 's']}>
            <p>Align self</p>
          </GridColumn>
          <GridColumn width={12} p={['xs', 's']}>
            <GroupBlock>
              <GridRow style={{ height: 90 }}>
                <GridColumn width={4} textAlign='center' pr={['s', 'l']} align='start'>
                  <Block>start</Block>
                </GridColumn>
                <GridColumn width={4} textAlign='center' px={['xs', 's']} align='center'>
                  <Block>center</Block>
                </GridColumn>
                <GridColumn width={4} textAlign='center' pl={['s', 'l']} align='end'>
                  <Block>end</Block>
                </GridColumn>
              </GridRow>
            </GroupBlock>
          </GridColumn>
        </Section>
      </GridWrap>
    </GridColumn>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
