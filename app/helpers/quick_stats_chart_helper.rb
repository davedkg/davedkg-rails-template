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
            content_tag(:div, class: 'sparkline-bar-stats', data: { controller: 'charts--quick-stats-chart', 'charts--quick-stats-chart-values' => quick_stats_chart_values(query) }) do
              concat ''
            end
          end
        ].join.html_safe
      end
    end
  end

  def quick_stats_chart_values(query)
    now        = Time.zone.now
    start      = now.beginning_of_month - 11.months + 1.minute
    counts     = query.where(created_at: start..now).group_by_month(:created_at).count
    new_counts = {}

    counts = counts.map do |k, v|
      new_counts[k.to_s] = v
    end

    results = []
    step    = start
    while step < now
      key = step.to_date.to_s

      results << (new_counts[key] || 0)

      step += 1.month
    end

    results.join(',')
  end
end
