import * as React from 'react'
import type { IconProps } from './types'

export function Sliders({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.3333 6.66669H4" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 25.3333H4" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M18.6666 4V9.33333" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M21.3334 22.6667V28" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M28 16H16" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M28 25.3333H21.3334" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M28 6.66669H18.6666" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10.6666 13.3333V18.6666" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10.6667 16H4" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Sliders.displayName = 'Sliders'
