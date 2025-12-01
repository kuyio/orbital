# frozen_string_literal: true

module Orbital
  class Badge < Component
    attribute :variant, :symbol, default: :default, only: [:default, :secondary, :destructive, :ghost, :outline]

    orb_template <<-ORB
      <span **html_attributes>{{content}}</span>
    ORB

    private

    def default_attributes
      super.merge(class: default_classes)
    end

    def default_classes
      [
        # Base styles
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        # Variant styles
        variant_classes
      ]
    end

    def variant_classes
      case @variant
      when :secondary
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
      when :destructive
        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
      when :outline
        "text-foreground"
      when :ghost
        "border-transparent bg-transparent hover:bg-accent hover:text-accent-foreground"
      else # :default
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
      end
    end
  end
end
