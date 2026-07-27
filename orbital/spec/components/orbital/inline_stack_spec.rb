# frozen_string_literal: true

require "spec_helper"

RSpec.describe Orbital::InlineStack do
  it "is a Component subclass" do
    expect(described_class).to be < Orbital::Component
  end

  describe "#default_attributes" do
    it "includes the Orbital-InlineStack class" do
      component = described_class.new
      attrs = component.send(:default_attributes)
      expect(attrs[:class]).to eq("Orbital-InlineStack")
    end

    it "defaults gap to '4'" do
      component = described_class.new
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-gap"]).to eq("4")
    end

    it "defaults align to :stretch" do
      component = described_class.new
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-align"]).to eq(:stretch)
    end

    it "defaults justify to :start" do
      component = described_class.new
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-justify"]).to eq(:start)
    end

    it "sets data-gap from the gap attribute" do
      component = described_class.new(gap: "8")
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-gap"]).to eq("8")
    end

    it "sets data-align from the align attribute" do
      component = described_class.new(align: :center)
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-align"]).to eq(:center)
    end

    it "sets data-justify from the justify attribute" do
      component = described_class.new(justify: :between)
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-justify"]).to eq(:between)
    end

    it "sets data-padding when padding is provided" do
      component = described_class.new(padding: "4")
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-padding"]).to eq("4")
    end

    it "omits data-wrap when wrap is nil" do
      component = described_class.new
      attrs = component.send(:default_attributes)
      expect(attrs).not_to have_key(:"data-wrap")
    end

    it "sets data-wrap to true for bare wrap" do
      component = described_class.new(wrap: "true")
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-wrap"]).to be(true)
    end

    it "sets data-wrap to 'reverse' for wrap='reverse'" do
      component = described_class.new(wrap: "reverse")
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-wrap"]).to eq("reverse")
    end
  end
end
