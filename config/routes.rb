Rails.application.routes.draw do

  devise_for :users, controllers: {
    passwords: 'passwords',
    invitations: 'invitations',
    sessions: 'sessions',
    unlocks: 'unlocks',
    confirmations: 'confirmations'
  }, path: '', path_names: {
    sign_in: 'sign-in',
    sign_out: 'sign-out',
    sign_up: 'sign-up'
  }, skip: %i[omniauth_callbacks registrations]

  root to: "dashboard#show"

end
