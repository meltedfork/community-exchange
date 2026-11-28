import './CalendarTile.css'

const TZ = 'America/Chicago'
const fmt = (date, options) =>
  new Intl.DateTimeFormat('en-US', { timeZone: TZ, ...options }).format(date)

export default function CalendarTile({ startsAt, tilt = -2 }) {
  const date = new Date(startsAt)
  const month = fmt(date, { month: 'long' })
  const day = fmt(date, { day: 'numeric' })
  const weekday = fmt(date, { weekday: 'long' })

  return (
    <time
      className="calendar-tile"
      dateTime={startsAt}
      style={{ '--tilt': `${tilt}deg` }}
    >
      <span className="calendar-tile-binding" aria-hidden="true" />
      <span className="calendar-tile-month">{month}</span>
      <span className="calendar-tile-day">{day}</span>
      <span className="calendar-tile-weekday">{weekday}</span>
    </time>
  )
}
