# frozen_string_literal: true

module Orbital
  class Popover < Component
    attribute :id, :string, default: -> { "popover-#{SecureRandom.hex(4)}" }
    attribute :on, :symbol, default: :click, only: [:click, :hover]
    attribute :position, :symbol, default: :auto, only: [:auto, :top, :bottom, :left, :right]

    renders_one :trigger

    orb_template <<-ORB
      <div
        data-controller="orbital-popover"
        data-orbital-popover-trigger-value={@on}
        data-orbital-popover-position-value={@position}
        **html_attributes>
        {#if trigger}
          <div
            data-orbital-popover-target="trigger"
            popovertarget={@id}
            popovertargetaction=toggle>
            {{trigger}}
          </div>
        {/if}
        {#if content}
          <div
            popover
            id={@id}
            data-orbital-popover-target="content"
            class="Orbital-Popover"
            data-position={@position}>
            {{content}}
          </div>
        {/if}
      </div>
    ORB

    private

    def default_attributes
      {
        class: "Orbital-Popover-Container",
        data: {
          state: "closed"
        }
      }.merge_html_attributes(super)
    end
  end
end
