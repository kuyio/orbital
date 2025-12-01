# frozen_string_literal: true

module Orbital
  class ButtonGroup < Component
    attribute :orientation, :symbol, default: :horizontal, only: [:horizontal, :vertical]

    orb_template <<-ORB
      <div **html_attributes>{{content}}</div>
    ORB

    private

    def default_attributes
      super.merge(class: default_classes)
    end

    def default_classes
      [
        # Base styles
        "flex items-stretch",
        # Orientation styles
        orientation_classes
      ]
    end

    def orientation_classes
      case @orientation
      when :vertical
        "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      else # :horizontal
        "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none"
      end
    end
  end
end
