class User < ApplicationRecord
  has_secure_password
  has_many :items, dependent: :destroy
  has_many :bids, dependent: :destroy

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
