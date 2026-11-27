import React, { useEffect, useState } from 'react'

export default function Navbar({
  brand,
  items = [],
  className = '',
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const classes = ['nb-navbar', className].filter(Boolean).join(' ')

  return (
    <nav className={classes} aria-label="Primary">
      <div className="nb-navbar-row">
        <div className="nb-navbar-brand">{brand}</div>
        <button
          type="button"
          className="nb-navbar-toggle"
          aria-expanded={open}
          aria-controls="nb-navbar-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>
      <ul id="nb-navbar-menu" className={`nb-navbar-menu${open ? ' is-open' : ''}`}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} aria-current={item.current ? 'page' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
