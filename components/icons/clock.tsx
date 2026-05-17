import * as React from 'react'
import type { IconProps } from './types'

export function Clock({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 29.3334C23.3638 29.3334 29.3333 23.3638 29.3333 16C29.3333 8.63622 23.3638 2.66669 16 2.66669C8.63616 2.66669 2.66663 8.63622 2.66663 16C2.66663 23.3638 8.63616 29.3334 16 29.3334Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 8V16H10.6666" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Clock.displayName = 'Clock'
