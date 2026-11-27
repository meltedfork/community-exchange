import React from 'react'

function Card({ className = '', children, ...props }) {
  const classes = ['nb-card', className].filter(Boolean).join(' ')
  return (
    <article className={classes} {...props}>
      {children}
    </article>
  )
}

function Header({ className = '', children, ...props }) {
  const classes = ['nb-card-header', className].filter(Boolean).join(' ')
  return (
    <header className={classes} {...props}>
      {children}
    </header>
  )
}

function Body({ className = '', children, ...props }) {
  const classes = ['nb-card-body', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

function Footer({ className = '', children, ...props }) {
  const classes = ['nb-card-footer', className].filter(Boolean).join(' ')
  return (
    <footer className={classes} {...props}>
      {children}
    </footer>
  )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card
