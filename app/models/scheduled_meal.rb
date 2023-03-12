# == Schema Information
#
# Table name: scheduled_meals
#
#  id             :integer          not null, primary key
#  user_id        :integer
#  mealable_id    :integer
#  mealable_type  :string
#  scheduled_date :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class ScheduledMeal < ApplicationRecord
    belongs_to :mealable, polymorphic: true
end
