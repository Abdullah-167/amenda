import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center py-2 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  round:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
  outline:
    'group inline-flex items-center justify-center py-2 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
}

const variantStyles = {
  solid: {
    gray: 'bg-gray-900 text-white border border-gray-900 hover:bg-white hover:text-gray-900 active:bg-gray-800 active:text-gray-50 focus-visible:outline-gray-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    gray: 'bg-white border border-gray-900 hover:bg-gray-900 hover:text-white active:bg-gray-800 active:text-gray-50 focus-visible:outline-gray-900',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
  round: {
    gray: 'bg-white border border-gray-900 hover:bg-gray-900 hover:text-white active:bg-gray-800 active:text-gray-50 focus-visible:outline-gray-900',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },  
}

export function Button({
  variant = 'outline',
  color = 'gray',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
