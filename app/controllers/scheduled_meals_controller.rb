class ScheduledMealsController < ApplicationController

    def get_all_for_anchor_date
        if params[:anchor_date]
            anchor_date = Date.parse(params[:anchor_date])
            @scheduled_meals = ScheduledMeal.where("scheduled_date >= ? AND scheduled_date <= ?", anchor_date, anchor_date + 7.days).order(:scheduled_date, :asc)

            res = []
            @scheduled_meals.each do |scheduled_meal|
                res << { description: scheduled_meal.mealable.name, scheduled_date: scheduled_meal.scheduled_date}
            end
            render json: res
        else
            render json: { status: 400, message: "No date supplied."}
        end
    end

    def schedule_meal
        schedule_date = params[:scheduled_date]
        meal_id = params[:meal_id]

        ScheduledMeal.create!(user_id: 1, mealable_type: "HomeCookedMeal", mealable_id: meal_id, scheduled_date: Date.parse(schedule_date))

        render json: { status: 200 }
    end
end
