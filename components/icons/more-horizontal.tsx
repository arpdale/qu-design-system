import * as React from 'react'
import type { IconProps } from './types'

export function MoreHorizontal({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 13.0001C5.5523 13.0001 6 12.5523 6 12C6 11.4477 5.5523 11 5 11C4.4477 11 4 11.4477 4 12C4 12.5523 4.4477 13.0001 5 13.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 13.0001C12.5522 13.0001 13 12.5523 13 12C13 11.4477 12.5522 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13.0001 12 13.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M19 13.0001C19.5523 13.0001 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13.0001 19 13.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
MoreHorizontal.displayName = 'MoreHorizontal'
