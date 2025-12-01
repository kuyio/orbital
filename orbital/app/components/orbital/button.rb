# frozen_string_literal: true

module Orbital
  class Button < Component
    attribute :variant, :symbol, default: :default, only: [:default, :destructive, :outline, :secondary, :ghost, :link]
    attribute :size, :symbol, default: :sm, only: [:sm, :default, :lg, :icon]
    attribute :url, :string, default: nil
    attribute :disabled, :boolean, default: false

    def call
      build_tag(**html_attributes) do
        content
      end
    end

    private

    def default_attributes
      super.merge(class: default_classes)
    end

    def build_tag(**opts)
      if @url.present?
        tag.a(href: @url, **opts) { yield }
      else
        tag.button(**opts) { yield }
      end
    end

    def tag_name
      @url.present? ? "a" : "button"
    end

    def default_classes
      [
        # Base styles
        "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
        "transition-all disabled:pointer-events-none disabled:opacity-50",
        "outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        # Variant styles
        variant_classes,
        # Size styles
        size_classes
      ]
    end

    def variant_classes
      case @variant
      when :destructive
        "bg-destructive text-white hover:bg-destructive/90"
      when :outline
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      when :secondary
        "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      when :ghost
        "hover:bg-accent hover:text-accent-foreground"
      when :link
        "text-primary underline-offset-4 hover:underline"
      else # :default
        "bg-primary text-primary-foreground hover:bg-primary/90"
      end
    end

    def size_classes
      case @size
      when :sm
        "h-8 rounded-md gap-1.5 px-3"
      when :lg
        "h-10 rounded-md px-6"
      when :icon
        "size-8"
      else # :default
        "h-8 px-4 py-1"
      end
    end
  end
end
