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
      var code_widget = new App.CodeWidgetModel(this.model.get('code'));
      this.widget = new App.CodeWidgetView({model: code_widget});
      this.$el.html(this.widget.$el);
      this.widget.launch_editor();
    } else if(this.model.get('widget') === 'code-stack') {
      this.widget = new App.CodeStackWidgetView()
      this.$el.html(this.widget.$el)
      this.widget.render_code_stack()
    }


  }
});