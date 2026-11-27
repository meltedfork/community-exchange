import React, { useEffect, useState } from 'react'
import { router } from '@inertiajs/react'

export default function PageAnnouncer() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const removeListener = router.on('navigate', () => {
      const title = document.title || 'Page updated'
      setMessage(title)

      const main = document.getElementById('main')
      if (main) {
        main.focus()
      }
    })

    return () => removeListener?.()
  }, [])

  return (
    <div className="nb-visually-hidden" aria-live="polite" aria-atomic="true">
      {message}
    </div>
  )
}
