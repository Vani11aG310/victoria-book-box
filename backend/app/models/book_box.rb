class BookBox < ApplicationRecord
  has_many :collections 
  belongs_to :user
end
