# frozen_string_literal: true

class Orbital::Icon < Orbital::Component
  attribute :name, :string, required: true
  attribute :variant, :symbol, only: %i[solid regular brands], default: :solid
  attribute :size, :symbol, only: %i[xs sm md lg xl], default: :md

  def call
    tag.div(**html_attributes) do
      Orbital::Icons.render(@name, variant: @variant)
    end
  end

  private

  def default_attributes
    super.merge(
      class: 'Orbital-Icon',
      "data-size": @size
    )
  end
end
