import * as React from 'react'
import type { IconProps } from './types'

export function Search({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.5817 15.4183 3 11 3C6.5817 3 3 6.5817 3 11C3 15.4183 6.5817 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Search.displayName = 'Search'
