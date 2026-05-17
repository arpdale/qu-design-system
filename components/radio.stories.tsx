import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from './radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  args: { label: 'Option', name: 'demo', value: 'a' },
}
export default meta

type Story = StoryObj<typeof Radio>

export const Unselected: Story = {}
export const Selected: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }

export const Group: StoryObj = {
  render: () => {
    const [val, setVal] = React.useState('week')
    return (
      <RadioGroup label="Time period" name="period" value={val} onChange={setVal}>
        <Radio value="day"   label="Day" />
        <Radio value="week"  label="Week" />
        <Radio value="month" label="Month" />
      </RadioGroup>
    )
  },
}

export const GroupHorizontal: StoryObj = {
  render: () => {
    const [val, setVal] = React.useState('all')
    return (
      <RadioGroup label="Status" name="status" orientation="horizontal" value={val} onChange={setVal}>
        <Radio value="all"    label="All" />
        <Radio value="open"   label="Open" />
        <Radio value="closed" label="Closed" />
      </RadioGroup>
    )
  },
}
