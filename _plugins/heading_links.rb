Jekyll::Hooks.register :documents, :post_render do |doc|
  if doc.output_ext == ".html"
    doc.output = doc.output.gsub(/<h[1-6].*?>.*?<\/h[1-6]>/m, '<a href="#" class="heading">\0</a>')
  end
end
