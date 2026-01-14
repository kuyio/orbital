# frozen_string_literal: true

module Orbital
  class Dropdown < Component
    attribute :id, :string, default: -> { "popover-#{SecureRandom.hex(4)}" }
    attribute :on, :symbol, default: :click, only: [:click, :hover]
    attribute :position, :symbol, default: :bottom, only: [:auto, :top, :bottom, :left, :right]
    attribute :label, :string
    attribute :variant, :symbol, default: :nil
    attribute :fullwidth, :boolean, default: false

    renders_one :trigger

    orb_template <<-ORB
      <div **html_attributes>

        <div data-orbital-popover-target="trigger" :if={trigger}>
          {{trigger}}
        </div>

        <Button
          variant={@variant}
          size={@label.blank? ? :icon : :default}
          data-orbital-popover-target="trigger"
          popovertarget={@id}
          popovertargetaction="toggle"
          :if={!trigger}>
          <span :if={@label}>{{@label}}</span>
          <Icon name="chevron-down" size="sm"/>
        </Button>

        <div
          popover
          id={@id}
          data-orbital-popover-target="content"
          class="Orbital-Popover Orbital-Dropdown"
          data-position={@position} :if={content}>
          {{content}}
        </div>
      </div>
    ORB

    private

    def default_attributes
      super.merge({
        class: class_names(
          "Orbital-Dropdown",
          "Orbital-Dropdown--fullwidth": @fullwidth
        ),
        data: {
          controller: "orbital-popover",
          "orbital-popover-trigger-value": @on,
          "orbital-popover-position-value": @position,
          state: "closed"
        }
      })
    end
  end
end
