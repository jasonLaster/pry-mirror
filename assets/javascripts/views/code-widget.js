App.Views.CodeWidgetView = Backbone.View.extend({
  className: 'code-widget',
  template: JST["templates/code-widget"],

  initialize: function(){
    this.el.id = this.model.cid;
    this.model.on('change:num_lines', this.render_info, this)
    this.model.on('change:code', this.update_code, this)
    return this;
  },

  render: function(){
    this.$el.html(this.template({view: this, model: this.model}))
    return this
  },

  render_info: function(){
    var html = this.template({view: this, model: this.model})
    var $info = $($(html)[0])
    this.$el.find('.info').html($info)
  },

  update_code : function(){
    var editor = App.Ace.get_editor(this.code_id())
    var code = this.model.has('code') ? this.model.get('code') : ''
    App.Ace.set_code(editor, code)
  },

  code_id: function(){
    return "code-"+ this.model.cid;
  }

});

