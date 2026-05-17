import * as React from 'react'
import type { IconProps } from './types'

export function ArrowDown({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 6.66667V25.3333M6.66663 16L16 25.3333L25.3333 16" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
ArrowDown.displayName = 'ArrowDown'
