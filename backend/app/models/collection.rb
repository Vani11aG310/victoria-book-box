class Collection < ApplicationRecord
  belongs_to :book_box
  belongs_to :book
end
