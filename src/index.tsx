import './polyfills'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { Global, css } from '@emotion/core'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { GridColumn, GridRow, GridWrap } from './lib'
import { mq } from './lib/utilities/mq'

const PRIMARY_COLOR = '#00a8ff'
const BASE_COLOR = '#2f3640'
const DESCRIPTION_COLOR = '#718093'
const CODE_BORDER_COLOR = '#dcdde1'
const CODE_BG_COLOR = '#f5f6fa'
const YEAR = new Date().getFullYear()

const globalStyles = css(
  mq()({
    body: {
      fontFamily: '"Heebo", sans-serif',
      fontSize: [14, 16],
      color: BASE_COLOR
    },
    a: {
      color: 'inherit'
    }
  })
)

const Header = styled.header(
  mq()({
    paddingTop: [40, 50],
    paddingBottom: [40, 50],
    textAlign: 'center',
    color: '#fff',
    backgroundColor: BASE_COLOR
  })
)

const Title = styled.h1(
  mq()({
    fontSize: [24, 36, 64],
    fontWeight: 900
  })
)

const Subtitle = styled.p(
  mq()({
    maxWidth: [230, 300, 'none'],
    margin: 'auto',
    paddingTop: [15],
    fontSize: [14, 18],
    fontWeight: 300,
    lineHeight: 1.4
  })
)

const ButtonContainer = styled.div(
  mq()({
    paddingTop: [20, 20, 30]
  })
)

const Button = styled.a(
  mq()({
    display: 'inline-block',
    padding: ['10px 20px', '15px 30px'],
    border: '1px solid #fff',
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'background-color 0.25s, color 0.25s',
    ':hover': {
      backgroundColor: '#fff',
      color: BASE_COLOR
    },
    ':active': {
      color: '#fff',
      backgroundColor: 'transparent',
      transition: 'none '
    }
  })
)

const SectionTitle = styled.h2(
  mq()({
    paddingTop: 15,
    fontSize: [18, 21],
    fontWeight: 300,
    textTransform: 'uppercase'
  })
)

const Description = styled.p(
  mq()({
    paddingTop: [10],
    fontSize: [12, 14],
    color: DESCRIPTION_COLOR
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
    border: `2px dashed ${PRIMARY_COLOR}`,
    '& > div': {
      height: props.height
    }
  })
)

const Code = styled.pre(
  mq()({
    padding: [10, 15],
    fontSize: [12, 14],
    whiteSpace: 'pre-wrap',
    border: `2px solid ${CODE_BORDER_COLOR}`,
    backgroundColor: CODE_BG_COLOR
  })
)

const Main = styled.main(
  mq()({
    paddingTop: [0, 15, 15, 15, 15, 30],
    paddingBottom: 10
  })
)

const Footer = styled.footer(
  mq()({
    paddingBottom: [15, 15, 15, 15, 15, 20],
    fontSize: 12,
    a: {
      color: PRIMARY_COLOR,
      textDecoration: 'none'
    }
  })
)

const App: FunctionComponent = () => (
  <>
    <Global styles={globalStyles} />
    <Header>
      <GridWrap maxWidth='75%'>
        <Title>Emotion Flex Grid</Title>
        <Subtitle>
          A simple, responsive flexbox grid. Made with{' '}
          <a href='https://emotion.sh' target='_blank'>
            Emotion
          </a>
          .
        </Subtitle>
        <ButtonContainer>
          <Button href='https://github.com/rann91/emotion-flex-grid'>Github</Button>
        </ButtonContainer>
      </GridWrap>
    </Header>
    <Main>
      <GridColumn mx={['s', 'm']}>
        <GridWrap>
          <section>
            <GridColumn px={['xs', 's']}>
              <SectionTitle>Basic columns</SectionTitle>
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

            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow>
  <GridColumn width={4}>
    <div>Content</div>
  </GridColumn>
  <GridColumn width={4}>
    <div>Content</div>
  </GridColumn>
  <GridColumn width={4}>
    <div>Content</div>
  </GridColumn>
</GridRow>`}
              </Code>
            </GridColumn>

            <GridColumn px={['xs', 's']}>
              <Description>Auto width (omit 'width' prop)</Description>
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

            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow>
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
            </GridColumn>

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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow>
  <GridColumn width={[12, 6, 3]} />
</GridRow>`}
              </Code>
            </GridColumn>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <SectionTitle>Alignment (row)</SectionTitle>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow align='start'>
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow align='center'>
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow align='end'>
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
            </GridColumn>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <SectionTitle>Alignment (columns)</SectionTitle>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow>
  <GridColumn align='start' />
  <GridColumn align='center' />
  <GridColumn align='end' />
</GridRow>`}
              </Code>
            </GridColumn>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <SectionTitle>Justify</SectionTitle>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow justify='start'>
  <GridColumn />
</GridRow>`}
              </Code>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow justify='center'>
  <GridColumn />
</GridRow>`}
              </Code>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow justify='end'>
  <GridColumn />
</GridRow>`}
              </Code>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow justify='between'>
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow justify='around'>
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
            </GridColumn>
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow justify='evenly'>
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
            </GridColumn>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <SectionTitle>Direction</SectionTitle>
              <Description>row (default)</Description>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow direction='row'>
  <GridColumn />
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
            </GridColumn>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow direction='row-reverse'>
  <GridColumn />
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
            </GridColumn>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow direction='column'>
  <GridColumn />
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
            </GridColumn>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow direction='column-reverse'>
  <GridColumn />
  <GridColumn />
  <GridColumn />
  <GridColumn />
</GridRow>`}
              </Code>
            </GridColumn>
          </section>

          <section>
            <GridColumn px={['xs', 's']}>
              <SectionTitle>Order</SectionTitle>
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
            <GridColumn p={['xs', 's']}>
              <Code>
                {`<GridRow>
  <GridColumn order={3} />
  <GridColumn order={1} />
  <GridColumn order={4} />
  <GridColumn order={2} />
</GridRow>`}
              </Code>
            </GridColumn>
          </section>
        </GridWrap>
      </GridColumn>
    </Main>
    <Footer>
      <GridColumn mx={['s', 'm']}>
        <GridWrap>
          <GridColumn p={['xs', 's']} textAlign='center'>
            &copy; 2019{YEAR !== 2019 ? ` - ${YEAR}` : ''} Ranjit Singh. View me on{' '}
            <a href='https://github.com/rann91' target='_blank'>
              Github
            </a>
            .
          </GridColumn>
        </GridWrap>
      </GridColumn>
    </Footer>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
