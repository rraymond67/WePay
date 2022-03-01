class BidsController < ApplicationController
  before_action :set_bid, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /bids
  def index
    @item = Item.find(params[:item_id])
    @bids = @item.bids

    render json: @bids, include: :user
  end

  def get_all_bids
    @bids = Bid.all
    render json: @bids
  end

  # GET /bids/1
  def show
    render json: @bid
  end

  # POST /bids
  def create
    @bid = Bid.new(bid_params)
    @bid.user = @current_user
    @bid.item_id = params[:item_id]

    if @bid.save
      render json: @bid, status: :created
    else
      render json: @bid.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bids/1
  def update
    if @bid.update(bid_params)
      render json: @bid
    else
      render json: @bid.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bids/1
  def destroy
    @bid.destroy
    render json: @bid
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bid
      @bid = Bid.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bid_params
      params.require(:bid).permit(:amount, :user_id, :item_id)
    end
end
