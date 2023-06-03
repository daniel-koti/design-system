import type { StoryObj, Meta } from '@storybook/react'

import { Tooltip, TooltipProps, Button, Box } from '@dm-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Send email.</Button>,
    content: 'This is a send email',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            backgroundColor: '$gray600',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
