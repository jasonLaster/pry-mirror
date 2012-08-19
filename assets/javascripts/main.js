window.App = {}

App.dummy_code_stack = [
  {code: 'def foo(bar)\n  puts "foo bar"\nend\n\n'},
  {code: 'class Bozo\n  def initialize\n    @bar = 2\n  end\nend'},
  {code: 'def panda_bear\n  puts "likes trees and shoots"\nend'}
]

App.dummy_code = {code: 'def foo(bar)\n  puts "foo bar"\nend\n\n'}