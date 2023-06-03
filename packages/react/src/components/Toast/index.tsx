import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastContainer,
  Title,
  Description,
  CloseButton,
  Viewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastContainer {...props}>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}

        <CloseButton>
          <X weight="light" size={20} />
        </CloseButton>
      </ToastContainer>

      <Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
