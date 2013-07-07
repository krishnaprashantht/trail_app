class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.string :district
      t.string :place
      t.string :venue
      t.string :contact_person
      t.string :contact_number

      t.timestamps
    end
  end
end
