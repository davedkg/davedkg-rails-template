class MaterialBreakcrumbs < BreadcrumbsOnRails::Breadcrumbs::SimpleBuilder
      
  def render_element(element)
    if element.path == nil
      content = compute_name(element)
    else
      content = @context.link_to_unless_current(compute_name(element), compute_path(element), element.options)
    end
    if @options[:tag]
      @context.content_tag(@options[:tag], content, class: 'breadcrumb-item')
    else
      ERB::Util.h(content)
    end
  end
  
end
