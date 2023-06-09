import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@dm-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'http://github.com/daniel-koti.png',
    alt: 'Daniel Moniz',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
