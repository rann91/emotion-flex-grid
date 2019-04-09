import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { Global, css } from '@emotion/core'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { GridColumn, GridRow, GridWrap } from './lib'
import { mq } from './lib/utilities/mq'

const PRIMARY_COLOR = '#000'

const globalStyles = css(
  mq()({
    body: {
      fontFamily: '"Heebo", sans-serif',
      fontSize: [14, 16]
    },
    a: {
      color: 'inherit',
      textDecoration: 'none'
    }
  })
)

const Header = styled.header(
  mq()({
    backgroundColor: PRIMARY_COLOR,
    color: '#fff'
  })
)

const Block = styled.div(
  mq()({
    height: [30, 40],
    lineHeight: ['30px', '40px'],
    color: '#fff',
    fontSize: [10, 12],
    backgroundColor: PRIMARY_COLOR
  })
)

const GroupBlock = styled('div', {
  shouldForwardProp: (propName: string) => isPropValid(propName) && propName !== 'height'
})<{ height?: number | number[] }>(props =>
  mq()({
    padding: ['10px 5px', '20px 10px'],
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    '& > div': {
      height: props.height
    }
  })
)

const Title = styled.h1(
  mq()({
    paddingBottom: 5,
    fontSize: [24, 36, 52],
    fontWeight: 900
  })
)

const Subtitle = styled.h2(
  mq()({
    paddingTop: [15],
    fontSize: [18, 21],
    fontWeight: 300,
    textTransform: 'uppercase'
  })
)

const Description = styled.p(
  mq()({
    paddingTop: [10],
    fontSize: [12, 14],
    color: '#666'
  })
)

const App: FunctionComponent = () => (
  <>
    <Global styles={globalStyles} />
    <Header>
      <GridColumn textAlign='center' pt='xl' pb={['l', 'xl']}>
        <Title>Emotion Flex Grid</Title>
        <p>
          A simple, responsive flexbox grid. Made with{' '}
          <a href='https://emotion.sh' target='_blank'>
            Emotion
          </a>
          .
        </p>
      </GridColumn>
    </Header>
    <main>
      <GridColumn mx={['s', 'm']}>
        <GridWrap>
          <section>
            <GridColumn px={['xs', 's']}>
              <Subtitle>Basic columns</Subtitle>
              <Description>Based on a 12 column grid.</Description>
            </GridColumn>
            <GridRow>
              <GridColumn width={12} p={['xs', 's']} textAlign='center'>
                <Block />
              </GridColumn>
              <GridColumn width={4} p={['xs', 's']} textAlign='center'>
                <Block />
              </GridColumn>
              <GridColumn width={8} p={['xs', 's']} textAlign='center'>
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
              <GridColumn width={3} p={['xs', 's']} textAlign='center'>
                <Block />
              </GridColumn>
              <GridColumn width={2} p={['xs', 's']} textAlign='center'>
                <Block />
              </GridColumn>
              <GridColumn width={8} p={['xs', 's']} textAlign='center'>
                <Block />
              </GridColumn>
              <GridColumn width={2} p={['xs', 's']} textAlign='center'>
                <Block />
              </GridColumn>
            </GridRow>

            <GridColumn px={['xs', 's']}>
              <Description>Auto width</Description>
            </GridColumn>
            <GridRow>
              <GridColumn p={['xs', 's']}>
                <Block />
              </GridColumn>
              <GridColumn p={['xs', 's']}>
                <Block />
              </GridColumn>
              <GridColumn p={['xs', 's']}>
                <Block />
              </GridColumn>
            </GridRow>

            <GridColumn width={12} px={['xs', 's']}>
              <Description>Responsive (resize window)</Description>
            </GridColumn>
            <GridRow>
              <GridColumn width={[12, 6, 3]} p={['xs', 's']}>
                <Block />
              </GridColumn>
              <GridColumn width={[12, 6, 3]} p={['xs', 's']}>
                <Block />
              </GridColumn>
              <GridColumn width={[12, 6, 3]} p={['xs', 's']}>
                <Block />
              </GridColumn>
              <GridColumn width={[12, 6, 3]} p={['xs', 's']}>
                <Block />
              </GridColumn>
            </GridRow>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <Subtitle>Align</Subtitle>
              <Description>start</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock height={[90, 120]}>
                <GridRow align='start'>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
            <GridColumn px={['xs', 's']}>
              <Description>center</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock height={[90, 120]}>
                <GridRow align='center'>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
            <GridColumn px={['xs', 's']}>
              <Description>end</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock height={[90, 120]}>
                <GridRow align='end'>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <Subtitle>Align self</Subtitle>
              <Description>start | center | end</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock height={[90, 120]}>
                <GridRow>
                  <GridColumn px={['xs', 's']} align='start'>
                    <Block />
                  </GridColumn>
                  <GridColumn px={['xs', 's']} align='center'>
                    <Block />
                  </GridColumn>
                  <GridColumn px={['xs', 's']} align='end'>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <Subtitle>Justify</Subtitle>
              <Description>start</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock>
                <GridRow justify='start'>
                  <GridColumn width={4} px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
            <GridColumn px={['xs', 's']}>
              <Description>center</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock>
                <GridRow justify='center'>
                  <GridColumn width={4} textAlign='center' px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
            <GridColumn px={['xs', 's']}>
              <Description>end</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock>
                <GridRow justify='end'>
                  <GridColumn width={4} textAlign='center' px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
            <GridColumn px={['xs', 's']}>
              <Description>between</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock>
                <GridRow justify={'between'}>
                  <GridColumn width={3} textAlign='center' px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn width={3} textAlign='center' px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
            <GridColumn px={['xs', 's']}>
              <Description>around</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock>
                <GridRow justify={'around'}>
                  <GridColumn width={3} textAlign='center' px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn width={3} textAlign='center' px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
            <GridColumn px={['xs', 's']}>
              <Description>evenly</Description>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <GroupBlock>
                <GridRow justify={'evenly'}>
                  <GridColumn width={3} px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                  <GridColumn width={3} px={['xs', 's']}>
                    <Block />
                  </GridColumn>
                </GridRow>
              </GroupBlock>
            </GridColumn>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <Subtitle>Direction</Subtitle>
              <Description>row</Description>
            </GridColumn>
            <GridRow direction='row'>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>1</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>2</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>3</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>4</Block>
              </GridColumn>
            </GridRow>
            <GridColumn px={['xs', 's']}>
              <Description>row-reverse</Description>
            </GridColumn>
            <GridRow direction='row-reverse'>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>1</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>2</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>3</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>4</Block>
              </GridColumn>
            </GridRow>
            <GridColumn px={['xs', 's']}>
              <Description>column</Description>
            </GridColumn>
            <GridRow direction='column'>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>1</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>2</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>3</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>4</Block>
              </GridColumn>
            </GridRow>
            <GridColumn px={['xs', 's']}>
              <Description>column-reverse</Description>
            </GridColumn>
            <GridRow direction='column-reverse'>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>1</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>2</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>3</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']}>
                <Block>4</Block>
              </GridColumn>
            </GridRow>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <Subtitle>Ordering</Subtitle>
            </GridColumn>
            <GridRow>
              <GridColumn textAlign='center' p={['xs', 's']} order={3}>
                <Block>1</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']} order={1}>
                <Block>2</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']} order={4}>
                <Block>3</Block>
              </GridColumn>
              <GridColumn textAlign='center' p={['xs', 's']} order={2}>
                <Block>4</Block>
              </GridColumn>
            </GridRow>
          </section>
        </GridWrap>
      </GridColumn>
    </main>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
