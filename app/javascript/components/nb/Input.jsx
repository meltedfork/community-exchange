import React from 'react'

export default function Input({ className = '', ...props }) {
  const classes = ['nb-input', className].filter(Boolean).join(' ')

  return <input className={classes} {...props} />
}
