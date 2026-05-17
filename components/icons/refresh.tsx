import * as React from 'react'
import type { IconProps } from './types'

export function Refresh({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2348 5.26428 19.1826 4 16 4C12.6453 4.01262 9.42529 5.32163 7.01333 7.65333L4 10.6667" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4 4V10.6667H10.6667" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28C19.3547 27.9874 22.5747 26.6784 24.9867 24.3467L28 21.3333" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M21.3334 21.3334H28V28" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Refresh.displayName = 'Refresh'
