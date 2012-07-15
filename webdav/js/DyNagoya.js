smalltalk.addPackage('DyNagoya', {});
smalltalk.addClass('Action', smalltalk.Object, ['idx', 'maxSize'], 'DyNagoya');
smalltalk.addMethod(
"_all",
smalltalk.method({
selector: "all",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23AboutDyNagoya%20span"), "_asJQuery", []), "_toArray", []), "__comma", [smalltalk.send(smalltalk.send(unescape("%23AboutSmalltalk%20span"), "_asJQuery", []), "_toArray", [])]);
    return self;
},
args: [],
source: "all\x0a\x09^  ('#AboutDyNagoya span' asJQuery toArray),\x0a\x09\x09('#AboutSmalltalk span' asJQuery toArray)\x0a",
messageSends: [",", "toArray", "asJQuery"],
referencedClasses: []
}),
smalltalk.Action);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@idx'] = 0;
    self['@maxSize'] = smalltalk.send(smalltalk.send(self, "_all", []), "_size", []);
    return self;
},
args: [],
source: "initialize\x0a    idx := 0.\x0a   maxSize := (self all size)",
messageSends: ["size", "all"],
referencedClasses: []
}),
smalltalk.Action);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self['@idx'], "__eq", [0])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", [" "]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", [" "]);}]);
    self['@idx'] = smalltalk.send(($receiver = self['@idx']).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_min_", [self['@maxSize']]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", ["strong"]);
    return self;
},
args: [],
source: "next\x0a  (idx = 0) ifFalse: [  (self all at: idx) className: ' ' ].\x0a  idx := (idx + 1) min: maxSize.\x0a  (self all at: idx) className: 'strong'.",
messageSends: ["ifFalse:", "=", "className:", "at:", "all", "min:", "+"],
referencedClasses: []
}),
smalltalk.Action);

smalltalk.addMethod(
"_prev",
smalltalk.method({
selector: "prev",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", [" "]);
    self['@idx'] = smalltalk.send(($receiver = self['@idx']).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]), "_max_", [1]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", ["strong"]);
    return self;
},
args: [],
source: "prev\x0a  (self all at: idx) className: ' '.\x0a  idx := (idx - 1) max: 1.\x0a  (self all at: idx) className: 'strong'.",
messageSends: ["className:", "at:", "all", "max:", "-"],
referencedClasses: []
}),
smalltalk.Action);



smalltalk.addClass('DraggableWidget', smalltalk.Widget, [], 'DyNagoya');
smalltalk.addMethod(
"_dragOption",
smalltalk.method({
selector: "dragOption",
category: 'not yet classified',
fn: function () {
    var self = this;
    var callback = nil;
    callback = function (e, ui) {var x = nil;var y = nil;smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [ui]);x = smalltalk.send(smalltalk.send(ui, "_position", []), "_left", []);y = smalltalk.send(smalltalk.send(ui, "_position", []), "_top", []);smalltalk.send(smalltalk.Mod || Mod, "_class_attr_value_", [smalltalk.send(self, "_class", []), "x", smalltalk.send(smalltalk.send("", "__comma", [x]), "__comma", ["px"])]);smalltalk.send(smalltalk.Mod || Mod, "_class_attr_value_", [smalltalk.send(self, "_class", []), "y", smalltalk.send(smalltalk.send("", "__comma", [y]), "__comma", ["px"])]);return function ($rec) {smalltalk.send($rec, "_show_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Dropped (", "__comma", [x]), "__comma", [":"]), "__comma", [y]), "__comma", [")"])]);return smalltalk.send($rec, "_cr", []);}(smalltalk.Transcript || Transcript);};
    return {stop: callback};
    return self;
},
args: [],
source: "dragOption\x0a\x09| callback |\x0a\x09callback := [ :e :ui || x y |\x0a\x09\x09console log: ui.\x0a\x09\x09x := ui position left.\x0a\x09\x09y := ui position top.\x0a\x09\x09Mod class: self class attr: 'x' value: '', x, 'px'.\x0a\x09\x09Mod class: self class attr: 'y' value: '', y, 'px'.\x0a\x09\x09Transcript show: 'Dropped (', x, ':', y, ')'; cr\x0a\x09].\x0a\x09^ (< { stop: callback }>)",
messageSends: ["log:", "left", "position", "top", "class:attr:value:", "class", ",", "show:", "cr"],
referencedClasses: ["Mod", "Transcript"]
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: "renderBodyOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", [smalltalk.send(self, "_style", [])]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderBodyOn_", [html])