App.CodeWidgetView = Backbone.View.extend({
  className: 'code-widget',
  template: JST["templates/code-widget"],

  initialize: function(){
    this.el.id = this.model.cid;
    return this;
  },

  launch_editor: function(){
    var editor = ace.edit(this.el.id);
    editor.insert(this.model.get('code'));

    // Session settings
    var session = editor.getSession()
    session.setMode(new (require("ace/mode/ruby").Mode));
    session.setUseSoftTabs(false)

    // Editor Settings
    editor.renderer.setShowGutter(false)
    editor.setHighlightActiveLine(false)

    // Theme
    editor.setTheme("ace/theme/solarized_dark");
    var style = this.el.style
    style.fontSize='16px';
    style.fontWeight = 800;
  }

});

