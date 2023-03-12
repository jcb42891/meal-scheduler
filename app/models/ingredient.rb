# == Schema Information
#
# Table name: ingredients
#
#  id                  :integer          not null, primary key
#  home_cooked_meal_id :integer
#  description         :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Ingredient < ApplicationRecord
    belongs_to :home_cooked_meals
end
