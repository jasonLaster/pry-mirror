require "sinatra"
require "sinatra/reloader" if development?
require "pry-remote"
require 'drb'
require 'pry'



$shared_io = DRbObject.new nil, 'druby://:9000'


get '/' do

  lines = %q{
                  Frame number: 0/4

                  From: foo/test4.rb @ line 4 Foo#initialize:

                  4: def initialize
               => 5:   binding.pry_remote
                  6: end
  }
  @lines = $shared_io.output_proxy.readlines
  @lines = lines if @lines == ""


  @lines.gsub!(/\n/, '<br />')
  erb :index
end


post '/input' do
  @prompt = params[:prompt]
  @result = $shared_io.pry_eval @prompt
  return @result
end



# post '/' do
  
#   @prompt = params[:prompt]
#   $pi.input.string << @prompt

#   puts "\n"*5
#   binding.pry
#   puts $pi.output.string
#   "end of block"
# end


# post '/kill' do
#   DRb.stop_service
# end


