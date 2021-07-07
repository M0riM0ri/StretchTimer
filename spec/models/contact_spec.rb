require 'rails_helper'

RSpec.describe Contact, type: :model do

  it "is valid in normal Contact model" do
    contact = create(:contact)
    expect(contact).to be_valid
  end

  it "is invalid when name is null" do
    contact = Contact.new(
      email: "hoge@gmail.com",
      message: "hoge",
    )
    expect(contact).to be_invalid
  end

  it "is invalid when name is over maximum length" do
    contact = Contact.new(
      name: "hogehogehog",
      email: "hoge@gmail.com",
      message: "hoge",
    )
    expect(contact).to be_invalid
  end

  it "confirm email is saved in lowercase" do
    contact = create(:contact)
    contact.email = "Test@examplE.coM"
    contact.save
    expect(contact.reload.email).to eq 'test@example.com'
  end

end