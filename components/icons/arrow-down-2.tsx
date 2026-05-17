import * as React from 'react'
import type { IconProps } from './types'

export function ArrowDown2({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22.6667 22.6667L9.33342 22.6667L9.33342 9.33333" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M22.6667 9.33334L9.33342 22.6667" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
ArrowDown2.displayName = 'ArrowDown2'
