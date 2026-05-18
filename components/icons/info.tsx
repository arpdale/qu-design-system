import * as React from 'react'
import type { IconProps } from './types'

export function Info({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.0001 22C17.5229 22 22.0001 17.5229 22.0001 12C22.0001 6.4771 17.5229 2 12.0001 2C6.4772 2 2.0001 6.4771 2.0001 12C2.0001 17.5229 6.4772 22 12.0001 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Info.displayName = 'Info'
