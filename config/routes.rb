Rails.application.routes.draw do
  root to: 'homes#index'

  get '*path', controller: 'application', action: 'render_404'
end
