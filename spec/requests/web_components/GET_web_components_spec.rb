# frozen_string_literal: true

require 'rails_helper'

describe 'GET web_components_path', type: :request do
  subject { get web_components_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    subject
  end

  context 'when role is user' do
    it 'returns redirect status' do
      expect(response).to have_http_status(:redirect)
    end
  end

  context 'when role is admin' do
    let(:user) { create(:user, :admin) }

    it 'returns ok status' do
      expect(response).to have_http_status(:ok)
    end
  end
end
