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
    return smalltalk.send(smalltalk.send([smalltalk.send(smalltalk.send(self, "_x", []), "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send("left:", "__comma", [thisisplaceholder1]), "__comma", [";"]);}]), smalltalk.send(smalltalk.send(self, "_y", []), "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send("top:", "__comma", [thisisplaceholder1]), "__comma", [";"]);}])], "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_select_", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_notNil", []);}]);}]), "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_inject_into_", ["position:relative;", function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "__comma", [thisisplaceholder2]);}]);}]);
    return self;
},
args: [],
source: "style\x0a\x09^ {\x0a\x09\x09(self x) >>= [ 'left:', %1, ';' ].\x0a\x09\x09(self y) >>= [ 'top:', %1, ';' ]\x0a\x09   } \x0a\x09   |> [ %1 select: [ %1 notNil ] ]\x0a\x09   |> [ %1 inject: 'position:relative;' into: [ %1, %2] ]",
messageSends: ["|>", ">>=", "x", ",", "y", "select:", "notNil", "inject:into:"],
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
    return "-527px";
    return self;
},
args: [],
source: "y\x0a  ^'-527px'",
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
    return "59px";
    return self;
},
args: [],
source: "x\x0a  ^'59px'",
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
    return "-395px";
    return self;
},
args: [],
source: "y\x0a  ^'-395px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Board);



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
    smalltalk.send(smalltalk.send(html, "_root", []), "_css_put_", ["width", "350px"]);
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "pink"]);smalltalk.send($rec, "_css_put_", ["padding", "0"]);smalltalk.send($rec, "_css_put_", ["width", "100%"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.8"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["text-align", "center"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["padding", "10px 0"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["vertical-align", "top"]);smalltalk.send($rec, "_css_put_", ["margin-right", "10px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(self, "_imageUrl", [])]);}(smalltalk.send(html, "_img", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["\u53C2\u52A0\u65B9\u6CD5\u306F"]);return smalltalk.send($rec, "_css_put_", ["color", "black"]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_css_put_", ["color", "#FF3322"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.HowToJoinPage || HowToJoinPage, "_show", []);}]);return smalltalk.send($rec, "_with_", ["\u3053\u3061\u3089"]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_h3", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html root css:'width' put: '350px'.\x0a\x09html div \x0a\x09\x09css: 'background' put: 'pink';\x0a\x09\x09css: 'padding' put: '0';\x0a\x09\x09css: 'width' put: '100%';\x0a\x09\x09css: 'opacity' put: '0.8';\x0a\x09\x09css: 'color' put: 'white';\x0a\x09\x09css: 'text-align' put: 'center';\x0a\x09with: [\x0a\x09\x09html h3 \x0a\x09\x09\x09css: 'padding' put: '10px 0';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html img css: 'vertical-align' put: 'top'; css:'margin-right' put:'10px'; src: self imageUrl.\x0a\x09\x09\x09\x09html span with: '参加方法は'; \x0a\x09\x09\x09\x09\x09css: 'color' put: 'black'.\x0a\x09\x09\x09\x09html a css: 'color' put: '#FF3322';\x0a\x09\x09\x09\x09\x09onClick: [ HowToJoinPage show];\x0a\x09\x09\x09\x09\x09with: 'こちら'.\x0a\x09\x09\x09]\x0a\x09]",
messageSends: ["css:put:", "root", "with:", "src:", "imageUrl", "img", "span", "onClick:", "show", "a", "h3", "div"],
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
    return "70px";
    return self;
},
args: [],
source: "x\x0a  ^'70px'",
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
    return "-527px";
    return self;
},
args: [],
source: "y\x0a  ^'-527px'",
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



smalltalk.addClass('Dolphin', smalltalk.Icon, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("data%3Aimage/png%3Bbase64%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