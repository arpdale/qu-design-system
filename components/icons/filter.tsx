import * as React from 'react'
import type { IconProps } from './types'

export function Filter({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M29.3333 4H2.66663L13.3333 16.6133V25.3333L18.6666 28V16.6133L29.3333 4Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Filter.displayName = 'Filter'
