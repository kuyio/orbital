# frozen_string_literal: true

module Orbital
  class DialogFrame < Component
    orb_template <<-ORB
      <turbo-frame id={portal_id}>
        {{content}}
      </turbo-frame>
    ORB

    private

    def portal_id
      Orbital.configuration.dialog_portal_id
    end
  end
end
