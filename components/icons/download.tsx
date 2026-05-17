import * as React from 'react'
import type { IconProps } from './types'

export function Download({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M28 20V25.3333C28 26.0405 27.7191 26.7188 27.2189 27.2189C26.7188 27.7191 26.0405 28 25.3333 28H6.66667C5.95943 28 5.28115 27.7191 4.78105 27.2189C4.28095 26.7188 4 26.0405 4 25.3333V20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M9.33337 13.3333L16 20L22.6667 13.3333" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 20V4" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Download.displayName = 'Download'
