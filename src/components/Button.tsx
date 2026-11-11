import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    to?: undefined
  }

type ButtonAsAnchor = CommonProps & {
  href: string
  to?: undefined
  target?: string
  rel?: string
  type?: undefined
  disabled?: undefined
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

type ButtonAsLink = CommonProps & {
  to: string
  href?: undefined
  type?: undefined
  disabled?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.97]'

const variants: Record<Variant, string> = {
  primary:
    'border border-accent-700 bg-[linear-gradient(180deg,#d45454,#c84141)] text-white shadow-[0_6px_20px_rgba(200,65,65,0.28),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_10px_28px_rgba(200,65,65,0.38),inset_0_1px_0_rgba(255,255,255,0.2)]',
  secondary:
    'border border-[rgba(15,15,20,0.08)] bg-white/70 text-navy-900 backdrop-blur-sm hover:shadow-[var(--shadow-tokenly)]',
  ghost: 'text-navy-600 hover:bg-black/[0.03] hover:text-navy-900',
}

const sizes: Record<Size, string> = {
  md: 'px-3.5 py-2 text-sm',
  lg: 'px-5 py-3 text-[15px]',
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '' } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
      >
        {children}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
