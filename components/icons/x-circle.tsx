import * as React from 'react'
import type { IconProps } from './types'

export function XCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22C17.5229 22 22 17.5229 22 12C22 6.4771 17.5229 2 12 2C6.4771 2 2 6.4771 2 12C2 17.5229 6.4771 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
XCircle.displayName = 'XCircle'
