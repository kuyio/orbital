# frozen_string_literal: true

module Orbital
  module Type
    class Any < ActiveModel::Type::Value
      def type
        :any
      end

      private

      def cast_value(value)
        value
      end
    end
  end
end
