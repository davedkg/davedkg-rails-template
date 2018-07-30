require "rails_helper"

describe ApplicationHelper do
  
  describe "#active_tab_class" do
    it "returns active if tabs match" do
      expect(helper.active_tab_class(:tab, :tab)).to be_truthy
    end
    
    it "returns nil if tabs do not match" do
      expect(helper.active_tab_class(:tab, :tab_2)).to be_falsey
    end
  end
  
  describe "#active_class_for_controller" do
    before(:each) do
      controller.params[:controller] = :controller_name
    end
  
    it "returns active if tabs match" do
      expect(helper.active_class_for_controller(:controller_name)).to be_truthy
    end
    
    it "returns nil if tabs do not match" do
      expect(helper.active_class_for_controller(:controller_name_2)).to be_falsey
    end
  end
  
end