class AddHovertextToArticle < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :hover_text, :string
  end
end
