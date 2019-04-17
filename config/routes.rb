Rails.application.routes.draw do

  mount API => '/'

  resources :users, only: [ :index, :new, :show, :create, :destroy ] do
    post 'resend-invitation', to: 'users#resend_invitation', on: :member
  end

  get   'profile',      to: 'profile#show'
  get   'profile/edit', to: 'profile#edit', as: :edit_profile
  patch 'profile',      to: 'profile#update'
  get   'ping',         to: 'application#ping'

  root to: 'dashboard#index'

  devise_for :user, controllers: {
    passwords: 'passwords',
    sessions: 'sessions',
    invitations: 'invitations',
    confirmations: 'confirmations',
  }, path: '', path_names: {
    sign_in: 'sign-in',
    sign_out: 'sign-out',
    password: 'passwords',
    invitations: 'invitations',
    comnfirmations: 'confirmations'
  }, skip: [ :registrations, :omniauth_callbacks, :unlocks ]

  require 'resque/server'
  resque_web_constraint = lambda do |request|
    request.env['warden'].authenticate?
  end
  constraints resque_web_constraint do
    mount Resque::Server, at: '/resque'
  end
  mount GrapeSwaggerRails::Engine => 'api/explorer'

end
