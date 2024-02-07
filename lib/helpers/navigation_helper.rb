# frozen_string_literal: true

# Navigation helper
module NavigationHelper
  def active_nav_class(path)
    @item_rep.path.start_with?(path) ? 'dfe-header__navigation-item--current' : ''
  end
end
