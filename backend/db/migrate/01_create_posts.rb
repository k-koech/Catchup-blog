class CreatePosts < ActiveRecord::Migration[6.1]
    def change
      create_table :posts do |t|
        t.string :title
        t.text :content
        t.boolean :archive, :default => 0
        t.references :user, foreign_key: true
  
        t.timestamps
      end
    end
  end