# frozen_string_literal: true

class Orbital::Text < Orbital::Component
  attribute :size, :symbol, only: %i[xs sm md lg xl], default: :md
  attribute :weight, :symbol, only: %i[light normal medium semibold bold], default: :normal
  attribute :align, :symbol, only: %i[left center right], default: :left
  attribute :tone, :symbol, only: %i[default subdued success warning danger info magic], default: :default
  attribute :as, :string, default: "span"

  def call
    content_tag @as, **html_attributes do
      content
    end
  end

  private

  def default_attributes
    super.merge(
      class: class_names(
        'Orbital-Text',
        size_classes,
        weight_classes
      ),
      "data-tone": @tone,
      "data-align": @align
    )
  end

  def size_classes
    case @size
    when :xs
      "text-body-xs"
    when :sm
      "text-body-sm"
    when :md
      "text-body-md"
    when :lg
      "text-body-lg"
    when :xl
      "text-body-xl"
    end
  end

  def weight_classes
    case @weight
    when :light
      "font-light"
    when :normal
      "font-normal"
    when :medium
      "font-medium"
    when :semibold
      "font-semibold"
    when :bold
      "font-bold"
    end
  end
end
