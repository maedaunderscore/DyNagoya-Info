smalltalk.addPackage('DyNagoya-Tools', {});
smalltalk.addClass('Circle', smalltalk.Widget, [], 'DyNagoya-Tools');
smalltalk.addMethod(
"_body_",
smalltalk.method({
selector: "body:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.Circle);

smalltalk.addMethod(
"_circleStyle",
smalltalk.method({
selector: "circleStyle",
fn: function () {
    var self = this;
    var rx = nil;
    var ry = nil;
    rx = smalltalk.send(self, "_radiusX", []);
    ry = smalltalk.send(self, "_radiusY", []);
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("width: ", "__comma", [($receiver = rx).klass === smalltalk.Number ? $receiver * 2 : smalltalk.send($receiver, "__star", [2])]), "__comma", [unescape("px%3Bheight%3A%20")]), "__comma", [($receiver = rx).klass === smalltalk.Number ? $receiver * 2 : smalltalk.send($receiver, "__star", [2])]), "__comma", [unescape("px%3B%20-moz-border-radius%3A")]), "__comma", [rx]), "__comma", [unescape("px%3B-webkit-border-radius%3A")]), "__comma", [rx]), "__comma", [unescape("px%3Bborder-radius%3A%20")]), "__comma", [rx]), "__comma", [unescape("px%3B%20line-height%3A")]), "__comma", [($receiver = rx).klass === smalltalk.Number ? $receiver * 2 : smalltalk.send($receiver, "__star", [2])]), "__comma", [unescape("px%3B%20text-align%3Acenter%3Bposition%3Aabsolute%3B")]);
    return self;
}
}),
smalltalk.Circle);

smalltalk.addMethod(
"_radiusX",
smalltalk.method({
selector: "radiusX",
fn: function () {
    var self = this;
    return 60;
    return self;
}
}),
smalltalk.Circle);

smalltalk.addMethod(
"_radiusY",
smalltalk.method({
selector: "radiusY",
fn: function () {
    var self = this;
    return 100;
    return self;
}
}),
smalltalk.Circle);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["circle"]);smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send(self, "_circleStyle", []), "__comma", [smalltalk.send(self, "_style", [])])]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_body_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Circle);



smalltalk.addClass('DialogBox', smalltalk.Widget, ['message', 'option', 'body', 'aspectRatio', 'fontSize', 'x', 'y', 'widget'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_body",
smalltalk.method({
selector: "body",
fn: function () {
    var self = this;
    return smalltalk.send(self['@body'], "_asJQuery", []);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_body_",
smalltalk.method({
selector: "body:",
fn: function (aBody) {
    var self = this;
    self['@body'] = aBody;
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_button_action_",
smalltalk.method({
selector: "button:action:",
fn: function (label, aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {aBlock();}}]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_dialog_", ["destroy"]);
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_empty", []);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_closeButton_",
smalltalk.method({
selector: "closeButton:",
fn: function (label) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {$(this).dialog("close");}}]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_closeButton_action_",
smalltalk.method({
selector: "closeButton:action:",
fn: function (label, aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {aBlock();$(this).dialog("close");}}]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_defaultOption",
smalltalk.method({
selector: "defaultOption",
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [true]), smalltalk.send("sticky", "__minus_gt", [true]), smalltalk.send("close", "__minus_gt", [function () {return smalltalk.send(self, "_close", []);}]), smalltalk.send("maxHeight", "__minus_gt", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])])]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_fontSize",
smalltalk.method({
selector: "fontSize",
fn: function () {
    var self = this;
    return smalltalk.send(self['@fontSize'], "_default_", ["12px"]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_fontSize_",
smalltalk.method({
selector: "fontSize:",
fn: function (sizeStr) {
    var self = this;
    self['@fontSize'] = sizeStr;
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_height_",
smalltalk.method({
selector: "height:",
fn: function (aHeight) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["height", aHeight]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_image_",
smalltalk.method({
selector: "image:",
fn: function (url) {
    var self = this;
    return smalltalk.send(self, "_with_", [function (html) {return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [url]);}]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Widget);
    self['@option'] = smalltalk.send(self, "_defaultOption", []);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_message_",
smalltalk.method({
selector: "message:",
fn: function (aMessage) {
    var self = this;
    self['@body'] = smalltalk.send(smalltalk.send(unescape("%3Cdiv%3E"), "__comma", [aMessage]), "__comma", [unescape("%3C/div%3E")]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_modal_",
smalltalk.method({
selector: "modal:",
fn: function (flag) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["modal", flag]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_at_", ["font-size", smalltalk.send(self, "_fontSize", [])]);return smalltalk.send($rec, "_dialog_", [self['@option']]);}(smalltalk.send(self['@body'], "_asJQuery", [])));
    (function ($rec) {smalltalk.send($rec, "_addClass_", ["workspace-effect"]);smalltalk.send($rec, "_css_at_", ["position", "fixed"]);smalltalk.send($rec, "_css_at_", ["left", smalltalk.send(self, "_x", [])]);return smalltalk.send($rec, "_css_at_", ["top", smalltalk.send(self, "_y", [])]);}(smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_parent", [])));
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_option",
smalltalk.method({
selector: "option",
fn: function () {
    var self = this;
    return self['@option'];
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_tabWidget_",
smalltalk.method({
selector: "tabWidget:",
fn: function (aWidget) {
    var self = this;
    return smalltalk.send(self, "_with_", [function (html) {return smalltalk.send(aWidget, "_renderBoxOn_", [html]);}]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (aTitle) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["title", aTitle]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
fn: function (aWidget) {
    var self = this;
    self['@widget'] = aWidget;
    return smalltalk.send(self, "_with_", [function (html) {return smalltalk.send(aWidget, "_renderOn_", [html]);}]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_width_",
smalltalk.method({
selector: "width:",
fn: function (aWidth) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["width", aWidth]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (aBlock) {
    var self = this;
    var body = nil;
    self['@body'] = smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []);
    smalltalk.send(aBlock, "_value_", [self['@body']]);
    return smalltalk.send(self, "_body_", [smalltalk.send(self['@body'], "_root", [])]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return smalltalk.send(self['@x'], "_default_", ["50px"]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
fn: function (strPos) {
    var self = this;
    self['@x'] = strPos;
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return smalltalk.send(self['@y'], "_default_", ["50px"]);
    return self;
}
}),
smalltalk.DialogBox);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
fn: function (strPos) {
    var self = this;
    self['@y'] = strPos;
    return self;
}
}),
smalltalk.DialogBox);


smalltalk.addMethod(
"_toggleShow",
smalltalk.method({
selector: "toggleShow",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(".ui-dialog:hidden", "_asJQuery", []), "_length", []), "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(".ui-dialog:visible", "_asJQuery", []), "_hide", []);}() : function () {return smalltalk.send(smalltalk.send(".ui-dialog:hidden", "_asJQuery", []), "_show", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(".ui-dialog:visible", "_asJQuery", []), "_hide", []);}, function () {return smalltalk.send(smalltalk.send(".ui-dialog:hidden", "_asJQuery", []), "_show", []);}]);
    return self;
}
}),
smalltalk.DialogBox.klass);

smalltalk.addMethod(
"_withCancel",
smalltalk.method({
selector: "withCancel",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_closeButton_", ["Cancel"]);
    return self;
}
}),
smalltalk.DialogBox.klass);


smalltalk.addClass('BrowserDialog', smalltalk.DialogBox, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_open_",
smalltalk.method({
selector: "open:",
fn: function (aClass) {
    var self = this;
    return smalltalk.send(self, "_open_browser_", [aClass, smalltalk.ClassBrowser || ClassBrowser]);
    return self;
}
}),
smalltalk.BrowserDialog.klass);

smalltalk.addMethod(
"_open_browser_",
smalltalk.method({
selector: "open:browser:",
fn: function (aClass, browserClass) {
    var self = this;
    var browser = nil;
    var ret = nil;
    browser = smalltalk.send(browserClass, "_hierarchy_", [aClass]);
    ret = function ($rec) {smalltalk.send($rec, "_widget_", [browser]);smalltalk.send($rec, "_width_", ["600px"]);smalltalk.send($rec, "_height_", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.5 : smalltalk.send($receiver, "__star", [0.5])]);smalltalk.send($rec, "_modal_", [false]);smalltalk.send($rec, "_title_", [smalltalk.send(aClass, "_name", [])]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(self, "_new", []));
    smalltalk.send(browser, "_open_", [aClass]);
    return ret;
    return self;
}
}),
smalltalk.BrowserDialog.klass);


smalltalk.addClass('ImageEditor', smalltalk.DialogBox, ['img', 'canvas', 'jcrop'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_area",
smalltalk.method({
selector: "area",
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
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_canvas",
smalltalk.method({
selector: "canvas",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_at_", [0]);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_canvas", []), "_getContext_", ["2d"]);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_copyToImg",
smalltalk.method({
selector: "copyToImg",
fn: function () {
    var self = this;
    smalltalk.send(self, "_src_", [smalltalk.send(smalltalk.send(self, "_canvas", []), "_toDataURL", [])]);
    smalltalk.send(self, "_redraw", []);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_crop",
smalltalk.method({
selector: "crop",
fn: function () {
    var self = this;
    var area = nil;
    area = smalltalk.send(self, "_area", []);
    (function ($rec) {smalltalk.send($rec, "_width_", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")])]);return smalltalk.send($rec, "_height_", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")])]);}(smalltalk.send(self, "_canvas", [])));
    smalltalk.send(smalltalk.send(self, "_context", []), "_drawImage_sx_sy_sw_sh_dx_dy_dw_dh_", [smalltalk.send(self, "_img", []), smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")]), 0, 0, smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")])]);
    smalltalk.send(self, "_copyToImg", []);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_croppable",
smalltalk.method({
selector: "croppable",
fn: function () {
    var self = this;
    var jq = nil;
    ($receiver = self['@jcrop']) != nil && $receiver != undefined ? function () {return smalltalk.send(self['@jcrop'], "_destroy", []);}() : nil;
    jq = smalltalk.send(self['@img'], "_asJQuery", []);
    jq.Jcrop({}, function () {self['@jcrop'] = this;});
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_defaultOption",
smalltalk.method({
selector: "defaultOption",
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [false])]);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_img",
smalltalk.method({
selector: "img",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self['@img'], "_asJQuery", []), "_at_", [0]);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_isSelected",
smalltalk.method({
selector: "isSelected",
fn: function () {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    return smalltalk.send(smalltalk.send(smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), "__eq", [0]), "_not", []);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_open_",
smalltalk.method({
selector: "open:",
fn: function (url) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [function (html) {self['@img'] = smalltalk.send(html, "_img", []);return self['@canvas'] = smalltalk.send(smalltalk.send(html, "_canvas", []), "_css_put_", ["display", "none"]);}]);smalltalk.send($rec, "_width_", [800]);smalltalk.send($rec, "_modal_", [false]);return smalltalk.send($rec, "_open", []);}(self));
    smalltalk.send(self, "_src_", [url]);
    smalltalk.send(self, "_redraw", []);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_openWithProxy_",
smalltalk.method({
selector: "openWithProxy:",
fn: function (url) {
    var self = this;
    smalltalk.send(self, "_open_", [smalltalk.send(self, "_proxy_", [url])]);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_proxy_",
smalltalk.method({
selector: "proxy:",
fn: function (url) {
    var self = this;
    return smalltalk.send(unescape("/proxy%3Fremote%3D"), "__comma", [url]);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_redraw",
smalltalk.method({
selector: "redraw",
fn: function () {
    var self = this;
    smalltalk.send(self, "_croppable", []);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_resizeWidth_height_",
smalltalk.method({
selector: "resizeWidth:height:",
fn: function (w, h) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self, "_area", []);
    (function ($rec) {smalltalk.send($rec, "_width_", [w]);return smalltalk.send($rec, "_height_", [h]);}(smalltalk.send(self, "_canvas", [])));
    smalltalk.send(smalltalk.send(self, "_context", []), "_drawImage_sx_sy_sw_sh_dx_dy_dw_dh_", [smalltalk.send(self, "_img", []), smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")]), 0, 0, w, h]);
    smalltalk.send(self, "_copyToImg", []);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_selectWidth_height_",
smalltalk.method({
selector: "selectWidth:height:",
fn: function (width, height) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    smalltalk.send(self['@jcrop'], "_animateTo_", [[smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")]), ($receiver = smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")])).klass === smalltalk.Number ? $receiver + width : smalltalk.send($receiver, "__plus", [width]), ($receiver = smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")])).klass === smalltalk.Number ? $receiver + height : smalltalk.send($receiver, "__plus", [height])]]);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_selectX_y_",
smalltalk.method({
selector: "selectX:y:",
fn: function (x, y) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    smalltalk.send(self['@jcrop'], "_animateTo_", [[x, y, ($receiver = x).klass === smalltalk.Number ? $receiver + smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]) : smalltalk.send($receiver, "__plus", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")])]), ($receiver = y).klass === smalltalk.Number ? $receiver + smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")]) : smalltalk.send($receiver, "__plus", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")])])]]);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_src",
smalltalk.method({
selector: "src",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_img", []), "_src", []);
    return self;
}
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
"_src_",
smalltalk.method({
selector: "src:",
fn: function (url) {
    var self = this;
    smalltalk.send(self['@img'], "_src_", [url]);
    return self;
}
}),
smalltalk.ImageEditor);



smalltalk.addClass('ProxyImageEditor', smalltalk.ImageEditor, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_open_",
smalltalk.method({
selector: "open:",
fn: function (url) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_openWithProxy_", [url]);
    return self;
}
}),
smalltalk.ProxyImageEditor.klass);


smalltalk.addClass('TranscriptDialog', smalltalk.DialogBox, [], 'DyNagoya-Tools');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_dialog_", ["destroy"]);
    return self;
}
}),
smalltalk.TranscriptDialog);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.TranscriptDialog.superclass || nil);
    (function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(smalltalk.IDETranscript || IDETranscript, "_current", [])]);smalltalk.send($rec, "_title_", ["Transcript"]);return smalltalk.send($rec, "_modal_", [false]);}(self));
    return self;
}
}),
smalltalk.TranscriptDialog);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    ($receiver = typeof s == "undefined" ? nil : s) == nil ||
        $receiver == undefined ? function () {return s = smalltalk.send(self, "_new", [], smalltalk.TranscriptDialog.klass.superclass || nil);}() : $receiver;
    return typeof s == "undefined" ? nil : s;
    return self;
}
}),
smalltalk.TranscriptDialog.klass);


smalltalk.addClass('WorkspaceDialog', smalltalk.DialogBox, [], 'DyNagoya-Tools');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_dialog_", ["destroy"]);
    return self;
}
}),
smalltalk.WorkspaceDialog);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.WorkspaceDialog.superclass || nil);
    (function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(smalltalk.Workspace || Workspace, "_new", [])]);smalltalk.send($rec, "_title_", ["Workspace"]);return smalltalk.send($rec, "_modal_", [false]);}(self));
    return self;
}
}),
smalltalk.WorkspaceDialog);


smalltalk.WorkspaceDialog.klass.iVarNames = ['s'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    ($receiver = self['@s']) == nil || $receiver == undefined ? function () {return self['@s'] = smalltalk.send(self, "_new", [], smalltalk.WorkspaceDialog.klass.superclass || nil);}() : $receiver;
    return self['@s'];
    return self;
}
}),
smalltalk.WorkspaceDialog.klass);


smalltalk.addClass('EventSource', smalltalk.Object, ['observers', 'lastValue'], 'DyNagoya-Tools');
smalltalk.addMethod(
"__gt_gt_gt",
smalltalk.method({
selector: ">>>",
fn: function (aBlock) {
    var self = this;
    var second = nil;
    second = smalltalk.send(smalltalk.send(smalltalk.ConnectedEventSource || ConnectedEventSource, "_new", []), "_converter_", [aBlock]);
    smalltalk.send(self, "_subscribe_", [second]);
    return second;
    return self;
}
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_fire_",
smalltalk.method({
selector: "fire:",
fn: function (ev) {
    var self = this;
    self['@lastValue'] = ev;
    smalltalk.send(self['@observers'], "_do_", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_value_", [ev]);}]);
    return self;
}
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    self['@observers'] = smalltalk.send(smalltalk.Set || Set, "_new", []);
    return self;
}
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
fn: function (ob) {
    var self = this;
    smalltalk.send(self['@observers'], "_add_", [ob]);
    return self;
}
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_unsubscribe_",
smalltalk.method({
selector: "unsubscribe:",
fn: function (ob) {
    var self = this;
    smalltalk.send(self['@observers'], "_remove_", [ob]);
    return self;
}
}),
smalltalk.EventSource);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function () {
    var self = this;
    return self['@lastValue'];
    return self;
}
}),
smalltalk.EventSource);


smalltalk.addMethod(
"_toggle_",
smalltalk.method({
selector: "toggle:",
fn: function (flag) {
    var self = this;
    return function () {flag = smalltalk.send(flag, "_not", []);return flag;};
    return self;
}
}),
smalltalk.EventSource.klass);


smalltalk.addClass('ConnectedEventSource', smalltalk.EventSource, ['converter'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_converter",
smalltalk.method({
selector: "converter",
fn: function () {
    var self = this;
    return self['@converter'];
    return self;
}
}),
smalltalk.ConnectedEventSource);

smalltalk.addMethod(
"_converter_",
smalltalk.method({
selector: "converter:",
fn: function (aConverter) {
    var self = this;
    self['@converter'] = aConverter;
    return self;
}
}),
smalltalk.ConnectedEventSource);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aObj) {
    var self = this;
    smalltalk.send(self, "_fire_", [smalltalk.send(self['@converter'], "_value_", [aObj])]);
    return self;
}
}),
smalltalk.ConnectedEventSource);



smalltalk.addClass('GoogleMap', smalltalk.Object, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_link_address_",
smalltalk.method({
selector: "link:address:",
fn: function (html, aStr) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send(self, "_url_", [aStr])]);smalltalk.send($rec, "_title_", [aStr]);smalltalk.send($rec, "_at_put_", ["target", "_blank"]);return smalltalk.send($rec, "_with_", [unescape("%28map%29")]);}(smalltalk.send(html, "_a", [])));
    return self;
}
}),
smalltalk.GoogleMap.klass);

smalltalk.addMethod(
"_url_",
smalltalk.method({
selector: "url:",
fn: function (address) {
    var self = this;
    return smalltalk.send(unescape("http%3A//maps.google.co.jp/maps%3Fq%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [address])]);
    return self;
}
}),
smalltalk.GoogleMap.klass);


smalltalk.addClass('RemoteObject', smalltalk.Object, ['obj', 'group', 'key'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_delete",
smalltalk.method({
selector: "delete",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.RemoteObject || RemoteObject, "_delete_group_key_", [smalltalk.send(self, "_class", []), self['@group'], self['@key']]);
    return self;
}
}),
smalltalk.RemoteObject);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
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
}
}),
smalltalk.RemoteObject);

smalltalk.addMethod(
"_initialize_group_key_",
smalltalk.method({
selector: "initialize:group:key:",
fn: function (aObj, aGroup, aKey) {
    var self = this;
    self['@obj'] = aObj;
    self['@group'] = aGroup;
    self['@key'] = aKey;
    return self;
}
}),
smalltalk.RemoteObject);


smalltalk.addMethod(
"_afterDelete",
smalltalk.method({
selector: "afterDelete",
fn: function () {
    var self = this;
    return function (num) {return nil;};
    return self;
}
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_afterGet_",
smalltalk.method({
selector: "afterGet:",
fn: function (aBlock) {
    var self = this;
    return function (all) {return smalltalk.send(aBlock, "_value_", [smalltalk.send(all, "_collect_", [function (each) {return smalltalk.send(smalltalk.send(self, "_new", []), "_initialize_group_key_", [smalltalk.send(each, "_body", []), smalltalk.send(each, "_group", []), smalltalk.send(each, "_key", [])]);}])]);};
    return self;
}
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_afterPut",
smalltalk.method({
selector: "afterPut",
fn: function () {
    var self = this;
    return function (num) {return nil;};
    return self;
}
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_delete_group_key_",
smalltalk.method({
selector: "delete:group:key:",
fn: function (clazz, group, key) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(self, "_url_group_key_", [smalltalk.send(clazz, "_asString", []), group, key]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["DELETE"]), smalltalk.send("success", "__minus_gt", [smalltalk.send(self, "_afterDelete", [])])])]);
    return self;
}
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
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
}
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_list_",
smalltalk.method({
selector: "list:",
fn: function (group) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("/data/"), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("/")]), "__comma", [group]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["json"]), smalltalk.send("success", "__minus_gt", [smalltalk.send(self, "_onSuccess", [])])])]);
    return self;
}
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_list_callback_",
smalltalk.method({
selector: "list:callback:",
fn: function (group, aBlock) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("/data/"), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("/")]), "__comma", [group]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["json"]), smalltalk.send("success", "__minus_gt", [smalltalk.send(self, "_afterGet_", [aBlock])])])]);
    return self;
}
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_put_group_key_body_",
smalltalk.method({
selector: "put:group:key:body:",
fn: function (clazz, group, key, body) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(self, "_url_group_key_", [smalltalk.send(clazz, "_asString", []), group, key]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]), smalltalk.send("data", "__minus_gt", [smalltalk.send(smalltalk.HashedCollection._fromPairs_([smalltalk.send("body", "__minus_gt", [body])]), "_asJSON", [])]), smalltalk.send("success", "__minus_gt", [smalltalk.send(self, "_afterPut", [])])])]);
    return self;
}
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
"_url_group_key_",
smalltalk.method({
selector: "url:group:key:",
fn: function (clazz, group, key) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/data/"), "__comma", [smalltalk.send(clazz, "_asString", [])]), "__comma", [unescape("/")]), "__comma", [group]), "__comma", [unescape("/")]), "__comma", [key]);
    return self;
}
}),
smalltalk.RemoteObject.klass);


smalltalk.addClass('ToggleButton', smalltalk.Widget, ['state', 'source', 'body', 'renderWhenOn', 'renderWhenOff'], 'DyNagoya-Tools');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    self['@source'] = smalltalk.send(smalltalk.EventSource || EventSource, "_new", []);
    self['@state'] = smalltalk.send(self['@source'], "__gt_gt_gt", [smalltalk.send(smalltalk.EventSource || EventSource, "_toggle_", [false])]);
    smalltalk.send(smalltalk.send(self['@state'], "__gt_gt_gt", [function (thisisplaceholder1) {return ($receiver = thisisplaceholder1).klass === smalltalk.Boolean ? $receiver ? function () {return self['@renderWhenOn'];}() : function () {return self['@renderWhenOff'];}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return self['@renderWhenOn'];}, function () {return self['@renderWhenOff'];}]);}]), "__gt_gt_gt", [function (thisisplaceholder1) {return smalltalk.send(self, "_redraw_", [thisisplaceholder1]);}]);
    self['@renderWhenOn'] = function (html) {return nil;};
    self['@renderWhenOff'] = function (html) {return nil;};
    return self;
}
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_redraw_",
smalltalk.method({
selector: "redraw:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self['@body'], "_contents_", [aBlock]);
    return self;
}
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    self['@body'] = function ($rec) {smalltalk.send($rec, "_onClick_", [function (thisisplaceholder1) {return smalltalk.send(self['@source'], "_fire_", [thisisplaceholder1]);}]);return smalltalk.send($rec, "_css_put_", ["cursor", "pointer"]);}(smalltalk.send(html, "_span", []));
    smalltalk.send(self['@state'], "_fire_", [false]);
    return self;
}
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_renderWhenOff_",
smalltalk.method({
selector: "renderWhenOff:",
fn: function (aBlock) {
    var self = this;
    self['@renderWhenOff'] = aBlock;
    return self;
}
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_renderWhenOn_",
smalltalk.method({
selector: "renderWhenOn:",
fn: function (aBlock) {
    var self = this;
    self['@renderWhenOn'] = aBlock;
    return self;
}
}),
smalltalk.ToggleButton);

smalltalk.addMethod(
"_toggle",
smalltalk.method({
selector: "toggle",
fn: function () {
    var self = this;
    return self['@state'];
    return self;
}
}),
smalltalk.ToggleButton);



smalltalk.addClass('RectangleButton', smalltalk.ToggleButton, [], 'DyNagoya-Tools');
smalltalk.addMethod(
"_label_frontColor_backColor_",
smalltalk.method({
selector: "label:frontColor:backColor:",
fn: function (aString, front, back) {
    var self = this;
    self['@label'] = aString;
    self['@renderWhenOn'] = function (html) {return function ($rec) {smalltalk.send($rec, "_with_", [self['@label']]);return smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_onStyle_fontColor_", [back, front])]);}(smalltalk.send(html, "_span", []));};
    self['@renderWhenOff'] = function (html) {return function ($rec) {smalltalk.send($rec, "_with_", [self['@label']]);return smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_offStyle", [])]);}(smalltalk.send(html, "_span", []));};
    return self;
}
}),
smalltalk.RectangleButton);

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
smalltalk.RectangleButton);

smalltalk.addMethod(
"_onStyle_fontColor_",
smalltalk.method({
selector: "onStyle:fontColor:",
fn: function (backColor, fontColor) {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "10px"]);smalltalk.send($rec, "_css_put_", ["padding", "2px"]);smalltalk.send($rec, "_css_put_", ["font-size", "0.8em"]);smalltalk.send($rec, "_css_put_", ["border", smalltalk.send("1px solid ", "__comma", [backColor])]);smalltalk.send($rec, "_css_put_", ["background", backColor]);return smalltalk.send($rec, "_css_put_", ["color", fontColor]);}(thisisplaceholder1);};
    return self;
}
}),
smalltalk.RectangleButton);



smalltalk.addClass('Twitter', smalltalk.Object, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_iconUrl_",
smalltalk.method({
selector: "iconUrl:",
fn: function (user) {
    var self = this;
    return smalltalk.send(smalltalk.send(unescape("http%3A//img.tweetimag.es/i/"), "__comma", [user]), "__comma", ["_m"]);
    return self;
}
}),
smalltalk.Twitter.klass);

smalltalk.addMethod(
"_link_user_",
smalltalk.method({
selector: "link:user:",
fn: function (html, user) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send(self, "_linkUrl_", [user])]);smalltalk.send($rec, "_at_put_", ["title", user]);smalltalk.send($rec, "_at_put_", ["target", "_blank"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_iconUrl_", [user])]);}]);}(smalltalk.send(html, "_a", [])));
    return self;
}
}),
smalltalk.Twitter.klass);

smalltalk.addMethod(
"_linkUrl_",
smalltalk.method({
selector: "linkUrl:",
fn: function (user) {
    var self = this;
    return smalltalk.send(unescape("http%3A//twitter.com/"), "__comma", [user]);
    return self;
}
}),
smalltalk.Twitter.klass);

smalltalk.addMethod(
"_tweet_",
smalltalk.method({
selector: "tweet:",
fn: function (msg) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", ["/tweet", smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]), smalltalk.send("dataType", "__minus_gt", ["json"]), smalltalk.send("data", "__minus_gt", [{tweet: msg}])])]);
    return msg;
    return self;
}
}),
smalltalk.Twitter.klass);


smalltalk.addClass('Util', smalltalk.Object, [], 'DyNagoya-Tools');

smalltalk.addMethod(
"_encode_",
smalltalk.method({
selector: "encode:",
fn: function (str) {
    var self = this;
    return encodeURIComponent(str);
    return self;
}
}),
smalltalk.Util.klass);

smalltalk.addMethod(
"_encodeURI_",
smalltalk.method({
selector: "encodeURI:",
fn: function (str) {
    var self = this;
    return encodeURI(str);
    return self;
}
}),
smalltalk.Util.klass);

smalltalk.addMethod(
"_escape_",
smalltalk.method({
selector: "escape:",
fn: function (str) {
    var self = this;
    return escape(str);
    return self;
}
}),
smalltalk.Util.klass);

smalltalk.addMethod(
"_messageMap_",
smalltalk.method({
selector: "messageMap:",
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
}
}),
smalltalk.Util.klass);

smalltalk.addMethod(
"_split_with_",
smalltalk.method({
selector: "split:with:",
fn: function (str, delimiter) {
    var self = this;
    return str.split(delimiter);
    return self;
}
}),
smalltalk.Util.klass);


