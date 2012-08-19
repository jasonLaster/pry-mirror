App.CodeWidgetModel = Backbone.Model.extend({
    defaults: {
      code: 'def foo(bar)\n  puts "foo bar"\nend\n\n'
    }
});