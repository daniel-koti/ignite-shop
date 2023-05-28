import { styled } from '@/src/styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  a: {
    textDecoration: 'none',
    color: '$gray100',

    '&:hover': {
      color: '$white',
    },
  },
})

export const CartButton = styled('button', {
  position: 'relative',
  border: 0,
  backgroundColor: '$gray800',
  color: '$gray300',
  height: 48,
  width: 48,
  cursor: 'pointer',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    position: 'absolute',
    background: '$green500',
    top: -10,
    right: -10,
    height: 24,
    width: 24,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    border: '2px solid $gray900',
  },
})
