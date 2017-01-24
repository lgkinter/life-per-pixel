class ArticlesController < ApplicationController
  include ArticlesHelper
  before_filter :require_login, only: [:new, :create, :destroy, :update, :edit]

  def index
    @articles = Article.all
    respond_to do |format|
      format.html
      format.rss { render :layout => false }
    end
  end

  def show
    @article = Article.find(params[:id])
    @comment = Comment.new
    @comment.article_id = @article.id
    @article.increment_view_count
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      flash.notice = "'#{@article.title}' has been created."
      redirect_to article_path(@article)
    else
      flash.now[:notice] = "Unable to create new article."
      render :new
    end
  end

  def destroy
    @article = Article.find(params[:id])
    flash.notice = "'#{@article.title}' has been deleted."
    @article.destroy
    redirect_to articles_path
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    @article.update(article_params)
    flash.notice = "'#{@article.title}' has been updated."
    redirect_to article_path(@article)
  end

  def mind
    @articles = Article.where(category: 'mind')
  end

  def body
    @articles = Article.where(category: 'body')
  end

  def soul
    @articles = Article.where(category: 'soul')
  end

  def prosperity
    @articles = Article.where(category: 'prosperity')
  end

end
