smalltalk.addPackage('DyNagoya-Tools', {});
smalltalk.addClass('DialogBox', smalltalk.Widget, ['message', 'option', 'body', 'aspectRatio'], 'DyNagoya-Tools');
smalltalk.DialogBox.comment=unescape('Must%20need%20to%20use%20%27with%27%20or%20message.%0A%0Aex%29%0A%20DialogBox%20new%20message%3A%20%27hoge%27%3B%20title%3A%20%27fuga%27%3B%20open%20')
smalltalk.addMethod(
unescape('_body'),
smalltalk.method({
selector: unescape('body'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self['@body'], "_asJQuery", []);
    return self;
},
args: [],
source: unescape('body%0A%09%22%20not%20raw%20body%22%0A%09%5E%20body%20asJQuery'),
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_body_'),
smalltalk.method({
selector: unescape('body%3A'),
category: 'accessing',
fn: function (aBody) {
    var self = this;
    self['@body'] = aBody;
    return self;
},
args: ["aBody"],
source: unescape('body%3A%20aBody%0A%09%22aBody%20will%20receive%20asJQuery%22%0A%09body%20%3A%3D%20%20aBody'),
messageSends: [],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_button_action_'),
smalltalk.method({
selector: unescape('button%3Aaction%3A'),
category: 'accessing',
fn: function (label, aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {aBlock();$(this).dialog("close");}}]);
    return self;
},
args: ["label", "aBlock"],
source: unescape('button%3A%20label%20action%3A%20aBlock%0A%09%28option%20at%3A%20%27buttons%27%20ifAbsentPut%3A%5B%20%7B%7D%20%5D%29%0A%09%09add%3A%20%28%3C%7Btext%3A%20label%2C%20click%3A%20function%28%29%20%7B%20aBlock%28%29%3B%20%24%28this%29.dialog%28%22close%22%29%3B%20%7D%7D%3E%29.%0A'),
messageSends: ["add:", "at:ifAbsentPut:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
category: 'action',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_dialog_", ["destroy"]);
    return self;
},
args: [],
source: unescape('close%0A%09%20body%20asJQuery%20dialog%3A%20%27destroy%27%0A'),
messageSends: ["dialog:", "asJQuery"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_closeButton_'),
smalltalk.method({
selector: unescape('closeButton%3A'),
category: 'accessing',
fn: function (label) {
    var self = this;
    smalltalk.send(smalltalk.send(self['@option'], "_at_ifAbsentPut_", ["buttons", function () {return [];}]), "_add_", [{text: label, click: function () {$(this).dialog("close");}}]);
    return self;
},
args: ["label"],
source: unescape('closeButton%3A%20label%0A%09%28option%20at%3A%20%27buttons%27%20ifAbsentPut%3A%5B%20%7B%7D%20%5D%29%0A%09%09add%3A%20%28%3C%7Btext%3A%20label%2C%20click%3A%20function%28%29%20%7B%20%24%28this%29.dialog%28%22close%22%29%3B%20%7D%7D%3E%29.%0A%0A'),
messageSends: ["add:", "at:ifAbsentPut:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_defaultOption'),
smalltalk.method({
selector: unescape('defaultOption'),
category: 'initialization',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [true])]);
    return self;
},
args: [],
source: unescape('defaultOption%0A%09%5E%20%23%7B%20%27modal%27%20-%3E%20true%20%7D'),
messageSends: [unescape("-%3E")],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_height_'),
smalltalk.method({
selector: unescape('height%3A'),
category: 'accessing',
fn: function (aHeight) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["height", aHeight]);
    return self;
},
args: ["aHeight"],
source: unescape('height%3A%20aHeight%0A%09option%20at%3A%20%27height%27%20put%3A%20aHeight'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_image_'),
smalltalk.method({
selector: unescape('image%3A'),
category: 'accessing',
fn: function (url) {
    var self = this;
    return smalltalk.send(self, "_with_", [function (html) {return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [url]);}]);
    return self;
},
args: ["url"],
source: unescape('image%3A%20url%0A%09%5E%20self%20with%3A%20%5B%20%3Ahtml%20%7C%20html%20img%20src%3A%20url%5D'),
messageSends: ["with:", "src:", "img"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Widget);
    self['@option'] = smalltalk.send(self, "_defaultOption", []);
    return self;
},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09option%20%3A%3D%20self%20defaultOption'),
messageSends: ["initialize", "defaultOption"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_message_'),
smalltalk.method({
selector: unescape('message%3A'),
category: 'accessing',
fn: function (aMessage) {
    var self = this;
    self['@body'] = smalltalk.send(smalltalk.send(unescape("%3Cdiv%3E"), "__comma", [aMessage]), "__comma", [unescape("%3C/div%3E")]);
    return self;
},
args: ["aMessage"],
source: unescape('message%3A%20aMessage%0A%09body%20%3A%3D%20%27%3Cdiv%3E%27%2C%20aMessage%2C%20%27%3C/div%3E%27'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_modal_'),
smalltalk.method({
selector: unescape('modal%3A'),
category: 'accessing',
fn: function (flag) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", [smalltalk.symbolFor("modal"), flag]);
    return self;
},
args: ["flag"],
source: unescape('modal%3A%20flag%0A%09option%20at%3A%20%23modal%20put%3A%20flag'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'action',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@body'], "_asJQuery", []), "_dialog_", [self['@option']]);
    return self;
},
args: [],
source: unescape('open%0A%09%20body%20asJQuery%20dialog%3A%20option%20'),
messageSends: ["dialog:", "asJQuery"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_option'),
smalltalk.method({
selector: unescape('option'),
category: 'accessing',
fn: function () {
    var self = this;
    return self['@option'];
    return self;
},
args: [],
source: unescape('option%0A%09%5E%20option'),
messageSends: [],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_title_'),
smalltalk.method({
selector: unescape('title%3A'),
category: 'accessing',
fn: function (aTitle) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["title", aTitle]);
    return self;
},
args: ["aTitle"],
source: unescape('title%3A%20aTitle%0A%09option%20at%3A%20%27title%27%20put%3A%20aTitle'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_width_'),
smalltalk.method({
selector: unescape('width%3A'),
category: 'accessing',
fn: function (aWidth) {
    var self = this;
    smalltalk.send(self['@option'], "_at_put_", ["width", aWidth]);
    return self;
},
args: ["aWidth"],
source: unescape('width%3A%20aWidth%0A%09option%20at%3A%20%27width%27%20put%3A%20aWidth'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.DialogBox);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
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
source: unescape('with%3A%20aBlock%0A%09%7C%20body%20%7C%0A%09body%20%3A%3D%20HTMLCanvas%20new.%0A%09aBlock%20value%3A%20body.%0A%09%5E%20self%20body%3A%20body%20root.'),
messageSends: ["new", "value:", "body:", "root"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.DialogBox);


smalltalk.addMethod(
unescape('_withCancel'),
smalltalk.method({
selector: unescape('withCancel'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_closeButton_", ["Cancel"]);
    return self;
},
args: [],
source: unescape('withCancel%0A%09%5E%20self%20new%20closeButton%3A%20%27Cancel%27%0A'),
messageSends: ["closeButton:", "new"],
referencedClasses: []
}),
smalltalk.DialogBox.klass);


smalltalk.addClass('ImageEditor', smalltalk.DialogBox, ['img', 'canvas', 'jcrop'], 'DyNagoya-Tools');
smalltalk.ImageEditor.comment=unescape('x%20%3A%3D%20ImageEditor%20openWithProxy%3A%20%27http%3A//xxxx.com/abc.png%27%3B%20open%0A%28*%20select%20area%20by%20drag%20the%20image%20*%29%0A%0Ax%20crop%0Ax%20src')
smalltalk.addMethod(
unescape('_area'),
smalltalk.method({
selector: unescape('area'),
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
source: unescape('area%0A%09self%20isSelected%20%0A%09%09ifTrue%3A%20%5B%20%5E%20jcrop%20tellSelect%20%5D%0A%09%09ifFalse%3A%20%5B%20%7C%20imgJQ%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20imgJQ%20%3A%3D%20img%20asJQuery.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5E%20%23%7B%20%23x%20-%3E%200.%20%23y%20-%3E%200.%20%23x2%20-%3E%20imgJQ%20width.%20%23y2%20-%3E%20imgJQ%20height.%20%23w%20-%3E%20imgJQ%20width.%20%23h%20-%3E%20imgJQ%20height%20%7D%20%5D%0A'),
messageSends: ["ifTrue:ifFalse:", "isSelected", "tellSelect", "asJQuery", unescape("-%3E"), "width", "height"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_canvas'),
smalltalk.method({
selector: unescape('canvas'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_at_", [0]);
    return self;
},
args: [],
source: unescape('canvas%0A%09%5Ecanvas%20asJQuery%20at%3A0%0A'),
messageSends: ["at:", "asJQuery"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_context'),
smalltalk.method({
selector: unescape('context'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_canvas", []), "_getContext_", ["2d"]);
    return self;
},
args: [],
source: unescape('context%0A%09%5E%20self%20canvas%20%20getContext%3A%272d%27%0A'),
messageSends: ["getContext:", "canvas"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_copyToImg'),
smalltalk.method({
selector: unescape('copyToImg'),
category: 'private',
fn: function () {
    var self = this;
    smalltalk.send(self, "_src_", [smalltalk.send(smalltalk.send(self, "_canvas", []), "_toDataURL", [])]);
    smalltalk.send(self, "_redraw", []);
    return self;
},
args: [],
source: unescape('copyToImg%0A%09self%20src%3A%20%28self%20canvas%20toDataURL%29.%0A%09self%20redraw.%0A%0A'),
messageSends: ["src:", "toDataURL", "canvas", "redraw"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_crop'),
smalltalk.method({
selector: unescape('crop'),
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
source: unescape('crop%0A%09%7C%20area%7C%0A%09area%20%3A%3D%20self%20area.%0A%09self%20canvas%20width%3A%20%28area%20at%3A%20%23w%29%3B%20height%3A%20%28area%20at%3A%20%23h%29.%0A%09self%20context%20drawImage%3A%20%28self%20img%29%20%0A%09%09sx%3A%20%28area%20at%3A%20%23x%29%09%09sy%3A%20%28area%20at%3A%20%23y%29%0A%09%09sw%3A%20%28area%20at%3A%20%23w%29%09%09sh%3A%20%28area%20at%3A%20%23h%29%0A%09%09dx%3A%200%09%09%09%09%09dy%3A%200%0A%09%09dw%3A%20%28area%20at%3A%20%23w%29%09%09dh%3A%20%28area%20at%3A%20%23h%29.%0A%09self%20copyToImg.%0A%0A%0A'),
messageSends: ["area", "width:", "at:", "height:", "canvas", "drawImage:sx:sy:sw:sh:dx:dy:dw:dh:", "context", "img", "copyToImg"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_croppable'),
smalltalk.method({
selector: unescape('croppable'),
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
source: unescape('croppable%0A%09%7C%20jq%20%7C%0A%09jcrop%20ifNotNil%3A%20%5B%20jcrop%20destroy%20%5D.%0A%09jq%20%3A%3D%20img%20asJQuery.%20%0A%09%3C%20jq.Jcrop%28%7B%7D%2C%20function%28%29%7B%20self%5B%27@jcrop%27%5D%20%3D%20this%7D%29%3E%20'),
messageSends: ["ifNotNil:", "destroy", "asJQuery"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_img'),
smalltalk.method({
selector: unescape('img'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self['@img'], "_asJQuery", []), "_at_", [0]);
    return self;
},
args: [],
source: unescape('img%0A%09%5E%28img%20asJQuery%20at%3A%200%29%20'),
messageSends: ["at:", "asJQuery"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_isSelected'),
smalltalk.method({
selector: unescape('isSelected'),
category: 'accessing',
fn: function () {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    return smalltalk.send(smalltalk.send(smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]), "__eq", [0]), "_not", []);
    return self;
},
args: [],
source: unescape('isSelected%0A%09%7C%20area%7C%0A%09area%20%3A%3D%20jcrop%20tellSelect.%0A%09%5E%20%28%28area%20at%3A%20%23w%29%20%3D%200%29%20not'),
messageSends: ["tellSelect", "not", unescape("%3D"), "at:"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_open_'),
smalltalk.method({
selector: unescape('open%3A'),
category: 'opening',
fn: function (url) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [function (html) {self['@img'] = smalltalk.send(html, "_img", []);return self['@canvas'] = smalltalk.send(smalltalk.send(html, "_canvas", []), "_css_put_", ["display", "none"]);}]);smalltalk.send($rec, "_width_", [800]);smalltalk.send($rec, "_modal_", [false]);return smalltalk.send($rec, "_open", []);}(self));
    smalltalk.send(self, "_src_", [url]);
    smalltalk.send(self, "_redraw", []);
    return self;
},
args: ["url"],
source: unescape('open%3A%20url%0A%09self%20with%3A%5B%20%3Ahtml%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20img%20%3A%3D%20html%20img.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20canvas%20%3A%3D%20html%20canvas%20css%3A%27display%27%20put%3A%20%27none%27%5D%3B%0A%09%09width%3A800%3B%0A%09%09modal%3A%20false%3B%0A%09%09open.%0A%09self%20src%3A%20url.%0A%09self%20redraw.%0A'),
messageSends: ["with:", "img", "css:put:", "canvas", "width:", "modal:", "open", "src:", "redraw"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_openWithProxy_'),
smalltalk.method({
selector: unescape('openWithProxy%3A'),
category: 'opening',
fn: function (url) {
    var self = this;
    smalltalk.send(self, "_open_", [smalltalk.send(self, "_proxy_", [url])]);
    return self;
},
args: ["url"],
source: unescape('openWithProxy%3A%20url%0A%09self%20open%3A%20%28self%20proxy%3A%20url%29'),
messageSends: ["open:", "proxy:"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_proxy_'),
smalltalk.method({
selector: unescape('proxy%3A'),
category: 'private',
fn: function (url) {
    var self = this;
    return smalltalk.send(unescape("/proxy%3Fremote%3D"), "__comma", [url]);
    return self;
},
args: ["url"],
source: unescape('proxy%3Aurl%0A%09%5E%20%27/proxy%3Fremote%3D%27%2C%20url'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_redraw'),
smalltalk.method({
selector: unescape('redraw'),
category: 'action',
fn: function () {
    var self = this;
    smalltalk.send(self, "_croppable", []);
    return self;
},
args: [],
source: unescape('redraw%0A%09self%20croppable'),
messageSends: ["croppable"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_resizeWidth_height_'),
smalltalk.method({
selector: unescape('resizeWidth%3Aheight%3A'),
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
source: unescape('resizeWidth%3A%20w%20height%3Ah%0A%09%7C%20area%20%7C%0A%09area%20%3A%3D%20self%20area.%0A%09self%20canvas%20width%3A%20w%3B%20height%3A%20h.%0A%09self%20context%20drawImage%3A%20%28self%20img%29%20%0A%09%09sx%3A%20%28area%20at%3A%20%23x%29%09%09sy%3A%20%28area%20at%3A%20%23y%29%0A%09%09sw%3A%20%28area%20at%3A%20%23w%29%09%09sh%3A%20%28area%20at%3A%20%23h%29%0A%09%09dx%3A%200%09%09%09%09%09dy%3A%200%0A%09%09dw%3A%20w%09%09dh%3A%20h.%0A%09self%20copyToImg.%0A'),
messageSends: ["area", "width:", "height:", "canvas", "drawImage:sx:sy:sw:sh:dx:dy:dw:dh:", "context", "img", "at:", "copyToImg"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_selectWidth_height_'),
smalltalk.method({
selector: unescape('selectWidth%3Aheight%3A'),
category: 'action',
fn: function (width, height) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    smalltalk.send(self['@jcrop'], "_animateTo_", [[smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")]), smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")]), ($receiver = smalltalk.send(area, "_at_", [smalltalk.symbolFor("x")])).klass === smalltalk.Number ? $receiver + width : smalltalk.send($receiver, "__plus", [width]), ($receiver = smalltalk.send(area, "_at_", [smalltalk.symbolFor("y")])).klass === smalltalk.Number ? $receiver + height : smalltalk.send($receiver, "__plus", [height])]]);
    return self;
},
args: ["width", "height"],
source: unescape('selectWidth%3A%20width%20height%3A%20height%0A%09%7C%20area%20%7C%0A%09area%20%3A%3D%20jcrop%20tellSelect.%0A%09jcrop%20animateTo%3A%20%7B%0A%09%09area%20at%3A%20%23x.%0A%09%09area%20at%3A%20%23y.%0A%09%09%28area%20at%3A%20%23x%29%20+%20width.%0A%09%09%28area%20at%3A%20%23y%29%20+%20height%20%7D.'),
messageSends: ["tellSelect", "animateTo:", "at:", unescape("+")],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_selectX_y_'),
smalltalk.method({
selector: unescape('selectX%3Ay%3A'),
category: 'action',
fn: function (x, y) {
    var self = this;
    var area = nil;
    area = smalltalk.send(self['@jcrop'], "_tellSelect", []);
    smalltalk.send(self['@jcrop'], "_animateTo_", [[x, y, ($receiver = x).klass === smalltalk.Number ? $receiver + smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")]) : smalltalk.send($receiver, "__plus", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("w")])]), ($receiver = y).klass === smalltalk.Number ? $receiver + smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")]) : smalltalk.send($receiver, "__plus", [smalltalk.send(area, "_at_", [smalltalk.symbolFor("h")])])]]);
    return self;
},
args: ["x", "y"],
source: unescape('selectX%3A%20x%20y%3A%20y%0A%09%7C%20area%20%7C%0A%09area%20%3A%3D%20jcrop%20tellSelect.%0A%09jcrop%20animateTo%3A%20%7B%0A%09%09x.%0A%09%09y.%0A%09%09x%20+%20%28area%20at%3A%20%23w%29.%0A%09%09y%20+%20%28area%20at%3A%20%23h%29%20%7D'),
messageSends: ["tellSelect", "animateTo:", unescape("+"), "at:"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_src'),
smalltalk.method({
selector: unescape('src'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_img", []), "_src", []);
    return self;
},
args: [],
source: unescape('src%0A%09%5E%20self%20img%20src'),
messageSends: ["src", "img"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_src_'),
smalltalk.method({
selector: unescape('src%3A'),
category: 'accessing',
fn: function (url) {
    var self = this;
    smalltalk.send(self['@img'], "_src_", [url]);
    return self;
},
args: ["url"],
source: unescape('src%3A%20url%0A%09img%20src%3A%20url.%0A'),
messageSends: ["src:"],
referencedClasses: []
}),
smalltalk.ImageEditor);

smalltalk.addMethod(
unescape('_defaultOption'),
smalltalk.method({
selector: unescape('defaultOption'),
category: 'initalization',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [false])]);
    return self;
},
args: [],
source: unescape('defaultOption%0A%09%5E%20%23%7B%20%27modal%27%20-%3E%20false%20%7D%0A%0A'),
messageSends: [unescape("-%3E")],
referencedClasses: []
}),
smalltalk.ImageEditor);



smalltalk.addClass('Circle', smalltalk.Widget, [], 'DyNagoya-Tools');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["circle"]);smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send(self, "_circleStyle", []), "__comma", [smalltalk.send(self, "_style", [])])]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_body_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20class%3A%20%27circle%27%3B%20style%3A%20%28self%20circleStyle%2C%20self%20style%29%3B%20with%3A%20%5B%0A%09%09%09self%20body%3A%20html%0A%09%5D'),
messageSends: ["class:", "style:", unescape("%2C"), "circleStyle", "style", "with:", "body:", "div"],
referencedClasses: []
}),
smalltalk.Circle);

smalltalk.addMethod(
unescape('_body_'),
smalltalk.method({
selector: unescape('body%3A'),
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: unescape('body%3A%20html%0A%0A%09%09'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Circle);

smalltalk.addMethod(
unescape('_radiusX'),
smalltalk.method({
selector: unescape('radiusX'),
category: 'accessing',
fn: function () {
    var self = this;
    return 60;
    return self;
},
args: [],
source: unescape('radiusX%0A%09%5E%2060'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Circle);

smalltalk.addMethod(
unescape('_radiusY'),
smalltalk.method({
selector: unescape('radiusY'),
category: 'accessing',
fn: function () {
    var self = this;
    return 100;
    return self;
},
args: [],
source: unescape('radiusY%0A%09%5E%20100'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Circle);

smalltalk.addMethod(
unescape('_circleStyle'),
smalltalk.method({
selector: unescape('circleStyle'),
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
source: unescape('circleStyle%0A%09%7C%20rx%20ry%20%7C%0A%09rx%20%3A%3D%20self%20radiusX.%0A%09ry%20%3A%3D%20self%20radiusY.%0A%09%5E%20%27width%3A%20%27%2C%20%28rx%20*%202%29%2C%20%27px%3Bheight%3A%20%27%2C%20%28rx%20*%202%29%2C%20%27px%3B%20-moz-border-radius%3A%27%2Crx%2C%27px%3B-webkit-border-radius%3A%27%2Crx%2C%27px%3Bborder-radius%3A%20%27%2C%20rx%2C%20%27px%3B%20line-height%3A%27%2C%20%28rx%20*%202%29%2C%20%27px%3B%20text-align%3Acenter%3Bposition%3Aabsolute%3B%27'),
messageSends: ["radiusX", "radiusY", unescape("%2C"), unescape("*")],
referencedClasses: []
}),
smalltalk.Circle);



smalltalk.addClass('Util', smalltalk.Object, [], 'DyNagoya-Tools');

smalltalk.addMethod(
unescape('_encodeURI_'),
smalltalk.method({
selector: unescape('encodeURI%3A'),
category: 'not yet classified',
fn: function (str) {
    var self = this;
    return encodeURI(str);
    return self;
},
args: ["str"],
source: unescape('encodeURI%3A%20str%0A%09%5E%20%28%3C%20encodeURI%28str%29%20%3E%29'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Util.klass);

smalltalk.addMethod(
unescape('_split_with_'),
smalltalk.method({
selector: unescape('split%3Awith%3A'),
category: 'not yet classified',
fn: function (str, delimiter) {
    var self = this;
    return str.split(delimiter);
    return self;
},
args: ["str", "delimiter"],
source: unescape('split%3A%20str%20with%3A%20delimiter%0A%09%5E%20%3C%20str.split%28delimiter%29%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Util.klass);

smalltalk.addMethod(
unescape('_messageMap_'),
smalltalk.method({
selector: unescape('messageMap%3A'),
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
source: unescape('messageMap%3A%20aMessage%0A%09%7C%20selectors%20arguments%20ret%20%7C%0A%09selectors%20%3A%3D%20Util%20split%3A%20%28aMessage%20selector%29%20with%3A%20%27%3A%27.%0A%09arguments%20%3A%3D%20aMessage%20arguments.%0A%09ret%20%3A%3D%20Array%20new.%0A%09arguments%20withIndexDo%3A%20%5B%20%3Aeach%20%3Ai%20%7C%20ret%20add%3A%20%28%28selectors%20at%3A%20i%29%20-%3E%20each%20%29%5D.%0A%09%5E%20ret'),
messageSends: ["split:with:", "selector", "arguments", "new", "withIndexDo:", "add:", unescape("-%3E"), "at:"],
referencedClasses: ["Util", "Array"]
}),
smalltalk.Util.klass);


smalltalk.addClass('RemoteObject', smalltalk.Object, [], 'DyNagoya-Tools');

smalltalk.addMethod(
unescape('_list_'),
smalltalk.method({
selector: unescape('list%3A'),
category: 'not yet classified',
fn: function (group) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("/data/"), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("/")]), "__comma", [group]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["json"])])]);
    return self;
},
args: ["group"],
source: unescape('list%3A%20group%0A%09%5E%20jQuery%0A%09%09ajax%3A%20%28%27/data/%27%2C%20self%20asString%2C%20%27/%27%2C%20group%29%0A%09%09option%3A%20%23%7B%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%27dataType%27%20-%3E%20%27json%27%0A%09%09%7D'),
messageSends: ["ajax:option:", unescape("%2C"), "asString", unescape("-%3E")],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'not yet classified',
fn: function (aMessage) {
    var self = this;
    var map = nil;
    var group = nil;
    var key = nil;
    map = smalltalk.send(smalltalk.Util || Util, "_messageMap_", [aMessage]);
    group = smalltalk.send(smalltalk.send(map, "_first", []), "_value", []);
    key = smalltalk.send(smalltalk.send(map, "_second", []), "_value", []);
    smalltalk.send(self, "_put_group_key_body_", [self, group, key, smalltalk.send(smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_fromPairs_", [map]), "_asJSONString", [])]);
    return self;
},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%09%7C%20map%20group%20key%20%7C%0A%09map%20%3A%3D%20Util%20messageMap%3A%20aMessage.%0A%09group%20%3A%3D%20map%20first%20value.%0A%09key%20%3A%3D%20map%20second%20value.%0A%09self%20put%3A%20self%20group%3A%20group%20key%3A%20key%20body%3A%20%28%28HashedCollection%20fromPairs%3A%20map%29%20asJSONString%29'),
messageSends: ["messageMap:", "value", "first", "second", "put:group:key:body:", "asJSONString", "fromPairs:"],
referencedClasses: ["Util", "HashedCollection"]
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
unescape('_put_group_key_body_'),
smalltalk.method({
selector: unescape('put%3Agroup%3Akey%3Abody%3A'),
category: 'not yet classified',
fn: function (clazz, group, key, body) {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", [smalltalk.send(self, "_url_group_key_", [smalltalk.send(clazz, "_asString", []), group, key]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]), smalltalk.send("data", "__minus_gt", [smalltalk.send(smalltalk.HashedCollection._fromPairs_([smalltalk.send("body", "__minus_gt", [body])]), "_asJSON", [])])])]);
    return self;
},
args: ["clazz", "group", "key", "body"],
source: unescape('put%3A%20clazz%20group%3A%20group%20key%3A%20key%20body%3A%20body%0A%09%5E%20jQuery%0A%09%09ajax%3A%20%28self%20url%3A%20%28clazz%20asString%29%20group%3A%20group%20key%3A%20key%29%0A%09%09option%3A%20%23%7B%0A%09%09%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%09%27data%27%20-%3E%20%23%7B%27body%27%20-%3E%20body%7D%20asJSON%0A%09%09%7D'),
messageSends: ["ajax:option:", "url:group:key:", "asString", unescape("-%3E"), "asJSON"],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);

smalltalk.addMethod(
unescape('_url_group_key_'),
smalltalk.method({
selector: unescape('url%3Agroup%3Akey%3A'),
category: 'not yet classified',
fn: function (clazz, group, key) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/data/"), "__comma", [smalltalk.send(clazz, "_asString", [])]), "__comma", [unescape("/")]), "__comma", [group]), "__comma", [unescape("/")]), "__comma", [key]);
    return self;
},
args: ["clazz", "group", "key"],
source: unescape('url%3A%20clazz%20group%3A%20group%20key%3A%20key%0A%09%5E%20%27/data/%27%2C%20clazz%20asString%2C%20%27/%27%2C%20group%2C%20%27/%27%2C%20key'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.RemoteObject.klass);


