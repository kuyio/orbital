# frozen_string_literal: true

class Orbital::Expander < Orbital::Component
  attribute :vertical, type: :boolean, default: false

  orb_template <<-ORB
    <div class="Orbital-Expander"></div>
  ORB

  private

  def default_attributes
    super.merge(
      class: class_names(
        "Orbital-Expander",
        "Orbital-Expander--vertical": @vertical
      )
    )
  end
end
