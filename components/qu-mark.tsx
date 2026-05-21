import * as React from 'react'

export type QuMarkProps = Omit<React.SVGAttributes<SVGSVGElement>, 'width' | 'height'> & {
  /** Width in px; height scales to preserve the mark's 52:31 aspect ratio (default: 200). */
  width?: number
}

/**
 * QuMark — the Qu brand mark (the "Qu" wordmark with the cyan top stripe).
 *
 * The two letterform paths use `currentColor`, so recolor the mark via the
 * `color` prop or CSS `color` — e.g. white on a dark surface. The top stripe
 * is the fixed brand cyan (#40CCF2, --color-primary) and does NOT recolor.
 *
 * This is the inline, recolorable component. For a static, default-color
 * placement an <img> of `@david-richard/notify-ds/assets/logo-qu.svg` is fine;
 * for the full "Qu Notify" lockup use `assets/logo-notify-lockup.svg`.
 */
export function QuMark({ width = 200, ...props }: QuMarkProps) {
  const height = Math.round((width * 31) / 52)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Qu"
      {...props}
    >
      <path
        d="M13.1486 18.1501H13.1373C11.8028 18.1501 10.5496 17.633 9.60346 16.6914C8.65509 15.7476 8.13122 14.4898 8.12671 13.1531C8.12445 11.8141 8.64154 10.5563 9.5854 9.60796C10.5293 8.65733 11.787 8.13572 13.126 8.13121H13.1373C14.4695 8.13121 15.725 8.65055 16.6711 9.5899C17.6195 10.5338 18.1433 11.7915 18.1456 13.1305C18.1501 14.4695 17.6308 15.7272 16.6869 16.6756C15.7431 17.6217 14.4876 18.1478 13.1486 18.1501ZM26.2768 13.1079C26.2678 9.59893 24.8949 6.3022 22.4088 3.82739C19.9204 1.35259 16.6056 -0.0067489 13.1079 2.51968e-05C9.59895 0.0067993 6.30447 1.38194 3.82741 3.86804C1.35035 6.35639 -0.00898741 9.65764 4.47226e-05 13.1689C0.00681882 16.6779 1.38196 19.9746 3.86806 22.4494C6.34738 24.9197 9.63733 26.2768 13.1373 26.2768H13.1689C14.0992 26.2745 15.0115 26.1752 15.9011 25.9855C18.3353 29.0541 22.0926 30.9667 26.1955 30.9735V22.8446C25.0258 22.8423 23.9329 22.4313 23.0681 21.7381C25.1478 19.3423 26.2836 16.3143 26.2768 13.1079Z"
        fill="currentColor"
      />
      <path
        d="M40.218 26.2158C33.7216 26.2158 28.4355 20.932 28.4355 14.4356V10.5654H36.5645V14.4356C36.5645 16.4475 38.2038 18.0891 40.218 18.0891C41.1934 18.0891 42.1125 17.7098 42.8034 17.0188C43.4921 16.3279 43.8715 15.4111 43.8715 14.4334V10.5654H52.0004V14.4311C52.0004 17.5788 50.7743 20.5368 48.5501 22.7633C46.3259 24.9897 43.3657 26.2158 40.2202 26.2158H40.218Z"
        fill="currentColor"
      />
      <path
        d="M51.9873 0.428978H28.4473V8.12436H51.9873V0.428978Z"
        fill="#40CCF2"
      />
    </svg>
  )
}
QuMark.displayName = 'QuMark'
