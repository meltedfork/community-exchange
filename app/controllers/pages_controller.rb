class PagesController < ApplicationController
  def landing
  end

  def about
    render 'about'
  end

  def signup
    render 'signup'
  end
end
