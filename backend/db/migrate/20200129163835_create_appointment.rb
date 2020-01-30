class CreateAppointment < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :pet_id
      t.integer :employee_id
      t.date :date
      t.time :start_time
      t.time :end_time
      t.boolean :petowner_confirmed, default: false
      t.boolean :employee_confirmed, default: false
      t.timestamps
    end
  end
end
