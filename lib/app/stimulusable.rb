module Stimulusable
  def add_stimulus_controller(data, controller)
    data[:controller] = add_stimulus_param_to_params(controller, data[:controller])
  end

  private

  def add_stimulus_param_to_params(param, params)
    params = (params || "").split

    params << param unless params.include?(param)

    params.join(" ")
  end
end
