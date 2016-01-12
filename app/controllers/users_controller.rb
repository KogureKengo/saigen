class UsersController < ApplicationController
  def show
    @recipes = current_user.recipes.page(params[:page]).order("created_at DESC")
  end
end
