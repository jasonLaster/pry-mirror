require "sinatra"
require "sinatra/reloader" if development?
require "pry-bot"
require 'drb'
require 'pry'

set :port, 9494

$shared_io = DRbObject.new nil, 'druby://:9000'


get '/' do
  @lines = $shared_io.output_proxy.readlines.format
  File.read(File.join('public', 'index.html'))
end


post '/input' do
  @input = params[:input]
  @result = $shared_io.pry_eval @input
  return @result
end


class String
  def format
    self.gsub!(/\n/, '<br />')
  end
end