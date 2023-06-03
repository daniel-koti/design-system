import { ComponentProps, ReactNode } from 'react'
import { TooltipContainer, Wrapper, Arrow } from './styles'

import * as TooltipRadix from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipContainer {...props}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <Wrapper>
            <Arrow />

            {content}
          </Wrapper>
        </TooltipRadix.Portal>
      </TooltipContainer>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
