# == Schema Information
#
# Table name: home_cooked_meals
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class HomeCookedMeal < ApplicationRecord
end
