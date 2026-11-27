import React from 'react'

export default function Table({ caption, children, className = '' }) {
  const classes = ['nb-table', className].filter(Boolean).join(' ')

  return (
    <table className={classes}>
      {caption ? <caption>{caption}</caption> : null}
      {children}
    </table>
  )
}
