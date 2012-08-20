App.Views.HistoryWidget = Backbone.View.extend({
  className: 'history-widget',

  initialize: function(){

    this.model = new App.Models.HistoryWidget()
    this.el.id = this.model.cid;

    // setup collection
    this.collection = new App.Collections.History();
    this.collection.on("add", this.render_action, this)
    this.collection.add(App.dummy_history)

    return this;
  },

  render_action: function(action){
    action_view = new App.Views.ActionWidget({model: action})
    this.$el.append(action_view.render().$el)
  }

});

