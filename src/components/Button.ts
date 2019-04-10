import styled from '@emotion/styled'
import { mq } from '../lib/utilities/mq'

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
      color: '#2f3640'
    },
    ':active': {
      color: '#fff',
      backgroundColor: 'transparent',
      transition: 'none '
    }
  })
)

export default Button
