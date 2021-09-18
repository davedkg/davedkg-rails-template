# frozen_string_literal: true

require_relative Rails.root.join('lib', 'app_config.rb')

PLATFORM_TITLE = 'DKG Template'
HEROKU_ROWS_COUNT = 10_000 # number of rows available on herokus postgres db
APP_DOMAIN = AppConfig.app_domain
EMAIL_DOMAIN = AppConfig.email_domain

# Native User Agents
NATIVE_IOS_USER_AGENT = "TemplateiOS"
NATIVE_ANDROID_USER_AGENT = "TemplateAndroid"
