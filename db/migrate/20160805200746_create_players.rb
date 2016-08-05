class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.integer :team_id
      t.integer :division_id
      t.integer :jersey_number

      t.timestamps null: false
    end
  end
end
