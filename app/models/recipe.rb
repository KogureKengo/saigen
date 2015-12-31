class Recipe < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  has_many :ingredients, dependent: :destroy
  has_many :directions, dependent: :destroy
  # :destroyオプションを追加することで、destoryメソッドで注文を削除したら、Railsがその注文に紐づいている請求書も自動で削除してくれます。
  accepts_nested_attributes_for :ingredients
  accepts_nested_attributes_for :directions
end
