App.Ace = {}

App.Ace.get_editor = function(id){
    return ace.edit(id)
}

App.Ace.set_code = function(editor, code) {
    editor.setValue(code)
    editor.getSession().insert('')
    return editor
}

App.Ace.set_settings = function(editor) {
    // Session settings
    var session = editor.getSession()
    session.setMode(new (require("ace/mode/ruby").Mode));
    session.setUseSoftTabs(true)
    session.setUndoSelect()

    // Editor Settings
    editor.renderer
    editor.renderer.setShowGutter(false)
    editor.setHighlightActiveLine(false)
    editor.setTheme("ace/theme/solarized_dark");
    return editor;
}

App.Ace.set_styles = function(el){
    var style = el.style
    style.fontSize='16px';
    style.fontWeight = 800;
    return style;
}

App.Ace.show_gutter = function(editor) {
    editor.renderer.setShowGutter(false)
}


App.Ace.launch_editor = function(id) {
    var editor = App.Ace.get_editor(id)
    App.Ace.set_settings(editor)
    var el = $('#'+id)[0];
    App.Ace.set_styles(el)
}

