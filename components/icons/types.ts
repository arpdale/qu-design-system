import type * as React from 'react'

export type IconProps = Omit<React.SVGAttributes<SVGSVGElement>, 'width' | 'height'> & {
  /** Renders the icon at size × size px (default: 24). */
  size?: number | string
}
