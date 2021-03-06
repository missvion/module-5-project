class CreateUser < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :date_of_birth
      t.string :street_address
      t.string :street_city
      t.string :street_state
      t.integer :street_zipcode
      t.string :phone_number
      t.string :email
      t.integer :driver_license
      t.string :username
      t.string :password_digest

      t.string :pending_first_name, default: nil
      t.string :pending_last_name, default: nil
      t.string :pending_date_of_birth, default: nil
      t.string :pending_address, default: nil
      t.integer :pending_phone_number, default: nil
      t.string :pending_email, default: nil
    end
  end
end