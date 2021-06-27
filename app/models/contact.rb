class Contact < ApplicationRecord
  
  before_save { self.email = email.downcase }

  validates :name,  presence: true, length: { maximum: 10 }
  validates :email, length: { maximum: 255 }
  validates :message,  presence: true

end
