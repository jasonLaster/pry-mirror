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
      this.widget = new App.CodeWidgetView();
      this.$el.html(this.widget.$el);
      this.widget.launch_editor();
    }

    else if(this.model.get('widget') === 'code-stack') {
      this.widget = new App.CodeStackWidgetView();
      this.$el.html(this.widget.$el);
      this.widget.render_code_stack();
    }

    else if(this.model.get('widget') === 'history') {
      this.widget = new App.HistoryWidgetView();
      this.$el.html(this.widget.$el);
      this.widget.render_history();
    }


  }
});