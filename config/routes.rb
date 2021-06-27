# frozen_string_literal: true

Rails.application.routes.draw do

  resource :dashboard, only: [ :show ], controller: :dashboard

  resources :users do
    post  'resend-invitation-email',   on: :member
    post  'send-reset-password-email', on: :member
    post  'unlock',                    on: :member
    post  'enable',                    on: :member
    post  'disable',                   on: :member
    patch 'update-avatar',             on: :member
    patch 'update-password',           on: :member
  end

  resources :web_components, only: [:index], path: :"web-components" do
    get :modal, on: :collection
  end

  devise_for :users, controllers: {
    passwords: 'passwords',
    invitations: 'invitations',
    sessions: 'sessions',
    unlocks: 'unlocks'
  }, path_names: {
    sign_in: 'sign-in',
    sign_out: 'sign-out'
  }, path: '', skip: %i[confirmations omniauth_callbacks registrations]

  root to: 'application#root'

  authenticate :user, ->(u) { u.admin? } do
    mount Sidekiq::Web => 'sidekiq'
  end

  mount LetterOpenerWeb::Engine, at: '/letter-opener' if Rails.env.development?
end
