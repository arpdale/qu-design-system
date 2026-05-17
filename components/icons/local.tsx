import * as React from 'react'
import type { IconProps } from './types'

export function Local({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M26.6667 13.3334C26.6667 19.9907 19.2814 26.924 16.8014 29.0654C16.5703 29.2391 16.2891 29.333 16 29.333C15.711 29.333 15.4297 29.2391 15.1987 29.0654C12.7187 26.924 5.33337 19.9907 5.33337 13.3334C5.33337 10.5044 6.45718 7.79127 8.45757 5.79088C10.458 3.79049 13.1711 2.66669 16 2.66669C18.829 2.66669 21.5421 3.79049 23.5425 5.79088C25.5429 7.79127 26.6667 10.5044 26.6667 13.3334Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33331 16 9.33331C13.7909 9.33331 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Local.displayName = 'Local'
