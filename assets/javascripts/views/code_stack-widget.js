App.Views.CodeStackWidget = Backbone.View.extend({
  className: 'code_stack-widget',
  template: JST["templates/code_stack-widget"],

  initialize: function(){
    this.model = new App.Models.CodeStackWidget();

    this.collection = new App.Collections.CodeStack()
    this.collection.on("add", this.render_code_widget, this)
    return this;
  },

  events : {
    'add_code_widget': 'add_code_widget'
  },

  add_code_widget: function(event, code) {
    this.render_code_widget(code)
  },

  render_code_widget: function(code){
    var code_widget_view = new App.Views.CodeWidgetView({model: code})
    this.$el.append(code_widget_view.render().$el)
    App.Ace.launch_editor(code_widget_view.code_id())
    code_widget_view.update_code()
  }

});

