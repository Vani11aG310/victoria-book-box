class Book < ApplicationRecord
  belongs_to :author
  belongs_to :subject
  has_many :collections
  has_many :wishlists
end
