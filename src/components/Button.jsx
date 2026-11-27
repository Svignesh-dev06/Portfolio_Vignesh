import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

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
      <motion.a
        className={classes}
        href={href}
        download={download || undefined}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      type="button"
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -2, scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button
