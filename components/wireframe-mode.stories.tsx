import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScreenHeader } from './screen-header'
import { SectionHeader } from './section-header'
import { MetricTile, MetricTileGrid } from './metric-tile'
import { Button } from './button'

/**
 * Fidelity / Wireframe Mode
 * ─────────────────────────
 * A composed dashboard screen used to demo the **low-fi flip**.
 *
 * Use the **"Fidelity"** control in the Storybook toolbar (top of the canvas)
 * to switch between:
 *   • Hi-fi     — the real, branded design system
 *   • Wireframe — grayscale, flat (no shadows/gradients), one uniform corner
 *                 radius, one neutral typeface
 *
 * Nothing about the layout, copy, or interactions changes between modes — only
 * the visual fidelity. That's the point: it moves a client review off color,
 * elevation, corner-rounding, and typeface, and onto flow and hierarchy.
 *
 * The flip is driven entirely by the `[data-fidelity="wireframe"]` token block
 * in tokens.css, so any screen built from these components inherits it for free.
 */

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 390,
        margin: '0 auto',
        background: 'var(--color-bg-app)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-3xl)',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  )
}

function DashboardScreen() {
  return (
    <Phone>
      <ScreenHeader
        title="Saturday"
        onBack={() => {}}
        rightSlot={
          <Button variant="tertiary" size="sm">
            Edit
          </Button>
        }
      />

      <div style={{ padding: '8px 16px 20px' }}>
        <p
          style={{
            margin: '0 0 12px',
            fontSize: 14,
            color: 'var(--color-text-secondary)',
          }}
        >
          May 18 · All dayparts · 3 locations
        </p>

        <SectionHeader
          title="Sales"
          action={
            <Button variant="link" size="sm">
              View report
            </Button>
          }
        />
        <MetricTileGrid cols={2}>
          <MetricTile label="Net Sales" value="$42,810" trend={11.8} trendLabel="$38,290" onClick={() => {}} />
          <MetricTile label="Avg Check" value="$18.42" trend={-1.2} trendLabel="$18.64" onClick={() => {}} />
          <MetricTile label="Checks" value="2,324" trend={6.4} trendLabel="2,184" onClick={() => {}} />
          <MetricTile label="Labor %" value="24.1%" trend={-2.3} trendLabel="26.4%" onClick={() => {}} />
        </MetricTileGrid>

        <div style={{ height: 20 }} />

        <SectionHeader title="Speed of service" />
        <MetricTile
          label="Drive-thru average"
          value="3m 12s"
          trend={-8.0}
          trendLabel="vs 3m 29s last Sat"
          onClick={() => {}}
        />

        <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
          <Button variant="primary" size="md" style={{ flex: 1 }}>
            Send daily report
          </Button>
          <Button variant="secondary" size="md">
            Export
          </Button>
        </div>
      </div>
    </Phone>
  )
}

const meta: Meta = {
  title: 'Foundations/Wireframe Mode',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'app' },
    docs: {
      description: {
        component:
          'Flip the **Fidelity** toolbar control (top of canvas) between Hi-fi and Wireframe. Same screen, two fidelities.',
      },
    },
  },
}
export default meta

type Story = StoryObj

/** A realistic dashboard screen. Toggle the Fidelity control to see it flip. */
export const Dashboard: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', padding: 24, boxSizing: 'border-box' }}>
      <DashboardScreen />
    </div>
  ),
}
