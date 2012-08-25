App.Views.HistoryWidget = Backbone.View.extend({
  className: 'history-widget',

  initialize: function(){

    this.model = new App.Models.HistoryWidget()
    this.el.id = this.model.cid;

    // setup collection
    this.collection = new App.Collections.History();
    this.collection.on("add", this.render_action, this)
    return this;
  },

  events : {
    'add_action': 'add_action'
  },


  add_action: function(e, action) {
    this.render_action(action);
  },

  render_action: function(action){
    action_view = new App.Views.ActionWidget({model: action})
    this.$el.append(action_view.render().$el)
  }

});

