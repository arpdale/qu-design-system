import type { Preview } from '@storybook/react-vite'
import '../tokens.css'
import './preview.css'

const preview: Preview = {
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
