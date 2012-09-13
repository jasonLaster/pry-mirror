App.Views.InputWidget = Backbone.View.extend({
  className: 'input-widget',
  template: JST["templates/input-widget"],

  initialize: function(){
    this.model = new App.Models.InputWidget()
    this.el.id = this.model.cid;
    return this;
  },

  events: {'keypress textarea': 'new_command'},

  new_command: function(e){
    if(e.which === 13) {
      var $el = $(this);

      // get input
      var editor = ace.edit(this.$el.attr('id'));
      var input = editor.getValue();

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
              c = code_widget.set(o)

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
  }


});

