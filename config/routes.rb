Rails.application.routes.draw do
  
  mount API => '/'

  resources :users, only: [ :index, :new, :create, :destroy ] do
    post 'resend-invitation', to: 'users#resend_invitation', on: :member
  end

  root to: 'dashboard#index'
  get 'ping', to: 'application#ping'
  
  devise_for :user, controllers: {
    passwords: 'passwords',
    sessions: 'sessions',
    invitations: 'invitations',
  }, path: '', path_names: { 
    sign_in: 'sign-in', 
    sign_out: 'sign-out',
    password: 'passwords', 
    invitations: 'invitations',
  }, skip: [ :registrations, :omniauth_callbacks, :unlocks, :confirmations ] 

  require 'resque/server'
  resque_web_constraint = lambda do |request|
    request.env['warden'].authenticate?
  end
  constraints resque_web_constraint do
    mount Resque::Server, at: '/resque'
  end
  
  mount GrapeSwaggerRails::Engine => 'api/explorer'
  
end
