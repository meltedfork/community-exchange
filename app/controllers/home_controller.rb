class HomeController < SiteController
  def show
    render inertia: "Home"
  end
end
