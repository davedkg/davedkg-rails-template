class User < ApplicationRecord

  # Additional: :registerable, :timeoutable, and :omniauthable
  devise :database_authenticatable, :confirmable, :lockable,
         :recoverable, :rememberable, :trackable, :validatable
end
