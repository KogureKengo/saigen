class CategoriesController < ApplicationController

  def index

  end

  def show
    @categories = Category.all
  end

end
