import * as React from 'react'
import type { IconProps } from './types'

export function Lock({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.0003 22.6667C16.7367 22.6667 17.3337 22.0697 17.3337 21.3333C17.3337 20.597 16.7367 20 16.0003 20C15.2639 20 14.667 20.597 14.667 21.3333C14.667 22.0697 15.2639 22.6667 16.0003 22.6667Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M25.3333 13.3333H6.66667C5.19391 13.3333 4 14.5273 4 16V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V16C28 14.5273 26.8061 13.3333 25.3333 13.3333Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M9.33301 13.3333V9.33329C9.33301 7.56518 10.0354 5.86949 11.2856 4.61925C12.5359 3.369 14.2316 2.66663 15.9997 2.66663C17.7678 2.66663 19.4635 3.369 20.7137 4.61925C21.964 5.86949 22.6663 7.56518 22.6663 9.33329V13.3333" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Lock.displayName = 'Lock'
