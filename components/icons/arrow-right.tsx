import * as React from 'react'
import type { IconProps } from './types'

export function ArrowRight({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.66675 16H25.3334M16.0001 25.3333L25.3334 16L16.0001 6.66666" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
ArrowRight.displayName = 'ArrowRight'
