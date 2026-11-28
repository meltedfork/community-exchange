import CalendarTile from '../CalendarTile'
import { VisuallyHidden } from '../nb'
import { downloadIcs, formatTimeRange } from '~/lib/eventTime'
import './styles.css'

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export default function EventCard({ event, tilt = -2, featured = false }) {
  const titleId = `event-${event.id}-title`

  return (
    <article className={`event-card${featured ? ' event-card-featured' : ''}`} aria-labelledby={titleId}>
      {featured && <p className="event-next-up">Next up</p>}

      <CalendarTile startsAt={event.starts_at} tilt={tilt} />

      <div className="event-body">
        <div className="event-head">
          <h3 id={titleId} className="event-title">{event.title}</h3>
          {event.free && <span className="event-free">Free</span>}
        </div>

        {event.description && <p className="event-desc">{event.description}</p>}

        <ul className="event-meta">
          <li>
            <ClockIcon />
            <span>
              <VisuallyHidden>Time: </VisuallyHidden>
              {formatTimeRange(event.starts_at, event.ends_at)}
            </span>
          </li>
          <li>
            <PinIcon />
            <span>
              <VisuallyHidden>Location: </VisuallyHidden>
              {event.room}
              <span className="event-meta-sub">
                {event.venue}, {event.address}
              </span>
            </span>
          </li>
        </ul>

        <div className="event-actions">
          {event.map_url && (
            <a href={event.map_url} className="nb-button primary" target="_blank" rel="noreferrer">
              Get directions
              <VisuallyHidden> to {event.venue} (opens in a new tab)</VisuallyHidden>
            </a>
          )}
          <button type="button" className="event-button-secondary" onClick={() => downloadIcs(event)}>
            Add to calendar
          </button>
        </div>
      </div>
    </article>
  )
}
