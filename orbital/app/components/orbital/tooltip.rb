# frozen_string_literal: true

module Orbital
  class Tooltip < Component
    attribute :id, :string, default: -> { "popover-#{SecureRandom.hex(4)}" }
    attribute :on, :symbol, default: :hover, only: [:click, :hover]
    attribute :position, :symbol, default: :top, only: [:auto, :top, :bottom, :left, :right]
    attribute :text, :string, default: ""

    orb_template <<-ORB
      <div **html_attributes>
        <div data-orbital-popover-target="trigger">
          {{content}}
        </div>
        <div
          popover
          id={@id}
          data-orbital-popover-target="content"
          class="Orbital-Tooltip-Content"
          role="tooltip"
          data-position={@position}>
            {{@text}}
        </div>
      </div>
    ORB

    private

    def default_attributes
      super.merge(
        class: "Orbital-Tooltip",
        data: {
          'controller' => "orbital-popover",
          'orbital-popover-trigger-value' => @on,
          'orbital-popover-position-value' => @position
        }
      )
    end
  end
end
