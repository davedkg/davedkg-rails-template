Rails.application.routes.draw do
  resource :dashboard, only: [:show], controller: :dashboard

  devise_for :users, controllers: {
    passwords: 'passwords',
    invitations: 'invitations',
    sessions: 'sessions',
    unlocks: 'unlocks'
  }, path_names: {
    sign_in: 'sign-in',
    sign_out: 'sign-out'
  }, path: '', skip: %i[confirmations omniauth_callbacks registrations]

  resources :web_components, only: [:index], path: :"web-components"

  root 'dashboard#show'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  authenticate :user, ->(u) { u.admin? } do
    mount Sidekiq::Web => 'sidekiq'
  end

  mount LetterOpenerWeb::Engine, at: '/letter-opener' if Rails.env.development?
end
