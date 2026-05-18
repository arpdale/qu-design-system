import * as React from 'react'
import type { IconProps } from './types'

export function User({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.9998 13C14.7612 13 16.9997 10.7614 16.9997 8C16.9997 5.2386 14.7612 3 11.9998 3C9.2384 3 6.9998 5.2386 6.9998 8C6.9998 10.7614 9.2384 13 11.9998 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M19.9997 21C19.9997 18.8783 19.1569 16.8435 17.6566 15.3432C16.1563 13.8429 14.1215 13.0001 11.9998 13.0001C9.878 13.0001 7.8432 13.8429 6.3429 15.3432C4.8426 16.8435 3.9998 18.8783 3.9998 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
User.displayName = 'User'
