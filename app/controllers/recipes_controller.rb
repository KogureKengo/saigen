class RecipesController < ApplicationController
  before_action :authenticate_user!, only: :new

  def index
    @recipe = Recipe.find(2)
  end

  def new
    @recipe = Recipe.new
    @ingredient = Ingredient.new
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def create
    recipe = Recipe.create(recipe_create_params)
    Ingredient.create(ingredient_create_params(recipe.id))
    redirect_to controller: :recipes, action: :index
  end

  private
  def recipe_create_params
    params.require(:recipe).permit(:title, :summary, :advice, :image, :image_cache, :remove_image).merge(user_id: current_user.id)
  end
  def ingredient_create_params(recipe_id)
    params.require(:ingredient).permit(:name, :quantity).merge(recipe_id: recipe_id)
  end
end
