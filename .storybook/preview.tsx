import * as React from 'react'
import type { Preview } from '@storybook/react-vite'
import '../tokens.css'
import './preview.css'

/**
 * Sets data-fidelity on the document root so the wireframe token block in
 * tokens.css ([data-fidelity="wireframe"]) cascades to the whole canvas.
 * Removing the attribute restores hi-fi. Driven by the toolbar global below.
 */
function FidelityRoot({ fidelity, children }: { fidelity?: string; children: React.ReactNode }) {
  React.useEffect(() => {
    const root = document.documentElement
    if (fidelity && fidelity !== 'hifi') root.setAttribute('data-fidelity', fidelity)
    else root.removeAttribute('data-fidelity')
    return () => root.removeAttribute('data-fidelity')
  }, [fidelity])
  return <>{children}</>
}

const preview: Preview = {
  globalTypes: {
    fidelity: {
      description: 'Prototype fidelity — flip to wireframe for flow/UX reviews',
      defaultValue: 'hifi',
      toolbar: {
        title: 'Fidelity',
        icon: 'contrast',
        items: [
          { value: 'hifi', title: 'Hi-fi', icon: 'paintbrush' },
          { value: 'wireframe', title: 'Wireframe', icon: 'outline' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <FidelityRoot fidelity={context.globals.fidelity}>
        <Story />
      </FidelityRoot>
    ),
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: '#F4F4F4' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#0D2A4B' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
