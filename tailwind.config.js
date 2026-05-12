/** @type {import('tailwindcss').Config} */

/**
 * Qu Notify — Tailwind CSS v3 configuration
 *
 * Derived directly from tokens.json. All values are hard-coded here
 * (not referencing CSS variables) so Tailwind can generate utility classes
 * at build time. The CSS custom-properties version lives in tokens.css for
 * runtime theming and non-Tailwind contexts.
 *
 * Usage:
 *   // tailwind.config.js in consuming project:
 *   const notifyPreset = require('notify-ds/tailwind.config')
 *   module.exports = { presets: [notifyPreset], content: [...] }
 */

module.exports = {
  theme: {
    extend: {

      // ── Colors ──────────────────────────────────────────────────────────────
      colors: {
        // Primitives — brand
        brand: {
          'tech-blue':   '#40CCF2',
          'teal':        '#339FB8',
          'red':         '#EF2149',
          'confidence':  '#B4002F',
          'stable-blue': '#0D2A4B',
          'quick-serve': '#E4ECEF',
          'gray-300':    '#6B7280',
        },

        // Primitives — neutral
        neutral: {
          'black':   '#000000',
          'white':   '#FFFFFF',
          'gray-50': '#F4F4F4',
          'gray-100':'#DEDEDE',
          'gray-200':'#C9C9C9',
          'gray-400':'#B1B1B1',
        },

        // Primitives — accents
        accent: {
          'green':        '#16A34A',
          'green-soft':   '#B3F5D1',
          'blue':         '#2F80ED',
          'blue-soft':    '#BEDBFF',
          'red-soft':     '#FFC9C9',
          'yellow':       '#EDC948',
          'yellow-soft':  '#FFF085',
          'orange':       '#FA6A0A',
          'orange-soft':  '#EAC1C3',
        },

        // Semantic
        primary:          '#40CCF2',
        'primary-fg':     '#000000',
        secondary:        '#339FB8',
        'nav-selected':   '#000000',
        inactive:         '#DEDEDE',
        'inactive-fg':    '#6B7280',
        destructive:      '#EF2149',
        success:          '#16A34A',
        'success-soft':   '#B3F5D1',
        warning:          '#EDC948',
        'warning-soft':   '#FFF085',
        error:            '#EF2149',
        'error-soft':     '#FFC9C9',
        alert:            '#FA6A0A',
        'alert-soft':     '#EAC1C3',
        info:             '#2F80ED',
        'info-soft':      '#BEDBFF',
        link:             '#2F80ED',
      },

      // ── Typography ──────────────────────────────────────────────────────────
      fontFamily: {
        primary:   ['Inter', 'system-ui', 'sans-serif'],
        secondary: ['Red Hat Text', 'Red Hat Display', 'system-ui', 'sans-serif'],
        display:   ['Zilla Slab', 'Georgia', 'serif'],
        system:    ['-apple-system', 'SF Pro', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        '2xs': ['10px', { lineHeight: '14px' }],
        xs:    ['12px', { lineHeight: '16px' }],
        sm:    ['14px', { lineHeight: '18px' }],
        md:    ['16px', { lineHeight: '22px' }],
        lg:    ['18px', { lineHeight: '24px' }],
        xl:    ['20px', { lineHeight: '26px' }],
        '2xl': ['24px', { lineHeight: '30px' }],
        '3xl': ['26px', { lineHeight: '32px' }],
        '4xl': ['30px', { lineHeight: '36px' }],
        '5xl': ['34px', { lineHeight: '40px' }],
        '6xl': ['40px', { lineHeight: '48px' }],
        '7xl': ['72px', { lineHeight: '80px' }],
      },

      fontWeight: {
        light:     '300',
        normal:    '400',
        medium:    '500',
        semibold:  '600',
        bold:      '700',
        extrabold: '800',
      },

      // ── Spacing ─────────────────────────────────────────────────────────────
      spacing: {
        xs:   '4px',
        sm:   '8px',
        md:   '10px',
        lg:   '16px',
        xl:   '18px',
        '2xl':'22px',
        '3xl':'24px',
        '4xl':'26px',
        '5xl':'30px',
        '6xl':'40px',
        '7xl':'48px',
        '8xl':'60px',
      },

      // ── Border radius ───────────────────────────────────────────────────────
      borderRadius: {
        xs:   '2px',
        sm:   '4px',
        md:   '6px',
        lg:   '8px',
        xl:   '12px',
        '2xl':'16px',
        '3xl':'24px',
        menu: '60px',
        full: '9999px',
      },

      // ── Shadows ─────────────────────────────────────────────────────────────
      boxShadow: {
        card:  '0px 4px 4px 0px rgba(0,0,0,0.06)',
        nav:   '0px 4px 4px 0px rgba(0,0,0,0.14)',
        modal: '0px 4px 4px 0px rgba(0,0,0,0.25)',
      },

      // ── Transitions ─────────────────────────────────────────────────────────
      transitionDuration: {
        fast:   '120ms',
        medium: '180ms',
      },

      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
      },

      // ── Component geometry constants ────────────────────────────────────────
      height: {
        'btn-xsm':  '24px',
        'btn-sm':   '32px',
        'btn-md':   '40px',
        'btn-lg':   '48px',
        'input':    '48px',
        'nav':      '72px',
        'tab-bar':  '40px',
      },

      maxWidth: {
        'phone':    '402px',
        'nav':      '360px',
      },

      // ── Opacity ──────────────────────────────────────────────────────────────
      opacity: {
        disabled: '0.5',
      },
    },
  },

  plugins: [],
}
