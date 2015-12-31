class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer     :recipe_id
      t.integer     :step
      t.string      :name
      t.string      :quantity
      t.timestamps
    end
  end
end
