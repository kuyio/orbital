# frozen_string_literal: true

class Orbital::NavigationMenu < Orbital::Component
  orb_template <<-ORB
    <nav **html_attributes>
      {{content}}
    </nav>
  ORB

  private

  def default_attributes
    super.merge(class: "Orbital-NavigationMenu")
  end
end
