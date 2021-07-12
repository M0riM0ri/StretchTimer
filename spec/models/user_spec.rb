describe User, type: :model do

  it "is valid in normal User model" do
    user = create(:user)
    expect(user).to be_valid
  end

  it "is invalid when name is null" do
    user = User.new(
      email: "hoge@gmail.com",
      password: "password",
    )
    expect(user).to be_invalid
  end

  it "is invalid when name is over maximum length" do
    user = User.new(
      name: "hogehogehog",
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

  it "is invalid if email is not uniqueness" do
    @user = create(:user)
    @other_user = create(:user)
    @other_user.email = @user.email.upcase
    @other_user.save
    expect(@other_user).to be_invalid
  end

  it "confirm email is saved in lowercase" do
    @user = create(:user)
    @user.email = "Test@examplE.coM"
    @user.save
    expect(@user.reload.email).to eq 'test@example.com'
  end

end
