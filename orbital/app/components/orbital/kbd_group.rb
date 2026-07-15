# frozen_string_literal: true

class Orbital::KbdGroup < Orbital::Component
  orb_template <<-ORB
    <span **html_attributes>
      {{content}}
    </span>
  ORB

  private

  def default_attributes
    super.merge(class: 'Orbital-KbdGroup')
  end
end
