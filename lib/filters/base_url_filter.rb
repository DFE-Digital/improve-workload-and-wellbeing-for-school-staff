# frozen_string_literal: true

require 'nokogiri'

module Nanoc
  module Filters
    # Update occurences of 'base_url' in links, scripts, and images
    class BaseUrl < Nanoc::Filter
      identifier :base_url

      def run(content, _params = {})
        base_url = @config[:base_url]
        doc = Nokogiri::HTML(content)

        # Update href/src attributes for links, scripts, and images
        doc.css('a[href], img[src], script[src], link[href]').each do |node|
          attr = node.name == 'a' ? 'href' : 'src'
          url = node[attr]

          # Prepend base_url to relative paths
          node[attr] = "#{base_url}/#{url}" if url && !url.start_with?('http', '/', 'mailto')
        end

        doc.to_html
      end
    end
  end
end
