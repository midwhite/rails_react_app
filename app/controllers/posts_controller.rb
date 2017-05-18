class PostsController < ApplicationController
  def create
    puts "========== Create Post =========="
    render json: {
      message: "200 OK"
    }
  end
end
