import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav ms-auto" aria-labelledby="navbarLinks">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
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
