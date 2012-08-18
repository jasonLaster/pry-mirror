var SpaceView = Backbone.View.extend({
    el: $("#space"),
    template: JST["templates/space"],

    initialize: function () {
      this.render()
    },
 
    render: function () {
        this.$el.html(this.template({ boxes: [1, 2, 3] }));
        return this;
    }
});

