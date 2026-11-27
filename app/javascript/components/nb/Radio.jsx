import React from 'react'

export default function Radio({
  id,
  name,
  value,
  label,
  className = '',
  ...props
}) {
  const inputId = id || `${name}-${value}`
  const classes = ['nb-radio', className].filter(Boolean).join(' ')

  return (
    <div className="nb-radio-item">
      <input
        id={inputId}
        name={name}
        type="radio"
        value={value}
        className={classes}
        {...props}
      />
      {label ? <label htmlFor={inputId}>{label}</label> : null}
    </div>
  )
}
