class AddPhotoFileNameToEvents < ActiveRecord::Migration
  def change
    add_column :events, :photo_file_name, :string
  end
end
