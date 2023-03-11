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
    
    def destroy_meal
        meal_to_destroy = HomeCookedMeal.find_by(id: params[:id])
        if meal_to_destroy
            meal_to_destroy.destroy!
        end
        render json: { status: 200, destroyed_meal_id: params[:id]}
    end
end
