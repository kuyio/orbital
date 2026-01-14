# frozen_string_literal: true

module Orbital
  class DeleteDialog < Component
    attribute :open, :boolean, default: false
    attribute :dismissible, :boolean, default: true
    attribute :size, :symbol, default: :default, only: [:sm, :default, :lg, :xl, :full]
    attribute :title, :string, default: "Delete item?"
    attribute :description, :string, default: nil
    attribute :cancel_text, :string, default: "Cancel"
    attribute :confirm_text, :string, default: "Delete"
    attribute :action_url, :string, default: nil
    attribute :method, :symbol, default: :delete, only: [:get, :post, :patch, :put, :delete]
    attribute :loading, :boolean, default: false
    attribute :destructive, :boolean, default: true

    renders_one :cancel_action
    renders_one :confirm_action

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

        <div class="Orbital-Dialog-Header">
          <div>
            <h2 class="Orbital-Dialog-Title">{{@title}}</h2>
            {#if @description}
              <p class="Orbital-Dialog-Description">{{@description}}</p>
            {/if}
          </div>
        </div>
      #{'  '}
        {#if content}
          <div class="Orbital-Dialog-Body">
            {{content}}
          </div>
        {/if}
      #{'  '}
        {#if @action_url}
          <form action={@action_url} method="post" class="Orbital-Dialog-Footer">
            {#if csrf_token}
              <input type="hidden" name="authenticity_token" value={csrf_token}>
            {/if}
            {#if method_field}
              <input type="hidden" name="_method" value={@method}>
            {/if}
      #{'      '}
            {#if cancel_action?}
              {{cancel_action}}
            {#else}
              <button
                type="button"
                data-action="orbital-dialog#close"
                class="Orbital-Button"
                data-variant="outline"
                data-size="default">
                {{@cancel_text}}
              </button>
            {/if}
      #{'      '}
            {#if confirm_action?}
              {{confirm_action}}
            {#else}
              <button
                class="Orbital-Button"
                data-variant="default"
                data-size="default"
                type="submit"
                :if={@loading} disabled>
                {#if @loading}
                  <span class="Orbital-ConfirmationDialog-Spinner">
                    <svg class="Orbital-Icon animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                    </svg>
                  </span>
                {/if}
                {{@confirm_text}}
              </button>
            {/if}
          </form>
        {#else}
          <div class="Orbital-Dialog-Footer">
            {#if cancel_action?}
              {{cancel_action}}
            {#else}
              <button
                type="button"
                data-action="orbital-dialog#close"
                class="Orbital-Button"
                data-variant="outline"
                data-size="default">
                {{@cancel_text}}
              </button>
            {/if}
      #{'      '}
            {#if confirm_action?}
              {{confirm_action}}
            {#else}
              <button
                class="Orbital-Button"
                data-variant="default"
                data-size="default"
                type="button">
                {{@confirm_text}}
              </button>
            {/if}
          </div>
        {/if}
      </dialog>
    ORB

    private

    def csrf_token
      # Rails CSRF token helper
      return nil unless defined?(Rails)

      helpers.form_authenticity_token if helpers.respond_to?(:form_authenticity_token)
    end

    def method_field
      return nil if @method == :post || @method.nil?

      @method
    end

    def default_attributes
      {
        class: "Orbital-Dialog",
        data: {
          controller: "orbital-dialog",
          "orbital-dialog-open-value": @open,
          "orbital-dialog-dismissible-value": @dismissible,
          size: @size,
          state: @open ? "open" : "closed",
          destructive: @destructive
        }
      }.merge_html_attributes(super)
    end
  end
end
