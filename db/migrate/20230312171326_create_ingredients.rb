class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.integer :meal_id
      t.string :description

      t.timestamps
    end
  end
end
