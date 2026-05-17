import * as React from 'react'
import type { IconProps } from './types'

export function Bell({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M24 10.6667C24 8.54492 23.1572 6.5101 21.6568 5.0098C20.1565 3.50951 18.1217 2.66666 16 2.66666C13.8783 2.66666 11.8434 3.50951 10.3431 5.0098C8.84285 6.5101 8 8.54492 8 10.6667C8 20 4 22.6667 4 22.6667H28C28 22.6667 24 20 24 10.6667Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M18.3067 28C18.0723 28.4041 17.7359 28.7396 17.331 28.9727C16.9262 29.2059 16.4672 29.3287 16 29.3287C15.5328 29.3287 15.0739 29.2059 14.6691 28.9727C14.2643 28.7396 13.9278 28.4041 13.6934 28" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Bell.displayName = 'Bell'
