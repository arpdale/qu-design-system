import * as React from 'react'
import type { IconProps } from './types'

export function Clock({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22.0001C17.5229 22.0001 22 17.5229 22 12C22 6.4772 17.5229 2 12 2C6.4771 2 2 6.4772 2 12C2 17.5229 6.4771 22.0001 12 22.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 6V12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Clock.displayName = 'Clock'
