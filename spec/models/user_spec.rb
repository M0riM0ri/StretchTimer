require 'rails_helper'

RSpec.describe User, type: :model do

  it "is valid in normal" do
    user = User.new(
      name: "hoge",
      email: "hoge@gmail.com",
      password: "password",
    )
    expect(user).to be_valid
  end

  it "is invalid when name is null" do
    user = User.new(
      email: "hoge@gmail.com",
      password: "password",
    )
    expect(user).to be_invalid
  end

  it "is invalid when email is unmatch to format" do
    user = User.new(
      name: "hoge",
      email: "hoge@com",
      password: "password",
    )
    expect(user).to be_invalid
  end

end
