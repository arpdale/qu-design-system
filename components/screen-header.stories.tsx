import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScreenHeader } from './screen-header'
import { Filter, MoreVertical } from './icons'

const meta: Meta<typeof ScreenHeader> = {
  title: 'Components/ScreenHeader',
  component: ScreenHeader,
  parameters: { backgrounds: { default: 'app' } },
  args: { title: 'Tills' },
  decorators: [(Story) => <div style={{ width: 402 }}><Story /></div>],
}
export default meta

type Story = StoryObj<typeof ScreenHeader>

export const WithBack: Story = {
  args: { onBack: () => {} },
}

export const NoBack: Story = {
  args: { title: 'Dashboard' },
  parameters: {
    docs: { description: { story: 'Omit `onBack` for root-level screens. Title stays optically centered (left column is reserved blank).' } },
  },
}

export const WithRightSlot: Story = {
  args: {
    title: 'Inventory',
    onBack: () => {},
    rightSlot: (
      <button
        type="button"
        aria-label="Filters"
        className="border-0 bg-transparent p-1 text-[#000] cursor-pointer"
      >
        <Filter size={20} />
      </button>
    ),
  },
}

export const LongTitle: Story = {
  args: {
    title: 'A Very Long Screen Title That Should Truncate',
    onBack: () => {},
    rightSlot: (
      <button
        type="button"
        aria-label="More"
        className="border-0 bg-transparent p-1 text-[#000] cursor-pointer"
      >
        <MoreVertical size={20} />
      </button>
    ),
  },
  parameters: {
    docs: { description: { story: 'Title is constrained to the middle column. Consumer may want to add truncate styles if this is a real risk.' } },
  },
}
