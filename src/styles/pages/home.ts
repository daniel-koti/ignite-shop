import { styled } from '..'

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const HomeWrapper = styled('div', {
  display: 'flex',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.5rem',
    right: '0.5rem',
    left: '0.5rem',
    padding: '2rem',

    borderRadius: 4,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

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

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
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
