# frozen_string_literal: true

Dir.glob(File.join('./lib', '**', '*.rb')).sort.each { |f| require f }

use_helper Nanoc::Helpers::Rendering
use_helper Nanoc::Helpers::LinkTo
use_helper Nanoc::Helpers::Breadcrumbs
use_helper NavigationHelper

def base_url
  # Set base_url to DEPLOY_PRIME_URL for Netlify previews
  return ENV['DEPLOY_PRIME_URL'] if ENV['DEPLOY_PRIME_URL']

  @config[:base_url]
end
