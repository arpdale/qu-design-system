import * as React from 'react'
import type { IconProps } from './types'

export function ChevronUp({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M24 20L16 12L8 20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
ChevronUp.displayName = 'ChevronUp'
