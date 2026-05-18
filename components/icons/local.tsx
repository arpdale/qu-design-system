import * as React from 'react'
import type { IconProps } from './types'

export function Local({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 10C20 14.993 14.4611 20.193 12.6011 21.7991C12.4277 21.9293 12.2168 21.9997 12 21.9997C11.7833 21.9997 11.5723 21.9293 11.399 21.7991C9.539 20.193 4 14.993 4 10C4 7.8783 4.8429 5.8435 6.3432 4.3432C7.8435 2.8429 9.8783 2 12 2C14.1218 2 16.1566 2.8429 17.6569 4.3432C19.1572 5.8435 20 7.8783 20 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 13C13.6568 13 15 11.6569 15 10C15 8.3431 13.6568 7 12 7C10.3432 7 9 8.3431 9 10C9 11.6569 10.3432 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Local.displayName = 'Local'
