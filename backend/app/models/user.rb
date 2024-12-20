class User < ApplicationRecord
  has_many :book_boxes
  has_many :wishlists
end
