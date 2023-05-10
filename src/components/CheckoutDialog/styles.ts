import { styled } from '@/src/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.0)',
})

export const Title = styled(Dialog.Title, {
  color: '$gray100',
  fontSize: '$lg',
  padding: '72px 48px 24px',
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  height: '100vh',
  width: 480,
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  zIndex: 10,
})

export const ContentWrapper = styled('div', {
  display: 'flex',
  height: '100%',

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    position: 'absolute',
    width: '100%',
    padding: '0 48px',
    bottom: 20,

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '$green500',
      height: '69px',
      border: 0,
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$white',
      borderRadius: 8,
      cursor: 'pointer',
      marginTop: '56px',

      '&:disabled': {
        filter: 'brightness(0.8)',
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      },
    },
  },
})

export const ContentWrapperQuantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  '& > span:last-child': {
    fontSize: '$md',
  },
})

export const ContentWrapperPrice = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  '& > span:first-child': {
    fontSize: '$md',
  },

  strong: {
    fontSize: '$xl',
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  border: 0,
  backgroundColor: 'transparent',
  top: '1.5rem',
  right: '1.5rem',
  cursor: 'pointer',

  lineHeight: 0,
  color: '$gray100',
})

export const ProductList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  padding: '0 48px',
})

export const ProductItem = styled('li', {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
})

export const ProductDetails = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',

  span: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: '160%',
  },

  strong: {
    fontSize: '$md',
    color: '$gray100',
    lineHeight: '160%',
  },

  button: {
    cursor: 'pointer',
    background: 'transparent',
    border: 0,
    color: '$green500',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ProductImageWrapper = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  height: '101.94px',
  width: '94.79px',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
