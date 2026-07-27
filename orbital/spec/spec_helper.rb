# frozen_string_literal: true

require "bundler/setup"

require "rails"
require "active_model/railtie"
require "action_controller/railtie"
require "action_view/railtie"

class TestApp < Rails::Application
  config.eager_load = false
  config.secret_key_base = "test"
end

TestApp.initialize!

require "view_component"
require "orbital"

RSpec.configure do |config|
  config.example_status_persistence_file_path = ".rspec_status"
  config.disable_monkey_patching!

  config.expect_with :rspec do |c|
    c.syntax = :expect
  end
end
