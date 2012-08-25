
App.launch_editor = function(code){
    var editor = ace.edit(code.el.id);

    // add text
    var text = code.model.has('code') ? code.model.get('code') : ""
    editor.insert(text);

    // Session settings
    var session = editor.getSession()
    session.setMode(new (require("ace/mode/ruby").Mode));
    session.setUseSoftTabs(false)

    // Editor Settings
    editor.renderer.setShowGutter(false)
    editor.setHighlightActiveLine(false)

    // Theme
    editor.setTheme("ace/theme/solarized_dark");
    var style = code.el.style
    style.fontSize='16px';
    style.fontWeight = 800;
}

App.update_text = function(el, code) {
    var editor = ace.edit(el.id);
    editor.setValue(code)
}