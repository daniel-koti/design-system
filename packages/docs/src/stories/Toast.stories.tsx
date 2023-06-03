import { useEffect, useRef, useState } from 'react'
import { Button, ToastProps, Toast } from '@dm-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)
  const timeRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Data display/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Segunda-feira, 5 de Junho às 06h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
