# frozen_string_literal: true

module FilesSpecHelper
  extend self
  extend ActionDispatch::TestProcess
  include ActionDispatch::TestProcess::FixtureFile

  def png_150x150_name
    'image-150x150.png'
  end

  # :reek:UncommunicativeMethodName
  def png_150x150
    upload(png_150x150_name, 'image/png')
  end

  def png_200x200_name
    'image-200x200.png'
  end

  # :reek:UncommunicativeMethodName
  def png_200x200
    upload(png_200x200_name, 'image/png')
  end

  def txt_name
    'text.txt'
  end

  def txt
    upload(txt_name, 'text/plain')
  end

  private

  def upload(name, type)
    file_path = Rails.root.join('spec', 'support', 'files', name)
    Rack::Test::UploadedFile.new(file_path, type)
  end
end
