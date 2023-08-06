import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1  font-medium font-apercu text-sm no-underline hover:no-underline cursor-pointer"
    >
      {children}
    </Link>
  )
}
