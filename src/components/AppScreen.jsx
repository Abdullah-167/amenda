import { forwardRef } from 'react'
import clsx from 'clsx'

function Logo(props) {
  return (
    <svg viewBox="0 0 79 24" fill="none" aria-hidden="true" {...props}>
      <path
        class="cls-2"
        d="m0,0v192h192V0H0Zm151.33,148h-.48s-18.31,0-18.31,0h0s-.07,0-.07,0l-41.79-72.39-41.79,72.39h-18.87l51.23-88.73h0s9.15-15.85,9.15-15.85h.57l9.15,15.85h0l42.07,72.87h17.83l-8.92,15.44.24.42Z"
      />
      <polygon
        class="cls-1"
        points="90.38 43.42 30 148 48.87 148 100.1 59.27 90.95 43.42 90.38 43.42"
      />
      <polygon
        class="cls-1"
        points="81.23 59.27 132.46 148 151.33 148 90.95 43.42 90.38 43.42 81.23 59.27"
      />
      <polygon
        class="cls-1"
        points="160 132.14 141.69 132.14 132.53 148 150.84 148 160 132.14"
      />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        <MenuIcon className="h-6 w-6 flex-none" />
        <Logo className="h-6 flex-none" />
        <UserIcon className="h-6 w-6 flex-none" />
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
    >
      {children}
    </div>
  )
})
