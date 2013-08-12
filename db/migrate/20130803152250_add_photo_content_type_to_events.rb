class AddPhotoContentTypeToEvents < ActiveRecord::Migration
  def change
    add_column :events, :photo_content_type, :string
  end
end
