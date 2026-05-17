import * as React from 'react'
import type { IconProps } from './types'

export function ChevronLeft({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 24L12 16L20 8" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
ChevronLeft.displayName = 'ChevronLeft'
