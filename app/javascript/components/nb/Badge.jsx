import React from 'react'

export default function Badge({ children, className = '', ...props }) {
  const classes = ['nb-badge', className].filter(Boolean).join(' ')
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
