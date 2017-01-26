class Article < ApplicationRecord
  include ActionView::Helpers
  has_many :comments
  has_many :taggings
  has_many :tags, through: :taggings
  default_scope -> { order(created_at: :desc) }
  validates :title, presence: true
  validates :hover_text, presence: true
  validates :category, presence: true
  validates :body, presence: true
  has_attached_file :image, styles: { medium: "478x478", thumb: "100x100", pixel: "16x16"}
  validates_attachment_content_type :image, :content_type => ['image/jpg', 'image/jpeg', 'image/png']
  before_save :downcase_category

  def tag_list
    self.tags.collect do |tag|
      tag.name
    end.join(", ")
  end

  def tag_list=(tags_string)
    tag_names = tags_string.split(",").collect{|s| s.strip.downcase}.uniq
    new_or_found_tags = tag_names.collect{|name| Tag.find_or_create_by(name: name)}
    self.tags = new_or_found_tags
  end

  def downcase_category
    self.category.downcase!
  end

  def increment_view_count
    if self.view_count.nil?
      self.update_attribute('view_count', 1)
    else
      self.update_attribute('view_count', self.view_count += 1)
    end
  end

  def intro
    truncate(strip_tags(RedCloth.new(self.body).to_html), length: 200)
  end

  def previous
    Article.where(['id < ?', id]).first
  end

  def next
    Article.where(['id > ?', id]).last
  end

end
