App.Views.CodeWidgetView = Backbone.View.extend({
  className: 'code-widget',
  template: JST["templates/code-widget"],

  initialize: function(){
    this.el.id = this.model.cid;
    this.model.on('change:code', this.update_text, this)
    return this;
  },

  update_text : function(){
    App.update_text(this.el, this.model.get('code'))
  }


});

