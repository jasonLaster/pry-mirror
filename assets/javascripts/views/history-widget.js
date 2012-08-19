App.HistoryWidgetView = Backbone.View.extend({
  className: 'history-widget',

  initialize: function(){
    this.model = new App.HistoryWidgetModel()
    this.collection = new App.HistoryCollection(App.dummy_history)
    this.el.id = this.model.cid;
    return this;
  },

  render_history: function(){
    var that = this
    _.each(this.collection.models, function(action){
      action_view = new App.ActionWidgetView({model: action})
      that.$el.append(action_view.render().$el)
    })
  }

});

