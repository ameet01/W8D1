class Api::BenchesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @benches = Bench.all
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  def bench_params
    params.require(:bench).permit(:description, :lng, :lat)
  end
end
