# frozen_string_literal: true

module Orbital
  class Card
    class Footer < Component
      orb_template <<-ORB
        <div **html_attributes>{{content}}</div>
      ORB

      private

      def default_attributes
        super.merge(
          class: class_names(
            "flex items-center p-6 pt-0",
            system_attributes[:class]
          )
        )
      end
    end
  end
end
