
//= require main.js
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree ./utility




var space = new App.Views.Space();

var gridster;

$(function(){

  var width = $(window).width();

  gridster = $(".gridster ul").gridster({
      widget_margins: [10, 10],
      widget_base_dimensions: [width/20, width/20],
      min_cols: 6,
      min_rows: 20
  }).data('gridster');

gridster = $(".gridster ul").data('gridster')
draggable = gridster.draggable().drag_api
draggable.disable()
});


$('.input-widget textarea').keypress(function(e){
  if(e.which === 13) {
    var $el = $(this);
    var editor = ace.edit($el.closest('.ace_editor').attr('id'));
    var input = editor.getValue();

    var history = _.find(space.collection.models, function(model) {
      return model.get('widget')==='history'
    })

    var action = new App.Models.ActionWidget({input: input, output: ''})
    history.collection.add(action)

    $.post(
      'input',

      {input: input, action_id: action.id},

      function(data){
        console.log(data)
      }
    )
  }
});