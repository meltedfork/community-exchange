class HomeController < SiteController
  include EventConcern
  include ParticipateConcern

  def show
    render inertia: "Home", props: {
      events: upcoming_events,
      participate_items: participate_items
    }
  end
end
