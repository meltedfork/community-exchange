class HelloController < SiteController
  def show
    render inertia: "Hello", props: {
      message: "Inertia is working",
      server_time: Time.current.strftime("%-I:%M:%S %p")
    }
  end
end
