import * as React from 'react'
import type { IconProps } from './types'

export function OpenLock({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 17C12.5522 17 13 16.5523 13 16C13 15.4478 12.5522 15 12 15C11.4477 15 11 15.4478 11 16C11 16.5523 11.4477 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M19 10H5C3.8954 10 3 10.8954 3 12V19.9999C3 21.1045 3.8954 22 5 22H19C20.1046 22 21 21.1045 21 19.9999V12C21 10.8954 20.1046 10 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M7 10V7C7.0001 5.8994 7.3633 4.8295 8.0333 3.9563C8.7034 3.0831 9.6428 2.4554 10.7059 2.1706C11.7691 1.8857 12.8965 1.9596 13.9133 2.3807C14.9302 2.8019 15.7797 3.5468 16.33 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
OpenLock.displayName = 'OpenLock'
