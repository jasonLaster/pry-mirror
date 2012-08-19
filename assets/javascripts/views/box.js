App.BoxView = Backbone.View.extend({
  tagName: 'li',
  className: 'box',
  template: JST["templates/box"],

  initialize: function(){
    this.render();
    return this;
  },

  render: function(){

    this.$el.html(this.template())
    this.$el.
      attr('data-row', this.model.get('row')).
      attr('data-col', this.model.get('col')).
      attr('data-sizex', this.model.get('sizex')).
      attr('data-sizey', this.model.get('sizey'));

    return this;
  },

  render_widget: function(){
    if (this.model.get('widget') === 'code') {
      this.$el.html(code_widget.render().$el);
      this.widget = new App.CodeWidgetView();
    }
  }
});