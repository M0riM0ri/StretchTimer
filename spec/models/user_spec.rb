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
end
