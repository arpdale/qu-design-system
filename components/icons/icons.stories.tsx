import type * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import * as Icons from './index'

type GalleryArgs = { size: number; color: string }

const ICON_GROUPS: Record<string, string[]> = {
  Navigation: [
    'ChevronLeft', 'ChevronRight', 'ChevronUp', 'ChevronDown',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Menu', 'Close', 'ArrowUp2', 'ArrowDown2',
  ],
  Business: ['Dashboard', 'Package', 'Store', 'TrendingUp', 'TrendingDown'],
  Interface: [
    'Bell', 'BellDot', 'Calendar', 'Search', 'Filter', 'Sliders',
    'MoreVertical', 'MoreHorizontal', 'Plus', 'Minus', 'Check', 'CheckBadge',
    'AlertCircle', 'Info', 'HelpCircle', 'FaceId', 'User',
    'View', 'Hide', 'Lock', 'OpenLock', 'Clock', 'Local', 'Extend',
  ],
  Media: ['Download', 'Upload'],
  Status: ['CheckCircle', 'XCircle', 'AlertTriangle', 'Refresh'],
}

type IconKey = keyof typeof Icons

function IconTile({ name, size, color }: { name: string; size: number; color: string }) {
  const Cmp = (Icons as unknown as Record<string, React.FC<{ size?: number }>>)[name]
  if (!Cmp) return null
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-neutral-gray-100 p-3 min-w-[110px]">
      <div style={{ color }}>
        <Cmp size={size} />
      </div>
      <span className="font-mono text-[11px] text-neutral-gray-400 select-all">{name}</span>
    </div>
  )
}

const meta: Meta = {
  title: 'Icons/Gallery',
  parameters: { layout: 'padded' },
}
export default meta

export const AllIcons: StoryObj<GalleryArgs> = {
  args: { size: 24, color: 'currentColor' },
  argTypes: {
    size: { control: { type: 'range', min: 12, max: 64, step: 2 } },
    color: { control: 'color' },
  },
  render: ({ size, color }) => (
    <div className="flex flex-col gap-6">
      {Object.entries(ICON_GROUPS).map(([group, names]) => (
        <section key={group} className="flex flex-col gap-3">
          <h3 className="font-sans text-sm font-semibold tracking-wide uppercase text-neutral-gray-400">
            {group} <span className="font-normal text-neutral-gray-200">({names.length})</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {names.map((n) => (
              <IconTile key={n} name={n} size={size} color={color} />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
}

export const ColorAndSize: StoryObj<GalleryArgs> = {
  args: { size: 32, color: '#339FB8' },
  argTypes: {
    size: { control: { type: 'range', min: 12, max: 96, step: 2 } },
    color: { control: 'color' },
  },
  render: ({ size, color }) => {
    const sample: IconKey[] = ['Bell', 'Calendar', 'Search', 'CheckCircle', 'TrendingUp', 'AlertTriangle']
    return (
      <div className="flex flex-wrap gap-6" style={{ color }}>
        {sample.map((n) => {
          const Cmp = (Icons as unknown as Record<string, React.FC<{ size?: number }>>)[n]
          return (
            <div key={n} className="flex flex-col items-center gap-2">
              <Cmp size={size} />
              <span className="font-mono text-[11px]">{n}</span>
            </div>
          )
        })}
      </div>
    )
  },
}
