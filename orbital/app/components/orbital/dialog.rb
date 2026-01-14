# frozen_string_literal: true

module Orbital
  class Dialog < Component
    attribute :open, :boolean, default: false
    attribute :dismissible, :boolean, default: true
    attribute :size, :symbol, default: :default, only: [:sm, :default, :lg, :xl, :full]

    renders_one :header
    renders_one :body
    renders_one :footer

    orb_template <<-ORB
      <dialog **html_attributes>
        <button :if={@dismissible}
          type="button"
          data-action="orbital-dialog#close"
          class="Orbital-Dialog-Close"
          aria-label="Close">
          <svg class="Orbital-Icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="Orbital-Dialog-Header" :if={header}>
          {{header}}
        </div>

        <div class="Orbital-Dialog-Body" :if={body}>
          {{body}}
        </div>

        <div class="Orbital-Dialog-Body" :if={!body}>
          {{content}}
        </div>

        <div class="Orbital-Dialog-Footer" :if={footer}>
          {{footer}}
        </div>
      </dialog>
    ORB

    # Helper method for Turbo Frame responses
    def self.turbo_frame_response(dialog_instance)
      portal_id = Orbital.configuration.dialog_portal_id
      Turbo::StreamsHelper.turbo_stream.update(portal_id, dialog_instance)
    end

    private

    def default_attributes
      super.merge({
        class: "Orbital-Dialog",
        data: {
          controller: "orbital-dialog",
          "orbital-dialog-open-value": @open,
          "orbital-dialog-dismissible-value": @dismissible,
          size: @size,
          state: @open ? "open" : "closed"
        }
      })
    end
  end
end
