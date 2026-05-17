import * as React from 'react'
import type { IconProps } from './types'

export function Package({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12.5333L10.0667 5.65334" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M28 21.3333V10.6667C27.9995 10.199 27.8761 9.73975 27.642 9.33488C27.408 8.93003 27.0716 8.59382 26.6667 8.36L17.3333 3.02667C16.928 2.79262 16.4681 2.6694 16 2.6694C15.5319 2.6694 15.072 2.79262 14.6667 3.02667L5.33333 8.36C4.92835 8.59382 4.59197 8.93003 4.35795 9.33488C4.12392 9.73975 4.00048 10.199 4 10.6667V21.3333C4.00048 21.8009 4.12392 22.2603 4.35795 22.6651C4.59197 23.07 4.92835 23.4061 5.33333 23.64L14.6667 28.9733C15.072 29.2073 15.5319 29.3307 16 29.3307C16.4681 29.3307 16.928 29.2073 17.3333 28.9733L26.6667 23.64C27.0716 23.4061 27.408 23.07 27.642 22.6651C27.8761 22.2603 27.9995 21.8009 28 21.3333Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4.35999 9.28L16 16.0133L27.64 9.28" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 29.44V16" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
}
Package.displayName = 'Package'
