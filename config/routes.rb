Rails.application.routes.draw do
  get 'static_pages/about'

  get 'static_pages/books'

  get 'static_pages/tools'

  root to: "articles#index"
  #get '/about' to 'static_pages#about'
  #get '/books' to 'static_pages#books'
  #get '/tools' to 'static_pages#tools'
  resources :articles, path: :pixels do
    resources :comments
  end
  resources :tags
end
