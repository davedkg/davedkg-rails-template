# frozen_string_literal: true

module SparklineChartsHelper
  def sparkline_bar_chart(values, options = {})
    data = {
      controller: 'charts--sparkline-bar-chart',
      'charts--sparkline-bar-chart-values' => values.join(',')
    }
    options = { css_class: 'sparkline-bar' }.merge(options)
    css_class = options.delete(:css_class)

    options.each do |key, value|
      data["charts--sparkline-bar-chart-#{key}"] = value
    end

    content_tag(:div, class: css_class, data: data) do
      concat ''
    end
  end

  def sparkline_pie_chart(values, options = {})
    data = {
      controller: 'charts--sparkline-pie-chart',
      'charts--sparkline-pie-chart-values' => values.join(',')
    }
    options = { css_class: 'sparkline-pie' }.merge(options)
    css_class = options.delete(:css_class)

    options.each do |key, value|
      data["charts--sparkline-pie-chart-#{key}"] = value
    end

    content_tag(:div, class: css_class, data: data) do
      concat ''
    end
  end
end
