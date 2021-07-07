require 'rails_helper'

RSpec.describe Worktime, type: :model do

  it "is valid in normal" do
    @user = create(:user)
    worktime = @user.worktimes.build(
      start_time: 10
    )
    expect(worktime).to be_valid
  end

  it "is invalid when start_time is null" do
    @user = create(:user)
    worktime = @user.worktimes.build(
    )
    expect(worktime).to be_invalid
  end
    
  it "is invalid when user_id is null" do
    @user = create(:user)
    worktime = Worktime.new(
      start_time: 10
    )
    expect(worktime).to be_invalid
  end

end
