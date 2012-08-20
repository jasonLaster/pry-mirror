App.HistoryWidgetView = Backbone.View.extend({
  className: 'history-widget',

  initialize: function(){

    this.model = new App.HistoryWidgetModel()
    this.el.id = this.model.cid;

    // setup collection
    this.collection = new App.HistoryCollection();
    this.collection.on("add", this.render_action, this)
    this.collection.add(App.dummy_history)

    return this;
  },

  render_action: function(action){
    action_view = new App.ActionWidgetView({model: action})
    this.$el.append(action_view.render().$el)
  }

});

