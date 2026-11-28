import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid justify-content-center position-relative">
        <a className="navbar-home-trigger position-absolute top-50 translate-middle-y" href="/" aria-label="Home menu">
          <i className="fas fa-bars" aria-hidden="true"></i>
          <span className="visually-hidden">Home</span>
        </a>
        <a className="navbar-brand navbar-brand-logo navbar-brand-logo-offset position-absolute top-50 translate-middle-y" href="/" aria-label="Community Exchange home">
          <span className="visually-hidden">Community Exchange</span>
        </a>
        <ul className="navbar-nav flex-row align-items-center gap-2 gap-lg-3" aria-labelledby="navbarLinks">
          <li className="nav-item">
            <a className="nav-link" href="/pages/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pages/signup">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.paypal.com/pool/9g3mvR5vom" target="_blank" rel="noreferrer">
              Make a Donation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
