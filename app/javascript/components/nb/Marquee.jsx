import React from 'react'

export default function Marquee({ items = [], className = '' }) {
  const classes = ['nb-marquee', className].filter(Boolean).join(' ')
  const text = items.join(' • ')

  return (
    <div className={classes} aria-label="Highlights">
      <ul className="nb-visually-hidden">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
      <div className="nb-marquee-track" aria-hidden="true">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}
