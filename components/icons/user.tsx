import * as React from 'react'
import type { IconProps } from './types'

export function User({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.9997 17.3333C19.6816 17.3333 22.6663 14.3486 22.6663 10.6667C22.6663 6.98477 19.6816 4 15.9997 4C12.3178 4 9.33301 6.98477 9.33301 10.6667C9.33301 14.3486 12.3178 17.3333 15.9997 17.3333Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M26.6663 28C26.6663 25.1711 25.5425 22.458 23.5421 20.4576C21.5418 18.4572 18.8287 17.3334 15.9997 17.3334C13.1707 17.3334 10.4576 18.4572 8.4572 20.4576C6.45681 22.458 5.33301 25.1711 5.33301 28" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
User.displayName = 'User'
