import * as React from 'react'
import type { IconProps } from './types'

export function Extend({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 13V19C21 19.5305 20.7893 20.0392 20.4143 20.4143C20.0392 20.7893 19.5305 21 19 21H5C4.4696 21 3.9609 20.7893 3.5858 20.4143C3.2107 20.0392 3 19.5305 3 19V5C3 4.4696 3.2107 3.9609 3.5858 3.5858C3.9609 3.2107 4.4696 3 5 3H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M21 3L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Extend.displayName = 'Extend'
