import { Head } from '@inertiajs/react'
import heroPhoto from '~/images/art_supplies_bkgrd.png'
import swapTable from '~/images/swap-table.jpg'
import yarnBin from '~/images/yarn-bin.jpg'
import './Home.css'

export default function Home() {
  return (
    <>
      <Head title="The Community Exchange" />
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
            <a href="#more-info" className="nb-button orange hero-cta">
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
          <h2>Free Art + Craft Supplies for Everyone!</h2>
        </section>
      </main>
    </>
  )
}
