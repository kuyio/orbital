# frozen_string_literal: true

require "spec_helper"

RSpec.describe Orbital::Grid do
  it "is a Component subclass" do
    expect(described_class).to be < Orbital::Component
  end

  describe "#default_attributes" do
    it "includes the Orbital-Grid class" do
      component = described_class.new
      attrs = component.send(:default_attributes)
      expect(attrs[:class]).to eq("Orbital-Grid")
    end

    it "defaults columns to '1'" do
      component = described_class.new
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-columns"]).to eq("1")
    end

    it "defaults gap to '4'" do
      component = described_class.new
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-gap"]).to eq("4")
    end

    it "sets data-columns from the columns attribute" do
      component = described_class.new(columns: "3")
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-columns"]).to eq("3")
    end

    it "sets data-gap from the gap attribute" do
      component = described_class.new(gap: "8")
      attrs = component.send(:default_attributes)
      expect(attrs[:"data-gap"]).to eq("8")
    end
  end
end
