# frozen_string_literal: true

require 'sassc'

Nanoc::Filter.define(:sassc) do |content, params|
  SassC::Engine.new(content, params).render
end
