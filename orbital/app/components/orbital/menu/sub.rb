# frozen_string_literal: true

module Orbital
  class Menu
    class Sub < Component
      attribute :label, :string, required: true

      renders_many :items, types: {
        item: Menu::Item,
        label: Menu::Label,
        separator: Menu::Separator
      }

      renders_one :icon, Orbital::Icon

      orb_template <<-ORB
        <div **html_attributes>
          <button
            class="Orbital-Menu-Item Orbital-Menu-Sub-Trigger"
            role="menuitem"
            tabindex="-1"
            aria-haspopup="true"
            aria-expanded={expanded}
            data-orbital-menu-target="item"
            data-orbital-menu-sub-target="trigger"
            data-action="click->orbital-menu-sub#toggle keydown->orbital-menu#handleKeydown">
            {{icon}}
            <span class="Orbital-Menu-Item-Content">{{@label}}</span>
            <Icon name="chevron-right" size="sm" class="Orbital-Menu-Sub-Icon"/>
          </button>
        #{'  '}
          <div
            class="Orbital-Menu Orbital-Menu-Sub-Content"
            role="menu"
            data-orbital-menu-sub-target="content"
            data-action="keydown->orbital-menu#handleKeydown">
            {#for item in items}
              {{item}}
            {/for}
          </div>
        </div>
      ORB

      private

      def expanded
        @expanded || "false"
      end

      def default_attributes
        super.merge(
          class: "Orbital-Menu-Sub",
          "data-state": "closed",
          data: {
            controller: "orbital-menu-sub"
          }
        )
      end
    end
  end
end
