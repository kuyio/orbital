# frozen_string_literal: true

class Orbital::KbdGroup < Orbital::Component
  orb_template <<-ORB
    <div **html_attributes>
      {{content}}
    </div>
  ORB

  private

  def default_attributes
    super.merge(class: 'Orbital-KbdGroup')
  end
end
