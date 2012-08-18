var boxes = [
  {type:'code-stack', col:1, row:1, sizex:5, sizey:4},
  {type:'history', col:8, row:1, sizex:5, sizey:4}
];


var SpaceView = Backbone.View.extend({
    tagName: 'ul',
    el: $("#space"),
    template: JST["templates/space"],


    initialize: function () {
      this.collection = new SpaceCollection(boxes);
      this.render();
    },

    render: function () {
      var that = this;
      this.$el.html($(this.template({})))

      // fill space container with boxes
      var $space_container = this.$el.find('ul')
      _.each(this.collection.models, function (box) {
        that.render_box(box, $space_container)
      }, this);

      return this;
    },

    render_box: function(box, space){
      var box_view = new BoxView({model: box});
      space.append(box_view.render().$el);
    }

});
