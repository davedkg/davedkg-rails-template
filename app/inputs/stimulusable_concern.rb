module StimulusableConcern
  extend ActiveSupport::Concern

  def input_html_options
    merge_stimulus_options(super)
  end

  def stimulus_controller_name
    raise NotImplementedError
  end

  private

  def merge_stimulus_options(options)
    options[:data] ||= {}

    if options[:data][:controller]
      unless options[:data][:controller].include?(" #{stimulus_controller_name}")
        options[:data][:controller] = "#{options[:data][:controller]} #{stimulus_controller_name}"
      end
    else
      options[:data][:controller] = stimulus_controller_name
    end

    options
  end

end