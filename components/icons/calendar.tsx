import * as React from 'react'
import type { IconProps } from './types'

export function Calendar({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M25.3333 5.33334H6.66667C5.19391 5.33334 4 6.52725 4 8.00001V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V8.00001C28 6.52725 26.8061 5.33334 25.3333 5.33334Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M21.3334 2.66666V7.99999" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10.6666 2.66666V7.99999" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4 13.3333H28" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Calendar.displayName = 'Calendar'
