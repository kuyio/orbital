# frozen_string_literal: true

module Orbital
  class Popcard < Component
    attribute :id, :string, default: -> { "popover-#{SecureRandom.hex(4)}" }
    attribute :on, :symbol, default: :hover, only: [:click, :hover]
    attribute :position, :symbol, default: :auto, only: [:auto, :top, :bottom, :left, :right]
    attribute :trigger_type, :symbol, default: :hover

    renders_one :trigger

    orb_template <<-ORB
      <div
        data-controller="orbital-popover"
        data-orbital-popover-trigger-value={@trigger_type}
        data-orbital-popover-position-value={@position}
        **html_attributes>
      #{'  '}
        {#if trigger?}
          <div
            data-orbital-popover-target="trigger">
            {{trigger}}
          </div>
        {/if}
      #{'  '}
        {#if content?}
          <div
            popover
            id={@id}
            data-orbital-popover-target="content"
            class="Orbital-Popcard"
            data-position={@position}>
            {{content}}
          </div>
        {/if}
      </div>
    ORB

    private

    def default_attributes
      {
        class: "Orbital-Popcard-Container",
        data: {
          state: "closed"
        }
      }.merge_html_attributes(super)
    end
  end
end
