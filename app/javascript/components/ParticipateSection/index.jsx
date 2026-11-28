import { Card, VisuallyHidden } from '../nb'
import './styles.css'

const ICONS = {
  location: '📍',
  heart: '♡',
  dollar: '$',
  question: '?',
}

export default function ParticipateSection({ items = [] }) {
  return (
    <section id="participate" className="participate-section" aria-labelledby="participate-title">
      <div className="participate-inner">
        <h2 id="participate-title">How To Participate</h2>
        <ul className="participate-grid">
          {items.map((item) => (
            <li className="participate-item" key={item.id}>
              <Card className="participate-card">
                <a
                  href={item.href}
                  className="participate-link"
                  {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="participate-icon" aria-hidden="true">
                    {ICONS[item.icon] ?? '•'}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.external && <VisuallyHidden>(opens in a new tab)</VisuallyHidden>}
                </a>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
