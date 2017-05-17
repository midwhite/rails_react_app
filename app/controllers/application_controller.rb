class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def render_404
    render 'homes/index', status: 200, layout: 'application', content_type: 'text/html'
  end
end
