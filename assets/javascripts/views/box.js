App.Views.Box = Backbone.View.extend({
  tagName: 'li',
  className: 'box',
  template: JST["templates/box"],

  initialize: function(){
    this.render();
    return this;
  },

  render: function(){

    this.$el.html(this.template({model: this.model}))
    this.$el.
      attr('data-row', this.model.get('row')).
      attr('data-col', this.model.get('col')).
      attr('data-sizex', this.model.get('sizex')).
      attr('data-sizey', this.model.get('sizey'));

    return this;
  },

  render_widget: function(){
    if (this.model.get('widget') === 'code') {
      this.widget = new App.Views.CodeWidget();
      this.$el.find('.widget').html(this.widget.$el);
      App.launch_editor(this.widget);
    }

    else if(this.model.get('widget') === 'code-stack') {
      this.widget = new App.Views.CodeStackWidget();
      this.$el.find('.widget').html(this.widget.$el);
      this.widget.render_code_stack();
    }

    else if(this.model.get('widget') === 'history') {
      this.widget = new App.Views.HistoryWidget();
      this.$el.find('.widget').html(this.widget.$el);
    }

    else if(this.model.get('widget') === 'input') {
      this.widget = new App.Views.InputWidget();
      this.$el.find('.widget').html(this.widget.$el);
      App.launch_editor(this.widget);
    }
  }
});