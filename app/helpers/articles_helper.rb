module ArticlesHelper

  def article_params
    params.require(:article).permit(:id, :title, :hover_text, :image, :body, :tag_list, :category)
  end

end
