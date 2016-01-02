class AddAwesomeNestedSetColumnsToCategories < ActiveRecord::Migration
  def change
    # 必須のフィールド
    add_column :categories, :parent_id, :integer
    add_column :categories, :lft,       :integer
    add_column :categories, :rgt,       :integer

    add_index :categories, :parent_id
    add_index :categories, :lft
    add_index :categories, :rgt


    # オプションのフィールド
    # add_column :categories, :depth,          :integer
    # add_column :categories, :children_count, :integer
    #
    # add_index :categories, :depth
  end
end
