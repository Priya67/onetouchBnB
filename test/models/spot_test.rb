# == Schema Information
#
# Table name: spots
#
#  id             :integer          not null, primary key
#  headline       :string           not null
#  description    :string           not null
#  location       :string           not null
#  img_url        :string
#  rating         :integer          not null
#  number_of_beds :string           not null
#  user_id        :integer          not null
#  price          :integer          not null
#  room_type      :string           not null
#  cancellations  :string           not null
#  house_rules    :string
#  reviews        :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
