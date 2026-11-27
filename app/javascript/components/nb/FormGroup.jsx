import React, { cloneElement } from 'react'

function joinIds(...values) {
  return values.filter(Boolean).join(' ') || undefined
}

export default function FormGroup({
  id,
  label,
  hint,
  error,
  required = false,
  children,
}) {
  const fieldId = id || children?.props?.id || children?.props?.name
  const hintId = hint && fieldId ? `${fieldId}-hint` : undefined
  const errorId = error && fieldId ? `${fieldId}-error` : undefined

  const child = cloneElement(children, {
    id: children.props.id || fieldId,
    required: children.props.required ?? required,
    'aria-invalid': error ? true : children.props['aria-invalid'],
    'aria-describedby': joinIds(children.props['aria-describedby'], hintId, errorId),
  })

  return (
    <div className="nb-form-group">
      {label && (
        <label htmlFor={fieldId}>
          {label}
          {required ? ' *' : null}
        </label>
      )}
      {child}
      {hint ? <small id={hintId}>{hint}</small> : null}
      {error ? <small id={errorId} role="alert">{error}</small> : null}
    </div>
  )
}
