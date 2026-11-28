import EventCard from '../EventCard'
import './styles.css'

export default function EventsSection({ events = [] }) {
  return (
    <section id="next-event" className="events-section" aria-labelledby="events-title">
      <div className="events-inner">
        <h2 id="events-title">Upcoming Free Events</h2>

        {events.length === 0 ? (
          <p className="events-empty">
            No exchanges scheduled yet. Follow us on{' '}
            <a href="https://www.instagram.com/artsupplyexchange/" target="_blank" rel="noreferrer">
              Instagram
            </a>{' '}
            for the next date.
          </p>
        ) : (
          <ul className="events-list">
            {events.map((event, i) => (
              <li key={event.id}>
                <EventCard event={event} tilt={i % 2 ? 2 : -2} featured={i === 0} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
