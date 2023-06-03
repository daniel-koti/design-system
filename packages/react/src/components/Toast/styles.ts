import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles/index'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  padding: '$3 $4',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const Title = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const Description = styled(Toast.Description, {
  color: '$gray200',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  marginTop: '$1',
})

export const CloseButton = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  backgroundColor: 'transparent',
  border: 0,
  color: '$gray200',
  cursor: 'pointer',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: VIEWPORT_PADDING,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 99999,
  outline: 'none',
})
