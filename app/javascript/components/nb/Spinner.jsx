import React from 'react'

export default function Spinner({ label = 'Loading', className = '' }) {
  const classes = ['nb-spinner', className].filter(Boolean).join(' ')

  return (
    <span className={classes} role="status" aria-live="polite" aria-label={label}>
      <span className="nb-spinner-dot" aria-hidden="true" />
    </span>
  )
}
