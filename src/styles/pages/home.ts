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
      padding: 12,
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
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 8,
  cursor: 'pointer',

  img: {
    objectFit: 'cover',
  },
})

export const ButtonContainer = styled('div', {
  marginTop: '1rem',

  display: 'flex',
  gap: '0.5rem',

  button: {
    padding: '1rem',
    cursor: 'pointer',
    borderRadius: 4,
    border: '1px solid $green500',
    backgroundColor: 'transparent',
    color: '$green500',
    fontSize: '1.125rem',

    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
})
