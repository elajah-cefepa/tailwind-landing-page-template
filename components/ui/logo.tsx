import Link from 'next/link'

import LogoPNG from '@/public/images/logo.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <svg className="w-10 h-10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <image href={LogoPNG.src} width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
      </svg>
    </Link>
  )
}
