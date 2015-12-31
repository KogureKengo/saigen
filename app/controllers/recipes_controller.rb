class RecipesController < ApplicationController
  before_action :authenticate_user!, only: :new

  def index
    @recipe = Recipe.find(2)
  end

  def new
    @recipe = Recipe.new
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def create
    recipe = Recipe.create(recipe_create_params)
    redirect_to controller: :recipes, action: :index
  end

  private
  def recipe_create_params
    params.require(:recipe).permit(:title, :summary, :advice, :image, :image_cache, :remove_image, ingredients_attributes: [:id, :recipe_id, :name, :quantity, :step], directions_attributes: [:id, :recipe_id, :step, :image, :image_cache, :remove_image, :text]).merge(user_id: current_user.id)
  end
end
