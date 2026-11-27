import { Head } from '@inertiajs/react'
import { Card } from '../components/nb'
import heroPhoto from '~/images/art_supplies_bkgrd.png'
import swapTable from '~/images/swap-table.jpg'
import yarnBin from '~/images/yarn-bin.jpg'
import './Home.css'
import { Navbar } from '../components/nb'
import navLogo from '~/images/art_supplies_logonav.png'

const participateItems = [
  {
    href: '#next-event',
    icon: '📍',
    title: 'Attend an Exchange',
    text: 'Find new-to-you supplies!',
  },
  {
    href: '#donations',
    icon: '♡',
    title: 'Donate Supplies',
    text: "Donate items you don't use",
  },
  {
    href: 'https://www.paypal.com/pool/9g3mvR5vom',
    icon: '$',
    title: 'Donate Funds',
    text: 'Financially support The Community Exchange',
    external: true,
  },
  {
    href: '#faqs',
    icon: '?',
    title: 'FAQs',
    text: 'I have a question...',
  },
]

export default function Home() {
  return (
    <>
      <Head title="The Community Exchange" />
      <Navbar
        className="home-navbar"
        toggleLabel="☰"
        toggleAriaLabel="Toggle site navigation"
        brand={
          <a href="/new" className="home-brand-link" aria-label="The Community Exchange home">
            <img src={navLogo} alt="The Community Exchange" className="home-brand-logo" />
          </a>
        }
        items={[
          { href: '/new', label: '⌂', ariaLabel: 'Home', linkClassName: 'home-nav-icon' },
          { href: '/pages/about', label: 'About Us' },
          { href: '/pages/signup', label: 'Sign Up' },
          { href: 'https://www.paypal.com/pool/9g3mvR5vom', label: 'Make a Donation' },
        ]}
      />
      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-sticker">Free art supplies</p>
            <h1 id="hero-title" className="hero-title">
              The Community <span className="hero-highlight">Exchange</span>
            </h1>
            <p className="hero-tagline">
              Supporting Creativity and Connecting our Community
            </p>
            <a href="#more-info" className="nb-button primary hero-cta">
              Find Out More
            </a>
          </div>

          <div className="hero-collage" aria-hidden="true">
            <div className="hero-photo hero-photo-1">
              <img src={heroPhoto} alt="" />
              <span className="hero-tape" />
            </div>
            <div className="hero-photo hero-photo-2">
              <img src={swapTable} alt="" />
              <span className="hero-tape" />
            </div>
            <div className="hero-photo hero-photo-3">
              <img src={yarnBin} alt="" />
              <span className="hero-tape" />
            </div>
            <div className="hero-block hero-block-yellow" />
            <div className="hero-block hero-block-blue" />
            <div className="hero-block hero-block-green" />
            <div className="hero-block hero-block-pink" />
            <div className="hero-block hero-block-triangle" />
          </div>
        </section>

        <section id="more-info" className="next-section">
          <div className="next-section-inner">
            <h2>Free Art + Craft Supplies for Everyone!</h2>
            <p>
              We are a community organization for sharing new and gently-used art and craft supplies to build community, spread creativity,
              and encourage sustainability. All of the supplies are shared through community donations, and everyone is welcome to
              participate, regardless of whether you donate.
            </p>
            <a href="#participate" className="nb-button primary next-cta">Join Us</a>
          </div>
        </section>

        <section id="participate" className="participate-section" aria-labelledby="participate-title">
          <div className="participate-inner">
            <h2 id="participate-title">How To Participate</h2>
            <ul className="participate-grid">
              {participateItems.map((item) => (
                <li className="participate-item" key={item.title}>
                  <Card className="participate-card">
                    <a
                      href={item.href}
                      className="participate-link"
                      {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      <span className="participate-icon" aria-hidden="true">{item.icon}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </a>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
