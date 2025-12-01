# frozen_string_literal: true

class Orbital::Kbd < Orbital::Component
  orb_template <<-ORB
    <div **html_attributes>
      {{content}}
    </div>
  ORB

  private

  def default_attributes
    super.merge(
      class: class_names(
        'Orbital-Kbd',
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none border-1"
      )
    )
  end
end