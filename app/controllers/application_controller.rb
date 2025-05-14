class ApplicationController < ActionController::Base

  def route_not_found
    render file: Rails.public_path.join('404.html'), status: 404, layout: false
  end

  def internal_error
    render file: Rails.public_path.join('500.html'), status: , layout: false
  end
end
