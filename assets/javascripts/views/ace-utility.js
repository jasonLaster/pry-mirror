
App.launch_editor = function(el){
    var editor = ace.edit(el.el.id);
    if (el.model.has('code')) {
        editor.insert(el.model.get('code'));
    }

    // Session settings
    var session = editor.getSession()
    session.setMode(new (require("ace/mode/ruby").Mode));
    session.setUseSoftTabs(false)

    // Editor Settings
    editor.renderer.setShowGutter(false)
    editor.setHighlightActiveLine(false)

    // Theme
    editor.setTheme("ace/theme/solarized_dark");
    var style = el.el.style
    style.fontSize='16px';
    style.fontWeight = 800;
}