import * as React from 'react'
import type { IconProps } from './types'

export function AlertCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63619 23.3638 2.66666 16 2.66666C8.63616 2.66666 2.66663 8.63619 2.66663 16C2.66663 23.3638 8.63616 29.3333 16 29.3333Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 10.6667V16" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 21.3333H16.0133" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
AlertCircle.displayName = 'AlertCircle'
