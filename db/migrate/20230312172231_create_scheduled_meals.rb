class CreateScheduledMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :scheduled_meals do |t|
      t.integer :user_id
      t.integer :mealable_id
      t.string :mealable_type
      t.datetime :scheduled_date
      t.timestamps
    end
  end
end
