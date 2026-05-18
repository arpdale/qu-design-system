import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionHeader } from './section-header'
import { Button } from './button'
import { Filter } from './icons'

const meta: Meta<typeof SectionHeader> = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: { backgrounds: { default: 'app' } },
  args: { title: 'Totals' },
  decorators: [(Story) => <div style={{ width: 360, padding: 16 }}><Story /></div>],
}
export default meta

type Story = StoryObj<typeof SectionHeader>

export const Default: Story = {}

export const WithButtonAction: Story = {
  args: {
    title: 'Filters',
    action: (
      <Button variant="link" size="sm"><Filter size={16} /> Filters</Button>
    ),
  },
}

export const WithIconButton: Story = {
  args: {
    title: 'Checks',
    action: (
      <button type="button" aria-label="Export" className="border-0 bg-transparent p-1 text-[#339FB8]">
        <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3v12M7 8l5-5 5 5" />
          <path d="M5 14v6h14v-6" />
        </svg>
      </button>
    ),
  },
  parameters: { docs: { description: { story: 'Action slot accepts any node — buttons, icon buttons, links.' } } },
}

export const Heading3: Story = {
  args: { title: 'Subsection', as: 'h3' },
  parameters: { docs: { description: { story: 'Use `as="h3"` (or h4) when nesting inside another section for correct document outline.' } } },
}
