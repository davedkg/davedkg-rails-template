module ChartsHelper
  
  # model must include Analyzable
  def quick_stats_chart_values(model)
    model.totals_by_month(12).join(',')
  end
  
end
