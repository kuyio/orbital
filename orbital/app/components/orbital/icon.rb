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
    super.merge(class: class_names(
      'Orbital-Icon',
      "Orbital-Icon--size-#{@size}",
      size_classes
    ))
  end

  def size_classes
    case @size
    when :xs
      "*:h-2 *:w-2 h-4 w-4 flex items-center justify-center"
    when :sm
      "*:h-3 *:w-3 h-4 w-4 flex items-center justify-center"
    when :md
      "*:h-4 *:w-4 h-5 w-5 flex items-center justify-center"
    when :lg
      "*:h-6 *:w-6 h-7 w-7 flex items-center justify-center"
    when :xl
      "*:h-8 *:w-8 h-9 w-9 flex items-center justify-center"
    end
  end
end
