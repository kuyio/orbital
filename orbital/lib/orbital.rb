# frozen_string_literal: true

require "view_component"
require_relative "orbital/version"
require_relative "orbital/engine"
require_relative "orbital/icons"
require_relative "orbital/attribute_utils"
require_relative "orbital/components/attributes"
require_relative "orbital/components/styles"
require_relative "orbital/type/any"
require_relative "orbital/type/array"
require_relative "orbital/type/breakpoints"
require_relative "orbital/type/symbol"

module Orbital
  class Error < StandardError; end

  class << self
    attr_accessor :configuration
  end

  def self.configure
    self.configuration ||= Configuration.new
    yield(configuration)
  end

  class Configuration
    attr_accessor :dialog_portal_id

    def initialize
      @dialog_portal_id = "dialogs"
    end

    # Backward compatibility for modal_portal_id (deprecated)
    def modal_portal_id
      warn "[DEPRECATION] `modal_portal_id` is deprecated. Please use `dialog_portal_id` instead."
      @dialog_portal_id
    end

    def modal_portal_id=(value)
      warn "[DEPRECATION] `modal_portal_id=` is deprecated. Please use `dialog_portal_id=` instead."
      @dialog_portal_id = value
    end
  end

  # Default configuration
  self.configuration = Configuration.new
end
