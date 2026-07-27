# frozen_string_literal: true

RSpec.describe Orbital do
  it "has a version number" do
    expect(Orbital::VERSION).not_to be_nil
  end

  it "provides a component base class" do
    expect(Orbital::Component).to be < ViewComponent::Base
  end
end
