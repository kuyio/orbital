# frozen_string_literal: true

module Orbital
  class Badge < Component
    attribute :variant, :symbol, default: :default, only: [:default, :secondary, :destructive, :ghost, :outline]
    attribute :dot, :symbol, default: nil, only: [:default, :success, :warning, :danger, :info, :subdued]

    orb_template <<-ORB
      <span **html_attributes>
        <span class="Orbital-Badge-Dot" data-tone={@dot} :if={@dot}></span>
        {{content}}
      </span>
    ORB

    private

    def default_attributes
      super.merge(
        class: "Orbital-Badge",
        "data-variant": @variant
      )
    end
  end
end
