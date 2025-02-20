Rails.application.routes.draw do
  resource :dashboard, only: [ :show ], controller: :dashboard

  resource :me, only: [ :show, :update ], controller: :me do
    patch :update_password, on: :collection, path: :password
  end

  resources :users, except: [:edit, :update] do
    post  "resend-invitation-email",   on: :member
    post  "send-reset-password-email", on: :member
    post  "enable",                    on: :member
    post  "disable",                   on: :member
  end

  devise_for :users, controllers: {
    passwords: "passwords",
    invitations: "invitations",
    sessions: "sessions"
  }, path_names: {
    sign_in: "sign-in",
    sign_out: "sign-out"
  }, path: "", skip: %i[confirmations omniauth_callbacks registrations unlocks]

  resource :web_components, only: [ :show ], path: :"web-components" do
    get :modal
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  mount LetterOpenerWeb::Engine, at: "/letter-opener" if Rails.env.development?

  # Defines the root path route ("/")
  root "application#root"
end
