import { styled } from '..'
import Link from 'next/link'

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const HomeWrapper = styled('div', {
  display: 'flex',
})

export const ProductWrapper = styled('div', {
  position: 'relative',

  footer: {
    position: 'absolute',
    bottom: '0.5rem',
    right: '0.5rem',
    left: '0.5rem',
    padding: '1.25rem',

    borderRadius: 4,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    '> div': {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,

      strong: {
        fontSize: '$lg',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green500',
      },
    },

    button: {
      borderRadius: 6,
      background: '$green500',
      border: 0,
      color: '$white',
      height: 56,
      width: 56,
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const Product = styled(Link, {
  background: '$gray800',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 8,
  cursor: 'pointer',

  img: {
    objectFit: 'cover',
  },
})

export const ButtonSliderRight = styled('button', {
  position: 'absolute',
  border: 'none',
  top: 0,
  right: 0,
  height: '100%',
  width: 136,
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%);',
  color: '$gray300',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',

  '&:hover': {
    color: '$gray100',
  },
})

export const ButtonSliderLeft = styled('button', {
  position: 'absolute',
  border: 'none',
  top: 0,
  left: 0,
  height: '100%',
  width: 136,
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
  color: '$gray300',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',

  '&:hover': {
    color: '$gray100',
  },
})
