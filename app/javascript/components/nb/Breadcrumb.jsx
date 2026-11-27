import React from 'react'

export default function Breadcrumb({ items = [], className = '' }) {
  const classes = ['nb-breadcrumb', className].filter(Boolean).join(' ')

  return (
    <nav className={classes} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.href || item.label}-${index}`}>
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
