import * as React from 'react'
import type { IconProps } from './types'

export function TrendingUp({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M30.6667 8L18 20.6667L11.3334 14L1.33337 24" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M22.6666 8H30.6666V16" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
TrendingUp.displayName = 'TrendingUp'
