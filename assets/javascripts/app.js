
//= require main.js
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./utility




var space = new App.Views.Space();

var gridster;

$(function(){

  var width = $(window).width();

  gridster = $(".gridster ul").gridster({
      widget_margins: [10, 10],
      widget_base_dimensions: [width/20, width/20],
      min_cols: 6,
      min_rows: 20,
      max_size_x: 10,
      max_size_y: 10
  }).data('gridster');

gridster = $(".gridster ul").data('gridster')
draggable = gridster.draggable().drag_api
draggable.disable()
});
