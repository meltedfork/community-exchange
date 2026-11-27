import React from 'react'

export default function Checkbox({
  id,
  name,
  label,
  hint,
  className = '',
  ...props
}) {
  const inputId = id || name
  const hintId = hint && inputId ? `${inputId}-hint` : undefined
  const classes = ['nb-checkbox', className].filter(Boolean).join(' ')

  return (
    <div className="nb-checkbox-group">
      <input
        id={inputId}
        name={name}
        type="checkbox"
        className={classes}
        aria-describedby={hintId}
        {...props}
      />
      {label ? <label htmlFor={inputId}>{label}</label> : null}
      {hint ? <small id={hintId}>{hint}</small> : null}
    </div>
  )
}
