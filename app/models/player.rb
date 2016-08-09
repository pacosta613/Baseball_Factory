class Player < ActiveRecord::Base
  attr_accessible :first_name, :last_name

  belongs_to :team
  has_many :statistics

  def full_name
    [first_name, last_name].join(" ")
  end

  alias :name :full_name

  def batting_average
    abs = self.statistics.map{|s|s.at_bats.to_i}.reduce(:+).to_f
    if abs > 0
      (self.statistics.map{|s|s.hits.to_i}.reduce(:+).to_i / abs).round(3)
    else
      abs
    end
  end

end