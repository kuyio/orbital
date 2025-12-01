# frozen_string_literal: true

module Orbital
  class Separator < Component
    attribute :orientation, :symbol, only: %i[horizontal vertical], default: :horizontal
    attribute :decorative, :boolean, default: true

    orb_template <<-ORB
      <div **html_attributes></div>
    ORB

    private

    def default_attributes
      super.merge(
        class: default_classes,
        "data-orientation": @orientation,
        role: @decorative ? "none" : "separator",
      )
    end

    def default_classes
      [
        # Base styles
        "bg-border shrink-0",
        # Orientation styles
        orientation_classes
      ]
    end

    def orientation_classes
      "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
    end
  end
end