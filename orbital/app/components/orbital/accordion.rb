# frozen_string_literal: true

class Orbital::Accordion < Orbital::Component
  renders_many :items, Orbital::Accordion::Item

  orb_template <<-ORB
    <div **html_attributes>
      {#for item in items}
        {{item}}
      {/for}
    </div>
  ORB

  private

  def default_attributes
    super.merge(
      class: default_classes,
      role: "region",
      data: { controller: "o-accordion" },
    )
  end

  def default_classes
    class_names(
      'Orbital-Accordion',
      'flex flex-col gap-4 w-full',
    )
  end
end