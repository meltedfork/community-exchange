import React from 'react'

export default function Textarea({ className = '', ...props }) {
  const classes = ['nb-textarea', className].filter(Boolean).join(' ')

  return <textarea className={classes} {...props} />
}
