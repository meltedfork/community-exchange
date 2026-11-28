import React from 'react'

export default function LandingHero() {
  return (
    <header className="masthead d-flex align-items-center">
      <div className="container px-4 px-lg-5">
        <div className="header-blur-box mx-auto hero-shell">
          <div className="hero-copy">
            <h1 className="mb-3">The Community Exchange</h1>
            <h3 className="mb-5">
              <em>Supporting Creativity and Connecting our Community</em>
            </h3>
            <a className="btn btn-primary btn-xl" href="#more-info">Find Out More</a>
          </div>
          <div className="hero-images" aria-hidden="true">
            <div className="hero-image hero-image-wide"></div>
            <div className="hero-image hero-image-left"></div>
            <div className="hero-image hero-image-right"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
