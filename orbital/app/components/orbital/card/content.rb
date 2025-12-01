# frozen_string_literal: true

module Orbital
  class Card
    class Content < Component
      orb_template <<-ORB
        <div **html_attributes>{{content}}</div>
      ORB

      private

      def default_attributes
        super.merge(
          class: class_names(
            "p-6 pt-0",
            system_attributes[:class]
          )
        )
      end
    end
  end
end
