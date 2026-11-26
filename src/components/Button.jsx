import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'

function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  download = false,
  disabled = false,
  icon,
  ...props
}) {
  const classes = `button button-${variant}${className ? ` ${className}` : ''}`
  const content = (
    <>
      <span>{children}</span>
      {icon || (download ? <ArrowDownToLine size={16} aria-hidden="true" /> : <ArrowUpRight size={16} aria-hidden="true" />)}
    </>
  )

  if (href && !disabled) {
    return (
      <a className={classes} href={href} download={download || undefined} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type="button" disabled={disabled} {...props}>
      {content}
    </button>
  )
}

export default Button
