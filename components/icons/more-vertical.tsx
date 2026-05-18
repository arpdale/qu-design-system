import * as React from 'react'
import type { IconProps } from './types'

export function MoreVertical({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.0001 6C12.5524 6 13.0001 5.5523 13.0001 5C13.0001 4.4477 12.5524 4 12.0001 4C11.4478 4 11 4.4477 11 5C11 5.5523 11.4478 6 12.0001 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12.0001 13.0001C12.5524 13.0001 13.0001 12.5523 13.0001 12C13.0001 11.4477 12.5524 11 12.0001 11C11.4478 11 11 11.4477 11 12C11 12.5523 11.4478 13.0001 12.0001 13.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12.0001 20C12.5524 20 13.0001 19.5523 13.0001 19C13.0001 18.4477 12.5524 18 12.0001 18C11.4478 18 11 18.4477 11 19C11 19.5523 11.4478 20 12.0001 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
MoreVertical.displayName = 'MoreVertical'
