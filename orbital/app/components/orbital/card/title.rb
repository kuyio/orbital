# frozen_string_literal: true

module Orbital
  class Card
    class Title < Component
      orb_template <<-ORB
        <div **html_attributes>{{content}}</div>
      ORB

      private

      def default_attributes
        super.merge(
          class: class_names(
            "text-2xl font-semibold leading-none tracking-tight",
            system_attributes[:class]
          )
        )
      end
    end
  end
end
