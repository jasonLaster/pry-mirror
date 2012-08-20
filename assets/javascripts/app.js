
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


$('.input-widget textarea').keypress(function(e){
  if(e.which === 13) {
    var $el = $(this);

    // get input
    var editor = ace.edit($el.closest('.ace_editor').attr('id'));
    var input = editor.getValue();

    // get history
    var history = _.find(space.collection.models, function(model) {
      return model.get('widget')==='history'
    })

    // add action to history
    var action = new App.Models.ActionWidget({input: input})
    $('.history-widget').trigger('add_action', action)

    // post the input and handle response
    $.post(
      'input',
      {input: input},
      function(output){
        a = action.set('output', output)
      }
    )
  }
});