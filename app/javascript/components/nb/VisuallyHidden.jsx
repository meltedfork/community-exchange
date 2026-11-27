import React from 'react'

export default function VisuallyHidden({ as: Tag = 'span', children, ...props }) {
  return (
    <Tag className="nb-visually-hidden" {...props}>
      {children}
    </Tag>
  )
}
