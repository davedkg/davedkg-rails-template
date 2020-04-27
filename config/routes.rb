Rails.application.routes.draw do

  resources :users do
    post 'resend-invitation-email',   on: :member
    post 'send-reset-password-email', on: :member
    post 'unlock',                    on: :member
  end

  resources :web_components, only: [ :index ], path: :"web-components"

  devise_for :users, controllers: {
    passwords: 'passwords',
    invitations: 'invitations',
    sessions: 'sessions',
    unlocks: 'unlocks'
  }, path_names: {
    sign_in: 'sign-in',
    sign_out: 'sign-out'
  }, path: '', skip: %i[confirmations omniauth_callbacks registrations]

  root to: "dashboard#show"

  authenticate :user, lambda { |u| u.admin? } do
     mount Sidekiq::Web => "sidekiq"
   end

  mount LetterOpenerWeb::Engine, at: "/letter-opener" if Rails.env.development?

end
