require "rails_helper"

RSpec.describe AlertComponent, type: :component do

  let(:message) { Faker::Lorem.sentence }
  let(:type) { :success }
  let(:alert) { render_inline(AlertComponent, message: message, type: type) }

  it "renders message" do
    expect(
      alert.css(".alert").to_html
    ).to include(
      message
    )
  end

  it "renders alert-type" do
    assert alert.css(".alert-#{type}").one?
  end

  context "when message is nil" do
    let(:message) { nil }

    it "DOES NOT render the component" do
      expect(alert.to_html).to be_blank
    end
  end

  context "when type is not valid" do
    let(:type) { :invalid }

    it "throws a validation failed error" do
      expect { alert }.to raise_error(ActiveModel::ValidationError, "Validation failed: Type is not included in the list")
    end
  end

end
