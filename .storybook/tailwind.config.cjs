const preset = require('../tailwind.config.js')

module.exports = {
  presets: [preset],
  content: [
    '../components/**/*.{ts,tsx}',
    '../stories/**/*.{ts,tsx,mdx}',
    './**/*.{ts,tsx,mdx}',
  ],
}
