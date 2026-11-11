import { Link } from 'react-router-dom'
import { brand } from '../config/brand'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${brand.name} home`}
    >
      <img
        src="/logo.png"
        alt=""
        width={28}
        height={23}
        className="h-[23px] w-7 object-contain"
        aria-hidden="true"
      />
      <span className="text-xl font-semibold tracking-[-0.02em] text-navy-900">{brand.name}</span>
    </Link>
  )
}
