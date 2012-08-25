smalltalk.addPackage('IDE', {});
smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function () {
    var self = this;
    return self['@browser'];
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedPackage", []);
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_getNodes",
smalltalk.method({
selector: "getNodes",
fn: function () {
    var self = this;
    var classes = nil;
    var children = nil;
    var others = nil;
    classes = smalltalk.send(smalltalk.send(self, "_browser", []), "_classes", []);
    children = [];
    others = [];
    smalltalk.send(classes, "_do_", [function (each) {return ($receiver = smalltalk.send(classes, "_includes_", [smalltalk.send(each, "_superclass", [])])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(children, "_add_", [each]);}() : function () {return smalltalk.send(others, "_add_", [each]);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(children, "_add_", [each]);}, function () {return smalltalk.send(others, "_add_", [each]);}]);}]);
    return smalltalk.send(children, "_collect_", [function (each) {return smalltalk.send(smalltalk.ClassesListNode || ClassesListNode, "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, 0]);}]);
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function () {
    var self = this;
    ($receiver = self['@nodes']) == nil || $receiver == undefined ? function () {return self['@nodes'] = smalltalk.send(self, "_getNodes", []);}() : $receiver;
    return self['@nodes'];
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    self['@ul'] = function ($rec) {smalltalk.send($rec, "_class_", ["amber_column browser classes"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_ul", []));
    smalltalk.send(self, "_updateNodes", []);
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_resetNodes",
smalltalk.method({
selector: "resetNodes",
fn: function () {
    var self = this;
    self['@nodes'] = nil;
    return self;
}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_updateNodes",
smalltalk.method({
selector: "updateNodes",
fn: function () {
    var self = this;
    smalltalk.send(self['@ul'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);}]);
    return self;
}
}),
smalltalk.ClassesList);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBrowser) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_browser_", [aBrowser]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function () {
    var self = this;
    return self['@browser'];
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
fn: function (aCollection) {
    var self = this;
    var children = nil;
    var others = nil;
    children = [];
    others = [];
    smalltalk.send(aCollection, "_do_", [function (each) {return ($receiver = smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(children, "_add_", [each]);}() : function () {return smalltalk.send(others, "_add_", [each]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(children, "_add_", [each]);}, function () {return smalltalk.send(others, "_add_", [each]);}]);}]);
    self['@nodes'] = smalltalk.send(children, "_collect_", [function (each) {return smalltalk.send(smalltalk.ClassesListNode || ClassesListNode, "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, ($receiver = smalltalk.send(self, "_level", [])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]);}]);
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    var str = nil;
    str = smalltalk.send(smalltalk.send(smalltalk.String || String, "_new", []), "_writeStream", []);
    smalltalk.send(smalltalk.send(self, "_level", []), "_timesRepeat_", [function () {return smalltalk.send(str, "_nextPutAll_", ["&nbsp;&nbsp;&nbsp;&nbsp;"]);}]);
    smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", [])]);
    return smalltalk.send(str, "_contents", []);
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
fn: function () {
    var self = this;
    return self['@level'];
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
fn: function (anInteger) {
    var self = this;
    self['@level'] = anInteger;
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function () {
    var self = this;
    return self['@nodes'];
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var li = nil;
    var cssClass = nil;
    cssClass = "";
    li = smalltalk.send(smalltalk.send(html, "_li", []), "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectClass_", [smalltalk.send(self, "_theClass", [])]);}]);
    smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_html_", [smalltalk.send(self, "_label", [])]);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedClass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return cssClass = smalltalk.send(cssClass, "__comma", [" selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return cssClass = smalltalk.send(cssClass, "__comma", [" selected"]);}]);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_comment", []), "_isEmpty", [])).klass === smalltalk.Boolean ? !$receiver ? function () {return cssClass = smalltalk.send(cssClass, "__comma", [" commented"]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return cssClass = smalltalk.send(cssClass, "__comma", [" commented"]);}]);
    smalltalk.send(li, "_class_", [cssClass]);
    smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function () {
    var self = this;
    return self['@theClass'];
    return self;
}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass) {
    var self = this;
    self['@theClass'] = aClass;
    return self;
}
}),
smalltalk.ClassesListNode);


smalltalk.addMethod(
"_on_browser_classes_level_",
smalltalk.method({
selector: "on:browser:classes:level:",
fn: function (aClass, aBrowser, aCollection, anInteger) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_theClass_", [aClass]);smalltalk.send($rec, "_browser_", [aBrowser]);smalltalk.send($rec, "_level_", [anInteger]);smalltalk.send($rec, "_getNodesFrom_", [aCollection]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
"_handleError_",
smalltalk.method({
selector: "handleError:",
fn: function (anError) {
    var self = this;
    smalltalk.send(function () {return function ($rec) {smalltalk.send($rec, "_error_", [anError]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.Debugger || Debugger, "_new", []));}, "_on_do_", [smalltalk.Error || Error, function (error) {return smalltalk.send(smalltalk.send(smalltalk.ErrorHandler || ErrorHandler, "_new", []), "_handleError_", [error]);}]);
    return self;
}
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_register", []);
    return self;
}
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('IconText', smalltalk.Widget, ['image', 'text', 'size', 'root'], 'IDE');
smalltalk.addMethod(
"_image_",
smalltalk.method({
selector: "image:",
fn: function (url) {
    var self = this;
    self['@image'] = url;
    return self;
}
}),
smalltalk.IconText);

smalltalk.addMethod(
"_redraw",
smalltalk.method({
selector: "redraw",
fn: function () {
    var self = this;
    smalltalk.send(self['@root'], "_contents_", [function (html) {return function ($rec) {smalltalk.send($rec, "_with_", [self['@text']]);smalltalk.send($rec, "_css_put_", ["padding-left", smalltalk.send(smalltalk.send("", "__comma", [($receiver = self['@size']).klass === smalltalk.Number ? $receiver + 3 : smalltalk.send($receiver, "__plus", [3])]), "__comma", ["px"])]);return smalltalk.send($rec, "_css_put_", ["background", smalltalk.send(smalltalk.send("url(", "__comma", [self['@image']]), "__comma", [") no-repeat 0 50%"])]);}(smalltalk.send(html, "_span", []));}]);
    return self;
}
}),
smalltalk.IconText);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    self['@root'] = smalltalk.send(html, "_root", []);
    smalltalk.send(self, "_redraw", []);
    return self;
}
}),
smalltalk.IconText);

smalltalk.addMethod(
"_size_",
smalltalk.method({
selector: "size:",
fn: function (aSize) {
    var self = this;
    self['@size'] = aSize;
    return self;
}
}),
smalltalk.IconText);

smalltalk.addMethod(
"_text_",
smalltalk.method({
selector: "text:",
fn: function (aText) {
    var self = this;
    self['@text'] = aText;
    return self;
}
}),
smalltalk.IconText);



smalltalk.addClass('PlusMinusIcon', smalltalk.IconText, ['image', 'text', 'size'], 'IDE');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
    var self = this;
    self['@image'] = "/images/Plus-icon.png";
    smalltalk.send(self, "_redraw", []);
    return self;
}
}),
smalltalk.PlusMinusIcon);

smalltalk.addMethod(
"_none",
smalltalk.method({
selector: "none",
fn: function () {
    var self = this;
    self['@image'] = "/images/None-icon.png";
    smalltalk.send(self, "_redraw", []);
    return self;
}
}),
smalltalk.PlusMinusIcon);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    self['@image'] = "/images/Minus-icon.png";
    smalltalk.send(self, "_redraw", []);
    return self;
}
}),
smalltalk.PlusMinusIcon);


smalltalk.addMethod(
"_text_",
smalltalk.method({
selector: "text:",
fn: function (aString) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_size_", [16]);return smalltalk.send($rec, "_text_", [aString]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.PlusMinusIcon.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function () {
    var self = this;
    smalltalk.send(self, "_val_", [""]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLine",
smalltalk.method({
selector: "currentLine",
fn: function () {
    var self = this;
    return smalltalk.send(self['@editor'], "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursor", []), "_line", [])]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLineOrSelection",
smalltalk.method({
selector: "currentLineOrSelection",
fn: function () {
    var self = this;
    return ($receiver = smalltalk.send(self['@editor'], "_somethingSelected", [])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_currentLine", []);}() : function () {return smalltalk.send(self, "_selection", []);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_currentLine", []);}, function () {return smalltalk.send(self, "_selection", []);}]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
fn: function () {
    var self = this;
    var result = nil;
    result = smalltalk.send(self, "_eval_", [smalltalk.send(self, "_currentLineOrSelection", [])]);
    ($receiver = smalltalk.send(self, "_onDoIt", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(smalltalk.send(self, "_onDoIt", []), "_value", []);}() : nil;
    return result;
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
fn: function () {
    var self = this;
    return self['@editor'];
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString) {
    var self = this;
    var $early = {};
    try {
        var compiler = nil;
        compiler = smalltalk.send(smalltalk.Compiler || Compiler, "_new", []);
        smalltalk.send(function () {return smalltalk.send(compiler, "_parseExpression_", [aString]);}, "_on_do_", [smalltalk.Error || Error, function (ex) {return function () {throw $early = [smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send(ex, "_messageText", [])])];}();}]);
        return smalltalk.send(smalltalk.send(smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compile_forClass_", [smalltalk.send(smalltalk.send("doIt ^[", "__comma", [aString]), "__comma", ["] value"]), smalltalk.DoIt || DoIt])]), "_fn", []), "_applyTo_arguments_", [smalltalk.send(self, "_receiver", []), []]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Importer || Importer, "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_currentLineOrSelection", []), "_readStream", [])]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_handleKeyDown_",
smalltalk.method({
selector: "handleKeyDown:",
fn: function (anEvent) {
    var self = this;
    if (anEvent.metaKey) {
        if (anEvent.keyCode === 80) {
            self._printIt();
            anEvent.preventDefault();
            return false;
        }
    }
    if (anEvent.ctrlKey) {
        if (anEvent.keyCode === 68) {
            self._doIt();
            anEvent.preventDefault();
            return false;
        }
        if (anEvent.keyCode === 73) {
            self._inspectIt();
            anEvent.preventDefault();
            return false;
        }
    }
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_doIt", []), "_inspect", []);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function () {
    var self = this;
    return self['@onDoIt'];
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt_",
smalltalk.method({
selector: "onDoIt:",
fn: function (aBlock) {
    var self = this;
    self['@onDoIt'] = aBlock;
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self['@div'], "_onKeyDown_", [aBlock]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyUp_",
smalltalk.method({
selector: "onKeyUp:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self['@div'], "_onKeyUp_", [aBlock]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
fn: function (aString) {
    var self = this;
    var start = nil;
    var stop = nil;
    start = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    stop = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    smalltalk.send(start, "_at_put_", ["line", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_line", [])]);
    smalltalk.send(start, "_at_put_", ["ch", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_ch", [])]);
    smalltalk.send(stop, "_at_put_", ["line", smalltalk.send(start, "_at_", ["line"])]);
    smalltalk.send(stop, "_at_put_", ["ch", ($receiver = ($receiver = smalltalk.send(start, "_at_", ["ch"])).klass === smalltalk.Number ? $receiver + smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])])).klass === smalltalk.Number ? $receiver + 2 : smalltalk.send($receiver, "__plus", [2])]);
    smalltalk.send(self['@editor'], "_replaceSelection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@editor'], "_getSelection", []), "__comma", [" "]), "__comma", [aString]), "__comma", [" "])]);
    smalltalk.send(self['@editor'], "_setCursor_", [smalltalk.send(self['@editor'], "_getCursor_", [true])]);
    smalltalk.send(self['@editor'], "_setSelection_end_", [stop, start]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_print_", [smalltalk.send(smalltalk.send(self, "_doIt", []), "_printString", [])]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function () {
    var self = this;
    return ($receiver = self['@receiver']) == nil || $receiver == undefined ? function () {return smalltalk.send(smalltalk.DoIt || DoIt, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject) {
    var self = this;
    self['@receiver'] = anObject;
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var textarea = nil;
    self['@div'] = smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["source"]);
    smalltalk.send(self['@div'], "_with_", [function () {return textarea = smalltalk.send(html, "_textarea", []);}]);
    smalltalk.send(self, "_setEditorOn_", [smalltalk.send(textarea, "_element", [])]);
    smalltalk.send(self['@div'], "_onKeyDown_", [function (e) {return smalltalk.send(self, "_handleKeyDown_", [e]);}]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function () {
    var self = this;
    return smalltalk.send(self['@editor'], "_getSelection", []);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(typeof textarea == "undefined" ? nil : textarea, "_element", []), "_selectionEnd", []);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(typeof textarea == "undefined" ? nil : textarea, "_element", []), "_selectionEnd_", [anInteger]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(typeof textarea == "undefined" ? nil : textarea, "_element", []), "_selectionStart", []);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(typeof textarea == "undefined" ? nil : textarea, "_element", []), "_selectionStart_", [anInteger]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
fn: function (aTextarea) {
    var self = this;
    self['@editor'] = CodeMirror.fromTextArea(aTextarea, {theme: "amber", lineNumbers: true, enterMode: "flat", matchBrackets: true, electricChars: false});
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
fn: function () {
    var self = this;
    return smalltalk.send(self['@editor'], "_getValue", []);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val_",
smalltalk.method({
selector: "val:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self['@editor'], "_setValue_", [aString]);
    return self;
}
}),
smalltalk.SourceArea);



smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_add_", [aWidget]);
    smalltalk.send(aWidget, "_appendToJQuery_", [smalltalk.send("#amber", "_asJQuery", [])]);
    smalltalk.send(aWidget, "_hide", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
    var self = this;
    ($receiver = self['@opened']).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["amberBody"]);return self['@opened'] = false;}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["amberBody"]);return self['@opened'] = false;}]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_closeTab_",
smalltalk.method({
selector: "closeTab:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(self, "_removeTab_", [aWidget]);
    smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
    smalltalk.send(aWidget, "_remove", []);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.TabManager.superclass || nil);
    self['@opened'] = true;
    smalltalk.send(function (html) {return smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["amber"]);}, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amberBody"]);
    smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("#amber", "_asJQuery", [])]);
    (function ($rec) {smalltalk.send($rec, "_addTab_", [smalltalk.send(smalltalk.Workspace || Workspace, "_new", [])]);return smalltalk.send($rec, "_addTab_", [smalltalk.send(smalltalk.TestRunner || TestRunner, "_new", [])]);}(self));
    smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
    (function ($rec) {smalltalk.send($rec, "_onResize_", [function () {return function ($rec) {smalltalk.send($rec, "_updateBodyMargin", []);return smalltalk.send($rec, "_updatePosition", []);}(self);}]);return smalltalk.send($rec, "_onWindowResize_", [function () {return smalltalk.send(self, "_updatePosition", []);}]);}(self));
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_labelFor_",
smalltalk.method({
selector: "labelFor:",
fn: function (aWidget) {
    var self = this;
    var label = nil;
    var maxSize = nil;
    maxSize = 15;
    label = smalltalk.send(smalltalk.send(aWidget, "_label", []), "_copyFrom_to_", [0, smalltalk.send(smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", []), "_min_", [maxSize])]);
    ($receiver = ($receiver = smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", [])).klass === smalltalk.Number ? $receiver > maxSize : smalltalk.send($receiver, "__gt", [maxSize])).klass === smalltalk.Boolean ? $receiver ? function () {return label = smalltalk.send(label, "__comma", ["..."]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return label = smalltalk.send(label, "__comma", ["..."]);}]);
    return label;
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_newBrowserTab",
smalltalk.method({
selector: "newBrowserTab",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.Browser || Browser, "_open", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onResize_",
smalltalk.method({
selector: "onResize:",
fn: function (aBlock) {
    var self = this;
    jQuery("#amber").resizable({handles: "n", resize: aBlock, minHeight: 230});
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onWindowResize_",
smalltalk.method({
selector: "onWindowResize:",
fn: function (aBlock) {
    var self = this;
    jQuery(window).resize(aBlock);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    ($receiver = self['@opened']).klass === smalltalk.Boolean ? !$receiver ? function () {smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amberBody"]);smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return self['@opened'] = true;}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amberBody"]);smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return self['@opened'] = true;}]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeBodyMargin",
smalltalk.method({
selector: "removeBodyMargin",
fn: function () {
    var self = this;
    smalltalk.send(self, "_setBodyMargin_", [0]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_remove_", [aWidget]);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["logo"]);
    smalltalk.send(self, "_renderToolbarOn_", [html]);
    self['@ul'] = function ($rec) {smalltalk.send($rec, "_id_", ["amberTabs"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_ul", []));
    smalltalk.send(self, "_renderTabs", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabFor_on_",
smalltalk.method({
selector: "renderTabFor:on:",
fn: function (aWidget, html) {
    var self = this;
    var li = nil;
    li = smalltalk.send(html, "_li", []);
    ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [aWidget])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);
    (function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", [function () {($receiver = smalltalk.send(aWidget, "_canBeClosed", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function ($rec) {smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_closeTab_", [aWidget]);}]);}(smalltalk.send(html, "_span", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_closeTab_", [aWidget]);}]);}(smalltalk.send(html, "_span", []));}]);return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_labelFor_", [aWidget])]);}]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [aWidget]);}]);}(li));
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabs",
smalltalk.method({
selector: "renderTabs",
fn: function () {
    var self = this;
    smalltalk.send(self['@ul'], "_contents_", [function (html) {smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [function (each) {return smalltalk.send(self, "_renderTabFor_on_", [each, html]);}]);return function ($rec) {smalltalk.send($rec, "_class_", ["newtab"]);smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", [" + "]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_newBrowserTab", []);}]);}(smalltalk.send(html, "_li", []));}]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderToolbarOn_",
smalltalk.method({
selector: "renderToolbarOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_id_", ["amber_toolbar"]);return smalltalk.send($rec, "_with_", [function () {self['@input'] = function ($rec) {smalltalk.send($rec, "_class_", ["implementors"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_input", []));smalltalk.send(self['@input'], "_onKeyPress_", [function (event) {return ($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [13])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}]);}]);return function ($rec) {smalltalk.send($rec, "_id_", ["amber_close"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_close", []);}]);}(smalltalk.send(html, "_div", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString) {
    var self = this;
    var searchedClass = nil;
    searchedClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);
    ($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [searchedClass]);}() : function () {return smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [aString]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [searchedClass]);}, function () {return smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [aString]);}]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(self, "_open", []);
    self['@selectedTab'] = aWidget;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [function (each) {return smalltalk.send(each, "_hide", []);}]);
    smalltalk.send(aWidget, "_show", []);
    smalltalk.send(self, "_update", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_setBodyMargin_",
smalltalk.method({
selector: "setBodyMargin:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(".amberBody", "_asJQuery", []), "_css_put_", ["margin-bottom", smalltalk.send(smalltalk.send(anInteger, "_asString", []), "__comma", ["px"])]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
fn: function () {
    var self = this;
    return ($receiver = self['@tabs']) == nil || $receiver == undefined ? function () {return self['@tabs'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function () {
    var self = this;
    smalltalk.send(self, "_renderTabs", []);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updateBodyMargin",
smalltalk.method({
selector: "updateBodyMargin",
fn: function () {
    var self = this;
    smalltalk.send(self, "_setBodyMargin_", [smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_height", [])]);
    return self;
}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updatePosition",
smalltalk.method({
selector: "updatePosition",
fn: function () {
    var self = this;
    jQuery("#amber").css("top", "").css("bottom", "0px");
    return self;
}
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function () {
    var self = this;
    return ($receiver = self['@current']) == nil || $receiver == undefined ? function () {return self['@current'] = smalltalk.send(self, "_new", [], smalltalk.TabManager.klass.superclass || nil);}() : $receiver;
    return self;
}
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    smalltalk.send(self, "_shouldNotImplement", []);
    return self;
}
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_closeTab_", [self]);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_hide", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_addTab_", [self]);
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_selectTab_", [self]);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    self['@div'] = function ($rec) {smalltalk.send($rec, "_class_", ["amberTool"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_div", []));
    smalltalk.send(self, "_renderTab", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderTab",
smalltalk.method({
selector: "renderTab",
fn: function () {
    var self = this;
    smalltalk.send(self['@div'], "_contents_", [function (html) {(function ($rec) {smalltalk.send($rec, "_class_", ["amber_box"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderBoxOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));return function ($rec) {smalltalk.send($rec, "_class_", ["amber_buttons"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderButtonsOn_", [html]);}]);}(smalltalk.send(html, "_div", []));}]);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_show", []);
    return self;
}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function () {
    var self = this;
    smalltalk.send(self, "_renderTab", []);
    return self;
}
}),
smalltalk.TabWidget);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
    return self;
}
}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
smalltalk.addMethod(
"_addInstanceVariableNamed_toClass_",
smalltalk.method({
selector: "addInstanceVariableNamed:toClass:",
fn: function (aString, aClass) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_addSubclassOf_named_instanceVariableNames_package_", [smalltalk.send(aClass, "_superclass", []), smalltalk.send(aClass, "_name", []), function ($rec) {smalltalk.send($rec, "_add_", [aString]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_copy", [])), smalltalk.send(smalltalk.send(aClass, "_package", []), "_name", [])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewClass",
smalltalk.method({
selector: "addNewClass",
fn: function () {
    var self = this;
    var className = nil;
    className = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", ["New class"]);
    ($receiver = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [function () {return smalltalk.send(className, "_notEmpty", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.Object || Object, "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);(function ($rec) {smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.Object || Object, "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);(function ($rec) {smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewProtocol",
smalltalk.method({
selector: "addNewProtocol",
fn: function () {
    var self = this;
    var newProtocol = nil;
    newProtocol = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", ["New method protocol"]);
    ($receiver = smalltalk.send(smalltalk.send(newProtocol, "_notNil", []), "_and_", [function () {return smalltalk.send(newProtocol, "_notEmpty", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_ajaxPutAt_data_",
smalltalk.method({
selector: "ajaxPutAt:data:",
fn: function (anURL, aString) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [anURL, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]), smalltalk.send("data", "__minus_gt", [aString]), smalltalk.send("contentType", "__minus_gt", ["text/plain;charset=UTF-8"]), smalltalk.send("error", "__minus_gt", [function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("PUT request failed at:  ", "__comma", [anURL])]);}])])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_cancelChanges",
smalltalk.method({
selector: "cancelChanges",
fn: function () {
    var self = this;
    return ($receiver = self['@unsavedChanges']).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", ["Cancel changes?"]);}() : function () {return true;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", ["Cancel changes?"]);}, function () {return true;}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classCommentSource",
smalltalk.method({
selector: "classCommentSource",
fn: function () {
    var self = this;
    return smalltalk.send(self['@selectedClass'], "_comment", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationSource",
smalltalk.method({
selector: "classDeclarationSource",
fn: function () {
    var self = this;
    var $early = {};
    try {
        var stream = nil;
        stream = smalltalk.send("", "_writeStream", []);
        ($receiver = self['@selectedClass']) == nil ||
            $receiver == undefined ? function () {return function () {throw $early = [smalltalk.send(self, "_classDeclarationTemplate", [])];}();}() : $receiver;
        (function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@selectedClass'], "_superclass", []), "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [" subclass: #"]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_name", [])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.String || String, "_lf", []), "__comma", [smalltalk.send(smalltalk.String || String, "_tab", [])])]);return smalltalk.send($rec, "_nextPutAll_", ["instanceVariableNames: '"]);}(stream));
        smalltalk.send(smalltalk.send(self['@selectedClass'], "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(stream, "_nextPutAll_", [each]);}, function () {return smalltalk.send(stream, "_nextPutAll_", [" "]);}]);
        (function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("'", "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])]), "__comma", [smalltalk.send(smalltalk.String || String, "_tab", [])])]);smalltalk.send($rec, "_nextPutAll_", ["package: '"]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_category", [])]);return smalltalk.send($rec, "_nextPutAll_", ["'"]);}(stream));
        return smalltalk.send(stream, "_contents", []);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationTemplate",
smalltalk.method({
selector: "classDeclarationTemplate",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("Object subclass: #NameOfSubclass\n\tinstanceVariableNames: ''\n\tpackage: '", "__comma", [smalltalk.send(self, "_selectedPackage", [])]), "__comma", ["'"]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedPackage']]);}]), "_sort_", [function (a, b) {return ($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number ? $receiver < smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]);}]), "_asSet", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_commitPackage",
smalltalk.method({
selector: "commitPackage",
fn: function () {
    var self = this;
    ($receiver = self['@selectedPackage']) != nil &&
        $receiver != undefined ? function () {var package = nil;package = smalltalk.send(smalltalk.Package || Package, "_named_", [self['@selectedPackage']]);return smalltalk.send([smalltalk.send(smalltalk.Exporter || Exporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".js"])]), smalltalk.send(smalltalk.StrippedExporter || StrippedExporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".deploy.js"])]), smalltalk.send(smalltalk.ChunkExporter || ChunkExporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathSt", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".st"])])], "_do_", [function (commitStrategy) {var fileContents = nil;fileContents = smalltalk.send(smalltalk.send(smalltalk.send(commitStrategy, "_key", []), "_new", []), "_exportPackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_ajaxPutAt_data_", [smalltalk.send(commitStrategy, "_value", []), fileContents]);}]);}() : nil;
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compile",
smalltalk.method({
selector: "compile",
fn: function () {
    var self = this;
    smalltalk.send(self, "_disableSaveButton", []);
    ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = self['@selectedClass']) != nil && $receiver != undefined ? function () {return smalltalk.send(self, "_compileClassComment", []);}() : nil;}() : function () {return ($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_compileDefinition", []);}() : function () {return smalltalk.send(self, "_compileMethodDefinition", []);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_compileDefinition", []);}, function () {return smalltalk.send(self, "_compileMethodDefinition", []);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return ($receiver = self['@selectedClass']) != nil && $receiver != undefined ? function () {return smalltalk.send(self, "_compileClassComment", []);}() : nil;}, function () {return ($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_compileDefinition", []);}() : function () {return smalltalk.send(self, "_compileMethodDefinition", []);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_compileDefinition", []);}, function () {return smalltalk.send(self, "_compileMethodDefinition", []);}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileClassComment",
smalltalk.method({
selector: "compileClassComment",
fn: function () {
    var self = this;
    smalltalk.send(self['@selectedClass'], "_comment_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileDefinition",
smalltalk.method({
selector: "compileDefinition",
fn: function () {
    var self = this;
    var newClass = nil;
    newClass = smalltalk.send(smalltalk.send(smalltalk.Compiler || Compiler, "_new", []), "_evaluateExpression_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
    (function ($rec) {smalltalk.send($rec, "_resetClassesList", []);smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));
    smalltalk.send(self, "_selectClass_", [newClass]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinition",
smalltalk.method({
selector: "compileMethodDefinition",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);}() : function () {return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);}, function () {return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinitionFor_",
smalltalk.method({
selector: "compileMethodDefinitionFor:",
fn: function (aClass) {
    var self = this;
    var $early = {};
    try {
        var compiler = nil;
        var method = nil;
        var source = nil;
        var node = nil;
        source = smalltalk.send(self['@sourceArea'], "_val", []);
        ($receiver = self['@selectedProtocol']) == nil ||
            $receiver == undefined ? function () {return self['@selectedProtocol'] = smalltalk.send(self['@selectedMethod'], "_category", []);}() : $receiver;
        compiler = smalltalk.send(smalltalk.Compiler || Compiler, "_new", []);
        smalltalk.send(compiler, "_source_", [source]);
        node = smalltalk.send(compiler, "_parse_", [source]);
        ($receiver = smalltalk.send(node, "_isParseFailure", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [", position: "]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])];}();}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function () {throw $early = [smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [", position: "]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])];}();}]);
        smalltalk.send(compiler, "_currentClass_", [aClass]);
        method = smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compileNode_", [node])]);
        smalltalk.send(method, "_category_", [self['@selectedProtocol']]);
        smalltalk.send(smalltalk.send(compiler, "_unknownVariables", []), "_do_", [function (each) {return ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_at_", [each])) == nil || $receiver == undefined ? function () {return ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Declare '", "__comma", [each]), "__comma", ["' as instance variable?"])])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);return function () {throw $early = [smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass])];}();}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);return function () {throw $early = [smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass])];}();}]);}() : $receiver;}]);
        smalltalk.send(aClass, "_addCompiledMethod_", [method]);
        smalltalk.send(compiler, "_setupClass_", [aClass]);
        smalltalk.send(self, "_updateMethodsList", []);
        smalltalk.send(self, "_selectMethod_", [method]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_copyClass",
smalltalk.method({
selector: "copyClass",
fn: function () {
    var self = this;
    var className = nil;
    className = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", ["Copy class"]);
    ($receiver = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [function () {return smalltalk.send(className, "_notEmpty", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_copyClass_named_", [smalltalk.send(self, "_selectedClass", []), className]);(function ($rec) {smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_copyClass_named_", [smalltalk.send(self, "_selectedClass", []), className]);(function ($rec) {smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_declarationSource",
smalltalk.method({
selector: "declarationSource",
fn: function () {
    var self = this;
    return ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_classDeclarationSource", []);}() : function () {return smalltalk.send(self, "_metaclassDeclarationSource", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_classDeclarationSource", []);}, function () {return smalltalk.send(self, "_metaclassDeclarationSource", []);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_disableSaveButton",
smalltalk.method({
selector: "disableSaveButton",
fn: function () {
    var self = this;
    ($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);}() : nil;
    self['@unsavedChanges'] = false;
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_dummyMethodSource",
smalltalk.method({
selector: "dummyMethodSource",
fn: function () {
    var self = this;
    return "messageSelectorAndArgumentNames\n\t\"comment stating purpose of message\"\n\n\t| temporary variable names |\n\tstatements";
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_handleSourceAreaKeyDown_",
smalltalk.method({
selector: "handleSourceAreaKeyDown:",
fn: function (anEvent) {
    var self = this;
    if (anEvent.ctrlKey) {
        if (anEvent.keyCode === 83) {
            self._compile();
            anEvent.preventDefault();
            return false;
        }
    }
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideClassButtons",
smalltalk.method({
selector: "hideClassButtons",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_hide", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideMethodButtons",
smalltalk.method({
selector: "hideMethodButtons",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_hide", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Browser.superclass || nil);
    self['@selectedTab'] = smalltalk.symbolFor("instance");
    self['@selectedPackage'] = smalltalk.send(smalltalk.send(self, "_packages", []), "_first", []);
    self['@unsavedChanges'] = false;
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return ($receiver = self['@selectedClass']) == nil ||
        $receiver == undefined ? function () {return "Browser (nil)";}() : function () {return smalltalk.send("Browser: ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]);}();
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_metaclassDeclarationSource",
smalltalk.method({
selector: "metaclassDeclarationSource",
fn: function () {
    var self = this;
    var stream = nil;
    stream = smalltalk.send("", "_writeStream", []);
    ($receiver = self['@selectedClass']) != nil &&
        $receiver != undefined ? function () {(function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [" class "]);return smalltalk.send($rec, "_nextPutAll_", ["instanceVariableNames: '"]);}(stream));smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(stream, "_nextPutAll_", [each]);}, function () {return smalltalk.send(stream, "_nextPutAll_", [" "]);}]);return smalltalk.send(stream, "_nextPutAll_", ["'"]);}() : nil;
    return smalltalk.send(stream, "_contents", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methodSource",
smalltalk.method({
selector: "methodSource",
fn: function () {
    var self = this;
    return ($receiver = self['@selectedMethod']) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(self, "_dummyMethodSource", []);}() : function () {return smalltalk.send(self['@selectedMethod'], "_source", []);}();
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methods",
smalltalk.method({
selector: "methods",
fn: function () {
    var self = this;
    var $early = {};
    try {
        var klass = nil;
        ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [[]];}();}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function () {throw $early = [[]];}();}]);
        ($receiver = self['@selectedClass']) != nil &&
            $receiver != undefined ? function () {return klass = ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return self['@selectedClass'];}() : function () {return smalltalk.send(self['@selectedClass'], "_class", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return self['@selectedClass'];}, function () {return smalltalk.send(self['@selectedClass'], "_class", []);}]);}() : nil;
        return smalltalk.send(($receiver = self['@selectedProtocol']) == nil ||
            $receiver == undefined ? function () {return ($receiver = klass) == nil || $receiver == undefined ? function () {return [];}() : function () {return smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []);}();}() : function () {return smalltalk.send(smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedProtocol']]);}]);}(), "_sort_", [function (a, b) {return ($receiver = smalltalk.send(a, "_selector", [])).klass === smalltalk.Number ? $receiver < smalltalk.send(b, "_selector", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_selector", [])]);}]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function () {
    var self = this;
    var packages = nil;
    packages = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_do_", [function (each) {return ($receiver = smalltalk.send(packages, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);}]);}]);
    return smalltalk.send(packages, "_sort", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
fn: function () {
    var self = this;
    var $early = {};
    try {
        var klass = nil;
        ($receiver = self['@selectedClass']) != nil &&
            $receiver != undefined ? function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [[]];}();}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function () {throw $early = [[]];}();}]);klass = ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return self['@selectedClass'];}() : function () {return smalltalk.send(self['@selectedClass'], "_class", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return self['@selectedClass'];}, function () {return smalltalk.send(self['@selectedClass'], "_class", []);}]);($receiver = smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_isEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [smalltalk.send(smalltalk.Array || Array, "_with_", ["not yet classified"])];}();}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function () {throw $early = [smalltalk.send(smalltalk.Array || Array, "_with_", ["not yet classified"])];}();}]);return function () {throw $early = [smalltalk.send(klass, "_protocols", [])];}();}() : nil;
        return smalltalk.send(smalltalk.Array || Array, "_new", []);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeClass",
smalltalk.method({
selector: "removeClass",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]), "__comma", ["?"])])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeMethod",
smalltalk.method({
selector: "removeMethod",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove #", "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", ["?"])])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}() : function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}, function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}]);return smalltalk.send(self, "_selectMethod_", [nil]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}() : function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}, function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}]);return smalltalk.send(self, "_selectMethod_", [nil]);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove #", "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", ["?"])])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}() : function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}, function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}]);return smalltalk.send(self, "_selectMethod_", [nil]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}() : function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}, function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}]);return smalltalk.send(self, "_selectMethod_", [nil]);}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removePackage",
smalltalk.method({
selector: "removePackage",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove the whole package ", "__comma", [self['@selectedPackage']]), "__comma", [" with all its classes?"])])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removePackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_updateCategoriesList", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removePackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_updateCategoriesList", []);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renameClass",
smalltalk.method({
selector: "renameClass",
fn: function () {
    var self = this;
    var newName = nil;
    newName = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", [smalltalk.send("Rename class ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])])]);
    ($receiver = smalltalk.send(smalltalk.send(newName, "_notNil", []), "_and_", [function () {return smalltalk.send(newName, "_notEmpty", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return function ($rec) {smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return function ($rec) {smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renamePackage",
smalltalk.method({
selector: "renamePackage",
fn: function () {
    var self = this;
    var newName = nil;
    newName = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", [smalltalk.send("Rename package ", "__comma", [self['@selectedPackage']])]);
    ($receiver = newName) != nil && $receiver != undefined ? function () {return ($receiver = smalltalk.send(newName, "_notEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);return smalltalk.send(self, "_updateCategoriesList", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);return smalltalk.send(self, "_updateCategoriesList", []);}]);}() : nil;
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["amber_sourceCode"]);return smalltalk.send($rec, "_with_", [function () {self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);smalltalk.send(self['@sourceArea'], "_onKeyDown_", [function (e) {return smalltalk.send(self, "_handleSourceAreaKeyDown_", [e]);}]);return smalltalk.send(self['@sourceArea'], "_onKeyUp_", [function () {return smalltalk.send(self, "_updateStatus", []);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_renderTopPanelOn_", [html]);smalltalk.send($rec, "_renderTabsOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);}(self));
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html) {
    var self = this;
    self['@saveButton'] = smalltalk.send(html, "_button", []);
    (function ($rec) {smalltalk.send($rec, "_with_", ["Save"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_compile", []);}]);}(self['@saveButton']));
    self['@methodButtons'] = smalltalk.send(html, "_span", []);
    self['@classButtons'] = smalltalk.send(html, "_span", []);
    (function ($rec) {smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_doIt", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_printIt", []);}]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_inspectIt", []);}]);}(smalltalk.send(html, "_button", []));}]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(self, "_updateSourceAndButtons", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html) {
    var self = this;
    self['@tabsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_tabs amber_browser"]);
    smalltalk.send(self, "_updateTabsList", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [function () {self['@packagesList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser packages"]);(function ($rec) {smalltalk.send($rec, "_class_", ["amber_packagesButtons"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_title_", ["Commit classes in this package to disk"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_commitPackage", []);}]);return smalltalk.send($rec, "_with_", ["Commit"]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_title_", ["Rename package"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_renamePackage", []);}]);return smalltalk.send($rec, "_with_", ["Rename"]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_title_", ["Remove this package from the system"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_removePackage", []);}]);return smalltalk.send($rec, "_with_", ["Remove"]);}(smalltalk.send(html, "_button", []));}]);}(smalltalk.send(html, "_div", [])));self['@classesList'] = smalltalk.send(smalltalk.ClassesList || ClassesList, "_on_", [self]);smalltalk.send(self['@classesList'], "_renderOn_", [html]);self['@protocolsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser protocols"]);self['@methodsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser methods"]);(function ($rec) {smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);return smalltalk.send($rec, "_updateMethodsList", []);}(self));return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["amber_clear"]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_resetClassesList",
smalltalk.method({
selector: "resetClassesList",
fn: function () {
    var self = this;
    smalltalk.send(self['@classesList'], "_resetNodes", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {var searchedClass = nil;searchedClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);return ($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}() : function () {return smalltalk.send(self, "_searchReferencesOf_", [aString]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}, function () {return smalltalk.send(self, "_searchReferencesOf_", [aString]);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {var searchedClass = nil;searchedClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);return ($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}() : function () {return smalltalk.send(self, "_searchReferencesOf_", [aString]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}, function () {return smalltalk.send(self, "_searchReferencesOf_", [aString]);}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchClassReferences",
smalltalk.method({
selector: "searchClassReferences",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [smalltalk.send(self['@selectedClass'], "_name", [])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchReferencesOf_",
smalltalk.method({
selector: "searchReferencesOf:",
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [aString]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectCategory_",
smalltalk.method({
selector: "selectCategory:",
fn: function (aCategory) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedPackage'] = aCategory;self['@selectedClass'] = self['@selectedProtocol'] = self['@selectedMethod'] = nil;smalltalk.send(self, "_resetClassesList", []);return function ($rec) {smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedPackage'] = aCategory;self['@selectedClass'] = self['@selectedProtocol'] = self['@selectedMethod'] = nil;smalltalk.send(self, "_resetClassesList", []);return function ($rec) {smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectClass_",
smalltalk.method({
selector: "selectClass:",
fn: function (aClass) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedClass'] = aClass;self['@selectedProtocol'] = self['@selectedMethod'] = nil;return function ($rec) {smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedClass'] = aClass;self['@selectedProtocol'] = self['@selectedMethod'] = nil;return function ($rec) {smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectMethod_",
smalltalk.method({
selector: "selectMethod:",
fn: function (aMethod) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedMethod'] = aMethod;return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedMethod'] = aMethod;return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectProtocol_",
smalltalk.method({
selector: "selectProtocol:",
fn: function (aString) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedProtocol'] = aString;self['@selectedMethod'] = nil;return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedProtocol'] = aString;self['@selectedMethod'] = nil;return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
fn: function (aString) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedTab'] = aString;smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedTab'] = aString;smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
fn: function () {
    var self = this;
    return self['@selectedClass'];
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
fn: function () {
    var self = this;
    return self['@selectedPackage'];
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_setMethodProtocol_",
smalltalk.method({
selector: "setMethodProtocol:",
fn: function (aString) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_addNewProtocol", []);}() : function () {smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol'] = aString;self['@selectedMethod'] = self['@selectedMethod'];return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_addNewProtocol", []);}, function () {smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol'] = aString;self['@selectedMethod'] = self['@selectedMethod'];return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return ($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_addNewProtocol", []);}() : function () {smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol'] = aString;self['@selectedMethod'] = self['@selectedMethod'];return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_addNewProtocol", []);}, function () {smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol'] = aString;self['@selectedMethod'] = self['@selectedMethod'];return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showClassButtons",
smalltalk.method({
selector: "showClassButtons",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_show", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showMethodButtons",
smalltalk.method({
selector: "showMethodButtons",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_show", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
    var self = this;
    var $early = {};
    try {
        ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean ? !$receiver ? function () {return function () {throw $early = [($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_declarationSource", []);}() : function () {return smalltalk.send(self, "_methodSource", []);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_declarationSource", []);}, function () {return smalltalk.send(self, "_methodSource", []);}])];}();}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return function () {throw $early = [($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_declarationSource", []);}() : function () {return smalltalk.send(self, "_methodSource", []);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_declarationSource", []);}, function () {return smalltalk.send(self, "_methodSource", []);}])];}();}]);
        return ($receiver = self['@selectedClass']) == nil ||
            $receiver == undefined ? function () {return "";}() : function () {return smalltalk.send(self, "_classCommentSource", []);}();
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
fn: function () {
    var self = this;
    smalltalk.send(self['@packagesList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [function (each) {var li = nil;var label = nil;($receiver = smalltalk.send(each, "_isEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {return label = "Unclassified";}() : function () {return label = each;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return label = "Unclassified";}, function () {return label = each;}]);li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedPackage'], "__eq", [each])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);return function ($rec) {smalltalk.send($rec, "_with_", [label]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectCategory_", [each]);}]);}(li);}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_update", []);
    smalltalk.send(self['@classesList'], "_updateNodes", []);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
fn: function () {
    var self = this;
    smalltalk.send(self['@methodsList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [function (each) {var li = nil;li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedMethod'], "__eq", [each])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);return function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(each, "_selector", [])]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectMethod_", [each]);}]);}(li);}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateProtocolsList",
smalltalk.method({
selector: "updateProtocolsList",
fn: function () {
    var self = this;
    smalltalk.send(self['@protocolsList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [function (each) {var li = nil;li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedProtocol'], "__eq", [each])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);return function ($rec) {smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectProtocol_", [each]);}]);}(li);}]);}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateSourceAndButtons",
smalltalk.method({
selector: "updateSourceAndButtons",
fn: function () {
    var self = this;
    smalltalk.send(self, "_disableSaveButton", []);
    smalltalk.send(self['@classButtons'], "_contents_", [function (html) {(function ($rec) {smalltalk.send($rec, "_title_", ["Create a new class"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_addNewClass", []);}]);return smalltalk.send($rec, "_with_", ["New class"]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["Rename class"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_renameClass", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["Copy class"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_copyClass", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["Remove class"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_removeClass", []);}]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_searchClassReferences", []);}]);}(smalltalk.send(html, "_button", []));}]);
    smalltalk.send(self['@methodButtons'], "_contents_", [function (html) {var protocolSelect = nil;var referencesSelect = nil;(function ($rec) {smalltalk.send($rec, "_with_", ["Remove method"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_removeMethod", []);}]);}(smalltalk.send(html, "_button", [])));protocolSelect = smalltalk.send(html, "_select", []);(function ($rec) {smalltalk.send($rec, "_onChange_", [function () {return smalltalk.send(self, "_setMethodProtocol_", [smalltalk.send(smalltalk.send(protocolSelect, "_asJQuery", []), "_val", [])]);}]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["Method protocol"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);}(smalltalk.send(html, "_option", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", ["New..."]);}(smalltalk.send(html, "_option", [])));return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [function (each) {option = smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);return ($receiver = smalltalk.send(self['@selectedProtocol'], "__eq", [each])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(typeof option == "undefined" ? nil : option, "_at_put_", ["selected", "selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(typeof option == "undefined" ? nil : option, "_at_put_", ["selected", "selected"]);}]);}]);}]);}(protocolSelect));return ($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean ? !$receiver ? function () {referencesSelect = smalltalk.send(html, "_select", []);return function ($rec) {smalltalk.send($rec, "_onChange_", [function () {return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);}]);return smalltalk.send($rec, "_with_", [function () {var option = nil;(function ($rec) {smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);}(smalltalk.send(html, "_option", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);}(smalltalk.send(html, "_option", [])));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);}]);}]);}(referencesSelect);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {referencesSelect = smalltalk.send(html, "_select", []);return function ($rec) {smalltalk.send($rec, "_onChange_", [function () {return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);}]);return smalltalk.send($rec, "_with_", [function () {var option = nil;(function ($rec) {smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);}(smalltalk.send(html, "_option", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);}(smalltalk.send(html, "_option", [])));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);}]);}]);}(referencesSelect);}]);}]);
    ($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self, "_hideMethodButtons", []);return ($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [function () {return smalltalk.send(self['@selectedProtocol'], "_notNil", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_hideClassButtons", []);}() : function () {return smalltalk.send(self, "_showClassButtons", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_hideClassButtons", []);}, function () {return smalltalk.send(self, "_showClassButtons", []);}]);}() : function () {smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {smalltalk.send(self, "_hideMethodButtons", []);return ($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [function () {return smalltalk.send(self['@selectedProtocol'], "_notNil", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_hideClassButtons", []);}() : function () {return smalltalk.send(self, "_showClassButtons", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_hideClassButtons", []);}, function () {return smalltalk.send(self, "_showClassButtons", []);}]);}, function () {smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);}]);
    smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);}() : nil;return self['@unsavedChanges'] = false;}() : function () {($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);}() : nil;return self['@unsavedChanges'] = true;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);}() : nil;return self['@unsavedChanges'] = false;}, function () {($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);}() : nil;return self['@unsavedChanges'] = true;}]);
    return self;
}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateTabsList",
smalltalk.method({
selector: "updateTabsList",
fn: function () {
    var self = this;
    smalltalk.send(self['@tabsList'], "_contents_", [function (html) {var li = nil;li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);(function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Instance"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("instance")]);}]);}(li));li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("class")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);(function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Class"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("class")]);}]);}(li));li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);return function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Comment"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("comment")]);}]);}(li);}]);
    return self;
}
}),
smalltalk.Browser);


smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
fn: function () {
    var self = this;
    return "js";
    return self;
}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
fn: function () {
    var self = this;
    return "st";
    return self;
}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
    return self;
}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_openOn_",
smalltalk.method({
selector: "openOn:",
fn: function (aClass) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_open", []);smalltalk.send($rec, "_selectCategory_", [smalltalk.send(aClass, "_category", [])]);return smalltalk.send($rec, "_selectClass_", [aClass]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Browser.klass);


smalltalk.addClass('BrowserForClass', smalltalk.Browser, ['classView', 'methodView', 'subclassView', 'methodTitle', 'subclassTitle', 'subclasses', 'descendants', 'root', 'classMethodTitle', 'classMethodView'], 'IDE');
smalltalk.addMethod(
"_class_",
smalltalk.method({
selector: "class:",
fn: function (aClass) {
    var self = this;
    smalltalk.send(self, "_class_descendants_", [aClass, nil]);
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_class_descendants_",
smalltalk.method({
selector: "class:descendants:",
fn: function (aClass, someSubClasses) {
    var self = this;
    self['@selectedClass'] = aClass;
    self['@descendants'] = someSubClasses;
    ($receiver = self['@descendants']) == nil || $receiver == undefined ? function () {return self['@subclasses'] = smalltalk.send(aClass, "_subclasses", []);}() : function () {return function ($rec) {smalltalk.send($rec, "_ifEmpty_", [function () {self['@subclasses'] = smalltalk.send(aClass, "_subclasses", []);return self['@descendants'] = nil;}]);return smalltalk.send($rec, "_ifNotEmpty_", [function () {self['@subclasses'] = [smalltalk.send(self['@descendants'], "_first", [])];return self['@descendants'] = smalltalk.send(self['@descendants'], "_allButFirst", []);}]);}(self['@descendants']);}();
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_classColor",
smalltalk.method({
selector: "classColor",
fn: function () {
    var self = this;
    return "#AAAAFF";
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_leftBorder",
smalltalk.method({
selector: "leftBorder",
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);smalltalk.send($rec, "_css_put_", ["border-left", "3px solid white"]);return smalltalk.send($rec, "_css_put_", ["padding-left", "5px"]);}(thisisplaceholder1);};
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_listArea_",
smalltalk.method({
selector: "listArea:",
fn: function (area) {
    var self = this;
    return this["@" + area];
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_offStyle",
smalltalk.method({
selector: "offStyle",
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);smalltalk.send($rec, "_css_put_", ["padding", "2px"]);smalltalk.send($rec, "_css_put_", ["font-size", "0.8em"]);smalltalk.send($rec, "_css_put_", ["border", "1px solid white"]);smalltalk.send($rec, "_css_put_", ["background", ""]);return smalltalk.send($rec, "_css_put_", ["color", ""]);}(thisisplaceholder1);};
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_onStyle",
smalltalk.method({
selector: "onStyle",
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);smalltalk.send($rec, "_css_put_", ["padding", "2px"]);smalltalk.send($rec, "_css_put_", ["font-size", "0.8em"]);smalltalk.send($rec, "_css_put_", ["border", "1px solid white"]);smalltalk.send($rec, "_css_put_", ["background", "white"]);return smalltalk.send($rec, "_css_put_", ["color", "black"]);}(thisisplaceholder1);};
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_onStyleForClass",
smalltalk.method({
selector: "onStyleForClass",
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);smalltalk.send($rec, "_css_put_", ["padding", "2px"]);smalltalk.send($rec, "_css_put_", ["font-size", "0.8em"]);smalltalk.send($rec, "_css_put_", ["border", smalltalk.send("1px solid ", "__comma", [smalltalk.send(self, "_classColor", [])])]);smalltalk.send($rec, "_css_put_", ["background", smalltalk.send(self, "_classColor", [])]);return smalltalk.send($rec, "_css_put_", ["color", "white"]);}(thisisplaceholder1);};
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_open_",
smalltalk.method({
selector: "open:",
fn: function (aClass) {
    var self = this;
    smalltalk.send(self, "_open_method_", [aClass, nil]);
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_open_method_",
smalltalk.method({
selector: "open:method:",
fn: function (aClass, aMethodName) {
    var self = this;
    var xs = nil;
    var last = nil;
    xs = smalltalk.send(self, "_selectorList_method_", [aClass, aMethodName]);
    last = smalltalk.send(xs, "_first", []);
    xs = smalltalk.send(xs, "_allButFirst", []);
    smalltalk.send(xs, "_do_", [function (current) {smalltalk.send(self, "_openIfClosed_parent_", [current, last]);return last = current;}]);
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_openIfClosed_parent_",
smalltalk.method({
selector: "openIfClosed:parent:",
fn: function (selector, parentSelector) {
    var self = this;
    ($receiver = smalltalk.send(self['@root'], "_find_", [selector])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.send(self['@root'], "_find_", [parentSelector]), "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(smalltalk.send(thisisplaceholder1, "_root", []), "_asJQuery", []), "_click", []);}]);}() : $receiver;
    return smalltalk.send(self['@root'], "_find_", [selector]);
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_renderMethodButtonOn_title_class_cssClass_area_on_off_",
smalltalk.method({
selector: "renderMethodButtonOn:title:class:cssClass:area:on:off:",
fn: function (html, aTitle, aClass, cssClass, area, onStyle, offStyle) {
    var self = this;
    var ret = nil;
    ret = smalltalk.send(html, "_span", []);
    return function ($rec) {smalltalk.send($rec, "_with_", [aTitle]);smalltalk.send($rec, "_css_put_", ["cursor", "pointer"]);smalltalk.send($rec, "_|_gt", [offStyle]);smalltalk.send($rec, "_class_", [cssClass]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_listArea_", [area]), "_toggleContents_withOn_withOff_", [function (html) {return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.MethodBrowser || MethodBrowser, "_new", []), "_class_method_", [aClass, thisisplaceholder1])]);}]);}, function () {return smalltalk.send(ret, "_|_gt", [onStyle]);}, function () {return smalltalk.send(ret, "_|_gt", [offStyle]);}]);}]);}(ret);
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var title = nil;
    var titleBrush = nil;
    var classMethodButton = nil;
    var methodButton = nil;
    var protocolButton = nil;
    var definitionButton = nil;
    var commentButton = nil;
    self['@root'] = smalltalk.send(smalltalk.send(html, "_root", []), "_name_", [smalltalk.send("class-", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])])]);
    title = smalltalk.send(smalltalk.PlusMinusIcon || PlusMinusIcon, "_text_", [smalltalk.send(self['@selectedClass'], "_name", [])]);
    classMethodButton = smalltalk.send(smalltalk.send(smalltalk.RectangleButton || RectangleButton, "_new", []), "_label_frontColor_backColor_", ["class method", "white", "#AAAAFF"]);
    methodButton = smalltalk.send(smalltalk.send(smalltalk.RectangleButton || RectangleButton, "_new", []), "_label_frontColor_backColor_", ["method", "black", "white"]);
    protocolButton = smalltalk.send(smalltalk.send(smalltalk.RectangleButton || RectangleButton, "_new", []), "_label_frontColor_backColor_", ["protocol", "black", "white"]);
    definitionButton = smalltalk.send(smalltalk.send(smalltalk.RectangleButton || RectangleButton, "_new", []), "_label_frontColor_backColor_", ["definition", "black", "white"]);
    commentButton = smalltalk.send(smalltalk.send(smalltalk.RectangleButton || RectangleButton, "_new", []), "_label_frontColor_backColor_", ["comment", "black", "white"]);
    (function ($rec) {smalltalk.send($rec, "_with_", [function () {return titleBrush = function ($rec) {smalltalk.send($rec, "_with_", [title]);smalltalk.send($rec, "_class_", ["browser-class-name"]);return smalltalk.send($rec, "_css_put_", ["font-size", "1.2em"]);}(smalltalk.send(html, "_span", []));}]);smalltalk.send($rec, "_with_", [classMethodButton]);smalltalk.send($rec, "_with_", [methodButton]);smalltalk.send($rec, "_with_", [protocolButton]);smalltalk.send($rec, "_with_", [definitionButton]);return smalltalk.send($rec, "_with_", [commentButton]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(smalltalk.send(classMethodButton, "_toggle", []), "_fire_", [false]);
    return self;
}
}),
smalltalk.BrowserForClass);

smalltalk.addMethod(
"_selectorList_method_",
smalltalk.method({
selector: "selectorList:method:",
fn: function (aClass, aString) {
    var self = this;
    var xs = nil;
    xs = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_ancestors", []), "__comma", [aClass]), "_collect_", [f