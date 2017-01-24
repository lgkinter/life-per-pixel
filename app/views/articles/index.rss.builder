#encoding: UTF-8

xml.instruct!
xml.rss :version => "2.0" do

  xml.channel do
    xml.title "Life Per Pixel"
    xml.description "Bite-sized life lessons for your mind, body & soul"
    xml.link root_url
    xml.language "en"

    @articles.each do |article|
      xml.item do
        xml.title article.title
        xml.description article.intro
        xml.pubDate article.created_at.to_s(:rfc822)
        xml.link article_url(article)
        xml.guid article_url(article)
      end
    end
  end
end
