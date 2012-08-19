App.CodeWidgetView = Backbone.View.extend({
  className: 'code-widget',
  template: JST["templates/code-widget"],

  initialize: function(){
    this.model = new App.CodeWidgetModel(App.dummy_code)
    this.el.id = this.model.cid;
    return this;
  },



});

