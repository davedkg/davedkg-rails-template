# frozen_string_literal: true

module QuickStatsChartHelper
  def quick_stats_chart(model, query, color)
    content_tag(:div, class: 'col-sm-6 col-md-3') do
      content_tag(:div, class: "quick-stats__item bg-#{color}") do
        [
          content_tag(:div, class: 'quick-stats__info') do
            [content_tag(:h2) do
               concat number_with_delimiter(model.count)
             end,
             content_tag(:small) do
               concat "Total #{model.to_s.pluralize.titlecase}"
             end].join.html_safe
          end,
          content_tag(:div, class: 'quick-stats__chart') do
            concat sparkline_bar_chart(quick_stats_chart_values(query), { css_class: 'sparkline-bar-stats' })
          end
        ].join.html_safe
      end
    end
  end

  def quick_stats_chart_values(query)
    results = query.group_by_week(:created_at, last: 12).count

    results.map{ |_,v| v }
  end
end
