class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @categories = Category.all
  end

  def category_params
    params.require(:category).permit(:name, :parent_id)
  end

end
