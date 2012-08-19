var boxes = [
  {widget:'code-stack', col:1, row:1, sizex:5, sizey:7},
  {widget:'history', col:8, row:1, sizex:5, sizey:4},
  {widget:'code', col:8, row:6, sizex:5, sizey:2}
];


App.SpaceView = Backbone.View.extend({
    tagName: 'ul',
    el: $("#space"),
    template: JST["templates/space"],


    initialize: function () {
      this.collection = new App.SpaceCollection(boxes);
      this.render();
    },

    render: function () {
      var that = this;
      this.$el.html($(this.template({})))

      // fill space container with boxes
      var $space_container = this.$el.find('ul')
      _.each(this.collection.models, function (box) {
        var box_view = new App.BoxView({model: box});
        $space_container.append(box_view.render().$el);
        box_view.render_widget();
      }, this);

      return this;
    },

});
