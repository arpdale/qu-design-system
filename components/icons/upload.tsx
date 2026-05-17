import * as React from 'react'
import type { IconProps } from './types'

export function Upload({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M28 20V25.3333C28 26.0405 27.7191 26.7188 27.2189 27.2189C26.7188 27.7191 26.0405 28 25.3333 28H6.66667C5.95943 28 5.28115 29.0524 4.78105 27.2189C4.28095 26.7188 4 26.0405 4 25.3333V20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M22.6667 10.6667L16 4L9.33337 10.6667" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 4V20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Upload.displayName = 'Upload'
