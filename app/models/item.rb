class Item < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy #an item can have many bids for it. Once the item is destroy so will the bids attach to it
end
