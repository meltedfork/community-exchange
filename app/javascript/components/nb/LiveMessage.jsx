import React from 'react'

export default function LiveMessage({ message, polite = true, className = '' }) {
  const classes = ['nb-live-message', className].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      aria-live={polite ? 'polite' : 'assertive'}
      aria-atomic="true"
      role={polite ? 'status' : 'alert'}
    >
      {message}
    </div>
  )
}
