import React from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from '../components/Navbar'
import LandingHero from '../components/LandingHero'

const navbarElement = document.getElementById('react-navbar')
const landingHeroElement = document.getElementById('react-landing-hero')

if (navbarElement) {
  createRoot(navbarElement).render(
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  )
}

if (landingHeroElement) {
  createRoot(landingHeroElement).render(
    <React.StrictMode>
      <LandingHero />
    </React.StrictMode>
  )
}
