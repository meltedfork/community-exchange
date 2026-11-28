import 'neobrutalismcss'
import '@fontsource-variable/source-serif-4'
import '~/styles/theme.css'
import '../components/nb/styles.css'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Inertia pages, keyed by the name a controller renders:
// render inertia: "Home" loads pages/Home/index.jsx.
// Add a line here when you add a page folder.
const pages = {
  Home: () => import('../pages/Home/index.jsx'),
  Hello: () => import('../pages/Hello/index.jsx'),
}

createInertiaApp({
  resolve: (name) => {
    const load = pages[name]
    if (!load) throw new Error(`Inertia page "${name}" is not listed in app/javascript/entrypoints/site.jsx`)
    return load()
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
