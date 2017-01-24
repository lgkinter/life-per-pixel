module ApplicationHelper

  def textile(text)
    RedCloth.new(html_escape(text)).to_html
  end

  def intro(text)
    paras = text.split /\n\n/
    textile paras[0]
  end

end
