import React from 'react'

export default function Avatar({
  src,
  alt,
  size = 56,
  className = '',
  ...props
}) {
  const classes = ['nb-avatar', className].filter(Boolean).join(' ')

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={classes}
      {...props}
    />
  )
}
