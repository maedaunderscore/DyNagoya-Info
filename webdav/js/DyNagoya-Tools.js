smalltalk.addPackage('DyNagoya-Tools', {});
smalltalk.addClass('Circle', smalltalk.Widget, [], 'DyNagoya-Tools');
smalltalk.addMethod(
"_body_",
smalltalk.method({
selector: "body:",
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: "body: html\x0a\x0a\x09\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.Circle);

smalltalk.addMethod(
"_circleStyle",
smalltalk.method({
selector: "circleStyle",
category: 'rendering',
fn: function () {
    var self = this;
    var rx = nil;
    var ry = nil;
    rx = smalltalk.send(self, "_radiusX", []);
    ry = smalltalk.send(self, "_radiusY", []);
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("width: ", "__comma", [($receiver = rx).klass === smalltalk.Number ? $receiver * 2 : smalltalk.send($receiver, "__star", [2])]), "__comma", [unescape("px%3Bheight%3A%20")]), "__comma", [($receiver = rx).klass === smalltalk.Number ? $receiver * 2 : smalltalk.send($receiver, "__star", [2])]), "__comma", [unescape("px%3B%20-moz-border-radius%3A")]), "__comma", [rx]), "__comma", [unescape("px%3B-webkit-border-radius%3A")]), "__comma", [rx]), "__comma", [unescape("px%3Bborder-radius%3A%20")]), "__comma", [rx]), "__comma", [unescape("px%3B%20line-height%3A")]), "__comma", [($receiver = rx).klass === smalltalk.Number ? $receiver * 2 : smalltalk.send($receiver, "__star", [2])]), "__comma", [unescape("px%3B%20text-align%3Acenter%3Bposition%3Aabsolute%3B")]);
    return self;
},
args: [],
source: "circleStyle\x0a\x09| rx ry |\x0a\x09rx := self radiusX.\x0a\x09ry := self radiusY.\x0a\x09^ 'width: ', (rx * 2), 'px;height: ', (rx * 2), 'px; -moz-border-radius:',rx,'px;-webkit-border-radius:',rx,'px;border-radius: ', rx, 'px; line-height:', (rx * 2), 'px; text-align:center;position:absolute;'",
messageSends: ["radiusX", "radiusY", ",", "*"],
referencedClasses: []
}),
smalltalk.Circle);

smalltalk.addMethod(
"_radiusX",
smalltalk.method({
selector: "radiusX",
category: 'accessing',
fn: function () {
    var self = this;
    return 60;
    return self;
},
args: [],
source: "radiusX\x0a\x09^ 60",
messageSends: [],
referencedClasses: []
}),
smalltalk.Circle);

smalltalk.addMethod(
"_radiusY",
smalltalk.method({
selector: "radiusY",
category: 'accessing',
fn: function () {
    var self = this;
    return 100;
    return self;
},
args: [],
source: "radiusY\x0a\x09^ 100",
messageSends: [],
referencedClasses: []
}),
smalltalk.Circle);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["circle"]);smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send(self, "_circleStyle", []), "__comma", [smalltalk.send(self, "_style", [])])]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_body_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'circle'; style: (self circleStyle, self style); with: [\x0a\x09\x09\x09self body: html\x0a\x09]",
messageSends: ["class:", "style:", ",", "circleStyle", "style", "with:", "body:", "div"],
referencedClasses: []
}),
smalltalk.Circle);



smalltalk.addClass('DialogBox', smalltalk.Widget, ['message', 'option', 'body', 'aspectRatio', 'fontSize', 'x', 'y', 'widget'], 'DyNagoya-Tools');
smalltalk.DialogBox.comment="Must need to use 'with' or message.\x0a\x0aex)\x0a DialogBox new message: 'hoge'; title: 'fuga'; open "
smalltalk.addMethod(
"_body",
smalltalk.method({
selector: "body",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@body'], "_asJQuery", []);
    return self;
},
args: [],
source: "body\x0a\x09\x22 not raw body\x22\x0a\x09^ body asJQuery",
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_body_",
smalltalk.method({
selector: "body:",
category: 'accessing',
fn: function (aBody) {
    var self = this;
    self['@body'] = aBody;
    return self;
},
args: ["aBody"],
source: "body: aBody\x0a\x09\x22aBody will receive asJQuery\x22\x0a\x09body :=  aBody",
messageSends: [],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_button_action_",
smalltalk.method({
selector: "button:action:",
category: 'accessing',
fn: function (label, aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {aBlock();}}]);
    return self;
},
args: ["label", "aBlock"],
source: "button: label action: aBlock\x0a\x09(option at: 'buttons' ifAbsentPut:[ {} ])\x0a\x09\x09add: (<{text: label, click: function() { aBlock(); }}>).\x0a",
messageSends: ["add:", "at:ifAbsentPut:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'action',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_dialog_", ["destroy"]);
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_empty", []);
    return self;
},
args: [],
source: "close\x0a\x09 body asJQuery dialog: 'destroy'.\x0a\x09 body asJQuery empty",
messageSends: ["dialog:", "asJQuery", "empty"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_closeButton_",
smalltalk.method({
selector: "closeButton:",
category: 'accessing',
fn: function (label) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {$(this).dialog("close");}}]);
    return self;
},
args: ["label"],
source: "closeButton: label\x0a\x09(option at: 'buttons' ifAbsentPut:[ {} ])\x0a\x09\x09add: (<{text: label, click: function() { $(this).dialog(\x22close\x22); }}>).\x0a\x0a",
messageSends: ["add:", "at:ifAbsentPut:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_closeButton_action_",
smalltalk.method({
selector: "closeButton:action:",
category: 'accessing',
fn: function (label, aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {aBlock();$(this).dialog("close");}}]);
    return self;
},
args: ["label", "aBlock"],
source: "closeButton: label action: aBlock\x0a\x09(option at: 'buttons' ifAbsentPut:[ {} ])\x0a\x09\x09add: (<{text: label, click: function() { aBlock(); $(this).dialog(\x22close\x22); }}>).\x0a\x0a",
messageSends: ["add:", "at:ifAbsentPut:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_defaultOption",
smalltalk.method({
selector: "defaultOption",
category: 'initialization',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [true]), smalltalk.send("sticky", "__minus_gt", [true]), smalltalk.send("close", "__minus_gt", [function () {return smalltalk.send(self, "_close", []);}]), smalltalk.send("maxHeight", "__minus_gt", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])])]);
    return self;
},
args: [],
source: "defaultOption\x0a\x09^ #{ \x0a\x09\x09'modal' -> true .\x0a\x09\x09 'sticky' -> true. \x0a\x09\x09'close' -> [ self close ].\x0a\x09\x09'maxHeight' -> (window innerHeight * 0.9)\x0a\x09}",
messageSends: ["->", "close", "*", "innerHeight"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_fontSize",
smalltalk.method({
selector: "fontSize",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@fontSize'], "_default_", ["12px"]);
    return self;
},
args: [],
source: "fontSize\x0a\x09^ fontSize default: '12px'",
messageSends: ["default:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_fontSize_",
smalltalk.method({
selector: "fontSize:",
category: 'accessing',
fn: function (sizeStr) {
    var self = this;
    self['@fontSize'] = sizeStr;
    return self;
},
args: ["sizeStr"],
source: "fontSize: sizeStr\x0a\x09fontSize := sizeStr",
messageSends: [],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_height_",
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aHeight) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["height", aHeight]);
    return self;
},
args: ["aHeight"],
source: "height: aHeight\x0a\x09option at: 'height' put: aHeight",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_image_",
smalltalk.method({
selector: "image:",
category: 'accessing',
fn: function (url) {
    var self = this;
    return smalltalk.send(self, "_with_", [function (html) {return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [url]);}]);
    return self;
},
args: ["url"],
source: "image: url\x0a\x09^ self with: [ :html | html img src: url]",
messageSends: ["with:", "src:", "img"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Widget);
    self['@option'] = smalltalk.send(self, "_defaultOption", []);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09option := self defaultOption",
messageSends: ["initialize", "defaultOption"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_message_",
smalltalk.method({
selector: "message:",
category: 'accessing',
fn: function (aMessage) {
    var self = this;
    self['@body'] = smalltalk.send(smalltalk.send(unescape("%3Cdiv%3E"), "__comma", [aMessage]), "__comma", [unescape("%3C/div%3E")]);
    return self;
},
args: ["aMessage"],
source: "message: aMessage\x0a\x09body := '<div>', aMessage, '</div>'",
messageSends: [","],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_modal_",
smalltalk.method({
selector: "modal:",
category: 'accessing',
fn: function (flag) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["modal", flag]);
    return self;
},
args: ["flag"],
source: "modal: flag\x0a\x09option at: 'modal' put: flag",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'action',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_at_", ["font-size", smalltalk.send(self, "_fontSize", [])]);return smalltalk.send($rec, "_dialog_", [self['@option']]);}(smalltalk.send(self['@body'], "_asJQuery", [])));
    (function ($rec) {smalltalk.send($rec, "_addClass_", ["workspace-effect"]);smalltalk.send($rec, "_css_at_", ["position", "fixed"]);smalltalk.send($rec, "_css_at_", ["left", smalltalk.send(self, "_x", [])]);return smalltalk.send($rec, "_css_at_", ["top", smalltalk.send(self, "_y", [])]);}(smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_parent", [])));
    return self;
},
args: [],
source: "open\x0a\x09 body asJQuery\x0a\x09\x09css: 'font-size' at: (self fontSize); \x0a\x09\x09dialog: option.\x0a         body asJQuery parent\x0a\x09\x09addClass: 'workspace-effect';\x0a\x09\x09css: 'position' at: 'fixed';\x0a\x09\x09css: 'left' at: (self x);\x0a\x09\x09css: 'top' at: (self y)",
messageSends: ["css:at:", "fontSize", "dialog:", "asJQuery", "addClass:", "x", "y", "parent"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_option",
smalltalk.method({
selector: "option",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@option'];
    return self;
},
args: [],
source: "option\x0a\x09^ option",
messageSends: [],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_tabWidget_",
smalltalk.method({
selector: "tabWidget:",
category: 'accessing',
fn: function (aWidget) {
    var self = this;
    return smalltalk.send(self, "_with_", [function (html) {return smalltalk.send(aWidget, "_renderBoxOn_", [html]);}]);
    return self;
},
args: ["aWidget"],
source: "tabWidget: aWidget\x0a\x09^ self with: [:html | aWidget renderBoxOn: html ]",
messageSends: ["with:", "renderBoxOn:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (aTitle) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["title", aTitle]);
    return self;
},
args: ["aTitle"],
source: "title: aTitle\x0a\x09option at: 'title' put: aTitle",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
category: 'accessing',
fn: function (aWidget) {
    var self = this;
    self['@widget'] = aWidget;
    return smalltalk.send(self, "_with_", [function (html) {return smalltalk.send(aWidget, "_renderOn_", [html]);}]);
    return self;
},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget.\x0a\x09^ self with: [:html | aWidget renderOn: html ]",
messageSends: ["with:", "renderOn:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_width_",
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aWidth) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["width", aWidth]);
    return self;
},
args: ["aWidth"],
source: "width: aWidth\x0a\x09option at: 'width' put: aWidth",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
category: 'accessing',
fn: function (aBlock) {
    var self = this;
    var body = nil;
    self['@body'] = smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []);
    smalltalk.send(aBlock, "_value_", [self['@body']]);
    return smalltalk.send(self, "_body_", [smalltalk.send(self['@body'], "_root", [])]);
    return self;
},
args: ["aBlock"],
source: "with: aBlock\x0a\x09| body |\x0a\x09body := HTMLCanvas new.\x0a\x09aBlock value: body.\x0a\x09^ self body: body root.",
messageSends: ["new", "value:", "body:", "root"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@x'], "_default_", ["50px"]);
    return self;
},
args: [],
source: "x\x0a\x09^ x default: '50px'",
messageSends: ["default:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (strPos) {
    var self = this;
    self['@x'] = strPos;
    return self;
},
args: ["strPos"],
source: "x: strPos\x0a\x09x := strPos",
messageSends: [],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@y'], "_default_", ["50px"]);
    return self;
},
args: [],
source: "y\x0a\x09^ y default: '50px'",
messageSends: ["default:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (strPos) {
    var self = this;
    self['@y'] = strPos;
    return self;
},
args: ["strPos"],
source: "y: strPos\x0a\x09y := strPos",
messageSends: [],
referencedClasses: []
}),
smalltalk.DialogBox);


smalltalk.addMethod(
"_toggleShow",
smalltalk.method({
selector: "toggleShow",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(".ui-dialog:hidden", "_asJQuery", []), "_length", []), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(".ui-dialog:visible", "_asJQuery", []), "_hide", []);}() : function () {return smalltalk.send(smalltalk.send(".ui-dialog:hidden", "_asJQuery", []), "_show", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(".ui-dialog:visible", "_asJQuery", []), "_hide", []);}, function () {return smalltalk.send(smalltalk.send(".ui-dialog:hidden", "_asJQuery", []), "_show", []);}]);
    return self;
},
args: [],
source: "toggleShow\x0a\x09'.ui-dialog:hidden' asJQuery length = 0 \x0a\x09\x09ifTrue: [ '.ui-dialog:visible' asJQuery hide ]\x0a\x09\x09ifFalse: [ '.ui-dialog:hidden' asJQuery show ]\x0a\x09",
messageSends: ["ifTrue:ifFalse:", "=", "length", "asJQuery", "hide", "show"],
referencedClasses: []
}),
smalltalk.DialogBox.klass);

smalltalk.addMethod(
"_withCancel",
smalltalk.method({
selector: "withCancel",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_closeButton_", ["Cancel"]);
    return self;
},
args: [],
source: "withCancel\x0a\x09^ self new closeButton: 'Cancel'\x0a",
messageSends: ["closeButton:", "new"],
referencedClasses: []
}),
smalltalk.DialogBox.klass);


smalltalk.addClass('BrowserDialog', smalltalk.DialogBox, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_open_",
smalltalk.method({
selector: "open:",
category: 'not yet classified',
fn: function (aClass) {
    var self = this;
    return smalltalk.send(self, "_open_browser_", [aClass, smalltalk.ClassBrowser || ClassBrowser]);
    return self;
},
args: ["aClass"],
source: "open: aClass\x0a\x09^ self open: aClass browser:  ClassBrowser ",
messageSends: ["open:browser:"],
referencedClasses: ["ClassBrowser"]
}),
smalltalk.BrowserDialog.klass);

smalltalk.addMethod(
"_open_browser_",
smalltalk.method({
selector: "open:browser:",
category: 'not yet classified',
fn: function (aClass, browserClass) {
    var self = this;
    var browser = nil;
    var ret = nil;
    browser = smalltalk.send(browserClass, "_hierarchy_", [aClass]);
    ret = function ($rec) {smalltalk.send($rec, "_widget_", [browser]);smalltalk.send($rec, "_width_", ["600px"]);smalltalk.send($rec, "_height_", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.5 : smalltalk.send($receiver, "__star", [0.5])]);smalltalk.send($rec, "_modal_", [false]);smalltalk.send($rec, "_title_", [smalltalk.send(aClass, "_name", [])]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(self, "_new", []));
    smalltalk.send(browser, "_open_", [aClass]);
    return ret;
    return self;
},
args: ["aClass", "browserClass"],
source: "open: aClass browser: browserClass\x0a\x09| browser ret |\x0a\x09browser := browserClass hierarchy: aClass.\x0a\x09ret := self new \x0a\x09\x09widget: browser;\x0a\x09\x09width: '600px';\x0a\x09\x09height:  (window innerHeight * 0.5);\x0a\x09\x09modal: false;\x0a\x09\x09title: aClass name;\x0a\x09\x09open.\x0a\x0a\x09browser open: aClass.\x0a\x09^ ret",
messageSends: ["hierarchy:", "widget:", "width:", "height:", "*", "innerHeight", "modal:", "title:", "name", "open", "new", "open:"],
referencedClasses: []
}),
smalltalk.BrowserDialog.klass);

smalltalk.addMethod(
"_openWithBrowser_",
smalltalk.method({
selector: "openWithBrowser:",
category: 'not yet classified',
fn: function (browser) {
    var self = this;
    var ret = nil;
    ret = function ($rec) {smalltalk.send($rec, "_widget_", [browser]);smalltalk.send($rec, "_width_", ["600px"]);smalltalk.send($rec, "_height_", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.5 : smalltalk.send($receiver, "__star", [0.5])]);smalltalk.send($rec, "_modal_", [false]);smalltalk.send($rec, "_title_", [smalltalk.send(smalltalk.send(browser, "_target", []), "_name", [])]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(self, "_new", []));
    smalltalk.send(browser, "_open", []);
    return self;
},
args: ["browser"],
source: "openWithBrowser: browser\x0a\x09| ret |\x0a\x09ret := self new \x0a\x09\x09widget: browser;\x0a\x09\x09width: '600px';\x0a\x09\x09height:  (window innerHeight * 0.5);\x0a\x09\x09modal: false;\x0a\x09\x09title: browser target name;\x0a\x09\x09open.\x0a\x0a\x09browser open.\x0a",
messageSends: ["widget:", "width:", "height:", "*", "innerHeight", "modal:", "title:", "name", "target", "open", "new"],
referencedClasses: []
}),
smalltalk.BrowserDialog.klass);


smalltalk.addClass('ImageEditor', smalltalk.DialogBox, ['img', 'canvas', 'jcrop'], 'DyNagoya-Tools');
smalltalk.ImageEditor.comment="x := ImageEditor openWithProxy: 'http://xxxx.com/abc.png'; open\x0a(* select area by drag the image *)\x0a\x0ax crop\x0ax src"
smalltalk.addMethod(
"_area",
smalltalk.method({
selector: "area",
category: 'accessing',
fn: function () {
    var self = this;
    var $early = {};
    try {
        ($receiver = smalltalk.send(self, "_isSelected", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [smalltalk.send(self['@jcrop'], "_tellSelect", [])];}();}() : function () {var imgJQ = nil;imgJQ = smalltalk.send(self['@img'], "_asJQuery", []);return function () {throw $early = [function ($rec) {smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("x"), 0]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("y"), 0]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("x2"), smalltalk.send(imgJQ, "_width", [])]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("y2"), smalltalk.send(imgJQ, "_height", [])]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("w"), smalltalk.send(imgJQ, "_width", [])]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("h"), smalltalk.send(imgJQ, "_height", [])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []))];}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return function () {throw $early = [smalltalk.send(self['@jcrop'], "_tellSelect", [])];}();}, function () {var imgJQ = nil;imgJQ = smalltalk.send(self['@img'], "_asJQuery", []);return function () {throw $early = [function ($rec) {smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("x"), 0]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("y"), 0]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("x2"), smalltalk.send(imgJQ, "_width", [])]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("y2"), smalltalk.send(imgJQ, "_height", [])]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("w"), smalltalk.send(imgJQ, "_width", [])]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("h"), smalltalk.send(imgJQ, "_height", [])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []))];}();}]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: [],
source: "area\x0a\x09self isSelected \x0a\x09\x09ifTrue: [ ^ jcrop tellSelect ]\x0a\x09\x09ifFalse: [ | imgJQ | \x0a                          imgJQ := img asJQuery.\x0a                          ^ Dictionary new \x0a   at: #x put: 0;\x0a   at: #y put: 0;\x0a   at: #x2 put: (imgJQ width);\x0a   at: #y2 put: (imgJQ height);\x0a   at: #w put: (imgJQ width);\x0a   at: #h put: (imgJQ height);\x0a   yourself ]\x0a",
messageSends: ["ifTrue:ifFalse:", "isSelected", "tellSelect", "asJQuery", "at:put:", "width", "height", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_canvas",
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_at_", [0]);
    return self;
},
args: [],
source: "canvas\x0a\x09^canvas asJQuery at:0\x0a",
messageSends: ["at:", "asJQuery"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_canvas", []), "_getContext_", ["2d"]);
    return self;
},
args: [],
source: "context\x0a\x09^ self canvas  getContext:'2d'\x0a",
messageSends: ["getContext:", "canvas"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_copyToImg",
smalltalk.method({
selector: "copyToImg",
category: 'private',
fn: function () {
    var self = this;
    smalltalk.send(self, "_src_", [smalltalk.send(smalltalk.send(self, "_canvas", []), "_toDataURL", [])]);
    smalltalk.send(self, "_redraw", []);
    return self;
},
args: [],
source: "copyToImg\x0a\x09self src: (self canvas toDataURL).\x0a\x09self redraw.\x0a\x0a",
messageSends: ["src:", "toDataURL", "canvas", "redraw"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_crop",
smalltalk.method({
selector: "crop",
category: 'action',
fn: function () {
    var self = this;
    var area = nil;
    area = smalltalk.send(self, "_area", []);
    (function ($rec) {smalltalk.send($rec, "_width_", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")])]);return smalltalk.send($rec, "_height_", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")])]);}(smalltalk.send(self, "_canvas", [])));
    smalltalk.send(smalltalk.send(self, "_context", []), "_drawImage_sx_sy_sw_sh_dx_dy_dw_dh_", [smalltalk.send(self, "_img", []), smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")]), 0, 0, smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")])]);
    smalltalk.send(self, "_copyToImg", []);
    return self;
},
args: [],
source: "crop\x0a\x09| area|\x0a\x09area := self area.\x0a\x09self canvas width: (area at: #w); height: (area at: #h).\x0a\x09self context drawImage: (self img) \x0a\x09\x09sx: (area at: #x)\x09\x09sy: (area at: #y)\x0a\x09\x09sw: (area at: #w)\x09\x09sh: (area at: #h)\x0a\x09\x09dx: 0\x09\x09\x09\x09\x09dy: 0\x0a\x09\x09dw: (area at: #w)\x09\x09dh: (area at: #h).\x0a\x09self copyToImg.\x0a\x0a\x0a",
messageSends: ["area", "width:", "at:", "height:", "canvas", "drawImage:sx:sy:sw:sh:dx:dy:dw:dh:", "context", "img", "copyToImg"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_croppable",
smalltalk.method({
selector: "croppable",
category: 'private',
fn: function () {
    var self = this;
    var jq = nil;
    ($receiver = self['@jcrop']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@jcrop'], "_destroy", []);}() : nil;
    jq = smalltalk.send(self['@img'], "_asJQuery", []);
    jq.Jcrop({}, function () {self['@jcrop'] = this;});
    return self;
},
args: [],
source: "croppable\x0a\x09| jq |\x0a\x09jcrop ifNotNil: [ jcrop destroy ].\x0a\x09jq := img asJQuery. \x0a\x09< jq.Jcrop({}, function(){ self['@jcrop'] = this})> ",
messageSends: ["ifNotNil:", "destroy", "asJQuery"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_defaultOption",
smalltalk.method({
selector: "defaultOption",
category: 'initalization',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [false]), smalltalk.send("close", "__minus_gt", [function () {return smalltalk.send(self, "_close", []);}])]);
    return self;
},
args: [],
source: "defaultOption\x0a\x09^ #{ 'modal' -> false. 'close' -> [self close] }\x0a\x0a",
messageSends: ["->", "close"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_img",
smalltalk.method({
selector: "img",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self['@img'], "_asJQuery", []), "_at_", [0]);
    return self;
},
args: [],
source: "img\x0a\x09^(img asJQuery at: 0) ",
messageSends: ["at:", "asJQuery"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_isSelected",
smalltalk.method({
selector: "isSelected",
category: 'accessing',
fn: function () {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    return smalltalk.send(smalltalk.send(smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), "__eq", [0]), "_not", []);
    return self;
},
args: [],
source: "isSelected\x0a\x09| area|\x0a\x09area := jcrop tellSelect.\x0a\x09^ ((area at: #w) = 0) not",
messageSends: ["tellSelect", "not", "=", "at:"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_open_",
smalltalk.method({
selector: "open:",
category: 'opening',
fn: function (url) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [function (html) {self['@img'] = smalltalk.send(html, "_img", []);return self['@canvas'] = smalltalk.send(smalltalk.send(html, "_canvas", []), "_css_put_", ["display", "none"]);}]);smalltalk.send($rec, "_width_", [800]);smalltalk.send($rec, "_modal_", [false]);return smalltalk.send($rec, "_open", []);}(self));
    smalltalk.send(self, "_src_", [url]);
    smalltalk.send(self, "_redraw", []);
    return self;
},
args: ["url"],
source: "open: url\x0a\x09self with:[ :html | \x0a                   img := html img.\x0a                   canvas := html canvas css:'display' put: 'none'];\x0a\x09\x09width:800;\x0a\x09\x09modal: false;\x0a\x09\x09open.\x0a\x09self src: url.\x0a\x09self redraw.\x0a",
messageSends: ["with:", "img", "css:put:", "canvas", "width:", "modal:", "open", "src:", "redraw"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_openWithProxy_",
smalltalk.method({
selector: "openWithProxy:",
category: 'opening',
fn: function (url) {
    var self = this;
    smalltalk.send(self, "_open_", [smalltalk.send(self, "_proxy_", [url])]);
    return self;
},
args: ["url"],
source: "openWithProxy: url\x0a\x09self open: (self proxy: url)",
messageSends: ["open:", "proxy:"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_proxy_",
smalltalk.method({
selector: "proxy:",
category: 'private',
fn: function (url) {
    var self = this;
    return smalltalk.send(unescape("/proxy%3Fremote%3D"), "__comma", [url]);
    return self;
},
args: ["url"],
source: "proxy:url\x0a\x09^ '/proxy?remote=', url",
messageSends: [","],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_redraw",
smalltalk.method({
selector: "redraw",
category: 'action',
fn: function () {
    var self = this;
    smalltalk.send(self, "_croppable", []);
    return self;
},
args: [],
source: "redraw\x0a\x09self croppable",
messageSends: ["croppable"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_resizeWidth_height_",
smalltalk.method({
selector: "resizeWidth:height:",
category: 'action',
fn: function (w, h) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self, "_area", []);
    (function ($rec) {smalltalk.send($rec, "_width_", [w]);return smalltalk.send($rec, "_height_", [h]);}(smalltalk.send(self, "_canvas", [])));
    smalltalk.send(smalltalk.send(self, "_context", []), "_drawImage_sx_sy_sw_sh_dx_dy_dw_dh_", [smalltalk.send(self, "_img", []), smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")]), 0, 0, w, h]);
    smalltalk.send(self, "_copyToImg", []);
    return self;
},
args: ["w", "h"],
source: "resizeWidth: w height:h\x0a\x09| area |\x0a\x09area := self area.\x0a\x09self canvas width: w; height: h.\x0a\x09self context drawImage: (self img) \x0a\x09\x09sx: (area at: #x)\x09\x09sy: (area at: #y)\x0a\x09\x09sw: (area at: #w)\x09\x09sh: (area at: #h)\x0a\x09\x09dx: 0\x09\x09\x09\x09\x09dy: 0\x0a\x09\x09dw: w\x09\x09dh: h.\x0a\x09self copyToImg.\x0a",
messageSends: ["area", "width:", "height:", "canvas", "drawImage:sx:sy:sw:sh:dx:dy:dw:dh:", "context", "img", "at:", "copyToImg"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_scale_",
smalltalk.method({
selector: "scale:",
category: 'action',
fn: function (s) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self, "_area", []);
    smalltalk.send(self, "_resizeWidth_height_", [($receiver = smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")])).klass === smalltalk.Number ? $receiver * s : smalltalk.send($receiver, "__star", [s]), ($receiver = smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")])).klass === smalltalk.Number ? $receiver * s : smalltalk.send($receiver, "__star", [s])]);
    return self;
},
args: ["s"],
source: "scale: s\x0a\x09| area|\x0a\x09area := self area.\x0a\x09self resizeWidth: (area at: #w) * s height: (area at: #h) * s.\x0a",
messageSends: ["area", "resizeWidth:height:", "*", "at:"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_selectWidth_height_",
smalltalk.method({
selector: "selectWidth:height:",
category: 'action',
fn: function (width, height) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    smalltalk.send(self['@jcrop'], "_animateTo_", [[smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")]), ($receiver = smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")])).klass === smalltalk.Number ? $receiver + width : smalltalk.send($receiver, "__plus", [width]), ($receiver = smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")])).klass === smalltalk.Number ? $receiver + height : smalltalk.send($receiver, "__plus", [height])]]);
    return self;
},
args: ["width", "height"],
source: "selectWidth: width height: height\x0a\x09| area |\x0a\x09area := jcrop tellSelect.\x0a\x09jcrop animateTo: {\x0a\x09\x09area at: #x.\x0a\x09\x09area at: #y.\x0a\x09\x09(area at: #x) + width.\x0a\x09\x09(area at: #y) + height }.",
messageSends: ["tellSelect", "animateTo:", "at:", "+"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_selectX_y_",
smalltalk.method({
selector: "selectX:y:",
category: 'action',
fn: function (x, y) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    smalltalk.send(self['@jcrop'], "_animateTo_", [[x, y, ($receiver = x).klass === smalltalk.Number ? $receiver + smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]) : smalltalk.send($receiver, "__plus", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")])]), ($receiver = y).klass === smalltalk.Number ? $receiver + smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")]) : smalltalk.send($receiver, "__plus", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")])])]]);
    return self;
},
args: ["x", "y"],
source: "selectX: x y: y\x0a\x09| area |\x0a\x09area := jcrop tellSelect.\x0a\x09jcrop animateTo: {\x0a\x09\x09x.\x0a\x09\x09y.\x0a\x09\x09x + (area at: #w).\x0a\x09\x09y + (area at: #h) }",
messageSends: ["tellSelect", "animateTo:", "+", "at:"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_src",
smalltalk.method({
selector: "src",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_img", []), "_src", []);
    return self;
},
args: [],
source: "src\x0a\x09^ self img src",
messageSends: ["src", "img"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_src_",
smalltalk.method({
selector: "src:",
category: 'accessing',
fn: function (url) {
    var self = this;
    smalltalk.send(self['@img'], "_src_", [url]);
    return self;
},
args: ["url"],
source: "src: url\x0a\x09img src: url.\x0a",
messageSends: ["src:"],
referencedClasses: []
}),
smalltalk.ImageEditor);



smalltalk.addClass('ProxyImageEditor', smalltalk.ImageEditor, [], 'DyNagoya-Tools');
smalltalk.ProxyImageEditor.comment="editor := ProxyImageEditor open: 'http://cdn-ak.f.st-hatena.com/images/fotolife/c/chun_it/20080512/20080512162247.jpg'"

smalltalk.addMethod(
"_open_",
smalltalk.method({
selector: "open:",
category: 'not yet classified',
fn: function (url) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_openWithProxy_", [url]);
    return self;
},
args: ["url"],
source: "open: url\x0a\x09^ self new openWithProxy: url",
messageSends: ["openWithProxy:", "new"],
referencedClasses: []
}),
smalltalk.ProxyImageEditor.klass);


smalltalk.addClass('InspectorDialog', smalltalk.DialogBox, ['inspector'], 'DyNagoya-Tools');
smalltalk.InspectorDialog.comment="element.style {\x0a    background: url(\x22../images/sprite.amber.png\x22) repeat scroll 0 -27px #DBD9C9;\x0a    font-weight: bold;\x0a    height: 22px;\x0a    margin: 0;\x0a    padding: 0;\x0a    position: absolute;\x0a    top: 150px;\x0a    width: 100%;\x0a}"
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.InspectorDialog.superclass || nil);
    self['@inspector'] = smalltalk.send(smalltalk.Inspector || Inspector, "_new", []);
    (function ($rec) {smalltalk.send($rec, "_title_", ["Inspector"]);smalltalk.send($rec, "_height_", [500]);return smalltalk.send($rec, "_modal_", [false]);}(self));
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09inspector := Inspector new.\x0a\x09self \x0a\x09\x09title: 'Inspector'; \x0a\x09\x09height: 500;\x0a\x09\x09modal: false",
messageSends: ["initialize", "new", "title:", "height:", "modal:"],
referencedClasses: ["Inspector"]
}),
smalltalk.InspectorDialog);

smalltalk.addMethod(
"_inspector",
smalltalk.method({
selector: "inspector",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@inspector'];
    return self;
},
args: [],
source: "inspector\x0a\x09^ inspector",
messageSends: [],
referencedClasses: []
}),
smalltalk.InspectorDialog);

smalltalk.addMethod(
"_inspector_",
smalltalk.method({
selector: "inspector:",
category: 'not yet classified',
fn: function (aInspector) {
    var self = this;
    self['@inspector'] = aInspector;
    return self;
},
args: ["aInspector"],
source: "inspector: aInspector\x0a\x09inspector := aInspector",
messageSends: [],
referencedClasses: []
}),
smalltalk.InspectorDialog);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_widget_", [self['@inspector']]);
    smalltalk.send(self, "_open", [], smalltalk.InspectorDialog.superclass || nil);
    return self;
},
args: [],
source: "open\x0a\x09self widget: inspector.\x0a\x09super open",
messageSends: ["widget:", "open"],
referencedClasses: []
}),
smalltalk.InspectorDialog);



smalltalk.addClass('TranscriptDialog', smalltalk.DialogBox, [], 'DyNagoya-Tools');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_dialog_", ["destroy"]);
    return self;
},
args: [],
source: "close\x0a\x09 body asJQuery dialog: 'destroy'",
messageSends: ["dialog:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TranscriptDialog);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.TranscriptDialog.superclass || nil);
    (function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(smalltalk.IDETranscript || IDETranscript, "_current", [])]);smalltalk.send($rec, "_title_", ["Transcript"]);return smalltalk.send($rec, "_modal_", [false]);}(self));
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09widget: (IDETranscript current); \x0a\x09\x09title: 'Transcript'; \x0a\x09\x09modal: false",
messageSends: ["initialize", "widget:", "current", "title:", "modal:"],
referencedClasses: ["IDETranscript"]
}),
smalltalk.TranscriptDialog);


smalltalk.TranscriptDialog.klass.iVarNames = ['s'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = typeof s == "undefined" ? nil : s) == nil ||
        $receiver == undefined ? function () {return s = smalltalk.send(self, "_new", [], smalltalk.TranscriptDialog.klass.superclass || nil);}() : $receiver;
    return typeof s == "undefined" ? nil : s;
    return self;
},
args: [],
source: "new\x0a\x09s ifNil: [ s := super new ].\x0a\x09^ s",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TranscriptDialog.klass);


smalltalk.addClass('WorkspaceDialog', smalltalk.DialogBox, ['workspace'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_big",
smalltalk.method({
selector: "big",
category: 'not yet classified',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_setOption_value_", ["lineNumbers", false]);return smalltalk.send($rec, "_setOption_value_", ["theme", "amberbig"]);}(self['@widget']['@sourceArea']['@editor']));
    return self;
},
args: [],
source: "big\x0a\x09(< self[\x22@widget\x22][\x22@sourceArea\x22][\x22@editor\x22] >)\x0a\x09\x09setOption: 'lineNumbers' value: false;\x0a\x09\x09setOption: 'theme' value: 'amberbig'\x09\x09",
messageSends: ["setOption:value:"],
referencedClasses: []
}),
smalltalk.WorkspaceDialog);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_dialog_", ["destroy"]);
    return self;
},
args: [],
source: "close\x0a\x09 body asJQuery dialog: 'destroy'",
messageSends: ["dialog:", "asJQuery"],
referencedClasses: []
}),
smalltalk.WorkspaceDialog);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.WorkspaceDialog.superclass || nil);
    self['@workspace'] = smalltalk.send(smalltalk.Workspace || Workspace, "_new", []);
    (function ($rec) {smalltalk.send($rec, "_widget_", [self['@workspace']]);smalltalk.send($rec, "_title_", ["Workspace"]);return smalltalk.send($rec, "_modal_", [false]);}(self));
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09workspace := Workspace new.\x0a\x09self \x0a\x09\x09widget: workspace;\x0a\x09\x09title: 'Workspace'; \x0a\x09\x09modal: false",
messageSends: ["initialize", "new", "widget:", "title:", "modal:"],
referencedClasses: ["Workspace"]
}),
smalltalk.WorkspaceDialog);

smalltalk.addMethod(
"_normal",
smalltalk.method({
selector: "normal",
category: 'not yet classified',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_setOption_value_", ["lineNumbers", true]);return smalltalk.send($rec, "_setOption_value_", ["theme", "amber"]);}(self['@widget']['@sourceArea']['@editor']));
    return self;
},
args: [],
source: "normal\x0a\x09(< self[\x22@widget\x22][\x22@sourceArea\x22][\x22@editor\x22] >)\x0a\x09\x09setOption: 'lineNumbers' value: true;\x0a\x09\x09setOption: 'theme' value: 'amber'\x09\x09",
messageSends: ["setOption:value:"],
referencedClasses: []
}),
smalltalk.WorkspaceDialog);


smalltalk.WorkspaceDialog.klass.iVarNames = ['s'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = self['@s']) == nil || $receiver == undefined ? function () {return self['@s'] = smalltalk.send(self, "_new", [], smalltalk.WorkspaceDialog.klass.superclass || nil);}() : $receiver;
    return self['@s'];
    return self;
},
args: [],
source: "new\x0a\x09s ifNil: [ s := super new ].\x0a\x09^ s",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.WorkspaceDialog.klass);


smalltalk.addClass('EventSource', smalltalk.Object, ['observers', 'lastValue'], 'DyNagoya-Tools');
smalltalk.addMethod(
"__gt_gt_gt",
smalltalk.method({
selector: ">>>",
category: 'not yet classified',
fn: function (aBlock) {
    var self = this;
    var second = nil;
    second = smalltalk.send(smalltalk.send(smalltalk.ConnectedEventSource || ConnectedEventSource, "_new", []), "_converter_", [aBlock]);
    smalltalk.send(self, "_subscribe_", [second]);
    return second;
    return self;
},
args: ["aBlock"],
source: ">>> aBlock\x0a\x09| second |\x0a\x09second := ConnectedEventSource new converter: aBlock.\x0a\x09self subscribe: second.\x0a\x09^ second",
messageSends: ["converter:", "new", "subscribe:"],
referencedClasses: ["ConnectedEventSource"]
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_fire_",
smalltalk.method({
selector: "fire:",
category: 'not yet classified',
fn: function (ev) {
    var self = this;
    self['@lastValue'] = ev;
    smalltalk.send(self['@observers'], "_do_", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_value_", [ev]);}]);
    return self;
},
args: ["ev"],
source: "fire: ev\x0a\x09lastValue := ev.\x0a\x09observers do: [ %1 value: ev ]",
messageSends: ["do:", "value:"],
referencedClasses: []
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@observers'] = smalltalk.send(smalltalk.Set || Set, "_new", []);
    return self;
},
args: [],
source: "initialize\x0a\x09observers := Set new",
messageSends: ["new"],
referencedClasses: ["Set"]
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
category: 'not yet classified',
fn: function (ob) {
    var self = this;
    smalltalk.send(self['@observers'], "_add_", [ob]);
    return self;
},
args: ["ob"],
source: "subscribe: ob\x0a\x09observers add: ob",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_unsubscribe_",
smalltalk.method({
selector: "unsubscribe:",
category: 'not yet classified',
fn: function (ob) {
    var self = this;
    smalltalk.send(self['@observers'], "_remove_", [ob]);
    return self;
},
args: ["ob"],
source: "unsubscribe: ob\x0a\x09observers remove: ob",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@lastValue'];
    return self;
},
args: [],
source: "value\x0a\x09^ lastValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.EventSource);


smalltalk.addMethod(
"_toggle_",
smalltalk.method({
selector: "toggle:",
category: 'not yet classified',
fn: function (flag) {
    var self = this;
    return function () {flag = smalltalk.send(flag, "_not", []);return flag;};
    return self;
},
args: ["flag"],
source: "toggle: flag\x0a\x09^ [ flag := flag not. flag ] ",
messageSends: ["not"],
referencedClasses: []
}),
smalltalk.EventSource.klass);


smalltalk.addClass('ConnectedEventSource', smalltalk.EventSource, ['converter'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_converter",
smalltalk.method({
selector: "converter",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@converter'];
    return self;
},
args: [],
source: "converter\x0a\x09^ converter",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConnectedEventSource);

smalltalk.addMethod(
"_converter_",
smalltalk.method({
selector: "converter:",
category: 'not yet classified',
fn: function (aConverter) {
    var self = this;
    self['@converter'] = aConverter;
    return self;
},
args: ["aConverter"],
source: "converter: aConverter\x0a\x09converter := aConverter",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConnectedEventSource);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'not yet classified',
fn: function (aObj) {
    var self = this;
    smalltalk.send(self, "_fire_", [smalltalk.send(self['@converter'], "_value_", [aObj])]);
    return self;
},
args: ["aObj"],
source: "value: aObj\x0a\x09self fire: ( converter value: aObj )",
messageSends: ["fire:", "value:"],
referencedClasses: []
}),
smalltalk.ConnectedEventSource);



smalltalk.addClass('GoogleMap', smalltalk.Object, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_link_address_",
smalltalk.method({
selector: "link:address:",
category: 'not yet classified',
fn: function (html, aStr) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send(self, "_url_", [aStr])]);smalltalk.send($rec, "_title_", [aStr]);smalltalk.send($rec, "_at_put_", ["target", "_blank"]);return smalltalk.send($rec, "_with_", [unescape("%28map%29")]);}(smalltalk.send(html, "_a", [])));
    return self;
},
args: ["html", "aStr"],
source: "link: html address: aStr\x0a\x09html a \x0a\x09\x09href: (self url: aStr);\x0a\x09\x09title: aStr;\x0a\x09\x09at: 'target' put: '_blank'; \x0a\x09\x09with:'(map)'\x0a\x09",
messageSends: ["href:", "url:", "title:", "at:put:", "with:", "a"],
referencedClasses: []
}),
smalltalk.GoogleMap.klass);

smalltalk.addMethod(
"_url_",
smalltalk.method({
selector: "url:",
category: 'not yet classified',
fn: function (address) {
    var self = this;
    return smalltalk.send(unescape("http%3A//maps.google.co.jp/maps%3Fq%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [address])]);
    return self;
},
args: ["address"],
source: "url: address\x0a\x09^ 'http://maps.google.co.jp/maps?q=', (Util encode: address)",
messageSends: [",", "encode:"],
referencedClasses: ["Util"]
}),
smalltalk.GoogleMap.klass);


smalltalk.addClass('RemoteObject', smalltalk.Object, ['obj', 'group', 'key'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_delete",
smalltalk.method({
selector: "delete",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.RemoteObject || RemoteObject, "_delete_group_key_", [smalltalk.send(self, "_class", []), self['@group'], self['@key']]);
    return self;
},
args: [],
source: "delete\x0a\x09RemoteObject delete: self class group: group key: key\x0a\x09",
messageSends: ["delete:group:key:", "class"],
referencedClasses: ["RemoteObject"]
}),
smalltalk.RemoteObject);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'not yet classified',
fn: function (aMessage) {
    var self = this;
    try {
        (function ($rec) {smalltalk.send($rec, "_ifEmpty_", [function () {return function () {throw {name: "stReturn", selector: "_doesNotUnderstand_", fn: function () {return smalltalk.send(self['@obj'], "_at_", [smalltalk.send(aMessage, "_selector", [])]);}};}();}]);return smalltalk.send($rec, "_ifNotEmpty_", [function () {return function () {throw {name: "stReturn", selector: "_doesNotUnderstand_", fn: function () {return smalltalk.send(self, "_doesNotUnderStand_", [aMessage], smalltalk.Object);}};}();}]);}(smalltalk.send(aMessage, "_arguments", [])));
        return self;
    } catch (e) {
        if (e.name === "stReturn" && e.selector === "_doesNotUnderstand_") {
            return e.fn();
        }
        throw e;
    }
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09aMessage arguments \x0a\x09\x09ifEmpty:[ ^ obj at: aMessage selector ];\x0a\x09\x09ifNotEmpty: [ ^ super doesNotUnderStand: aMessage ]",
messageSends: ["ifEmpty:", "at:", "selector", "ifNotEmpty:", "doesNotUnderStand:", "arguments"],
referencedClasses: []
}),
smalltalk.RemoteObject);

smalltalk.addMethod(
"_initialize_group_key_",
smalltalk.method({
selector: "initialize:group:key:",
category: 'not yet classified',
fn: function (aObj, aGroup, aKey) {
    var self = this;
    self['@obj'] = aObj;
    self['@group'] = aGroup;
    self['@key'] = aKey;
    return self;
},
args: ["aObj", "aGroup", "aKey"],
source: "initialize: aObj group: aGroup key: aKey\x0a\x09obj := aObj.\x0a\x09group := aGroup.\x0a\x09key := aKey",
messageSends: [],
referencedClasses: []
}),
smalltalk.RemoteObject);


smalltalk.addMethod(
"_afterDelete",
smalltalk.method({
selector: "afterDelete",
category: 'event handling',
fn: function () {
    var self = this;
    return function (num) {return nil;};
    return self;
},
args: [],
source: "afterDelete\x0a\x09^ [ :num | ]\x0a\x09\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_afterGet_",
smalltalk.method({
selector: "afterGet:",
category: 'event handling',
fn: function (aBlock) {
    var self = this;
    return function (all) {return smalltalk.send(aBlock, "_value_", [smalltalk.send(all, "_collect_", [function (each) {return smalltalk.send(smalltalk.send(self, "_new", []), "_initialize_group_key_", [smalltalk.send(each, "_body", []), smalltalk.send(each, "_group", []), smalltalk.send(each, "_key", [])]);}])]);};
    return self;
},
args: ["aBlock"],
source: "afterGet: aBlock\x0a\x09^ [ :all | \x0a\x09\x09aBlock value: \x0a\x09\x09\x09(all collect: [ :each | self new initialize: each body group: each group key: each key] ) ]",
messageSends: ["value:", "collect:", "initialize:group:key:", "new", "body", "group", "key"],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_afterPut",
smalltalk.method({
selector: "afterPut",
category: 'event handling',
fn: function () {
    var self = this;
    return function (num) {return nil;};
    return self;
},
args: [],
source: "afterPut\x0a\x09^ [ :num | ]\x0a\x09\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_delete_group_key_",
smalltalk.method({
selector: "delete:group:key:",
category: 'not yet classified',
fn: function (clazz, group, key) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(self, "_url_group_key_", [smalltalk.send(clazz, "_asString", []), group, key]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["DELETE"]), smalltalk.send("success", "__minus_gt", [smalltalk.send(self, "_afterDelete", [])])])]);
    return self;
},
args: ["clazz", "group", "key"],
source: "delete: clazz group: group key: key\x0a\x09^ jQuery\x0a\x09\x09ajax: (self url: (clazz asString) group: group key: key)\x0a\x09\x09option: #{\x0a\x09\x09\x09'type' -> 'DELETE'.\x0a\x09\x09\x09'success' -> self afterDelete\x0a\x09\x09}",
messageSends: ["ajax:option:", "url:group:key:", "asString", "->", "afterDelete"],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'not yet classified',
fn: function (aMessage) {
    var self = this;
    var map = nil;
    var group = nil;
    var key = nil;
    map = smalltalk.send(smalltalk.Util || Util, "_messageMap_", [aMessage]);
    group = smalltalk.send(smalltalk.send(map, "_first", []), "_value", []);
    key = smalltalk.send(smalltalk.send(map, "_second", []), "_value", []);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(map, "_last", []), "_key", []), "__eq", ["delete"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_delete_group_key_", [self, group, key]);}() : function () {return smalltalk.send(self, "_put_group_key_body_", [self, group, key, smalltalk.send(smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_fromPairs_", [map]), "_asJSONString", [])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_delete_group_key_", [self, group, key]);}, function () {return smalltalk.send(self, "_put_group_key_body_", [self, group, key, smalltalk.send(smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_fromPairs_", [map]), "_asJSONString", [])]);}]);
    return self;
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09| map group key |\x0a\x09map := Util messageMap: aMessage.\x0a\x09group := map first value.\x0a\x09key := map second value.\x0a\x09map last key = 'delete'\x0a\x09\x09ifTrue: [ self delete: self group: group key: key]\x0a\x09\x09ifFalse: [ self put: self group: group key: key body: ((HashedCollection fromPairs: map) asJSONString) ]",
messageSends: ["messageMap:", "value", "first", "second", "ifTrue:ifFalse:", "=", "key", "last", "delete:group:key:", "put:group:key:body:", "asJSONString", "fromPairs:"],
referencedClasses: ["Util", "HashedCollection"]
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_list_",
smalltalk.method({
selector: "list:",
category: 'not yet classified',
fn: function (group) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("/data/"), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("/")]), "__comma", [group]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["json"]), smalltalk.send("success", "__minus_gt", [smalltalk.send(self, "_onSuccess", [])])])]);
    return self;
},
args: ["group"],
source: "list: group\x0a\x09^ jQuery\x0a\x09\x09ajax: ('/data/', self asString, '/', group)\x0a\x09\x09option: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09'dataType' -> 'json'.\x0a\x09\x09\x09'success' -> self onSuccess\x0a\x09\x09}",
messageSends: ["ajax:option:", ",", "asString", "->", "onSuccess"],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_list_callback_",
smalltalk.method({
selector: "list:callback:",
category: 'not yet classified',
fn: function (group, aBlock) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("/data/"), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("/")]), "__comma", [group]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["json"]), smalltalk.send("success", "__minus_gt", [smalltalk.send(self, "_afterGet_", [aBlock])])])]);
    return self;
},
args: ["group", "aBlock"],
source: "list: group callback: aBlock\x0a\x09^ jQuery\x0a\x09\x09ajax: ('/data/', self asString, '/', group)\x0a\x09\x09option: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09'dataType' -> 'json'.\x0a\x09\x09\x09'success' -> (self afterGet: aBlock)\x0a\x09\x09}",
messageSends: ["ajax:option:", ",", "asString", "->", "afterGet:"],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_put_group_key_body_",
smalltalk.method({
selector: "put:group:key:body:",
category: 'not yet classified',
fn: function (clazz, group, key, body) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(self, "_url_group_key_", [smalltalk.send(clazz, "_asString", []), group, key]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]), smalltalk.send("data", "__minus_gt", [smalltalk.send(smalltalk.HashedCollection._fromPairs_([smalltalk.send("body", "__minus_gt", [body])]), "_asJSON", [])]), smalltalk.send("success", "__minus_gt", [smalltalk.send(self, "_afterPut", [])])])]);
    return self;
},
args: ["clazz", "group", "key", "body"],
source: "put: clazz group: group key: key body: body\x0a\x09^ jQuery\x0a\x09\x09ajax: (self url: (clazz asString) group: group key: key)\x0a\x09\x09option: #{\x0a\x09\x09\x09'type' -> 'PUT'.\x0a\x09\x09\x09'data' -> #{'body' -> body} asJSON.\x0a\x09\x09\x09'success' -> self afterPut\x0a\x09\x09}",
messageSends: ["ajax:option:", "url:group:key:", "asString", "->", "asJSON", "afterPut"],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_url_group_key_",
smalltalk.method({
selector: "url:group:key:",
category: 'private',
fn: function (clazz, group, key) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/data/"), "__comma", [smalltalk.send(clazz, "_asString", [])]), "__comma", [unescape("/")]), "__comma", [group]), "__comma", [unescape("/")]), "__comma", [key]);
    return self;
},
args: ["clazz", "group", "key"],
source: "url: clazz group: group key: key\x0a\x09^ '/data/', clazz asString, '/', group, '/', key",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);


smalltalk.addClass('ToggleButton', smalltalk.Widget, ['state', 'source', 'body', 'renderWhenOn', 'renderWhenOff'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@source'] = smalltalk.send(smalltalk.EventSource || EventSource, "_new", []);
    self['@state'] = smalltalk.send(self['@source'], "__gt_gt_gt", [smalltalk.send(smalltalk.EventSource || EventSource, "_toggle_", [false])]);
    smalltalk.send(smalltalk.send(self['@state'], "__gt_gt_gt", [function (thisisplaceholder1) {return ($receiver = thisisplaceholder1).klass === smalltalk.Boolean ? $receiver ? function () {return self['@renderWhenOn'];}() : function () {return self['@renderWhenOff'];}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return self['@renderWhenOn'];}, function () {return self['@renderWhenOff'];}]);}]), "__gt_gt_gt", [function (thisisplaceholder1) {return smalltalk.send(self, "_redraw_", [thisisplaceholder1]);}]);
    self['@renderWhenOn'] = function (html) {return nil;};
    self['@renderWhenOff'] = function (html) {return nil;};
    return self;
},
args: [],
source: "initialize\x0a\x09source := EventSource new.\x0a\x09state := source >>> (EventSource toggle: false).\x0a\x09state >>>  [ %1\x0a\x09\x09\x09\x09ifTrue: [ renderWhenOn ]\x0a\x09\x09\x09\x09ifFalse: [ renderWhenOff] ] \x0a\x09\x09>>> [ self redraw: %1].\x0a\x09renderWhenOn := [ :html | ].\x0a\x09renderWhenOff := [ :html | ].",
messageSends: ["new", ">>>", "toggle:", "ifTrue:ifFalse:", "redraw:"],
referencedClasses: ["EventSource"]
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_redraw_",
smalltalk.method({
selector: "redraw:",
category: 'not yet classified',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self['@body'], "_contents_", [aBlock]);
    return self;
},
args: ["aBlock"],
source: "redraw: aBlock\x0a\x09body contents: aBlock\x0a",
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    self['@body'] = function ($rec) {smalltalk.send($rec, "_onClick_", [function (thisisplaceholder1) {return smalltalk.send(self['@source'], "_fire_", [thisisplaceholder1]);}]);return smalltalk.send($rec, "_css_put_", ["cursor", "pointer"]);}(smalltalk.send(html, "_span", []));
    smalltalk.send(self['@state'], "_fire_", [false]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09body := html span \x0a\x09\x09onClick: [ source fire: %1 ];  \x0a\x09\x09css: 'cursor' put: 'pointer'.\x0a\x09state fire: false\x0a",
messageSends: ["onClick:", "fire:", "css:put:", "span"],
referencedClasses: []
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_renderWhenOff_",
smalltalk.method({
selector: "renderWhenOff:",
category: 'not yet classified',
fn: function (aBlock) {
    var self = this;
    self['@renderWhenOff'] = aBlock;
    return self;
},
args: ["aBlock"],
source: "renderWhenOff: aBlock\x0a\x09renderWhenOff := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_renderWhenOn_",
smalltalk.method({
selector: "renderWhenOn:",
category: 'not yet classified',
fn: function (aBlock) {
    var self = this;
    self['@renderWhenOn'] = aBlock;
    return self;
},
args: ["aBlock"],
source: "renderWhenOn: aBlock\x0a\x09renderWhenOn := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_toggle",
smalltalk.method({
selector: "toggle",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@state'];
    return self;
},
args: [],
source: "toggle\x0a\x09^ state",
messageSends: [],
referencedClasses: []
}),
smalltalk.ToggleButton);



smalltalk.addClass('RectangleButton', smalltalk.ToggleButton, [], 'DyNagoya-Tools');
smalltalk.addMethod(
"_label_frontColor_backColor_",
smalltalk.method({
selector: "label:frontColor:backColor:",
category: 'not yet classified',
fn: function (aString, front, back) {
    var self = this;
    self['@label'] = aString;
    self['@renderWhenOn'] = function (html) {return function ($rec) {smalltalk.send($rec, "_with_", [self['@label']]);return smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_onStyle_fontColor_", [back, front])]);}(smalltalk.send(html, "_span", []));};
    self['@renderWhenOff'] = function (html) {return function ($rec) {smalltalk.send($rec, "_with_", [self['@label']]);return smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_offStyle", [])]);}(smalltalk.send(html, "_span", []));};
    return self;
},
args: ["aString", "front", "back"],
source: "label: aString frontColor: front backColor: back\x0a\x09label := aString.\x0a\x09renderWhenOn := [ :html | \x0a\x09\x09html span with: label; |> ( self onStyle: back fontColor: front )\x0a\x09].\x0a\x09renderWhenOff := [ :html |\x0a\x09\x09html span with: label; |> self offStyle\x0a\x09]\x0a",
messageSends: ["with:", "|>", "onStyle:fontColor:", "span", "offStyle"],
referencedClasses: []
}),
smalltalk.RectangleButton);

smalltalk.addMethod(
"_offStyle",
smalltalk.method({
selector: "offStyle",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);smalltalk.send($rec, "_css_put_", ["padding", "2px"]);smalltalk.send($rec, "_css_put_", ["font-size", "0.8em"]);smalltalk.send($rec, "_css_put_", ["border", "1px solid white"]);smalltalk.send($rec, "_css_put_", ["background", ""]);return smalltalk.send($rec, "_css_put_", ["color", ""]);}(thisisplaceholder1);};
    return self;
},
args: [],
source: "offStyle\x0a  ^ [ %1\x0a\x09css: 'margin-left' put: '10px';\x0a\x09css: 'padding' put: '2px';\x0a\x09css: 'font-size' put: '0.8em';\x0a\x09css: 'border' put: '1px solid white';\x0a\x09css: 'background' put: '';\x0a\x09css: 'color' put: ''\x0a     ]",
messageSends: ["css:put:"],
referencedClasses: []
}),
smalltalk.RectangleButton);

smalltalk.addMethod(
"_onStyle_fontColor_",
smalltalk.method({
selector: "onStyle:fontColor:",
category: 'not yet classified',
fn: function (backColor, fontColor) {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);smalltalk.send($rec, "_css_put_", ["padding", "2px"]);smalltalk.send($rec, "_css_put_", ["font-size", "0.8em"]);smalltalk.send($rec, "_css_put_", ["border", smalltalk.send("1px solid ", "__comma", [backColor])]);smalltalk.send($rec, "_css_put_", ["background", backColor]);return smalltalk.send($rec, "_css_put_", ["color", fontColor]);}(thisisplaceholder1);};
    return self;
},
args: ["backColor", "fontColor"],
source: "onStyle: backColor fontColor: fontColor\x0a  ^ [ %1\x0a\x09css: 'margin-left' put: '10px';\x0a\x09css: 'padding' put: '2px';\x0a\x09css: 'font-size' put: '0.8em';\x0a\x09css: 'border' put: '1px solid ', backColor;\x0a\x09css: 'background' put: backColor;\x0a\x09css: 'color' put: fontColor\x0a     ]",
messageSends: ["css:put:", ","],
referencedClasses: []
}),
smalltalk.RectangleButton);



smalltalk.addClass('Twitter', smalltalk.Object, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_iconUrl_",
smalltalk.method({
selector: "iconUrl:",
category: 'not yet classified',
fn: function (user) {
    var self = this;
    return smalltalk.send(smalltalk.send(unescape("http%3A//img.tweetimag.es/i/"), "__comma", [user]), "__comma", ["_m"]);
    return self;
},
args: ["user"],
source: "iconUrl: user \x0a\x09^ 'http://img.tweetimag.es/i/', user, '_m'",
messageSends: [","],
referencedClasses: []
}),
smalltalk.Twitter.klass);

smalltalk.addMethod(
"_link_user_",
smalltalk.method({
selector: "link:user:",
category: 'not yet classified',
fn: function (html, user) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send(self, "_linkUrl_", [user])]);smalltalk.send($rec, "_at_put_", ["title", user]);smalltalk.send($rec, "_at_put_", ["target", "_blank"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_iconUrl_", [user])]);}]);}(smalltalk.send(html, "_a", [])));
    return self;
},
args: ["html", "user"],
source: "link: html user: user\x0a\x09html a href: (self linkUrl: user); at: 'title' put: user; at: 'target' put: '_blank'; with:[\x0a\x09\x09html img src: (self iconUrl: user)\x0a\x09]",
messageSends: ["href:", "linkUrl:", "at:put:", "with:", "src:", "img", "iconUrl:", "a"],
referencedClasses: []
}),
smalltalk.Twitter.klass);

smalltalk.addMethod(
"_linkUrl_",
smalltalk.method({
selector: "linkUrl:",
category: 'not yet classified',
fn: function (user) {
    var self = this;
    return smalltalk.send(unescape("http%3A//twitter.com/"), "__comma", [user]);
    return self;
},
args: ["user"],
source: "linkUrl: user \x0a\x09^ 'http://twitter.com/', user",
messageSends: [","],
referencedClasses: []
}),
smalltalk.Twitter.klass);

smalltalk.addMethod(
"_tweet_",
smalltalk.method({
selector: "tweet:",
category: 'not yet classified',
fn: function (msg) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", ["/tweet", smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]), smalltalk.send("dataType", "__minus_gt", ["json"]), smalltalk.send("data", "__minus_gt", [{tweet: msg}])])]);
    return msg;
    return self;
},
args: ["msg"],
source: "tweet: msg\x0a\x09jQuery\x0a\x09\x09ajax: '/tweet'\x0a\x09\x09option: #{\x0a\x09\x09\x09'type' -> 'POST'.\x0a\x09\x09\x09'dataType' -> 'json'.\x0a\x09\x09\x09'data' -> (<{tweet: msg}>)\x0a\x09\x09}.\x0a  ^ msg",
messageSends: ["ajax:option:", "->"],
referencedClasses: []
}),
smalltalk.Twitter.klass);


smalltalk.addClass('Util', smalltalk.Object, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_encode_",
smalltalk.method({
selector: "encode:",
category: 'not yet classified',
fn: function (str) {
    var self = this;
    return encodeURIComponent(str);
    return self;
},
args: ["str"],
source: "encode: str\x0a\x09^ (< encodeURIComponent(str) >)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Util.klass);

smalltalk.addMethod(
"_encodeURI_",
smalltalk.method({
selector: "encodeURI:",
category: 'not yet classified',
fn: function (str) {
    var self = this;
    return encodeURI(str);
    return self;
},
args: ["str"],
source: "encodeURI: str\x0a\x09^ (< encodeURI(str) >)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Util.klass);

smalltalk.addMethod(
"_escape_",
smalltalk.method({
selector: "escape:",
category: 'not yet classified',
fn: function (str) {
    var self = this;
    return escape(str);
    return self;
},
args: ["str"],
source: "escape: str\x0a\x09^ (< escape(str) >)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Util.klass);

smalltalk.addMethod(
"_messageMap_",
smalltalk.method({
selector: "messageMap:",
category: 'not yet classified',
fn: function (aMessage) {
    var self = this;
    var selectors = nil;
    var arguments = nil;
    var ret = nil;
    selectors = smalltalk.send(smalltalk.Util || Util, "_split_with_", [smalltalk.send(aMessage, "_selector", []), ":"]);
    arguments = smalltalk.send(aMessage, "_arguments", []);
    ret = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(arguments, "_withIndexDo_", [function (each, i) {return smalltalk.send(ret, "_add_", [smalltalk.send(smalltalk.send(selectors, "_at_", [i]), "__minus_gt", [each])]);}]);
    return ret;
    return self;
},
args: ["aMessage"],
source: "messageMap: aMessage\x0a\x09| selectors arguments ret |\x0a\x09selectors := Util split: (aMessage selector) with: ':'.\x0a\x09arguments := aMessage arguments.\x0a\x09ret := Array new.\x0a\x09arguments withIndexDo: [ :each :i | ret add: ((selectors at: i) -> each )].\x0a\x09^ ret",
messageSends: ["split:with:", "selector", "arguments", "new", "withIndexDo:", "add:", "->", "at:"],
referencedClasses: ["Util", "Array"]
}),
smalltalk.Util.klass);

smalltalk.addMethod(
"_split_with_",
smalltalk.method({
selector: "split:with:",
category: 'not yet classified',
fn: function (str, delimiter) {
    var self = this;
    return str.split(delimiter);
    return self;
},
args: ["str", "delimiter"],
source: "split: str with: delimiter\x0a\x09^ < str.split(delimiter) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Util.klass);


