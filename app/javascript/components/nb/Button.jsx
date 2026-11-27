import React from 'react'

export default function Button({
  href,
  className = '',
  children,
  ...props
}) {
  const classes = ['nb-button', className].filter(Boolean).join(' ')

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}
