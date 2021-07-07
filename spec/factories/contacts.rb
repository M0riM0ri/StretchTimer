FactoryBot.define do

  factory :contact do
    name { "test" }
    sequence(:email) { |n| "TEST#{n}@example.com" }
    message { "hoge" }
  end

end