class Team < ActiveRecord::Base
  has_many :players
  belongs_to :division

  def as_json(options = {})
    super(options.merge(include: [:players, :division]))
  end
end
