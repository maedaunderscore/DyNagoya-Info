smalltalk.addPackage('IDE', {});
smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@browser'];
    return self;
},
args: [],
source: "browser\x0a\x09^browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
category: 'accessing',
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
},
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedPackage", []);
    return self;
},
args: [],
source: "category\x0a\x09^self browser selectedPackage",
messageSends: ["selectedPackage", "browser"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_getNodes",
smalltalk.method({
selector: "getNodes",
category: 'accessing',
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
},
args: [],
source: "getNodes\x0a\x09| classes children others |\x0a\x09classes := self browser classes.\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [:each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [children add: each]\x0a\x09\x09\x09ifTrue: [others add: each]].\x0a\x09^children collect: [:each |\x0a\x09\x09ClassesListNode on: each browser: self browser classes: others level: 0]",
messageSends: ["classes", "browser", "do:", "ifFalse:ifTrue:", "includes:", "superclass", "add:", "collect:", "on:browser:classes:level:"],
referencedClasses: ["ClassesListNode"]
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function () {
    var self = this;
    ($receiver = self['@nodes']) == nil || $receiver == undefined ? function () {return self['@nodes'] = smalltalk.send(self, "_getNodes", []);}() : $receiver;
    return self['@nodes'];
    return self;
},
args: [],
source: "nodes\x0a\x09nodes ifNil: [nodes := self getNodes].\x0a\x09^nodes",
messageSends: ["ifNil:", "getNodes"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    self['@ul'] = function ($rec) {smalltalk.send($rec, "_class_", ["amber_column browser classes"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_ul", []));
    smalltalk.send(self, "_updateNodes", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09ul := html ul\x0a\x09\x09class: 'amber_column browser classes';\x0a\x09\x09yourself.\x0a\x09self updateNodes",
messageSends: ["class:", "yourself", "ul", "updateNodes"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_resetNodes",
smalltalk.method({
selector: "resetNodes",
category: 'accessing',
fn: function () {
    var self = this;
    self['@nodes'] = nil;
    return self;
},
args: [],
source: "resetNodes\x0a\x09nodes := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_updateNodes",
smalltalk.method({
selector: "updateNodes",
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(self['@ul'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);}]);
    return self;
},
args: [],
source: "updateNodes\x0a\x09ul contents: [:html |\x0a\x09\x09self nodes do: [:each |\x0a\x09\x09\x09each renderOn: html]]",
messageSends: ["contents:", "do:", "nodes", "renderOn:"],
referencedClasses: []
}),
smalltalk.ClassesList);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowser) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_browser_", [aBrowser]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aBrowser"],
source: "on: aBrowser\x0a\x09^self new \x0a\x09\x09browser: aBrowser; \x0a\x09\x09yourself",
messageSends: ["browser:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@browser'];
    return self;
},
args: [],
source: "browser\x0a\x09^browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
category: 'accessing',
fn: function (aBrowser) {
    var self = this;
    self['@browser'] = aBrowser;
    return self;
},
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
category: 'accessing',
fn: function (aCollection) {
    var self = this;
    var children = nil;
    var others = nil;
    children = [];
    others = [];
    smalltalk.send(aCollection, "_do_", [function (each) {return ($receiver = smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(children, "_add_", [each]);}() : function () {return smalltalk.send(others, "_add_", [each]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(children, "_add_", [each]);}, function () {return smalltalk.send(others, "_add_", [each]);}]);}]);
    self['@nodes'] = smalltalk.send(children, "_collect_", [function (each) {return smalltalk.send(smalltalk.ClassesListNode || ClassesListNode, "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, ($receiver = smalltalk.send(self, "_level", [])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1])]);}]);
    return self;
},
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [:each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [children add: each]\x0a\x09\x09\x09ifFalse: [others add: each]].\x0a\x09nodes:= children collect: [:each |\x0a\x09\x09ClassesListNode on: each browser: self browser classes: others level: self level + 1]",
messageSends: ["do:", "ifTrue:ifFalse:", "=", "superclass", "theClass", "add:", "collect:", "on:browser:classes:level:", "browser", "+", "level"],
referencedClasses: ["ClassesListNode"]
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    var str = nil;
    str = smalltalk.send(smalltalk.send(smalltalk.String || String, "_new", []), "_writeStream", []);
    smalltalk.send(smalltalk.send(self, "_level", []), "_timesRepeat_", [function () {return smalltalk.send(str, "_nextPutAll_", ["&nbsp;&nbsp;&nbsp;&nbsp;"]);}]);
    smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", [])]);
    return smalltalk.send(str, "_contents", []);
    return self;
},
args: [],
source: "label\x0a\x09| str |\x0a\x09str := String new writeStream.\x0a\x09self level timesRepeat: [\x0a\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].\x0a\x09str nextPutAll: self theClass name.\x0a\x09^str contents",
messageSends: ["writeStream", "new", "timesRepeat:", "level", "nextPutAll:", "name", "theClass", "contents"],
referencedClasses: ["String"]
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@level'];
    return self;
},
args: [],
source: "level\x0a\x09^level",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    self['@level'] = anInteger;
    return self;
},
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@nodes'];
    return self;
},
args: [],
source: "nodes\x0a\x09^nodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: '',
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
},
args: ["html"],
source: "renderOn: html\x0a\x09| li cssClass |\x0a\x09cssClass := ''.\x0a\x09li := html li \x0a\x09\x09onClick: [self browser selectClass: self theClass]. \x0a\x09li asJQuery html: self label.\x0a\x0a\x09self browser selectedClass = self theClass ifTrue:  [\x0a\x09\x09cssClass := cssClass, ' selected'].\x0a\x0a\x09self theClass comment isEmpty ifFalse: [\x0a\x09\x09cssClass := cssClass, ' commented'].\x0a\x0a\x09li class: cssClass.\x0a\x0a\x09self nodes do: [:each |\x0a\x09\x09each renderOn: html]",
messageSends: ["onClick:", "li", "selectClass:", "browser", "theClass", "html:", "asJQuery", "label", "ifTrue:", "=", "selectedClass", ",", "ifFalse:", "isEmpty", "comment", "class:", "do:", "nodes", "renderOn:"],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@theClass'];
    return self;
},
args: [],
source: "theClass\x0a\x09^theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass) {
    var self = this;
    self['@theClass'] = aClass;
    return self;
},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);


smalltalk.addMethod(
"_on_browser_classes_level_",
smalltalk.method({
selector: "on:browser:classes:level:",
category: 'instance creation',
fn: function (aClass, aBrowser, aCollection, anInteger) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_theClass_", [aClass]);smalltalk.send($rec, "_browser_", [aBrowser]);smalltalk.send($rec, "_level_", [anInteger]);smalltalk.send($rec, "_getNodesFrom_", [aCollection]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aClass", "aBrowser", "aCollection", "anInteger"],
source: "on: aClass browser: aBrowser classes: aCollection level: anInteger\x0a\x09^self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09browser: aBrowser;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
messageSends: ["theClass:", "browser:", "level:", "getNodesFrom:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
"_handleError_",
smalltalk.method({
selector: "handleError:",
category: 'error handling',
fn: function (anError) {
    var self = this;
    smalltalk.send(function () {return function ($rec) {smalltalk.send($rec, "_error_", [anError]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.Debugger || Debugger, "_new", []));}, "_on_do_", [smalltalk.Error || Error, function (error) {return smalltalk.send(smalltalk.send(smalltalk.ErrorHandler || ErrorHandler, "_new", []), "_handleError_", [error]);}]);
    return self;
},
args: ["anError"],
source: "handleError: anError\x0a\x09[Debugger new\x0a\x09\x09error: anError;\x0a\x09\x09open] on: Error do: [:error |\x0a\x09\x09\x09ErrorHandler new handleError: error]",
messageSends: ["on:do:", "error:", "open", "new", "handleError:"],
referencedClasses: ["Debugger", "Error", "ErrorHandler"]
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_register", []);
    return self;
},
args: [],
source: "initialize\x0a\x09self register",
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_val_", [""]);
    return self;
},
args: [],
source: "clear\x0a      self val: ''",
messageSends: ["val:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLine",
smalltalk.method({
selector: "currentLine",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@editor'], "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursor", []), "_line", [])]);
    return self;
},
args: [],
source: "currentLine\x0a    ^editor getLine: (editor getCursor line)",
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLineOrSelection",
smalltalk.method({
selector: "currentLineOrSelection",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = smalltalk.send(self['@editor'], "_somethingSelected", [])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_currentLine", []);}() : function () {return smalltalk.send(self, "_selection", []);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_currentLine", []);}, function () {return smalltalk.send(self, "_selection", []);}]);
    return self;
},
args: [],
source: "currentLineOrSelection\x0a    ^editor somethingSelected\x0a\x09ifFalse: [self currentLine]\x0a\x09ifTrue: [self selection]",
messageSends: ["ifFalse:ifTrue:", "somethingSelected", "currentLine", "selection"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
category: 'actions',
fn: function () {
    var self = this;
    var result = nil;
    result = smalltalk.send(self, "_eval_", [smalltalk.send(self, "_currentLineOrSelection", [])]);
    ($receiver = smalltalk.send(self, "_onDoIt", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(smalltalk.send(self, "_onDoIt", []), "_value", []);}() : nil;
    return result;
    return self;
},
args: [],
source: "doIt\x0a    | result |\x0a    result := self eval: self currentLineOrSelection.\x0a    self onDoIt ifNotNil: [self onDoIt value].\x0a    ^result",
messageSends: ["eval:", "currentLineOrSelection", "ifNotNil:", "onDoIt", "value"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@editor'];
    return self;
},
args: [],
source: "editor\x0a\x09^editor",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
category: 'actions',
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
},
args: ["aString"],
source: "eval: aString\x0a\x09| compiler  |\x0a\x09compiler := Compiler new.\x0a\x09[compiler parseExpression: aString] on: Error do: [:ex |\x0a\x09\x09^window alert: ex messageText].\x0a\x09^(compiler eval: (compiler compile: 'doIt ^[', aString, '] value' forClass: DoIt)) fn applyTo: self receiver arguments: #()",
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "applyTo:arguments:", "fn", "eval:", "compile:forClass:", ",", "receiver"],
referencedClasses: ["Compiler", "Error", "DoIt"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Importer || Importer, "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_currentLineOrSelection", []), "_readStream", [])]);
    return self;
},
args: [],
source: "fileIn\x0a    Importer new import: self currentLineOrSelection readStream",
messageSends: ["import:", "new", "readStream", "currentLineOrSelection"],
referencedClasses: ["Importer"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_handleKeyDown_",
smalltalk.method({
selector: "handleKeyDown:",
category: 'actions',
fn: function (anEvent) {
    var self = this;
    if (anEvent.ctrlKey) {
        if (anEvent.keyCode === 80) {
            self._printIt();
            anEvent.preventDefault();
            return false;
        }
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
},
args: ["anEvent"],
source: "handleKeyDown: anEvent\x0a    <if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._printIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._doIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._inspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_doIt", []), "_inspect", []);
    return self;
},
args: [],
source: "inspectIt\x0a    self doIt inspect",
messageSends: ["inspect", "doIt"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@onDoIt'];
    return self;
},
args: [],
source: "onDoIt\x0a\x09^onDoIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt_",
smalltalk.method({
selector: "onDoIt:",
category: 'accessing',
fn: function (aBlock) {
    var self = this;
    self['@onDoIt'] = aBlock;
    return self;
},
args: ["aBlock"],
source: "onDoIt: aBlock\x0a\x09onDoIt := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
category: 'events',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self['@div'], "_onKeyDown_", [aBlock]);
    return self;
},
args: ["aBlock"],
source: "onKeyDown: aBlock\x0a\x09div onKeyDown: aBlock",
messageSends: ["onKeyDown:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyUp_",
smalltalk.method({
selector: "onKeyUp:",
category: 'events',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self['@div'], "_onKeyUp_", [aBlock]);
    return self;
},
args: ["aBlock"],
source: "onKeyUp: aBlock\x0a\x09div onKeyUp: aBlock",
messageSends: ["onKeyUp:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
category: 'actions',
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
},
args: ["aString"],
source: "print: aString\x0a\x09| start stop |\x0a\x09start := HashedCollection new.\x0a\x09stop := HashedCollection new.\x0a\x09start at: 'line' put: (editor getCursor: false) line.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a\x09stop at: 'line' put: (start at: 'line').\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
messageSends: ["new", "at:put:", "line", "getCursor:", "ch", "at:", "+", "size", "replaceSelection:", ",", "getSelection", "setCursor:", "setSelection:end:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_print_", [smalltalk.send(smalltalk.send(self, "_doIt", []), "_printString", [])]);
    return self;
},
args: [],
source: "printIt\x0a    self print: self doIt printString",
messageSends: ["print:", "printString", "doIt"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@receiver']) == nil || $receiver == undefined ? function () {return smalltalk.send(smalltalk.DoIt || DoIt, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "receiver\x0a\x09^receiver ifNil: [DoIt new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self['@receiver'] = anObject;
    return self;
},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var textarea = nil;
    self['@div'] = smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["source"]);
    smalltalk.send(self['@div'], "_with_", [function () {return textarea = smalltalk.send(html, "_textarea", []);}]);
    smalltalk.send(self, "_setEditorOn_", [smalltalk.send(textarea, "_element", [])]);
    smalltalk.send(self['@div'], "_onKeyDown_", [function (e) {return smalltalk.send(self, "_handleKeyDown_", [e]);}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a    | textarea |\x0a    div := html div class: 'source'.\x0a    div with: [textarea := html textarea].\x0a    self setEditorOn: textarea element.\x0a    div onKeyDown: [:e | self handleKeyDown: e]",
messageSends: ["class:", "div", "with:", "textarea", "setEditorOn:", "element", "onKeyDown:", "handleKeyDown:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@editor'], "_getSelection", []);
    return self;
},
args: [],
source: "selection\x0a\x09^editor getSelection",
messageSends: ["getSelection"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(typeof textarea == "undefined" ? nil : textarea, "_element", []), "_selectionEnd", []);
    return self;
},
args: [],
source: "selectionEnd\x0a   ^textarea element selectionEnd",
messageSends: ["selectionEnd", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(typeof textarea == "undefined" ? nil : textarea, "_element", []), "_selectionEnd_", [anInteger]);
    return self;
},
args: ["anInteger"],
source: "selectionEnd: anInteger\x0a   textarea element selectionEnd: anInteger",
messageSends: ["selectionEnd:", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(typeof textarea == "undefined" ? nil : textarea, "_element", []), "_selectionStart", []);
    return self;
},
args: [],
source: "selectionStart\x0a   ^textarea element selectionStart",
messageSends: ["selectionStart", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(typeof textarea == "undefined" ? nil : textarea, "_element", []), "_selectionStart_", [anInteger]);
    return self;
},
args: ["anInteger"],
source: "selectionStart: anInteger\x0a   textarea element selectionStart: anInteger",
messageSends: ["selectionStart:", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
category: 'accessing',
fn: function (aTextarea) {
    var self = this;
    self['@editor'] = CodeMirror.fromTextArea(aTextarea, {theme: "amber", lineNumbers: true, enterMode: "flat", matchBrackets: true, electricChars: false});
    return self;
},
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {\x0a\x09\x09theme: 'amber',\x0a                lineNumbers: true,\x0a                enterMode: 'flat',\x0a                matchBrackets: true,\x0a                electricChars: false\x0a\x09})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@editor'], "_getValue", []);
    return self;
},
args: [],
source: "val\x0a    ^editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val_",
smalltalk.method({
selector: "val:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    smalltalk.send(self['@editor'], "_setValue_", [aString]);
    return self;
},
args: ["aString"],
source: "val: aString\x0a    editor setValue: aString",
messageSends: ["setValue:"],
referencedClasses: []
}),
smalltalk.SourceArea);



smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
category: 'adding/Removing',
fn: function (aWidget) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_add_", [aWidget]);
    smalltalk.send(aWidget, "_appendToJQuery_", [smalltalk.send("#amber", "_asJQuery", [])]);
    smalltalk.send(aWidget, "_hide", []);
    return self;
},
args: ["aWidget"],
source: "addTab: aWidget\x0a    self tabs add: aWidget.\x0a    aWidget appendToJQuery: '#amber' asJQuery.\x0a    aWidget hide",
messageSends: ["add:", "tabs", "appendToJQuery:", "asJQuery", "hide"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = self['@opened']).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["amberBody"]);return self['@opened'] = false;}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["amberBody"]);return self['@opened'] = false;}]);
    return self;
},
args: [],
source: "close\x0a    opened ifTrue: [\x0a\x09'#amber' asJQuery hide.\x0a\x09ul asJQuery hide.\x0a\x09selectedTab hide.\x0a\x09self removeBodyMargin.\x0a\x09'body' asJQuery removeClass: 'amberBody'.\x0a\x09opened := false]",
messageSends: ["ifTrue:", "hide", "asJQuery", "removeBodyMargin", "removeClass:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_closeTab_",
smalltalk.method({
selector: "closeTab:",
category: 'actions',
fn: function (aWidget) {
    var self = this;
    smalltalk.send(self, "_removeTab_", [aWidget]);
    smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
    smalltalk.send(aWidget, "_remove", []);
    smalltalk.send(self, "_update", []);
    return self;
},
args: ["aWidget"],
source: "closeTab: aWidget\x0a    self removeTab: aWidget.\x0a    self selectTab: self tabs last.\x0a    aWidget remove.\x0a    self update",
messageSends: ["removeTab:", "selectTab:", "last", "tabs", "remove", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
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
},
args: [],
source: "initialize\x0a    super initialize.\x0a    opened := true.\x0a    [:html | html div id: 'amber'] appendToJQuery: 'body' asJQuery.\x0a    'body' asJQuery \x0a\x09addClass: 'amberBody'.\x0a    self appendToJQuery: '#amber' asJQuery.\x0a    self \x0a\x22\x09addTab: IDETranscript current;\x22\x0a\x09addTab: Workspace new;\x0a\x09addTab: TestRunner new.\x0a    self selectTab: self tabs last.\x0a    self \x0a\x09onResize: [self updateBodyMargin; updatePosition];\x0a\x09onWindowResize: [self updatePosition]",
messageSends: ["initialize", "appendToJQuery:", "id:", "div", "asJQuery", "addClass:", "addTab:", "new", "selectTab:", "last", "tabs", "onResize:", "updateBodyMargin", "updatePosition", "onWindowResize:"],
referencedClasses: ["Workspace", "TestRunner"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_labelFor_",
smalltalk.method({
selector: "labelFor:",
category: 'accessing',
fn: function (aWidget) {
    var self = this;
    var label = nil;
    var maxSize = nil;
    maxSize = 15;
    label = smalltalk.send(smalltalk.send(aWidget, "_label", []), "_copyFrom_to_", [0, smalltalk.send(smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", []), "_min_", [maxSize])]);
    ($receiver = ($receiver = smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", [])).klass === smalltalk.Number ? $receiver > maxSize : smalltalk.send($receiver, "__gt", [maxSize])).klass === smalltalk.Boolean ? $receiver ? function () {return label = smalltalk.send(label, "__comma", ["..."]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return label = smalltalk.send(label, "__comma", ["..."]);}]);
    return label;
    return self;
},
args: ["aWidget"],
source: "labelFor: aWidget\x0a\x09| label maxSize |\x0a\x09maxSize := 15.\x0a\x09label := aWidget label copyFrom: 0 to: (aWidget label size min: maxSize).\x0a\x09aWidget label size > maxSize ifTrue: [\x0a\x09\x09label := label, '...'].\x0a\x09^label",
messageSends: ["copyFrom:to:", "label", "min:", "size", "ifTrue:", ">", ","],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_newBrowserTab",
smalltalk.method({
selector: "newBrowserTab",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.Browser || Browser, "_open", []);
    return self;
},
args: [],
source: "newBrowserTab\x0a    Browser open",
messageSends: ["open"],
referencedClasses: ["Browser"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onResize_",
smalltalk.method({
selector: "onResize:",
category: 'actions',
fn: function (aBlock) {
    var self = this;
    jQuery("#amber").resizable({handles: "n", resize: aBlock, minHeight: 230});
    return self;
},
args: ["aBlock"],
source: "onResize: aBlock\x0a    <jQuery('#amber').resizable({\x0a\x09handles: 'n', \x0a\x09resize: aBlock,\x0a\x09minHeight: 230\x0a})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onWindowResize_",
smalltalk.method({
selector: "onWindowResize:",
category: 'actions',
fn: function (aBlock) {
    var self = this;
    jQuery(window).resize(aBlock);
    return self;
},
args: ["aBlock"],
source: "onWindowResize: aBlock\x0a    <jQuery(window).resize(aBlock)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = self['@opened']).klass === smalltalk.Boolean ? !$receiver ? function () {smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amberBody"]);smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return self['@opened'] = true;}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amberBody"]);smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return self['@opened'] = true;}]);
    return self;
},
args: [],
source: "open\x0a    opened ifFalse: [\x0a\x09'body' asJQuery addClass: 'amberBody'.\x0a\x09'#amber' asJQuery show.\x0a\x09ul asJQuery show.\x0a\x09self updateBodyMargin.\x0a\x09selectedTab show.\x0a\x09opened := true]",
messageSends: ["ifFalse:", "addClass:", "asJQuery", "show", "updateBodyMargin"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeBodyMargin",
smalltalk.method({
selector: "removeBodyMargin",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_setBodyMargin_", [0]);
    return self;
},
args: [],
source: "removeBodyMargin\x0a    self setBodyMargin: 0",
messageSends: ["setBodyMargin:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
category: 'adding/Removing',
fn: function (aWidget) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_remove_", [aWidget]);
    smalltalk.send(self, "_update", []);
    return self;
},
args: ["aWidget"],
source: "removeTab: aWidget\x0a    self tabs remove: aWidget.\x0a    self update",
messageSends: ["remove:", "tabs", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["logo"]);
    smalltalk.send(self, "_renderToolbarOn_", [html]);
    self['@ul'] = function ($rec) {smalltalk.send($rec, "_id_", ["amberTabs"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_ul", []));
    smalltalk.send(self, "_renderTabs", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div id: 'logo'.\x0a\x09self renderToolbarOn: html.\x0a\x09ul := html ul\x0a\x09\x09id: 'amberTabs';\x0a\x09\x09yourself.\x0a\x09self renderTabs",
messageSends: ["id:", "div", "renderToolbarOn:", "yourself", "ul", "renderTabs"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabFor_on_",
smalltalk.method({
selector: "renderTabFor:on:",
category: 'rendering',
fn: function (aWidget, html) {
    var self = this;
    var li = nil;
    li = smalltalk.send(html, "_li", []);
    ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [aWidget])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);
    (function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", [function () {($receiver = smalltalk.send(aWidget, "_canBeClosed", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function ($rec) {smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_closeTab_", [aWidget]);}]);}(smalltalk.send(html, "_span", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_closeTab_", [aWidget]);}]);}(smalltalk.send(html, "_span", []));}]);return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_labelFor_", [aWidget])]);}]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [aWidget]);}]);}(li));
    return self;
},
args: ["aWidget", "html"],
source: "renderTabFor: aWidget on: html\x0a\x09| li |\x0a\x09li := html li.\x0a\x09selectedTab = aWidget ifTrue: [\x0a\x09li class: 'selected'].\x0a\x09li with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span\x0a\x09\x09\x09class: 'mtab';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09aWidget canBeClosed ifTrue: [\x0a\x09\x09\x09\x09\x09html span \x0a\x09\x09\x09\x09\x09\x09class: 'close';\x0a\x09\x09\x09\x09\x09\x09with: 'x';\x0a\x09\x09\x09\x09\x09onClick: [self closeTab: aWidget]].\x0a\x09\x09\x09html span with: (self labelFor: aWidget)].\x0a\x09\x09html span class: 'rtab'];\x0a\x09onClick: [self selectTab: aWidget]",
messageSends: ["li", "ifTrue:", "=", "class:", "with:", "span", "canBeClosed", "onClick:", "closeTab:", "labelFor:", "selectTab:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabs",
smalltalk.method({
selector: "renderTabs",
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(self['@ul'], "_contents_", [function (html) {smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [function (each) {return smalltalk.send(self, "_renderTabFor_on_", [each, html]);}]);return function ($rec) {smalltalk.send($rec, "_class_", ["newtab"]);smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", [" + "]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_newBrowserTab", []);}]);}(smalltalk.send(html, "_li", []));}]);
    return self;
},
args: [],
source: "renderTabs\x0a\x09ul contents: [:html |\x0a\x09    self tabs do: [:each |\x0a\x09\x09self renderTabFor: each on: html].\x0a\x09    html li\x0a\x09\x09class: 'newtab';\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'ltab'.\x0a\x09\x09\x09html span class: 'mtab'; with: ' + '.\x0a\x09\x09\x09html span class: 'rtab'];\x0a\x09\x09onClick: [self newBrowserTab]]",
messageSends: ["contents:", "do:", "tabs", "renderTabFor:on:", "class:", "with:", "span", "onClick:", "newBrowserTab", "li"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderToolbarOn_",
smalltalk.method({
selector: "renderToolbarOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_id_", ["amber_toolbar"]);return smalltalk.send($rec, "_with_", [function () {self['@input'] = function ($rec) {smalltalk.send($rec, "_class_", ["implementors"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_input", []));smalltalk.send(self['@input'], "_onKeyPress_", [function (event) {return ($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [13])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}]);}]);return function ($rec) {smalltalk.send($rec, "_id_", ["amber_close"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_close", []);}]);}(smalltalk.send(html, "_div", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderToolbarOn: html\x0a\x09html div \x0a\x09\x09id: 'amber_toolbar';\x0a\x09\x09with: [\x0a\x09\x09\x09input := html input \x0a\x09\x09\x09\x09class: 'implementors';\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09input onKeyPress: [:event |\x0a\x09\x09\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09\x09self search: input asJQuery val]].\x0a\x09\x09\x09html div id: 'amber_close'; onClick: [self close]]",
messageSends: ["id:", "with:", "class:", "yourself", "input", "onKeyPress:", "ifTrue:", "=", "keyCode", "search:", "val", "asJQuery", "onClick:", "close", "div"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString) {
    var self = this;
    var searchedClass = nil;
    searchedClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);
    ($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [searchedClass]);}() : function () {return smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [aString]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [searchedClass]);}, function () {return smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [aString]);}]);
    return self;
},
args: ["aString"],
source: "search: aString\x0a\x09| searchedClass |\x0a\x09searchedClass := Smalltalk current at: aString.\x0a\x09\x09searchedClass isClass\x0a\x09\x09\x09ifTrue: [Browser openOn: searchedClass]\x0a\x09\x09\x09ifFalse: [ReferencesBrowser search: aString]",
messageSends: ["at:", "current", "ifTrue:ifFalse:", "isClass", "openOn:", "search:"],
referencedClasses: ["Smalltalk", "Browser", "ReferencesBrowser"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
category: 'actions',
fn: function (aWidget) {
    var self = this;
    smalltalk.send(self, "_open", []);
    self['@selectedTab'] = aWidget;
    smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [function (each) {return smalltalk.send(each, "_hide", []);}]);
    smalltalk.send(aWidget, "_show", []);
    smalltalk.send(self, "_update", []);
    return self;
},
args: ["aWidget"],
source: "selectTab: aWidget\x0a    self open.\x0a    selectedTab := aWidget.\x0a    self tabs do: [:each |\x0a\x09each hide].\x0a    aWidget show.\x0a\x09\x0a    self update",
messageSends: ["open", "do:", "tabs", "hide", "show", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_setBodyMargin_",
smalltalk.method({
selector: "setBodyMargin:",
category: 'actions',
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(".amberBody", "_asJQuery", []), "_css_put_", ["margin-bottom", smalltalk.send(smalltalk.send(anInteger, "_asString", []), "__comma", ["px"])]);
    return self;
},
args: ["anInteger"],
source: "setBodyMargin: anInteger\x0a    '.amberBody' asJQuery css: 'margin-bottom' put: anInteger asString, 'px'",
messageSends: ["css:put:", "asJQuery", ",", "asString"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@tabs']) == nil || $receiver == undefined ? function () {return self['@tabs'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    return self;
},
args: [],
source: "tabs\x0a    ^tabs ifNil: [tabs := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self, "_renderTabs", []);
    return self;
},
args: [],
source: "update\x0a\x09self renderTabs",
messageSends: ["renderTabs"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updateBodyMargin",
smalltalk.method({
selector: "updateBodyMargin",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_setBodyMargin_", [smalltalk.send(smalltalk.send("#amber", "_asJQuery", []), "_height", [])]);
    return self;
},
args: [],
source: "updateBodyMargin\x0a    self setBodyMargin: '#amber' asJQuery height",
messageSends: ["setBodyMargin:", "height", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updatePosition",
smalltalk.method({
selector: "updatePosition",
category: 'actions',
fn: function () {
    var self = this;
    jQuery("#amber").css("top", "").css("bottom", "0px");
    return self;
},
args: [],
source: "updatePosition\x0a    <jQuery('#amber').css('top', '').css('bottom', '0px')>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function () {
    var self = this;
    return ($receiver = self['@current']) == nil || $receiver == undefined ? function () {return self['@current'] = smalltalk.send(self, "_new", [], smalltalk.TabManager.klass.superclass || nil);}() : $receiver;
    return self;
},
args: [],
source: "current\x0a    ^current ifNil: [current := super new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function () {
    var self = this;
    smalltalk.send(self, "_shouldNotImplement", []);
    return self;
},
args: [],
source: "new\x0a    self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "canBeClosed\x0a    ^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_closeTab_", [self]);
    return self;
},
args: [],
source: "close\x0a    TabManager current closeTab: self",
messageSends: ["closeTab:", "current"],
referencedClasses: ["TabManager"]
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_hide", []);
    return self;
},
args: [],
source: "hide\x0a\x09div asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "label\x0a    self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_addTab_", [self]);
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_selectTab_", [self]);
    return self;
},
args: [],
source: "open\x0a    TabManager current addTab: self.\x0a    TabManager current selectTab: self",
messageSends: ["addTab:", "current", "selectTab:"],
referencedClasses: ["TabManager"]
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
    return self;
},
args: [],
source: "remove\x0a\x09div asJQuery remove",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: "renderBoxOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    self['@div'] = function ($rec) {smalltalk.send($rec, "_class_", ["amberTool"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_div", []));
    smalltalk.send(self, "_renderTab", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div\x0a\x09\x09class: 'amberTool';\x0a\x09\x09yourself.\x0a\x09self renderTab",
messageSends: ["class:", "yourself", "div", "renderTab"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderTab",
smalltalk.method({
selector: "renderTab",
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(self['@div'], "_contents_", [function (html) {(function ($rec) {smalltalk.send($rec, "_class_", ["amber_box"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderBoxOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));return function ($rec) {smalltalk.send($rec, "_class_", ["amber_buttons"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderButtonsOn_", [html]);}]);}(smalltalk.send(html, "_div", []));}]);
    return self;
},
args: [],
source: "renderTab\x0a\x09div contents: [:html |\x0a\x09    html div\x0a\x09\x09class: 'amber_box';\x0a\x09\x09with: [self renderBoxOn: html].\x0a\x09    html div\x0a\x09\x09class: 'amber_buttons';\x0a\x09\x09with: [self renderButtonsOn: html]]",
messageSends: ["contents:", "class:", "with:", "renderBoxOn:", "div", "renderButtonsOn:"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_show", []);
    return self;
},
args: [],
source: "show\x0a\x09div asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(self, "_renderTab", []);
    return self;
},
args: [],
source: "update\x0a\x09self renderTab",
messageSends: ["renderTab"],
referencedClasses: []
}),
smalltalk.TabWidget);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
    return self;
},
args: [],
source: "open\x0a    ^self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
smalltalk.addMethod(
"_addInstanceVariableNamed_toClass_",
smalltalk.method({
selector: "addInstanceVariableNamed:toClass:",
category: 'actions',
fn: function (aString, aClass) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_addSubclassOf_named_instanceVariableNames_package_", [smalltalk.send(aClass, "_superclass", []), smalltalk.send(aClass, "_name", []), function ($rec) {smalltalk.send($rec, "_add_", [aString]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_copy", [])), smalltalk.send(smalltalk.send(aClass, "_package", []), "_name", [])]);
    return self;
},
args: ["aString", "aClass"],
source: "addInstanceVariableNamed: aString toClass: aClass\x0a\x09ClassBuilder new\x0a\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09named: aClass name \x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "new", "superclass", "name", "add:", "yourself", "copy", "instanceVariableNames", "package"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewClass",
smalltalk.method({
selector: "addNewClass",
category: 'actions',
fn: function () {
    var self = this;
    var className = nil;
    className = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", ["New class"]);
    ($receiver = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [function () {return smalltalk.send(className, "_notEmpty", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.Object || Object, "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);(function ($rec) {smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.Object || Object, "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);(function ($rec) {smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);}]);
    return self;
},
args: [],
source: "addNewClass\x0a\x09| className |\x0a\x09className := window prompt: 'New class'.\x0a\x09(className notNil and: [className notEmpty]) ifTrue: [\x0a\x09\x09Object subclass: className instanceVariableNames: '' package: self selectedPackage.\x0a          \x09 self \x0a\x09\x09\x09resetClassesList;\x0a\x09\x09\x09updateClassesList.\x0a\x09\x09self selectClass: (Smalltalk current at: className)]",
messageSends: ["prompt:", "ifTrue:", "and:", "notNil", "notEmpty", "subclass:instanceVariableNames:package:", "selectedPackage", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current"],
referencedClasses: ["Object", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewProtocol",
smalltalk.method({
selector: "addNewProtocol",
category: 'actions',
fn: function () {
    var self = this;
    var newProtocol = nil;
    newProtocol = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", ["New method protocol"]);
    ($receiver = smalltalk.send(smalltalk.send(newProtocol, "_notNil", []), "_and_", [function () {return smalltalk.send(newProtocol, "_notEmpty", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);}]);
    return self;
},
args: [],
source: "addNewProtocol\x0a    | newProtocol |\x0a    newProtocol := window prompt: 'New method protocol'.\x0a    (newProtocol notNil and: [newProtocol notEmpty]) ifTrue: [\x0a\x09selectedMethod category: newProtocol.\x0a\x09self setMethodProtocol: newProtocol]",
messageSends: ["prompt:", "ifTrue:", "and:", "notNil", "notEmpty", "category:", "setMethodProtocol:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_ajaxPutAt_data_",
smalltalk.method({
selector: "ajaxPutAt:data:",
category: 'network',
fn: function (anURL, aString) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [anURL, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]), smalltalk.send("data", "__minus_gt", [aString]), smalltalk.send("contentType", "__minus_gt", ["text/plain;charset=UTF-8"]), smalltalk.send("error", "__minus_gt", [function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send("PUT request failed at:  ", "__comma", [anURL])]);}])])]);
    return self;
},
args: ["anURL", "aString"],
source: "ajaxPutAt: anURL data: aString\x0a\x09jQuery \x0a\x09\x09ajax: anURL\x09options: #{\x09'type' -> 'PUT'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09\x09\x09\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09'error' -> [window alert: 'PUT request failed at:  ', anURL] }",
messageSends: ["ajax:options:", "->", "alert:", ","],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
args: [],
source: "canBeClosed\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_cancelChanges",
smalltalk.method({
selector: "cancelChanges",
category: 'actions',
fn: function () {
    var self = this;
    return ($receiver = self['@unsavedChanges']).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", ["Cancel changes?"]);}() : function () {return true;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", ["Cancel changes?"]);}, function () {return true;}]);
    return self;
},
args: [],
source: "cancelChanges\x0a    ^unsavedChanges \x0a\x09ifTrue: [window confirm: 'Cancel changes?']\x0a\x09ifFalse: [true]",
messageSends: ["ifTrue:ifFalse:", "confirm:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classCommentSource",
smalltalk.method({
selector: "classCommentSource",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@selectedClass'], "_comment", []);
    return self;
},
args: [],
source: "classCommentSource\x0a    ^selectedClass comment",
messageSends: ["comment"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationSource",
smalltalk.method({
selector: "classDeclarationSource",
category: 'accessing',
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
},
args: [],
source: "classDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09selectedClass ifNil: [^self classDeclarationTemplate].\x0a\x09stream \x0a\x09    nextPutAll: selectedClass superclass asString;\x0a\x09    nextPutAll: ' subclass: #';\x0a\x09    nextPutAll: selectedClass name;\x0a\x09    nextPutAll: String lf, String tab;\x0a\x09    nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass instanceVariableNames \x0a\x09    do: [:each | stream nextPutAll: each] \x0a\x09    separatedBy: [stream nextPutAll: ' '].\x0a\x09stream\x0a\x09    nextPutAll: '''', String lf, String tab;\x0a\x09    nextPutAll: 'package: ''';\x0a\x09    nextPutAll: selectedClass category;\x0a\x09    nextPutAll: ''''.\x0a\x09^stream contents",
messageSends: ["writeStream", "ifNil:", "classDeclarationTemplate", "nextPutAll:", "asString", "superclass", "name", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "contents"],
referencedClasses: ["String"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationTemplate",
smalltalk.method({
selector: "classDeclarationTemplate",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("Object subclass: #NameOfSubclass\n\tinstanceVariableNames: ''\n\tpackage: '", "__comma", [smalltalk.send(self, "_selectedPackage", [])]), "__comma", ["'"]);
    return self;
},
args: [],
source: "classDeclarationTemplate\x0a\x09^'Object subclass: #NameOfSubclass\x0a\x09instanceVariableNames: ''''\x0a\x09package: ''', self selectedPackage, ''''",
messageSends: [",", "selectedPackage"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedPackage']]);}]), "_sort_", [function (a, b) {return ($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number ? $receiver < smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]);}]), "_asSet", []);
    return self;
},
args: [],
source: "classes\x0a    ^((Smalltalk current classes \x0a\x09select: [:each | each category = selectedPackage])\x0a\x09sort: [:a :b | a name < b name]) asSet",
messageSends: ["asSet", "sort:", "select:", "classes", "current", "=", "category", "<", "name"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_commitPackage",
smalltalk.method({
selector: "commitPackage",
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = self['@selectedPackage']) != nil &&
        $receiver != undefined ? function () {var package = nil;package = smalltalk.send(smalltalk.Package || Package, "_named_", [self['@selectedPackage']]);return smalltalk.send([smalltalk.send(smalltalk.Exporter || Exporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".js"])]), smalltalk.send(smalltalk.StrippedExporter || StrippedExporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".deploy.js"])]), smalltalk.send(smalltalk.ChunkExporter || ChunkExporter, "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathSt", []), "__comma", ["/"]), "__comma", [self['@selectedPackage']]), "__comma", [".st"])])], "_do_", [function (commitStrategy) {var fileContents = nil;fileContents = smalltalk.send(smalltalk.send(smalltalk.send(commitStrategy, "_key", []), "_new", []), "_exportPackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_ajaxPutAt_data_", [smalltalk.send(commitStrategy, "_value", []), fileContents]);}]);}() : nil;
    return self;
},
args: [],
source: "commitPackage\x0a\x09selectedPackage ifNotNil: [ |package|\x0a               \x09\x09\x09\x09\x09\x09 package := Package named: selectedPackage.\x0a               \x09\x09\x09\x09\x09\x09 {\x09Exporter \x09\x09\x09-> (package commitPathJs, '/', selectedPackage, '.js').\x0a                        \x09\x09\x09\x09\x09StrippedExporter \x09-> (package commitPathJs, '/', selectedPackage, '.deploy.js').\x0a                       \x09\x09\x09\x09\x09\x09 ChunkExporter \x09\x09-> (package commitPathSt, '/', selectedPackage, '.st') \x09\x09\x09} \x0a                 \x0a                \x09\x09\x09\x09\x09\x09do: [:commitStrategy| |fileContents|\x0a                                                                     \x09fileContents := (commitStrategy key new exportPackage: selectedPackage).\x0a                                                                     \x09self ajaxPutAt: commitStrategy value data:  fileContents]\x0a         \x09\x09\x09\x09\x09\x09]",
messageSends: ["ifNotNil:", "named:", "do:", "->", ",", "commitPathJs", "commitPathSt", "exportPackage:", "new", "key", "ajaxPutAt:data:", "value"],
referencedClasses: ["Package", "Exporter", "StrippedExporter", "ChunkExporter"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compile",
smalltalk.method({
selector: "compile",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_disableSaveButton", []);
    ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = self['@selectedClass']) != nil && $receiver != undefined ? function () {return smalltalk.send(self, "_compileClassComment", []);}() : nil;}() : function () {return ($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_compileDefinition", []);}() : function () {return smalltalk.send(self, "_compileMethodDefinition", []);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_compileDefinition", []);}, function () {return smalltalk.send(self, "_compileMethodDefinition", []);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return ($receiver = self['@selectedClass']) != nil && $receiver != undefined ? function () {return smalltalk.send(self, "_compileClassComment", []);}() : nil;}, function () {return ($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [function () {return smalltalk.send(self['@selectedMethod'], "_notNil", []);}])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_compileDefinition", []);}() : function () {return smalltalk.send(self, "_compileMethodDefinition", []);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_compileDefinition", []);}, function () {return smalltalk.send(self, "_compileMethodDefinition", []);}]);}]);
    return self;
},
args: [],
source: "compile\x0a    self disableSaveButton.\x0a    selectedTab = #comment \x0a\x09ifTrue: [\x0a\x09\x09\x09selectedClass ifNotNil: [\x0a\x09\x09\x09\x09self compileClassComment]]\x0a\x09ifFalse: [\x0a\x09\x09\x09(selectedProtocol notNil or: [selectedMethod notNil])\x0a\x09\x09\x09\x09ifFalse: [self compileDefinition]\x0a\x09\x09\x09\x09ifTrue: [self compileMethodDefinition]]",
messageSends: ["disableSaveButton", "ifTrue:ifFalse:", "=", "ifNotNil:", "compileClassComment", "ifFalse:ifTrue:", "or:", "notNil", "compileDefinition", "compileMethodDefinition"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileClassComment",
smalltalk.method({
selector: "compileClassComment",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self['@selectedClass'], "_comment_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
    return self;
},
args: [],
source: "compileClassComment\x0a    selectedClass comment: sourceArea val",
messageSends: ["comment:", "val"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileDefinition",
smalltalk.method({
selector: "compileDefinition",
category: 'actions',
fn: function () {
    var self = this;
    var newClass = nil;
    newClass = smalltalk.send(smalltalk.send(smalltalk.Compiler || Compiler, "_new", []), "_evaluateExpression_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
    (function ($rec) {smalltalk.send($rec, "_resetClassesList", []);smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));
    smalltalk.send(self, "_selectClass_", [newClass]);
    return self;
},
args: [],
source: "compileDefinition\x0a    | newClass |\x0a    newClass := Compiler new evaluateExpression: sourceArea val.\x0a    self \x0a\x09resetClassesList;\x0a\x09updateCategoriesList;\x0a\x09updateClassesList.\x0a    self selectClass: newClass",
messageSends: ["evaluateExpression:", "new", "val", "resetClassesList", "updateCategoriesList", "updateClassesList", "selectClass:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinition",
smalltalk.method({
selector: "compileMethodDefinition",
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);}() : function () {return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);}, function () {return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);}]);
    return self;
},
args: [],
source: "compileMethodDefinition\x0a    selectedTab = #instance\x0a\x09ifTrue: [self compileMethodDefinitionFor: selectedClass]\x0a\x09ifFalse: [self compileMethodDefinitionFor: selectedClass class]",
messageSends: ["ifTrue:ifFalse:", "=", "compileMethodDefinitionFor:", "class"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinitionFor_",
smalltalk.method({
selector: "compileMethodDefinitionFor:",
category: 'actions',
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
},
args: ["aClass"],
source: "compileMethodDefinitionFor: aClass\x0a    | compiler method source node | \x0a    source := sourceArea val.\x0a    selectedProtocol ifNil: [selectedProtocol := selectedMethod category].\x0a    compiler := Compiler new.\x0a    compiler source: source.\x0a    node := compiler parse: source.\x0a    node isParseFailure ifTrue: [\x0a\x09^window alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].\x0a    compiler currentClass: aClass.\x0a    method := compiler eval: (compiler compileNode: node).\x0a    method category: selectedProtocol.\x0a    compiler unknownVariables do: [:each |\x0a         \x22Do not try to redeclare javascript's objects\x22\x0a         (window at: each) ifNil: [\x0a\x09 \x09(window confirm: 'Declare ''', each, ''' as instance variable?') ifTrue: [\x0a\x09\x09\x09self addInstanceVariableNamed: each toClass: aClass.\x0a\x09\x09\x09^self compileMethodDefinitionFor: aClass]]].\x0a    aClass addCompiledMethod: method.\x0a    compiler setupClass: aClass.\x0a    self updateMethodsList.\x0a    self selectMethod: method",
messageSends: ["val", "ifNil:", "category", "new", "source:", "parse:", "ifTrue:", "isParseFailure", "alert:", ",", "reason", "asString", "position", "currentClass:", "eval:", "compileNode:", "category:", "do:", "unknownVariables", "at:", "confirm:", "addInstanceVariableNamed:toClass:", "compileMethodDefinitionFor:", "addCompiledMethod:", "setupClass:", "updateMethodsList", "selectMethod:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_copyClass",
smalltalk.method({
selector: "copyClass",
category: 'actions',
fn: function () {
    var self = this;
    var className = nil;
    className = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", ["Copy class"]);
    ($receiver = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [function () {return smalltalk.send(className, "_notEmpty", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_copyClass_named_", [smalltalk.send(self, "_selectedClass", []), className]);(function ($rec) {smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_copyClass_named_", [smalltalk.send(self, "_selectedClass", []), className]);(function ($rec) {smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);}(self));return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [className])]);}]);
    return self;
},
args: [],
source: "copyClass\x0a\x09| className |\x0a\x09className := window prompt: 'Copy class'.\x0a\x09(className notNil and: [className notEmpty]) ifTrue: [\x0a\x09\x09ClassBuilder new copyClass: self selectedClass named: className.\x0a          \x09 self \x0a\x09\x09\x09resetClassesList;\x0a\x09\x09\x09updateClassesList.\x0a\x09\x09self selectClass: (Smalltalk current at: className)]",
messageSends: ["prompt:", "ifTrue:", "and:", "notNil", "notEmpty", "copyClass:named:", "new", "selectedClass", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current"],
referencedClasses: ["ClassBuilder", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_declarationSource",
smalltalk.method({
selector: "declarationSource",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_classDeclarationSource", []);}() : function () {return smalltalk.send(self, "_metaclassDeclarationSource", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_classDeclarationSource", []);}, function () {return smalltalk.send(self, "_metaclassDeclarationSource", []);}]);
    return self;
},
args: [],
source: "declarationSource\x0a    ^selectedTab = #instance\x0a\x09ifTrue: [self classDeclarationSource]\x0a\x09ifFalse: [self metaclassDeclarationSource]",
messageSends: ["ifTrue:ifFalse:", "=", "classDeclarationSource", "metaclassDeclarationSource"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_disableSaveButton",
smalltalk.method({
selector: "disableSaveButton",
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);}() : nil;
    self['@unsavedChanges'] = false;
    return self;
},
args: [],
source: "disableSaveButton\x0a    saveButton ifNotNil: [\x0a\x09saveButton at: 'disabled' put: true].\x0a    unsavedChanges := false",
messageSends: ["ifNotNil:", "at:put:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_dummyMethodSource",
smalltalk.method({
selector: "dummyMethodSource",
category: 'accessing',
fn: function () {
    var self = this;
    return "messageSelectorAndArgumentNames\n\t\"comment stating purpose of message\"\n\n\t| temporary variable names |\n\tstatements";
    return self;
},
args: [],
source: "dummyMethodSource\x0a    ^'messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_handleSourceAreaKeyDown_",
smalltalk.method({
selector: "handleSourceAreaKeyDown:",
category: 'actions',
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
},
args: ["anEvent"],
source: "handleSourceAreaKeyDown: anEvent\x0a\x09 <if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 83) { //ctrl+s\x0a\x09\x09\x09self._compile();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideClassButtons",
smalltalk.method({
selector: "hideClassButtons",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_hide", []);
    return self;
},
args: [],
source: "hideClassButtons\x0a    classButtons asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideMethodButtons",
smalltalk.method({
selector: "hideMethodButtons",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_hide", []);
    return self;
},
args: [],
source: "hideMethodButtons\x0a    methodButtons asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Browser.superclass || nil);
    self['@selectedTab'] = smalltalk.symbolFor("instance");
    self['@selectedPackage'] = smalltalk.send(smalltalk.send(self, "_packages", []), "_first", []);
    self['@unsavedChanges'] = false;
    return self;
},
args: [],
source: "initialize\x0a    super initialize.\x0a    selectedTab := #instance.\x0a    selectedPackage := self packages first.\x0a    unsavedChanges := false",
messageSends: ["initialize", "first", "packages"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@selectedClass']) == nil ||
        $receiver == undefined ? function () {return "Browser (nil)";}() : function () {return smalltalk.send("Browser: ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]);}();
    return self;
},
args: [],
source: "label\x0a    ^selectedClass \x0a\x09ifNil: ['Browser (nil)']\x0a\x09ifNotNil: ['Browser: ', selectedClass name]",
messageSends: ["ifNil:ifNotNil:", ",", "name"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_metaclassDeclarationSource",
smalltalk.method({
selector: "metaclassDeclarationSource",
category: 'accessing',
fn: function () {
    var self = this;
    var stream = nil;
    stream = smalltalk.send("", "_writeStream", []);
    ($receiver = self['@selectedClass']) != nil &&
        $receiver != undefined ? function () {(function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [" class "]);return smalltalk.send($rec, "_nextPutAll_", ["instanceVariableNames: '"]);}(stream));smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(stream, "_nextPutAll_", [each]);}, function () {return smalltalk.send(stream, "_nextPutAll_", [" "]);}]);return smalltalk.send(stream, "_nextPutAll_", ["'"]);}() : nil;
    return smalltalk.send(stream, "_contents", []);
    return self;
},
args: [],
source: "metaclassDeclarationSource\x0a    | stream |\x0a    stream := '' writeStream.\x0a    selectedClass ifNotNil: [\x0a\x09stream \x0a\x09    nextPutAll: selectedClass asString;\x0a\x09    nextPutAll: ' class ';\x0a\x09    nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass class instanceVariableNames\x0a\x09    do: [:each | stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ' '].\x0a\x09stream nextPutAll: ''''].\x0a    ^stream contents",
messageSends: ["writeStream", "ifNotNil:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames", "class", "contents"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methodSource",
smalltalk.method({
selector: "methodSource",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@selectedMethod']) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(self, "_dummyMethodSource", []);}() : function () {return smalltalk.send(self['@selectedMethod'], "_source", []);}();
    return self;
},
args: [],
source: "methodSource\x0a    ^selectedMethod\x0a\x09ifNil: [self dummyMethodSource]\x0a\x09ifNotNil: [selectedMethod source]",
messageSends: ["ifNil:ifNotNil:", "dummyMethodSource", "source"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methods",
smalltalk.method({
selector: "methods",
category: 'accessing',
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
},
args: [],
source: "methods\x0a    | klass |\x0a    selectedTab = #comment ifTrue: [^#()].\x0a    selectedClass ifNotNil: [\x0a\x09klass := selectedTab = #instance\x0a\x09    ifTrue: [selectedClass]\x0a\x09    ifFalse: [selectedClass class]].\x0a    ^(selectedProtocol \x0a\x09ifNil: [\x0a\x09    klass \x0a\x09\x09ifNil: [#()] \x0a\x09\x09ifNotNil: [klass methodDictionary values]]\x0a\x09ifNotNil: [\x0a\x09    klass methodDictionary values select: [:each |\x0a\x09\x09each category = selectedProtocol]]) sort: [:a :b | a selector < b selector]",
messageSends: ["ifTrue:", "=", "ifNotNil:", "ifTrue:ifFalse:", "class", "sort:", "ifNil:ifNotNil:", "values", "methodDictionary", "select:", "category", "<", "selector"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function () {
    var self = this;
    var packages = nil;
    packages = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_do_", [function (each) {return ($receiver = smalltalk.send(packages, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);}]);}]);
    return smalltalk.send(packages, "_sort", []);
    return self;
},
args: [],
source: "packages\x0a    | packages |\x0a    packages := Array new.\x0a    Smalltalk current classes do: [:each |\x0a\x09(packages includes: each category) ifFalse: [\x0a\x09    packages add: each category]].\x0a    ^packages sort",
messageSends: ["new", "do:", "classes", "current", "ifFalse:", "includes:", "category", "add:", "sort"],
referencedClasses: ["Array", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
category: 'accessing',
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
},
args: [],
source: "protocols\x0a    | klass |\x0a    selectedClass ifNotNil: [\x0a\x09selectedTab = #comment ifTrue: [^#()].\x0a\x09klass := selectedTab = #instance\x0a\x09    ifTrue: [selectedClass]\x0a\x09    ifFalse: [selectedClass class].\x0a\x09klass methodDictionary isEmpty ifTrue: [\x0a\x09    ^Array with: 'not yet classified'].\x0a\x09^klass protocols].\x0a    ^Array new",
messageSends: ["ifNotNil:", "ifTrue:", "=", "ifTrue:ifFalse:", "class", "isEmpty", "methodDictionary", "with:", "protocols", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeClass",
smalltalk.method({
selector: "removeClass",
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]), "__comma", ["?"])])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);}]);
    return self;
},
args: [],
source: "removeClass\x0a    (window confirm: 'Do you really want to remove ', selectedClass name, '?')\x0a\x09ifTrue: [\x0a\x09    Smalltalk current removeClass: selectedClass.\x0a\x09    self resetClassesList.\x0a\x09    self selectClass: nil]",
messageSends: ["ifTrue:", "confirm:", ",", "name", "removeClass:", "current", "resetClassesList", "selectClass:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeMethod",
smalltalk.method({
selector: "removeMethod",
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove #", "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", ["?"])])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}() : function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}, function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}]);return smalltalk.send(self, "_selectMethod_", [nil]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}() : function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}, function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}]);return smalltalk.send(self, "_selectMethod_", [nil]);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove #", "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", ["?"])])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}() : function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}, function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}]);return smalltalk.send(self, "_selectMethod_", [nil]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}() : function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}, function () {return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);}]);return smalltalk.send(self, "_selectMethod_", [nil]);}]);}]);
    return self;
},
args: [],
source: "removeMethod\x0a    self cancelChanges ifTrue: [\x0a\x09(window confirm: 'Do you really want to remove #', selectedMethod selector, '?')\x0a\x09    ifTrue: [\x0a\x09\x09selectedTab = #instance \x0a\x09\x09\x09ifTrue: [selectedClass removeCompiledMethod: selectedMethod]\x0a\x09\x09\x09ifFalse: [selectedClass class removeCompiledMethod: selectedMethod].\x0a\x09\x09self selectMethod: nil]]",
messageSends: ["ifTrue:", "cancelChanges", "confirm:", ",", "selector", "ifTrue:ifFalse:", "=", "removeCompiledMethod:", "class", "selectMethod:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removePackage",
smalltalk.method({
selector: "removePackage",
category: 'actions',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove the whole package ", "__comma", [self['@selectedPackage']]), "__comma", [" with all its classes?"])])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removePackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_updateCategoriesList", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removePackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_updateCategoriesList", []);}]);
    return self;
},
args: [],
source: "removePackage\x0a\x0a  (window confirm: 'Do you really want to remove the whole package ', selectedPackage, ' with all its classes?')\x0a\x09ifTrue: [\x0a\x09    Smalltalk current removePackage: selectedPackage.\x0a\x09    self updateCategoriesList]",
messageSends: ["ifTrue:", "confirm:", ",", "removePackage:", "current", "updateCategoriesList"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renameClass",
smalltalk.method({
selector: "renameClass",
category: 'actions',
fn: function () {
    var self = this;
    var newName = nil;
    newName = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", [smalltalk.send("Rename class ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])])]);
    ($receiver = smalltalk.send(smalltalk.send(newName, "_notNil", []), "_and_", [function () {return smalltalk.send(newName, "_notEmpty", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return function ($rec) {smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return function ($rec) {smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
},
args: [],
source: "renameClass\x0a    | newName |\x0a    newName := window prompt: 'Rename class ', selectedClass name.\x0a    (newName notNil and: [newName notEmpty]) ifTrue: [\x0a\x09selectedClass rename: newName.\x0a\x09self \x0a\x09\x09updateClassesList;\x0a\x09\x09updateSourceAndButtons]",
messageSends: ["prompt:", ",", "name", "ifTrue:", "and:", "notNil", "notEmpty", "rename:", "updateClassesList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renamePackage",
smalltalk.method({
selector: "renamePackage",
category: 'actions',
fn: function () {
    var self = this;
    var newName = nil;
    newName = smalltalk.send(typeof window == "undefined" ? nil : window, "_prompt_", [smalltalk.send("Rename package ", "__comma", [self['@selectedPackage']])]);
    ($receiver = newName) != nil && $receiver != undefined ? function () {return ($receiver = smalltalk.send(newName, "_notEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);return smalltalk.send(self, "_updateCategoriesList", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);return smalltalk.send(self, "_updateCategoriesList", []);}]);}() : nil;
    return self;
},
args: [],
source: "renamePackage\x0a\x0a  | newName |\x0a  newName := window prompt: 'Rename package ', selectedPackage.\x0a  newName ifNotNil: [\x0a    newName notEmpty ifTrue: [\x0a\x09Smalltalk current renamePackage: selectedPackage to: newName.\x0a\x09self updateCategoriesList]]",
messageSends: ["prompt:", ",", "ifNotNil:", "ifTrue:", "notEmpty", "renamePackage:to:", "current", "updateCategoriesList"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["amber_sourceCode"]);return smalltalk.send($rec, "_with_", [function () {self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);smalltalk.send(self['@sourceArea'], "_onKeyDown_", [function (e) {return smalltalk.send(self, "_handleSourceAreaKeyDown_", [e]);}]);return smalltalk.send(self['@sourceArea'], "_onKeyUp_", [function () {return smalltalk.send(self, "_updateStatus", []);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBottomPanelOn: html\x0a    html div\x0a\x09class: 'amber_sourceCode';\x0a\x09with: [\x0a\x09    sourceArea := SourceArea new.\x0a\x09    sourceArea renderOn: html.\x0a            sourceArea onKeyDown: [:e |\x0a                                   self handleSourceAreaKeyDown: e].\x0a\x09    sourceArea onKeyUp: [self updateStatus]]",
messageSends: ["class:", "with:", "new", "renderOn:", "onKeyDown:", "handleSourceAreaKeyDown:", "onKeyUp:", "updateStatus", "div"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_renderTopPanelOn_", [html]);smalltalk.send($rec, "_renderTabsOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);}(self));
    return self;
},
args: ["html"],
source: "renderBoxOn: html\x0a    self \x0a\x09renderTopPanelOn: html;\x0a\x09renderTabsOn: html;\x0a\x09renderBottomPanelOn: html",
messageSends: ["renderTopPanelOn:", "renderTabsOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    self['@saveButton'] = smalltalk.send(html, "_button", []);
    (function ($rec) {smalltalk.send($rec, "_with_", ["Save"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_compile", []);}]);}(self['@saveButton']));
    self['@methodButtons'] = smalltalk.send(html, "_span", []);
    self['@classButtons'] = smalltalk.send(html, "_span", []);
    (function ($rec) {smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_doIt", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_printIt", []);}]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_inspectIt", []);}]);}(smalltalk.send(html, "_button", []));}]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(self, "_updateSourceAndButtons", []);
    return self;
},
args: ["html"],
source: "renderButtonsOn: html\x0a    saveButton := html button.\x0a    saveButton \x0a\x09with: 'Save';\x0a\x09onClick: [self compile].\x0a    methodButtons := html span.\x0a    classButtons := html span.\x0a    html div \x0a\x09class: 'right';\x0a\x09with: [\x0a\x09\x09html button\x0a\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09onClick: [sourceArea doIt].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09onClick: [sourceArea printIt].\x0a\x09\x09html button with: 'InspectIt';\x0a\x09\x09\x09onClick: [sourceArea inspectIt]]. \x0a    self updateSourceAndButtons",
messageSends: ["button", "with:", "onClick:", "compile", "span", "class:", "doIt", "printIt", "inspectIt", "div", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    self['@tabsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_tabs amber_browser"]);
    smalltalk.send(self, "_updateTabsList", []);
    return self;
},
args: ["html"],
source: "renderTabsOn: html\x0a    tabsList := html ul class: 'amber_tabs amber_browser'.\x0a    self updateTabsList.",
messageSends: ["class:", "ul", "updateTabsList"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [function () {self['@packagesList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser packages"]);(function ($rec) {smalltalk.send($rec, "_class_", ["amber_packagesButtons"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_title_", ["Commit classes in this package to disk"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_commitPackage", []);}]);return smalltalk.send($rec, "_with_", ["Commit"]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_title_", ["Rename package"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_renamePackage", []);}]);return smalltalk.send($rec, "_with_", ["Rename"]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_title_", ["Remove this package from the system"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_removePackage", []);}]);return smalltalk.send($rec, "_with_", ["Remove"]);}(smalltalk.send(html, "_button", []));}]);}(smalltalk.send(html, "_div", [])));self['@classesList'] = smalltalk.send(smalltalk.ClassesList || ClassesList, "_on_", [self]);smalltalk.send(self['@classesList'], "_renderOn_", [html]);self['@protocolsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser protocols"]);self['@methodsList'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column browser methods"]);(function ($rec) {smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);return smalltalk.send($rec, "_updateMethodsList", []);}(self));return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["amber_clear"]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09html div \x0a\x09\x09class: 'top'; \x0a\x09\x09with: [\x0a\x09\x09\x09packagesList := html ul class: 'amber_column browser packages'.\x0a          \x09\x09html div class: 'amber_packagesButtons'; with: [\x0a\x09\x09\x09\x09html button \x0a\x09\x09\x09\x09\x09title: 'Commit classes in this package to disk';\x0a\x09\x09\x09\x09\x09onClick: [self commitPackage];\x0a\x09\x09\x09\x09\x09with: 'Commit'.\x0a        \x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Rename package';\x0a\x09\x09\x09\x09\x09onClick: [self renamePackage];\x0a\x09\x09\x09\x09\x09with: 'Rename'.\x0a        \x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Remove this package from the system';\x0a\x09\x09\x09\x09\x09onClick: [self removePackage];\x0a\x09\x09\x09\x09\x09with: 'Remove'].\x0a\x09\x09\x09classesList := ClassesList on: self.\x0a\x09\x09\x09classesList renderOn: html.\x0a\x09\x09\x09protocolsList := html ul class: 'amber_column browser protocols'.\x0a\x09\x09\x09methodsList := html ul class: 'amber_column browser methods'.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09updateCategoriesList;\x0a\x09\x09\x09\x09updateClassesList;\x0a\x09\x09\x09\x09updateProtocolsList;\x0a\x09\x09\x09\x09updateMethodsList.\x0a\x09\x09\x09html div class: 'amber_clear']",
messageSends: ["class:", "with:", "ul", "title:", "onClick:", "commitPackage", "button", "renamePackage", "removePackage", "div", "on:", "renderOn:", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList"],
referencedClasses: ["ClassesList"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_resetClassesList",
smalltalk.method({
selector: "resetClassesList",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self['@classesList'], "_resetNodes", []);
    return self;
},
args: [],
source: "resetClassesList\x0a\x09classesList resetNodes",
messageSends: ["resetNodes"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {var searchedClass = nil;searchedClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);return ($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}() : function () {return smalltalk.send(self, "_searchReferencesOf_", [aString]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}, function () {return smalltalk.send(self, "_searchReferencesOf_", [aString]);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {var searchedClass = nil;searchedClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);return ($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}() : function () {return smalltalk.send(self, "_searchReferencesOf_", [aString]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}, function () {return smalltalk.send(self, "_searchReferencesOf_", [aString]);}]);}]);
    return self;
},
args: ["aString"],
source: "search: aString\x0a\x09self cancelChanges ifTrue: [| searchedClass |\x0a\x09\x09searchedClass := Smalltalk current at: aString.\x0a\x09\x09searchedClass isClass\x0a\x09\x09\x09ifTrue: [self class openOn: searchedClass]\x0a\x09\x09\x09ifFalse: [self searchReferencesOf: aString]]",
messageSends: ["ifTrue:", "cancelChanges", "at:", "current", "ifTrue:ifFalse:", "isClass", "openOn:", "class", "searchReferencesOf:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchClassReferences",
smalltalk.method({
selector: "searchClassReferences",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [smalltalk.send(self['@selectedClass'], "_name", [])]);
    return self;
},
args: [],
source: "searchClassReferences\x0a\x09ReferencesBrowser search: selectedClass name",
messageSends: ["search:", "name"],
referencedClasses: ["ReferencesBrowser"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchReferencesOf_",
smalltalk.method({
selector: "searchReferencesOf:",
category: 'actions',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.ReferencesBrowser || ReferencesBrowser, "_search_", [aString]);
    return self;
},
args: ["aString"],
source: "searchReferencesOf: aString\x0a\x09ReferencesBrowser search: aString",
messageSends: ["search:"],
referencedClasses: ["ReferencesBrowser"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectCategory_",
smalltalk.method({
selector: "selectCategory:",
category: 'actions',
fn: function (aCategory) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedPackage'] = aCategory;self['@selectedClass'] = self['@selectedProtocol'] = self['@selectedMethod'] = nil;smalltalk.send(self, "_resetClassesList", []);return function ($rec) {smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedPackage'] = aCategory;self['@selectedClass'] = self['@selectedProtocol'] = self['@selectedMethod'] = nil;smalltalk.send(self, "_resetClassesList", []);return function ($rec) {smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
},
args: ["aCategory"],
source: "selectCategory: aCategory\x0a    self cancelChanges ifTrue: [\x0a\x09selectedPackage := aCategory.\x0a\x09selectedClass := selectedProtocol := selectedMethod :=  nil.\x0a\x09self resetClassesList.\x0a\x09self \x0a\x09    updateCategoriesList;\x0a\x09    updateClassesList;\x0a\x09    updateProtocolsList;\x0a\x09    updateMethodsList;\x0a\x09    updateSourceAndButtons]",
messageSends: ["ifTrue:", "cancelChanges", "resetClassesList", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectClass_",
smalltalk.method({
selector: "selectClass:",
category: 'actions',
fn: function (aClass) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedClass'] = aClass;self['@selectedProtocol'] = self['@selectedMethod'] = nil;return function ($rec) {smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedClass'] = aClass;self['@selectedProtocol'] = self['@selectedMethod'] = nil;return function ($rec) {smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
},
args: ["aClass"],
source: "selectClass: aClass\x0a    self cancelChanges ifTrue: [\x0a\x09selectedClass := aClass.\x0a\x09selectedProtocol := selectedMethod := nil.\x0a\x09self \x0a\x09    updateClassesList;\x0a\x09    updateProtocolsList;\x0a\x09    updateMethodsList;\x0a\x09    updateSourceAndButtons]",
messageSends: ["ifTrue:", "cancelChanges", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectMethod_",
smalltalk.method({
selector: "selectMethod:",
category: 'actions',
fn: function (aMethod) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedMethod'] = aMethod;return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedMethod'] = aMethod;return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
},
args: ["aMethod"],
source: "selectMethod: aMethod\x0a    self cancelChanges ifTrue: [\x0a\x09selectedMethod := aMethod.\x0a\x09self \x0a\x09    updateProtocolsList;\x0a\x09    updateMethodsList;\x0a\x09    updateSourceAndButtons]",
messageSends: ["ifTrue:", "cancelChanges", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectProtocol_",
smalltalk.method({
selector: "selectProtocol:",
category: 'actions',
fn: function (aString) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedProtocol'] = aString;self['@selectedMethod'] = nil;return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedProtocol'] = aString;self['@selectedMethod'] = nil;return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);
    return self;
},
args: ["aString"],
source: "selectProtocol: aString\x0a    self cancelChanges ifTrue: [\x0a\x09selectedProtocol := aString.\x0a\x09selectedMethod := nil.\x0a\x09self \x0a\x09    updateProtocolsList;\x0a\x09    updateMethodsList;\x0a\x09    updateSourceAndButtons]",
messageSends: ["ifTrue:", "cancelChanges", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
category: 'actions',
fn: function (aString) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {self['@selectedTab'] = aString;smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@selectedTab'] = aString;smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);}]);
    return self;
},
args: ["aString"],
source: "selectTab: aString\x0a    self cancelChanges ifTrue: [\x0a\x09selectedTab := aString.\x0a\x09self selectProtocol: nil.\x0a\x09self updateTabsList]",
messageSends: ["ifTrue:", "cancelChanges", "selectProtocol:", "updateTabsList"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectedClass'];
    return self;
},
args: [],
source: "selectedClass\x0a\x09^selectedClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selectedPackage'];
    return self;
},
args: [],
source: "selectedPackage\x0a\x09^selectedPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_setMethodProtocol_",
smalltalk.method({
selector: "setMethodProtocol:",
category: 'actions',
fn: function (aString) {
    var self = this;
    ($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_addNewProtocol", []);}() : function () {smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol'] = aString;self['@selectedMethod'] = self['@selectedMethod'];return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_addNewProtocol", []);}, function () {smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol'] = aString;self['@selectedMethod'] = self['@selectedMethod'];return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return ($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_addNewProtocol", []);}() : function () {smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol'] = aString;self['@selectedMethod'] = self['@selectedMethod'];return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_addNewProtocol", []);}, function () {smalltalk.send(self['@selectedMethod'], "_category_", [aString]);self['@selectedProtocol'] = aString;self['@selectedMethod'] = self['@selectedMethod'];return function ($rec) {smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);}(self);}]);}]);
    return self;
},
args: ["aString"],
source: "setMethodProtocol: aString\x0a    self cancelChanges ifTrue: [\x0a\x09(self protocols includes: aString)\x0a\x09    ifFalse: [self addNewProtocol]\x0a\x09    ifTrue: [\x0a\x09\x09selectedMethod category: aString.\x0a\x09\x09selectedProtocol := aString.\x0a\x09\x09selectedMethod := selectedMethod.\x0a\x09\x09self \x0a\x09\x09    updateProtocolsList;\x0a\x09\x09    updateMethodsList;\x0a\x09\x09    updateSourceAndButtons]]",
messageSends: ["ifTrue:", "cancelChanges", "ifFalse:ifTrue:", "includes:", "protocols", "addNewProtocol", "category:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showClassButtons",
smalltalk.method({
selector: "showClassButtons",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_show", []);
    return self;
},
args: [],
source: "showClassButtons\x0a    classButtons asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showMethodButtons",
smalltalk.method({
selector: "showMethodButtons",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_show", []);
    return self;
},
args: [],
source: "showMethodButtons\x0a    methodButtons asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
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
},
args: [],
source: "source\x0a    selectedTab = #comment ifFalse: [\x0a\x09^(selectedProtocol notNil or: [selectedMethod notNil])\x0a\x09    ifFalse: [self declarationSource]\x0a\x09    ifTrue: [self methodSource]].\x0a    ^selectedClass\x0a\x09ifNil: ['']\x0a\x09ifNotNil: [self classCommentSource]",
messageSends: ["ifFalse:", "=", "ifFalse:ifTrue:", "or:", "notNil", "declarationSource", "methodSource", "ifNil:ifNotNil:", "classCommentSource"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self['@packagesList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [function (each) {var li = nil;var label = nil;($receiver = smalltalk.send(each, "_isEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {return label = "Unclassified";}() : function () {return label = each;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return label = "Unclassified";}, function () {return label = each;}]);li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedPackage'], "__eq", [each])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);return function ($rec) {smalltalk.send($rec, "_with_", [label]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectCategory_", [each]);}]);}(li);}]);}]);
    return self;
},
args: [],
source: "updateCategoriesList\x0a    packagesList contents: [:html |\x0a\x09self packages do: [:each || li label |\x0a\x09    each isEmpty \x0a\x09\x09ifTrue: [label := 'Unclassified']\x0a\x09\x09ifFalse: [label := each].\x0a\x09    li := html li.\x0a\x09    selectedPackage = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09    li\x0a\x09\x09with: label;\x0a\x09\x09onClick: [self selectCategory: each]]]",
messageSends: ["contents:", "do:", "packages", "ifTrue:ifFalse:", "isEmpty", "li", "ifTrue:", "=", "class:", "with:", "onClick:", "selectCategory:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_update", []);
    smalltalk.send(self['@classesList'], "_updateNodes", []);
    return self;
},
args: [],
source: "updateClassesList\x0a    TabManager current update.\x0a    classesList updateNodes",
messageSends: ["update", "current", "updateNodes"],
referencedClasses: ["TabManager"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self['@methodsList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [function (each) {var li = nil;li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedMethod'], "__eq", [each])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);return function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(each, "_selector", [])]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectMethod_", [each]);}]);}(li);}]);}]);
    return self;
},
args: [],
source: "updateMethodsList\x0a    methodsList contents: [:html |\x0a\x09self methods do: [:each || li |\x0a\x09    li := html li.\x0a\x09    selectedMethod = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09    li\x0a\x09\x09with: each selector;\x0a\x09\x09onClick: [self selectMethod: each]]]",
messageSends: ["contents:", "do:", "methods", "li", "ifTrue:", "=", "class:", "with:", "selector", "onClick:", "selectMethod:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateProtocolsList",
smalltalk.method({
selector: "updateProtocolsList",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self['@protocolsList'], "_contents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [function (each) {var li = nil;li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedProtocol'], "__eq", [each])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);return function ($rec) {smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectProtocol_", [each]);}]);}(li);}]);}]);
    return self;
},
args: [],
source: "updateProtocolsList\x0a    protocolsList contents: [:html |\x0a\x09self protocols do: [:each || li |\x0a\x09    li := html li.\x0a\x09    selectedProtocol = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09    li \x0a\x09\x09with: each;\x0a\x09\x09onClick: [self selectProtocol: each]]]",
messageSends: ["contents:", "do:", "protocols", "li", "ifTrue:", "=", "class:", "with:", "onClick:", "selectProtocol:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateSourceAndButtons",
smalltalk.method({
selector: "updateSourceAndButtons",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self, "_disableSaveButton", []);
    smalltalk.send(self['@classButtons'], "_contents_", [function (html) {(function ($rec) {smalltalk.send($rec, "_title_", ["Create a new class"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_addNewClass", []);}]);return smalltalk.send($rec, "_with_", ["New class"]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["Rename class"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_renameClass", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["Copy class"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_copyClass", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["Remove class"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_removeClass", []);}]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_searchClassReferences", []);}]);}(smalltalk.send(html, "_button", []));}]);
    smalltalk.send(self['@methodButtons'], "_contents_", [function (html) {var protocolSelect = nil;var referencesSelect = nil;(function ($rec) {smalltalk.send($rec, "_with_", ["Remove method"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_removeMethod", []);}]);}(smalltalk.send(html, "_button", [])));protocolSelect = smalltalk.send(html, "_select", []);(function ($rec) {smalltalk.send($rec, "_onChange_", [function () {return smalltalk.send(self, "_setMethodProtocol_", [smalltalk.send(smalltalk.send(protocolSelect, "_asJQuery", []), "_val", [])]);}]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["Method protocol"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);}(smalltalk.send(html, "_option", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", ["New..."]);}(smalltalk.send(html, "_option", [])));return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [function (each) {option = smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);return ($receiver = smalltalk.send(self['@selectedProtocol'], "__eq", [each])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(typeof option == "undefined" ? nil : option, "_at_put_", ["selected", "selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(typeof option == "undefined" ? nil : option, "_at_put_", ["selected", "selected"]);}]);}]);}]);}(protocolSelect));return ($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean ? !$receiver ? function () {referencesSelect = smalltalk.send(html, "_select", []);return function ($rec) {smalltalk.send($rec, "_onChange_", [function () {return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);}]);return smalltalk.send($rec, "_with_", [function () {var option = nil;(function ($rec) {smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);}(smalltalk.send(html, "_option", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);}(smalltalk.send(html, "_option", [])));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);}]);}]);}(referencesSelect);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {referencesSelect = smalltalk.send(html, "_select", []);return function ($rec) {smalltalk.send($rec, "_onChange_", [function () {return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);}]);return smalltalk.send($rec, "_with_", [function () {var option = nil;(function ($rec) {smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);}(smalltalk.send(html, "_option", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);}(smalltalk.send(html, "_option", [])));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);}]);}]);}(referencesSelect);}]);}]);
    ($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(self, "_hideMethodButtons", []);return ($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [function () {return smalltalk.send(self['@selectedProtocol'], "_notNil", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_hideClassButtons", []);}() : function () {return smalltalk.send(self, "_showClassButtons", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_hideClassButtons", []);}, function () {return smalltalk.send(self, "_showClassButtons", []);}]);}() : function () {smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {smalltalk.send(self, "_hideMethodButtons", []);return ($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [function () {return smalltalk.send(self['@selectedProtocol'], "_notNil", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_hideClassButtons", []);}() : function () {return smalltalk.send(self, "_showClassButtons", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_hideClassButtons", []);}, function () {return smalltalk.send(self, "_showClassButtons", []);}]);}, function () {smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);}]);
    smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
    return self;
},
args: [],
source: "updateSourceAndButtons\x0a\x09self disableSaveButton.\x0a\x09classButtons contents: [:html |\x0a\x09\x09html button\x0a\x09\x09\x09title: 'Create a new class';\x0a\x09\x09\x09onClick: [self addNewClass];\x0a\x09\x09\x09with: 'New class'.\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Rename class';\x0a\x09\x09\x09onClick: [self renameClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Copy class';\x0a\x09\x09\x09onClick: [self copyClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Remove class';\x0a\x09\x09\x09onClick: [self removeClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'References';\x0a\x09\x09\x09onClick: [self searchClassReferences]].\x0a\x09methodButtons contents: [:html | | protocolSelect referencesSelect |\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Remove method';\x0a\x09\x09\x09onClick: [self removeMethod].\x0a\x09\x09protocolSelect := html select.\x0a                protocolSelect\x0a\x09\x09\x09onChange: [ self setMethodProtocol: protocolSelect asJQuery val];\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09with: 'Method protocol';\x0a\x09\x09\x09\x09\x09at: 'disabled' put: 'disabled'.\x0a\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09class: 'important';\x0a\x09\x09\x09\x09\x09with: 'New...'.\x0a\x09\x09\x09\x09self protocols do: [:each |\x0a\x09\x09\x09\x09\x09option := html option with: each.\x0a\x09\x09\x09\x09\x09selectedProtocol = each ifTrue: [ option at: 'selected' put: 'selected' ] ]].\x0a\x09\x09selectedMethod isNil ifFalse: [\x0a\x09\x09\x09referencesSelect := html select.\x0a                        referencesSelect\x0a\x09\x09\x09\x09onChange: [self searchReferencesOf: referencesSelect asJQuery val];\x0a\x09\x09\x09\x09with: [ |option|\x0a\x09\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09\x09with: 'References';\x0a\x09\x09\x09\x09\x09\x09at: 'disabled' put: 'disabled'.\x0a\x09\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09\x09class: 'important';\x0a\x09\x09\x09\x09\x09\x09with: selectedMethod selector.\x0a\x09\x09\x09\x09\x09selectedMethod messageSends sorted do: [:each |\x0a\x09\x09\x09\x09\x09\x09html option with: each]]]].\x0a\x09selectedMethod isNil\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self hideMethodButtons.\x0a\x09\x09\x09\x09(selectedClass isNil or: [selectedProtocol notNil])\x0a\x09\x09\x09\x09\x09ifTrue: [self hideClassButtons]\x0a\x09\x09\x09\x09\x09ifFalse: [self showClassButtons]]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self hideClassButtons.\x0a\x09\x09\x09self showMethodButtons].\x0a\x09sourceArea val: self source",
messageSends: ["disableSaveButton", "contents:", "title:", "onClick:", "addNewClass", "with:", "button", "renameClass", "copyClass", "removeClass", "searchClassReferences", "removeMethod", "select", "onChange:", "setMethodProtocol:", "val", "asJQuery", "at:put:", "option", "class:", "do:", "protocols", "ifTrue:", "=", "ifFalse:", "isNil", "searchReferencesOf:", "selector", "sorted", "messageSends", "ifTrue:ifFalse:", "hideMethodButtons", "or:", "notNil", "hideClassButtons", "showClassButtons", "showMethodButtons", "val:", "source"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
category: 'updating',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])])).klass === smalltalk.Boolean ? $receiver ? function () {($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);}() : nil;return self['@unsavedChanges'] = false;}() : function () {($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);}() : nil;return self['@unsavedChanges'] = true;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);}() : nil;return self['@unsavedChanges'] = false;}, function () {($receiver = self['@saveButton']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);}() : nil;return self['@unsavedChanges'] = true;}]);
    return self;
},
args: [],
source: "updateStatus\x0a\x09sourceArea val = self source\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton at: 'disabled' put: true].\x0a\x09\x09\x09\x09unsavedChanges := false]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton removeAt: 'disabled'].\x0a\x09\x09\x09unsavedChanges := true]",
messageSends: ["ifTrue:ifFalse:", "=", "val", "source", "ifNotNil:", "at:put:", "removeAt:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateTabsList",
smalltalk.method({
selector: "updateTabsList",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self['@tabsList'], "_contents_", [function (html) {var li = nil;li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);(function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Instance"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("instance")]);}]);}(li));li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("class")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);(function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Class"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("class")]);}]);}(li));li = smalltalk.send(html, "_li", []);($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(li, "_class_", ["selected"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(li, "_class_", ["selected"]);}]);return function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function ($rec) {smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Comment"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);}]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("comment")]);}]);}(li);}]);
    return self;
},
args: [],
source: "updateTabsList\x0a    tabsList contents: [:html || li |\x0a\x09li := html li.\x0a\x09selectedTab = #instance ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09    with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Instance'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09    onClick: [self selectTab: #instance].\x0a\x09li := html li.\x0a\x09selectedTab = #class ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09    with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Class'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09    onClick: [self selectTab: #class].\x0a\x09li := html li.\x0a\x09selectedTab = #comment ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09    with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Comment'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09    onClick: [self selectTab: #comment]]",
messageSends: ["contents:", "li", "ifTrue:", "=", "class:", "with:", "span", "onClick:", "selectTab:"],
referencedClasses: []
}),
smalltalk.Browser);


smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
category: 'accessing',
fn: function () {
    var self = this;
    return "js";
    return self;
},
args: [],
source: "commitPathJs\x0a\x09^'js'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
category: 'accessing',
fn: function () {
    var self = this;
    return "st";
    return self;
},
args: [],
source: "commitPathSt\x0a\x09^'st'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'convenience',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
    return self;
},
args: [],
source: "open\x0a    self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_openOn_",
smalltalk.method({
selector: "openOn:",
category: 'convenience',
fn: function (aClass) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_open", []);smalltalk.send($rec, "_selectCategory_", [smalltalk.send(aClass, "_category", [])]);return smalltalk.send($rec, "_selectClass_", [aClass]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aClass"],
source: "openOn: aClass\x0a    ^self new\x0a\x09open;\x0a\x09selectCategory: aClass category;\x0a\x09selectClass: aClass",
messageSends: ["open", "selectCategory:", "category", "selectClass:", "new"],
referencedClasses: []
}),
smalltalk.Browser.klass);


smalltalk.addClass('ClassBrowser', smalltalk.Browser, ['classView', 'methodView', 'subclassView', 'methodTitle', 'subclassTitle', 'subclasses', 'subsubclasses'], 'IDE');
smalltalk.addMethod(
"_class_",
smalltalk.method({
selector: "class:",
category: 'accessing',
fn: function (aClass) {
    var self = this;
    smalltalk.send(self, "_class_subclasses_", [aClass, smalltalk.send(aClass, "_subclasses", [])]);
    return self;
},
args: ["aClass"],
source: "class: aClass\x0a\x09self class: aClass subclasses: aClass subclasses.",
messageSends: ["class:subclasses:", "subclasses"],
referencedClasses: []
}),
smalltalk.ClassBrowser);

smalltalk.addMethod(
"_class_subclasses_",
smalltalk.method({
selector: "class:subclasses:",
category: 'accessing',
fn: function (aClass, someSubClasses) {
    var self = this;
    self['@selectedClass'] = aClass;
    self['@subclasses'] = someSubClasses;
    return self;
},
args: ["aClass", "someSubClasses"],
source: "class: aClass subclasses: someSubClasses\x0a\x09selectedClass := aClass.\x0a\x09subclasses := someSubClasses.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBrowser);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    self['@classView'] = smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedClass'], "_name", [])]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@subclassView'], "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_toggleContents_", [function (html) {return smalltalk.send(self['@subclasses'], "_do_", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.ClassBrowser || ClassBrowser, "_new", []), "_class_", [thisisplaceholder1])]);}]);}]);}]);}]);}(smalltalk.send(html, "_span", [])));return self['@methodTitle'] = function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);smalltalk.send($rec, "_with_", ["methods"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@methodView'], "_toggleContents_", [function (html) {return smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.MethodBrowser || MethodBrowser, "_new", []), "_class_method_", [self['@selectedClass'], thisisplaceholder1])]);}]);}]);}]);}(smalltalk.send(html, "_span", []));}]);
    self['@methodView'] = smalltalk.send(html, "_div", []);
    (function ($rec) {smalltalk.send($rec, "_ifEmpty_", [function () {return self['@subclassView'] = nil;}]);return smalltalk.send($rec, "_ifNotEmpty_", [function () {return self['@subclassView'] = smalltalk.send(html, "_div", []);}]);}(self['@subclasses']));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09classView := html div with: [\x0a\x09\x09html span with: selectedClass name;\x0a\x09\x09\x09\x09onClick: [ \x0a\x09\x09\x09\x09\x09subclassView >>= [ %1 toggleContents: [ :html |\x0a\x09\x09\x09\x09\x09\x09subclasses do: [ html div with: (ClassBrowser new class: %1) ] ] ] ].\x0a\x09\x09methodTitle := html span css: 'margin-left' put: '10px';  with: 'methods';\x0a\x09\x09\x09onClick: [ methodView toggleContents: [ :html |\x0a\x09\x09\x09\x09self methods do: [  html div with: (MethodBrowser new class: selectedClass method: %1) ] ] ].\x0a\x09].\x0a\x09methodView := html div.\x09\x0a\x09subclasses ifEmpty: [ subclassView := nil ]; ifNotEmpty: [ subclassView := html div ]\x0a\x09",
messageSends: ["with:", "div", "name", "onClick:", ">>=", "toggleContents:", "do:", "class:", "new", "span", "css:put:", "methods", "class:method:", "ifEmpty:", "ifNotEmpty:"],
referencedClasses: ["ClassBrowser", "MethodBrowser"]
}),
smalltalk.ClassBrowser);

smalltalk.addMethod(
"_subclasses_",
smalltalk.method({
selector: "subclasses:",
category: 'accessing',
fn: function (someSubClasses) {
    var self = this;
    self['@subclasses'] = someSubClasses;
    return self;
},
args: ["someSubClasses"],
source: "subclasses: someSubClasses\x0a\x09subclasses := someSubClasses.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBrowser);

smalltalk.addMethod(
"_subsubclasses_",
smalltalk.method({
selector: "subsubclasses:",
category: 'accessing',
fn: function (someSubClasses) {
    var self = this;
    self['@subsubclasses'] = someSubClasses;
    return self;
},
args: ["someSubClasses"],
source: "subsubclasses: someSubClasses\x0a\x09subsubclasses := someSubClasses.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBrowser);



smalltalk.addClass('MethodBrowser', smalltalk.Browser, ['method', 'sourceView'], 'IDE');
smalltalk.addMethod(
"_class_method_",
smalltalk.method({
selector: "class:method:",
category: 'rendering',
fn: function (aClass, aCompiledMethod) {
    var self = this;
    self['@selectedClass'] = aClass;
    self['@method'] = aCompiledMethod;
    return self;
},
args: ["aClass", "aCompiledMethod"],
source: "class: aClass method: aCompiledMethod\x0a\x09selectedClass := aClass.\x0a\x09method := aCompiledMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodBrowser);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(self['@method'], "_selector", [])]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceView'], "_toggleContents_", [function (html) {var sourceArea = nil;self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);smalltalk.send(self['@sourceView'], "_with_", [self['@sourceArea']]);return smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self['@method'], "_source", [])]);}]);}]);}(smalltalk.send(html, "_div", [])));
    self['@sourceView'] = smalltalk.send(html, "_div", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div with: method selector;\x0a\x09\x09onClick: [ sourceView toggleContents: [ :html || sourceArea |\x0a\x09\x09\x09sourceArea := SourceArea new.\x0a\x09\x09\x09sourceView with: sourceArea.\x0a\x09\x09\x09sourceArea val: method source\x0a\x09\x09] ].\x0a\x09sourceView := html div",
messageSends: ["with:", "selector", "onClick:", "toggleContents:", "new", "val:", "source", "div"],
referencedClasses: ["SourceArea"]
}),
smalltalk.MethodBrowser);



smalltalk.addClass('TreeBrowser', smalltalk.Browser, [], 'IDE');
smalltalk.TreeBrowser.comment="x := DialogBox new \x0a  widget: TreeBrowser new; \x0a  modal:false; \x0a  width: 800;\x0a  height: 500;\x0a  open "
smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    self['@selectedClass'] = smalltalk.Page || Page;
    smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedClass'], "_ancestors", []), "__comma", [self['@selectedClass']]), "_do_", [function (each) {self['@selectedClass'] = each;return smalltalk.send(html, "_li_", [function () {smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(each, "_asString", [])]);return smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [function (each) {var sourceBrush = nil;return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(each, "_selector", [])]);return smalltalk.send($rec, "_onClick_", [function () {var sourceArea = nil;self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);smalltalk.send(sourceBrush, "_with_", [self['@sourceArea']]);return smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(each, "_source", [])]);}]);}(smalltalk.send(html, "_div", [])));return sourceBrush = smalltalk.send(html, "_div", []);}]);}(smalltalk.send(html, "_div", []));}]);}]);}]);
    return self;
},
args: ["html"],
source: "renderBoxOn: html\x0a  selectedClass := Page.\x0a\x0a  (selectedClass ancestors, selectedClass) do: [ :each |\x0a\x09selectedClass := each.\x0a\x09html li: [\x0a\x09  html div with: each asString.\x0a\x09  self methods do: [  :each || sourceBrush |\x0a\x09\x09html div \x0a\x09\x09\x09css: 'margin-left' put: '10px';\x0a\x09\x09\x09with:  [\x0a\x09\x09\x09\x09html div with: each selector;\x0a\x09\x09\x09\x09\x09onClick: [  | sourceArea |\x0a\x09\x09\x09\x09\x09\x09sourceArea := SourceArea new.\x0a\x09\x09\x09\x09\x09\x09sourceBrush with: sourceArea.\x0a\x09\x09\x09\x09\x09\x09sourceArea val: each source\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09sourceBrush := html div.\x0a\x09\x09\x09]\x0a\x09  ]\x0a\x09]\x0a]\x0a",
messageSends: ["do:", ",", "ancestors", "li:", "with:", "div", "asString", "methods", "css:put:", "selector", "onClick:", "new", "val:", "source"],
referencedClasses: ["Page", "SourceArea"]
}),
smalltalk.TreeBrowser);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.TreeBrowser);

smalltalk.addMethod(
"_selectedClass_",
smalltalk.method({
selector: "selectedClass:",
category: 'not yet classified',
fn: function (aClass) {
    var self = this;
    self['@selectedClass'] = aClass;
    return self;
},
args: ["aClass"],
source: "selectedClass: aClass\x0a\x09selectedClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.TreeBrowser);



smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = smalltalk.send(self, "_method", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.send(self['@selectedContext'], "_temps", []), "_collect_", [function (each) {return nil;}]);}() : function () {return smalltalk.send(smalltalk.send(self, "_method", []), "_arguments", []);}();
    return self;
},
args: [],
source: "arguments\x0a\x09^self method \x0a\x09\x09ifNil: [selectedContext temps collect: [:each | nil]]\x0a\x09\x09ifNotNil: [self method arguments]",
messageSends: ["ifNil:ifNotNil:", "method", "collect:", "temps", "arguments"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function () {
    var self = this;
    return true;
    return self;
},
args: [],
source: "canBeClosed\x0a    ^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error",
smalltalk.method({
selector: "error",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@error'];
    return self;
},
args: [],
source: "error\x0a\x09^error",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
category: 'accessing',
fn: function (anError) {
    var self = this;
    self['@error'] = anError;
    return self;
},
args: ["anError"],
source: "error: anError\x0a\x09error := anError",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Debugger.superclass || nil);
    smalltalk.send(self['@unsavedChanges'], "__eq", [false]);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09unsavedChanges = false",
messageSends: ["initialize", "="],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_inspectSelectedVariable",
smalltalk.method({
selector: "inspectSelectedVariable",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self['@selectedVariable'], "_inspect", []);
    return self;
},
args: [],
source: "inspectSelectedVariable\x0a\x09selectedVariable inspect",
messageSends: ["inspect"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return "[Debugger]";
    return self;
},
args: [],
source: "label\x0a\x09^'[Debugger]'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_methodAt_", [smalltalk.send(self['@selectedContext'], "_selector", [])]);
    return self;
},
args: [],
source: "method\x0a\x09^selectedContext receiver class methodAt: selectedContext selector",
messageSends: ["methodAt:", "class", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_proceed",
smalltalk.method({
selector: "proceed",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_close", []);
    smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_perform_withArguments_", [smalltalk.send(self['@selectedContext'], "_selector", []), smalltalk.send(self['@selectedContext'], "_temps", [])]);
    return self;
},
args: [],
source: "proceed\x0a\x09self close.\x0a\x09selectedContext receiver perform: selectedContext selector withArguments: selectedContext temps",
messageSends: ["close", "perform:withArguments:", "receiver", "selector", "temps"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@selectedContext'], "_receiver", []);
    return self;
},
args: [],
source: "receiver\x0a\x09^selectedContext receiver",
messageSends: ["receiver"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["amber_sourceCode debugger"]);return smalltalk.send($rec, "_with_", [function () {self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);return smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    self['@ul2'] = smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["amber_column debugger variables"]);
    self['@inspector'] = smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["amber_column debugger inspector"]);
    smalltalk.send(self['@sourceArea'], "_onKeyUp_", [function () {return smalltalk.send(self, "_updateStatus", []);}]);
    return self;
},
args: ["html"],
source: "renderBottomPanelOn: html\x0a\x09html div\x0a\x09\x09class: 'amber_sourceCode debugger';\x0a\x09\x09with: [\x0a\x09\x09\x09sourceArea := SourceArea new.\x0a\x09\x09\x09sourceArea renderOn: html].\x0a\x09ul2 := html ul class: 'amber_column debugger variables'.\x0a\x09inspector := html div class: 'amber_column debugger inspector'.\x0a\x09sourceArea\x0a\x09\x09onKeyUp: [self updateStatus]",
messageSends: ["class:", "with:", "new", "renderOn:", "div", "ul", "onKeyUp:", "updateStatus"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_renderTopPanelOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);}(self));
    return self;
},
args: ["html"],
source: "renderBoxOn: html\x0a    self \x0a\x09renderTopPanelOn: html;\x0a\x09renderBottomPanelOn: html",
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    self['@saveButton'] = function ($rec) {smalltalk.send($rec, "_with_", ["Save"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_save", []);}]);}(smalltalk.send(html, "_button", []));
    (function ($rec) {smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_doIt", []);}]);}(smalltalk.send(html, "_button", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_printIt", []);}]);}(smalltalk.send(html, "_button", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@sourceArea'], "_inspectIt", []);}]);}(smalltalk.send(html, "_button", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", ["Proceed"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_proceed", []);}]);}(smalltalk.send(html, "_button", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", ["Abandon"]);return smalltalk.send