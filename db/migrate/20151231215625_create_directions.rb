class CreateDirections < ActiveRecord::Migration
  def change
    create_table :directions do |t|
      t.integer       :recipe_id
      t.integer       :step
      t.string        :image
      t.text          :text
      t.timestamps
    end
  end
end
