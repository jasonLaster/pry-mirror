App.InputWidgetView = Backbone.View.extend({
  className: 'input-widget',
  template: JST["templates/input-widget"],

  initialize: function(){
    this.model = new App.InputWidgetModel()
    this.el.id = this.model.cid;
    return this;
  }
});

