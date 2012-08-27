
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

    if (input[0] === "$") {
      // add code widget to code stack

    }
    else {
      // add action to history

    }

    // post the input and handle response
    $.post(
      'input',
      {input: input},
      function(output){

        if (isJSON(output)) {
          o = JSON.parse(output)
          switch(o.type)
          {
          case 'ls':
            // do something with ls
            var action = new App.Models.ActionWidget({input: input})
            $('.history-widget').trigger('add_action', action)
            a = action.set('output', output)

            break;
          case 'show-source':
            // create new code widget
            var code_widget = new App.Models.CodeWidget({input: input})
            $('.code_stack-widget').trigger('add_code_widget', code_widget)

            // update code widget with new data
            c = code_widget.set('code', o.code)
            if(o.file_name != undefined) cf = code_widget.set('file-name', o.file_name)
            if(o.num_lines != undefined) cl = code_widget.set('num_lines', o.num_lines)

            break;
          case 'whereami':
            // create new code widget
            $current = $('#current')
            if($current.length == 0) {
              var code_widget = new App.Models.CodeWidget({input: input, current: true})
              $('.code_stack-widget').trigger('add_code_widget', code_widget)
              cf = code_widget.set(o)
            } else {
              $current.trigger('update_current_code', o)
            }

            console.log('whereami')
            break
          default:
            console.log('unrecognized command')
            break
          }
        }
        else {
          var action = new App.Models.ActionWidget({input: input})
          $('.history-widget').trigger('add_action', action)
          a = action.set('output', output)
        }
      }
    )
  }
});