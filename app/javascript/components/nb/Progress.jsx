import React from 'react'

export default function Progress({
  value,
  max = 100,
  label = 'Progress',
  className = '',
}) {
  const safeValue = Math.max(0, Math.min(value, max))
  const percent = Math.round((safeValue / max) * 100)
  const classes = ['nb-progress', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={safeValue}
        className="nb-progress-track"
      >
        <div className="nb-progress-fill" style={{ width: `${percent}%` }} />
      </div>
      <span className="nb-progress-label">{percent}%</span>
    </div>
  )
}
