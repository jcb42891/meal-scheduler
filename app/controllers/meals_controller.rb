class MealsController < ApplicationController

    def all_meals
        @meals = HomeCookedMeal.all
        render json: @meals
    end

    def add_meal
        name = params[:name]
        HomeCookedMeal.create!(user_id: 1, name: name)
        render json: { status: 200 }
    end
end
