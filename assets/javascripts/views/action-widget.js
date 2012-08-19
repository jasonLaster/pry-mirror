App.ActionWidgetView = Backbone.View.extend({
  className: 'action-widget',
  template: JST["templates/action-widget"],

  initialize: function(){
    this.el.id = this.model.cid;
    return this;
  },

  render: function(){
    this.$el.html(this.template())
    this.$el.find('.input').html(this.model.get('input'));
    this.$el.find('.output').html(this.model.get('output'));
    return this;
  }

});

