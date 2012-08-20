window.App = {
  Collections: {},
  Models: {},
  Routers: {},
  Views: {},
}

App.dummy_code_stack = [
  {code: 'def foo(bar)\n  puts "foo bar"\nend\n\n'},
  {code: 'class Bozo\n  def initialize\n    @bar = 2\n  end\nend'},
  {code: 'def panda_bear\n  puts "likes trees and shoots"\nend'}
]

App.dummy_code = {code: 'def foo(bar)\n  puts "foo bar"\nend\n\n'}


App.dummy_history = [
  {input:'foo(2)', output:'foo bar foo bar \n foo bar foo bar \n foo bar foo bar foo bar '},
  {input:'ls', output:'[1] pry(main)> ls\nself.methods: include  private  public  to_s\nlocals: _  _dir_  _ex_  _file_  _in_  _out_  _pry_'},
  {input:'ls', output:'self.methods: __pry__\ninstance variables: @backtrace  @binding_stack  @command_state  @commands  @custom_completions  @exception_handler\nlocals: _  _dir_  _ex_  _file_  _in_  _out_  _pry_'},
]



