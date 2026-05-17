import * as React from 'react'
import type { IconProps } from './types'

export function Search({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M28 28L22.2 22.2" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Search.displayName = 'Search'
