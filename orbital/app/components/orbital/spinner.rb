# frozen_string_literal: true

class Orbital::Spinner < Orbital::Component
  attribute :size, :string, default: "md" # sm, md, lg
  attribute :tone, :string, default: "primary" # primary, secondary, accent
  attribute :kind, :string, only: %w[notch dots], default: "notch"

  orb_template <<-ORB
    <div class={spinner_classes} role="status" aria-live="polite" aria-busy="true">
      <span class="sr-only">Loading...</span>
      <Icon name="circle-notch" size={@size}/>
    </div>
  ORB

  private

  def spinner_classes
    class_names(
      "animate-spin": @kind == "notch",
      "h-4 w-4": @size == "sm",
      "h-5 w-5": @size == "md",
      "h-7 w-7": @size == "lg"
    )
  end
end
