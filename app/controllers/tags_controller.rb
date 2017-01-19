class TagsController < ApplicationController
  before_filter :require_login, only: [:index, :destroy]

  def index
    @tags = Tag.all
  end

  def show
    @tag = Tag.find_by(name: params[:name])
    @articles = @tag.articles
  end

  def destroy
    @tag = Tag.find(params[:id])
    flash.notice = "'#{@tag.name}' has been deleted."
    @tag.destroy
    redirect_to tags_path
  end

end
