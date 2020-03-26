Rails.application.routes.draw do

  resources :users, except: [ :show, :edit, :update ] do
    post 'resend-invitation', on: :member
  end

  devise_for :users, controllers: {
    passwords: 'passwords',
    invitations: 'invitations',
    sessions: 'sessions',
    unlocks: 'unlocks',
    confirmations: 'confirmations'
  }, path_names: {
    sign_in: 'sign-in',
    sign_out: 'sign-out'
  }, path: '', skip: %i[omniauth_callbacks registrations]

  root to: "dashboard#show"

  authenticate :user, lambda { |u| u.admin? } do
     mount Sidekiq::Web => "sidekiq"
   end

  mount LetterOpenerWeb::Engine, at: "/letter-opener" if Rails.env.development?

end
