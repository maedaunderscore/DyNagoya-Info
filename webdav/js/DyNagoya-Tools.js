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
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {aBlock();$(this).dialog("close");}}]);
    return self;
},
args: ["label", "aBlock"],
source: "button: label action: aBlock\x0a\x09(option at: 'buttons' ifAbsentPut:[ {} ])\x0a\x09\x09add: (<{text: label, click: function() { aBlock(); $(this).dialog(\x22close\x22); }}>).\x0a",
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
    return self;
},
args: [],
source: "close\x0a\x09 body asJQuery dialog: 'destroy'\x0a",
messageSends: ["dialog:", "asJQuery"],
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
"_defaultOption",
smalltalk.method({
selector: "defaultOption",
category: 'initialization',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [true]), smalltalk.send(smalltalk.symbolFor("sticky"), "__minus_gt", [true])]);
    return self;
},
args: [],
source: "defaultOption\x0a\x09^ #{ 'modal' -> true . #sticky -> true}",
messageSends: ["->"],
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
    (function ($rec) {smalltalk.send($rec, "_css_at_", ["position", "fixed"]);smalltalk.send($rec, "_css_at_", ["left", smalltalk.send(self, "_x", [])]);return smalltalk.send($rec, "_css_at_", ["top", smalltalk.send(self, "_y", [])]);}(smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_parent", [])));
    return self;
},
args: [],
source: "open\x0a\x09 body asJQuery\x0a\x09\x09css: 'font-size' at: (self fontSize); \x0a\x09\x09dialog: option.\x0a         body asJQuery parent\x0a\x09\x09css: 'position' at: 'fixed';\x0a\x09\x09css: 'left' at: (self x);\x0a\x09\x09css: 'top' at: (self y)",
messageSends: ["css:at:", "fontSize", "dialog:", "asJQuery", "x", "y", "parent"],
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


smalltalk.addClass('ImageEditor', smalltalk.DialogBox, ['img', 'canvas', 'jcrop'], 'DyNagoya-Tools');
smalltalk.ImageEditor.comment="x := ImageEditor openWithProxy: 'http://xxxx.com/abc.png'; open\x0a(* select area by drag the image *)\x0a\x0ax crop\x0ax src"
smalltalk.addMethod(
"_area",
smalltalk.method({
selector: "area",
category: 'accessing',
fn: function () {
    var self = this;
    try {
        ($receiver = smalltalk.send(self, "_isSelected", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw {name: "stReturn", selector: "_area", fn: function () {return smalltalk.send(self['@jcrop'], "_tellSelect", []);}};}();}() : function () {var imgJQ = nil;imgJQ = smalltalk.send(self['@img'], "_asJQuery", []);return function () {throw {name: "stReturn", selector: "_area", fn: function () {return smalltalk.HashedCollection._fromPairs_([smalltalk.send(smalltalk.symbolFor("x"), "__minus_gt", [0]), smalltalk.send(smalltalk.symbolFor("y"), "__minus_gt", [0]), smalltalk.send(smalltalk.symbolFor("x2"), "__minus_gt", [smalltalk.send(imgJQ, "_width", [])]), smalltalk.send(smalltalk.symbolFor("y2"), "__minus_gt", [smalltalk.send(imgJQ, "_height", [])]), smalltalk.send(smalltalk.symbolFor("w"), "__minus_gt", [smalltalk.send(imgJQ, "_width", [])]), smalltalk.send(smalltalk.symbolFor("h"), "__minus_gt", [smalltalk.send(imgJQ, "_height", [])])]);}};}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return function () {throw {name: "stReturn", selector: "_area", fn: function () {return smalltalk.send(self['@jcrop'], "_tellSelect", []);}};}();}, function () {var imgJQ = nil;imgJQ = smalltalk.send(self['@img'], "_asJQuery", []);return function () {throw {name: "stReturn", selector: "_area", fn: function () {return smalltalk.HashedCollection._fromPairs_([smalltalk.send(smalltalk.symbolFor("x"), "__minus_gt", [0]), smalltalk.send(smalltalk.symbolFor("y"), "__minus_gt", [0]), smalltalk.send(smalltalk.symbolFor("x2"), "__minus_gt", [smalltalk.send(imgJQ, "_width", [])]), smalltalk.send(smalltalk.symbolFor("y2"), "__minus_gt", [smalltalk.send(imgJQ, "_height", [])]), smalltalk.send(smalltalk.symbolFor("w"), "__minus_gt", [smalltalk.send(imgJQ, "_width", [])]), smalltalk.send(smalltalk.symbolFor("h"), "__minus_gt", [smalltalk.send(imgJQ, "_height", [])])]);}};}();}]);
        return self;
    } catch (e) {
        if (e.name === "stReturn" && e.selector === "_area") {
            return e.fn();
        }
        throw e;
    }
},
args: [],
source: "area\x0a\x09self isSelected \x0a\x09\x09ifTrue: [ ^ jcrop tellSelect ]\x0a\x09\x09ifFalse: [ | imgJQ | \x0a                          imgJQ := img asJQuery.\x0a                          ^ #{ #x -> 0. #y -> 0. #x2 -> imgJQ width. #y2 -> imgJQ height. #w -> imgJQ width. #h -> imgJQ height } ]\x0a",
messageSends: ["ifTrue:ifFalse:", "isSelected", "tellSelect", "asJQuery", "->", "width", "height"],
referencedClasses: []
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
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [false])]);
    return self;
},
args: [],
source: "defaultOption\x0a\x09^ #{ 'modal' -> false }\x0a\x0a",
messageSends: ["->"],
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
smalltalk.ProxyImageEditor.comment="x := ProxyImageEditor open: 'http://cdn-ak.f.st-hatena.com/images/fotolife/c/chun_it/20080512/20080512162247.jpg'; open"

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


