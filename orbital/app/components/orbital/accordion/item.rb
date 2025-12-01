# frozen_string_literal: true

class Orbital::Accordion::Item < Orbital::Component
  renders_one :trigger

  attribute :value, :string, required: true
  attribute :expanded, :boolean, default: false

  orb_template <<-ORB
    <div **html_attributes>
      <Heading as="button" size="sm" class="flex justify-between cursor-pointer w-full" data-accordion-trigger>
        {{trigger}}
        <Icon name="chevron-down" size="small"/>
      </Heading>
      <div class="Orbital-Accordion-Item-Content data-[state=closed]:hidden flex flex-col items-start gap-2 mt-2" data-state={state}>
        {{content}}
      </div>
    </div>
  ORB

  private

  def state
    @expanded ? "open" : "closed"
  end

  def default_attributes
    super.merge(
      class: default_classes
    )
  end

  def default_classes
    [
      # Base styles
      "Orbital-Accordion-Item w-full border-b last:border-b-0 py-4",
    ]
  end
end