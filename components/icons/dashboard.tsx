import * as React from 'react'
import type { IconProps } from './types'

export function Dashboard({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 4H5.33333C4.59695 4 4 4.59695 4 5.33333V12C4 12.7364 4.59695 13.3333 5.33333 13.3333H12C12.7364 13.3333 13.3333 12.7364 13.3333 12V5.33333C13.3333 4.59695 12.7364 4 12 4Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M26.6666 4H20C19.2636 4 18.6666 4.59695 18.6666 5.33333V12C18.6666 12.7364 19.2636 13.3333 20 13.3333H26.6666C27.403 13.3333 28 12.7364 28 12V5.33333C28 4.59695 27.403 4 26.6666 4Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M26.6666 18.6667H20C19.2636 18.6667 18.6666 19.2636 18.6666 20V26.6667C18.6666 27.4031 19.2636 28 20 28H26.6666C27.403 28 28 27.4031 28 26.6667V20C28 19.2636 27.403 18.6667 26.6666 18.6667Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 18.6667H5.33333C4.59695 18.6667 4 19.2636 4 20V26.6667C4 27.4031 4.59695 28 5.33333 28H12C12.7364 28 13.3333 27.4031 13.3333 26.6667V20C13.3333 19.2636 12.7364 18.6667 12 18.6667Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Dashboard.displayName = 'Dashboard'
