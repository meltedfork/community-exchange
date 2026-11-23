import React from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('react-root')

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <div />
    </React.StrictMode>
  )
}
