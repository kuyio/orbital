# frozen_string_literal: true

module Orbital
  class Card < Component
    renders_one :header, Card::Header
    renders_one :body, Card::Content
    renders_one :footer, Card::Footer

    orb_template <<-ORB
      <div **html_attributes>
        {{header}}
        {{body}}
        {{footer}}
      </div>
    ORB

    private

    def default_attributes
      super.merge(
        class: class_names(
          "rounded-lg border bg-card text-card-foreground shadow-sm"
        )
      )
    end
  end
end
