import CalendarTile from '../CalendarTile'
import { formatTimeRange } from '~/lib/eventTime'
import './styles.css'

export default function PastEventsSection({ events = [] }) {
  if (events.length === 0) return null

  return (
    <section className="past-events-section" aria-labelledby="past-events-title">
      <div className="past-events-inner">
        <h2 id="past-events-title">Past Events</h2>
        <p className="past-events-intro">A look back at recent exchanges and crafty meetups.</p>

        <ul className="past-events-grid">
          {events.map((event, i) => (
            <li key={event.id}>
              <article className="past-event-card" aria-labelledby={`past-${event.id}-title`}>
                <CalendarTile startsAt={event.starts_at} tilt={i % 2 ? 2 : -2} />
                <div className="past-event-body">
                  <h3 id={`past-${event.id}-title`}>{event.title}</h3>
                  {event.description && <p className="past-event-desc">{event.description}</p>}
                  <p className="past-event-meta">
                    {formatTimeRange(event.starts_at, event.ends_at)}
                    <span>{event.venue}</span>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
