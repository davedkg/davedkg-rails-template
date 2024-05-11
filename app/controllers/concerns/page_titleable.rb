# frozen_string_literal: true

module PageTitleable
  extend ActiveSupport::Concern

  included do
    helper_method :page_title
  end

  private

  def page_title_resource
    controller_name.titleize.singularize
  end

  def page_title_hash
    {
      index: page_title_resource.pluralize.to_s,
      show: page_title_resource.to_s,
      new: "New #{page_title_resource}",
      edit: "Edit #{page_title_resource}",
      create: "New #{page_title_resource}",
      update: "Edit #{page_title_resource}",
      destroy: "Destroy #{page_title_resource}"
    }
  end

  def page_title
    @page_title ||= page_title_hash[params[:action].to_sym]
  end
end
