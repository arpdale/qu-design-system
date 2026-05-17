import * as React from 'react'
import type { IconProps } from './types'

export function MoreVertical({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.0001 7.99998C16.7365 7.99998 17.3334 7.40303 17.3334 6.66665C17.3334 5.93027 16.7365 5.33331 16.0001 5.33331C15.2637 5.33331 14.6667 5.93027 14.6667 6.66665C14.6667 7.40303 15.2637 7.99998 16.0001 7.99998Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16.0001 17.3334C16.7365 17.3334 17.3334 16.7364 17.3334 16C17.3334 15.2636 16.7365 14.6667 16.0001 14.6667C15.2637 14.6667 14.6667 15.2636 14.6667 16C14.6667 16.7364 15.2637 17.3334 16.0001 17.3334Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16.0001 26.6667C16.7365 26.6667 17.3334 26.0697 17.3334 25.3333C17.3334 24.597 16.7365 24 16.0001 24C15.2637 24 14.6667 24.597 14.6667 25.3333C14.6667 26.0697 15.2637 26.6667 16.0001 26.6667Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
MoreVertical.displayName = 'MoreVertical'
