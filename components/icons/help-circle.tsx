import * as React from 'react'
import type { IconProps } from './types'

export function HelpCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22.0001C17.5229 22.0001 22 17.5229 22 12C22 6.4772 17.5229 2 12 2C6.4771 2 2 6.4772 2 12C2 17.5229 6.4771 22.0001 12 22.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M9.09 9C9.3251 8.3317 9.7891 7.7681 10.4 7.4092C11.0108 7.0502 11.7289 6.919 12.4272 7.0387C13.1255 7.1585 13.7588 7.5215 14.2151 8.0635C14.6713 8.6056 14.9211 9.2915 14.92 10C14.92 12 11.92 13.0001 11.92 13.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
HelpCircle.displayName = 'HelpCircle'
