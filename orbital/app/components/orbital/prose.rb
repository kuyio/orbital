# frozen_string_literal: true

class Orbital::Prose < Orbital::Component
  def call
    content_tag :div, **html_attributes do
      content
    end
  end

  private

  def default_attributes
    super.merge(class: "Orbital-Prose")
  end
end
