import * as React from 'react'
import type { IconProps } from './types'

export function ArrowRight({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.0001 12H19.0001M12.0001 19L19.0001 12L12.0001 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
ArrowRight.displayName = 'ArrowRight'
