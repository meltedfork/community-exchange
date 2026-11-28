import 'neobrutalismcss'
import '@fontsource-variable/source-serif-4'
import '~/styles/theme.css'
import '../components/nb/styles.css'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name) => {
    // Each page is a folder: render inertia: "Home" loads pages/Home/index.jsx
    const pages = import.meta.glob('../pages/**/index.jsx', { eager: true })
    const page = pages[`../pages/${name}/index.jsx`]
    if (!page) throw new Error(`Inertia page not found: app/javascript/pages/${name}/index.jsx`)
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
