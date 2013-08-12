class AddPhotoFileSizeToEvents < ActiveRecord::Migration
  def change
    add_column :events, :photo_file_size, :string
  end
end
