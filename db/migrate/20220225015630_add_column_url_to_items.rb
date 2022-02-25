class AddColumnUrlToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :img_url, :string
  end
end
