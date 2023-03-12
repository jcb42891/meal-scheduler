class ScheduledMealsController < ApplicationController

    def get_all_for_anchor_date
        if params[:anchor_date]
            anchor_date = Date.parse(params[:anchor_date])
            @scheduled_meals = ScheduledMeal.where("scheduled_date > ? AND scheduled_date < ?", anchor_date, anchor_date + 6.days) 
            render json: @scheduled_meals
        else
            render json: { status: 429, message: "No date supplied."}
        end
       
    end
end
