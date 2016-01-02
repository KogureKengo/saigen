class AddColumnToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :name, :text
  end
end
