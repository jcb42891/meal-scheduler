class ScheduledMealsController < ApplicationController

    def get_all_for_anchor_date
        if params[:anchor_date]
            anchor_date = Date.parse(params[:anchor_date])
            @scheduled_meals = ScheduledMeal.where("scheduled_date >= ? AND scheduled_date <= ?", anchor_date, anchor_date + 7.days)

            res = []
            @scheduled_meals.each do |scheduled_meal|
                res << { description: scheduled_meal.mealable.name, scheduled_date: scheduled_meal.scheduled_date}
            end
            puts res
            render json: res
        else
            render json: { status: 400, message: "No date supplied."}
        end
    end
end
