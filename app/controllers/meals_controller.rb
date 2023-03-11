class MealsController < ApplicationController

    def all_meals
        @meals = HomeCookedMeal.all
        render json: @meals
    end
end
