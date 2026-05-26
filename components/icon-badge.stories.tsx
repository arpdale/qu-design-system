import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconBadge } from './icon-badge'
import { Bell, Package, Store } from './icons'

const meta: Meta<typeof IconBadge> = {
  title: 'Components/IconBadge',
  component: IconBadge,
  argTypes: {
    badge: { control: 'text' },
    color: { control: 'select', options: ['destructive', 'primary', 'success', 'info'] },
  },
  args: { badge: true, color: 'destructive' },
}
export default meta

type Story = StoryObj<typeof IconBadge>

export const Dot: Story = {
  render: (args) => (
    <IconBadge badge={args.badge} color={args.color}>
      <Bell size={24} />
    </IconBadge>
  ),
}

export const Count: Story = {
  args: { badge: 5 },
  render: (args) => (
    <IconBadge badge={args.badge} color={args.color}>
      <Bell size={24} />
    </IconBadge>
  ),
}

export const Overflow: Story = {
  render: () => (
    <IconBadge badge={142}>
      <Bell size={24} />
    </IconBadge>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <IconBadge badge={3} color="destructive">
        <Bell size={24} />
      </IconBadge>
      <IconBadge badge={7} color="primary">
        <Bell size={24} />
      </IconBadge>
      <IconBadge badge color="success">
        <Package size={24} />
      </IconBadge>
      <IconBadge badge={12} color="info">
        <Store size={24} />
      </IconBadge>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <IconBadge badge={false}>
        <Bell size={24} />
      </IconBadge>
      <IconBadge badge>
        <Bell size={24} />
      </IconBadge>
      <IconBadge badge={3}>
        <Bell size={24} />
      </IconBadge>
      <IconBadge badge={42}>
        <Bell size={24} />
      </IconBadge>
      <IconBadge badge={100}>
        <Bell size={24} />
      </IconBadge>
    </div>
  ),
}

export const NotificationBell: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-500">Alerts + Updates → red dot</p>
      <IconBadge badge color="destructive"><Bell size={22} /></IconBadge>

      <p className="text-sm text-gray-500">Updates only → cyan dot</p>
      <IconBadge badge color="primary"><Bell size={22} /></IconBadge>

      <p className="text-sm text-gray-500">No notifications</p>
      <IconBadge badge={false}><Bell size={22} /></IconBadge>
    </div>
  ),
}
