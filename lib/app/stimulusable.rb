# frozen_string_literal: true

module Stimulusable
  def add_stimulus_controller(data, controller)
    data[:controller] = add_stimulus_param_to_params(controller, data[:controller])
  end

  def add_stimulus_action(data, action)
    data[:action] = add_stimulus_param_to_params(action, data[:action])
  end

  private

  def add_stimulus_param_to_params(param, params)
    params = (params || '').split(' ')

    params << param unless params.include?(param)

    params.join(' ')
  end
end
