class Category < ActiveRecord::Base
  has_many :recipes
  acts_as_nested_set
end
