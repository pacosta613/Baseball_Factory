class Statistic < ActiveRecord::Base
  attr_accessible :player_id, :team_id, :games, :at_bats, :runs, :homeruns, :hits, :singles, :doubles, :triples, :rbis, :stolen_bases, :caught_stealing

  belongs_to :player
  belongs_to :team

  def batting_average
    abs = self.at_bats.to_f
    abs > 0 ? (self.hits.to_f / abs).round(3) : 0
  end

  def slugging_pct
    abs = self.at_bats.to_f
    abs > 0 ? ([(self.hits.to_i - self.doubles.to_i - self.triples.to_i - self.homeruns.to_i),(2 * self.doubles.to_i),(3 * self.triples.to_i),(4 * self.homeruns.to_i)].inject(:+) / abs).round(3) : 0
  end
  
end