Rails.application.routes.draw do
  root to: 'homes#index'

  resources :posts

  get '*path', controller: 'application', action: 'render_404'
end