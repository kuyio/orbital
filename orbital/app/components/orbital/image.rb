# frozen_string_literal: true

class Orbital::Image < Orbital::Component
  attribute :asset, :string, required: true
  attribute :alt, :string, default: ""
  attribute :width, :integer, default: 32
  attribute :height, :integer, default: 32

  def call
    tag.img(src: asset_path(@asset), alt: @alt, width: @width, height: @height, **html_attributes)
  end

  private

  def default_attributes
    super.merge(
      class: class_names(
        'Orbital-Image',
        'inline-block',
      )
    )
  end
end