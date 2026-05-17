import * as React from 'react'
import type { IconProps } from './types'

export function ArrowUp({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 25.3333V6.66667M25.3333 16L16 6.66667L6.66663 16" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
ArrowUp.displayName = 'ArrowUp'
