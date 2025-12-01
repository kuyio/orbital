# frozen_string_literal: true

class Orbital::CheckBox < Orbital::Component
  attribute :name, :string, default: nil
  attribute :value, :string, default: "1"
  attribute :label, :string, default: nil
  attribute :help, :string, default: nil
  attribute :error, :string, default: nil
  attribute :checked, :boolean, default: false
  attribute :disabled, :boolean, default: false
  attribute :id, :string, default: nil

  orb_template <<-ORB
    <div class={wrapper_classes}>
      <label for={input_id} class={label_classes}>
        <div class={control_classes}>
          <input **html_attributes />
          <span class={indicator_classes}/>
          <Icon name="check" size="sm" class={icon_classes} />
        </div>
        <Text>{{ label_text }}</Text>
      </label>

      {#if @error.present?}
        <Text tone="danger" size="sm">{{ @error }}</Text>
      {/if}

      {#if @help.present? && !@error.present?}
        <Text tone="subdued" size="sm">{{ @help }}</Text>
      {/if}
    </div>
  ORB

  private

  def default_attributes
    super.merge(
      name: @name,
      value: @value,
      id: input_id,
      class: "peer sr-only",
      type: "checkbox",
      checked: @checked,
      disabled: @disabled
    )
  end

  def wrapper_classes
    class_names(
      "grid gap-1.5 leading-none"
    )
  end

  def control_classes
    class_names(
      "flex relative items-center gap-2 cursor-pointer",
    )
  end

  def indicator_classes
    class_names(
      "peer-checked:bg-primary",
      "relative h-4 w-4 rounded-sm border border-gray-800 bg-white"
    )
  end

  def icon_classes
    class_names(
      "peer-checked:inline-flex absolute left-0 p-1 text-white",
      "hidden"
    )
  end

  def label_classes
    class_names(
      "flex items-center gap-2 cursor-pointer select-none"
    )
  end

  def label_text
    @label || @name.to_s.humanize
  end

  def input_id
    @id ||= SecureRandom.hex(4)
  end

  def checked_attribute
    @checked ? "checked" : ""
  end

  def disabled_attribute
    @disabled ? "disabled" : ""
  end

  def help?
    @help.present?
  end
end
