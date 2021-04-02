# frozen_string_literal: true

module SparklineChartsHelper
  def sparkline_bar_chart(values, className = 'sparkline-bar')
    content_tag(:div, class: className, data: { controller: 'charts--sparkline-bar-chart', 'charts--sparkline-bar-chart-values' => values.join(',') }) do
      concat ''
    end
  end

  def sparkline_pie_chart(values, className = 'sparkline-pie')
    content_tag(:div, class: className, data: { controller: 'charts--sparkline-pie-chart', 'charts--sparkline-pie-chart-values' => values.join(',') }) do
      concat ''
    end
  end
end
