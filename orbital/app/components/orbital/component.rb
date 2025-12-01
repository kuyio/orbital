# frozen_string_literal: true

module Orbital
  class Component < ViewComponent::Base
    # This module imports the attribute DSL for defining attributes on a component
    # as well as the html_attributes method for generating HTML attributes
    include Orbital::Components::Attributes

    # This module provides a method for joining style names together
    include Orbital::Components::Styles
  end
end
