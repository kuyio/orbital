# frozen_string_literal: true

module Orbital
  class Typography < Component
    TAG_MAPPING = {
      h1: :h1,
      h2: :h2,
      h3: :h3,
      h4: :h4,
      p: :p,
      blockquote: :blockquote,
      list: :ul,
      lead: :p,
      large: :div,
      small: :small,
      muted: :p
    }.freeze

    attribute :variant, :symbol, default: :p, only: TAG_MAPPING.keys

    orb_template <<-ORB
      <{{tag_name}} **html_attributes>{{content}}</{{tag_name}}>
    ORB

    private

    def tag_name
      system_attributes.delete(:tag) || TAG_MAPPING[variant] || :p
    end

    def default_attributes
      super.merge(class: default_classes)
    end

    def default_classes
      [variant_classes]
    end

    def variant_classes
      case variant
      when :h1
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      when :h2
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      when :h3
        "scroll-m-20 text-2xl font-semibold tracking-tight"
      when :h4
        "scroll-m-20 text-xl font-semibold tracking-tight"
      when :blockquote
        "mt-6 border-l-2 pl-6 italic"
      when :list
        "my-6 ml-6 list-disc [&>li]:mt-2"
      when :lead
        "text-xl text-muted-foreground"
      when :large
        "text-lg font-semibold"
      when :small
        "text-sm font-medium leading-none"
      when :muted
        "text-sm text-muted-foreground"
      else # :p
        "leading-7 [&:not(:first-child)]:mt-6"
      end
    end
  end
end
