App.CodeStackWidgetView = Backbone.View.extend({
  className: 'code_stack-widget',
  template: JST["templates/code_stack-widget"],

  initialize: function(){
    this.model = new App.CodeStackWidgetModel();
    this.collection = new App.CodeStackCollection(App.dummy_code_stack)
    return this;
  },

  render_code_stack: function(){
    var that = this
    _.each(this.collection.models, function(code_widget){
      code_widget_view = new App.CodeWidgetView({model: code_widget})
      that.$el.append(code_widget_view.$el)
      code_widget_view.launch_editor()
    })
  }

});

