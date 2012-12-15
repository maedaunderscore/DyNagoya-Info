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



smalltalk.addClass('Agenda', smalltalk.Object, [], 'DyNagoya');

smalltalk.addMethod(
"_joint02",
smalltalk.method({
selector: "joint02",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\nLinks show.\nAboutDyNagoya show.\nBrowser open.\n\nEvent browser onDialog\nEvent browser onPage\nTopPage show\neditor := ImageEditor new open: '/images/20080512162247.jpg'\neditor scale: 2.0.\nLogo browser onDialog openMethod: 'imageUrl'.\nTopPage show.\nLogo browser onPage openMethod: 'x'.\n\nScreen title: 'About Amber Smalltalk'.\nScreen add: (Amber goodPoint at:1).\nScreen title: 'Smalltalk\u306E\u601D\u3046\u3068\u3053\u308D'.\nScreen add: [ :html | html h2: 'Smalltalk \u306F\u30D6\u30ED\u30C3\u30AF\uFF08\u7121\u540D\u95A2\u6570\uFF09\u3092\u3088\u304F\u4F7F\u3044\u307E\u3059']\nScreen add: [ :html | html h2: '\u5F15\u6570\u3092\u66F8\u304F\u306E\u304C\u5104\u52AB' ].\nScreen add: [ %1 h2: 'Clojure\u98A8\u306B\u66F8\u304D\u305F\u3044' ].\n(1 to: 10) inject: 0 into: [ %1 + %2 ]. \n\nScreen add: [ it h2: 'Groovy\u98A8\u306A\u3089\u3053\u3093\u306A\u304B\u3093\u3058'].\n\nParserEditor  onDialog \n\nScreen add: [ _ h2: 'Scala\u98A8\u306A\u3089\u3053\u3093\u306A\u304B\u3093\u3058'].\n(1 to: 10) inject: 0 into: [ _ + _ ]. \n\nObject browser onPage openMethod: '|>'.\ndesc := PipelineDesc new.\nScreen put: desc\ndesc |> [ Screen put: %1].\nbrowser := DraggableWidget browser onPage openMethod: 'renderOn:'.\nbrowser openMethod: 'style'.\ndesc style.\nEntryPoint browser onPage openClassMethod: 'start'.\n\nScreen title: '\u307E\u3068\u3081'.\nScreen add: [ %1 h2: 'Amber Smalltalk\u3092\u3044\u3058\u308B\u306E\u697D\u3057\u3044'].\nScreen add: [ %1 h2: '\u8208\u5473\u6301\u3063\u305F\u65B9\u306FDyNagoya\u306B\u3082\u662F\u975E' ].\nScreen title:'\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F'; put: Building new; put: FinDesc new.\n";
    return self;
},
args: [],
source: "joint02\x0a\x09^ '\x0aLinks show.\x0aAboutDyNagoya show.\x0aBrowser open.\x0a\x0aEvent browser onDialog\x0aEvent browser onPage\x0aTopPage show\x0aeditor := ImageEditor new open: ''/images/20080512162247.jpg''\x0aeditor scale: 2.0.\x0aLogo browser onDialog openMethod: ''imageUrl''.\x0aTopPage show.\x0aLogo browser onPage openMethod: ''x''.\x0a\x0aScreen title: ''About Amber Smalltalk''.\x0aScreen add: (Amber goodPoint at:1).\x0aScreen title: ''Smalltalkの思うところ''.\x0aScreen add: [ :html | html h2: ''Smalltalk はブロック（無名関数）をよく使います'']\x0aScreen add: [ :html | html h2: ''引数を書くのが億劫'' ].\x0aScreen add: [ %1 h2: ''Clojure風に書きたい'' ].\x0a(1 to: 10) inject: 0 into: [ %1 + %2 ]. \x0a\x0aScreen add: [ it h2: ''Groovy風ならこんなかんじ''].\x0a\x0aParserEditor  onDialog \x0a\x0aScreen add: [ _ h2: ''Scala風ならこんなかんじ''].\x0a(1 to: 10) inject: 0 into: [ _ + _ ]. \x0a\x0aObject browser onPage openMethod: ''|>''.\x0adesc := PipelineDesc new.\x0aScreen put: desc\x0adesc |> [ Screen put: %1].\x0abrowser := DraggableWidget browser onPage openMethod: ''renderOn:''.\x0abrowser openMethod: ''style''.\x0adesc style.\x0aEntryPoint browser onPage openClassMethod: ''start''.\x0a\x0aScreen title: ''まとめ''.\x0aScreen add: [ %1 h2: ''Amber Smalltalkをいじるの楽しい''].\x0aScreen add: [ %1 h2: ''興味持った方はDyNagoyaにも是非'' ].\x0aScreen title:''ありがとうございました''; put: Building new; put: FinDesc new.\x0a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Agenda.klass);


smalltalk.addClass('Amber', smalltalk.Object, [], 'DyNagoya');

smalltalk.addMethod(
"_goodPoint",
smalltalk.method({
selector: "goodPoint",
category: 'not yet classified',
fn: function () {
    var self = this;
    return [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_h2_", ["\u30B3\u30F3\u30D1\u30AF\u30C8\uFF01"]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "30px"]);return smalltalk.send($rec, "_with_", ["Smalltalk\u521D\u5FC3\u8005\u3082\u628A\u63E1\u3057\u3084\u3059\u3044"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "40px"]);return smalltalk.send($rec, "_with_", ["Squeak 4.3: Smalltalk allClasses size \u2192 2105"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "40px"]);return smalltalk.send($rec, "_with_", ["Cuis 4.0: Smalltalk allClasses size \u2192 654"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "40px"]);return smalltalk.send($rec, "_with_", ["Amber (2012/8/26\u6642\u70B9): Smalltalk current classes size \u2192 103"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);}(thisisplaceholder1);}, function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_h2_", ["JS\u3068\u306E\u89AA\u548C\u6027\u304C\u9AD8\u3044\uFF01"]);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "30px"]);return smalltalk.send($rec, "_with_", [" JS\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u6D3B\u7528\u3067\u304D\u308B"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);}(thisisplaceholder1);}, function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_h2_", ["\u52D5\u4F5C\u74B0\u5883\u304C\u591A\u3044\uFF01"]);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "30px"]);return smalltalk.send($rec, "_with_", [" Windows 8 App\u3082\u3067\u304D\u305F"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);}(thisisplaceholder1);}];
    return self;
},
args: [],
source: "goodPoint\x0a\x09^ {\x0a\x09[ %1\x0a            h2: 'コンパクト！';\x0a            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '30px'; with: 'Smalltalk初心者も把握しやすい'];\x0a            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '40px'; with: 'Squeak 4.3: Smalltalk allClasses size → 2105'];\x0a            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '40px'; with: 'Cuis 4.0: Smalltalk allClasses size → 654'];\x0a            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '40px'; with: 'Amber (2012/8/26時点): Smalltalk current classes size → 103']\x0a\x09]. [ %1\x0a            h2: 'JSとの親和性が高い！';\x0a            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '30px'; with: ' JSのライブラリを活用できる']\x0a\x09]. [ %1\x0a            h2: '動作環境が多い！';\x0a            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '30px'; with: ' Windows 8 Appもできた']\x0a\x09] }",
messageSends: ["h2:", "|>", "css:put:", "with:", "div"],
referencedClasses: []
}),
smalltalk.Amber.klass);


smalltalk.addClass('DraggableWidget', smalltalk.Widget, [], 'DyNagoya');
smalltalk.addMethod(
"_araburi",
smalltalk.method({
selector: "araburi",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_asJQuery", []), "_toggleClass_", ["tada"]);
    return self;
},
args: [],
source: "araburi\x0a\x09self class asJQuery \x0a\x09\x09toggleClass: 'tada'",
messageSends: ["toggleClass:", "asJQuery", "class"],
referencedClasses: []
}),
smalltalk.DraggableWidget);

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
    (function ($rec) {smalltalk.send($rec, "_class_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_asString", []), "__comma", [" animated"])]);smalltalk.send($rec, "_style_", [smalltalk.send(self, "_style", [])]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(thisisplaceholder1, "_asJQuery", []), "_draggable_", [smalltalk.send(self, "_dragOption", [])]);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderBodyOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: self class asString, ' animated';\x0a\x09\x09style: (self style);\x0a\x09\x09|> [ %1 asJQuery draggable: (self dragOption)];\x0a\x09\x09with: [ self renderBodyOn: html ]",
messageSends: ["class:", ",", "asString", "class", "style:", "style", "|>", "draggable:", "asJQuery", "dragOption", "with:", "renderBodyOn:", "div"],
referencedClasses: []
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_style",
smalltalk.method({
selector: "style",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send([smalltalk.send(smalltalk.send(self, "_x", []), "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send("left:", "__comma", [thisisplaceholder1]), "__comma", [";"]);}]), smalltalk.send(smalltalk.send(self, "_y", []), "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send("top:", "__comma", [thisisplaceholder1]), "__comma", [";"]);}])], "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_select_", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_notNil", []);}]);}]), "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_inject_into_", ["position:fixed;", function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "__comma", [thisisplaceholder2]);}]);}]);
    return self;
},
args: [],
source: "style\x0a\x09^ {\x0a\x09\x09(self x) >>= [ 'left:', %1, ';' ].\x0a\x09\x09(self y) >>= [ 'top:', %1, ';' ]\x0a\x09   } \x0a\x09   |> [ %1 select: [ %1 notNil ] ]\x0a\x09   >>= [ %1 inject: 'position:fixed;' into: [ %1, %2] ]",
messageSends: [">>=", "|>", "x", ",", "y", "select:", "notNil", "inject:into:"],
referencedClasses: []
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'not yet classified',
fn: function () {
    var self = this;
    return nil;
    return self;
},
args: [],
source: "x\x0a\x09^ nil\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'not yet classified',
fn: function () {
    var self = this;
    return nil;
    return self;
},
args: [],
source: "y\x0a\x09^ nil\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.DraggableWidget);


smalltalk.addMethod(
"_asJQuery",
smalltalk.method({
selector: "asJQuery",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(".", "__comma", [smalltalk.send(self, "_asString", [])]), "_asJQuery", []);
    return self;
},
args: [],
source: "asJQuery\x0a\x09^ ('.', self asString) asJQuery",
messageSends: ["asJQuery", ",", "asString"],
referencedClasses: []
}),
smalltalk.DraggableWidget.klass);


smalltalk.addClass('Announcement', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
category: 'accessing',
fn: function () {
    var self = this;
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEnklEQVRYhd3YW4hVVRgH8F8Xoh6iHkrM0ggMIgiieol68i0igki6QG/1EERJD0FYdKceKpJESYgi7ELTRSVyHrxUhppj5mg1OqM43mtGy0sz41x3D9/a7D1nzpw554z20Aebtdc6a3/7/93+6zub/5mcj6cxhKzKdQa//tegRkoAerEffaW1L3AtXimtrT9XYK4w0Ss9VdZ+RCe+qaLjlrTnjrMF6ozC4qvxeAnIrtL93zhWAfTyCl0jOJl0TEta8XaN3z/DKZxOQLqwIQHYWAI4E3vwrjA0mw6oFvxT596DCdA8dGAdjuMEdicgownUKMbS2txGQV2PLQ3sz7AogcrnGVak+Ul8io9wSHh2SwLZkDTi6hsVFJE/15nGGWntSWxP90fwpcjJ4428ax9uagDYTPwpKGMU12ClIlx3Cy8dTGDa8b6o6h7huXemesl56K/x+0VYKqr0w/TiIZFLZW7rx814VIQtE4SbFwQR+kx4d99UwPpq/JaJChzFVuwVYTkmSLUFm0tA8msvdqb75SaG7jlFcVSVC4X7K6U3rQ9hNTYlRT/gVRGKYeG103hLVPMuDIrcWinCnQlPT2b4i9V+OI6LS/OZCdB2Uf5D4vg5nJTswwGsTQCWGO+pFSK3tqX55+kdtaRqIZQX96R5G3YIiwfT2mkR0i5BA10ijOVQrC4B3CW4bGMy9IEawO7BDZWLPWnMSzgPxSZx9vWlK2f5w8IL6yazNMkaEdrepPOkiMZkMlyeXCJyrDu9ZA2WKazeJhL9kzTfokjsRbiuxou6hMcXiry8FT/X2N9anrSUQHyfxu8UHcNouj8mKm9MeHi7qUv9GVEQGX5L40KTe3nc+pESsFbjk3izopx/Sfd9GMBXU4CCF0TRZKJy30v3w6KgKqW7PFmuYOoNCk/9Jbw5pqjGTOTd77igDmBzsUpU6AGRBlsVTWWlTPBkzuJ5yAZE9fULb+1P1g6L3Kr3jJud9n6cdPXjWXF+ZiY2lVWBdSaLPhCM3Iv7xDmXCQ/moGbUCewq0XUcFL1di6CPNkVqPDYVsK/TOCI80yN47Nu0PiDC3lH5cA25raS7HW+k+So8LDxYBjMB2ICCQFuxWNDDqOCe9nStbQAUzEp6+8Vx9IgoglaRMqPGF0GPKpL3VcOKw7gjja+ncUeDwB5Mzz0l2p4WYeAJYWS7oqHsEx1OVWCjCqLN86l8NSpL8SYWiGgcEnyWh3SJoqup1kSAOSUAP4kzc1C0LR3q461KyQRN5HoHcFTxr+poWp+n4jiqpqhMHbnXRpoAletrE5W4Ps27FUmfE28mjsZJ5X5FSPMHx0xhTQ05lYAMipCtVjSM+/FH2lNXpVfmVYbLmgA1SxhUbru7FZyYif6/7tydozjfmk16mJ+AdZb0tAnyHsPLwosLGlGatzg7TS+/hkUYl+El0e/dq/g7t7gZxTl3HZoGsAyviZzdZrz3epvUiyDBZkOZCVrI8ywHNZbWpy13NQHuTsFRTxifqzkNnVXJP5BcWsfeHMhuxeeDep9tWvKOt0d8PayU+SUg+dfGh84loEqZjSvxfBUg+XV7M4r/BQzgKv4ax4CBAAAAAElFTkSuQmCC";
    return self;
},
args: [],
source: "imageUrl\x0a  ^ 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEnklEQVRYhd3YW4hVVRgH8F8Xoh6iHkrM0ggMIgiieol68i0igki6QG/1EERJD0FYdKceKpJESYgi7ELTRSVyHrxUhppj5mg1OqM43mtGy0sz41x3D9/a7D1nzpw554z20Aebtdc6a3/7/93+6zub/5mcj6cxhKzKdQa//tegRkoAerEffaW1L3AtXimtrT9XYK4w0Ss9VdZ+RCe+qaLjlrTnjrMF6ozC4qvxeAnIrtL93zhWAfTyCl0jOJl0TEta8XaN3z/DKZxOQLqwIQHYWAI4E3vwrjA0mw6oFvxT596DCdA8dGAdjuMEdicgownUKMbS2txGQV2PLQ3sz7AogcrnGVak+Ul8io9wSHh2SwLZkDTi6hsVFJE/15nGGWntSWxP90fwpcjJ4428ax9uagDYTPwpKGMU12ClIlx3Cy8dTGDa8b6o6h7huXemesl56K/x+0VYKqr0w/TiIZFLZW7rx814VIQtE4SbFwQR+kx4d99UwPpq/JaJChzFVuwVYTkmSLUFm0tA8msvdqb75SaG7jlFcVSVC4X7K6U3rQ9hNTYlRT/gVRGKYeG103hLVPMuDIrcWinCnQlPT2b4i9V+OI6LS/OZCdB2Uf5D4vg5nJTswwGsTQCWGO+pFSK3tqX55+kdtaRqIZQX96R5G3YIiwfT2mkR0i5BA10ijOVQrC4B3CW4bGMy9IEawO7BDZWLPWnMSzgPxSZx9vWlK2f5w8IL6yazNMkaEdrepPOkiMZkMlyeXCJyrDu9ZA2WKazeJhL9kzTfokjsRbiuxou6hMcXiry8FT/X2N9anrSUQHyfxu8UHcNouj8mKm9MeHi7qUv9GVEQGX5L40KTe3nc+pESsFbjk3izopx/Sfd9GMBXU4CCF0TRZKJy30v3w6KgKqW7PFmuYOoNCk/9Jbw5pqjGTOTd77igDmBzsUpU6AGRBlsVTWWlTPBkzuJ5yAZE9fULb+1P1g6L3Kr3jJud9n6cdPXjWXF+ZiY2lVWBdSaLPhCM3Iv7xDmXCQ/moGbUCewq0XUcFL1di6CPNkVqPDYVsK/TOCI80yN47Nu0PiDC3lH5cA25raS7HW+k+So8LDxYBjMB2ICCQFuxWNDDqOCe9nStbQAUzEp6+8Vx9IgoglaRMqPGF0GPKpL3VcOKw7gjja+ncUeDwB5Mzz0l2p4WYeAJYWS7oqHsEx1OVWCjCqLN86l8NSpL8SYWiGgcEnyWh3SJoqup1kSAOSUAP4kzc1C0LR3q461KyQRN5HoHcFTxr+poWp+n4jiqpqhMHbnXRpoAletrE5W4Ps27FUmfE28mjsZJ5X5FSPMHx0xhTQ05lYAMipCtVjSM+/FH2lNXpVfmVYbLmgA1SxhUbru7FZyYif6/7tydozjfmk16mJ+AdZb0tAnyHsPLwosLGlGatzg7TS+/hkUYl+El0e/dq/g7t7gZxTl3HZoGsAyviZzdZrz3epvUiyDBZkOZCVrI8ywHNZbWpy13NQHuTsFRTxifqzkNnVXJP5BcWsfeHMhuxeeDep9tWvKOt0d8PayU+SUg+dfGh84loEqZjSvxfBUg+XV7M4r/BQzgKv4ax4CBAAAAAElFTkSuQmCC' ",
messageSends: [],
referencedClasses: []
}),
smalltalk.Announcement);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_root", []), "_css_put_", ["width", "270px"]);
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "pink"]);smalltalk.send($rec, "_css_put_", ["padding", "0"]);smalltalk.send($rec, "_css_put_", ["width", "100%"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.8"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["text-align", "center"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["padding", "10px 0"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["vertical-align", "top"]);smalltalk.send($rec, "_css_put_", ["margin-right", "10px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(self, "_imageUrl", [])]);}(smalltalk.send(html, "_img", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["\u8A73\u7D30\u306F"]);return smalltalk.send($rec, "_css_put_", ["color", "black"]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_href_", ["http://atnd.org/events/30524"]);smalltalk.send($rec, "_target_", ["_blank"]);smalltalk.send($rec, "_css_put_", ["color", "#FF3322"]);return smalltalk.send($rec, "_with_", ["\u3053\u3061\u3089"]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_h3", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html root css:'width' put: '270px'.\x0a\x09html div \x0a\x09\x09css: 'background' put: 'pink';\x0a\x09\x09css: 'padding' put: '0';\x0a\x22\x09\x09css: 'width' put: '', window innerWidth , 'px';\x22\x0a\x09\x09css: 'width' put: '100%';\x0a\x09\x09css: 'opacity' put: '0.8';\x0a\x09\x09css: 'color' put: 'white';\x0a\x09\x09css: 'text-align' put: 'center';\x0a\x09with: [\x0a\x09\x09html h3 \x0a\x09\x09\x09css: 'padding' put: '10px 0';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html img css: 'vertical-align' put: 'top'; css:'margin-right' put:'10px'; src: self imageUrl.\x0a\x09\x09\x09\x09html span with: '詳細は'; \x0a\x09\x09\x09\x09\x09css: 'color' put: 'black'.\x0a\x09\x09\x09\x09html a href: 'http://atnd.org/events/30524'; target: '_blank'; css: 'color' put: '#FF3322';\x0a\x09\x09\x09\x09with: 'こちら'.\x0a\x09\x09\x09]\x0a\x09]",
messageSends: ["css:put:", "root", "with:", "src:", "imageUrl", "img", "span", "href:", "target:", "a", "h3", "div"],
referencedClasses: []
}),
smalltalk.Announcement);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "70px";
    return self;
},
args: [],
source: "x\x0a  ^'70px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Announcement);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return "527px";
    return self;
},
args: [],
source: "y\x0a  ^'527px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Announcement);



smalltalk.addClass('Board', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["alert-message block-message warning ui-draggable"]);smalltalk.send($rec, "_style_", ["margin: 10px"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Event || Event, "_latest", [])]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div \x0a\x09\x09class: 'alert-message block-message warning ui-draggable';\x0a\x09\x09style: 'margin: 10px';\x0a\x09\x09with: Event latest",
messageSends: ["class:", "style:", "with:", "latest", "div"],
referencedClasses: ["Event"]
}),
smalltalk.Board);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "32px";
    return self;
},
args: [],
source: "x\x0a  ^'32px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Board);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return "18px";
    return self;
},
args: [],
source: "y\x0a  ^'18px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Board);



smalltalk.addClass('DSLforHtml', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["width", "350px"]);smalltalk.send($rec, "_css_put_", ["background-color", "yellow"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.9"]);smalltalk.send($rec, "_css_put_", ["padding", "10px"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin", "0"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["HTML\u3082\u30B9\u30BF\u30A4\u30EB\u3082Smalltalk\u3067\u8A18\u8FF0"]);}]);}(smalltalk.send(html, "_h2", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div css: 'width' put: '350px'; css: 'background-color' put: 'yellow'; css: 'opacity' put: '0.9'; css: 'padding' put: '10px'; with: [\x0a\x09\x09html h2 css: 'margin' put: '0'; with: [\x0a\x09\x09\x09html div with:'HTMLもスタイルもSmalltalkで記述'.\x0a\x09\x09]\x0a\x09]\x0a\x0a",
messageSends: ["css:put:", "with:", "div", "h2"],
referencedClasses: []
}),
smalltalk.DSLforHtml);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "729px";
    return self;
},
args: [],
source: "x\x0a  ^'729px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.DSLforHtml);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return "249px";
    return self;
},
args: [],
source: "y\x0a  ^'249px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.DSLforHtml);



smalltalk.addClass('FinDesc', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["width", "350px"]);smalltalk.send($rec, "_css_put_", ["background-color", "yellow"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.7"]);smalltalk.send($rec, "_css_put_", ["padding", "10px"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin", "0"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["\u5927\u540D\u53E4\u5C4B\u30D3\u30EB\u30C2\u30F3\u30B0\u306F"]);smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["2012\u5E749\u670830\u65E5\u306B"]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["\u9589\u9928\u3057\u307E\u3059\u3002"]);}]);}(smalltalk.send(html, "_h2", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div css: 'width' put: '350px'; css: 'background-color' put: 'yellow'; css: 'opacity' put: '0.7'; css: 'padding' put: '10px'; with: [\x0a\x09\x09html h2 css: 'margin' put: '0'; with: [\x0a\x09\x09\x09html div with:'大名古屋ビルヂングは'.\x0a\x09\x09\x09html div with: '2012年9月30日に'.\x0a\x09\x09\x09html div with: '閉館します。'.\x0a\x09\x09]\x0a\x09]\x0a\x0a",
messageSends: ["css:put:", "with:", "div", "h2"],
referencedClasses: []
}),
smalltalk.FinDesc);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "543px";
    return self;
},
args: [],
source: "x\x0a  ^'543px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FinDesc);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return "-341px";
    return self;
},
args: [],
source: "y\x0a  ^'-341px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FinDesc);



smalltalk.addClass('HowToJoin', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
category: 'accessing',
fn: function () {
    var self = this;
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEnklEQVRYhd3YW4hVVRgH8F8Xoh6iHkrM0ggMIgiieol68i0igki6QG/1EERJD0FYdKceKpJESYgi7ELTRSVyHrxUhppj5mg1OqM43mtGy0sz41x3D9/a7D1nzpw554z20Aebtdc6a3/7/93+6zub/5mcj6cxhKzKdQa//tegRkoAerEffaW1L3AtXimtrT9XYK4w0Ss9VdZ+RCe+qaLjlrTnjrMF6ozC4qvxeAnIrtL93zhWAfTyCl0jOJl0TEta8XaN3z/DKZxOQLqwIQHYWAI4E3vwrjA0mw6oFvxT596DCdA8dGAdjuMEdicgownUKMbS2txGQV2PLQ3sz7AogcrnGVak+Ul8io9wSHh2SwLZkDTi6hsVFJE/15nGGWntSWxP90fwpcjJ4428ax9uagDYTPwpKGMU12ClIlx3Cy8dTGDa8b6o6h7huXemesl56K/x+0VYKqr0w/TiIZFLZW7rx814VIQtE4SbFwQR+kx4d99UwPpq/JaJChzFVuwVYTkmSLUFm0tA8msvdqb75SaG7jlFcVSVC4X7K6U3rQ9hNTYlRT/gVRGKYeG103hLVPMuDIrcWinCnQlPT2b4i9V+OI6LS/OZCdB2Uf5D4vg5nJTswwGsTQCWGO+pFSK3tqX55+kdtaRqIZQX96R5G3YIiwfT2mkR0i5BA10ijOVQrC4B3CW4bGMy9IEawO7BDZWLPWnMSzgPxSZx9vWlK2f5w8IL6yazNMkaEdrepPOkiMZkMlyeXCJyrDu9ZA2WKazeJhL9kzTfokjsRbiuxou6hMcXiry8FT/X2N9anrSUQHyfxu8UHcNouj8mKm9MeHi7qUv9GVEQGX5L40KTe3nc+pESsFbjk3izopx/Sfd9GMBXU4CCF0TRZKJy30v3w6KgKqW7PFmuYOoNCk/9Jbw5pqjGTOTd77igDmBzsUpU6AGRBlsVTWWlTPBkzuJ5yAZE9fULb+1P1g6L3Kr3jJud9n6cdPXjWXF+ZiY2lVWBdSaLPhCM3Iv7xDmXCQ/moGbUCewq0XUcFL1di6CPNkVqPDYVsK/TOCI80yN47Nu0PiDC3lH5cA25raS7HW+k+So8LDxYBjMB2ICCQFuxWNDDqOCe9nStbQAUzEp6+8Vx9IgoglaRMqPGF0GPKpL3VcOKw7gjja+ncUeDwB5Mzz0l2p4WYeAJYWS7oqHsEx1OVWCjCqLN86l8NSpL8SYWiGgcEnyWh3SJoqup1kSAOSUAP4kzc1C0LR3q461KyQRN5HoHcFTxr+poWp+n4jiqpqhMHbnXRpoAletrE5W4Ps27FUmfE28mjsZJ5X5FSPMHx0xhTQ05lYAMipCtVjSM+/FH2lNXpVfmVYbLmgA1SxhUbru7FZyYif6/7tydozjfmk16mJ+AdZb0tAnyHsPLwosLGlGatzg7TS+/hkUYl+El0e/dq/g7t7gZxTl3HZoGsAyviZzdZrz3epvUiyDBZkOZCVrI8ywHNZbWpy13NQHuTsFRTxifqzkNnVXJP5BcWsfeHMhuxeeDep9tWvKOt0d8PayU+SUg+dfGh84loEqZjSvxfBUg+XV7M4r/BQzgKv4ax4CBAAAAAElFTkSuQmCC";
    return self;
},
args: [],
source: "imageUrl\x0a  ^ 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEnklEQVRYhd3YW4hVVRgH8F8Xoh6iHkrM0ggMIgiieol68i0igki6QG/1EERJD0FYdKceKpJESYgi7ELTRSVyHrxUhppj5mg1OqM43mtGy0sz41x3D9/a7D1nzpw554z20Aebtdc6a3/7/93+6zub/5mcj6cxhKzKdQa//tegRkoAerEffaW1L3AtXimtrT9XYK4w0Ss9VdZ+RCe+qaLjlrTnjrMF6ozC4qvxeAnIrtL93zhWAfTyCl0jOJl0TEta8XaN3z/DKZxOQLqwIQHYWAI4E3vwrjA0mw6oFvxT596DCdA8dGAdjuMEdicgownUKMbS2txGQV2PLQ3sz7AogcrnGVak+Ul8io9wSHh2SwLZkDTi6hsVFJE/15nGGWntSWxP90fwpcjJ4428ax9uagDYTPwpKGMU12ClIlx3Cy8dTGDa8b6o6h7huXemesl56K/x+0VYKqr0w/TiIZFLZW7rx814VIQtE4SbFwQR+kx4d99UwPpq/JaJChzFVuwVYTkmSLUFm0tA8msvdqb75SaG7jlFcVSVC4X7K6U3rQ9hNTYlRT/gVRGKYeG103hLVPMuDIrcWinCnQlPT2b4i9V+OI6LS/OZCdB2Uf5D4vg5nJTswwGsTQCWGO+pFSK3tqX55+kdtaRqIZQX96R5G3YIiwfT2mkR0i5BA10ijOVQrC4B3CW4bGMy9IEawO7BDZWLPWnMSzgPxSZx9vWlK2f5w8IL6yazNMkaEdrepPOkiMZkMlyeXCJyrDu9ZA2WKazeJhL9kzTfokjsRbiuxou6hMcXiry8FT/X2N9anrSUQHyfxu8UHcNouj8mKm9MeHi7qUv9GVEQGX5L40KTe3nc+pESsFbjk3izopx/Sfd9GMBXU4CCF0TRZKJy30v3w6KgKqW7PFmuYOoNCk/9Jbw5pqjGTOTd77igDmBzsUpU6AGRBlsVTWWlTPBkzuJ5yAZE9fULb+1P1g6L3Kr3jJud9n6cdPXjWXF+ZiY2lVWBdSaLPhCM3Iv7xDmXCQ/moGbUCewq0XUcFL1di6CPNkVqPDYVsK/TOCI80yN47Nu0PiDC3lH5cA25raS7HW+k+So8LDxYBjMB2ICCQFuxWNDDqOCe9nStbQAUzEp6+8Vx9IgoglaRMqPGF0GPKpL3VcOKw7gjja+ncUeDwB5Mzz0l2p4WYeAJYWS7oqHsEx1OVWCjCqLN86l8NSpL8SYWiGgcEnyWh3SJoqup1kSAOSUAP4kzc1C0LR3q461KyQRN5HoHcFTxr+poWp+n4jiqpqhMHbnXRpoAletrE5W4Ps27FUmfE28mjsZJ5X5FSPMHx0xhTQ05lYAMipCtVjSM+/FH2lNXpVfmVYbLmgA1SxhUbru7FZyYif6/7tydozjfmk16mJ+AdZb0tAnyHsPLwosLGlGatzg7TS+/hkUYl+El0e/dq/g7t7gZxTl3HZoGsAyviZzdZrz3epvUiyDBZkOZCVrI8ywHNZbWpy13NQHuTsFRTxifqzkNnVXJP5BcWsfeHMhuxeeDep9tWvKOt0d8PayU+SUg+dfGh84loEqZjSvxfBUg+XV7M4r/BQzgKv4ax4CBAAAAAElFTkSuQmCC' ",
messageSends: [],
referencedClasses: []
}),
smalltalk.HowToJoin);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var div = nil;
    smalltalk.send(smalltalk.send(html, "_root", []), "_css_put_", ["width", "350px"]);
    div = smalltalk.send(html, "_div", []);
    smalltalk.send(function () {return function ($rec) {smalltalk.send($rec, "_class_", ["animated bounceInDown"]);smalltalk.send($rec, "_css_put_", ["background", "pink"]);smalltalk.send($rec, "_css_put_", ["padding", "0"]);smalltalk.send($rec, "_css_put_", ["width", "100%"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.8"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["text-align", "center"]);smalltalk.send($rec, "_css_put_", ["animation-duration", "1.5s"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["padding", "10px 0"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["vertical-align", "top"]);smalltalk.send($rec, "_css_put_", ["margin-right", "10px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(self, "_imageUrl", [])]);}(smalltalk.send(html, "_img", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["\u53C2\u52A0\u65B9\u6CD5\u306F"]);return smalltalk.send($rec, "_css_put_", ["color", "black"]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_css_put_", ["color", "#FF3322"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.HowToJoinPage || HowToJoinPage, "_show", []);}]);return smalltalk.send($rec, "_with_", ["\u3053\u3061\u3089"]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_h3", []));}]);}(div);}, "_valueWithTimeout_", [1500]);
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09| div |\x0a\x09html root css:'width' put: '350px'.\x0a\x09div := html div.\x0a[\x0a\x09div \x0a\x09\x09class: 'animated bounceInDown';\x0a\x09\x09css: 'background' put: 'pink';\x0a\x09\x09css: 'padding' put: '0';\x0a\x09\x09css: 'width' put: '100%';\x0a\x09\x09css: 'opacity' put: '0.8';\x0a\x09\x09css: 'color' put: 'white';\x0a\x09\x09css: 'text-align' put: 'center';\x0a\x09\x09css: 'animation-duration' put: '1.5s';\x0a\x09with: [\x0a\x09\x09html h3 \x0a\x09\x09\x09css: 'padding' put: '10px 0';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html img css: 'vertical-align' put: 'top'; css:'margin-right' put:'10px'; src: self imageUrl.\x0a\x09\x09\x09\x09html span with: '参加方法は'; \x0a\x09\x09\x09\x09\x09css: 'color' put: 'black'.\x0a\x09\x09\x09\x09html a css: 'color' put: '#FF3322';\x0a\x09\x09\x09\x09\x09onClick: [ HowToJoinPage show];\x0a\x09\x09\x09\x09\x09with: 'こちら'.\x0a\x09\x09\x09]\x0a\x09]\x0a] valueWithTimeout: 1500",
messageSends: ["css:put:", "root", "div", "valueWithTimeout:", "class:", "with:", "src:", "imageUrl", "img", "span", "onClick:", "show", "a", "h3"],
referencedClasses: ["HowToJoinPage"]
}),
smalltalk.HowToJoin);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "60px";
    return self;
},
args: [],
source: "x\x0a  ^'60px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HowToJoin);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return "505px";
    return self;
},
args: [],
source: "y\x0a  ^'505px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HowToJoin);



smalltalk.addClass('Icon', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
category: 'accessing',
fn: function () {
    var self = this;
    return "";
    return self;
},
args: [],
source: "imageUrl\x0a\x09^''",
messageSends: [],
referencedClasses: []
}),
smalltalk.Icon);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl", [])]);
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html img src: self imageUrl",
messageSends: ["src:", "img", "imageUrl"],
referencedClasses: []
}),
smalltalk.Icon);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'rendering',
fn: function () {
    var self = this;
    return 0;
    return self;
},
args: [],
source: "x ^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.Icon);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'rendering',
fn: function () {
    var self = this;
    return 0;
    return self;
},
args: [],
source: "y ^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.Icon);



smalltalk.addClass('Logo', smalltalk.Icon, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
category: 'accessing',
fn: function () {
    var self = this;
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAABOCAYAAAAqyQ2iAAAPKklEQVR4nO2dW29c1RXH+Rb+BiO19OIXqxeqeZm2qmj9MJSqxQ+mDzRFfoBWTacSpVzcqhQiSxUQLNFysShUmUpFxSAIU4IIE5PYuDCTKTgxttPYSUwST2J77GPP2Offh+OJJ55znb322Xsfr5+0XqJoZp09a/29z76sdQuYxGPbQKMObFq71qgDsFV7xjCMTG5R7QBDjA3MzwHPDgE/ziyiu6via+nUJ/jdwFV8UADqlmrnGYahpE3gcwM20qlP8P2ecxJsBgeyl/HgwCr+OtTAu6PAhTkWFgquLAL39a8FCnqQ9facwUfFLdWPwzAMAW0Cf0emKiwSndpdmVm8OlJHdVHFUJiJZQF3SvnNxnB1YVv14zEMI0CbwGcVCvxeezy3hNWqimExg/cKkP4b/GvksurHZBimQ7QW+Kb19pRxZUHF8OjLozn54t60J3KfqX5chmE6wAiBb9rPs2exXeejH3dnrdjH/lBuSvVjMwwTEaMEvmmnCvt3V3ag31Y27uOFJdWPzzBMBIwU+O6uCu7NfuIc8N5HfFCMb1nG3U4BNm+8MowpGCvwjo2hYe2PI33bNvAV5eNdwZHhedVDwTBMSAwXeEfksdVQMXaxcnhI9ey9Zbx5Fs8wRpAAga8gnXpPxdjFRmNLj9l700rFa6qHhGGYECRC4Lu7kn3K4+8juszeHevteV/1kDAME4LECHx3VwXzU+sqxlA6X9RgbG+2ST6uyjAGkCiB7+46nriTNbWaXrP3pP8xZZgkkTCBr+DFoRkV4yiNyQk9Bf7I8Dmpz729BVg1YLkKrOxYbdmMMseNuuPr0uKurTV915hWvzdqwNVFZ9w3LWg/5iagIqYTJ/DdXSU0rDXPB15ZBo6NAicK0ezYKFzr4mzbwDsdfN6JAjBdDv6BHomxJEEUuzc7ESnQglivAa/ngXuyy6G+/wc9M3hqsIbpMmArPim7XAVeGgZu75kP5ftdmVm8lXdEXyWry8Ab+XBlpZ0xP4NXhi3S+lCm5WMUdIjpBAp8BYdyFc8Hfm64c8EccXk7WFjo/PPSqaOBPxBFdc906iTWd8RkvQZ8MzUj/Jl9mVMRwsyb8SJwG4E/B7LncGmOxKVQbNvAaF78dFM6dRonC4jt6KltA/8eBb4lOOaO3+KvJKblYxh0imlygQ9aItnecmY8HxaBBwY28VXBQXA377PaIidS3JYlPl/s/PN6e94N/IHE/+C23z61beBLwmN8LNB3Pz6bknP0s7enfOOPmSyOS6rieTS/KtXv8SIk5NspnJ/qfLppWj76oWNMkwt8J2uz40X6gZktu4+IaQH1nZ6LQuPg9TYjfvSy87IFgzEsOx3NX+/INz8aW7Jq7+9aOnWS/IRSHH4/ketsT8a0fPRC15jWQuBlDJLXuXiTAoqiPIHXpSQRvx2LLvCNLeAbBK+uYe1g/+lI/vlRrcZ52WwStSrNkk2cfqdTJyLHhEn56IbuMa2VwAOUl3reJP/8uAPKtoEvC47D9cVN18+OW+AtS/xZOrG+zGRoH72YnlKx0V0SFnk1fo9FegMxKR/3YkJMayfwFD40ba3avglkUkBRCPzSgvtGWJwCb1lqSy3cm/0olJ9unFUikk2b7LiY3n/LKv0ew3Z9I5SfJuVjK6bEtJYCT3W5Z2mh/TKOSQGVFIHX4Sbu+6NXQvnaypriJO7uqiCdeiey39eX1R+tDVsfyqR8bMWUmNZS4AGaxhZv5z9v+1yTAioJAn9oUL3Y3PA3YtVR0Q1uKota3O3rMa4J+1mYS4cm5WMTk2JaW4GnuMHp5otJAWW6wFeruiSCY4cHz/j624r65iq7FqVa6qt5ffzu7qrAWvZfYjIpHwHzYlpbgbcs8TO7LPBqBf7bmsyAd20y9Cxe/J4ArXltlreiS1OYVgtaKzYpHwHzYlpbgacQNxZ4dQJ/bk6vmU7TXhsJ7kj11qh+vvvdzm7ytDZNYW42vz9OJuWjiTHNAq9xQJks8PqWvCj4Bx702EBrt+O+Pus4e2+aX90ik/LRxJhmgdc4oEwV+I26jCvxVFZCveb9SqvbGmuruR37bVJReiwyyLyXEUzJR1NjWluBp2hTxwKvRuB1LXHctE8nap5jTrNJWcLJwvaNioAbFvB7glva44UlT7/pqo6W8KfcOh4cuIb7+9fIxny27F7h1ZR8NDWmtRV4ivUuFng1Ak8lNg8NXER10SmdumkB/yC65ex38qA/awl+/jHPm5wnBU/mHBn2XmuluC7/wlD7uep6naaOzTOD7kcmTclHU2NaW4F/XqCMqJ8vpgQUYK7Ai58fL3lWKFyrib/Z+fWUvVXosycDb3CK/AHxiheK9ffxgn+5wtyAWLx4+W5KPpoa09oKvFiiOeb2WmhKQAFmCjyF2CzO+bcDFL2p6VXLXtT310Yu+voNiJU+6MuckPJbhm3eInZ01L2dpgn5aHJMaynw7xLV2+ZaNPELvKjPjwwEHwcEgF8LzCjTKXehFPU9zFl1sb0ld5EU/S2DLiM1EdufcI8XE/LR5JjWTuDpjnuNGTtjaLIfBd6tfpAbYns06nwX+w53v8VO/rjniRuLQjGzfwVeZUxrJ/DfJbop5vU6KxJQbq/gLPC0Pnv5uxexm85yfJ+fMlHgwxeNE4sZeoGPKx9NjmltBP5alba2stftLpGAOpT7uO3zWOBpfQ6zzCH+PXJ8D1P5UYbfYr9l+PINZ4RKJ9MLfFz5aHJMKxf49RrwBwntrrwuhYgE1GGXo14iTX6TKPBxbFSKj428DeIXhhZi91skBp0xDy7fAIhqA73Ax5WPJse0XIG3b7ZGHagtA2fKwLND4p3dvcyv+p5Yx6j26+IPC/xxSqLAizf0DjejlJEMAPA1gpjsy1RuapK8vQVMFAHY21L83qiL/mGaRMNyv4jURLSBiNcxPhPy0eSYlibwKsuW+tXPFm0J2Jf5GBs1ADZwRPCzkijwFDEUpvG0LIGnuxFaQXdXCemWPxjNzbbOxdjbb/Hql2PY9Ljg+xHBLc6D/e3LKYA5+WhqTEsTeLreqlHtmO8gqvMrWkCJ/+COqRD45wguqXV3VXA0v4m65cyAl6vAS8PY+V5bmsDLrAO/tLACQI7Ai9/Adez5oRWsLTtv24sLwH39DZLP9eo+ZEo+mhrTiRP4oO43OpWCTarAyy2rekraUgcgt6iUTIGnujsiy7zO2puSj6bGdKIEPkznG7GzvPEFFGCuwFP4HfS9sgQeoJsNt/8W8gR+jaBBjjx703OsTclHU2M6UQIf5rypuLDFE1BUQaWqHrzIZleY75Up8KKnUrx/C3kCD9D0MZZhfs2hTcpHE2M6MQIfpuMNoFdjhCQLPEXLRb/vlSnwAHCHhOYOsgVetJ6JHPPfEzMpH02M6YQIvPcroBvileHiCSiTBR6QNeOJR+BlNP6QLfAA9SkgcQvaEwPMyUcTYzoBAj8WWKJ1L7ps7CRd4Cmatnh9r2yBB4DDxD1O4xB4vWbE3mWZWzElH02MacMF/njg2VI3dEmCpAs8IOPYYXwCDwA/JFyqiUPgAV26D/m3RmzFlHxsYlJMGyvwvT0ToavguUHRUER2QCVB4AHqzb94BR6gK4AXl8ADwDPEbx9Rza8tohsm5GMrpsS0kQL/RE685rz49WP5AZUUgQcoNy3jF3gA+CnB0ck4BR4AHlW0Hh/UHcoNE/JxLybEtHEC/+lEuNKbYVB9RGs/CTwA/Eaw7ZvsZAjiRcFZZlPg4/T7hZhnxjPlaPthreiej27oHtPGCPzB/lkgXOOZSIjeUEunzkoLqKQJPCBeL0SlwANOWesfdZgjSwsrWKmJNueI7jdFLZkwY1qrdjSkN6FzPnqhc0xrL/AHsjNYJQgcP6pV0U2ekpSASqLAA8DFBfFlClUC3+R6FfjzYLjnSKdO47mhFcC2sSRw/NKr72YY1mrA9yQdRzzYPy20H7YXXfPRD11juk3gRdeVKAS+t+cM3spvYotuNSYQ2waGI2xM9WU+xWRRLBCDAoridIGOAt9kNN/JxZHdZIhrLTuIRh1YmANOTwAnCsBkEThbBpYWAXvPW6fIkUARAWry8QTdiZXenjKu+Je/7xgd8zEMusV0m8DfLbiZ1LyWHKX62l2Z83hysIbpMmIVdTdsG5iZcurV35Ndwk8yF3bsPB7LXcd/ikDdcv7vacEa2Q8HNOO1beBWwST06iYjfpHHvQF0J0yVgfv710J+7+SNZOh8U47O96h8QWDMvUrudsL5OeCBgc0O/CjhqcGq9LfqJjrlYxR0iek2gSdjp8HHpgVYNafRx0rVsdqy8+9Qk2NkiDaHCNtJZ99gOyVUiwXgL0PAL/qv4WfZyzt2CQ8OXMMrw9GO3+mE6Pry2/kLUvxaXQY+LAJ/GwZ+O7CKX/Zf27GreCy3in+OANNlOHXXNUbLfFQc0/IEPuFQXHYI24yXMR+Zb2MM56MXLPAdUK1SFB0K3+yY0ZOwqzybdXFxp943SBKcj96wwDcJmaxvE9XNSKfekfs8jFSaG2KP5y77rkcfJ2rE0Zc5Ed/D6QDnIwks8NhN1r7M9E2bNk22t4DSBHAbYZNwXn83m/YjbSUcyC7gycENvDwM/DG3RVpadrbs3xQ7SXA+0sECD+/z5unUWUn1nycjV8Bk9EJuh5+95l9TPWlwPtLBAo+4k7WCRwiPYzFqiDNmZJ2e0RXORzpY4BF/QIUto8roS3wxo+7Mvio4H+lggUe8AXUoN6X6cRkC4oqZ8cKS6keNHc5HOljgEWdA8VG3pBBHzITtiJQ0OB/pYIFHfAE1P7Wu+lEZIuTHzKnEbvwFwflIBws84gmoUnFV9WMyhMiNmRJq1WTPLP3gfKSDBR7yA2q/BNN+Ql7MTMKK3hApUXA+0sECD7kBNT/F9UOSiJyYGUPDktDVxjA4H+lggYe8ZN3vM7EkQx0z1E0zTIbzkQ4WeNA01mi1pwcvqX4kRjJ0MTOG/03xrL0Vzkc6WOBBN2N4aOAiNjWvmc3QcadA97Nf9V/AxTnVT6AnnI90sMDvsGEBr+eB23vmIwVRX2YWHxTaW7Mx+4PtLafj0EvDTsehtEsBrHTqLA5kL+GV4boj6rwSEwjnIw0s8C7YO11YyhPAG3mn083LO/ZmHqhMOJ2pOFEZT2xwfBDB+dg5LPAMwzAJhQWeYRgmobDAMwzDJJT/A0Adrv0nAIIWAAAAAElFTkSuQmCC";
    return self;
},
args: [],
source: "imageUrl\x0a  ^  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAABOCAYAAAAqyQ2iAAAPKklEQVR4nO2dW29c1RXH+Rb+BiO19OIXqxeqeZm2qmj9MJSqxQ+mDzRFfoBWTacSpVzcqhQiSxUQLNFysShUmUpFxSAIU4IIE5PYuDCTKTgxttPYSUwST2J77GPP2Offh+OJJ55znb322Xsfr5+0XqJoZp09a/29z76sdQuYxGPbQKMObFq71qgDsFV7xjCMTG5R7QBDjA3MzwHPDgE/ziyiu6via+nUJ/jdwFV8UADqlmrnGYahpE3gcwM20qlP8P2ecxJsBgeyl/HgwCr+OtTAu6PAhTkWFgquLAL39a8FCnqQ9facwUfFLdWPwzAMAW0Cf0emKiwSndpdmVm8OlJHdVHFUJiJZQF3SvnNxnB1YVv14zEMI0CbwGcVCvxeezy3hNWqimExg/cKkP4b/GvksurHZBimQ7QW+Kb19pRxZUHF8OjLozn54t60J3KfqX5chmE6wAiBb9rPs2exXeejH3dnrdjH/lBuSvVjMwwTEaMEvmmnCvt3V3ag31Y27uOFJdWPzzBMBIwU+O6uCu7NfuIc8N5HfFCMb1nG3U4BNm+8MowpGCvwjo2hYe2PI33bNvAV5eNdwZHhedVDwTBMSAwXeEfksdVQMXaxcnhI9ey9Zbx5Fs8wRpAAga8gnXpPxdjFRmNLj9l700rFa6qHhGGYECRC4Lu7kn3K4+8juszeHevteV/1kDAME4LECHx3VwXzU+sqxlA6X9RgbG+2ST6uyjAGkCiB7+46nriTNbWaXrP3pP8xZZgkkTCBr+DFoRkV4yiNyQk9Bf7I8Dmpz729BVg1YLkKrOxYbdmMMseNuuPr0uKurTV915hWvzdqwNVFZ9w3LWg/5iagIqYTJ/DdXSU0rDXPB15ZBo6NAicK0ezYKFzr4mzbwDsdfN6JAjBdDv6BHomxJEEUuzc7ESnQglivAa/ngXuyy6G+/wc9M3hqsIbpMmArPim7XAVeGgZu75kP5ftdmVm8lXdEXyWry8Ab+XBlpZ0xP4NXhi3S+lCm5WMUdIjpBAp8BYdyFc8Hfm64c8EccXk7WFjo/PPSqaOBPxBFdc906iTWd8RkvQZ8MzUj/Jl9mVMRwsyb8SJwG4E/B7LncGmOxKVQbNvAaF78dFM6dRonC4jt6KltA/8eBb4lOOaO3+KvJKblYxh0imlygQ9aItnecmY8HxaBBwY28VXBQXA377PaIidS3JYlPl/s/PN6e94N/IHE/+C23z61beBLwmN8LNB3Pz6bknP0s7enfOOPmSyOS6rieTS/KtXv8SIk5NspnJ/qfLppWj76oWNMkwt8J2uz40X6gZktu4+IaQH1nZ6LQuPg9TYjfvSy87IFgzEsOx3NX+/INz8aW7Jq7+9aOnWS/IRSHH4/ketsT8a0fPRC15jWQuBlDJLXuXiTAoqiPIHXpSQRvx2LLvCNLeAbBK+uYe1g/+lI/vlRrcZ52WwStSrNkk2cfqdTJyLHhEn56IbuMa2VwAOUl3reJP/8uAPKtoEvC47D9cVN18+OW+AtS/xZOrG+zGRoH72YnlKx0V0SFnk1fo9FegMxKR/3YkJMayfwFD40ba3avglkUkBRCPzSgvtGWJwCb1lqSy3cm/0olJ9unFUikk2b7LiY3n/LKv0ew3Z9I5SfJuVjK6bEtJYCT3W5Z2mh/TKOSQGVFIHX4Sbu+6NXQvnaypriJO7uqiCdeiey39eX1R+tDVsfyqR8bMWUmNZS4AGaxhZv5z9v+1yTAioJAn9oUL3Y3PA3YtVR0Q1uKota3O3rMa4J+1mYS4cm5WMTk2JaW4GnuMHp5otJAWW6wFeruiSCY4cHz/j624r65iq7FqVa6qt5ffzu7qrAWvZfYjIpHwHzYlpbgbcs8TO7LPBqBf7bmsyAd20y9Cxe/J4ArXltlreiS1OYVgtaKzYpHwHzYlpbgacQNxZ4dQJ/bk6vmU7TXhsJ7kj11qh+vvvdzm7ytDZNYW42vz9OJuWjiTHNAq9xQJks8PqWvCj4Bx702EBrt+O+Pus4e2+aX90ik/LRxJhmgdc4oEwV+I26jCvxVFZCveb9SqvbGmuruR37bVJReiwyyLyXEUzJR1NjWluBp2hTxwKvRuB1LXHctE8nap5jTrNJWcLJwvaNioAbFvB7glva44UlT7/pqo6W8KfcOh4cuIb7+9fIxny27F7h1ZR8NDWmtRV4ivUuFng1Ak8lNg8NXER10SmdumkB/yC65ex38qA/awl+/jHPm5wnBU/mHBn2XmuluC7/wlD7uep6naaOzTOD7kcmTclHU2NaW4F/XqCMqJ8vpgQUYK7Ai58fL3lWKFyrib/Z+fWUvVXosycDb3CK/AHxiheK9ffxgn+5wtyAWLx4+W5KPpoa09oKvFiiOeb2WmhKQAFmCjyF2CzO+bcDFL2p6VXLXtT310Yu+voNiJU+6MuckPJbhm3eInZ01L2dpgn5aHJMaynw7xLV2+ZaNPELvKjPjwwEHwcEgF8LzCjTKXehFPU9zFl1sb0ld5EU/S2DLiM1EdufcI8XE/LR5JjWTuDpjnuNGTtjaLIfBd6tfpAbYns06nwX+w53v8VO/rjniRuLQjGzfwVeZUxrJ/DfJbop5vU6KxJQbq/gLPC0Pnv5uxexm85yfJ+fMlHgwxeNE4sZeoGPKx9NjmltBP5alba2stftLpGAOpT7uO3zWOBpfQ6zzCH+PXJ8D1P5UYbfYr9l+PINZ4RKJ9MLfFz5aHJMKxf49RrwBwntrrwuhYgE1GGXo14iTX6TKPBxbFSKj428DeIXhhZi91skBp0xDy7fAIhqA73Ax5WPJse0XIG3b7ZGHagtA2fKwLND4p3dvcyv+p5Yx6j26+IPC/xxSqLAizf0DjejlJEMAPA1gpjsy1RuapK8vQVMFAHY21L83qiL/mGaRMNyv4jURLSBiNcxPhPy0eSYlibwKsuW+tXPFm0J2Jf5GBs1ADZwRPCzkijwFDEUpvG0LIGnuxFaQXdXCemWPxjNzbbOxdjbb/Hql2PY9Ljg+xHBLc6D/e3LKYA5+WhqTEsTeLreqlHtmO8gqvMrWkCJ/+COqRD45wguqXV3VXA0v4m65cyAl6vAS8PY+V5bmsDLrAO/tLACQI7Ai9/Adez5oRWsLTtv24sLwH39DZLP9eo+ZEo+mhrTiRP4oO43OpWCTarAyy2rekraUgcgt6iUTIGnujsiy7zO2puSj6bGdKIEPkznG7GzvPEFFGCuwFP4HfS9sgQeoJsNt/8W8gR+jaBBjjx703OsTclHU2M6UQIf5rypuLDFE1BUQaWqHrzIZleY75Up8KKnUrx/C3kCD9D0MZZhfs2hTcpHE2M6MQIfpuMNoFdjhCQLPEXLRb/vlSnwAHCHhOYOsgVetJ6JHPPfEzMpH02M6YQIvPcroBvileHiCSiTBR6QNeOJR+BlNP6QLfAA9SkgcQvaEwPMyUcTYzoBAj8WWKJ1L7ps7CRd4Cmatnh9r2yBB4DDxD1O4xB4vWbE3mWZWzElH02MacMF/njg2VI3dEmCpAs8IOPYYXwCDwA/JFyqiUPgAV26D/m3RmzFlHxsYlJMGyvwvT0ToavguUHRUER2QCVB4AHqzb94BR6gK4AXl8ADwDPEbx9Rza8tohsm5GMrpsS0kQL/RE685rz49WP5AZUUgQcoNy3jF3gA+CnB0ck4BR4AHlW0Hh/UHcoNE/JxLybEtHEC/+lEuNKbYVB9RGs/CTwA/Eaw7ZvsZAjiRcFZZlPg4/T7hZhnxjPlaPthreiej27oHtPGCPzB/lkgXOOZSIjeUEunzkoLqKQJPCBeL0SlwANOWesfdZgjSwsrWKmJNueI7jdFLZkwY1qrdjSkN6FzPnqhc0xrL/AHsjNYJQgcP6pV0U2ekpSASqLAA8DFBfFlClUC3+R6FfjzYLjnSKdO47mhFcC2sSRw/NKr72YY1mrA9yQdRzzYPy20H7YXXfPRD11juk3gRdeVKAS+t+cM3spvYotuNSYQ2waGI2xM9WU+xWRRLBCDAoridIGOAt9kNN/JxZHdZIhrLTuIRh1YmANOTwAnCsBkEThbBpYWAXvPW6fIkUARAWry8QTdiZXenjKu+Je/7xgd8zEMusV0m8DfLbiZ1LyWHKX62l2Z83hysIbpMmIVdTdsG5iZcurV35Ndwk8yF3bsPB7LXcd/ikDdcv7vacEa2Q8HNOO1beBWwST06iYjfpHHvQF0J0yVgfv710J+7+SNZOh8U47O96h8QWDMvUrudsL5OeCBgc0O/CjhqcGq9LfqJjrlYxR0iek2gSdjp8HHpgVYNafRx0rVsdqy8+9Qk2NkiDaHCNtJZ99gOyVUiwXgL0PAL/qv4WfZyzt2CQ8OXMMrw9GO3+mE6Pry2/kLUvxaXQY+LAJ/GwZ+O7CKX/Zf27GreCy3in+OANNlOHXXNUbLfFQc0/IEPuFQXHYI24yXMR+Zb2MM56MXLPAdUK1SFB0K3+yY0ZOwqzybdXFxp943SBKcj96wwDcJmaxvE9XNSKfekfs8jFSaG2KP5y77rkcfJ2rE0Zc5Ed/D6QDnIwks8NhN1r7M9E2bNk22t4DSBHAbYZNwXn83m/YjbSUcyC7gycENvDwM/DG3RVpadrbs3xQ7SXA+0sECD+/z5unUWUn1nycjV8Bk9EJuh5+95l9TPWlwPtLBAo+4k7WCRwiPYzFqiDNmZJ2e0RXORzpY4BF/QIUto8roS3wxo+7Mvio4H+lggUe8AXUoN6X6cRkC4oqZ8cKS6keNHc5HOljgEWdA8VG3pBBHzITtiJQ0OB/pYIFHfAE1P7Wu+lEZIuTHzKnEbvwFwflIBws84gmoUnFV9WMyhMiNmRJq1WTPLP3gfKSDBR7yA2q/BNN+Ql7MTMKK3hApUXA+0sECD7kBNT/F9UOSiJyYGUPDktDVxjA4H+lggYe8ZN3vM7EkQx0z1E0zTIbzkQ4WeNA01mi1pwcvqX4kRjJ0MTOG/03xrL0Vzkc6WOBBN2N4aOAiNjWvmc3QcadA97Nf9V/AxTnVT6AnnI90sMDvsGEBr+eB23vmIwVRX2YWHxTaW7Mx+4PtLafj0EvDTsehtEsBrHTqLA5kL+GV4boj6rwSEwjnIw0s8C7YO11YyhPAG3mn083LO/ZmHqhMOJ2pOFEZT2xwfBDB+dg5LPAMwzAJhQWeYRgmobDAMwzDJJT/A0Adrv0nAIIWAAAAAElFTkSuQmCC' ",
messageSends: [],
referencedClasses: []
}),
smalltalk.Logo);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "822px";
    return self;
},
args: [],
source: "x\x0a  ^'822px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Logo);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return "518px";
    return self;
},
args: [],
source: "y\x0a  ^'518px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Logo);



smalltalk.addClass('PipelineDesc', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["width", "450px"]);smalltalk.send($rec, "_css_put_", ["background-color", "pink"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(html, "_h2_", ["\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u6F14\u7B97\u5B50(|>)\u306FF#\u3067\u3088\u304F\u4F7F\u308F\u308C\u308B\u6F14\u7B97\u5B50"]);return smalltalk.send(html, "_h3_", ["Smalltalk\u3067\u3082\u610F\u5916\u306B\u4FBF\u5229"]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div css: 'width' put: '450px'; css: 'background-color' put: 'pink'; with: [\x0a\x09\x09html h2:'パイプライン演算子(|>)はF#でよく使われる演算子'.\x0a\x09\x09html h3: 'Smalltalkでも意外に便利'\x0a\x09]\x0a\x0a",
messageSends: ["css:put:", "with:", "h2:", "h3:", "div"],
referencedClasses: []
}),
smalltalk.PipelineDesc);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "551px";
    return self;
},
args: [],
source: "x\x0a  ^'551px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.PipelineDesc);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return "-230px";
    return self;
},
args: [],
source: "y\x0a  ^'-230px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.PipelineDesc);



smalltalk.addClass('RaphaelWidget', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
    var self = this;
    return 300;
    return self;
},
args: [],
source: "height\x0a\x09^ 300",
messageSends: [],
referencedClasses: []
}),
smalltalk.RaphaelWidget);

smalltalk.addMethod(
"_rawHtml",
smalltalk.method({
selector: "rawHtml",
category: 'accessing',
fn: function () {
    var self = this;
    return "";
    return self;
},
args: [],
source: "rawHtml\x0a\x09^''",
messageSends: [],
referencedClasses: []
}),
smalltalk.RaphaelWidget);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(self, "_renderRaphael_", [smalltalk.send(smalltalk.send(html, "_div", []), "_asJQuery", [])]);
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09self renderRaphael: (html div asJQuery) ",
messageSends: ["renderRaphael:", "asJQuery", "div"],
referencedClasses: []
}),
smalltalk.RaphaelWidget);

smalltalk.addMethod(
"_renderRaphael_",
smalltalk.method({
selector: "renderRaphael:",
category: 'rendering',
fn: function (jq) {
    var self = this;
    return self;
},
args: ["jq"],
source: "renderRaphael: jq",
messageSends: [],
referencedClasses: []
}),
smalltalk.RaphaelWidget);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
    var self = this;
    return 300;
    return self;
},
args: [],
source: "width\x0a\x09^ 300",
messageSends: [],
referencedClasses: []
}),
smalltalk.RaphaelWidget);



smalltalk.addClass('Dolphin', smalltalk.RaphaelWidget, ['body', 'left', 'right', 'eye', 'group'], 'DyNagoya');
smalltalk.Dolphin.comment="anim := Dolphin new rightHand collect: [ :each | (<Raphael.animation({path: each}, 12000, \x22elastic\x22)>)]\x0ax animate: (anim at: 2)"
smalltalk.addMethod(
"_attribute",
smalltalk.method({
selector: "attribute",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("stroke-linejoin", "__minus_gt", ["round"]), smalltalk.send("stroke", "__minus_gt", ["#18A8E7"]), smalltalk.send("stroke-linecap", "__minus_gt", ["round"]), smalltalk.send("stroke-miterlimit", "__minus_gt", [10]), smalltalk.send("stroke-width", "__minus_gt", [6]), smalltalk.send("fill", "__minus_gt", ["none"])]);
    return self;
},
args: [],
source: "attribute\x0a\x09^ #{\x0a\x09\x09'stroke-linejoin' -> 'round'.\x0a\x09\x09'stroke' -> '#18A8E7'. \x0a\x09\x09'stroke-linecap' -> 'round'.\x0a\x09\x09'stroke-miterlimit' ->10.\x0a\x09\x09'stroke-width' -> 6.\x0a\x09\x09'fill' -> 'none'\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_attributeFill",
smalltalk.method({
selector: "attributeFill",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("stroke", "__minus_gt", ["none"]), smalltalk.send("fill", "__minus_gt", ["#18A8E7"])]);
    return self;
},
args: [],
source: "attributeFill\x0a\x09^ #{\x0a\x09\x09'stroke' -> 'none'. \x0a\x09\x09'fill' -> '#18A8E7'\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_attributeLine",
smalltalk.method({
selector: "attributeLine",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("stroke-linejoin", "__minus_gt", ["round"]), smalltalk.send("stroke", "__minus_gt", ["#18A8E7"]), smalltalk.send("stroke-linecap", "__minus_gt", ["round"]), smalltalk.send("stroke-miterlimit", "__minus_gt", [10]), smalltalk.send("stroke-width", "__minus_gt", [6]), smalltalk.send("fill", "__minus_gt", ["none"])]);
    return self;
},
args: [],
source: "attributeLine\x0a\x09^ #{\x0a\x09\x09'stroke-linejoin' -> 'round'.\x0a\x09\x09'stroke' -> '#18A8E7'. \x0a\x09\x09'stroke-linecap' -> 'round'.\x0a\x09\x09'stroke-miterlimit' ->10.\x0a\x09\x09'stroke-width' -> 6.\x0a\x09\x09'fill' -> 'none'\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
    var self = this;
    return 800;
    return self;
},
args: [],
source: "height\x0a  ^800",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_renderRaphael_",
smalltalk.method({
selector: "renderRaphael:",
category: 'accessing',
fn: function (jq) {
    var self = this;
    var paper = nil;
    paper = Raphael(jq[0], this._width() + "px", this._height() + "px");
    self['@body'] = smalltalk.send(paper, "_path_", ["M265.875,60.562c4.945,0.915,9.002-1.543,13.111-3.589c6.877-3.423,13.809-7.102,21.409-8.062  c10.532-1.332,21.151-2.386,31.862-1.365c6.072,0.578,12.039-0.5,17.229-4.067c3.952-2.717,4.489-5.77,1.88-9.724  c-1.647-2.495-3.755-4.458-6.741-5.254c-7.648-2.042-15.043-4.982-22.873-6.39c-4.138-0.744-8.256-0.19-12.376,0.033  c-5.095,0.275-10.132,0.946-15.015,2.566c-0.852,0.283-1.789,0.044-2.639,0.757c-1.956,1.641-4.591,1.285-6.268,0.274  c-3.649-2.199-7.585-3.846-11.037-6.51c-5.219-4.027-11.682-5.616-17.898-7.666c-12.604-4.154-25.36-3.856-38.274-2.229  c-6.683,0.842-13.335,1.689-19.877,3.386c-13.55,3.514-26.072,9.438-38.214,16.204c-4.805,2.678-9.539,5.449-14.031,8.777  c-6.013,4.456-10.667,10.13-15.96,15.211c-7.019,6.735-12.078,15.186-18.617,22.271c-3.551,3.847-4.94,8.25-6.853,12.594  c-2.727,6.194-6.057,12.029-9.876,17.555c-3.282,4.747-5.514,9.999-8.243,15.012c-8.694,15.969-15.794,32.657-22.352,49.566  c-2.622,6.762-4.411,13.857-6.199,20.937c-3.108,12.306-4.779,24.914-8.157,37.148c-1.171,4.241-3.487,5.847-7.861,6.42  c-8.2,1.074-15.603,4.232-22.119,9.347c-2.858,2.242-5.862,4.321-8.268,7.104c-2.543,2.939-2.993,7.798-1.132,11.264  c3.708,6.907,9.411,10.221,17.264,10.151c5.749-0.05,11.5,0.178,17.249,0.354c4.16,0.127,7.261,3.152,9,8.611  c2.842,8.918,11.742,13.288,20.624,10.122c0.633-0.227,1.259-0.479,1.875-0.75c7.933-3.475,8.872-5.381,5.95-13.479  c-1.287-3.567-1.874-7.12-1.888-10.894c-0.01-2.719,0.505-5.205,2.35-7.09c4.48-4.577,6.834-10.464,10.026-15.822  c1.497-2.514,3.774-4.385,5.219-6.77c4.353-7.185,10.89-12.281,17.098-17.412c12.106-10.005,22.708-21.711,35.491-30.913  c8.67-6.24,17.112-12.817,26.288-18.313c2.6-1.557,4.93-3.611,6.55-5.803c3.22-4.353,6.796-5.028,11.417-3.252 M339.75,48c1.834,5.033-0.693,8.815-3.322,12.785c-4.779,7.216-12.437,8.928-19.948,10.756c-4.881,1.188-9.417,3.264-14.194,4.701  c-3.246,0.976-5.095,4.537-8.63,5.607c-2.407,0.729-4.481,2.499-6.789,3.632c-7.341,3.604-12.549,9.449-16.832,16.166  c-4.147,6.504-8.603,12.71-13.829,18.426c-2.882,3.151-5.65,5.812-9.732,7.644c-4.16,1.867-8.32,4.111-12.189,6.774  c-1.703,1.171-4.408,0.884-6.658,1.259"]);
    back = smalltalk.send(paper, "_path_", ["M133.125,38.625c-4.107-0.772-8.007,0.396-12.03,0.87c-6.17,0.728-12.092,2.66-18.338,3.004c-4.782,0.264-9.43,1.931-14.241,2.613  c-7.69,1.09-15.257,2.901-22.548,5.807c-2.819,1.123-5.457,2.479-7.809,4.251c-6.609,4.98-3.16,10.782,1.836,13.09  c3.7,1.71,7.493,2.532,11.626,2.707c8.816,0.374,17.598,1.063,25.926,4.674c3.07,1.33,6.395,2.127,9.328,3.858"]);
    self['@left'] = smalltalk.send(paper, "_path_", ["M268.875,118.125c7.638,6.705,15.657,13.134,16.703,24.373c0.261,2.799,0.424,5.576-0.593,8.246  c-1.228,3.224-3.181,3.883-6.357,2.25c-0.646-0.333-1.366-0.633-1.861-1.136c-8.311-8.448-17.668-15.913-24.392-25.858"]);
    self['@right'] = smalltalk.send(paper, "_path_", [smalltalk.send(smalltalk.send(self, "_rightHand", []), "_at_", [1])]);
    self['@eye'] = smalltalk.send(paper, "_path_", ["M232.625,38.239c-4.994-0.119-9.137-4.363-8.896-9.112c0.332-6.519,4.703-11.984,9.547-11.936  c4.507,0.044,8.937,5.938,8.812,11.724C241.979,34.055,237.609,38.358,232.625,38.239z"]);
    self['@group'] = smalltalk.send(paper, "_group", []);
    smalltalk.send(self['@group'], "_scale_", [1.8]);
    smalltalk.send([self['@body'], typeof back == "undefined" ? nil : back, self['@left'], self['@right']], "_do_", [function (thisisplaceholder1) {smalltalk.send(thisisplaceholder1, "_attr_", [smalltalk.send(self, "_attributeLine", [])]);return smalltalk.send(self['@group'], "_push_", [thisisplaceholder1]);}]);
    smalltalk.send([self['@eye']], "_do_", [function (thisisplaceholder1) {smalltalk.send(thisisplaceholder1, "_attr_", [smalltalk.send(self, "_attributeFill", [])]);return smalltalk.send(self['@group'], "_push_", [thisisplaceholder1]);}]);
    return self;
},
args: ["jq"],
source: "renderRaphael: jq\x0a  | paper |\x0a\x09paper := (< Raphael(jq[0], this._width() + 'px', this._height() + 'px') >).\x0a\x09body := paper path:'M265.875,60.562c4.945,0.915,9.002-1.543,13.111-3.589c6.877-3.423,13.809-7.102,21.409-8.062  c10.532-1.332,21.151-2.386,31.862-1.365c6.072,0.578,12.039-0.5,17.229-4.067c3.952-2.717,4.489-5.77,1.88-9.724  c-1.647-2.495-3.755-4.458-6.741-5.254c-7.648-2.042-15.043-4.982-22.873-6.39c-4.138-0.744-8.256-0.19-12.376,0.033  c-5.095,0.275-10.132,0.946-15.015,2.566c-0.852,0.283-1.789,0.044-2.639,0.757c-1.956,1.641-4.591,1.285-6.268,0.274  c-3.649-2.199-7.585-3.846-11.037-6.51c-5.219-4.027-11.682-5.616-17.898-7.666c-12.604-4.154-25.36-3.856-38.274-2.229  c-6.683,0.842-13.335,1.689-19.877,3.386c-13.55,3.514-26.072,9.438-38.214,16.204c-4.805,2.678-9.539,5.449-14.031,8.777  c-6.013,4.456-10.667,10.13-15.96,15.211c-7.019,6.735-12.078,15.186-18.617,22.271c-3.551,3.847-4.94,8.25-6.853,12.594  c-2.727,6.194-6.057,12.029-9.876,17.555c-3.282,4.747-5.514,9.999-8.243,15.012c-8.694,15.969-15.794,32.657-22.352,49.566  c-2.622,6.762-4.411,13.857-6.199,20.937c-3.108,12.306-4.779,24.914-8.157,37.148c-1.171,4.241-3.487,5.847-7.861,6.42  c-8.2,1.074-15.603,4.232-22.119,9.347c-2.858,2.242-5.862,4.321-8.268,7.104c-2.543,2.939-2.993,7.798-1.132,11.264  c3.708,6.907,9.411,10.221,17.264,10.151c5.749-0.05,11.5,0.178,17.249,0.354c4.16,0.127,7.261,3.152,9,8.611  c2.842,8.918,11.742,13.288,20.624,10.122c0.633-0.227,1.259-0.479,1.875-0.75c7.933-3.475,8.872-5.381,5.95-13.479  c-1.287-3.567-1.874-7.12-1.888-10.894c-0.01-2.719,0.505-5.205,2.35-7.09c4.48-4.577,6.834-10.464,10.026-15.822  c1.497-2.514,3.774-4.385,5.219-6.77c4.353-7.185,10.89-12.281,17.098-17.412c12.106-10.005,22.708-21.711,35.491-30.913  c8.67-6.24,17.112-12.817,26.288-18.313c2.6-1.557,4.93-3.611,6.55-5.803c3.22-4.353,6.796-5.028,11.417-3.252 M339.75,48c1.834,5.033-0.693,8.815-3.322,12.785c-4.779,7.216-12.437,8.928-19.948,10.756c-4.881,1.188-9.417,3.264-14.194,4.701  c-3.246,0.976-5.095,4.537-8.63,5.607c-2.407,0.729-4.481,2.499-6.789,3.632c-7.341,3.604-12.549,9.449-16.832,16.166  c-4.147,6.504-8.603,12.71-13.829,18.426c-2.882,3.151-5.65,5.812-9.732,7.644c-4.16,1.867-8.32,4.111-12.189,6.774  c-1.703,1.171-4.408,0.884-6.658,1.259'.\x0a\x09back := paper path: 'M133.125,38.625c-4.107-0.772-8.007,0.396-12.03,0.87c-6.17,0.728-12.092,2.66-18.338,3.004c-4.782,0.264-9.43,1.931-14.241,2.613  c-7.69,1.09-15.257,2.901-22.548,5.807c-2.819,1.123-5.457,2.479-7.809,4.251c-6.609,4.98-3.16,10.782,1.836,13.09  c3.7,1.71,7.493,2.532,11.626,2.707c8.816,0.374,17.598,1.063,25.926,4.674c3.07,1.33,6.395,2.127,9.328,3.858'.\x0a\x09left := paper path: 'M268.875,118.125c7.638,6.705,15.657,13.134,16.703,24.373c0.261,2.799,0.424,5.576-0.593,8.246  c-1.228,3.224-3.181,3.883-6.357,2.25c-0.646-0.333-1.366-0.633-1.861-1.136c-8.311-8.448-17.668-15.913-24.392-25.858'.\x0a\x09right := paper path: (self rightHand at: 1).\x0a\x09eye := paper path: 'M232.625,38.239c-4.994-0.119-9.137-4.363-8.896-9.112c0.332-6.519,4.703-11.984,9.547-11.936  c4.507,0.044,8.937,5.938,8.812,11.724C241.979,34.055,237.609,38.358,232.625,38.239z'.\x0a\x09group := paper group.\x0a\x09group scale: 1.8.\x0a\x09{ body. back. left. right } do: [ %1 attr: self attributeLine. group push: %1].\x0a\x09{ eye } do: [ %1 attr: self attributeFill. group push: %1]",
messageSends: ["path:", "at:", "rightHand", "group", "scale:", "do:", "attr:", "attributeLine", "push:", "attributeFill"],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_rightHand",
smalltalk.method({
selector: "rightHand",
category: 'accessing',
fn: function () {
    var self = this;
    return ["M223.125,118.125c0.417,5.931,2.029,11.581,3.531,17.307c0.658,2.505-0.927,5.636-1.144,8.564c-0.339,4.568-1.907,8.836-3.37,13.177 c-1.373,4.073-2.501,8.14-4.513,12.02c-1.344,2.593-2.869,4.886-5.043,6.636c-3.392,2.73-6.612,5.621-9.742,8.641 c-1.66,1.604-3.57,2.8-5.945,3.49c-4.725,1.371-5.946,0.653-6.434-4.205c-0.455-4.533,1.97-8.28,3.162-12.342 c0.366-1.247,0.838-2.443,1.034-3.781c0.474-3.223,1.014-6.338,2.457-9.441c2.855-6.14,4.861-12.554,6.037-19.391 c0.927-5.396,2.169-10.666,1.969-16.174", "M219.027,108.788c2.75,5.272,6.485,9.807,10.15,14.457c1.604,2.033,1.399,5.537,2.371,8.308c1.516,4.324,1.781,8.861,2.175,13.426 c0.368,4.283,0.958,8.463,0.664,12.822c-0.196,2.914-0.679,5.623-1.972,8.098c-2.021,3.857-3.817,7.795-5.481,11.812 c-0.881,2.133-2.154,3.992-4.056,5.574c-3.784,3.145-5.191,2.973-7.578-1.285c-2.229-3.975-1.502-8.377-2.03-12.576 c-0.163-1.291-0.208-2.576-0.563-3.881c-0.853-3.145-1.602-6.215-1.518-9.637c0.166-6.77-0.559-13.451-2.212-20.188 c-1.306-5.317-2.271-10.644-4.656-15.614"];
    return self;
},
args: [],
source: "rightHand\x0a\x09^ {\x0a'M223.125,118.125c0.417,5.931,2.029,11.581,3.531,17.307c0.658,2.505-0.927,5.636-1.144,8.564c-0.339,4.568-1.907,8.836-3.37,13.177 c-1.373,4.073-2.501,8.14-4.513,12.02c-1.344,2.593-2.869,4.886-5.043,6.636c-3.392,2.73-6.612,5.621-9.742,8.641 c-1.66,1.604-3.57,2.8-5.945,3.49c-4.725,1.371-5.946,0.653-6.434-4.205c-0.455-4.533,1.97-8.28,3.162-12.342 c0.366-1.247,0.838-2.443,1.034-3.781c0.474-3.223,1.014-6.338,2.457-9.441c2.855-6.14,4.861-12.554,6.037-19.391 c0.927-5.396,2.169-10.666,1.969-16.174'.\x0a'M219.027,108.788c2.75,5.272,6.485,9.807,10.15,14.457c1.604,2.033,1.399,5.537,2.371,8.308c1.516,4.324,1.781,8.861,2.175,13.426 c0.368,4.283,0.958,8.463,0.664,12.822c-0.196,2.914-0.679,5.623-1.972,8.098c-2.021,3.857-3.817,7.795-5.481,11.812 c-0.881,2.133-2.154,3.992-4.056,5.574c-3.784,3.145-5.191,2.973-7.578-1.285c-2.229-3.975-1.502-8.377-2.03-12.576 c-0.163-1.291-0.208-2.576-0.563-3.881c-0.853-3.145-1.602-6.215-1.518-9.637c0.166-6.77-0.559-13.451-2.212-20.188 c-1.306-5.317-2.271-10.644-4.656-15.614'\x0a}",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_rightHand2",
smalltalk.method({
selector: "rightHand2",
category: 'accessing',
fn: function () {
    var self = this;
    return "M219.027,108.788c2.75,5.272,6.485,9.807,10.15,14.457c1.604,2.033,1.399,5.537,2.371,8.308c1.516,4.324,1.781,8.861,2.175,13.426 c0.368,4.283,0.958,8.463,0.664,12.822c-0.196,2.914-0.679,5.623-1.972,8.098c-2.021,3.857-3.817,7.795-5.481,11.812 c-0.881,2.133-2.154,3.992-4.056,5.574c-3.784,3.145-5.191,2.973-7.578-1.285c-2.229-3.975-1.502-8.377-2.03-12.576 c-0.163-1.291-0.208-2.576-0.563-3.881c-0.853-3.145-1.602-6.215-1.518-9.637c0.166-6.77-0.559-13.451-2.212-20.188 c-1.306-5.317-2.271-10.644-4.656-15.614";
    return self;
},
args: [],
source: "rightHand2\x0a\x09^ 'M219.027,108.788c2.75,5.272,6.485,9.807,10.15,14.457c1.604,2.033,1.399,5.537,2.371,8.308c1.516,4.324,1.781,8.861,2.175,13.426 c0.368,4.283,0.958,8.463,0.664,12.822c-0.196,2.914-0.679,5.623-1.972,8.098c-2.021,3.857-3.817,7.795-5.481,11.812 c-0.881,2.133-2.154,3.992-4.056,5.574c-3.784,3.145-5.191,2.973-7.578-1.285c-2.229-3.975-1.502-8.377-2.03-12.576 c-0.163-1.291-0.208-2.576-0.563-3.881c-0.853-3.145-1.602-6.215-1.518-9.637c0.166-6.77-0.559-13.451-2.212-20.188 c-1.306-5.317-2.271-10.644-4.656-15.614'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_style",
smalltalk.method({
selector: "style",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_style", [], smalltalk.Dolphin.superclass || nil), "__comma", ["width: 376px;"]);
    return self;
},
args: [],
source: "style\x0a\x09^ super style,\x09'width: 376px;'",
messageSends: [",", "style"],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
    var self = this;
    return 800;
    return self;
},
args: [],
source: "width\x0a  ^800",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "552px";
    return self;
},
args: [],
source: "x\x0a  ^'552px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return "72px";
    return self;
},
args: [],
source: "y\x0a  ^'72px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dolphin);


smalltalk.Dolphin.klass.iVarNames = ['s'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = self['@s']) == nil || $receiver == undefined ? function () {return self['@s'] = smalltalk.send(self, "_new", [], smalltalk.Dolphin.klass.superclass || nil);}() : $receiver;
    return self['@s'];
    return self;
},
args: [],
source: "new\x0a\x09s ifNil: [ s := super new ].\x0a\x09^ s",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.Dolphin.klass);

smalltalk.addMethod(
"_tweet_",
smalltalk.method({
selector: "tweet:",
category: 'not yet classified',
fn: function (msg) {
    var self = this;
    return smalltalk.send(smalltalk.Twitter || Twitter, "_tweet_", [msg]);
    return self;
},
args: ["msg"],
source: "tweet: msg\x0a\x09^Twitter tweet: msg",
messageSends: ["tweet:"],
referencedClasses: ["Twitter"]
}),
smalltalk.Dolphin.klass);


smalltalk.addClass('RawWidget', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_rawHtml",
smalltalk.method({
selector: "rawHtml",
category: 'accessing',
fn: function () {
    var self = this;
    return "";
    return self;
},
args: [],
source: "rawHtml\x0a\x09^''",
messageSends: [],
referencedClasses: []
}),
smalltalk.RawWidget);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(html, "_div", []), "_asJQuery", []), "_html_", [smalltalk.send(self, "_rawHtml", [])]);
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div asJQuery html: self rawHtml",
messageSends: ["html:", "asJQuery", "div", "rawHtml"],
referencedClasses: []
}),
smalltalk.RawWidget);



smalltalk.addClass('EntryPoint', smalltalk.Object, [], 'DyNagoya');
smalltalk.EntryPoint.comment="EntryPoint makeWorkspaceNormalTheme "

smalltalk.addMethod(
"_bottomPosition",
smalltalk.method({
selector: "bottomPosition",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["600px"]);smalltalk.send($rec, "_height_", [200]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.98 : smalltalk.send($receiver, "__star", [0.98])).klass === smalltalk.Number ? $receiver - 600 : smalltalk.send($receiver, "__minus", [600])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.95 : smalltalk.send($receiver, "__star", [0.95])).klass === smalltalk.Number ? $receiver - 200 : smalltalk.send($receiver, "__minus", [200])]), "__comma", ["px"])]);}(thisisplaceholder1);};
    return self;
},
args: [],
source: "bottomPosition\x0a  ^ [ %1\x0a\x09width: '600px';\x0a\x09height: 200;\x0a\x09x: '', (window innerWidth * 0.98 - 600), 'px';\x0a\x09y: '', (window innerHeight * 0.95 - 200), 'px'\x0a  ]",
messageSends: ["width:", "height:", "x:", ",", "-", "*", "innerWidth", "y:", "innerHeight"],
referencedClasses: []
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_leftPosition",
smalltalk.method({
selector: "leftPosition",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["300px"]);smalltalk.send($rec, "_height_", ["300px"]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 300 : smalltalk.send($receiver, "__minus", [300])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.1 : smalltalk.send($receiver, "__star", [0.1])]), "__comma", ["px"])]);}(thisisplaceholder1);};
    return self;
},
args: [],
source: "leftPosition\x0a  ^ [ %1\x0a\x09width: '300px';\x0a\x09height: '300px';\x0a\x09x: '', (window innerWidth * 0.9 - 300), 'px';\x0a\x09y: '', (window innerHeight * 0.1), 'px'\x0a  ]",
messageSends: ["width:", "height:", "x:", ",", "-", "*", "innerWidth", "y:", "innerHeight"],
referencedClasses: []
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_messages",
smalltalk.method({
selector: "messages",
category: 'not yet classified',
fn: function () {
    var self = this;
    return ["Type one of below lines on workspace, then click \"DoIt\"", "    AboutDyNagoya show         \"to see what DyNagoya is\"", "    Links show                           \"to see Links about our interest\"", "    Browser open                       \"to open default class browser\"", "    Page browser onDialog          \"to open browser on Dialog\"", "    Icon browser onPage open: Logo method: 'x'", "     JSViewer onDialog               \"to show js code will be emitted\"", "     ParserEditor onDialog          \"to modify parser\""];
    return self;
},
args: [],
source: "messages\x0a\x09^{\x0a\x09 'Type one of below lines on workspace, then click \x22DoIt\x22'.\x0a\x09 '    AboutDyNagoya show         \x22to see what DyNagoya is\x22'.\x0a\x09 '    Links show                           \x22to see Links about our interest\x22'.\x0a\x09 '    Browser open                       \x22to open default class browser\x22'.\x0a\x09'    Page browser onDialog          \x22to open browser on Dialog\x22'.\x0a\x09 '    Icon browser onPage open: Logo method: ''x'''.\x0a\x09'     JSViewer onDialog               \x22to show js code will be emitted\x22'.\x0a\x09'     ParserEditor onDialog          \x22to modify parser\x22'\x0a\x09}\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_positionY",
smalltalk.method({
selector: "positionY",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 200 : smalltalk.send($receiver, "__minus", [200])]), "__comma", ["px"]);
    return self;
},
args: [],
source: "positionY\x0a  ^ '', (window innerHeight * 0.9 - 200), 'px'",
messageSends: [",", "-", "*", "innerHeight"],
referencedClasses: []
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_screenPreparation",
smalltalk.method({
selector: "screenPreparation",
category: 'not yet classified',
fn: function () {
    var self = this;
    var page = nil;
    page = smalltalk.send(smalltalk.send(self, "_startPage", []), "_new", []);
    smalltalk.send(function () {smalltalk.send(smalltalk.send("#screen", "_asJQuery", []), "_remove", []);smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);return smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [page]);}, "_valueWithTimeout_", [2000]);
    return self;
},
args: [],
source: "screenPreparation\x0a\x09| page |\x0a\x09page := (self startPage) new.\x0a\x09[\x0a\x09  '#screen' asJQuery remove.\x0a\x09  Screen new appendToJQuery: ('body' asJQuery).\x0a\x09  Screen new flip: page\x0a\x09] valueWithTimeout: 2000\x0a",
messageSends: ["new", "startPage", "valueWithTimeout:", "remove", "asJQuery", "appendToJQuery:", "flip:"],
referencedClasses: ["Screen"]
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_showMessage",
smalltalk.method({
selector: "showMessage",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_messages", []), "_do_", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_show_", [thisisplaceholder1]);return smalltalk.send($rec, "_cr", []);}(smalltalk.Transcript || Transcript);}]);
    return self;
},
args: [],
source: "showMessage\x0a\x09self messages do: [\x0a\x09\x09Transcript show: %1; cr\x0a\x09]\x0a",
messageSends: ["do:", "messages", "show:", "cr"],
referencedClasses: ["Transcript"]
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'not yet classified',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_bottomPosition", [])]);smalltalk.send($rec, "_open", []);return smalltalk.send($rec, "_big", []);}(smalltalk.send(smalltalk.WorkspaceDialog || WorkspaceDialog, "_new", [])));
    smalltalk.send(smalltalk.send(smalltalk.TranscriptDialog || TranscriptDialog, "_new", []), "_|_gt", [smalltalk.send(self, "_topPosition", [])]);
    smalltalk.send(self, "_screenPreparation", []);
    smalltalk.send(smalltalk.LoginPanel || LoginPanel, "_show", []);
    return self;
},
args: [],
source: "start\x0a  WorkspaceDialog new  |> self bottomPosition; open; big.\x0a  TranscriptDialog new |> self topPosition \x22; open\x22.\x0a\x0a   self screenPreparation.\x0a  LoginPanel show.\x0a\x22  self showMessage.\x22",
messageSends: ["|>", "bottomPosition", "open", "big", "new", "topPosition", "screenPreparation", "show"],
referencedClasses: ["WorkspaceDialog", "TranscriptDialog", "LoginPanel"]
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_startPage",
smalltalk.method({
selector: "startPage",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $early = {};
    try {
        var name = nil;
        name = smalltalk.send(smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_location", []), "_hash", []), "_allButFirst", []);
        ($receiver = smalltalk.send(name, "_isEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [smalltalk.TopPage || TopPage];}();}() : function () {return function () {throw $early = [smalltalk.send(typeof smalltalk == "undefined" ? nil : smalltalk, "_at_", [name])];}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return function () {throw $early = [smalltalk.TopPage || TopPage];}();}, function () {return function () {throw $early = [smalltalk.send(typeof smalltalk == "undefined" ? nil : smalltalk, "_at_", [name])];}();}]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: [],
source: "startPage\x0a\x09| name |\x0a\x09name := window location hash allButFirst.\x0a\x09name isEmpty \x0a\x09\x09ifTrue: [ ^ TopPage ]\x0a\x09\x09ifFalse: [ ^ smalltalk at: name ]",
messageSends: ["allButFirst", "hash", "location", "ifTrue:ifFalse:", "isEmpty", "at:"],
referencedClasses: ["TopPage"]
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_topPosition",
smalltalk.method({
selector: "topPosition",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["350px"]);smalltalk.send($rec, "_height_", [200]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.98 : smalltalk.send($receiver, "__star", [0.98])).klass === smalltalk.Number ? $receiver - 350 : smalltalk.send($receiver, "__minus", [350])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.25 : smalltalk.send($receiver, "__star", [0.25])]), "__comma", ["px"])]);}(thisisplaceholder1);};
    return self;
},
args: [],
source: "topPosition\x0a  ^ [ %1\x0a\x09width: '350px';\x0a\x09height: 200;\x0a\x09x: '', (window innerWidth * 0.98 - 350), 'px';\x0a\x09y: '', (window innerHeight * 0.25), 'px'\x0a  ]",
messageSends: ["width:", "height:", "x:", ",", "-", "*", "innerWidth", "y:", "innerHeight"],
referencedClasses: []
}),
smalltalk.EntryPoint.klass);


smalltalk.addClass('Event', smalltalk.Widget, ['title', 'date', 'start', 'end', 'place', 'detail', 'fixed', 'introduction'], 'DyNagoya');
smalltalk.Event.comment="\x0aEvent browser onPage; openClassMethod: 'kctnagoya'; openClassMethod: 'latest'.\x0aEvent latest addToDSTokai.\x0aEvent latest tweet\x0a\x0a"
smalltalk.addMethod(
"_addToCalendar",
smalltalk.method({
selector: "addToCalendar",
category: 'google calendar',
fn: function () {
    var self = this;
    smalltalk.send(typeof window == "undefined" ? nil : window, "_open_target_", [smalltalk.send(self, "_gcalUrl", []), "_blank"]);
    return self;
},
args: [],
source: "addToCalendar\x0a  window open: (self gcalUrl) target: '_blank'",
messageSends: ["open:target:", "gcalUrl"],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_addToDSTokai",
smalltalk.method({
selector: "addToDSTokai",
category: 'google calendar',
fn: function () {
    var self = this;
    smalltalk.send(typeof window == "undefined" ? nil : window, "_open_target_", [smalltalk.send(self, "_gcalUrl_description_", [smalltalk.send(self, "_dstokaiId", []), smalltalk.send(self['@introduction'], "__comma", [smalltalk.send(self, "_description", [])])]), "_blank"]);
    return self;
},
args: [],
source: "addToDSTokai\x0a  window \x0a\x09open: (self \x0a\x09\x09gcalUrl: self dstokaiId \x0a\x09\x09description: (introduction, self description)) \x0a\x09target: '_blank'",
messageSends: ["open:target:", "gcalUrl:description:", "dstokaiId", ",", "description"],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_cancel",
smalltalk.method({
selector: "cancel",
category: 'participation',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.Login || Login, "_user", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.Window || Window, "_alert_", [unescape("You%20need%20to%20log%20in%21")]);}() : function () {return smalltalk.send(smalltalk.Participation || Participation, "_event_user_delete_", [self['@title'], smalltalk.send(smalltalk.Login || Login, "_user", []), true]);}();
    return self;
},
args: [],
source: "cancel\x0a\x09Login user \x0a\x09\x09ifNotNil: [ Participation event: title user: Login user delete: true ]\x0a\x09\x09ifNil: [ Window alert: 'You need to log in!' ]",
messageSends: ["ifNotNil:ifNil:", "user", "alert:", "event:user:delete:"],
referencedClasses: ["Login", "Window", "Participation"]
}),
smalltalk.Event);

smalltalk.addMethod(
"_date_",
smalltalk.method({
selector: "date:",
category: 'accessing',
fn: function (aDate) {
    var self = this;
    self['@date'] = aDate;
    return self;
},
args: ["aDate"],
source: "date: aDate\x0a  date := aDate",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_description",
smalltalk.method({
selector: "description",
category: 'google calendar',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(unescape("%3Cul%3E"), "__comma", [smalltalk.send(smalltalk.send(self['@detail'], "_collect_", [function (each) {return smalltalk.send(smalltalk.send(unescape("%3Cli%3E"), "__comma", [each]), "__comma", [unescape("%3C/li%3E")]);}]), "_join_", [""])]), "__comma", [unescape("%3C/ul%3E")]);
    return self;
},
args: [],
source: "description\x0a  ^ '<ul>', (\x0a\x09(detail collect: [:each | '<li>', each, '</li>' ]) join: ''\x0a  ), '</ul>'",
messageSends: [",", "join:", "collect:"],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_descriptionForDSTokai",
smalltalk.method({
selector: "descriptionForDSTokai",
category: 'google calendar',
fn: function () {
    var self = this;
    return unescape("%u52D5%u7684%u8A00%u8A9E%u3001%u7279%u306BSmalltalk%u3092%u4E2D%u5FC3%u3068%u3057%u305F%u96C6%u307E%u308A%3Ca%20href%3D%22http%3A//dynagoya.info/index.html%22%20target%3D%22_blank%22%3E%u30DA%u30FC%u30B8%3C/a%3E");
    return self;
},
args: [],
source: "descriptionForDSTokai\x0a  ^ '動的言語、特にSmalltalkを中心とした集まり<a href=\x22http://dynagoya.info/index.html\x22 target=\x22_blank\x22>ページ</a>'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_detail_",
smalltalk.method({
selector: "detail:",
category: 'accessing',
fn: function (str) {
    var self = this;
    self['@detail'] = str;
    return self;
},
args: ["str"],
source: "detail: str\x0a  detail := str",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_dstokaiId",
smalltalk.method({
selector: "dstokaiId",
category: 'google calendar',
fn: function () {
    var self = this;
    return unescape("6ef63uicdv7l17h035m1grg7fs@group.calendar.google.com");
    return self;
},
args: [],
source: "dstokaiId\x0a\x09^ '6ef63uicdv7l17h035m1grg7fs@group.calendar.google.com'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_end_",
smalltalk.method({
selector: "end:",
category: 'accessing',
fn: function (aTime) {
    var self = this;
    self['@end'] = aTime;
    return self;
},
args: ["aTime"],
source: "end: aTime\x0a  end := aTime",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_fixed",
smalltalk.method({
selector: "fixed",
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@fixed']) == nil || $receiver == undefined ? function () {return true;}() : $receiver;
    return self;
},
args: [],
source: "fixed\x0a  ^ fixed ifNil: [ true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_fixed_",
smalltalk.method({
selector: "fixed:",
category: 'accessing',
fn: function (aBool) {
    var self = this;
    self['@fixed'] = aBool;
    return self;
},
args: ["aBool"],
source: "fixed: aBool\x0a  fixed := aBool",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_format_",
smalltalk.method({
selector: "format:",
category: 'google calendar',
fn: function (aTime) {
    var self = this;
    var d = nil;
    var formatted = nil;
    d = smalltalk.send(smalltalk.Date || Date, "_fromString_", [smalltalk.send(smalltalk.send(self['@date'], "__comma", [" "]), "__comma", [aTime])]);
    formatted = moment(d).add("minutes", moment(d).zone()).format("YYYYMMDDTHHmmss");
    return smalltalk.send(formatted, "__comma", ["Z"]);
    return self;
},
args: ["aTime"],
source: "format: aTime\x0a  | d formatted |\x0a  d := Date fromString: (date, ' ', aTime).\x0a  formatted := (< moment(d).add('minutes', moment(d).zone()).format('YYYYMMDDTHHmmss') >).\x0a  ^ formatted, 'Z'",
messageSends: ["fromString:", ","],
referencedClasses: ["Date"]
}),
smalltalk.Event);

smalltalk.addMethod(
"_formatPeriod",
smalltalk.method({
selector: "formatPeriod",
category: 'Twitter',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(moment(this['@date']).format("YYYY/MM/DD(ddd) "), "__comma", [self['@start']]), "__comma", [unescape("%u301C")]), "__comma", [self['@end']]);
    return self;
},
args: [],
source: "formatPeriod\x0a  ^ (< moment(this['@date']).format(\x22YYYY/MM/DD(ddd) \x22) >), start, '〜', end",
messageSends: [","],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_gcalParams_desc_",
smalltalk.method({
selector: "gcalParams:desc:",
category: 'google calendar',
fn: function (src, aStr) {
    var self = this;
    var base = nil;
    base = [unescape("ctz%3DAsia/Tokyo"), smalltalk.send(unescape("ctext%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [self['@title']])]), smalltalk.send(unescape("details%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [aStr])]), smalltalk.send(unescape("location%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [smalltalk.send(self['@place'], "_gCalString", [])])]), smalltalk.send(unescape("dates%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_format_", [self['@start']]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_format_", [self['@end']])])])])];
    ($receiver = src) != nil && $receiver != undefined ? function () {return smalltalk.send(base, "_add_", [smalltalk.send(unescape("src%3D"), "__comma", [src])]);}() : nil;
    return base;
    return self;
},
args: ["src", "aStr"],
source: "gcalParams: src desc: aStr\x0a\x09| base |\x0a\x09base := {\x0a\x09\x09'ctz=Asia/Tokyo'.\x0a\x09\x09'ctext=', (Util encode: title).\x0a\x09\x09'details=', (Util encode: aStr).\x0a\x09\x09'location=', (Util encode: place gCalString).\x0a\x09\x09'dates=', (Util encode: ((self format: start) , '/', (self format: end)))\x0a\x09}.\x0a\x0a\x09src ifNotNil: [ base add: 'src=', src ].\x0a\x09^ base\x0a",
messageSends: [",", "encode:", "gCalString", "format:", "ifNotNil:", "add:"],
referencedClasses: ["Util"]
}),
smalltalk.Event);

smalltalk.addMethod(
"_gcalUrl",
smalltalk.method({
selector: "gcalUrl",
category: 'google calendar',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_gcalUrl_description_", [nil, smalltalk.send(self, "_description", [])]);
    return self;
},
args: [],
source: "gcalUrl\x0a\x09^ self gcalUrl: nil description: self description",
messageSends: ["gcalUrl:description:", "description"],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_gcalUrl_description_",
smalltalk.method({
selector: "gcalUrl:description:",
category: 'google calendar',
fn: function (src, aStr) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_gcalParams_desc_", [src, aStr]), "_inject_into_", [unescape("http%3A//www.google.com/calendar/event%3Faction%3DTEMPLATE"), function (acc, x) {return smalltalk.send(smalltalk.send(acc, "__comma", [unescape("%26")]), "__comma", [x]);}]);
    return self;
},
args: ["src", "aStr"],
source: "gcalUrl: src description: aStr\x0a\x09^  (self gcalParams: src desc: aStr)\x0a\x09\x09inject: 'http://www.google.com/calendar/event?action=TEMPLATE'\x0a\x09\x09into: [ :acc :x | acc, '&', x ]",
messageSends: ["inject:into:", "gcalParams:desc:", ","],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_ifJS",
smalltalk.method({
selector: "ifJS",
category: 'google calendar',
fn: function () {
    var self = this;
    return "\n\tvar ret = new this();\n\tret.title(\"DyNagoya MTG \uFF0309\");\n\tret.date(\"2012/10/20\");\n\tret.start(\"18:00:00\");\n\tret.end(\"20:00:00\");\n\tret.place(Mattariya);\n\tret.detail( [\n\t\t\t\"OMeta\u3092\u3044\u3058\u308B\",\n\t\t\t\"Mist\u3092\u3044\u3058\u305F\u3044\",\n\t\t\t\"CPS\u5909\u63DB\u796D\u308A?\"\n\t\t]);\n\treturn ret;\n";
    return self;
},
args: [],
source: "ifJS\x0a  ^ '\x0a\x09var ret = new this();\x0a\x09ret.title(\x22DyNagoya MTG ＃09\x22);\x0a\x09ret.date(\x222012/10/20\x22);\x0a\x09ret.start(\x2218:00:00\x22);\x0a\x09ret.end(\x2220:00:00\x22);\x0a\x09ret.place(Mattariya);\x0a\x09ret.detail( [\x0a\x09\x09\x09\x22OMetaをいじる\x22,\x0a\x09\x09\x09\x22Mistをいじたい\x22,\x0a\x09\x09\x09\x22CPS変換祭り?\x22\x0a\x09\x09]);\x0a\x09return ret;\x0a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_introduction_",
smalltalk.method({
selector: "introduction:",
category: 'google calendar',
fn: function (aStr) {
    var self = this;
    self['@introduction'] = smalltalk.send(self, "_perform_", [smalltalk.send("introductionFor", "__comma", [aStr])]);
    return self;
},
args: ["aStr"],
source: "introduction: aStr\x0a  introduction := (self perform: 'introductionFor', aStr)",
messageSends: ["perform:", ","],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_introductionForDyNagoya",
smalltalk.method({
selector: "introductionForDyNagoya",
category: 'google calendar',
fn: function () {
    var self = this;
    return "\u52D5\u7684\u8A00\u8A9E\u3001\u7279\u306BSmalltalk\u306E\u96C6\u307E\u308A\u3002<a href=\"http://dynagoya.info/index.html\" target=\"_blank\">\u30DA\u30FC\u30B8</a>";
    return self;
},
args: [],
source: "introductionForDyNagoya\x0a  ^ '動的言語、特にSmalltalkの集まり。<a href=\x22http://dynagoya.info/index.html\x22 target=\x22_blank\x22>ページ</a>'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_introductionForKCTNagoya",
smalltalk.method({
selector: "introductionForKCTNagoya",
category: 'google calendar',
fn: function () {
    var self = this;
    return "\u570F\u8AD6\u3092\u52C9\u5F37\u3057\u307E\u3057\u3087\u3046\u3002<a href=\"http://proofcafe.org/instiki/kctnagoya/show/HomePage\" target=\"_blank\">\u30DA\u30FC\u30B8</a>";
    return self;
},
args: [],
source: "introductionForKCTNagoya\x0a  ^ '圏論を勉強しましょう。<a href=\x22http://proofcafe.org/instiki/kctnagoya/show/HomePage\x22 target=\x22_blank\x22>ページ</a>'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_join",
smalltalk.method({
selector: "join",
category: 'participation',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.Login || Login, "_user", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.Window || Window, "_alert_", [unescape("You%20need%20to%20log%20in%21")]);}() : function () {return smalltalk.send(smalltalk.Participation || Participation, "_event_user_", [self['@title'], smalltalk.send(smalltalk.Login || Login, "_user", [])]);}();
    return self;
},
args: [],
source: "join\x0a\x09Login user \x0a\x09\x09ifNotNil: [ Participation event: title user: Login user ]\x0a\x09\x09ifNil: [ Window alert: 'You need to log in!' ]",
messageSends: ["ifNotNil:ifNil:", "user", "alert:", "event:user:"],
referencedClasses: ["Login", "Window", "Participation"]
}),
smalltalk.Event);

smalltalk.addMethod(
"_list_",
smalltalk.method({
selector: "list:",
category: 'participation',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(smalltalk.Participation || Participation, "_list_callback_", [self['@title'], aBlock]);
    return self;
},
args: ["aBlock"],
source: "list: aBlock\x0a\x09Participation list: title callback: aBlock",
messageSends: ["list:callback:"],
referencedClasses: ["Participation"]
}),
smalltalk.Event);

smalltalk.addMethod(
"_listDo_",
smalltalk.method({
selector: "listDo:",
category: 'participation',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self, "_list_", [function (list) {return smalltalk.send(list, "_do_", [aBlock]);}]);
    return self;
},
args: ["aBlock"],
source: "listDo: aBlock\x0a\x09self list: [ :list | list do: aBlock ]",
messageSends: ["list:", "do:"],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_place_",
smalltalk.method({
selector: "place:",
category: 'accessing',
fn: function (aPlaceClass) {
    var self = this;
    self['@place'] = smalltalk.send(aPlaceClass, "_new", []);
    return self;
},
args: ["aPlaceClass"],
source: "place: aPlaceClass\x0a  place := aPlaceClass new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", [self['@title']]);
    smalltalk.send(html, "_h2_", [smalltalk.send(smalltalk.send("\u65E5\u6642\uFF1A", "__comma", [smalltalk.send(self, "_formatPeriod", [])]), "__comma", [($receiver = smalltalk.send(self, "_fixed", [])).klass === smalltalk.Boolean ? $receiver ? function () {return "";}() : function () {return "?";}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return "";}, function () {return "?";}])])]);
    smalltalk.send(self['@place'], "_renderOn_", [html]);
    smalltalk.send(html, "_h2_", ["\u5185\u5BB9\uFF1A"]);
    smalltalk.send(smalltalk.send(html, "_h3", []), "_with_", [function ($rec) {smalltalk.send($rec, "_style_", ["margin-left: 30px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self['@detail'], "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [each]);}]);}]);}(smalltalk.send(html, "_div", []))]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html h1: title.\x0a\x09html h2: '日時：', self formatPeriod, (self fixed ifTrue: [''] ifFalse: [ '?' ]).\x0a\x09place renderOn: html.\x0a\x09html h2: '内容：'.\x0a\x09html h3 with: (html div style: 'margin-left: 30px'; with:[\x0a\x09\x09detail do: [ :each | html div with: each ].\x0a\x09])",
messageSends: ["h1:", "h2:", ",", "formatPeriod", "ifTrue:ifFalse:", "fixed", "renderOn:", "with:", "h3", "style:", "do:", "div"],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
category: 'accessing',
fn: function (aTime) {
    var self = this;
    self['@start'] = aTime;
    return self;
},
args: ["aTime"],
source: "start: aTime\x0a  start := aTime",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (str) {
    var self = this;
    self['@title'] = str;
    return self;
},
args: ["str"],
source: "title: str\x0a  title := str",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event);

smalltalk.addMethod(
"_tweet",
smalltalk.method({
selector: "tweet",
category: 'Twitter',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.Dolphin || Dolphin, "_tweet_", [smalltalk.send(self, "_tweetMessage", [])]);
    return self;
},
args: [],
source: "tweet\x0a\x09^ Dolphin tweet: self tweetMessage",
messageSends: ["tweet:", "tweetMessage"],
referencedClasses: ["Dolphin"]
}),
smalltalk.Event);

smalltalk.addMethod(
"_tweetMessage",
smalltalk.method({
selector: "tweetMessage",
category: 'Twitter',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("\u6B21\u56DE", "__comma", [self['@title']]), "__comma", ["\u306F"]), "__comma", [smalltalk.send(self, "_formatPeriod", [])]), "__comma", [" \u5834\u6240:"]), "__comma", [smalltalk.send(self['@place'], "_name", [])]), "__comma", [" \u3067\u958B\u50AC\u3057\u307E\u3059\u3002\u8A73\u7D30\u306F\u3053\u3061\u3089 \u2192 http://dynagoya.info/"]);
    return self;
},
args: [],
source: "tweetMessage\x0a\x09^ '次回',\x0a\x09title, 'は',\x0a\x09(self formatPeriod),\x0a\x09' 場所:', (place name),\x0a\x09' で開催します。詳細はこちら → http://dynagoya.info/'",
messageSends: [",", "formatPeriod", "name"],
referencedClasses: []
}),
smalltalk.Event);


smalltalk.addMethod(
"_Events",
smalltalk.method({
selector: "Events",
category: 'events',
fn: function () {
    if (typeof Events === "undefined" || Events == null) {
        Events = objectThatDelegatesTo(OMeta, {date: function () {var $elf = this, _fromIdx = this.input.idx;return this._consumedBy(function () {return function () {this._apply("digit");this._apply("digit");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", "/");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", "/");this._apply("digit");return this._apply("digit");}.call(this);});}, time: function () {var $elf = this, _fromIdx = this.input.idx;return this._consumedBy(function () {return function () {this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", ":");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", ":");this._apply("digit");return this._apply("digit");}.call(this);});}, fromTo: function () {var $elf = this, _fromIdx = this.input.idx, from, to, body;return function () {from = this._apply("anything");to = this._apply("anything");this._applyWithArgs("seq", from);body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._applyWithArgs("seq", to);});return this._apply("char");}.call(this);});});this._applyWithArgs("seq", to);return body;}.call(this);}, eol: function () {var $elf = this, _fromIdx = this.input.idx, body;return function () {body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._apply("cr");});return this._apply("char");}.call(this);});});this._or(function () {return this._apply("cr");}, function () {return this._apply("empty");});return body;}.call(this);}, cr: function () {var $elf = this, _fromIdx = this.input.idx, r;return function () {r = this._apply("char");return this._pred(r.charCodeAt(0) == 10);}.call(this);}, dynagoya: function () {var $elf = this, _fromIdx = this.input.idx, m;return function () {m = this._apply("meeting");return m._introduction_("DyNagoya");}.call(this);}, kctnagoya: function () {var $elf = this, _fromIdx = this.input.idx, m;return function () {m = this._apply("meeting");return m._introduction_("KCTNagoya");}.call(this);}, meeting: function () {var $elf = this, _fromIdx = this.input.idx, title, date, from, to, place, todo;return function () {title = this._applyWithArgs("fromTo", "", "\u306F");this._apply("spaces");date = this._apply("date");this._applyWithArgs("exactly", "\u306E");from = this._apply("time");this._applyWithArgs("exactly", "\u301C");to = this._apply("time");this._applyWithArgs("exactly", "\u306B");this._apply("spaces");place = this._consumedBy(function () {return this._many1(function () {return this._apply("letter");});});this._apply("spaces");this._applyWithArgs("exactly", "\u3067");this._apply("spaces");todo = this._many1(function () {return function () {this._apply("spaces");this._applyWithArgs("exactly", "-");this._apply("spaces");return this._apply("eol");}.call(this);});return smalltalk.Event._new()._title_(title)._date_(date)._start_(from)._end_(to)._place_(smalltalk[place])._detail_(todo);}.call(this);}});
    }
    return Events;
},
args: [],
source: "ometa Events  {\x0a  date = < digit digit digit digit '/' digit digit '/' digit digit > ,\x0a  time = < digit digit ':' digit digit ':' digit digit >,\x0a  fromTo :from :to = seq(from) <( ~seq(to) char )*>:body seq(to) -> body,\x0a  eol = <( ~cr char )*>:body (cr | empty) -> body,\x0a  cr = char:r ?{r.charCodeAt(0) == 10},\x0a  dynagoya = meeting: m -> { m._introduction_(\x22DyNagoya\x22) },\x0a  kctnagoya = meeting: m -> { m._introduction_(\x22KCTNagoya\x22) },\x0a  meeting = \x0a\x09fromTo('', 'は'): title spaces \x0a\x09date:date 'の' time:from '〜' time:to 'に' spaces\x0a\x09<letter+>:place  spaces 'で' spaces\x0a\x09( spaces '-' spaces eol)+:todo -> (\x0a\x09\x09smalltalk.Event._new()._title_(title)\x0a\x09\x09._date_(date)\x0a\x09\x09._start_(from)._end_(to)\x0a\x09\x09._place_(smalltalk[place])\x0a\x09\x09._detail_(todo) )\x0a}",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_jointStStudy02",
smalltalk.method({
selector: "jointStStudy02",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", ["\u5408\u540CSmalltalk\u52C9\u5F37\u4F1A@\u540D\u53E4\u5C4B"]);smalltalk.send($rec, "_date_", ["2012/09/29"]);smalltalk.send($rec, "_start_", ["13:30:00"]);smalltalk.send($rec, "_end_", ["18:00:00"]);smalltalk.send($rec, "_place_", [smalltalk.ATeam || ATeam]);return smalltalk.send($rec, "_detail_", [["Amber Smalltalk\u306B\u3088\u308BWeb\u958B\u767A(@maeda_)", "Object Calculus\u306E\u8A71(@t6s)", "OpenQwaq\u306E\u8A71(@umejava)", "Squeak\u304B\u3089Haskell\u3092\u4F7F\u3063\u3066\u307F\u305F(@tomooda)", "Seaside\u3092\u4F7F\u3063\u305F\u30E9\u30D4\u30C3\u30C9\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0(@kuritar)"]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "jointStStudy02\x0a\x09^ self new \x0a\x09\x09fixed: true;\x0a\x09\x09title: '合同Smalltalk勉強会@名古屋';\x0a\x09\x09date: '2012/09/29';\x0a\x09\x09start: '13:30:00';\x0a\x09\x09end: '18:00:00';\x0a\x09\x09place: ATeam;\x0a\x09\x09detail: {\x0a'Amber SmalltalkによるWeb開発(@maeda_)'.\x0a'Object Calculusの話(@t6s)'.\x0a'OpenQwaqの話(@umejava)'.\x0a'SqueakからHaskellを使ってみた(@tomooda)'.\x0a'Seasideを使ったラピッドプロトタイピング(@kuritar)'\x0a}",
messageSends: ["fixed:", "title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["ATeam"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_kctnagoya",
smalltalk.method({
selector: "kctnagoya",
category: 'events',
fn: function () {
    return this._Events().matchAll("\u3051\u3093\u308D\u3093\u52C9\u5F37\u4F1A(kctnagoya) \u306F \n2012/12/16\u306E14:30:00\u301C17:30:00\u306B\nJoseiKaikan \u3067\n - Basic Category Theory for Computer Scientists \u3092\u8AAD\u3080\n - \u6B21\u56DE\u4EE5\u964D\u3069\u3046\u3059\u308B\u304B\u6C7A\u3081\u308B", "kctnagoya");
},
args: [],
source: "grammer Events:kctnagoya > kctnagoya\x0a\x0aけんろん勉強会(kctnagoya) は \x0a2012/12/16の14:30:00〜17:30:00に\x0aJoseiKaikan で\x0a - Basic Category Theory for Computer Scientists を読む\x0a - 次回以降どうするか決める",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_latest",
smalltalk.method({
selector: "latest",
category: 'events',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_meeting11", []);
    return self;
},
args: [],
source: "latest\x0a\x09^ self meeting11",
messageSends: ["meeting11"],
referencedClasses: []
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting02",
smalltalk.method({
selector: "meeting02",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0302")]);smalltalk.send($rec, "_date_", [unescape("2012/01/28")]);smalltalk.send($rec, "_start_", ["17:00:00"]);smalltalk.send($rec, "_end_", ["20:00:00"]);smalltalk.send($rec, "_place_", [smalltalk.Doerya || Doerya]);return smalltalk.send($rec, "_detail_", [[unescape("%u3053%u306E%u30DA%u30FC%u30B8%u306B%u3064%u3044%u3066%u8AAC%u660E"), unescape("Make%3AOgaki%u306E%u30CD%u30BF%u3092%u8003%u3048%u308B"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29"), unescape("%u30A4%u30EB%u30AB%u306E%u540D%u524D%u3092%u8003%u3048%u308B")]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting02\x0a\x09^ self new \x0a\x09\x09title: 'DyNagoya MTG ＃02';\x0a\x09\x09date: '2012/01/28';\x0a\x09\x09start: '17:00:00';\x0a\x09\x09end: '20:00:00';\x0a\x09\x09place: Doerya;\x0a\x09\x09detail: {\x0a'このページについて説明'.\x0a'Make:Ogakiのネタを考える'.\x0a'Smalltalk入門(希望者がいれば)'.\x0a'イルカの名前を考える'\x0a}",
messageSends: ["title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["Doerya"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting03",
smalltalk.method({
selector: "meeting03",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0303")]);smalltalk.send($rec, "_date_", [unescape("2012/02/26")]);smalltalk.send($rec, "_start_", ["18:30:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.Hakkaku || Hakkaku]);return smalltalk.send($rec, "_detail_", [[unescape("cogdroid%u306B%u3064%u3044%u3066"), unescape("Test%u306B%u3064%u3044%u3066%u8003%u3048%u308B"), unescape("%u3053%u306E%u30DA%u30FC%u30B8%u306E%u30EA%u30F3%u30AF%u96C6%u306E%u8868%u793A%u3092%u304B%u3048%u308B"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29")]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting03\x0a\x09^ self new \x0a\x09\x09title: 'DyNagoya MTG ＃03';\x0a\x09\x09date: '2012/02/26';\x0a\x09\x09start: '18:30:00';\x0a\x09\x09end: '20:30:00';\x0a\x09\x09place: Hakkaku;\x0a\x09\x09detail: {\x0a'cogdroidについて'.\x0a'Testについて考える'.\x0a'このページのリンク集の表示をかえる'.\x0a'Smalltalk入門(希望者がいれば)'\x0a}",
messageSends: ["title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["Hakkaku"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting04",
smalltalk.method({
selector: "meeting04",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0304")]);smalltalk.send($rec, "_date_", [unescape("2012/03/31")]);smalltalk.send($rec, "_start_", ["18:30:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.Captina || Captina]);return smalltalk.send($rec, "_detail_", [[unescape("Scratch%20%u3092%u3044%u3058%u308B"), unescape("%u3053%u306E%u30DA%u30FC%u30B8%u306EAbout%u306E%u5185%u5BB9%u3092%u8003%u3048%u308B"), unescape("Newspeak%u3092%u3044%u3058%u308B"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29")]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting04\x0a\x09^ self new \x0a\x09\x09fixed: true;\x0a\x09\x09title: 'DyNagoya MTG ＃04';\x0a\x09\x09date: '2012/03/31';\x0a\x09\x09start: '18:30:00';\x0a\x09\x09end: '20:30:00';\x0a\x09\x09place: Captina;\x0a\x09\x09detail: {\x0a'Scratch をいじる'.\x0a'このページのAboutの内容を考える'.\x0a'Newspeakをいじる'.\x0a'Smalltalk入門(希望者がいれば)'\x0a}",
messageSends: ["fixed:", "title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["Captina"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting05",
smalltalk.method({
selector: "meeting05",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0305")]);smalltalk.send($rec, "_date_", [unescape("2012/04/28")]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.Tagen || Tagen]);return smalltalk.send($rec, "_detail_", [[unescape("%u5408%u540C%u52C9%u5F37%u4F1A%u7528%u306B%u540D%u53E4%u5C4B%u7684%u30CD%u30BF%u3092%u8003%u3048%u308B"), unescape("%u3053%u306E%u30DA%u30FC%u30B8%u306EAbout%u306E%u5185%u5BB9%u3092%u8003%u3048%u308B"), unescape("VMMaker%u3092%u52D5%u304B%u3059"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29")]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting05\x0a\x09^ self new \x0a\x09\x09fixed: true;\x0a\x09\x09title: 'DyNagoya MTG ＃05';\x0a\x09\x09date: '2012/04/28';\x0a\x09\x09start: '18:00:00';\x0a\x09\x09end: '20:30:00';\x0a\x09\x09place: Tagen;\x0a\x09\x09detail: {\x0a'合同勉強会用に名古屋的ネタを考える'.\x0a'このページのAboutの内容を考える'.\x0a'VMMakerを動かす'.\x0a'Smalltalk入門(希望者がいれば)'\x0a}",
messageSends: ["fixed:", "title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["Tagen"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting06",
smalltalk.method({
selector: "meeting06",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0306")]);smalltalk.send($rec, "_date_", [unescape("2012/05/19")]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.LokantaAYHAN || LokantaAYHAN]);return smalltalk.send($rec, "_detail_", [[unescape("%u5408%u540CSmalltalk%u52C9%u5F37%u4F1A%u306E%u6BB5%u53D6%u308A%u3092%u6C7A%u3081%u308B"), unescape("%u30D1%u30FC%u30B5%u30FC%u306E%u3044%u3058%u308A%u65B9"), unescape("VMMaker%u3092%u52D5%u304B%u3059"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29")]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting06\x0a\x09^ self new \x0a\x09\x09fixed: true;\x0a\x09\x09title: 'DyNagoya MTG ＃06';\x0a\x09\x09date: '2012/05/19';\x0a\x09\x09start: '18:00:00';\x0a\x09\x09end: '20:30:00';\x0a\x09\x09place: LokantaAYHAN;\x0a\x09\x09detail: {\x0a'合同Smalltalk勉強会の段取りを決める'.\x0a'パーサーのいじり方'.\x0a'VMMakerを動かす'.\x0a'Smalltalk入門(希望者がいれば)'\x0a}",
messageSends: ["fixed:", "title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["LokantaAYHAN"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting07",
smalltalk.method({
selector: "meeting07",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", ["DyNagoya MTG \uFF0307"]);smalltalk.send($rec, "_date_", ["2012/06/23"]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.AmiyakiTei || AmiyakiTei]);return smalltalk.send($rec, "_detail_", [["Smalltalk\u52C9\u5F37\u4F1A\u3000\u672A\u8E0F\u30B9\u30DA\u30B7\u30E3\u30EB \u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF", "\u5408\u540CSmalltalk\u52C9\u5F37\u4F1A\u306E\u6BB5\u53D6\u308A\u3092\u6C7A\u3081\u308B", "Smalltalk\u5165\u9580(\u5E0C\u671B\u8005\u304C\u3044\u308C\u3070)"]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting07\x0a\x09^ self new \x0a\x09\x09fixed: true;\x0a\x09\x09title: 'DyNagoya MTG ＃07';\x0a\x09\x09date: '2012/06/23';\x0a\x09\x09start: '18:00:00';\x0a\x09\x09end: '20:30:00';\x0a\x09\x09place: AmiyakiTei;\x0a\x09\x09detail: {\x0a'Smalltalk勉強会　未踏スペシャル フィードバック'.\x0a'合同Smalltalk勉強会の段取りを決める'.\x0a'Smalltalk入門(希望者がいれば)'\x0a}",
messageSends: ["fixed:", "title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["AmiyakiTei"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting08",
smalltalk.method({
selector: "meeting08",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", ["DyNagoya MTG \uFF0308"]);smalltalk.send($rec, "_date_", ["2012/07/28"]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.Doerya || Doerya]);return smalltalk.send($rec, "_detail_", [["\u5408\u540CSmalltalk\u52C9\u5F37\u4F1A\u306E\u767A\u8868\u30CD\u30BF\u3092\u6C7A\u3081\u308B", "Amber \u9B54\u6539\u9020\u306E\u8A71", "Smalltalk\u5165\u9580(\u5E0C\u671B\u8005\u304C\u3044\u308C\u3070)"]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting08\x0a\x09^ self new \x0a\x09\x09fixed: true;\x0a\x09\x09title: 'DyNagoya MTG ＃08';\x0a\x09\x09date: '2012/07/28';\x0a\x09\x09start: '18:00:00';\x0a\x09\x09end: '20:30:00';\x0a\x09\x09place: Doerya;\x0a\x09\x09detail: {\x0a'合同Smalltalk勉強会の発表ネタを決める'.\x0a'Amber 魔改造の話'.\x0a'Smalltalk入門(希望者がいれば)'\x0a}",
messageSends: ["fixed:", "title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["Doerya"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting09",
smalltalk.method({
selector: "meeting09",
category: 'events',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_title_", ["DyNagoya MTG \uFF0309"]);smalltalk.send($rec, "_date_", ["2012/10/20"]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:00:00"]);smalltalk.send($rec, "_place_", [smalltalk.Mattariya || Mattariya]);return smalltalk.send($rec, "_detail_", [["OMeta\u3092\u3044\u3058\u308B", "Mist\u3092\u3044\u3058\u305F\u3044", "CPS\u5909\u63DB\u796D\u308A?"]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting09\x0a\x09^ self new \x0a\x09\x09title: 'DyNagoya MTG ＃09';\x0a\x09\x09date: '2012/10/20';\x0a\x09\x09start: '18:00:00';\x0a\x09\x09end: '20:00:00';\x0a\x09\x09place: Mattariya;\x0a\x09\x09detail: {\x0a\x09\x09\x09'OMetaをいじる'.\x0a\x09\x09\x09'Mistをいじたい'.\x0a\x09\x09\x09'CPS変換祭り?'\x0a\x09\x09}",
messageSends: ["title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["Mattariya"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting10",
smalltalk.method({
selector: "meeting10",
category: 'events',
fn: function () {
    return this._Events().matchAll("DyNagoya MTG #10 \u306F \n2012/11/10\u306E12:00:00\u301C15:00:00\u306B\nImoni \u3067\n - OMeta\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\n - OMeta\u540D\u524D\u7A7A\u9593\u3092\u3061\u3083\u3093\u3068\u3059\u308B\n - NGK\u306E\u30CD\u30BF\u3092\u8003\u3048\u308B", "meeting");
},
args: [],
source: "grammer Events:meeting > meeting10 \x0a\x0aDyNagoya MTG #10 は \x0a2012/11/10の12:00:00〜15:00:00に\x0aImoni で\x0a - OMetaパフォーマンスチューニング\x0a - OMeta名前空間をちゃんとする\x0a - NGKのネタを考える",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting11",
smalltalk.method({
selector: "meeting11",
category: 'events',
fn: function () {
    return this._Events().matchAll("DyNagoya MTG #11 \u306F \n2012/12/16\u306E18:00:00\u301C20:00:00\u306B\nAikitaya \u3067\n - \u3044\u308B\u304B\u306E\u3057\u3063\u307D\u3092\u52D5\u304B\u3059\n - Maker Faire \u306E\u30CD\u30BF\u3092\u8003\u3048\u308B", "dynagoya");
},
args: [],
source: "grammer Events:dynagoya > meeting11\x0a\x0aDyNagoya MTG #11 は \x0a2012/12/16の18:00:00〜20:00:00に\x0aAikitaya で\x0a - いるかのしっぽを動かす\x0a - Maker Faire のネタを考える",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event.klass);


smalltalk.addClass('JSViewer', smalltalk.Widget, ['sourceArea', 'outView'], 'DyNagoya');
smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    var $early = {};
    try {
        var compiler = nil;
        var parsed = nil;
        var source = nil;
        var result = nil;
        compiler = smalltalk.send(smalltalk.Compiler || Compiler, "_new", []);
        source = smalltalk.send(smalltalk.send("doIt ^[", "__comma", [aString]), "__comma", ["] value"]);
        smalltalk.send(self, "_try_catch_", [function () {smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_basicParse_", [source]);return result = smalltalk.send(smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compile_forClass_", [source, smalltalk.DoIt || DoIt])]), "_fn", []);}, function (ex) {return function () {throw $early = [ex];}();}]);
        return smalltalk.send(result, "_compiledSource", []);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["aString"],
source: "compile: aString\x0a\x09| compiler parsed source result|\x0a\x09compiler := Compiler new.\x0a\x09source := 'doIt ^[', aString, '] value'.\x0a\x0a\x09self try: [\x0a\x09\x09Smalltalk current basicParse: source.\x0a\x09\x09result := (compiler eval: (compiler compile: source forClass: DoIt)) fn \x0a\x09] catch: [:ex | ^ ex  ].\x0a\x09^ result compiledSource\x0a",
messageSends: ["new", ",", "try:catch:", "basicParse:", "current", "fn", "eval:", "compile:forClass:", "compiledSource"],
referencedClasses: ["Compiler", "Smalltalk", "DoIt"]
}),
smalltalk.JSViewer);

smalltalk.addMethod(
"_emit_",
smalltalk.method({
selector: "emit:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    return smalltalk.send(self, "_compile_", [aString]);
    return self;
},
args: ["aString"],
source: "emit: aString\x0a\x09^ (self compile: aString) ",
messageSends: ["compile:"],
referencedClasses: []
}),
smalltalk.JSViewer);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["width", "100%"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "white"]);smalltalk.send($rec, "_css_put_", ["color", "black"]);smalltalk.send($rec, "_css_put_", ["width", "45%"]);smalltalk.send($rec, "_css_put_", ["position", "absolute"]);smalltalk.send($rec, "_css_put_", ["top", "5%"]);smalltalk.send($rec, "_css_put_", ["bottom", "5%"]);return smalltalk.send($rec, "_with_", [self['@sourceArea']]);}(smalltalk.send(html, "_div", [])));self['@outView'] = function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "pink"]);smalltalk.send($rec, "_css_put_", ["color", "black"]);smalltalk.send($rec, "_css_put_", ["width", "45%"]);smalltalk.send($rec, "_css_put_", ["position", "absolute"]);smalltalk.send($rec, "_css_put_", ["left", "51%"]);smalltalk.send($rec, "_css_put_", ["top", "5%"]);smalltalk.send($rec, "_css_put_", ["bottom", "5%"]);return smalltalk.send($rec, "_with_", ["JS code"]);}(smalltalk.send(html, "_div", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_css_put_", ["clear", "both"]);}]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(self['@sourceArea'], "_onKeyUp_", [function () {return smalltalk.send(self, "_updateStatus", []);}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09sourceArea := SourceArea new.\x0a\x0a\x09html div css: 'width' put: '100%'; with: [\x0a\x09\x09html div \x0a\x09\x09\x09css: 'background' put: 'white'; \x0a\x09\x09\x09css: 'color' put: 'black'; \x0a\x09\x09\x09css: 'width' put: '45%';\x0a\x09\x09\x09css: 'position' put: 'absolute';\x0a\x09\x09\x09css: 'top' put: '5%';\x0a\x09\x09\x09css: 'bottom' put: '5%';\x0a\x09\x09\x09with: sourceArea.\x0a\x09\x09outView := html div \x0a\x09\x09\x09css: 'background' put: 'pink'; \x0a\x09\x09\x09css: 'color' put: 'black';\x0a\x09\x09\x09css: 'width' put: '45%';\x0a\x09\x09\x09css: 'position' put: 'absolute';\x0a\x09\x09\x09css: 'left' put: '51%';\x0a\x09\x09\x09css: 'top' put: '5%';\x0a\x09\x09\x09css: 'bottom' put: '5%';\x0a\x09\x09\x09with: 'JS code'.\x0a\x09\x09html span css: 'clear' put: 'both'\x0a\x09].\x0a\x09sourceArea onKeyUp: [ self updateStatus ]",
messageSends: ["new", "css:put:", "with:", "div", "span", "onKeyUp:", "updateStatus"],
referencedClasses: ["SourceArea"]
}),
smalltalk.JSViewer);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@outView'], "_contents_", [function (html) {return smalltalk.send(html, "_span_", [smalltalk.send(self, "_emit_", [smalltalk.send(self['@sourceArea'], "_val", [])])]);}]);
    return self;
},
args: [],
source: "updateStatus\x0a\x09outView contents: [ :html |\x0a\x09\x09html span: (self emit: sourceArea val)\x0a\x09]",
messageSends: ["contents:", "span:", "emit:", "val"],
referencedClasses: []
}),
smalltalk.JSViewer);


smalltalk.addMethod(
"_onDialog",
smalltalk.method({
selector: "onDialog",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(smalltalk.JSViewer || JSViewer, "_new", [])]);smalltalk.send($rec, "_title_", ["Javascript Viewer"]);smalltalk.send($rec, "_width_", ["50%"]);smalltalk.send($rec, "_modal_", [false]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", []));
    return self;
},
args: [],
source: "onDialog\x0a\x09^ DialogBox new widget: JSViewer new; title: 'Javascript Viewer'; width: '50%'; modal: false; open ",
messageSends: ["widget:", "new", "title:", "width:", "modal:", "open"],
referencedClasses: ["JSViewer", "DialogBox"]
}),
smalltalk.JSViewer.klass);


smalltalk.addClass('Login', smalltalk.Widget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [unescape("/name"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("success", "__minus_gt", [function (x) {smalltalk.send(smalltalk.Login || Login, "_user_", [x]);return function ($rec) {smalltalk.send($rec, "_href_", [unescape("/logout")]);return smalltalk.send($rec, "_with_", [smalltalk.send(x, "__comma", [" Log Out"])]);}(smalltalk.send(html, "_a", []));}]), smalltalk.send("error", "__minus_gt", [function (x) {smalltalk.send(smalltalk.Login || Login, "_user_", [nil]);return function ($rec) {smalltalk.send($rec, "_href_", [unescape("/login")]);return smalltalk.send($rec, "_with_", [" Log In"]);}(smalltalk.send(html, "_a", []));}])])]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09jQuery ajax: '/name' options: #{ \x0a\x09\x09'success' -> [ :x | \x0a\x09\x09\x09Login user: x.\x0a\x09\x09\x09html a href: '/logout'; with: ( x, ' Log Out' ) ].\x0a\x09\x09 'error'       -> [ :x | \x0a\x09\x09\x09Login user: nil.\x0a\x09\x09\x09html a href: '/login'; with: ' Log In'  ]\x0a\x09}",
messageSends: ["ajax:options:", "->", "user:", "href:", "with:", ",", "a"],
referencedClasses: ["Login"]
}),
smalltalk.Login);


smalltalk.Login.klass.iVarNames = ['user'];
smalltalk.addMethod(
"_user",
smalltalk.method({
selector: "user",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@user'];
    return self;
},
args: [],
source: "user\x0a\x09^user",
messageSends: [],
referencedClasses: []
}),
smalltalk.Login.klass);

smalltalk.addMethod(
"_user_",
smalltalk.method({
selector: "user:",
category: 'not yet classified',
fn: function (aStr) {
    var self = this;
    self['@user'] = aStr;
    return self;
},
args: ["aStr"],
source: "user: aStr\x0a\x09user := aStr",
messageSends: [],
referencedClasses: []
}),
smalltalk.Login.klass);


smalltalk.addClass('OMeta', smalltalk.Object, [], 'DyNagoya');
smalltalk.OMeta.comment="code := 'ometa Factorial {\x0a  fact 0 -> 1,\x0a  fact :n = fact(n-1):m -> (n*m)\x0a}'.\x0atree := BSOMetaJSParser matchAll: code rule: 'topLevel'.\x0ajs := BSOMetaJSTranslator match:tree rule:'trans'.\x0a< eval(js) >.\x0aFactorial matchAll: '3' rule: 'fact'"


smalltalk.addClass('Page', smalltalk.Widget, ['body', 'todo'], 'DyNagoya');
smalltalk.addMethod(
"_body",
smalltalk.method({
selector: "body",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@body'];
    return self;
},
args: [],
source: "body\x0a  ^ body",
messageSends: [],
referencedClasses: []
}),
smalltalk.Page);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'not yet classified',
fn: function (aBlock) {
    var self = this;
    ($receiver = self['@body']) == nil || $receiver == undefined ? function () {return smalltalk.send(self['@todo'], "_add_", [aBlock]);}() : function () {return smalltalk.send(aBlock, "_value_", [self['@body']]);}();
    return self;
},
args: ["aBlock"],
source: "do: aBlock\x0a  body ifNil: [\x0a\x09todo add: aBlock\x0a  ] ifNotNil: [ \x0a\x09aBlock value: body\x0a  ]",
messageSends: ["ifNil:ifNotNil:", "add:", "value:"],
referencedClasses: []
}),
smalltalk.Page);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@todo'] = [];
    return self;
},
args: [],
source: "initialize\x0a  todo := {}",
messageSends: [],
referencedClasses: []
}),
smalltalk.Page);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: "renderBody: html\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Page);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    self['@body'] = html;
    smalltalk.send(self, "_renderBody_", [html]);
    smalltalk.send(self['@todo'], "_do_", [function (thisisplaceholder1) {return smalltalk.send(self, "_do_", [thisisplaceholder1]);}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09body := html.\x0a\x09self renderBody: html.\x0a\x09\x0a\x09todo do: [ self do: %1 ]\x0a",
messageSends: ["renderBody:", "do:"],
referencedClasses: []
}),
smalltalk.Page);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_do_", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_h1_", [aString]);}]);
    return self;
},
args: ["aString"],
source: "title: aString\x0a  self do: [ %1 h1: aString]",
messageSends: ["do:", "h1:"],
referencedClasses: []
}),
smalltalk.Page);


smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(self, "_new", [])]);
    return self;
},
args: [],
source: "show\x0a  ^ Screen new flip: self new",
messageSends: ["flip:", "new"],
referencedClasses: ["Screen"]
}),
smalltalk.Page.klass);


smalltalk.addClass('AboutDyNagoya', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "8000";
    return self;
},
args: [],
source: "height\x0a  ^ '8000'\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutDyNagoya);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", ["margin-top: 30px"]);return smalltalk.send($rec, "_with_", ["DyNagoya \u3068\u306F"]);}(smalltalk.send(html, "_h1", [])));
    smalltalk.send([["\u540D\u53E4\u5C4B\u3067\u52D5\u7684\u8A00\u8A9E(Dynamic Language)\u306B\u3064\u3044\u3066\u8A9E\u308A\u5408\u3046\u30D7\u30ED\u30B0\u30E9\u30DE\u96C6\u56E3\u304CDyNagoya(Dynamic language + Nagoya = DyNagoya)\u3067\u3059\u3002", "\u52D5\u7684\u8A00\u8A9E\u5168\u822C\u3092\u6271\u3063\u3066\u307E\u3059\u304C\u3001\u4E2D\u5FC3\u3068\u306A\u308B\u306E\u306FSmalltalk\u3067\u3059\u3002", "Smalltalk\u306F\u30A2\u30E9\u30F3\u30B1\u30A4(Alan Kay 1940 - )\u306E\u7406\u60F3\u306E\u30D1\u30FC\u30BD\u30CA\u30EB\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3067\u3042\u308B\u300EDynabook\u300F\u306E\u66AB\u5B9A\u5B9F\u88C5\u304B\u3089\u8A95\u751F\u3057\u307E\u3057\u305F\u3002", "DyNagoya\u306E\u300CDy\u300D\u306FDynabook\u306E\u300CDy\u300D\u3082\u517C\u306D\u3066\u3044\u307E\u3059\u3002", "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u79C1\u305F\u3061\u306E\u7406\u60F3\u306E\u95A2\u4FC2\u3092\u6A21\u7D22\u3059\u308B\u3053\u3068\u304CDyNagoya\u306E\u76EE\u7684\u3067\u3059\u3002"], ["DyNagoya\u3067\u306F\u3001\u6708\u306B\uFF11\u56DE\u306E\u4F1A\u5408\u3092\u958B\u3044\u3066\u3044\u307E\u3059\u3002", "\u3053\u306E\u4F1A\u3067\u306F\u3001\u304A\u3044\u3057\u3044\u3054\u98EF\u3092\u98DF\u3079\u306A\u304C\u3089\u3001\u52D5\u7684\u8A00\u8A9E\u306B\u3064\u3044\u3066\u8A9E\u308A\u5408\u3063\u3066\u3044\u307E\u3059\u3002", "\u4F55\u306E\u6E96\u5099\u3082\u5FC3\u69CB\u3048\u3082\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002\u304A\u6C17\u8EFD\u306B\u3054\u53C2\u52A0\u304F\u3060\u3055\u3044\u3002"]], "_do_", [function (each) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "20px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(each, "_do_", [function (each2) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [each2]);}]);}]);}(smalltalk.send(html, "_h2", []));}]);
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09html h1 style: 'margin-top: 30px'; with: 'DyNagoya とは'.\x0a{\x0a  { \x0a     '名古屋で動的言語(Dynamic Language)について語り合うプログラマ集団がDyNagoya(Dynamic language + Nagoya = DyNagoya)です。' .\x0a     '動的言語全般を扱ってますが、中心となるのはSmalltalkです。' .\x0a     'Smalltalkはアランケイ(Alan Kay 1940 - )の理想のパーソナルコンピュータである『Dynabook』の暫定実装から誕生しました。' .\x0a     'DyNagoyaの「Dy」はDynabookの「Dy」も兼ねています。'. \x0a     'コンピュータと私たちの理想の関係を模索することがDyNagoyaの目的です。' \x0a   }  .\x0a   {\x0a     'DyNagoyaでは、月に１回の会合を開いています。'.\x0a     'この会では、おいしいご飯を食べながら、動的言語について語り合っています。'.\x0a     '何の準備も心構えも必要ありません。お気軽にご参加ください。' \x0a   }\x0a}\x0ado: [ :each | html h2 css: 'margin-left' put: '20px'; with: [ each do: [ :each2 | html span with: each2 ] ] ].\x0a\x0a",
messageSends: ["style:", "with:", "h1", "do:", "css:put:", "span", "h2"],
referencedClasses: []
}),
smalltalk.AboutDyNagoya);



smalltalk.addClass('AboutSmalltalk', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "800";
    return self;
},
args: [],
source: "height\x0a  ^ '800'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutSmalltalk);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Smalltalk\u3068\u306F"]);
    smalltalk.send([["Smalltalk\u306F\u8A00\u8A9E\u3068\u3044\u3046\u3088\u308A\u74B0\u5883\u3067\u3059\u3002", "PC\u4E0A\u306BSmalltalk\u3068\u3044\u3046\u4EEE\u60F3\u74B0\u5883\u3092\u8D77\u52D5\u3057\u3001\u305D\u306E\u4EEE\u60F3\u74B0\u5883\u306E\u4E2D\u3067\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002", "\u4EEE\u60F3\u74B0\u5883\u81EA\u4F53\u304CSmalltalk\u306E\u30B7\u30F3\u30D7\u30EB\u306A\u6587\u6CD5\u3067\u8A18\u8FF0\u3055\u308C\u3066\u304A\u308A\u3001\u5B9F\u884C\u4E2D\u306B\u7C21\u5358\u306B\u66F8\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002", "\u4F8B\u3048\u3070\u3001\u4EEE\u60F3\u74B0\u5883\u306B\u306FIDE\u3082\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u305D\u306EIDE\u81EA\u4F53\u306E\u30B3\u30FC\u30C9\u3092\u66F8\u304D\u63DB\u3048\u3066\u3001\u81EA\u5206\u597D\u307F\u306EIDE\u306B\u4ED5\u7ACB\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002", "IDE\u3060\u3051\u3067\u306A\u304F\u3001\u30D1\u30FC\u30B5\u3084\u30B3\u30F3\u30D1\u30A4\u30E9\u3001\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF\u3001\u6587\u5B57\u5217\u30AF\u30E9\u30B9\u3084\u6570\u5024\u30AF\u30E9\u30B9\u306A\u3069\u306E\u57FA\u672C\u30AF\u30E9\u30B9\u3082\u30D7\u30ED\u30B0\u30E9\u30E0\u5B9F\u884C\u4E2D\u306B\u597D\u304D\u52DD\u624B\u306B\u66F8\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002", "\u591A\u304F\u306E\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u8A00\u8A9E\u3067\u306F\u3001\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3053\u3068\u3068\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u52D5\u304B\u3059\u3053\u3068\u306F\u5225\u7269\u3067\u3059\u304C\u3001Smalltalk\u306B\u306F\u305D\u306E\u57A3\u6839\u304C\u3086\u308B\u304F\u66D6\u6627\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002", "\u751F\u304D\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6355\u307E\u3048\u3066\u3001\u305D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u5BFE\u8A71\u7684\u306B\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F5C\u3063\u3066\u3044\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"], ["Smalltalk\u306F\u7406\u60F3\u306E\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u74B0\u5883\u3092\u8FFD\u6C42\u3059\u308B\u305F\u3081\u306E\u5B9F\u9A13\u5834\u3068\u3082\u8A00\u3048\u307E\u3059\u3002", "Smalltalk\u4E0A\u3067\u3044\u304F\u3064\u304B\u306E\u65B0\u3057\u3044\u8A00\u8A9E\u306E\u958B\u767A\u3082\u884C\u308F\u308C\u3066\u3044\u307E\u3059\u3002", "\u307E\u305F\u3001\u65B0\u3057\u3044\u30C7\u30D0\u30A4\u30B9\u3068\u306E\u9023\u643A\u306B\u3082\u7A4D\u6975\u7684\u3067\u3001Arduino\u3084Kinect\u306A\u3069\u306E\u5916\u90E8\u30C7\u30D0\u30A4\u30B9\u3068\u306E\u9023\u643A\u3082\u53EF\u80FD\u3067\u3059\u3002"]], "_do_", [function (each) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "20px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(each, "_do_", [function (each2) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [each2]);}]);}]);}(smalltalk.send(html, "_h3", []));}]);
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09html h1: 'Smalltalkとは'.\x0a{\x0a   {\x0a     'Smalltalkは言語というより環境です。'.\x0a     'PC上にSmalltalkという仮想環境を起動し、その仮想環境の中でプログラムを記述します。'.\x0a     '仮想環境自体がSmalltalkのシンプルな文法で記述されており、実行中に簡単に書き換えることが可能です。'.\x0a     '例えば、仮想環境にはIDEも含まれていますが、そのIDE自体のコードを書き換えて、自分好みのIDEに仕立てることができます。' .\x0a     'IDEだけでなく、パーサやコンパイラ、インタプリタ、文字列クラスや数値クラスなどの基本クラスもプログラム実行中に好き勝手に書き換えることができます。'.\x0a     '多くのプログラミング言語では、コードを書くこととプログラムを動かすことは別物ですが、Smalltalkにはその垣根がゆるく曖昧になっています。' .\x0a     '生きているオブジェクトを捕まえて、そのオブジェクトと対話的にプログラムを作っていくことができます。'\x0a   } .\x0a   {\x0a     'Smalltalkは理想のコンピュータ環境を追求するための実験場とも言えます。'.\x0a     'Smalltalk上でいくつかの新しい言語の開発も行われています。'.\x0a     'また、新しいデバイスとの連携にも積極的で、ArduinoやKinectなどの外部デバイスとの連携も可能です。'\x0a   }\x0a} do: [ :each | html h3 css: 'margin-left' put: '20px'; with: [ each do: [ :each2 | html span with: each2  ]]]\x0a\x0a",
messageSends: ["h1:", "do:", "css:put:", "with:", "span", "h3"],
referencedClasses: []
}),
smalltalk.AboutSmalltalk);



smalltalk.addClass('BrowsePage', smalltalk.Page, ['selectedClass', 'methodName', 'browser'], 'DyNagoya');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@browser'];
    return self;
},
args: [],
source: "browser\x0a\x09^ browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.BrowsePage);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    self['@methodName'] = aString;
    return self;
},
args: ["aString"],
source: "method: aString\x0a\x09methodName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.BrowsePage);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "black"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["padding", "15px"]);return smalltalk.send($rec, "_with_", [self['@browser']]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09html div \x0a\x09\x09css: 'background' put: 'black';\x0a\x09\x09css: 'color' put: 'white';\x0a\x09\x09css: 'padding' put: '15px';\x0a\x09\x09with: browser",
messageSends: ["css:put:", "with:", "div"],
referencedClasses: []
}),
smalltalk.BrowsePage);

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
smalltalk.BrowsePage);


smalltalk.addMethod(
"_showWithBrowser_",
smalltalk.method({
selector: "showWithBrowser:",
category: 'not yet classified',
fn: function (aBrowser) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(smalltalk.send(smalltalk.Page || Page, "_new", []), "_title_", [smalltalk.send(smalltalk.send(aBrowser, "_target", []), "_name", [])])]);
    smalltalk.send(smalltalk.Screen || Screen, "_add_", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_class_", ["tree-source workspace-effect"]);return smalltalk.send($rec, "_with_", [aBrowser]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);
    smalltalk.send(aBrowser, "_open", []);
    return self;
},
args: ["aBrowser"],
source: "showWithBrowser: aBrowser\x0a\x09Screen new flip: (Page new title: (aBrowser target name)).\x0a\x09Screen add: [ %1 div class: 'tree-source workspace-effect'; with: aBrowser ].\x0a\x09aBrowser open",
messageSends: ["flip:", "new", "title:", "name", "target", "add:", "class:", "with:", "div", "open"],
referencedClasses: ["Screen", "Page"]
}),
smalltalk.BrowsePage.klass);


smalltalk.addClass('HowToJoinPage', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "800";
    return self;
},
args: [],
source: "height\x0a  ^ '800'\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.HowToJoinPage);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", ["margin-top: 30px"]);return smalltalk.send($rec, "_with_", ["\u53C2\u52A0\u65B9\u6CD5"]);}(smalltalk.send(html, "_h1", [])));
    smalltalk.send([["DyNagoya\u3067\u306F\u3001\u6708\u306B\uFF11\u56DE\u306E\u4F1A\u5408\u3092\u958B\u3044\u3066\u3044\u307E\u3059\u3002", "\u3053\u306E\u4F1A\u3067\u306F\u3001\u304A\u3044\u3057\u3044\u3054\u98EF\u3092\u98DF\u3079\u306A\u304C\u3089\u3001\u52D5\u7684\u8A00\u8A9E\u306B\u3064\u3044\u3066\u8A9E\u308A\u5408\u3063\u3066\u3044\u307E\u3059\u3002", "\u4F55\u306E\u6E96\u5099\u3082\u5FC3\u69CB\u3048\u3082\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002\u304A\u6C17\u8EFD\u306B\u3054\u53C2\u52A0\u304F\u3060\u3055\u3044\u3002"], ["\u4F1A\u5408\u306B\u59CB\u3081\u3066\u53C2\u52A0\u3055\u308C\u308B\u65B9\u306F", "twitter\u306A\u3089 @maeda_ \u307E\u3067\u3001", "e-mail\u306A\u3089 clouds.across.the.moon at gmail.com \u307E\u3067\u3001", "\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002"], ["\u6700\u65B0\u306E\u60C5\u5831\u306F twitter \u30A2\u30AB\u30A6\u30F3\u30C8 @dynagoya_info \u304C\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002"]], "_do_", [function (each) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "20px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(each, "_do_", [function (each2) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [each2]);}]);}]);}(smalltalk.send(html, "_h2", []));}]);
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09html h1 style: 'margin-top: 30px'; with: '参加方法'. \x0a{\x0a   {\x0a     'DyNagoyaでは、月に１回の会合を開いています。'.\x0a     'この会では、おいしいご飯を食べながら、動的言語について語り合っています。'.\x0a     '何の準備も心構えも必要ありません。お気軽にご参加ください。' \x0a   }.\x0a   {\x0a     '会合に始めて参加される方は'.\x0a     'twitterなら @maeda_ まで、'.\x0a     'e-mailなら clouds.across.the.moon at gmail.com まで、'.\x0a     'ご連絡ください。'\x0a   }.\x0a   {\x0a      '最新の情報は twitter アカウント @dynagoya_info がお知らせします。'\x0a   }\x0a}\x0ado: [ :each | html h2 css: 'margin-left' put: '20px'; with: [ each do: [ :each2 | html span with: each2 ] ] ].\x0a\x0a",
messageSends: ["style:", "with:", "h1", "do:", "css:put:", "span", "h2"],
referencedClasses: []
}),
smalltalk.HowToJoinPage);



smalltalk.addClass('Introduction', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    return self;
},
args: ["html"],
source: "renderBody: html\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Introduction);


smalltalk.addMethod(
"_maeda",
smalltalk.method({
selector: "maeda",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.Screen || Screen, "_title_", ["\u524D\u7530\u5EB7\u884C (twitter: @maeda_)"]);
    smalltalk.send(smalltalk.Screen || Screen, "_add_", [function (html) {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["Favarite Language "]);(function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "80px"]);return smalltalk.send($rec, "_with_", ["- Scala"]);}(smalltalk.send(html, "_div", [])));return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "80px"]);return smalltalk.send($rec, "_with_", ["- Smalltalk"]);}(smalltalk.send(html, "_div", []));}]);return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["DyNagoya "]);return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "80px"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["color", "red"]);return smalltalk.send($rec, "_with_", ["Dy"]);}(smalltalk.send(html, "_span", [])));smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["namic Language + "]);return function ($rec) {smalltalk.send($rec, "_css_put_", ["color", "red"]);return smalltalk.send($rec, "_with_", ["Nagoya"]);}(smalltalk.send(html, "_span", []));}]);}(smalltalk.send(html, "_div", []));}]);}]);
    return self;
},
args: [],
source: "maeda\x0a\x09Screen title: '前田康行 (twitter: @maeda_)'.\x0a\x09Screen add: [ :html | \x0a\x09\x09html h1 with: [ \x0a\x09\x09\x09html div with: 'Favarite Language '.\x0a\x09\x09\x09html div css: 'margin-left' put: '80px'; with: '- Scala'.\x0a\x09\x09\x09html div css: 'margin-left' put: '80px'; with: '- Smalltalk'\x0a\x09\x09].\x0a\x09\x09html h1 with: [ \x0a\x09\x09\x09html div with: 'DyNagoya '.\x0a\x09\x09\x09html div css: 'margin-left' put: '80px'; with: [\x0a\x09\x09\x09\x09html span css: 'color' put: 'red'; with: 'Dy'.\x0a\x09\x09\x09\x09html span with: 'namic Language + '.\x0a\x09\x09\x09\x09html span css: 'color' put: 'red'; with: 'Nagoya'\x0a\x09\x09\x09]\x0a\x09\x09]\x0a\x09]\x0a\x09",
messageSends: ["title:", "add:", "with:", "h1", "div", "css:put:", "span"],
referencedClasses: ["Screen"]
}),
smalltalk.Introduction.klass);


smalltalk.addClass('LLorMLAdventPage', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "8000";
    return self;
},
args: [],
source: "height\x0a  ^ '8000'\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.LLorMLAdventPage);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(self, "_renderTitle_", [html]);
    (function ($rec) {smalltalk.send($rec, "_style_", ["font-size: 30px"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["\u3053\u306E\u8A18\u4E8B\u306F\u3001"]);(function ($rec) {smalltalk.send($rec, "_href_", ["http://partake.in/events/9658f376-6ce3-4217-b392-b05d3de60021"]);smalltalk.send($rec, "_with_", ["LL/ML Advent Calendar"]);return smalltalk.send($rec, "_target_", ["_blank"]);}(smalltalk.send(html, "_a", [])));return smalltalk.send(html, "_span_", ["\u306E12\u65E5\u76EE\u306E\u8A18\u4E8B\u3067\u3059\u3002"]);}]);}(smalltalk.send(html, "_div", [])));
    (function ($rec) {smalltalk.send($rec, "_style_", ["font-size: 30px"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["\u306A\u304A\u3001\u79C1\u306F\u3053\u306E\u30AB\u30EC\u30F3\u30C0\u30FC\u306B\u95A2\u9023\u3059\u308B\u3064\u3076\u3084\u304D\u3092\u3057\u3066\u3044\u306A\u3044\u306E\u306B\u6355\u6349\u3055\u308C\u3001"]);return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["\u53C2\u52A0\u767B\u9332\u3057\u3066\u306A\u3044\u306E\u306B\u53C2\u52A0\u306B\u306A\u3063\u3066\u3044\u307E\u3057\u305F\u3002"]);}]);}(smalltalk.send(html, "_div", [])));
    (function ($rec) {smalltalk.send($rec, "_style_", ["font-size: 30px; padding-top: 15px;"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["font-weight", "bold"]);return smalltalk.send($rec, "_with_", ["\u300E\u53C2\u52A0\u3057\u307E\u3059\u300F"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["\u30FB\u30FB\u30FB\u305D\u3093\u306A\u8A00\u8449\u306F\u4F7F\u3046\u5FC5\u8981\u304C\u306D\u30FC\u3093\u3060\u3002"]);}]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["font-weight", "bold"]);return smalltalk.send($rec, "_with_", ["\u300E\u53C2\u52A0\u3059\u308B\u3053\u3068\u306B\u306A\u3063\u3066\u3044\u305F\uFF01\u300F"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["\u306A\u3089\u8A00\u3063\u3066\u3082\u3044\u3044\u30C3\uFF01\uFF01"]);}]);}]);}(smalltalk.send(html, "_div", [])));
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["padding-top", "10px"]);smalltalk.send($rec, "_css_put_", ["font-size", "16px"]);return smalltalk.send($rec, "_with_", ["\u203B \u3053\u306E\u30DA\u30FC\u30B8\u306FMBA 13inch + Firefox \u3067\u78BA\u8A8D\u3057\u3066\u3044\u307E\u3059\u3002"]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(function () {return smalltalk.send(smalltalk.LLorMLAdventPanel || LLorMLAdventPanel, "_show", []);}, "_valueWithTimeout_", [5000]);
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09self renderTitle: html.\x0a\x0a\x09html div style: 'font-size: 30px'; with:[\x0a\x09\x09html span with: 'この記事は、'.\x0a\x09\x09html a href: 'http://partake.in/events/9658f376-6ce3-4217-b392-b05d3de60021';\x0a\x09\x09\x09with: 'LL/ML Advent Calendar';\x0a\x09\x09\x09target: '_blank'.\x0a\x09\x09html span: 'の12日目の記事です。'.\x0a\x09].\x0a\x09html div style: 'font-size: 30px'; with:[\x0a\x09\x09html span with: 'なお、私はこのカレンダーに関連するつぶやきをしていないのに捕捉され、'.\x0a\x09\x09html span with: '参加登録してないのに参加になっていました。'.\x0a\x09].\x0a\x0a\x09html div style: 'font-size: 30px; padding-top: 15px;'; with:[\x0a\x09\x09html div with: [\x0a\x09\x09\x09html span css: 'font-weight' put: 'bold'; with: '『参加します』'.\x0a\x09\x09\x09html span with: '・・・そんな言葉は使う必要がねーんだ。'.\x0a\x09\x09].\x0a\x09\x09html div with: [\x0a\x09\x09\x09html span css: 'font-weight' put: 'bold'; with: '『参加することになっていた！』'.\x0a\x09\x09\x09html span with: 'なら言ってもいいッ！！'\x0a\x09\x09].\x0a\x09].\x0a\x0a\x09html div css: 'padding-top' put: '10px'; \x0a\x09\x09css: 'font-size' put: '16px';\x0a\x09\x09with: '※ このページはMBA 13inch + Firefox で確認しています。'.\x0a\x09[ LLorMLAdventPanel show ] valueWithTimeout: 5000",
messageSends: ["renderTitle:", "style:", "with:", "span", "href:", "target:", "a", "span:", "div", "css:put:", "valueWithTimeout:", "show"],
referencedClasses: ["LLorMLAdventPanel"]
}),
smalltalk.LLorMLAdventPage);

smalltalk.addMethod(
"_renderTitle_",
smalltalk.method({
selector: "renderTitle:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", [function () {smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_strong", [])]);return smalltalk.send($rec, "_with_", ["M"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["ake your page"]);}]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["on Amber Sma"]);(function ($rec) {smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_strong", [])]);return smalltalk.send($rec, "_with_", ["LL"]);}(smalltalk.send(html, "_span", [])));smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["ta"]);(function ($rec) {smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_strong", [])]);return smalltalk.send($rec, "_with_", ["L"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["k"]);}]);}]);
    return self;
},
args: ["html"],
source: "renderTitle: html\x0a\x09html h1: [\x0a\x09\x09html div with: [\x0a\x09\x09\x09html span |> self strong; with: 'M'.\x0a\x09\x09\x09html span with: 'ake your page'\x0a\x09\x09].\x0a\x09\x09html div with: [\x0a\x09\x09\x09html span with: 'on Amber Sma'.\x0a\x09\x09\x09html span |> self strong; with: 'LL'.\x0a\x09\x09\x09html span with: 'ta'.\x0a\x09\x09\x09html span |> self strong; with: 'L'.\x0a\x09\x09\x09html span with: 'k'\x0a\x09\x09]\x0a\x09]\x0a\x0a",
messageSends: ["h1:", "with:", "div", "|>", "strong", "span"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPage);

smalltalk.addMethod(
"_strong",
smalltalk.method({
selector: "strong",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_style_", ["color:red; font-size: 1.3em"]);};
    return self;
},
args: [],
source: "strong\x0a\x09^ [ %1 style: 'color:red; font-size: 1.3em' ]\x0a",
messageSends: ["style:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPage);



smalltalk.addClass('Links', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_link_url_description_",
smalltalk.method({
selector: "link:url:description:",
category: 'private',
fn: function (title, aUrl, aDescription) {
    var self = this;
    return [title, aUrl, aDescription];
    return self;
},
args: ["title", "aUrl", "aDescription"],
source: "link: title url: aUrl description: aDescription\x0a\x09^ { title. aUrl. aDescription }\x0a\x09\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.Links);

smalltalk.addMethod(
"_list",
smalltalk.method({
selector: "list",
category: 'link',
fn: function () {
    var self = this;
    return [smalltalk.send(self, "_link_url_description_", ["Amber Smalltalk", "http://amber-lang.net/", "Smalltalk\u306EJavascript\u5B9F\u88C5\u3002\u300CLearn\u300D\u304B\u3089Smalltalk\u306E\u52C9\u5F37\u304C\u59CB\u3081\u308C\u308B\u3002"]), smalltalk.send(self, "_link_url_description_", ["cog blog", "http://www.mirandabanda.org/cogblog", "\u9AD8\u901FSmalltalk VM\u306E\u5B9F\u88C5\u8AAC\u660E"]), smalltalk.send(self, "_link_url_description_", ["\u81EA\u7531\u81EA\u5728Squeak\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0 PDF\u7248\u30C9\u30E9\u30D5\u30C8", "http://www.box.com/s/bbc7kz53el13ktbxeed4", "\u6885\u6FA4\u3055\u3093\u306E\u672C\u304C\u6885\u6FA4\u3055\u3093\u306B\u3088\u308APDF\u5316\uFF01\uFF01\uFF01"]), smalltalk.send(self, "_link_url_description_", ["PEG.js", "http://pegjs.majda.cz/", "amber smalltalk \u306E\u30D1\u30FC\u30B5\u30FC\u306E\u5B9F\u88C5\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B"]), smalltalk.send(self, "_link_url_description_", ["CodeMirror", "http://codemirror.net/", "amber smtalltalk \u306E\u30A8\u30C7\u30A3\u30BF\u90E8\u5206\u306E\u5B9F\u88C5\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B"]), smalltalk.send(self, "_link_url_description_", ["Yengawa Blog", "http://blog.yengawa.com/", "Scratch + arduino \u306E\u5148\u99C6\u8005\u3002\u3059\u3067\u306BMake:Tokyo\u306B\u51FA\u5C55\u3057\u3066\u3044\u305F\u3002"]), smalltalk.send(self, "_link_url_description_", ["\u7B2C37\u56DE Smalltalk\u52C9\u5F37\u4F1A-\u6771\u4EAC UStream", "http://www.ustream.tv/recorded/18226602", "\u963F\u90E8\u3055\u3093\u306EScratch + Arduino\u306E\u30C7\u30E2"]), smalltalk.send(self, "_link_url_description_", ["ITPro \u7C21\u5358\u3060\u3051\u3069\u5965\u6DF1\u3044! Scratch\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u9B45\u529B", "http://itpro.nikkeibp.co.jp/article/COLUMN/20111019/371080/?ST=develop", "\u963F\u90E8\u3055\u3093\u306EScratch + Arduino\u306E\u8A18\u4E8B \u51685\u56DE"]), smalltalk.send(self, "_link_url_description_", ["A Smalltalk by the Seaside", "http://www.asmalltalkbytheseaside.com/", "Amber\u3067\u4F5C\u3089\u308C\u305F\u30B2\u30FC\u30E0\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u30B2\u30FC\u30E0\u306E\u30B5\u30F3\u30D7\u30EB"]), smalltalk.send(self, "_link_url_description_", ["cog blog - Under Cover Contexts and the Big Frame-Up", "http://www.mirandabanda.org/cogblog/2009/01/14/under-cover-contexts-and-the-big-frame-up/", "Context\u306E\u5B9F\u88C5\u306B\u3064\u3044\u3066\u306E\u8AAC\u660E"]), smalltalk.send(self, "_link_url_description_", ["Squeak\u3067\u306F\u3058\u3081\u308BSmalltalk\u5165\u9580\u30FB\u30A2\u30FC\u30AB\u30A4\u30D6", "http://squab.no-ip.com:8080/mosaren/", "MOSA\u767A\u884C\u306E\u30E1\u30FC\u30EB\u30DE\u30AC\u30B8\u30F3\u300CMOSA Developer News\u300D\u3001\u7565\u79F0\u201C\u30E2\u30B5\u4F1D\u201D\u3067 2007-04-17\u3000\u7B2C248\u53F7\u307E\u3067\u9023\u8F09\u3055\u308C\u305F\u3001\u300CSqueak\u3067\u306F\u3058\u3081\u308BSmalltalk\u5165\u9580\u300D\u306E\u30D0\u30C3\u30AF\u30CA\u30F3\u30D0\u30FC\u30FB\u30A2\u30FC\u30AB\u30A4\u30D6\u30DA\u30FC\u30B8\u3067\u3059\u3002\u57F7\u7B46\u6642\u70B9\u306E\u53E4\u3044\u60C5\u5831\u3084\u30EA\u30F3\u30AF\u3092\u542B\u3093\u3067\u3044\u308B\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]), smalltalk.send(self, "_link_url_description_", ["Scratch + Arduino", "http://www.yengawa.com/scratch_arduino", "Scratch \u304B\u3089 Arduino\u3092\u4F7F\u3046\u65B9\u6CD5"]), smalltalk.send(self, "_link_url_description_", ["scat", "http://code.google.com/p/scat/", "\u6A19\u6E96\u306EScratch\u306FIDE\u304C\u3057\u3087\u307C\u3044\u306E\u3067Pharo\u306BScrach\u3092\u5165\u308C\u308B\u3002"]), smalltalk.send(self, "_link_url_description_", ["cuis smalltalk", "http://www.jvuletich.org/Cuis/Index.html", "\u8EFD\u91CF\u306ASmalltalk\u30A4\u30E1\u30FC\u30B8\u3002\u52C9\u5F37\u7528"]), smalltalk.send(self, "_link_url_description_", ["Smalltalk\u306EHistoricalDocuments", "http://esug.org/data/HistoricalDocuments/", "\u8CB4\u91CD\u306A\u3082\u306E\u304C\u305F\u304F\u3055\u3093"])];
    return self;
},
args: [],
source: "list\x0a\x09^ {\x0a\x09\x09self \x0a\x09\x09\x09link: 'Amber Smalltalk'\x0a\x09\x09\x09url: 'http://amber-lang.net/'\x0a\x09\x09\x09description: 'SmalltalkのJavascript実装。「Learn」からSmalltalkの勉強が始めれる。'.\x0a\x09\x09self\x0a\x09\x09\x09link: 'cog blog'\x0a\x09\x09\x09url: 'http://www.mirandabanda.org/cogblog'\x0a\x09\x09\x09description: '高速Smalltalk VMの実装説明'.\x0a\x09\x09self\x0a\x09\x09\x09link: '自由自在Squeakプログラミング PDF版ドラフト'\x0a\x09\x09\x09url: 'http://www.box.com/s/bbc7kz53el13ktbxeed4'\x0a\x09\x09\x09description: '梅澤さんの本が梅澤さんによりPDF化！！！'.\x0a\x09\x09self\x09\x09\x09\x0a\x09\x09\x09link: 'PEG.js'\x0a\x09\x09\x09url: 'http://pegjs.majda.cz/'\x0a\x09\x09\x09description: 'amber smalltalk のパーサーの実装に使われている'.\x0a\x09\x09self\x09\x09\x09\x0a\x09\x09\x09link: 'CodeMirror'\x0a\x09\x09\x09url: 'http://codemirror.net/'\x0a\x09\x09\x09description: 'amber smtalltalk のエディタ部分の実装に使われている'.\x0a\x0a\x09\x09self\x09\x09\x09\x0a\x09\x09\x09link: 'Yengawa Blog'\x0a\x09\x09\x09url: 'http://blog.yengawa.com/'\x0a\x09\x09\x09description: 'Scratch + arduino の先駆者。すでにMake:Tokyoに出展していた。'.\x0a\x09\x09self\x09\x09\x09\x0a\x09\x09\x09link: '第37回 Smalltalk勉強会-東京 UStream'\x0a\x09\x09\x09url: 'http://www.ustream.tv/recorded/18226602'\x0a\x09\x09\x09description: '阿部さんのScratch + Arduinoのデモ'.\x0a\x09\x09self\x09\x09\x09\x0a\x09\x09\x09link: 'ITPro 簡単だけど奥深い! Scratchプログラミングの魅力'\x0a\x09\x09\x09url: 'http://itpro.nikkeibp.co.jp/article/COLUMN/20111019/371080/?ST=develop'\x0a\x09\x09\x09description: '阿部さんのScratch + Arduinoの記事 全5回'.\x0a\x09\x09self\x09\x09\x09\x0a\x09\x09\x09link: 'A Smalltalk by the Seaside'\x0a\x09\x09\x09url: 'http://www.asmalltalkbytheseaside.com/'\x0a\x09\x09\x09description: 'Amberで作られたゲームライブラリとゲームのサンプル'.\x0a\x09\x09self\x0a\x09\x09\x09link: 'cog blog - Under Cover Contexts and the Big Frame-Up'\x0a\x09\x09\x09url: 'http://www.mirandabanda.org/cogblog/2009/01/14/under-cover-contexts-and-the-big-frame-up/'\x0a\x09\x09\x09description: 'Contextの実装についての説明'.\x0a\x09\x09self\x0a\x09\x09\x09link: 'SqueakではじめるSmalltalk入門・アーカイブ'\x0a\x09\x09\x09url: 'http://squab.no-ip.com:8080/mosaren/'\x0a\x09\x09\x09description: 'MOSA発行のメールマガジン「MOSA Developer News」、略称“モサ伝”で 2007-04-17　第248号まで連載された、「SqueakではじめるSmalltalk入門」のバックナンバー・アーカイブページです。執筆時点の古い情報やリンクを含んでいるので注意してください。'.\x0a\x09\x09self\x0a\x09\x09\x09link: 'Scratch + Arduino'\x0a\x09\x09\x09url: 'http://www.yengawa.com/scratch_arduino'\x0a\x09\x09\x09description: 'Scratch から Arduinoを使う方法'.\x0a\x09\x09self\x0a\x09\x09\x09link: 'scat'\x0a\x09\x09\x09url: 'http://code.google.com/p/scat/'\x0a\x09\x09\x09description: '標準のScratchはIDEがしょぼいのでPharoにScrachを入れる。'.\x0a\x09\x09self\x0a\x09\x09\x09link: 'cuis smalltalk'\x0a\x09\x09\x09url: 'http://www.jvuletich.org/Cuis/Index.html'\x0a\x09\x09\x09description: '軽量なSmalltalkイメージ。勉強用'.\x0a\x09\x09self\x0a\x09\x09\x09link: 'SmalltalkのHistoricalDocuments'\x0a\x09\x09\x09url: 'http://esug.org/data/HistoricalDocuments/'\x0a\x09\x09\x09description: '貴重なものがたくさん'\x0a\x09}\x0a\x09\x09",
messageSends: ["link:url:description:"],
referencedClasses: []
}),
smalltalk.Links);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'private',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_title_", ["Links"]);smalltalk.send($rec, "_with_", [function (html) {return smalltalk.send(self, "_renderOn_", [html]);}]);return smalltalk.send($rec, "_width_", [600]);}(self));
    smalltalk.send(self, "_open", [], smalltalk.DialogBox);
    return self;
},
args: [],
source: "open\x0a\x09self title: 'Links'; with: [:html | self renderOn: html ]; width: 600.\x0a\x09super open.",
messageSends: ["title:", "with:", "renderOn:", "width:", "open"],
referencedClasses: []
}),
smalltalk.Links);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Links"]);
    smalltalk.send(smalltalk.send(html, "_tag_", ["dl"]), "_with_", [function () {return smalltalk.send(smalltalk.send(self, "_list", []), "_do_", [function (link) {smalltalk.send(smalltalk.send(html, "_tag_", ["dt"]), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_at_put_", ["target", "_blank"]);smalltalk.send($rec, "_href_", [smalltalk.send(link, "_at_", [2])]);return smalltalk.send($rec, "_with_", [smalltalk.send(link, "_at_", [1])]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(smalltalk.send(html, "_tag_", ["dd"]), "_with_", [smalltalk.send(link, "_at_", [3])]);}]);}]);
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09html h1: 'Links'.\x0a\x09(html tag: 'dl') with: [\x0a\x09\x09self list do: [ :link |\x0a\x09\x09\x09(html tag: 'dt') with: [ html a at: 'target' put: '_blank'; href: (link at: 2); with: (link at: 1) ].\x0a\x09\x09\x09(html tag: 'dd') with: (link at: 3)\x0a\x09\x09]\x0a\x09]\x0a",
messageSends: ["h1:", "with:", "tag:", "do:", "list", "at:put:", "href:", "at:", "a"],
referencedClasses: []
}),
smalltalk.Links);



smalltalk.addClass('RecommendedLinks', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_link_url_description_",
smalltalk.method({
selector: "link:url:description:",
category: 'private',
fn: function (title, aUrl, aDescription) {
    var self = this;
    return [title, aUrl, aDescription];
    return self;
},
args: ["title", "aUrl", "aDescription"],
source: "link: title url: aUrl description: aDescription\x0a\x09^ { title. aUrl. aDescription }\x0a\x09\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.RecommendedLinks);

smalltalk.addMethod(
"_list",
smalltalk.method({
selector: "list",
category: 'link',
fn: function () {
    var self = this;
    return [smalltalk.send(self, "_link_url_description_", ["Amber Smalltalk", "http://amber-lang.net/", "\u300CLearn\u300D\u304B\u3089Smalltalk\u306E\u6587\u6CD5\u306E\u52C9\u5F37\u304C\u59CB\u3081\u308C\u308B\u3002"]), smalltalk.send(self, "_link_url_description_", ["\u81EA\u7531\u81EA\u5728Squeak\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0 PDF\u7248", "http://www.box.com/s/bbc7kz53el13ktbxeed4", "\u6885\u6FA4\u3055\u3093\u306E\u672C\u304C\u6885\u6FA4\u3055\u3093\u306B\u3088\u308APDF\u5316\uFF01\uFF01\uFF01 "]), smalltalk.send(self, "_link_url_description_", ["A Smalltalk by the Seaside", "http://www.asmalltalkbytheseaside.com/", "Amber\u3067\u4F5C\u3089\u308C\u305F\u30B2\u30FC\u30E0\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u30B2\u30FC\u30E0\u306E\u30B5\u30F3\u30D7\u30EB"])];
    return self;
},
args: [],
source: "list\x0a\x09^ {\x0a\x09\x09self \x0a\x09\x09\x09link: 'Amber Smalltalk'\x0a\x09\x09\x09url: 'http://amber-lang.net/'\x0a\x09\x09\x09description: '「Learn」からSmalltalkの文法の勉強が始めれる。'.\x0a\x09\x09self\x0a\x09\x09\x09link: '自由自在Squeakプログラミング PDF版'\x0a\x09\x09\x09url: 'http://www.box.com/s/bbc7kz53el13ktbxeed4'\x0a\x09\x09\x09description: '梅澤さんの本が梅澤さんによりPDF化！！！ '.\x0a\x09\x09self\x09\x09\x09\x0a\x09\x09\x09link: 'A Smalltalk by the Seaside'\x0a\x09\x09\x09url: 'http://www.asmalltalkbytheseaside.com/'\x0a\x09\x09\x09description: 'Amberで作られたゲームライブラリとゲームのサンプル'\x0a\x09}\x0a\x09\x09",
messageSends: ["link:url:description:"],
referencedClasses: []
}),
smalltalk.RecommendedLinks);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'private',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_title_", ["Links"]);smalltalk.send($rec, "_with_", [function (html) {return smalltalk.send(self, "_renderOn_", [html]);}]);return smalltalk.send($rec, "_width_", [600]);}(self));
    smalltalk.send(self, "_open", [], smalltalk.RecomendedLinks.superclass || nil);
    return self;
},
args: [],
source: "open\x0a\x09self title: 'Links'; with: [:html | self renderOn: html ]; width: 600.\x0a\x09super open.",
messageSends: ["title:", "with:", "renderOn:", "width:", "open"],
referencedClasses: []
}),
smalltalk.RecommendedLinks);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'rendering',
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["\u304A\u3059\u3059\u3081\u30EA\u30F3\u30AF"]);
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "2em"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(self, "_list", []), "_do_", [function (link) {smalltalk.send(smalltalk.send(html, "_tag_", ["dt"]), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_at_put_", ["target", "_blank"]);smalltalk.send($rec, "_href_", [smalltalk.send(link, "_at_", [2])]);return smalltalk.send($rec, "_with_", [smalltalk.send(link, "_at_", [1])]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(smalltalk.send(html, "_tag_", ["dd"]), "_with_", [smalltalk.send(link, "_at_", [3])]);}]);}]);}(smalltalk.send(html, "_tag_", ["dl"])));
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09html h1: 'おすすめリンク'.\x0a\x09(html tag: 'dl') css: 'font-size' put: '2em'; with: [\x0a\x09\x09self list do: [ :link |\x0a\x09\x09\x09(html tag: 'dt') with: [ html a at: 'target' put: '_blank'; href: (link at: 2); with: (link at: 1) ].\x0a\x09\x09\x09(html tag: 'dd') with: (link at: 3)\x0a\x09\x09]\x0a\x09]\x0a",
messageSends: ["h1:", "css:put:", "with:", "do:", "list", "tag:", "at:put:", "href:", "at:", "a"],
referencedClasses: []
}),
smalltalk.RecommendedLinks);



smalltalk.addClass('TimeSchedulePage', smalltalk.Page, ['sessionPlace', 'sessions', 'index'], 'DyNagoya');
smalltalk.addMethod(
"_asCode",
smalltalk.method({
selector: "asCode",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(self['@sessions'], "_inject_into_", ["grammer Sessions:list > sessions", function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(smalltalk.send(thisisplaceholder1, "__comma", ["\n"]), "__comma", [smalltalk.send(thisisplaceholder2, "_asCode", [])]);}]);
    return self;
},
args: [],
source: "asCode\x0a\x09^ sessions inject: 'grammer Sessions:list > sessions'\x0a\x09\x09into: [ %1, '\x0a', %2 asCode]",
messageSends: ["inject:into:", ",", "asCode"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_calcTime",
smalltalk.method({
selector: "calcTime",
category: 'not yet classified',
fn: function () {
    var self = this;
    var current = nil;
    current = smalltalk.send(typeof moment == "undefined" ? nil : moment, "_value_value_", [smalltalk.send(self, "_start", []), "HH:mm"]);
    smalltalk.send(self['@sessions'], "_do_", [function (session) {return current = smalltalk.send(session, "_update_", [current]);}]);
    smalltalk.send(smalltalk.Mod || Mod, "_class_source_", [smalltalk.send(self, "_class", []), smalltalk.send(self, "_asCode", [])]);
    return self;
},
args: [],
source: "calcTime\x0a\x09| current |\x0a\x09current := moment value: self start value: 'HH:mm'.\x0a\x09sessions do: [ :session |\x0a\x09\x09current := session update: current\x0a\x09].\x0a\x09Mod class: self class source: (self asCode)",
messageSends: ["value:value:", "start", "do:", "update:", "class:source:", "class", "asCode"],
referencedClasses: ["Mod"]
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = self['@index']) == nil || $receiver == undefined ? function () {return self['@index'] = 1;}() : $receiver;
    return smalltalk.send(self['@sessions'], "_at_", [self['@index']]);
    return self;
},
args: [],
source: "current\x0a\x09index ifNil: [ index := 1].\x0a\x09^ sessions at: index",
messageSends: ["ifNil:", "at:"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_done_",
smalltalk.method({
selector: "done:",
category: 'not yet classified',
fn: function (now) {
    var self = this;
    var $early = {};
    try {
        var prev = nil;
        prev = smalltalk.send(self, "_current", []);
        self['@index'] = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);
        ($receiver = smalltalk.send(prev, "_done", [])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(prev, "_setEnd_", [now]);smalltalk.send(self, "_calcTime", []);return function () {throw $early = [prev];}();}() : function () {return function () {throw $early = [smalltalk.send(self, "_done_", [now])];}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {smalltalk.send(prev, "_setEnd_", [now]);smalltalk.send(self, "_calcTime", []);return function () {throw $early = [prev];}();}, function () {return function () {throw $early = [smalltalk.send(self, "_done_", [now])];}();}]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["now"],
source: "done: now\x0a\x09| prev |\x0a\x09prev := self current.\x0a\x09index := index + 1.\x0a\x09prev done ifTrue: [\x0a\x09\x09prev setEnd: now.\x0a\x09\x09self  calcTime.\x0a\x09\x09^ prev\x0a\x09] ifFalse: [\x0a\x09\x09^ self done: now\x0a\x09]",
messageSends: ["current", "+", "ifTrue:ifFalse:", "done", "setEnd:", "calcTime", "done:"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_drawSessions",
smalltalk.method({
selector: "drawSessions",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@sessionPlace'], "_contents_", [function (html) {var div = nil;div = smalltalk.send(html, "_div", []);return smalltalk.send(self['@sessions'], "_do_", [function (thisisplaceholder1) {return smalltalk.send(div, "_with_", [thisisplaceholder1]);}]);}]);
    return self;
},
args: [],
source: "drawSessions\x0a\x09sessionPlace contents: [ :html || div |\x0a\x09\x09div := html div.\x0a\x09\x09sessions do: [ div with: %1 ]\x0a\x09]",
messageSends: ["contents:", "div", "do:", "with:"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_end",
smalltalk.method({
selector: "end",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "end",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_evaluate_",
smalltalk.method({
selector: "evaluate:",
category: 'not yet classified',
fn: function (code) {
    var self = this;
    self['@sessions'] = smalltalk.Wakame.fn.prototype._Sessions().matchAll(code, "list");
    smalltalk.send(self, "_drawSessions", []);
    smalltalk.send(self, "_calcTime", []);
    return self;
},
args: ["code"],
source: "evaluate: code\x0a\x09sessions :=(< smalltalk.Wakame.fn.prototype._Sessions().matchAll(code, \x22list\x22)>).\x0a\x09self drawSessions.\x0a\x09self calcTime\x0a",
messageSends: ["drawSessions", "calcTime"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@sessions'] = smalltalk.send(self, "_sessions", []);
    self['@index'] = 1;
    return self;
},
args: [],
source: "initialize\x0a\x09sessions := self sessions.\x0a\x09index := 1",
messageSends: ["sessions"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(self, "_title_", [html]);
    self['@sessionPlace'] = smalltalk.send(html, "_div", []);
    smalltalk.send(self, "_drawSessions", []);
    (function ($rec) {smalltalk.send($rec, "_with_", ["[Edit]"]);smalltalk.send($rec, "_css_put_", ["cursor", "pointer"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.ScheduleEditor || ScheduleEditor, "_open_", [smalltalk.send(self, "_class", [])]);}]);}(smalltalk.send(html, "_a", [])));
    smalltalk.send(self, "_calcTime", []);
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09self title: html.\x0a\x09sessionPlace := html div.\x0a\x09self drawSessions.\x0a\x09html a with: '[Edit]'; css: 'cursor' put:'pointer';\x0a\x09\x09onClick: [ ScheduleEditor open: self class].\x0a\x09self calcTime",
messageSends: ["title:", "div", "drawSessions", "with:", "css:put:", "onClick:", "open:", "class", "a", "calcTime"],
referencedClasses: ["ScheduleEditor"]
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_sessions",
smalltalk.method({
selector: "sessions",
category: 'not yet classified',
fn: function () {
    var self = this;
    return [];
    return self;
},
args: [],
source: "sessions\x0a\x09^ {}\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_methodDictionary", []), "_at_", ["sessions"]), "_source", []), "_lines", []), "_allButFirst", []), "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(thisisplaceholder1, "_allButFirst", []), "_inject_into_", [smalltalk.send(thisisplaceholder1, "_first", []), function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(smalltalk.send(thisisplaceholder1, "__comma", ["\n"]), "__comma", [thisisplaceholder2]);}]);}]);
    return self;
},
args: [],
source: "source\x0a\x09^ (self class \x0a\x09\x09methodDictionary at: 'sessions') \x0a\x09source lines allButFirst\x0a\x09|> [ (%1 allButFirst) inject: %1 first into: [ %1, '\x0a', %2]]",
messageSends: ["|>", "allButFirst", "lines", "source", "at:", "methodDictionary", "class", "inject:into:", "first", ","],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "start",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    return "";
    return self;
},
args: ["html"],
source: "title: html\x0a\x09^ ''\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimeSchedulePage);


smalltalk.TimeSchedulePage.klass.iVarNames = ['s'];
smalltalk.addMethod(
"_adjust_",
smalltalk.method({
selector: "adjust:",
category: 'not yet classified',
fn: function (aTime) {
    var self = this;
    var c = nil;
    var min = nil;
    var h = nil;
    var m = nil;
    min = Math.ceil((aTime.hours() * 60 + aTime.minutes() - 2) / 5) * 5;
    h = Math.floor(min / 60);
    m = Math.floor(min % 60);
    return moment([0]).hours(h).minutes(m);
    return self;
},
args: ["aTime"],
source: "adjust: aTime\x0a\x09| c min h m |\x0a\x09min := (<Math.ceil((aTime.hours()*60 + aTime.minutes() - 2) / 5) * 5>).\x0a\x09h := (<Math.floor(min / 60)>).\x0a\x09m := (<Math.floor(min % 60)>).\x0a\x09^ (< moment([0]).hours(h).minutes(m) >)",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimeSchedulePage.klass);

smalltalk.addMethod(
"_done",
smalltalk.method({
selector: "done",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_done_", [smalltalk.send(smalltalk.TimeSchedulePage || TimeSchedulePage, "_now", [])]);
    return self;
},
args: [],
source: "done\x0a\x09^ self new done: TimeSchedulePage now",
messageSends: ["done:", "new", "now"],
referencedClasses: ["TimeSchedulePage"]
}),
smalltalk.TimeSchedulePage.klass);

smalltalk.addMethod(
"_done_",
smalltalk.method({
selector: "done:",
category: 'not yet classified',
fn: function (aTimeString) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_done_", [smalltalk.send(typeof moment == "undefined" ? nil : moment, "_value_value_", [aTimeString, "HH:mm"])]);
    return self;
},
args: ["aTimeString"],
source: "done: aTimeString\x0a\x09^ self new done: (moment value: aTimeString value: 'HH:mm')",
messageSends: ["done:", "new", "value:value:"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage.klass);

smalltalk.addMethod(
"_isOrdered_and_",
smalltalk.method({
selector: "isOrdered:and:",
category: 'not yet classified',
fn: function (a, b) {
    var self = this;
    return ($receiver = smalltalk.send(a, "_diff_", [b])).klass === smalltalk.Number ? $receiver < 0 : smalltalk.send($receiver, "__lt", [0]);
    return self;
},
args: ["a", "b"],
source: "isOrdered: a and: b\x0a\x09^ (a diff: b) < 0",
messageSends: ["<", "diff:"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = self['@s']) == nil || $receiver == undefined ? function () {return self['@s'] = smalltalk.send(self, "_new", [], smalltalk.TimeSchedulePage.klass.superclass || nil);}() : $receiver;
    return self['@s'];
    return self;
},
args: [],
source: "new\x0a\x09s ifNil: [ s := super new ].\x0a\x09^ s",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage.klass);

smalltalk.addMethod(
"_now",
smalltalk.method({
selector: "now",
category: 'not yet classified',
fn: function () {
    var self = this;
    var c = nil;
    c = smalltalk.send(typeof moment == "undefined" ? nil : moment, "_value", []);
    return moment([0]).hours(c.hours()).minutes(c.minutes());
    return self;
},
args: [],
source: "now\x0a\x09| c |\x0a\x09c := moment value.\x0a\x09^ (< moment([0]).hours(c.hours()).minutes(c.minutes()) >)",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.TimeSchedulePage.klass);


smalltalk.addClass('Wakame', smalltalk.TimeSchedulePage, [], 'DyNagoya');
smalltalk.addMethod(
"_Sessions",
smalltalk.method({
selector: "Sessions",
category: 'not yet classified',
fn: function () {
    if (typeof Sessions === "undefined" || Sessions == null) {
        Sessions = objectThatDelegatesTo(OMeta, {fromTo: function () {var $elf = this, _fromIdx = this.input.idx, from, to, body;return function () {from = this._apply("anything");to = this._apply("anything");this._applyWithArgs("seq", from);body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._applyWithArgs("seq", to);});return this._apply("char");}.call(this);});});this._applyWithArgs("seq", to);return body;}.call(this);}, eol: function () {var $elf = this, _fromIdx = this.input.idx, body;return function () {body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._apply("cr");});return this._apply("char");}.call(this);});});this._or(function () {return this._apply("cr");}, function () {return this._apply("empty");});return body;}.call(this);}, cr: function () {var $elf = this, _fromIdx = this.input.idx, r;return function () {r = this._apply("char");return this._pred(r.charCodeAt(0) == 10);}.call(this);}, number: function () {var $elf = this, _fromIdx = this.input.idx, x;return function () {x = this._consumedBy(function () {return this._many1(function () {return this._apply("digit");});});return parseInt(x);}.call(this);}, list: function () {var $elf = this, _fromIdx = this.input.idx, s;return this._many(function () {return function () {s = this._apply("session");this._apply("eol");return s;}.call(this);});}, session: function () {var $elf = this, _fromIdx = this.input.idx;return this._or(function () {return this._apply("withMinutes");}, function () {return this._apply("withoutMinutes");});}, withMinutes: function () {var $elf = this, _fromIdx = this.input.idx, session, long, done;return function () {session = this._or(function () {return this._apply("other");}, function () {return this._apply("rest");}, function () {return this._apply("talk");});this._apply("spaces");this._applyWithArgs("exactly", ":");this._apply("spaces");long = this._apply("number");this._applyWithArgs("token", "min");done = this._opt(function () {return this._applyWithArgs("token", "!");});return session._long_(long)._isDone_(done == "!");}.call(this);}, withoutMinutes: function () {var $elf = this, _fromIdx = this.input.idx, session, done;return function () {session = this._apply("buffer");done = this._opt(function () {return this._applyWithArgs("token", "!");});return session._isDone_(done == "!");}.call(this);}, other: function () {var $elf = this, _fromIdx = this.input.idx, title;return function () {title = this._applyWithArgs("fromTo", "\u301C", "\u301C");return smalltalk.OtherSession._new()._title_(title);}.call(this);}, talk: function () {var $elf = this, _fromIdx = this.input.idx, title, speaker;return function () {title = this._applyWithArgs("fromTo", "", "[");speaker = this._applyWithArgs("fromTo", "", "]");return smalltalk.TalkSession._new()._title_(title)._speaker_(speaker);}.call(this);}, rest: function () {var $elf = this, _fromIdx = this.input.idx;return function () {this._applyWithArgs("token", "\u4F11\u61A9");return smalltalk.RestSession._new();}.call(this);}, buffer: function () {var $elf = this, _fromIdx = this.input.idx, deadline;return function () {deadline = this._applyWithArgs("fromTo", "\u30D0\u30C3\u30D5\u30A1(", "\u307E\u3067)");return smalltalk.BufferSession._new()._deadline_(deadline);}.call(this);}});
    }
    return Sessions;
},
args: [],
source: "ometa Sessions {\x0a  fromTo :from :to = seq(from) <( ~seq(to) char )*>:body seq(to) -> body,\x0a  eol = <( ~cr char )*>:body (cr | empty) -> body,\x0a  cr = char:r ?{r.charCodeAt(0) == 10},\x0a  number = <digit+>:x -> parseInt(x),\x0a  list = (session:s eol -> s)*,\x0a  session = withMinutes | withoutMinutes,\x0a  withMinutes = ( other | rest | talk ):session spaces ':' spaces number: long \x22min\x22 \x22!\x22?:done \x0a\x09-> session._long_(long)._isDone_(done == \x22!\x22),\x0a  withoutMinutes = buffer:session \x22!\x22?:done -> session._isDone_(done == \x22!\x22),\x0a  other = fromTo('〜',  '〜'): title -> smalltalk.OtherSession._new()._title_(title),\x0a  talk = fromTo('', '['): title fromTo('', ']'): speaker -> smalltalk.TalkSession._new()._title_(title)._speaker_(speaker),\x0a  rest = \x22休憩\x22 -> smalltalk.RestSession._new(),\x0a  buffer = fromTo(\x22バッファ(\x22, \x22まで)\x22):deadline -> smalltalk.BufferSession._new()._deadline_(deadline)\x0a}",
messageSends: [],
referencedClasses: []
}),
smalltalk.Wakame);

smalltalk.addMethod(
"_end",
smalltalk.method({
selector: "end",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "18:00";
    return self;
},
args: [],
source: "end\x0a\x09^ '18:00'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Wakame);

smalltalk.addMethod(
"_sessions",
smalltalk.method({
selector: "sessions",
category: 'accessing',
fn: function () {
    return this._Sessions().matchAll("\u301C\u30BF\u30A4\u30E0\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u6C7A\u3081\u308B\u301C : 15min\n\u30E2\u30CA\u30E2\u30CA\u3044\u3046\u30E2\u30CA\u30C9\u5165\u9580[@hiratara] : 105min\n\u4F11\u61A9 : 15min\nCoq\u306B\u3088\u308BMaybe\u30E2\u30CA\u30C9\u3092\u8A3C\u660E(+ Coq\u5165\u9580)[@mzp] : 30min\n\u4F11\u61A9 : 5min\nCoq\u306B\u3088\u308BKleisli\u69CB\u6210\u306E\u8AAC\u660E[@t6s] : 40min\n\u4F11\u61A9 : 5min\n\u30E2\u30C3\u30B8\u3068\u30EF\u30C9\u30E9\u30FC\u3068Strong Monad\u3068Free\u30E2\u30CA\u30C9[@t6s] : 30min\n\u4F11\u61A9 : 5min\n\u4F59\u30E2\u30CA\u30C9[@uskz] : 50min\n\u30D0\u30C3\u30D5\u30A1(18:20\u307E\u3067)\n\u301C \u61C7\u89AA\u4F1A\uFF08\u30D3\u30A2\u30D0\u30C3\u30B7\u30E5\uFF09 \u301C : 130min", "list");
},
args: [],
source: "grammer Sessions:list > sessions\x0a〜タイムスケジュールを決める〜 : 15min\x0aモナモナいうモナド入門[@hiratara] : 105min\x0a休憩 : 15min\x0aCoqによるMaybeモナドを証明(+ Coq入門)[@mzp] : 30min\x0a休憩 : 5min\x0aCoqによるKleisli構成の説明[@t6s] : 40min\x0a休憩 : 5min\x0aモッジとワドラーとStrong MonadとFreeモナド[@t6s] : 30min\x0a休憩 : 5min\x0a余モナド[@uskz] : 50min\x0aバッファ(18:20まで)\x0a〜 懇親会（ビアバッシュ） 〜 : 130min",
messageSends: [],
referencedClasses: []
}),
smalltalk.Wakame);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "13:00";
    return self;
},
args: [],
source: "start\x0a\x09^ '13:00'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Wakame);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["\u308F\u304B\u3081\u306E\u30E2\u30CA\u30C9\u6D78\u3057"]);return function ($rec) {smalltalk.send($rec, "_with_", [" - \u57FA\u790E\u30BB\u30C3\u30B7\u30E7\u30F3 -"]);return smalltalk.send($rec, "_css_put_", ["font-size", "36px"]);}(smalltalk.send(html, "_span", []));}]);
    return self;
},
args: ["html"],
source: "title: html\x0a\x09html h1 with:[\x0a\x09\x09html span with: 'わかめのモナド浸し'.\x0a\x09\x09html span with: ' - 基礎セッション -'; css: 'font-size' put: '36px'\x0a\x09]",
messageSends: ["with:", "h1", "span", "css:put:"],
referencedClasses: []
}),
smalltalk.Wakame);



smalltalk.addClass('TopPage', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Dolphin || Dolphin, "_new", [])]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Board || Board, "_new", [])]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Logo || Logo, "_new", [])]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.HowToJoin || HowToJoin, "_new", [])]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09\x09html div \x0a\x09\x09\x09with: Dolphin new;\x0a\x09\x09\x09with: Board new;\x0a\x09\x09\x09with: Logo new;\x0a\x09\x09\x09with: HowToJoin new",
messageSends: ["with:", "new", "div"],
referencedClasses: ["Dolphin", "Board", "Logo", "HowToJoin"]
}),
smalltalk.TopPage);



smalltalk.addClass('Panel', smalltalk.Widget, [], 'DyNagoya');
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
source: "renderBodyOn: html\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Panel);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", ["position:fixed; font-size: 24px; right:0; padding: 3px;z-index:1;"]);return smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_style", [])]);}(smalltalk.send(html, "_root", [])));
    smalltalk.send(self, "_renderBodyOn_", [html]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html root \x0a\x09\x09style: 'position:fixed; font-size: 24px; right:0; padding: 3px;z-index:1;';\x0a\x09\x09|> self style.\x0a\x09self renderBodyOn: html.\x0a\x0a\x09",
messageSends: ["style:", "|>", "style", "root", "renderBodyOn:"],
referencedClasses: []
}),
smalltalk.Panel);

smalltalk.addMethod(
"_style",
smalltalk.method({
selector: "style",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (tag) {return nil;};
    return self;
},
args: [],
source: "style\x0a\x09^ [ :tag |\x09]",
messageSends: [],
referencedClasses: []
}),
smalltalk.Panel);


smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_updateToJQuery_", [smalltalk.send("#panel", "_asJQuery", [])]);}]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "show\x0a\x09^ self new \x0a\x09|> [ %1 updateToJQuery: '#panel' asJQuery]; \x0a\x09yourself",
messageSends: ["|>", "updateToJQuery:", "asJQuery", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Panel.klass);


smalltalk.addClass('GuidePanel', smalltalk.Panel, ['index', 'body', 'navi'], 'DyNagoya');
smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@body'], "_contents_", [smalltalk.send(smalltalk.send(self, "_pages", []), "_at_", [self['@index']])]);
    smalltalk.send(self['@navi'], "_contents_", [function (html) {(function ($rec) {smalltalk.send($rec, "_css_put_", ["width", "100%"]);smalltalk.send($rec, "_css_put_", ["margin", "3px"]);smalltalk.send($rec, "_css_put_", ["border-bottom", "1px solid rgba(0,0,0,.2)"]);return smalltalk.send($rec, "_css_put_", ["box-shadow", "rgba(255,255,255,.3) 0 1px 0"]);}(smalltalk.send(html, "_div", [])));return function ($rec) {smalltalk.send($rec, "_css_put_", ["position", "relative"]);return smalltalk.send($rec, "_with_", [function () {($receiver = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1])).klass === smalltalk.Boolean ? $receiver ? function () {return function ($rec) {smalltalk.send($rec, "_with_", ["prev"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_prev", []);}]);smalltalk.send($rec, "_css_put_", ["cursor", "pointer"]);smalltalk.send($rec, "_css_put_", ["left", "0"]);return smalltalk.send($rec, "_css_put_", ["position", "absolute"]);}(smalltalk.send(html, "_span", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function ($rec) {smalltalk.send($rec, "_with_", ["prev"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_prev", []);}]);smalltalk.send($rec, "_css_put_", ["cursor", "pointer"]);smalltalk.send($rec, "_css_put_", ["left", "0"]);return smalltalk.send($rec, "_css_put_", ["position", "absolute"]);}(smalltalk.send(html, "_span", []));}]);return ($receiver = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(self, "_pages", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self, "_pages", []), "_size", [])])).klass === smalltalk.Boolean ? $receiver ? function () {return function ($rec) {smalltalk.send($rec, "_with_", ["next"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_next", []);}]);smalltalk.send($rec, "_css_put_", ["cursor", "pointer"]);smalltalk.send($rec, "_css_put_", ["right", "0"]);return smalltalk.send($rec, "_css_put_", ["position", "absolute"]);}(smalltalk.send(html, "_span", []));}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function ($rec) {smalltalk.send($rec, "_with_", ["next"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_next", []);}]);smalltalk.send($rec, "_css_put_", ["cursor", "pointer"]);smalltalk.send($rec, "_css_put_", ["right", "0"]);return smalltalk.send($rec, "_css_put_", ["position", "absolute"]);}(smalltalk.send(html, "_span", []));}]);}]);}(smalltalk.send(html, "_div", []));}]);
    return self;
},
args: [],
source: "draw\x0a\x09body contents: (self pages at: index).\x0a\x09navi contents: [:html |\x0a\x09\x09html div css: 'width' put: '100%';\x0a\x09\x09\x09css: 'margin' put: '3px';\x0a\x09\x09\x09css: 'border-bottom' put: '1px solid rgba(0,0,0,.2)';\x0a\x09\x09\x09css: 'box-shadow' put: 'rgba(255,255,255,.3) 0 1px 0'.\x0a\x0a\x09\x09html div css: 'position' put: 'relative'; with: [\x0a\x09\x09\x09index > 1 ifTrue: [\x0a\x09\x09\x09\x09html span with: 'prev'; onClick: [self prev]; \x0a\x09\x09\x09\x09\x09css: 'cursor' put: 'pointer';\x0a\x09\x09\x09\x09\x09css: 'left' put: '0'; css: 'position' put: 'absolute'.\x0a\x09\x09\x09].\x0a\x09\x09\x09index < (self pages size) ifTrue: [\x0a\x09\x09\x09\x09html span with: 'next'; onClick: [self next]; \x0a\x09\x09\x09\x09\x09css: 'cursor' put: 'pointer';\x0a\x09\x09\x09\x09\x09css: 'right' put: '0'; css: 'position' put: 'absolute'\x0a\x09\x09\x09]\x0a\x09\x09]\x0a\x09]",
messageSends: ["contents:", "at:", "pages", "css:put:", "div", "with:", "ifTrue:", ">", "onClick:", "prev", "span", "<", "size", "next"],
referencedClasses: []
}),
smalltalk.GuidePanel);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@index'] = 1;
    return self;
},
args: [],
source: "initialize\x0a\x09index := 1",
messageSends: [],
referencedClasses: []
}),
smalltalk.GuidePanel);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver < smalltalk.send(smalltalk.send(self, "_pages", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self, "_pages", []), "_size", [])])).klass === smalltalk.Boolean ? $receiver ? function () {self['@index'] = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return smalltalk.send(self, "_draw", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@index'] = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return smalltalk.send(self, "_draw", []);}]);
    return self;
},
args: [],
source: "next\x0a\x09index < (self pages size) ifTrue:[\x0a\x09\x09index := index + 1.\x0a\x09\x09self draw.\x0a\x09]",
messageSends: ["ifTrue:", "<", "size", "pages", "+", "draw"],
referencedClasses: []
}),
smalltalk.GuidePanel);

smalltalk.addMethod(
"_pages",
smalltalk.method({
selector: "pages",
category: 'not yet classified',
fn: function () {
    var self = this;
    return [];
    return self;
},
args: [],
source: "pages\x0a\x09^ {}",
messageSends: [],
referencedClasses: []
}),
smalltalk.GuidePanel);

smalltalk.addMethod(
"_prev",
smalltalk.method({
selector: "prev",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver > 1 : smalltalk.send($receiver, "__gt", [1])).klass === smalltalk.Boolean ? $receiver ? function () {self['@index'] = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);return smalltalk.send(self, "_draw", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {self['@index'] = ($receiver = self['@index']).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]);return smalltalk.send(self, "_draw", []);}]);
    return self;
},
args: [],
source: "prev\x0a\x09index > 1 ifTrue:[\x0a\x09\x09index := index - 1.\x0a\x09\x09self draw.\x0a\x09]",
messageSends: ["ifTrue:", ">", "-", "draw"],
referencedClasses: []
}),
smalltalk.GuidePanel);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    var div = nil;
    div = smalltalk.send(html, "_div", []);
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "#b0430b"]);smalltalk.send($rec, "_class_", ["animated"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["width", "500px"]);smalltalk.send($rec, "_css_put_", ["z-index", "1"]);smalltalk.send($rec, "_css_put_", ["padding", "10px"]);return smalltalk.send($rec, "_with_", [function () {self['@body'] = smalltalk.send(html, "_div", []);return self['@navi'] = smalltalk.send(smalltalk.send(html, "_div", []), "_css_put_", ["height", "20px"]);}]);}(div));
    smalltalk.send(self, "_draw", []);
    smalltalk.send(function () {return smalltalk.send(div, "_toggleClass_", ["fadeInUp"]);}, "_valueWithTimeout_", [0]);
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09| div |\x0a\x09div := html div.\x0a\x09div css: 'background' put: '#b0430b';\x0a\x09\x09class: 'animated';\x0a\x09\x09css: 'color' put: 'white';\x0a\x09\x09css: 'width' put: '500px'; \x0a\x09\x09css: 'z-index' put: '1';\x0a\x09\x09css: 'padding' put: '10px'; with:[\x0a\x09\x09body := html div. \x0a\x09\x09navi := html div css: 'height' put: '20px'.\x0a\x09].\x0a\x09self draw.\x0a\x0a\x09[ div toggleClass: 'fadeInUp'] valueWithTimeout: 0",
messageSends: ["div", "css:put:", "class:", "with:", "draw", "valueWithTimeout:", "toggleClass:"],
referencedClasses: []
}),
smalltalk.GuidePanel);

smalltalk.addMethod(
"_style",
smalltalk.method({
selector: "style",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (tag) {return smalltalk.send(tag, "_css_put_", ["font-size", "18px"]);};
    return self;
},
args: [],
source: "style\x0a\x09^ [ :tag |\x0a\x09\x09tag css: 'font-size' put: '18px'\x0a\x09]",
messageSends: ["css:put:"],
referencedClasses: []
}),
smalltalk.GuidePanel);



smalltalk.addClass('LLorMLAdventPanel', smalltalk.GuidePanel, [], 'DyNagoya');
smalltalk.addMethod(
"_Page",
smalltalk.method({
selector: "Page",
category: 'not yet classified',
fn: function () {
    if (typeof Page === "undefined" || Page == null) {
        Page = objectThatDelegatesTo(OMeta, {html: function () {var $elf = this, _fromIdx = this.input.idx, body;return this._many(function () {return function () {body = this._apply("sentence");return console.log("a" + body);}.call(this);});}, sentence: function () {var $elf = this, _fromIdx = this.input.idx, body;return function () {body = this._apply("eol");return function () {console.log("b" + body);return body;}.call(this);}.call(this);}, eol: function () {var $elf = this, _fromIdx = this.input.idx, body;return function () {body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._apply("cr");});return this._apply("char");}.call(this);});});this._or(function () {return this._apply("cr");}, function () {return this._apply("empty");});return body;}.call(this);}, cr: function () {var $elf = this, _fromIdx = this.input.idx, r;return function () {r = this._apply("char");return this._pred(r.charCodeAt(0) == 10);}.call(this);}});
    }
    return Page;
},
args: [],
source: "ometa Page {\x0a  html = (sentence: body -> console.log(\x22a\x22+body))* ,\x0a  sentence = eol:body -> { console.log(\x22b\x22+body);return body},\x0a  eol = <( ~cr char )*>:body (cr | empty) -> body,\x0a  cr = char:r ?{r.charCodeAt(0) == 10}\x0a}",
messageSends: [],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_code_",
smalltalk.method({
selector: "code:",
category: 'not yet classified',
fn: function (block) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", [smalltalk.send(self, "_codeStyle", [])]);return smalltalk.send($rec, "_with_", [block]);}(smalltalk.send(typeof html == "undefined" ? nil : html, "_div", [])));
    return self;
},
args: ["block"],
source: "code: block\x0a  html div style: self codeStyle; with: block.",
messageSends: ["style:", "codeStyle", "with:", "div"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_codeOn_with_",
smalltalk.method({
selector: "codeOn:with:",
category: 'not yet classified',
fn: function (html, str) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [str]);
    return self;
},
args: ["html", "str"],
source: "codeOn: html with:str\x0a\x22  WorkspaceDialog new print: (str, '\x0a').\x22\x0a  html div with: str",
messageSends: ["with:", "div"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_codeStyle",
smalltalk.method({
selector: "codeStyle",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "background: #341029; padding-left: 5px; opacity:0.9; font-size: 16px;";
    return self;
},
args: [],
source: "codeStyle\x0a  ^ 'background: #341029; padding-left: 5px; opacity:0.9; font-size: 16px;'",
messageSends: [],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_codes_on_",
smalltalk.method({
selector: "codes:on:",
category: 'not yet classified',
fn: function (block, html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", [smalltalk.send(self, "_codeStyle", [])]);return smalltalk.send($rec, "_with_", [block]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["block", "html"],
source: "codes: block on: html\x0a  html div style: self codeStyle; with: block.",
messageSends: ["style:", "codeStyle", "with:", "div"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_l_with_",
smalltalk.method({
selector: "l:with:",
category: 'not yet classified',
fn: function (html, aString) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [aString]);
    return self;
},
args: ["html", "aString"],
source: "l: html with: aString\x0a  html div with: aString",
messageSends: ["with:", "div"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_p_with_",
smalltalk.method({
selector: "p:with:",
category: 'not yet classified',
fn: function (html, block) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [block]);
    return self;
},
args: ["html", "block"],
source: "p: html with: block\x0a  html div with: block",
messageSends: ["with:", "div"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page1",
smalltalk.method({
selector: "page1",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_p_with_", [html, function () {smalltalk.send(self, "_s_with_", [html, "\u3053\u306E\u30DA\u30FC\u30B8\u306FAmber Smalltalk\u3068\u3044\u3046Javascript\u3067\u5B9F\u88C5\u3055\u308C\u305FSmalltalk\u51E6\u7406\u7CFB\u4E0A\u3067\u52D5\u4F5C\u3057\u3066\u3044\u307E\u3059\u3002"]);return smalltalk.send(self, "_s_with_", [html, "\u53F3\u4E0B\u306E\u300CWorkspace\u300D\u3068\u3044\u3046\u30A6\u30A3\u30F3\u30C9\u30A6\u3067Smalltalk\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]);}]);return smalltalk.send(self, "_p_with_", [html, function () {smalltalk.send(self, "_s_with_", [html, "\u3053\u3053\u3067\u306F\u3001Smalltalk\u81EA\u4F53\u306E\u8AAC\u660E\u306F\u3057\u307E\u305B\u3093\u3002"]);return smalltalk.send(self, "_s_with_", [html, "Workspace\u304B\u3089Smalltalk\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u3001Smalltalk\u306B\u3088\u308BWeb\u30DA\u30FC\u30B8\u306E\u4F5C\u6210\u3092\u4F53\u9A13\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u3092\u76EE\u7684\u3068\u3057\u3066\u3044\u307E\u3059\u3002"]);}]);};
    return self;
},
args: [],
source: "page1\x0a\x09^ [ :html |\x0aself p: html with: [\x0a  self s: html with: 'このページはAmber SmalltalkというJavascriptで実装されたSmalltalk処理系上で動作しています。'.\x0a  self s: html with: '右下の「Workspace」というウィンドウでSmalltalkを実行することができます。'.\x0a].\x0aself p: html with: [\x0a  self s: html with: 'ここでは、Smalltalk自体の説明はしません。'.\x0a  self s: html with: 'WorkspaceからSmalltalkを実行することで、SmalltalkによるWebページの作成を体験してもらうことを目的としています。'.\x0a]\x0a]",
messageSends: ["p:with:", "s:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page10",
smalltalk.method({
selector: "page10",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_s_with_", [html, "Smalltalk\u306E\u3061\u3083\u3093\u3068\u3057\u305F\u8AAC\u660E\u306F\u6B21\u306E\u30EA\u30F3\u30AF\u304C\u53C2\u8003\u306B\u306A\u308A\u307E\u3059\u3002"]);return smalltalk.send(self, "_codes_on_", [function () {return smalltalk.send(self, "_codeOn_with_", [html, "RecommendedLinks show."]);}, html]);};
    return self;
},
args: [],
source: "page10\x0a\x09^ [ :html |\x0aself s: html with: 'Smalltalkのちゃんとした説明は次のリンクが参考になります。'.\x0aself codes: [\x0a  self codeOn: html with: 'RecommendedLinks show.'.\x0a] on: html\x0a]",
messageSends: ["s:with:", "codes:on:", "codeOn:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page2",
smalltalk.method({
selector: "page2",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_p_with_", [html, function () {smalltalk.send(self, "_s_with_", [html, "Workspace\u4E0A\u3067\u300CDoIt\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u9078\u629E\u3055\u308C\u305F\u7BC4\u56F2\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"]);return smalltalk.send(self, "_s_with_", [html, "\u30B3\u30FC\u30C9\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u30AB\u30FC\u30BD\u30EB\u304C\u3042\u308B\u884C\u306E\u30B3\u30FC\u30C9\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]);}]);smalltalk.send(self, "_p_with_", [html, function () {smalltalk.send(self, "_s_with_", [html, "Workspace\u4E0A\u3067\u4E0B\u8A18\u306E\u30B3\u30FC\u30C9\u3092\u3072\u3068\u3064\u305A\u3064\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]);return smalltalk.send(self, "_s_with_", [html, "\u753B\u9762\u304C\u5207\u308A\u66FF\u308F\u308B\u3068\u601D\u3044\u307E\u3059\u3002"]);}]);return function ($rec) {smalltalk.send($rec, "_style_", [smalltalk.send(self, "_codeStyle", [])]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(self, "_codeOn_with_", [html, "Links show."]);smalltalk.send(self, "_codeOn_with_", [html, "AboutSmalltalk show."]);return smalltalk.send(self, "_codeOn_with_", [html, "Screen title: '\u3053\u3053\u306B\u30BF\u30A4\u30C8\u30EB\u3092\u3044\u308C\u3066\u306D'."]);}]);}(smalltalk.send(html, "_div", []));};
    return self;
},
args: [],
source: "page2\x0a\x09^ [ :html |\x0aself p: html with: [\x0a  self s: html with: 'Workspace上で「DoIt」をクリックすると、選択された範囲のコードを実行します。'.\x0a  self s: html with: 'コードが選択されていない場合は、カーソルがある行のコードが実行されます。'\x0a].\x0aself p: html with: [\x0a  self s: html with: 'Workspace上で下記のコードをひとつずつ実行してください。'.\x0a  self s: html with: '画面が切り替わると思います。'.\x0a].\x0a\x0ahtml div style: self codeStyle; with: [\x0a  self codeOn: html with: 'Links show.'.\x0a  self codeOn: html with: 'AboutSmalltalk show.'.\x0a  self codeOn: html with: 'Screen title: ''ここにタイトルをいれてね''.'.\x0a]\x0a\x0a]",
messageSends: ["p:with:", "s:with:", "style:", "codeStyle", "with:", "codeOn:with:", "div"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page3",
smalltalk.method({
selector: "page3",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_p_with_", [html, function () {smalltalk.send(self, "_s_with_", [html, "Smalltalk\u3067HTML\u3092\u4F5C\u308B\u305F\u3081\u306B\u3001Amber\u3067\u306FHTMLCanvas\u30AF\u30E9\u30B9\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002"]);smalltalk.send(self, "_s_with_", [html, "HTMLCanvas\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u300Ch1\u30BF\u30B0\u3092\u4F5C\u3063\u3066\u300D\u3068\u304B\u300Ca\u30BF\u30B0\u4F5C\u3063\u3066\u300D\u3068\u304A\u9858\u3044\u3057\u307E\u3059\u3002"]);return smalltalk.send(self, "_s_with_", [html, "\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u304A\u9858\u3044\u3059\u308B\u3053\u3068\u3092\u300C\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B\u300D\u3068\u3044\u3044\u307E\u3059\u3002"]);}]);smalltalk.send(self, "_p_with_", [html, function () {smalltalk.send(self, "_s_with_", [html, "\u4E0B\u8A18\u306E\u30B3\u30FC\u30C9\u3067HTMLCanvas\u30AD\u30E3\u30F3\u30D0\u30B9\u3092\u53D6\u308A\u51FA\u305B\u307E\u3059\u3002\u3053\u3053\u3067\u306Fhtml\u3068\u3044\u3046\u5909\u6570\u306B\u683C\u7D0D\u3057\u307E\u3059\u3002"]);return smalltalk.send(self, "_s_with_", [html, "HTMLCanvas\u306B\u30BF\u30B0\u3092\u4F5C\u3063\u3066\u3082\u3089\u3046\u3088\u3046\u306B\u304A\u9858\u3044\u3057\u3066\u307F\u307E\u3059\u3002"]);}]);return smalltalk.send(self, "_codes_on_", [function () {smalltalk.send(self, "_codeOn_with_", [html, "html := Screen htmlCanvas."]);smalltalk.send(self, "_codeOn_with_", [html, "html h2: '\u898B\u51FA\u3057\uFF11'."]);return smalltalk.send(self, "_codeOn_with_", [html, "html div with: 'some'."]);}, html]);};
    return self;
},
args: [],
source: "page3\x0a\x09^ [ :html |\x0aself p: html with: [\x0a  self s: html with: 'SmalltalkでHTMLを作るために、AmberではHTMLCanvasクラスを用意しています。'.\x0a  self s: html with: 'HTMLCanvasのオブジェクトに「h1タグを作って」とか「aタグ作って」とお願いします。'.\x0a  self s: html with: 'オブジェクトにお願いすることを「メッセージを送る」といいます。'.\x0a].\x0a\x0aself p: html with: [\x0a  self s: html with: '下記のコードでHTMLCanvasキャンバスを取り出せます。ここではhtmlという変数に格納します。'.\x0a  self s: html with: 'HTMLCanvasにタグを作ってもらうようにお願いしてみます。'.\x0a].\x0aself codes: [ \x0a  self codeOn: html with: 'html := Screen htmlCanvas.'.\x0a  self codeOn: html with: 'html h2: ''見出し１''.'.\x0a  self codeOn: html with: 'html div with: ''some''.'.\x0a] on: html.\x0a\x0a]",
messageSends: ["p:with:", "s:with:", "codes:on:", "codeOn:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page4",
smalltalk.method({
selector: "page4",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_s_with_", [html, "HTMLCanvas\u30AF\u30E9\u30B9\u306B\u300C\u30BF\u30B0\u3092\u4F5C\u3063\u3066\u300D\u3068\u304A\u9858\u3044\u3059\u308B\u3068TagBrush\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"]);smalltalk.send(self, "_s_with_", [html, "TagBrush\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u300Cstyle\u306F\u3053\u308C\u3067\u300D\u3068\u304B\u304A\u9858\u3044\u3067\u304D\u307E\u3059\u3002"]);smalltalk.send(self, "_s_with_", [html, "\u8907\u6570\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B\u5834\u5408\u3001\u30BB\u30DF\u30B3\u30ED\u30F3\u3092\u4F7F\u3044\u307E\u3059\u3002"]);return smalltalk.send(self, "_codes_on_", [function () {smalltalk.send(self, "_codeOn_with_", [html, "html div style: 'color:red; font-size:3em'; with: 'some'."]);return smalltalk.send(self, "_codeOn_with_", [html, "html img src: '/images/ani2.jpg'; width: 400."]);}, html]);};
    return self;
},
args: [],
source: "page4\x0a\x09^ [ :html |\x0aself s: html with:'HTMLCanvasクラスに「タグを作って」とお願いするとTagBrushのオブジェクトを返します。'.\x0aself s: html with:'TagBrushのオブジェクトに「styleはこれで」とかお願いできます。'.\x0aself s: html with:'複数のメッセージを送る場合、セミコロンを使います。'.\x0aself codes: [\x0a  self codeOn: html with: 'html div style: ''color:red; font-size:3em''; with: ''some''.'.\x0a  self codeOn: html with: 'html img src: ''/images/ani2.jpg''; width: 400.'.\x0a] on: html\x0a\x0a]",
messageSends: ["s:with:", "codes:on:", "codeOn:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page5",
smalltalk.method({
selector: "page5",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_p_with_", [html, function () {smalltalk.send(self, "_s_with_", [html, "\u304A\u3063\u3068\u8457\u4F5C\u6A29\u7684\u306B\u30A2\u30A6\u30C8\u306A\u753B\u50CF\u304C\u8868\u793A\u3055\u308C\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002"]);smalltalk.send(self, "_s_with_", [html, "\u81EA\u529B\u3067\u30C8\u30EC\u30FC\u30B9\u3057\u307E\u3057\u3087\u3046\u3002"]);return smalltalk.send(self, "_s_with_", [html, "\u8272\u3084\u30DA\u30F3\u306E\u592A\u3055\u3092\u5909\u3048\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]);}]);smalltalk.send(self, "_codes_on_", [function () {smalltalk.send(self, "_codeOn_with_", [html, "editor := ImageEditor new width: 400; height: 300; open."]);smalltalk.send(self, "_codeOn_with_", [html, "editor color: '#FF0000'."]);return smalltalk.send(self, "_codeOn_with_", [html, "editor size: 10."]);}, html]);smalltalk.send(self, "_s_with_", [html, "\u7D75\u3092\u63CF\u3044\u305F\u3089\u3001\u305D\u308C\u3092\u8868\u793A\u3059\u308Bimg\u30BF\u30B0\u3092\u8FFD\u52A0\u3057\u3066\u307F\u307E\u3059\u3002"]);return smalltalk.send(self, "_codes_on_", [function () {return smalltalk.send(self, "_codeOn_with_", [html, "html img src: editor src."]);}, html]);};
    return self;
},
args: [],
source: "page5\x0a\x09^ [ :html |\x0aself p: html with:[\x0a  self s: html with: 'おっと著作権的にアウトな画像が表示されてしまいました。'.\x0a  self s: html with: '自力でトレースしましょう。'.\x0a  self s: html with: '色やペンの太さを変えることもできます。'.\x0a].\x0a\x0aself codes: [\x0a  self codeOn: html with: 'editor := ImageEditor new width: 400; height: 300; open.'.\x0a  self codeOn: html with: 'editor color: ''#FF0000''.'.\x0a  self codeOn: html with: 'editor size: 10.'.\x0a] on: html.\x0a  self s: html with: '絵を描いたら、それを表示するimgタグを追加してみます。'.\x0aself codes: [\x0a  self codeOn: html with: 'html img src: editor src.'.\x0a] on: html\x0a]",
messageSends: ["p:with:", "s:with:", "codes:on:", "codeOn:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page6",
smalltalk.method({
selector: "page6",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_s_with_", [html, "\u753B\u50CF\u3092\u63CF\u753B\u3059\u308B\u305F\u3081\u306EYourImage\u30AF\u30E9\u30B9\u3092\u4F5C\u308A\u307E\u3059\u3002"]);smalltalk.send(self, "_s_with_", [html, "\u30B5\u30D6\u30AF\u30E9\u30B9\u306E\u4F5C\u6210\u306F\u89AA\u30AF\u30E9\u30B9\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308A\u307E\u3059\u3002"]);smalltalk.send(self, "_s_with_", [html, "\u30E1\u30BD\u30C3\u30C9\u306E\u8FFD\u52A0\u306F\u30AF\u30E9\u30B9\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308A\u307E\u3059\u3002"]);return smalltalk.send(self, "_codes_on_", [function () {smalltalk.send(self, "_codeOn_with_", [html, "Icon subclass: #YourImage."]);smalltalk.send(self, "_codeOn_with_", [html, "YourImage compile: 'imageUrl ^''', editor src, ''''."]);smalltalk.send(self, "_codeOn_with_", [html, "image := YourImage new."]);return smalltalk.send(self, "_codeOn_with_", [html, "Screen put: image."]);}, html]);};
    return self;
},
args: [],
source: "page6\x0a\x09^ [ :html |\x0aself s: html with: '画像を描画するためのYourImageクラスを作ります。'.\x0aself s: html with: 'サブクラスの作成は親クラスにメッセージを送ります。'.\x0aself s: html with: 'メソッドの追加はクラスにメッセージを送ります。'.\x0aself codes: [\x0a  self codeOn: html with: 'Icon subclass: #YourImage.'.\x0a  self codeOn: html with: 'YourImage compile: ''imageUrl ^'''''', editor src, ''''''''.'.\x0a  self codeOn: html with: 'image := YourImage new.'.\x0a  self codeOn: html with: 'Screen put: image.'.\x0a] on: html.\x0a\x0a]",
messageSends: ["s:with:", "codes:on:", "codeOn:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page7",
smalltalk.method({
selector: "page7",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_s_with_", [html, "\u751F\u6210\u3057\u305F\u30AF\u30E9\u30B9\u3092amber\u306EIDE\u3067\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002"]);smalltalk.send(self, "_codes_on_", [function () {return smalltalk.send(self, "_codeOn_with_", [html, "YourImage browse."]);}, html]);smalltalk.send(self, "_s_with_", [html, "urlImage\u30E1\u30BD\u30C3\u30C9\u304C\u4F5C\u3089\u308C\u3066\u3044\u308B\u3053\u3068\u304C\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002"]);smalltalk.send(self, "_s_with_", [html, "\u307E\u305F\u3001\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u3067\u597D\u304D\u306A\u5834\u6240\u306B\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002"]);return smalltalk.send(self, "_s_with_", [html, "\u753B\u50CF\u3092\u79FB\u52D5\u3059\u308B\u3068\u5834\u6240\u3092\u8FD4\u3059\u30E1\u30BD\u30C3\u30C9\u3082\u66F8\u304D\u5909\u308F\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"]);};
    return self;
},
args: [],
source: "page7\x0a\x09^ [ :html |\x0aself s: html with: '生成したクラスをamberのIDEで見てみましょう。'.\x0aself codes: [\x0a  self codeOn: html with: 'YourImage browse.'.\x0a] on: html.\x0aself s: html with: 'urlImageメソッドが作られていることが確認できます。'.\x0aself s: html with: 'また、ドラッグアンドドロップで好きな場所に移動できます。'.\x0aself s: html with: '画像を移動すると場所を返すメソッドも書き変わるようになっています。'.\x0a\x0a]",
messageSends: ["s:with:", "codes:on:", "codeOn:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page8",
smalltalk.method({
selector: "page8",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_s_with_", [html, "\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3082\u7528\u610F\u3057\u3066\u304A\u304D\u307E\u3057\u305F\u3002"]);return smalltalk.send(self, "_codes_on_", [function () {return smalltalk.send(self, "_codeOn_with_", [html, "[ image araburi ] valueWithInterval: 1000."]);}, html]);};
    return self;
},
args: [],
source: "page8\x0a\x09^ [ :html |\x0aself s: html with: 'アニメーションも用意しておきました。'.\x0aself codes: [\x0a  self codeOn: html with: '[ image araburi ] valueWithInterval: 1000.'.\x0a] on: html.\x0a\x0a]",
messageSends: ["s:with:", "codes:on:", "codeOn:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_page9",
smalltalk.method({
selector: "page9",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (html) {smalltalk.send(self, "_l_with_", [html, "\u4ECA\u56DE\u306F\u3001Workspace\u3092\u4F7F\u3063\u3066\u5BFE\u8A71\u7684\u306B\u30DA\u30FC\u30B8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002"]);smalltalk.send(self, "_s_with_", [html, "\u30B3\u30FC\u30C9\u306B\u843D\u3068\u3059\u5834\u5408\u3001Amber Smalltalk\u3067\u306FWidget\u30AF\u30E9\u30B9\u3092\u7D99\u627F\u3057\u3066\u3001\u90E8\u54C1\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"]);smalltalk.send(self, "_s_with_", [html, "Widget\u30AF\u30E9\u30B9\u306E\u5B50\u30AF\u30E9\u30B9\u306FrenderOn:\u30E1\u30BD\u30C3\u30C9\u306B\u90E8\u54C1\u306E\u898B\u305F\u76EE\u3092\u5B9F\u88C5\u3057\u307E\u3059\u3002"]);smalltalk.send(self, "_s_with_", [html, "renderOn:\u306E\u5F15\u6570\u304B\u3089HTMLCanvas\u304C\u6E21\u3055\u308C\u308B\u306E\u3067\u3001\u305D\u308C\u3092\u4F7F\u3063\u3066HTML\u3092\u4F5C\u308B\u30B3\u30FC\u30C9\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002"]);return smalltalk.send(self, "_s_with_", [html, "WebDAV\u30B5\u30FC\u30D0\u30FC\u3092\u4F7F\u3048\u3070\u3001\u30D6\u30E9\u30A6\u30B6\u304B\u3089\u30B3\u30FC\u30C9\u306E\u30B3\u30DF\u30C3\u30C8\u3082\u53EF\u80FD\u3067\u3059\u3002"]);};
    return self;
},
args: [],
source: "page9\x0a\x09^ [ :html |\x0aself l: html with: '今回は、Workspaceを使って対話的にページを作成しました。'.\x0aself s: html with: 'コードに落とす場合、Amber SmalltalkではWidgetクラスを継承して、部品を作成します。'.\x0aself s: html with: 'Widgetクラスの子クラスはrenderOn:メソッドに部品の見た目を実装します。'.\x0aself s: html with: 'renderOn:の引数からHTMLCanvasが渡されるので、それを使ってHTMLを作るコードを記述します。'.\x0aself s: html with: 'WebDAVサーバーを使えば、ブラウザからコードのコミットも可能です。'.\x0a\x0a]",
messageSends: ["l:with:", "s:with:"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_pages",
smalltalk.method({
selector: "pages",
category: 'not yet classified',
fn: function () {
    var self = this;
    return [smalltalk.send(self, "_page1", []), smalltalk.send(self, "_page2", []), smalltalk.send(self, "_page3", []), smalltalk.send(self, "_page4", []), smalltalk.send(self, "_page5", []), smalltalk.send(self, "_page6", []), smalltalk.send(self, "_page7", []), smalltalk.send(self, "_page8", []), smalltalk.send(self, "_page9", []), smalltalk.send(self, "_page10", [])];
    return self;
},
args: [],
source: "pages\x0a\x09^ {\x0a\x09\x09self page1.\x0a\x09\x09self page2.\x0a\x09\x09self page3.\x0a\x09\x09self page4.\x0a\x09\x09self page5.\x0a\x09\x09self page6.\x0a\x09\x09self page7.\x0a\x09\x09self page8.\x0a\x09\x09self page9.\x0a\x09\x09self page10\x0a\x09}",
messageSends: ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8", "page9", "page10"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);

smalltalk.addMethod(
"_s_with_",
smalltalk.method({
selector: "s:with:",
category: 'not yet classified',
fn: function (html, aString) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [aString]);
    return self;
},
args: ["html", "aString"],
source: "s: html with: aString\x0a  html span with: aString",
messageSends: ["with:", "span"],
referencedClasses: []
}),
smalltalk.LLorMLAdventPanel);



smalltalk.addClass('LoginPanel', smalltalk.Panel, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.Login || Login, "_new", [])]);
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div with: Login new.",
messageSends: ["with:", "div", "new"],
referencedClasses: ["Login"]
}),
smalltalk.LoginPanel);



smalltalk.addClass('ParserEditor', smalltalk.Widget, ['source'], 'DyNagoya');
smalltalk.ParserEditor.comment="editor := ParserEditor onDialog\x0a\x0aeditor source css: 'font-size' put: '2em'"
smalltalk.addMethod(
"_applyParser",
smalltalk.method({
selector: "applyParser",
category: 'not yet classified',
fn: function () {
    var self = this;
    var parser = nil;
    smalltalk.send(self, "_try_catch_", [function () {parser = smalltalk.send(smalltalk.PEG || PEG, "_buildParser_", [smalltalk.send(self['@source'], "_val", [])]);return smalltalk.parser = parser;}, function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_title_", ["error"]);smalltalk.send($rec, "_message_", [thisisplaceholder1]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", []));}]);
    return self;
},
args: [],
source: "applyParser\x0a\x09| parser |\x0a\x09self try: [\x0a\x09\x09parser := PEG buildParser: source val.\x0a\x09\x09< smalltalk.parser = parser >\x0a\x09] catch: [ \x0a\x09\x09DialogBox new title: 'error'; message: %1; open\x0a\x09]",
messageSends: ["try:catch:", "buildParser:", "val", "title:", "message:", "open", "new"],
referencedClasses: ["PEG", "DialogBox"]
}),
smalltalk.ParserEditor);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    self['@source'] = function ($rec) {smalltalk.send($rec, "_css_put_", ["position", "absolute"]);smalltalk.send($rec, "_css_put_", ["width", "95%"]);smalltalk.send($rec, "_css_put_", ["height", "98%"]);smalltalk.send($rec, "_css_put_", ["left", "12px"]);smalltalk.send($rec, "_css_put_", ["right", "12px"]);smalltalk.send($rec, "_css_put_", ["top", "2px"]);return smalltalk.send($rec, "_css_put_", ["bottom", "2px"]);}(smalltalk.send(html, "_textarea", []));
    smalltalk.send(self, "_updateParserFromServer", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09source := html textarea \x0a\x09\x09css: 'position' put: 'absolute';\x0a\x09\x09css: 'width' put: '95%';\x0a\x09\x09css: 'height' put: '98%';\x0a\x09\x09css: 'left' put: '12px';\x0a\x09\x09css: 'right' put: '12px';\x0a\x09\x09css: 'top' put: '2px';\x0a\x09\x09css: 'bottom' put: '2px'.\x0a\x09self updateParserFromServer",
messageSends: ["css:put:", "textarea", "updateParserFromServer"],
referencedClasses: []
}),
smalltalk.ParserEditor);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@source'];
    return self;
},
args: [],
source: "source\x0a  ^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.ParserEditor);

smalltalk.addMethod(
"_updateParserFromServer",
smalltalk.method({
selector: "updateParserFromServer",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", ["js/parser2.pegjs", smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["text"]), smalltalk.send("success", "__minus_gt", [function (thisisplaceholder1) {return smalltalk.send(self['@source'], "_val_", [thisisplaceholder1]);}])])]);
    return self;
},
args: [],
source: "updateParserFromServer\x0a\x09^ jQuery\x0a\x09\x09ajax: 'js/parser2.pegjs'\x0a\x09\x09option: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09'dataType' -> 'text'.\x0a\x09\x09\x09'success' -> [ source val: %1 ]\x0a\x09\x09}",
messageSends: ["ajax:option:", "->", "val:"],
referencedClasses: []
}),
smalltalk.ParserEditor);


smalltalk.addMethod(
"_onDialog",
smalltalk.method({
selector: "onDialog",
category: 'not yet classified',
fn: function () {
    var self = this;
    var this_ = nil;
    this_ = smalltalk.send(self, "_new", []);
    (function ($rec) {smalltalk.send($rec, "_widget_", [this_]);smalltalk.send($rec, "_modal_", [false]);smalltalk.send($rec, "_width_", ["50%"]);smalltalk.send($rec, "_title_", ["Parser Editor"]);smalltalk.send($rec, "_height_", [400]);smalltalk.send($rec, "_button_action_", ["apply", function () {return smalltalk.send(this_, "_applyParser", []);}]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", [])));
    return smalltalk.send(smalltalk.send(this_, "_source", []), "_css_put_", ["font-size", "2em"]);
    return self;
},
args: [],
source: "onDialog\x0a\x09| this |\x0a\x09this := self new.\x0a\x09DialogBox new widget: this; modal: false; width: '50%'; title: 'Parser Editor'; height: 400; \x0a\x09\x09button: 'apply' action: [ this applyParser ];\x0a\x09open.\x0a\x09^ this source css: 'font-size' put: '2em'",
messageSends: ["new", "widget:", "modal:", "width:", "title:", "height:", "button:action:", "applyParser", "open", "css:put:", "source"],
referencedClasses: ["DialogBox"]
}),
smalltalk.ParserEditor.klass);


smalltalk.addClass('ParticipantsList', smalltalk.Object, ['event'], 'DyNagoya');
smalltalk.addMethod(
"_event_",
smalltalk.method({
selector: "event:",
category: 'accessing',
fn: function (aEvent) {
    var self = this;
    self['@event'] = aEvent;
    return self;
},
args: ["aEvent"],
source: "event: aEvent\x0a\x09event := aEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.ParticipantsList);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_class", []), "_render", []);
    return self;
},
args: [],
source: "render\x0a\x09self class render",
messageSends: ["render", "class"],
referencedClasses: []
}),
smalltalk.ParticipantsList);

smalltalk.addMethod(
"_renderButton_users_",
smalltalk.method({
selector: "renderButton:users:",
category: 'rendering',
fn: function (html, users) {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.Login || Login, "_user", [])) == nil ||
        $receiver == undefined ? function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn disabled"]);return smalltalk.send($rec, "_with_", [unescape("%u7533%u3057%u8FBC%u307F%u306B%u306F%u30ED%u30B0%u30A4%u30F3%28%u53F3%u4E0A%29%u304C%u5FC5%u8981%u3067%u3059")]);}(smalltalk.send(html, "_span", []));}() : function () {return ($receiver = smalltalk.send(users, "_includes_", [smalltalk.send(smalltalk.Login || Login, "_user", [])])).klass === smalltalk.Boolean ? !$receiver ? function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_with_", [unescape("%u53C2%u52A0%u3059%u308B")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_join", []);}]);}(smalltalk.send(html, "_a", []));}() : function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_with_", [unescape("%u53C2%u52A0%u3092%u53D6%u308A%u6D88%u3059")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_cancel", []);}]);}(smalltalk.send(html, "_a", []));}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_with_", [unescape("%u53C2%u52A0%u3059%u308B")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_join", []);}]);}(smalltalk.send(html, "_a", []));}, function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_with_", [unescape("%u53C2%u52A0%u3092%u53D6%u308A%u6D88%u3059")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_cancel", []);}]);}(smalltalk.send(html, "_a", []));}]);}();
    return self;
},
args: ["html", "users"],
source: "renderButton: html users: users\x0a\x09\x09Login user \x0a\x09\x09\x09ifNil: [ html span class: 'btn disabled'; with: '申し込みにはログイン(右上)が必要です' ]\x0a\x09\x09\x09ifNotNil:[\x0a\x09\x09\x09\x09(users includes: Login user)\x0a\x09\x09\x09\x09\x09ifFalse: [ html a class: 'btn'; with: '参加する'; onClick: [ event join ] ]\x0a\x09\x09\x09\x09\x09ifTrue: [html a class: 'btn'; with: '参加を取り消す'; onClick: [event  cancel ] ]\x0a\x09\x09\x09]\x0a",
messageSends: ["ifNil:ifNotNil:", "user", "class:", "with:", "span", "ifFalse:ifTrue:", "includes:", "onClick:", "join", "a", "cancel"],
referencedClasses: ["Login"]
}),
smalltalk.ParticipantsList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var users = nil;
    smalltalk.send(self['@event'], "_list_", [function (list) {smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("%u53C2%u52A0%u8005%uFF1A")]);smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {users = smalltalk.send(list, "_collect_", [function (each) {return smalltalk.send(each, "_user", []);}]);return smalltalk.send(users, "_do_", [function (each) {return smalltalk.send(smalltalk.Twitter || Twitter, "_link_user_", [html, each]);}]);}]);return function ($rec) {smalltalk.send($rec, "_css_put_", [unescape("margin-top"), "15px"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(self, "_renderButton_users_", [html, users]);return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_css_put_", [unescape("margin-left"), "10px"]);smalltalk.send($rec, "_with_", [unescape("Google%20Calendar%u306B%u767B%u9332")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_addToCalendar", []);}]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_div", []));}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09| users |\x0a\x09event list: [ :list |\x0a\x09\x09html h2 with: '参加者：'.\x0a\x09\x09html div with: [\x0a\x09\x09\x09users := list collect: [ :each | each user ].\x0a\x09\x09\x09users do:[ :each | Twitter link:html user: each ]\x0a\x09\x09].\x0a\x09\x09html div css: 'margin-top' put: '15px'; with: [\x0a\x09\x09\x09self renderButton: html users: users.\x0a\x09\x09\x09html a class: 'btn'; css: 'margin-left' put: '10px'; with: 'Google Calendarに登録'; onClick: [ event addToCalendar ]\x0a\x09\x09]\x0a\x09]",
messageSends: ["list:", "with:", "h2", "div", "collect:", "user", "do:", "link:user:", "css:put:", "renderButton:users:", "class:", "onClick:", "addToCalendar", "a"],
referencedClasses: ["Twitter"]
}),
smalltalk.ParticipantsList);


smalltalk.ParticipantsList.klass.iVarNames = ['s'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = self['@s']) == nil || $receiver == undefined ? function () {return self['@s'] = smalltalk.send(self, "_new", [], smalltalk.Widget.klass);}() : $receiver;
    return self['@s'];
    return self;
},
args: [],
source: "new\x0a\x09s ifNil: [  s := super new ].\x0a\x09^ s",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ParticipantsList.klass);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
category: 'not yet classified',
fn: function () {
    var self = this;
    var html = nil;
    html = smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_onJQuery_", [smalltalk.send(unescape("%23participants"), "_asJQuery", [])]);
    smalltalk.send(smalltalk.send(html, "_root", []), "_empty", []);
    smalltalk.send(smalltalk.send(self, "_new", []), "_renderOn_", [html]);
    return self;
},
args: [],
source: "render\x0a\x09| html |\x0a\x09html := HTMLCanvas onJQuery: '#participants' asJQuery.\x0a\x09html root empty.\x0a\x09self new renderOn: html.",
messageSends: ["onJQuery:", "asJQuery", "empty", "root", "renderOn:", "new"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.ParticipantsList.klass);


smalltalk.addClass('Participation', smalltalk.RemoteObject, [], 'DyNagoya');
smalltalk.Participation.comment="Participation event: 'meeting02' name: 'maeda_'\x0aParticipation event: 'meeting02' name: 'bleis'\x0a\x0aParticipation list: 'meeting02' callback: [ :list | console log: list size ]\x0aParticipation list: 'meeting02' callback: [ :list | list inspect ] \x0a\x0aParticipation list: 'meeting02' callback: [ :list | list do: [:each | each delete] ] "

smalltalk.addMethod(
"_afterDelete",
smalltalk.method({
selector: "afterDelete",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function () {return smalltalk.send(smalltalk.ParticipantsList || ParticipantsList, "_render", []);};
    return self;
},
args: [],
source: "afterDelete\x0a\x09^ [ ParticipantsList render ]",
messageSends: ["render"],
referencedClasses: ["ParticipantsList"]
}),
smalltalk.Participation.klass);

smalltalk.addMethod(
"_afterPut",
smalltalk.method({
selector: "afterPut",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function () {return smalltalk.send(smalltalk.ParticipantsList || ParticipantsList, "_render", []);};
    return self;
},
args: [],
source: "afterPut\x0a\x09^ [ ParticipantsList render ]",
messageSends: ["render"],
referencedClasses: ["ParticipantsList"]
}),
smalltalk.Participation.klass);


smalltalk.addClass('Place', smalltalk.Widget, [], 'DyNagoya');
smalltalk.Place.comment="DialogBox new widget: (Edelweiss new); open "
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "address",
messageSends: [],
referencedClasses: []
}),
smalltalk.Place);

smalltalk.addMethod(
"_gCalString",
smalltalk.method({
selector: "gCalString",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_address", []), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%29")]);
    return self;
},
args: [],
source: "gCalString\x0a  ^ (self address), '(', (self name), ')'",
messageSends: [",", "address", "name"],
referencedClasses: []
}),
smalltalk.Place);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "name",
messageSends: [],
referencedClasses: []
}),
smalltalk.Place);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'accessing',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [unescape("%u5834%u6240%uFF1A")]);(function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send(self, "_url", [])]);smalltalk.send($rec, "_at_put_", ["target", "_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_name", [])]);}(smalltalk.send(html, "_a", [])));return smalltalk.send(smalltalk.GoogleMap || GoogleMap, "_link_address_", [html, smalltalk.send(self, "_address", [])]);}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html h2 with:[ \x0a\x09\x09html span with: '場所：'.\x0a\x09\x09html a href: self url; at: 'target' put: '_blank'; with: self name. \x0a\x09\x09GoogleMap link: html address: self address \x0a\x09]\x0a",
messageSends: ["with:", "h2", "span", "href:", "url", "at:put:", "name", "a", "link:address:", "address"],
referencedClasses: ["GoogleMap"]
}),
smalltalk.Place);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "url",
messageSends: [],
referencedClasses: []
}),
smalltalk.Place);


smalltalk.addMethod(
"_openInDialog",
smalltalk.method({
selector: "openInDialog",
category: 'not yet classified',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(self, "_new", [])]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", [])));
    return self;
},
args: [],
source: "openInDialog\x0a\x09DialogBox new widget: (self new); open ",
messageSends: ["widget:", "new", "open"],
referencedClasses: ["DialogBox"]
}),
smalltalk.Place.klass);


smalltalk.addClass('ATeam', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u897F%u533A%u725B%u5CF6%u753A6%u756A1%u53F7%20%u540D%u53E4%u5C4B%u30EB%u30FC%u30BB%u30F3%u30C8%u30BF%u30EF%u30FC32F");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市西区牛島町6番1号 名古屋ルーセントタワー32F'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ATeam);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u682A%u5F0F%u4F1A%u793E%u30A8%u30A4%u30C1%u30FC%u30E0");
    return self;
},
args: [],
source: "name\x0a\x09^ '株式会社エイチーム'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ATeam);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.a-tm.co.jp/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.a-tm.co.jp/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ATeam);



smalltalk.addClass('Aikitaya', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u4E2D\u533A\u4F0A\u52E2\u5C711\u4E01\u76EE4-3";
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中区伊勢山1丁目4-3'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Aikitaya);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u3042\u3044\u304D\u305F\u3084";
    return self;
},
args: [],
source: "name\x0a\x09^ 'あいきたや'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Aikitaya);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://tabelog.com/aichi/A2301/A230105/23005788/";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://tabelog.com/aichi/A2301/A230105/23005788/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Aikitaya);



smalltalk.addClass('AmiyakiTei', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u5343\u7A2E\u533A\u4ECA\u6C602\u4E01\u76EE1-34";
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市千種区今池2丁目1-34'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AmiyakiTei);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u3042\u307F\u3084\u304D\u4EAD \u5343\u7A2E\u5E97";
    return self;
},
args: [],
source: "name\x0a\x09^ 'あみやき亭 千種店'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AmiyakiTei);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://www.amiyakitei.co.jp/shop2.html#area_nagoya";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.amiyakitei.co.jp/shop2.html#area_nagoya'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AmiyakiTei);



smalltalk.addClass('AnyWhere', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "";
    return self;
},
args: [],
source: "address\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnyWhere);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u672A%u5B9A");
    return self;
},
args: [],
source: "name\x0a\x09^ '未定'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnyWhere);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "";
    return self;
},
args: [],
source: "url\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnyWhere);



smalltalk.addClass('Bambi', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u6771\u533A\u6CC9\u4E00\u4E01\u76EE4-5 \u30B0\u30E9\u30F3\u30C9\u30FC\u30EB\u30B7\u30E3\u30C8\u30FC1F";
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市東区泉一丁目4-5 グランドールシャトー1F'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bambi);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u55AB\u8336\u30D0\u30F3\u30D3";
    return self;
},
args: [],
source: "name\x0a\x09^ '喫茶バンビ'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bambi);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://r.tabelog.com/aichi/A2301/A230104/23040019/";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://r.tabelog.com/aichi/A2301/A230104/23040019/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bambi);



smalltalk.addClass('BondCoffee', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u6804%uFF11%u30FC%uFF11%uFF11%u30FC%uFF16");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市中区栄１ー１１ー６'",
messageSends: [],
referencedClasses: []
}),
smalltalk.BondCoffee);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u30DC%u30F3%u30C9%u30B3%u30FC%u30D2%u30FC");
    return self;
},
args: [],
source: "name\x0a\x09^ 'ボンドコーヒー'",
messageSends: [],
referencedClasses: []
}),
smalltalk.BondCoffee);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.bondcoffee.jp/index.html");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.bondcoffee.jp/index.html'",
messageSends: [],
referencedClasses: []
}),
smalltalk.BondCoffee);



smalltalk.addClass('Captina', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u540D%u99C53-28-12%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u30C2%u30F3%u30B0");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中村区名駅3-28-12 大名古屋ビルヂング'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Captina);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u30AB%u30D7%u30C1%u30FC%u30CA%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u5E97");
    return self;
},
args: [],
source: "name\x0a\x09^ 'カプチーナ 大名古屋ビル店'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Captina);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.dainagoya-building.com/cgi-bin/shop/page.cgi%3Fact%3Dpage%26id%3D5");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.dainagoya-building.com/cgi-bin/shop/page.cgi?act=page&id=5'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Captina);



smalltalk.addClass('Doerya', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u93263-25-20");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市中区錦3-25-20'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Doerya);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u30CF\u30F3\u30D0\u30FC\u30B0\u30CF\u30A6\u30B9\u6E90(\u65E7\u3069\u3048\u308A\u3083\u3042)";
    return self;
},
args: [],
source: "name\x0a\x09^ 'ハンバーグハウス源(旧どえりゃあ)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Doerya);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://second.gensg.jp/gen/";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://second.gensg.jp/gen/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Doerya);



smalltalk.addClass('DyNagoyaBuilding', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u540D%u99C53-28-12%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u30C2%u30F3%u30B0");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中村区名駅3-28-12 大名古屋ビルヂング'",
messageSends: [],
referencedClasses: []
}),
smalltalk.DyNagoyaBuilding);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u30C2%u30F3%u30B0%20");
    return self;
},
args: [],
source: "name\x0a\x09^ '大名古屋ビルヂング '",
messageSends: [],
referencedClasses: []
}),
smalltalk.DyNagoyaBuilding);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.dainagoya-building.com/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.dainagoya-building.com/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.DyNagoyaBuilding);



smalltalk.addClass('Edelweiss', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u6771%u533A%u6771%u685C1-10-1");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市東区東桜1-10-1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Edelweiss);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u30A8%u30FC%u30C7%u30EB%u30EF%u30A4%u30B9");
    return self;
},
args: [],
source: "name\x0a\x09^ 'エーデルワイス'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Edelweiss);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www8.ocn.ne.jp/%7Eedel/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www8.ocn.ne.jp/~edel/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Edelweiss);



smalltalk.addClass('Hakkaku', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u540D%u99C53-28-12%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u30C2%u30F3%u30B0B1");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中村区名駅3-28-12 大名古屋ビルヂングB1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Hakkaku);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u6D6A%u82B1%u308D%u3070%u305F%20%u516B%u89D2%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u5E97%20");
    return self;
},
args: [],
source: "name\x0a\x09^ '浪花ろばた 八角 大名古屋ビル店 '",
messageSends: [],
referencedClasses: []
}),
smalltalk.Hakkaku);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//r.gnavi.co.jp/n004601/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://r.gnavi.co.jp/n004601/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Hakkaku);



smalltalk.addClass('Hina', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u4E2D\u533A\u5927\u98084-1-12";
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中区大須4-1-12'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Hina);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u967D\u83DC(\u3072\u306A)";
    return self;
},
args: [],
source: "name\x0a\x09^ '陽菜(ひな)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Hina);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://r.tabelog.com/aichi/A2301/A230103/23040495/";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://r.tabelog.com/aichi/A2301/A230103/23040495/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Hina);



smalltalk.addClass('Imoni', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u7DD1\u533A\u5927\u9AD8\u753A\u5B57\u9AD8\u5C71\uFF11\uFF0D\uFF11";
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市緑区大高町字高山１－１'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Imoni);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u828B\u716E\u4F1A#2";
    return self;
},
args: [],
source: "name\x0a\x09^ '名古屋芋煮会#2'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Imoni);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://partake.in/events/5e2b77db-4d10-4f7d-bba9-50d1890b104d";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://partake.in/events/5e2b77db-4d10-4f7d-bba9-50d1890b104d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Imoni);



smalltalk.addClass('JoseiKaikan', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u4E2D\u533A\u5927\u4E95\u753A7\u756A25\u53F7";
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市中区大井町7番25号'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JoseiKaikan);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u5973\u6027\u4F1A\u9928";
    return self;
},
args: [],
source: "name\x0a\x09^ '名古屋市女性会館'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JoseiKaikan);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://www.city.nagoya.jp/kurashi/category/19-5-4-2-0-0-0-0-0-0.html";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.city.nagoya.jp/kurashi/category/19-5-4-2-0-0-0-0-0-0.html'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JoseiKaikan);



smalltalk.addClass('Kako', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u540D%u99C55-30-4%u3000%u540D%u99C5KD%u30D3%u30EB1F");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市中村区名駅5-30-4　名駅KDビル1F'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Kako);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "Coffee shop KAKO";
    return self;
},
args: [],
source: "name\x0a\x09^ 'Coffee shop KAKO'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Kako);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.coffeekako.com/index.html");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.coffeekako.com/index.html'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Kako);



smalltalk.addClass('Kakureya', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u5343\u7A2E\u533A\u56DB\u8C37\u901A1-8 \u30E9\u30D5\u30A9\u30FC\u30EC\u56DB\u30C4\u8C37B1";
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市千種区四谷通1-8 ラフォーレ四ツ谷B1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Kakureya);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u6D1E\u98DF\u7A7A\u9593 \u96A0\u308C\u5BB6";
    return self;
},
args: [],
source: "name\x0a\x09^ '洞食空間 隠れ家'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Kakureya);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://gourmet.walkerplus.com/157158314001/index.html";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://gourmet.walkerplus.com/157158314001/index.html'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Kakureya);



smalltalk.addClass('Katatumuri', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u4E38%u306E%u51852-14-15%20%u6CB3%u5408%u30D3%u30EB%u3000%uFF12%uFF26");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中区丸の内2-14-15 河合ビル　２Ｆ'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Katatumuri);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u30AB%u30BF%u30C4%u30E0%u30EA");
    return self;
},
args: [],
source: "name\x0a\x09^ 'カタツムリ'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Katatumuri);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//r.tabelog.com/aichi/A2301/A230102/23007756/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://r.tabelog.com/aichi/A2301/A230102/23007756/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Katatumuri);



smalltalk.addClass('Lancia', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u662D%u548C%u533A%u96BC%u4EBA%u753A1-4%20%u6E05%u697D%u30D3%u30EB1F");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市昭和区隼人町1-4 清楽ビル1F'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lancia);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u30B5%u30E9%u30C0%u30B7%u30E7%u30C3%u30D7%20Lancia%20");
    return self;
},
args: [],
source: "name\x0a\x09^ 'サラダショップ Lancia '",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lancia);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//r.tabelog.com/aichi/A2301/A230108/23005243/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://r.tabelog.com/aichi/A2301/A230108/23005243/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lancia);



smalltalk.addClass('LokantaAYHAN', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u6804%uFF11%uFF0D%uFF11%uFF14%uFF0D%uFF12%uFF18");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市中区栄１－１４－２８'",
messageSends: [],
referencedClasses: []
}),
smalltalk.LokantaAYHAN);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("Lokanta%20AYHAN%20%u30ED%u30AB%u30F3%u30BF%u30A2%u30A4%u30CF%u30F3");
    return self;
},
args: [],
source: "name\x0a\x09^ 'Lokanta AYHAN ロカンタアイハン'",
messageSends: [],
referencedClasses: []
}),
smalltalk.LokantaAYHAN);

smalltalk.addMethod(
"_notice",
smalltalk.method({
selector: "notice",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u65E5%u66DC%u65E5%u4F11%u307F");
    return self;
},
args: [],
source: "notice\x0a  ^ '日曜日休み'",
messageSends: [],
referencedClasses: []
}),
smalltalk.LokantaAYHAN);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//star.gmobb.jp/lokanta_ayhan/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://star.gmobb.jp/lokanta_ayhan/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.LokantaAYHAN);



smalltalk.addClass('Maruichi', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u68043-8-102");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中区栄3-8-102'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Maruichi);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u70AD%u706B%u713C%u304D%u9CE5%20%u307E%u308B%u3044%u3061");
    return self;
},
args: [],
source: "name\x0a\x09^ '炭火焼き鳥 まるいち'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Maruichi);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//r.tabelog.com/aichi/A2301/A230103/23030942/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://r.tabelog.com/aichi/A2301/A230103/23030942/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Maruichi);



smalltalk.addClass('Mattariya', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u5343\u7A2E\u533A\u5185\u5C71\uFF13-20-19";
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市千種区内山３-20-19'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Mattariya);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u307E\u3063\u305F\u308A\u3084 \u5343\u7A2E";
    return self;
},
args: [],
source: "name\x0a\x09^ 'まったりや 千種'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Mattariya);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://www.hotpepper.jp/strJ000725580";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.hotpepper.jp/strJ000725580'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Mattariya);



smalltalk.addClass('Moyorino', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u5343%u7A2E%u533A%u5BAE%u6839%u53F01-4-16%201F");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市千種区宮根台1-4-16 1F'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Moyorino);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("Moyorino%20%28%u30E2%u30E8%u30EA%u30CE%29");
    return self;
},
args: [],
source: "name\x0a\x09^ 'Moyorino (モヨリノ)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Moyorino);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//moyo-reno.com/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://moyo-reno.com/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Moyorino);



smalltalk.addClass('Nato', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u4E2D\u533A\u91D1\u5C712-1-21 ";
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中区金山2-1-21 '",
messageSends: [],
referencedClasses: []
}),
smalltalk.Nato);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u83DC\u3068\u3001";
    return self;
},
args: [],
source: "name\x0a\x09^ '菜と、'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Nato);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://r.gnavi.co.jp/n903800/";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://r.gnavi.co.jp/n903800/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Nato);



smalltalk.addClass('NewCast', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u6771%u533A%u8475%uFF13%u4E01%u76EE%uFF12%uFF12%u2212%uFF18");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市東区葵３丁目２２−８'",
messageSends: [],
referencedClasses: []
}),
smalltalk.NewCast);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u30CB%u30E5%u30FC%u30AD%u30E3%u30B9%u30C8");
    return self;
},
args: [],
source: "name\x0a\x09^ 'ニューキャスト'",
messageSends: [],
referencedClasses: []
}),
smalltalk.NewCast);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.xmldo.jp/about/seminarroom/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.xmldo.jp/about/seminarroom/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.NewCast);



smalltalk.addClass('Syushin', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u9326%uFF11%uFF0D%uFF11%uFF13%uFF0D%uFF13%uFF11%u30DF%u30C4%u30EF%u30D3%u30EB%uFF11%uFF26");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市中区錦１－１３－３１ミツワビル１Ｆ'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Syushin);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u5C45%u9152%u5C4B%20%u9152%u795E");
    return self;
},
args: [],
source: "name\x0a\x09^ '居酒屋 酒神'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Syushin);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.hotpepper.jp/strJ000021742/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.hotpepper.jp/strJ000021742/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Syushin);



smalltalk.addClass('Tagen', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u5343%u7A2E%u533A%u4E0D%u8001%u753A");
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市千種区不老町'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tagen);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5927%u5B66%u591A%u5143%u6570%u7406%u79D1%u5B66%u68DF");
    return self;
},
args: [],
source: "name\x0a\x09^ '名古屋大学多元数理科学棟'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tagen);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.math.nagoya-u.ac.jp/ja/direction/campus.html");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.math.nagoya-u.ac.jp/ja/direction/campus.html'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tagen);



smalltalk.addClass('Takoichi', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u4E2D\u533A\u5927\u98083-10-11";
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市中区大須3-10-11'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Takoichi);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u305F\u3053\u3044\u3061 \u5927\u9808\u5E97";
    return self;
},
args: [],
source: "name\x0a\x09^ 'たこいち 大須店'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Takoichi);

smalltalk.addMethod(
"_tel",
smalltalk.method({
selector: "tel",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\uFF10\uFF15\uFF12\uFF0D\uFF12\uFF15\uFF11\uFF0D\uFF13\uFF10\uFF13\uFF13";
    return self;
},
args: [],
source: "tel\x0a  ^ '０５２－２５１－３０３３'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Takoichi);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://tako1.net/";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://tako1.net/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Takoichi);



smalltalk.addClass('Vinceness', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u93263-6-29%20%u30B5%u30A6%u30B9%u30CF%u30A6%u30B9B1");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市中区錦3-6-29 サウスハウスB1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Vinceness);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u30AB%u30D5%u30A7%20%u30F4%u30A1%u30F3%u30B5%u30F3%u30CC%u30C9%u30A5");
    return self;
},
args: [],
source: "name\x0a\x09^ 'カフェ ヴァンサンヌドゥ'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Vinceness);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.cafe-deux.com/cgi-bin/cafe-deuxcom/siteup.cgi%3Fcategory%3D5%26page%3D1");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.cafe-deux.com/cgi-bin/cafe-deuxcom/siteup.cgi?category=5&page=1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Vinceness);



smalltalk.addClass('WindMonad', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u7DD1\u533A\u9CF4\u6D77\u753A\u5927\u6E05\u6C3469\u221247";
    return self;
},
args: [],
source: "address\x0a\x09^ '愛知県名古屋市緑区鳴海町大清水69−47'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WindMonad);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "\u98A8\u306E\u30E2\u30CA\u30C9";
    return self;
},
args: [],
source: "name\x0a\x09^ '風のモナド'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WindMonad);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return "http://www.facebook.com/IhatovuCultureSchool";
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.facebook.com/IhatovuCultureSchool'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WindMonad);



smalltalk.addClass('ZTres', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u693F%u753A3%u756A19%u53F7%u30A6%u30A4%u30F3%u30B0%u30D3%u30EB2F");
    return self;
},
args: [],
source: "address\x0a\x09^ '名古屋市中村区椿町3番19号ウイングビル2F'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ZTres);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("Cafe%20Z-TRES");
    return self;
},
args: [],
source: "name\x0a\x09^ 'Cafe Z-TRES'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ZTres);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function () {
    var self = this;
    return unescape("http%3A//www.forvex.co.jp/ztres/");
    return self;
},
args: [],
source: "url\x0a\x09^ 'http://www.forvex.co.jp/ztres/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ZTres);



smalltalk.addClass('ScheduleEditor', smalltalk.Widget, ['source', 'klazz'], 'DyNagoya');
smalltalk.addMethod(
"_apply",
smalltalk.method({
selector: "apply",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@klazz'], "_new", []), "_evaluate_", [smalltalk.send(self['@source'], "_val", [])]);
    return self;
},
args: [],
source: "apply\x0a  klazz new evaluate: source val",
messageSends: ["evaluate:", "new", "val"],
referencedClasses: []
}),
smalltalk.ScheduleEditor);

smalltalk.addMethod(
"_handleKeys_",
smalltalk.method({
selector: "handleKeys:",
category: 'not yet classified',
fn: function (anEvent) {
    var self = this;
    if (anEvent.ctrlKey) {
        if (anEvent.keyCode === 190) {
            self._apply();
            anEvent.preventDefault();
            return false;
        }
    }
    return self;
},
args: ["anEvent"],
source: "handleKeys: anEvent\x0a    <\x0a\x09if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 190) { // ctrl + greater\x0a\x09\x09\x09self._apply();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}\x0a    >",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScheduleEditor);

smalltalk.addMethod(
"_klazz_",
smalltalk.method({
selector: "klazz:",
category: 'not yet classified',
fn: function (aClass) {
    var self = this;
    self['@klazz'] = aClass;
    return self;
},
args: ["aClass"],
source: "klazz: aClass\x0a\x09klazz := aClass\x0a  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScheduleEditor);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    self['@source'] = function ($rec) {smalltalk.send($rec, "_css_put_", ["position", "absolute"]);smalltalk.send($rec, "_css_put_", ["width", "95%"]);smalltalk.send($rec, "_css_put_", ["height", "98%"]);smalltalk.send($rec, "_css_put_", ["left", "12px"]);smalltalk.send($rec, "_css_put_", ["right", "12px"]);smalltalk.send($rec, "_css_put_", ["top", "2px"]);smalltalk.send($rec, "_css_put_", ["bottom", "2px"]);smalltalk.send($rec, "_val_", [smalltalk.send(smalltalk.send(self['@klazz'], "_new", []), "_source", [])]);return smalltalk.send($rec, "_onKeyDown_", [function (thisisplaceholder1) {return smalltalk.send(self, "_handleKeys_", [thisisplaceholder1]);}]);}(smalltalk.send(html, "_textarea", []));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09source := html textarea \x0a\x09\x09css: 'position' put: 'absolute';\x0a\x09\x09css: 'width' put: '95%';\x0a\x09\x09css: 'height' put: '98%';\x0a\x09\x09css: 'left' put: '12px';\x0a\x09\x09css: 'right' put: '12px';\x0a\x09\x09css: 'top' put: '2px';\x0a\x09\x09css: 'bottom' put: '2px';\x0a\x09\x09val: (klazz new source);\x0a\x09\x09onKeyDown: [ self handleKeys: %1 ]\x0a",
messageSends: ["css:put:", "val:", "source", "new", "onKeyDown:", "handleKeys:", "textarea"],
referencedClasses: []
}),
smalltalk.ScheduleEditor);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@source'];
    return self;
},
args: [],
source: "source\x0a  ^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScheduleEditor);


smalltalk.addMethod(
"_open_",
smalltalk.method({
selector: "open:",
category: 'not yet classified',
fn: function (aClass) {
    var self = this;
    var this_ = nil;
    this_ = smalltalk.send(self, "_new", []);
    smalltalk.send(this_, "_klazz_", [aClass]);
    (function ($rec) {smalltalk.send($rec, "_widget_", [this_]);smalltalk.send($rec, "_modal_", [false]);smalltalk.send($rec, "_width_", ["50%"]);smalltalk.send($rec, "_title_", ["Schedule Editor"]);smalltalk.send($rec, "_height_", [400]);smalltalk.send($rec, "_button_action_", ["apply", function () {return smalltalk.send(this_, "_apply", []);}]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", [])));
    return smalltalk.send(smalltalk.send(this_, "_source", []), "_css_put_", ["font-size", "1.5em"]);
    return self;
},
args: ["aClass"],
source: "open: aClass\x0a\x09| this |\x0a\x09this := self new.\x0a\x09this klazz: aClass.\x0a\x09DialogBox new widget: this; modal: false; width: '50%'; title: 'Schedule Editor'; height: 400; \x0a\x09\x09button: 'apply' action: [ this apply ];\x0a\x09open.\x0a\x09^ this source css: 'font-size' put: '1.5em'",
messageSends: ["new", "klazz:", "widget:", "modal:", "width:", "title:", "height:", "button:action:", "apply", "open", "css:put:", "source"],
referencedClasses: ["DialogBox"]
}),
smalltalk.ScheduleEditor.klass);


smalltalk.addClass('Screen', smalltalk.Widget, ['index', 'page'], 'DyNagoya');
smalltalk.addMethod(
"_animateIn_method_",
smalltalk.method({
selector: "animateIn:method:",
category: 'private',
fn: function (jq, aString) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_show", []);return smalltalk.send($rec, "_toggleClass_", [aString]);}(jq));
    smalltalk.send(function () {return smalltalk.send(jq, "_toggleClass_", [aString]);}, "_valueWithTimeout_", [1000]);
    return self;
},
args: ["jq", "aString"],
source: "animateIn: jq method: aString\x0a  jq show; toggleClass: aString.\x0a  [jq toggleClass: aString]  valueWithTimeout:1000\x0a",
messageSends: ["show", "toggleClass:", "valueWithTimeout:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_animateOut_method_",
smalltalk.method({
selector: "animateOut:method:",
category: 'private',
fn: function (jq, aString) {
    var self = this;
    smalltalk.send(jq, "_toggleClass_", [aString]);
    smalltalk.send(function () {return function ($rec) {smalltalk.send($rec, "_hide", []);return smalltalk.send($rec, "_toggleClass_", [aString]);}(jq);}, "_valueWithTimeout_", [1000]);
    return self;
},
args: ["jq", "aString"],
source: "animateOut: jq method: aString\x0a  jq toggleClass: aString.\x0a  [jq hide; toggleClass: aString]  valueWithTimeout:1000",
messageSends: ["toggleClass:", "valueWithTimeout:", "hide"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'private',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("#layer", "__comma", [self['@index']]), "_asJQuery", []);
    return self;
},
args: [],
source: "current\x0a\x09^ ('#layer', index) asJQuery",
messageSends: ["asJQuery", ","],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_fade_",
smalltalk.method({
selector: "fade:",
category: 'action',
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_flip_before_after_", [aPage, "fadeOutDown", "fadeInUp"]);
    return self;
},
args: ["aPage"],
source: "fade: aPage\x0a\x09self flip: aPage before: 'fadeOutDown' after: 'fadeInUp'",
messageSends: ["flip:before:after:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_flip_",
smalltalk.method({
selector: "flip:",
category: 'action',
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_skew_", [aPage]);
    return aPage;
    return self;
},
args: ["aPage"],
source: "flip: aPage\x0a\x09self skew: aPage.\x0a\x09^ aPage",
messageSends: ["skew:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_flip_before_after_",
smalltalk.method({
selector: "flip:before:after:",
category: 'action',
fn: function (aPage, beforeMethod, afterMethod) {
    var self = this;
    smalltalk.send(self, "_animateOut_method_", [smalltalk.send(self, "_current", []), beforeMethod]);
    smalltalk.send(self, "_nextIndex", []);
    self['@page'] = aPage;
    smalltalk.send(aPage, "_updateToJQuery_", [smalltalk.send(self, "_current", [])]);
    smalltalk.send(self, "_animateIn_method_", [smalltalk.send(self, "_current", []), afterMethod]);
    return self;
},
args: ["aPage", "beforeMethod", "afterMethod"],
source: "flip: aPage before: beforeMethod after: afterMethod\x0a\x09self animateOut: (self current) method: beforeMethod.\x0a\x09self nextIndex.\x0a\x09page := aPage.\x0a\x09aPage updateToJQuery: (self current).\x0a\x09self animateIn: (self current) method: afterMethod",
messageSends: ["animateOut:method:", "current", "nextIndex", "updateToJQuery:", "animateIn:method:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    self['@index'] = 1;
    return self;
},
args: [],
source: "initialize\x0a\x09index := 1",
messageSends: [],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_layers",
smalltalk.method({
selector: "layers",
category: 'private',
fn: function () {
    var self = this;
    return ["#layer1", "#layer2"];
    return self;
},
args: [],
source: "layers\x0a\x09^ { '#layer1'. '#layer2' }",
messageSends: [],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_nextIndex",
smalltalk.method({
selector: "nextIndex",
category: 'private',
fn: function () {
    var self = this;
    self['@index'] = ($receiver = smalltalk.send(self['@index'], "_\\\\", [smalltalk.send(smalltalk.send(self, "_layers", []), "_size", [])])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);
    return self['@index'];
    return self;
},
args: [],
source: "nextIndex\x0a\x09index := index \x5c\x5c (self layers size ) + 1.\x0a\x09^ index",
messageSends: ["+", "\x5c\x5c\x5c\x5c", "size", "layers"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_page",
smalltalk.method({
selector: "page",
category: 'private',
fn: function () {
    var self = this;
    return self['@page'];
    return self;
},
args: [],
source: "page\x0a  ^ page",
messageSends: [],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_id_", ["screen"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(1, "_to_", [2]), "_do_", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_id_", [smalltalk.send("layer", "__comma", [thisisplaceholder1])]);return smalltalk.send($rec, "_class_", ["animated"]);}(smalltalk.send(html, "_div", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div id: 'screen'; with: [\x0a\x09\x09(1 to: 2 ) do: [ html div id: 'layer', %1; class: 'animated' ]\x0a\x09]",
messageSends: ["id:", "with:", "do:", "to:", ",", "class:", "div"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_roll_",
smalltalk.method({
selector: "roll:",
category: 'action',
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_flip_before_after_", [aPage, "rollOut", "rollIn"]);
    return self;
},
args: ["aPage"],
source: "roll: aPage\x0a\x09self flip: aPage before: 'rollOut' after: 'rollIn'",
messageSends: ["flip:before:after:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_skew_",
smalltalk.method({
selector: "skew:",
category: 'action',
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_flip_before_after_", [aPage, "lightSpeedOut", "lightSpeedIn"]);
    return self;
},
args: ["aPage"],
source: "skew: aPage\x0a\x09self flip: aPage before: 'lightSpeedOut' after: 'lightSpeedIn'",
messageSends: ["flip:before:after:"],
referencedClasses: []
}),
smalltalk.Screen);


smalltalk.Screen.klass.iVarNames = ['single'];
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'not yet classified',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_page", []), "_do_", [aBlock]);
    return self;
},
args: ["aBlock"],
source: "add: aBlock\x0a\x09Screen new page do: aBlock",
messageSends: ["do:", "page", "new"],
referencedClasses: ["Screen"]
}),
smalltalk.Screen.klass);

smalltalk.addMethod(
"_htmlCanvas",
smalltalk.method({
selector: "htmlCanvas",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_page", []), "_body", []);
    return self;
},
args: [],
source: "htmlCanvas\x0a\x09^ Screen new page body",
messageSends: ["body", "page", "new"],
referencedClasses: ["Screen"]
}),
smalltalk.Screen.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = self['@single']) == nil || $receiver == undefined ? function () {return self['@single'] = smalltalk.send(self, "_new", [], smalltalk.Screen.klass.superclass || nil);}() : $receiver;
    return self['@single'];
    return self;
},
args: [],
source: "new\x0a\x09single ifNil: [ \x0a\x09\x09single := super new.\x0a\x09].\x0a\x09\x0a\x09^ single",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.Screen.klass);

smalltalk.addMethod(
"_put_",
smalltalk.method({
selector: "put:",
category: 'not yet classified',
fn: function (aWidget) {
    var self = this;
    smalltalk.send(aWidget, "_appendToJQuery_", [smalltalk.send(smalltalk.send(self, "_new", []), "_current", [])]);
    return self;
},
args: ["aWidget"],
source: "put:  aWidget\x0a\x09aWidget appendToJQuery: self new current",
messageSends: ["appendToJQuery:", "current", "new"],
referencedClasses: []
}),
smalltalk.Screen.klass);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(smalltalk.send(smalltalk.Page || Page, "_new", []), "_title_", [aString])]);
    return self;
},
args: ["aString"],
source: "title: aString\x0a\x09Screen new flip:  (Page new title: aString)",
messageSends: ["flip:", "new", "title:"],
referencedClasses: ["Screen", "Page"]
}),
smalltalk.Screen.klass);


smalltalk.addClass('SeminarSession', smalltalk.Widget, ['title', 'start', 'end', 'body', 'long', 'isDone'], 'DyNagoya');
smalltalk.addMethod(
"_done",
smalltalk.method({
selector: "done",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@isDone'] = true;
    smalltalk.send(self['@body'], "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(self, "_drawBackground_", [thisisplaceholder1]);}]);
    return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.RestSession || RestSession]), "_not", []);
    return self;
},
args: [],
source: "done\x0a\x09isDone := true.\x0a\x09body >>= [ self drawBackground: %1].\x0a\x09^ ((self class) = RestSession) not",
messageSends: [">>=", "drawBackground:", "not", "=", "class"],
referencedClasses: ["RestSession"]
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_drawBackground_",
smalltalk.method({
selector: "drawBackground:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    ($receiver = self['@isDone']).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(html, "_css_put_", ["background", "gray"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(html, "_css_put_", ["background", "gray"]);}]);
    return self;
},
args: ["html"],
source: "drawBackground: html\x0a\x09isDone ifTrue: [\x0a\x09\x09html css: 'background' put: 'gray'\x0a\x09]",
messageSends: ["ifTrue:", "css:put:"],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_end_",
smalltalk.method({
selector: "end:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    self['@end'] = smalltalk.send(typeof moment == "undefined" ? nil : moment, "_value_value_", [aString, "HH:mm"]);
    return self;
},
args: ["aString"],
source: "end: aString\x0a\x09end := moment value: aString value: 'HH:mm'",
messageSends: ["value:value:"],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@isDone'] = false;
    return self;
},
args: [],
source: "initialize\x0a\x09isDone := false",
messageSends: [],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_isDone_",
smalltalk.method({
selector: "isDone:",
category: 'not yet classified',
fn: function (aBool) {
    var self = this;
    self['@isDone'] = aBool;
    return self;
},
args: ["aBool"],
source: "isDone: aBool\x0a\x09isDone := aBool",
messageSends: [],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_long",
smalltalk.method({
selector: "long",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@long'];
    return self;
},
args: [],
source: "long\x0a\x09^long",
messageSends: [],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_long_",
smalltalk.method({
selector: "long:",
category: 'not yet classified',
fn: function (aMinutes) {
    var self = this;
    self['@long'] = aMinutes;
    return self;
},
args: ["aMinutes"],
source: "long: aMinutes\x0a\x09long := aMinutes",
messageSends: [],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_minCode",
smalltalk.method({
selector: "minCode",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send("min", "__comma", [($receiver = self['@isDone']).klass === smalltalk.Boolean ? $receiver ? function () {return "!";}() : function () {return "";}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return "!";}, function () {return "";}])]);
    return self;
},
args: [],
source: "minCode\x0a  ^'min', \x0a    (isDone ifTrue: [ '!' ] ifFalse: [ '' ])",
messageSends: [",", "ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_redraw",
smalltalk.method({
selector: "redraw",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "redraw\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    self['@body'] = smalltalk.send(html, "_div", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09body := html div",
messageSends: ["div"],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_setEnd_",
smalltalk.method({
selector: "setEnd:",
category: 'not yet classified',
fn: function (aTime) {
    var self = this;
    self['@end'] = aTime;
    ($receiver = self['@start']) != nil && $receiver != undefined ? function () {return self['@long'] = smalltalk.send(self['@end'], "_diff_unit_", [self['@start'], "minutes"]);}() : nil;
    return self;
},
args: ["aTime"],
source: "setEnd: aTime\x0a\x09end := aTime.\x0a\x09start ifNotNil: [\x0a\x09\x09long := end diff: start unit: 'minutes'\x0a\x09]",
messageSends: ["ifNotNil:", "diff:unit:"],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    self['@start'] = smalltalk.send(typeof moment == "undefined" ? nil : moment, "_value_value_", [aString, "HH:mm"]);
    return self;
},
args: ["aString"],
source: "start: aString\x0a\x09start := moment value: aString value: 'HH:mm'",
messageSends: ["value:value:"],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    self['@title'] = aString;
    return self;
},
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_update_",
smalltalk.method({
selector: "update:",
category: 'not yet classified',
fn: function (from) {
    var self = this;
    smalltalk.send(self, "_updateTime_", [from]);
    smalltalk.send(self, "_redraw", []);
    return self['@end'];
    return self;
},
args: ["from"],
source: "update: from\x0a\x09self updateTime: from.\x0a\x09self redraw.\x0a\x09^ end",
messageSends: ["updateTime:", "redraw"],
referencedClasses: []
}),
smalltalk.SeminarSession);

smalltalk.addMethod(
"_updateTime_",
smalltalk.method({
selector: "updateTime:",
category: 'not yet classified',
fn: function (from) {
    var self = this;
    var end = nil;
    self['@start'] = smalltalk.send(from, "_clone", []);
    self['@end'] = smalltalk.send(smalltalk.send(from, "_clone", []), "_add_min_", ["m", self['@long']]);
    return self;
},
args: ["from"],
source: "updateTime: from\x0a\x09| end |\x0a\x09start := from clone.\x0a\x09end := from clone add: 'm' min: long.",
messageSends: ["clone", "add:min:"],
referencedClasses: []
}),
smalltalk.SeminarSession);



smalltalk.addClass('BufferSession', smalltalk.SeminarSession, ['deadline'], 'DyNagoya');
smalltalk.addMethod(
"_adjust",
smalltalk.method({
selector: "adjust",
category: 'not yet classified',
fn: function () {
    var self = this;
    var t = nil;
    t = ($receiver = smalltalk.send(smalltalk.TimeSchedulePage || TimeSchedulePage, "_isOrdered_and_", [self['@end'], self['@deadline']])).klass === smalltalk.Boolean ? $receiver ? function () {return self['@end'];}() : function () {return self['@deadline'];}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return self['@end'];}, function () {return self['@deadline'];}]);
    t = ($receiver = smalltalk.send(smalltalk.TimeSchedulePage || TimeSchedulePage, "_isOrdered_and_", [self['@start'], t])).klass === smalltalk.Boolean ? $receiver ? function () {return t;}() : function () {return self['@start'];}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return t;}, function () {return self['@start'];}]);
    smalltalk.send(self, "_setEnd_", [smalltalk.send(t, "_clone", [])]);
    return smalltalk.send(self['@end'], "_clone", []);
    return self;
},
args: [],
source: "adjust\x0a\x09| t |\x0a\x09t := (TimeSchedulePage isOrdered: end and: deadline)\x0a\x09\x09ifTrue: [ end ] ifFalse: [ deadline ].\x0a\x09t := (TimeSchedulePage isOrdered: start and: t)\x0a\x09\x09ifTrue: [ t ] ifFalse: [ start ].\x0a\x09self setEnd: t clone.\x0a\x09^ end clone",
messageSends: ["ifTrue:ifFalse:", "isOrdered:and:", "setEnd:", "clone"],
referencedClasses: ["TimeSchedulePage"]
}),
smalltalk.BufferSession);

smalltalk.addMethod(
"_asCode",
smalltalk.method({
selector: "asCode",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("\u30D0\u30C3\u30D5\u30A1(", "__comma", [smalltalk.send(self['@deadline'], "_format_", ["HH:mm"])]), "__comma", ["\u307E\u3067)"]);
    return self;
},
args: [],
source: "asCode\x0a  ^ 'バッファ(', \x0a\x09(deadline format: 'HH:mm'),\x0a\x09'まで)'",
messageSends: [",", "format:"],
referencedClasses: []
}),
smalltalk.BufferSession);

smalltalk.addMethod(
"_deadline_",
smalltalk.method({
selector: "deadline:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    self['@deadline'] = smalltalk.send(typeof moment == "undefined" ? nil : moment, "_value_value_", [aString, "HH:mm"]);
    return self;
},
args: ["aString"],
source: "deadline: aString\x0a\x09deadline := moment value: aString value: 'HH:mm'",
messageSends: ["value:value:"],
referencedClasses: []
}),
smalltalk.BufferSession);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@title'] = "\u4F11\u61A9";
    return self;
},
args: [],
source: "initialize\x0a\x09title := '休憩'",
messageSends: [],
referencedClasses: []
}),
smalltalk.BufferSession);

smalltalk.addMethod(
"_updateTime_",
smalltalk.method({
selector: "updateTime:",
category: 'not yet classified',
fn: function (from) {
    var self = this;
    var t = nil;
    self['@start'] = ($receiver = smalltalk.send(smalltalk.TimeSchedulePage || TimeSchedulePage, "_isOrdered_and_", [from, self['@deadline']])).klass === smalltalk.Boolean ? $receiver ? function () {return from;}() : function () {return self['@deadline'];}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return from;}, function () {return self['@deadline'];}]);
    smalltalk.send(self, "_setEnd_", [($receiver = smalltalk.send(smalltalk.TimeSchedulePage || TimeSchedulePage, "_isOrdered_and_", [from, self['@deadline']])).klass === smalltalk.Boolean ? $receiver ? function () {return self['@deadline'];}() : function () {return from;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return self['@deadline'];}, function () {return from;}])]);
    return self['@end'];
    return self;
},
args: ["from"],
source: "updateTime: from\x0a\x09| t |\x0a\x09start := (TimeSchedulePage isOrdered: from and: deadline)\x0a\x09\x09ifTrue: [ from ] ifFalse: [ deadline ].\x0a\x09self setEnd:( (TimeSchedulePage isOrdered: from and: deadline)\x0a\x09\x09ifTrue: [ deadline ] ifFalse: [ from ]).\x0a\x09^ end",
messageSends: ["ifTrue:ifFalse:", "isOrdered:and:", "setEnd:"],
referencedClasses: ["TimeSchedulePage"]
}),
smalltalk.BufferSession);



smalltalk.addClass('RestSession', smalltalk.SeminarSession, [], 'DyNagoya');
smalltalk.addMethod(
"_adjust",
smalltalk.method({
selector: "adjust",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_setEnd_", [smalltalk.send(smalltalk.TimeSchedulePage || TimeSchedulePage, "_adjust_", [self['@end']])]);
    return smalltalk.send(self['@end'], "_clone", []);
    return self;
},
args: [],
source: "adjust\x0a\x09self setEnd: (TimeSchedulePage adjust: end).\x0a\x09^ end clone",
messageSends: ["setEnd:", "adjust:", "clone"],
referencedClasses: ["TimeSchedulePage"]
}),
smalltalk.RestSession);

smalltalk.addMethod(
"_asCode",
smalltalk.method({
selector: "asCode",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("\u4F11\u61A9 : ", "__comma", [self['@long']]), "__comma", [smalltalk.send(self, "_minCode", [])]);
    return self;
},
args: [],
source: "asCode\x0a  ^ '休憩 : ' , long, self minCode",
messageSends: [",", "minCode"],
referencedClasses: []
}),
smalltalk.RestSession);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@title'] = "\u4F11\u61A9";
    return self;
},
args: [],
source: "initialize\x0a\x09title := '休憩'",
messageSends: [],
referencedClasses: []
}),
smalltalk.RestSession);

smalltalk.addMethod(
"_updateTime_",
smalltalk.method({
selector: "updateTime:",
category: 'not yet classified',
fn: function (from) {
    var self = this;
    smalltalk.send(self, "_updateTime_", [from], smalltalk.RestSession.superclass || nil);
    smalltalk.send(self, "_setEnd_", [smalltalk.send(smalltalk.TimeSchedulePage || TimeSchedulePage, "_adjust_", [self['@end']])]);
    return self['@end'];
    return self;
},
args: ["from"],
source: "updateTime: from\x0a\x09super updateTime: from.\x0a\x09self setEnd: (TimeSchedulePage adjust: end).\x0a\x09^ end",
messageSends: ["updateTime:", "setEnd:", "adjust:"],
referencedClasses: ["TimeSchedulePage"]
}),
smalltalk.RestSession);



smalltalk.addClass('TalkSession', smalltalk.SeminarSession, ['speaker'], 'DyNagoya');
smalltalk.addMethod(
"_asCode",
smalltalk.method({
selector: "asCode",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@title'], "__comma", ["["]), "__comma", [self['@speaker']]), "__comma", ["] : "]), "__comma", [self['@long']]), "__comma", [smalltalk.send(self, "_minCode", [])]);
    return self;
},
args: [],
source: "asCode\x0a  ^ title, '[', speaker, '] : ', long, self minCode",
messageSends: [",", "minCode"],
referencedClasses: []
}),
smalltalk.TalkSession);

smalltalk.addMethod(
"_drawTitle",
smalltalk.method({
selector: "drawTitle",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("\u300C", "__comma", [self['@title']]), "__comma", ["\u300D"]);
    return self;
},
args: [],
source: "drawTitle\x0a\x09^ '「', title, '」'",
messageSends: [","],
referencedClasses: []
}),
smalltalk.TalkSession);

smalltalk.addMethod(
"_redraw",
smalltalk.method({
selector: "redraw",
category: 'not yet classified',
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["border", "1px solid black"]);smalltalk.send($rec, "_css_put_", ["margin", "1px"]);smalltalk.send($rec, "_css_put_", ["padding", "2px"]);return smalltalk.send($rec, "_css_put_", ["font-size", "20px"]);}(self['@body']));
    smalltalk.send(self, "_drawBackground_", [self['@body']]);
    smalltalk.send(self['@body'], "_contents_", [function (html) {(function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@start'], "_format_", ["HH:mm"]), "__comma", ["\u301C"]), "__comma", [smalltalk.send(self['@end'], "_format_", ["HH:mm"])])]);smalltalk.send($rec, "_css_put_", ["width", "200px"]);return smalltalk.send($rec, "_css_put_", ["display", "inline-block"]);}(smalltalk.send(html, "_span", [])));(function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(self, "_speakerLink_with_", [html, self['@speaker']])]);smalltalk.send($rec, "_css_put_", ["margin", "0 5px"]);smalltalk.send($rec, "_css_put_", ["width", "200px"]);return smalltalk.send($rec, "_css_put_", ["display", "inline-block"]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_drawTitle", [])]);}]);
    return self;
},
args: [],
source: "redraw\x0a\x09body css: 'border' put: '1px solid black'; css: 'margin' put: '1px'; css: 'padding' put: '2px';\x0a\x09\x09css: 'font-size' put: '20px'.  \x0a\x09self drawBackground: body.\x0a\x09body contents: [ :html |\x0a\x09\x09html span with: (start format: 'HH:mm'), '〜' , (end format: 'HH:mm'); css: 'width' put: '200px'; css: 'display' put: 'inline-block'.\x0a\x09\x09html span with: (self speakerLink: html with: speaker);\x0a\x09\x09\x09css: 'margin' put: '0 5px'; css: 'width' put: '200px'; css: 'display' put: 'inline-block'.\x0a\x09\x09html span with: self drawTitle\x0a\x09]",
messageSends: ["css:put:", "drawBackground:", "contents:", "with:", ",", "format:", "span", "speakerLink:with:", "drawTitle"],
referencedClasses: []
}),
smalltalk.TalkSession);

smalltalk.addMethod(
"_speaker_",
smalltalk.method({
selector: "speaker:",
category: 'not yet classified',
fn: function (aString) {
    var self = this;
    self['@speaker'] = aString;
    return self;
},
args: ["aString"],
source: "speaker: aString\x0a\x09speaker := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TalkSession);

smalltalk.addMethod(
"_speakerLink_",
smalltalk.method({
selector: "speakerLink:",
category: 'not yet classified',
fn: function (name) {
    var self = this;
    var $early = {};
    try {
        ($receiver = smalltalk.send(name, "_match_", ["^@"])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [function () {return function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send("http://twitter.com/", "__comma", [name])]);return smalltalk.send($rec, "_with_", [smalltalk.send("@", "__comma", [name])]);}(smalltalk.send(typeof html == "undefined" ? nil : html, "_a", []));}];}();}() : function () {return function () {throw $early = [""];}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return function () {throw $early = [function () {return function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send("http://twitter.com/", "__comma", [name])]);return smalltalk.send($rec, "_with_", [smalltalk.send("@", "__comma", [name])]);}(smalltalk.send(typeof html == "undefined" ? nil : html, "_a", []));}];}();}, function () {return function () {throw $early = [""];}();}]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["name"],
source: "speakerLink: name\x0a\x09(name match: '^@') \x0a\x09\x09ifTrue: [ ^ [ html a href: 'http://twitter.com/', name; with: '@',name ] ]\x0a\x09\x09ifFalse: [ ^ '' ]",
messageSends: ["ifTrue:ifFalse:", "match:", "href:", ",", "with:", "a"],
referencedClasses: []
}),
smalltalk.TalkSession);

smalltalk.addMethod(
"_speakerLink_with_",
smalltalk.method({
selector: "speakerLink:with:",
category: 'not yet classified',
fn: function (html, name) {
    var self = this;
    var $early = {};
    try {
        ($receiver = smalltalk.send(name, "_match_", ["^@"])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [function () {return function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send("http://twitter.com/", "__comma", [name])]);return smalltalk.send($rec, "_with_", [name]);}(smalltalk.send(html, "_a", []));}];}();}() : function () {return function () {throw $early = [name];}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return function () {throw $early = [function () {return function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send("http://twitter.com/", "__comma", [name])]);return smalltalk.send($rec, "_with_", [name]);}(smalltalk.send(html, "_a", []));}];}();}, function () {return function () {throw $early = [name];}();}]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["html", "name"],
source: "speakerLink: html with: name\x0a\x09(name match: '^@') \x0a\x09\x09ifTrue: [ ^ [ html a href: 'http://twitter.com/', name; with: name ] ]\x0a\x09\x09ifFalse: [ ^ name ]",
messageSends: ["ifTrue:ifFalse:", "match:", "href:", ",", "with:", "a"],
referencedClasses: []
}),
smalltalk.TalkSession);



smalltalk.addClass('OtherSession', smalltalk.TalkSession, [], 'DyNagoya');
smalltalk.addMethod(
"_asCode",
smalltalk.method({
selector: "asCode",
category: 'not yet classified',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("\u301C", "__comma", [self['@title']]), "__comma", ["\u301C : "]), "__comma", [self['@long']]), "__comma", [smalltalk.send(self, "_minCode", [])]);
    return self;
},
args: [],
source: "asCode\x0a  ^ '〜', title, '〜 : ', long, self minCode",
messageSends: [",", "minCode"],
referencedClasses: []
}),
smalltalk.OtherSession);

smalltalk.addMethod(
"_drawTitle",
smalltalk.method({
selector: "drawTitle",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@title'];
    return self;
},
args: [],
source: "drawTitle\x0a\x09^ title",
messageSends: [],
referencedClasses: []
}),
smalltalk.OtherSession);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.OtherSession.superclass || nil);
    self['@speaker'] = "";
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09speaker := ''",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.OtherSession);



smalltalk.addClass('ToolBar', smalltalk.Widget, ['menu'], 'DyNagoya');
smalltalk.addMethod(
"_clearMenus",
smalltalk.method({
selector: "clearMenus",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(unescape("a.menu%2C%20.dropdown-toggle"), "_asJQuery", []), "_parent_", ["li"]), "_removeClass_", ["open"]);
    return self;
},
args: [],
source: "clearMenus\x0a\x09('a.menu, .dropdown-toggle' asJQuery parent: 'li') removeClass: 'open'",
messageSends: ["removeClass:", "parent:", "asJQuery"],
referencedClasses: []
}),
smalltalk.ToolBar);

smalltalk.addMethod(
"_renderAbout_",
smalltalk.method({
selector: "renderAbout:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["dropdown class"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_class_", [unescape("dropdown-toggle")]);smalltalk.send($rec, "_at_put_", [unescape("data-toggle"), "dropdown"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send("li.dropdown", "_asJQuery", []), "_addClass_", ["open"]);}]);return smalltalk.send($rec, "_with_", ["Menu"]);}(smalltalk.send(html, "_a", [])));return function ($rec) {smalltalk.send($rec, "_class_", [unescape("dropdown-menu")]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_onClick_", [function () {smalltalk.send(smalltalk.AboutDyNagoya || AboutDyNagoya, "_pan", []);return smalltalk.send(self, "_clearMenus", []);}]);return smalltalk.send($rec, "_with_", ["About DyNagoya"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_onClick_", [function () {smalltalk.send(smalltalk.AboutSmalltalk || AboutSmalltalk, "_pan", []);return smalltalk.send(self, "_clearMenus", []);}]);return smalltalk.send($rec, "_with_", ["About Smalltalk"]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_onClick_", [function () {smalltalk.send(smalltalk.Links || Links, "_pan", []);return smalltalk.send(self, "_clearMenus", []);}]);return smalltalk.send($rec, "_with_", ["Links"]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_ul", []));}]);}(smalltalk.send(html, "_li", [])));
    smalltalk.send(smalltalk.send(unescape("%23container"), "_asJQuery", []), "_bind_do_", ["click", function () {return smalltalk.send(self, "_clearMenus", []);}]);
    return self;
},
args: ["html"],
source: "renderAbout: html\x0a  html li class: 'dropdown class'; with: [ \x0a\x09html a style: 'cursor: pointer'; class: 'dropdown-toggle'; at: 'data-toggle' put: 'dropdown'; onClick: [ 'li.dropdown' asJQuery addClass: 'open'  ]; with: 'Menu'.\x0a\x09html ul class: 'dropdown-menu'; with: [\x0a\x09\x09html li: [ html a style: 'cursor: pointer';onClick: [ AboutDyNagoya pan. self clearMenus ]; with: 'About DyNagoya' ].\x0a\x09\x09html li: [ html a style: 'cursor: pointer'; onClick: [ AboutSmalltalk pan. self clearMenus ]; with: 'About Smalltalk' ].\x0a\x09\x09html li: [ html a style: 'cursor: pointer'; onClick: [ Links pan. self clearMenus ]; with: 'Links' ]\x0a\x09]\x0a  ].\x0a  '#container' asJQuery bind: 'click' do: [self clearMenus ]",
messageSends: ["class:", "with:", "style:", "at:put:", "onClick:", "addClass:", "asJQuery", "a", "li:", "pan", "clearMenus", "ul", "li", "bind:do:"],
referencedClasses: ["AboutDyNagoya", "AboutSmalltalk", "Links"]
}),
smalltalk.ToolBar);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["fill"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_style_", ["float:right"]);smalltalk.send($rec, "_class_", ["nav"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Login || Login, "_new", []), "_appendToBrush_", [smalltalk.send(html, "_li", [])]);}]);}(smalltalk.send(html, "_ul", [])));return function ($rec) {smalltalk.send($rec, "_style_", ["float:left"]);smalltalk.send($rec, "_class_", ["nav"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [smalltalk.EntryPoint || EntryPoint]);}]);return smalltalk.send($rec, "_with_", ["Browser"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_onClick_", [function () {return function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", [])]);smalltalk.send($rec, "_fontSize_", ["20px"]);smalltalk.send($rec, "_title_", ["Workspace"]);smalltalk.send($rec, "_modal_", [false]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", []));}]);return smalltalk.send($rec, "_with_", ["Workspace"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.EntryPoint || EntryPoint, "_start", []);}]);return smalltalk.send($rec, "_with_", ["Redraw"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(self, "_renderAbout_", [html]);smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//twitter.com/dynagoya_info")]);return smalltalk.send($rec, "_with_", ["Twitter"]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("https%3A//github.com/maeda-/DyNagoya-Info")]);return smalltalk.send($rec, "_with_", ["GitHub"]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_ul", []));}]);}(smalltalk.send(html, "_div", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'fill'; with:[\x0a\x09\x09html div class: 'container'; with:[\x0a\x09\x09\x09html ul style: 'float:right'; class: 'nav'; with:[\x0a\x09\x09\x09\x09Login new appendToBrush: html li.\x0a\x09\x09\x09].\x0a\x09\x09\x09html ul style: 'float:left'; class: 'nav'; with:[\x0a\x09\x09\x09\x09html li: [ html a href: '#'; onClick: [ Browser openOn: EntryPoint ]; with: 'Browser' ].\x0a\x09\x09\x09\x09html li: [ html a style: 'cursor: pointer'; onClick: [ DialogBox new widget: (SourceArea new); fontSize: '20px'; title: 'Workspace'; modal: false; open ]; with: 'Workspace' ].\x0a\x09\x09\x09\x09html li: [ html a href: '#'; onClick: [ EntryPoint start ]; with: 'Redraw' ].\x0a\x09\x09\x09\x09self renderAbout: html.\x0a\x09\x09\x09\x09html li: [ html a href: 'http://twitter.com/dynagoya_info'; with: 'Twitter' ].\x0a\x09\x09\x09\x09html li: [ html a href: 'https://github.com/maeda-/DyNagoya-Info'; with: 'GitHub' ].\x0a\x09\x09\x09]\x0a\x09\x09]\x0a\x09]",
messageSends: ["class:", "with:", "style:", "appendToBrush:", "new", "li", "ul", "li:", "href:", "onClick:", "openOn:", "a", "widget:", "fontSize:", "title:", "modal:", "open", "start", "renderAbout:", "div"],
referencedClasses: ["Login", "Browser", "EntryPoint", "SourceArea", "DialogBox"]
}),
smalltalk.ToolBar);



smalltalk.addClass('Tooltip', smalltalk.Object, [], 'DyNagoya');

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'not yet classified',
fn: function () {
    var self = this;
    $.powerTip.closeTip();
    return self;
},
args: [],
source: "close\x0a  (< $.powerTip.closeTip() >)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tooltip.klass);

smalltalk.addMethod(
"_on_with_",
smalltalk.method({
selector: "on:with:",
category: 'not yet classified',
fn: function (selector, str) {
    var self = this;
    smalltalk.send(smalltalk.send(selector, "_asJQuery", []), "_powerTip_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("placement", "__minus_gt", ["ne"])])]);
    $(selector).data("powertip", str);
    return $.powerTip.showTip($(selector));
    return self;
},
args: ["selector", "str"],
source: "on: selector with: str\x0a  selector asJQuery  powerTip: #{ 'placement' -> 'ne'}.\x0a\x22  selector asJQuery data: 'powertip' with: 'abc'.\x22\x0a  (< $(selector).data('powertip', str) >).\x0a  ^ (< $.powerTip.showTip($(selector)) >)",
messageSends: ["powerTip:", "asJQuery", "->"],
referencedClasses: []
}),
smalltalk.Tooltip.klass);


