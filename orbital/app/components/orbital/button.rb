# frozen_string_literal: true

module Orbital
  class Button < Component
    attribute :variant, :symbol, default: :default, only: [:default, :destructive, :outline, :secondary, :ghost, :link]
    attribute :size, :symbol, default: :sm, only: [:sm, :default, :lg, :icon]
    attribute :url, :string, default: nil
    attribute :disabled, :boolean, default: false
    attribute :modal, :boolean, default: false

    def call
      build_tag(**html_attributes) do
        content
      end
    end

    private

    def default_attributes
      attrs = super.merge(
        class: "Orbital-Button",
        "data-variant": @variant,
        "data-size": @size,
        "data-disabled": @disabled || nil
      )

      # Add turbo-frame targeting for modal dialogs
      attrs["data-turbo-frame"] = Orbital.configuration.dialog_portal_id if @modal

      attrs
    end

    def build_tag(**opts)
      if @url.present?
        tag.a(href: @url, **opts) { yield }
      else
        tag.button(**opts) { yield }
      end
    end
  end
end
