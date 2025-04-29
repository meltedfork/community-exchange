Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'pages/landing'
  get 'pages/about'
  get 'pages/signup'
  root 'pages#landing'
end
