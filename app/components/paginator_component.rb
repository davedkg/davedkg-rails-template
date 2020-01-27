class PaginatorComponent < ActionView::Component::Base

  attr_reader :objects

  def initialize(objects:)
    @objects = objects
  end

  def render?
    objects && 0 != objects.size
  end

end
