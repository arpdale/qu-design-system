import * as React from 'react'
import type { IconProps } from './types'

export function ArrowDown2({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 17L7.0001 17L7.0001 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M17 7L7.0001 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
ArrowDown2.displayName = 'ArrowDown2'
