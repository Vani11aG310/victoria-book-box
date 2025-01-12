class BookBox < ApplicationRecord
  has_many :collections, dependent: :destroy
  belongs_to :user, optional: true
end
