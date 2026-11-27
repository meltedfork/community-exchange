import React from 'react'

export default function SkipLink({ href = '#main', children = 'Skip to main content' }) {
  return (
    <a className="nb-skip-link" href={href}>
      {children}
    </a>
  )
}
