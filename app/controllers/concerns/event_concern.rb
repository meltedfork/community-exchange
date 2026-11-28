module EventConcern
  extend ActiveSupport::Concern

  TIME_ZONE = "America/Chicago"

  EVENTS = [
    {
      id: "2026-12-05-crafty",
      title: "Let's Get Crafty!",
      description: "Get ready for a crafty winter. Pick up free yarn and art supplies for your holiday makes.",
      starts_at: "2026-12-05 14:00",
      ends_at: "2026-12-05 16:00",
      free: true,
      room: "Lobby Community Space",
      venue: "Oak Park Main Library",
      address: "834 Lake Street, Oak Park IL 60301",
      map_url: "https://maps.app.goo.gl/qHZe9i2pKYMZ8giE6"
    },
    {
      id: "2026-04-09-crafty",
      title: "Let's Get Crafty!",
      description: "Bring a craft to work on and chat.",
      starts_at: "2026-04-09 18:00",
      ends_at: "2026-04-09 20:00",
      free: true,
      room: "Maze Branch Meeting Room",
      venue: "Maze Branch - Oak Park Library",
      address: "845 Gunderson Ave, Oak Park IL 60304",
      map_url: "https://maps.app.goo.gl/qLF63Eqsewy5hkjR7"
    },
    {
      id: "2026-04-18-crafty",
      title: "Let's Get Crafty!",
      description: "Bring a craft to work on or learn beginner embroidery stitches.",
      starts_at: "2026-04-18 14:00",
      ends_at: "2026-04-18 16:00",
      free: true,
      room: "Lobby Community Space",
      venue: "Oak Park Main Library",
      address: "834 Lake Street, Oak Park IL 60301",
      map_url: "https://maps.app.goo.gl/qHZe9i2pKYMZ8giE6"
    },
    {
      id: "2026-05-16-crafty",
      title: "Let's Get Crafty!",
      description: "Bring your own craft and chat.",
      starts_at: "2026-05-16 13:30",
      ends_at: "2026-05-16 16:30",
      free: true,
      room: "Lobby Community Space",
      venue: "Oak Park Main Library",
      address: "834 Lake Street, Oak Park IL 60301",
      map_url: "https://maps.app.goo.gl/qHZe9i2pKYMZ8giE6"
    },
    {
      id: "2026-07-18-supplies",
      title: "Free Art Supplies",
      description: "Donate and/or pick up materials.",
      starts_at: "2026-07-18 10:00",
      ends_at: "2026-07-18 13:00",
      free: true,
      room: "Lobby Community Space",
      venue: "Oak Park Main Library",
      address: "834 Lake Street, Oak Park IL 60301",
      map_url: "https://maps.app.goo.gl/qHZe9i2pKYMZ8giE6"
    }
  ].freeze

  private

  def upcoming_events
    zone = Time.find_zone!(TIME_ZONE)

    EVENTS
      .map { |event| event.merge(starts_at: zone.parse(event[:starts_at]), ends_at: zone.parse(event[:ends_at])) }
      .select { |event| event[:ends_at] >= Time.current }
      .sort_by { |event| event[:starts_at] }
      .map { |event| event.merge(starts_at: event[:starts_at].iso8601, ends_at: event[:ends_at].iso8601) }
  end
end
