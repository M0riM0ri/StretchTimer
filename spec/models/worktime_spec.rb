require 'rails_helper'


RSpec.describe Worktime, type: :model do
  it "is invalid when start_time is null" do
    @user = create(:user)
    worktime = @user.worktimes.build(
    )
    expect(worktime).to be_invalid
  end

end
