class Direction < ActiveRecord::Base
  mount_uploader :image, DirectionsImageUploader
  belongs_to :recipe
end
