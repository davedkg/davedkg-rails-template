class PaginatedTableComponent < ActionView::Component::Base

  attr_reader :objects, :object_class

  with_content_areas :head, :body

  validates :object_class, presence: true

  def initialize(objects:, object_class:)
    @objects      = objects
    @object_class = object_class
  end

  def render?
    objects && 0 != objects.size
  end

end
