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

require "test_helper"

class ScheduledMealTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
