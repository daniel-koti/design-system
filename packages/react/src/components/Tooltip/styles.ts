import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {})

export const Wrapper = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  borderRadius: '$xs',
  fontWeight: '$medium',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
