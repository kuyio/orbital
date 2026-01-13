# frozen_string_literal: true

module Orbital
  class Badge < Component
    attribute :variant, :symbol, default: :default, only: [:default, :secondary, :destructive, :ghost, :outline]

    orb_template <<-ORB
      <span **html_attributes>{{content}}</span>
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
