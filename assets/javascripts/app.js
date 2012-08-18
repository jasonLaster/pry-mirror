

//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var space = new SpaceView();

var gridster;

$(function(){

  gridster = $(".gridster ul").gridster({
      widget_margins: [10, 10],
      widget_base_dimensions: [140, 140],
      min_cols: 6,
      min_rows: 20
  }).data('gridster');
  
  // $hanoi = $("#hanoi-rawcode").html()
  // $("#hanoi").html($hanoi)
  // hljs.highlightBlock($('#hanoi pre')[0])
});
