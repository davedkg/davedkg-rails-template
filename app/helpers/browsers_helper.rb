# frozen_string_literal: true

module BrowsersHelper
  def native?
    native_ios? || native_android?
  end

  def native_ios?
    request.user_agent&.include?(NATIVE_IOS_USER_AGENT)
  end

  def native_android?
    request.user_agent&.include?(NATIVE_ANDROID_USER_AGENT)
  end
end
