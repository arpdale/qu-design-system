import * as React from 'react'
import type { IconProps } from './types'

export function AlertTriangle({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.29 3.86L1.82 18C1.6454 18.3024 1.553 18.6453 1.552 18.9945C1.551 19.3437 1.6415 19.6871 1.8144 19.9905C1.9873 20.2939 2.2367 20.5467 2.5377 20.7239C2.8387 20.9012 3.1808 20.9962 3.53 21H20.47C20.8192 20.9962 21.1613 20.9012 21.4623 20.7239C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.5661 13.2807 3.3231 12.9812 3.1545C12.6817 2.9859 12.3437 2.8973 12 2.8973C11.6563 2.8973 11.3183 2.9859 11.0188 3.1545C10.7193 3.3231 10.4683 3.5661 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 16.9999H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
AlertTriangle.displayName = 'AlertTriangle'
