module ArticlesHelper

  def article_params
    params.require(:article).permit(:title, :hover_text, :image, :body)
  end

end