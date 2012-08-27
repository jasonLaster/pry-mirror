var boxes = [
  {widget:'code-stack', col:1, row:1, sizex:7, sizey:7},
  {widget:'history', col:7, row:1, sizex:6, sizey:4},
  {widget:'input', col:8, row:6, sizex:6, sizey:2}
];


App.Views.Space= Backbone.View.extend({
    tagName: 'ul',
    el: $("#space"),
    template: JST["templates/space"],


    initialize: function () {
      this.collection = new App.Collections.Space(boxes);
      this.render();
    },

    render: function () {
      var that = this;
      this.$el.html($(this.template({})))

      // fill space container with boxes
      var $space_container = this.$el.find('ul')
      _.each(this.collection.models, function (box) {
        var box_view = new App.Views.Box({model: box});
        $space_container.append(box_view.render().$el);
        box_view.render_widget();
      }, this);

      return this;
    },

});
