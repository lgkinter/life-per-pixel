Rails.application.routes.draw do

  root to: "articles#index"
  get '/about', to: 'static_pages#about'
  get '/books', to: 'static_pages#books'
  get '/tools', to: 'static_pages#tools'

  get '/mind', to: 'articles#mind'
  get '/body', to: 'articles#body'
  get '/soul', to: 'articles#soul'
  get '/prosperity', to: 'articles#prosperity'

  resources :articles, path: :pixels do
    resources :comments
  end
  resources :tags, param: :name

end
