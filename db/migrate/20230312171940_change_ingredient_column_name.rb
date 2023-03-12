class ChangeIngredientColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :ingredients, :meal_id, :home_cooked_meal_id
  end
end
