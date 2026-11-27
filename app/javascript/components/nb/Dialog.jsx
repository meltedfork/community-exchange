import React, { useEffect, useRef } from 'react'

export default function Dialog({
  open,
  onClose,
  title,
  children,
  className = '',
}) {
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      triggerRef.current = document.activeElement
      dialog.showModal()
    }

    if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined

    const handleClose = () => {
      onClose?.()
      triggerRef.current?.focus?.()
    }

    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  const classes = ['nb-dialog', className].filter(Boolean).join(' ')

  return (
    <dialog ref={dialogRef} className={classes} aria-labelledby={title ? 'nb-dialog-title' : undefined}>
      {title ? <h2 id="nb-dialog-title">{title}</h2> : null}
      <div>{children}</div>
    </dialog>
  )
}
