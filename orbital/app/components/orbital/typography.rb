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
      super.merge(
        class: "Orbital-Typography",
        "data-variant": variant
      )
    end
  end
end
