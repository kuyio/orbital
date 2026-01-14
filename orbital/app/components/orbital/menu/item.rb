# frozen_string_literal: true

module Orbital
  class Menu
    class Item < Component
      attribute :url, :string, default: nil
      attribute :disabled, :boolean, default: false
      attribute :selected, :boolean, default: false
      attribute :active, :boolean, default: false
      attribute :destructive, :boolean, default: false
      attribute :modal, :boolean, default: false
      attribute :shortcut, :string, default: nil
      attribute :icon, :string, default: nil

      renders_one :icon_slot, Orbital::Icon

      orb_template <<-ORB
        <component(tag_name) **html_attributes>
          <Icon :if={@icon} name={@icon} size="sm"/>
          {{icon_slot}}
          <span class="Orbital-Menu-Item-Content">{{content}}</span>
          <Text :if={@shortcut} size="sm" tone="subdued">{{@shortcut}}</Text>
          <svg :if={@selected} class="Orbital-Menu-Item-Check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </component>
      ORB

      private

      def tag_name
        @url.present? ? :a : :button
      end

      def default_attributes
        attrs = super.merge(
          class: "Orbital-Menu-Item",
          role: "menuitem",
          tabindex: "-1",
          "data-disabled": @disabled || nil,
          "data-selected": @selected || nil,
          "data-active": @active || nil,
          "data-destructive": @destructive || nil,
          "aria-disabled": @disabled ? "true" : nil,
          "data-orbital-menu-target": "item"
        )

        attrs[:href] = @url if @url.present?
        attrs[:type] = "button" unless @url.present?

        # Add turbo-frame targeting for modal dialogs
        attrs["data-turbo-frame"] = Orbital.configuration.dialog_portal_id if @modal

        attrs
      end
    end
  end
end
