App.Views.ActionWidget = Backbone.View.extend({
  className: 'action-widget',
  template: JST["templates/action-widget"],

  initialize: function(){
    this.el.id = this.model.cid;
    this.model.on('change:output', this.update, this)
    return this;
  },

  render: function(){
    this.$el.html(this.template())
    this.$el.find('.input').html(this.model.get('input'));
    this.$el.find('.output').html(this.model.get('output'));
    return this;
  },

  update: function(){
    this.render();
    this.scrollTo();
  },

  scrollTo: function(){
    this.$el.closest('.history-widget').scrollTo(10000000, 0)
  }

});

