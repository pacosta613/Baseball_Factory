class Division < ActiveRecord::Base
  has_many :teams

  def as_json(options = {})
    super(options.merge(include: [:teams]))
  end
end