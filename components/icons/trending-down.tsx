import * as React from 'react'
import type { IconProps } from './types'

export function TrendingDown({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M30.6667 24L18 11.3333L11.3334 18L1.33337 8" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M22.6666 24H30.6666V16" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
TrendingDown.displayName = 'TrendingDown'
