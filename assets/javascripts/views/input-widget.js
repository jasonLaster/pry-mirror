App.Views.InputWidget = Backbone.View.extend({
  className: 'input-widget',
  template: JST["templates/input-widget"],

  initialize: function(){
    this.model = new App.Models.InputWidget()
    this.el.id = this.model.cid;
    return this;
  }
});

