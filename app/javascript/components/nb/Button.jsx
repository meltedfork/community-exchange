import React from 'react'

export default function Button({
  href,
  className = '',
  children,
  reserveShadowSpace = true,
  ...props
}) {
  const classes = ['nb-button', className].filter(Boolean).join(' ')

  const button = (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )

  if (!reserveShadowSpace) return button

  return <span style={{ display: 'inline-block', marginBottom: '0.75rem' }}>{button}</span>
}
