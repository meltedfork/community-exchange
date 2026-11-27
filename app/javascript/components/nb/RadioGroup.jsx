import React from 'react'

export default function RadioGroup({
  legend,
  hint,
  name,
  children,
}) {
  const hintId = hint && name ? `${name}-hint` : undefined

  return (
    <fieldset aria-describedby={hintId}>
      {legend ? <legend>{legend}</legend> : null}
      {children}
      {hint ? <small id={hintId}>{hint}</small> : null}
    </fieldset>
  )
}
