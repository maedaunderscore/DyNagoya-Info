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
    (function ($rec) {smalltalk.send($rec, "_style_", [smalltalk.send(self, "_style", [])]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(thisisplaceholder1, "_asJQuery", []), "_draggable_", [smalltalk.send(self, "_dragOption", [])]);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderBodyOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09style: (self style);\x0a\x09\x09|> [ %1 asJQuery draggable: (self dragOption)];\x0a\x09\x09with: [ self renderBodyOn: html ]",
messageSends: ["style:", "style", "|>", "draggable:", "asJQuery", "dragOption", "with:", "renderBodyOn:", "div"],
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
    return unescape("data%3Aimage/png%3Bbase64%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%3D%3D");
    return self;
},
args: [],
source: "imageUrl\x0a  ^ 'data:image/png;base64,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' ",
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
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return "493px";
    return self;
},
args: [],
source: "x\x0a  ^'493px'",
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
    return "75px";
    return self;
},
args: [],
source: "y\x0a  ^'75px'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dolphin);


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


smalltalk.addClass('Logo', smalltalk.Icon, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
category: 'accessing',
fn: function () {
    var self = this;
    return "data:image/png;base64,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";
    return self;
},
args: [],
source: "imageUrl\x0a  ^  'data:image/png;base64,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' ",
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
    return "583px";
    return self;
},
args: [],
source: "x\x0a  ^'583px'",
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
    return "-407px";
    return self;
},
args: [],
source: "y\x0a  ^'-407px'",
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



smalltalk.addClass('EntryPoint', smalltalk.Object, [], 'DyNagoya');
smalltalk.EntryPoint.comment="EntryPoint makeWorkspaceNormalTheme "

smalltalk.addMethod(
"_bottomPosition",
smalltalk.method({
selector: "bottomPosition",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["600px"]);smalltalk.send($rec, "_height_", [200]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 600 : smalltalk.send($receiver, "__minus", [600])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 200 : smalltalk.send($receiver, "__minus", [200])]), "__comma", ["px"])]);}(thisisplaceholder1);};
    return self;
},
args: [],
source: "bottomPosition\x0a  ^ [ %1\x0a\x09width: '600px';\x0a\x09height: 200;\x0a\x09x: '', (window innerWidth * 0.9 - 600), 'px';\x0a\x09y: '', (window innerHeight * 0.9 - 200), 'px'\x0a  ]",
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
    smalltalk.send(function () {smalltalk.send(smalltalk.send("#screen", "_asJQuery", []), "_remove", []);smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);return smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(smalltalk.TopPage || TopPage, "_new", [])]);}, "_valueWithTimeout_", [3000]);
    return self;
},
args: [],
source: "screenPreparation\x0a\x09[\x0a\x09  '#screen' asJQuery remove.\x0a\x09  Screen new appendToJQuery: ('body' asJQuery).\x0a\x09  Screen new flip: (TopPage new)\x0a\x09] valueWithTimeout: 3000\x0a",
messageSends: ["valueWithTimeout:", "remove", "asJQuery", "appendToJQuery:", "new", "flip:"],
referencedClasses: ["Screen", "TopPage"]
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
    (function ($rec) {smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_topPosition", [])]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.TranscriptDialog || TranscriptDialog, "_new", [])));
    smalltalk.send(self, "_screenPreparation", []);
    smalltalk.send(smalltalk.LoginPanel || LoginPanel, "_show", []);
    smalltalk.send(self, "_showMessage", []);
    return self;
},
args: [],
source: "start\x0a  WorkspaceDialog new  |> self bottomPosition; open; big.\x0a  TranscriptDialog new |> self topPosition ; open.\x0a\x0a   self screenPreparation.\x0a  LoginPanel show.\x0a  self showMessage.",
messageSends: ["|>", "bottomPosition", "open", "big", "new", "topPosition", "screenPreparation", "show", "showMessage"],
referencedClasses: ["WorkspaceDialog", "TranscriptDialog", "LoginPanel"]
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_topPosition",
smalltalk.method({
selector: "topPosition",
category: 'not yet classified',
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["350px"]);smalltalk.send($rec, "_height_", [300]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 350 : smalltalk.send($receiver, "__minus", [350])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.1 : smalltalk.send($receiver, "__star", [0.1])]), "__comma", ["px"])]);}(thisisplaceholder1);};
    return self;
},
args: [],
source: "topPosition\x0a  ^ [ %1\x0a\x09width: '350px';\x0a\x09height: 300;\x0a\x09x: '', (window innerWidth * 0.9 - 350), 'px';\x0a\x09y: '', (window innerHeight * 0.1), 'px'\x0a  ]",
messageSends: ["width:", "height:", "x:", ",", "-", "*", "innerWidth", "y:", "innerHeight"],
referencedClasses: []
}),
smalltalk.EntryPoint.klass);


smalltalk.addClass('Event', smalltalk.Widget, ['title', 'date', 'start', 'end', 'place', 'detail', 'fixed'], 'DyNagoya');
smalltalk.Event.comment="Event latest addToDSTokai\x0aEvent latest tweet"
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
    smalltalk.send(typeof window == "undefined" ? nil : window, "_open_target_", [smalltalk.send(self, "_gcalUrl_description_", [smalltalk.send(self, "_dstokaiId", []), smalltalk.send(self, "_descriptionForDSTokai", [])]), "_blank"]);
    return self;
},
args: [],
source: "addToDSTokai\x0a  window \x0a\x09open: (self \x0a\x09\x09gcalUrl: self dstokaiId \x0a\x09\x09description: self descriptionForDSTokai) \x0a\x09target: '_blank'",
messageSends: ["open:target:", "gcalUrl:description:", "dstokaiId", "descriptionForDSTokai"],
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
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("\u6B21\u56DE\u306E\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306F", "__comma", [smalltalk.send(self, "_formatPeriod", [])]), "__comma", [" \u5834\u6240:"]), "__comma", [smalltalk.send(self['@place'], "_name", [])]), "__comma", [" \u3067\u958B\u50AC\u3057\u307E\u3059\u3002\u8A73\u7D30\u306F\u3053\u3061\u3089 \u2192 http://dynagoya.info/"]);
    return self;
},
args: [],
source: "tweetMessage\x0a\x09^ '次回のミーティングは',\x0a\x09(self formatPeriod),\x0a\x09' 場所:', (place name),\x0a\x09' で開催します。詳細はこちら → http://dynagoya.info/'",
messageSends: [",", "formatPeriod", "name"],
referencedClasses: []
}),
smalltalk.Event);


smalltalk.addMethod(
"_Event",
smalltalk.method({
selector: "Event",
category: 'events',
fn: function () {
    if (typeof Event === "undefined" || Event == null) {
        Event = objectThatDelegatesTo(OMeta, {date: function () {var $elf = this, _fromIdx = this.input.idx;return this._consumedBy(function () {return function () {this._apply("digit");this._apply("digit");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", "/");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", "/");this._apply("digit");return this._apply("digit");}.call(this);});}, time: function () {var $elf = this, _fromIdx = this.input.idx;return this._consumedBy(function () {return function () {this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", ":");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", ":");this._apply("digit");return this._apply("digit");}.call(this);});}, fromTo2: function () {var $elf = this, _fromIdx = this.input.idx, from, to, body;return function () {from = this._apply("anything");to = this._apply("anything");this._applyWithArgs("seq", from);body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._applyWithArgs("seq", to);});return this._apply("char");}.call(this);});});this._applyWithArgs("seq", to);return body;}.call(this);}, eol: function () {var $elf = this, _fromIdx = this.input.idx, body;return function () {body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._apply("cr");});return this._apply("char");}.call(this);});});this._or(function () {return this._apply("cr");}, function () {return this._apply("empty");});return body;}.call(this);}, cr: function () {var $elf = this, _fromIdx = this.input.idx, r;return function () {r = this._apply("char");return this._pred(r.charCodeAt(0) == 10);}.call(this);}, meeting: function () {var $elf = this, _fromIdx = this.input.idx, title, date, from, to, place, todo;return function () {title = this._applyWithArgs("fromTo2", "", "\u306F");this._apply("spaces");date = this._apply("date");this._applyWithArgs("exactly", "\u306E");from = this._apply("time");this._applyWithArgs("exactly", "\u301C");to = this._apply("time");this._applyWithArgs("exactly", "\u306B");this._apply("spaces");place = this._consumedBy(function () {return this._many1(function () {return this._apply("letter");});});this._apply("spaces");this._applyWithArgs("exactly", "\u3067");this._apply("spaces");todo = this._many1(function () {return function () {this._apply("spaces");this._applyWithArgs("exactly", "-");this._apply("spaces");return this._apply("eol");}.call(this);});return smalltalk.Event._new()._title_(title)._date_(date)._start_(from)._end_(to)._place_(smalltalk[place])._detail_(todo);}.call(this);}});
    }
    return Event;
},
args: [],
source: "ometa Event { \x0a  date = < digit digit digit digit '/' digit digit '/' digit digit > ,\x0a  time = < digit digit ':' digit digit ':' digit digit >,\x0a  fromTo2 :from :to = seq(from) <( ~seq(to) char )*>:body seq(to) -> body,\x0a  eol = <( ~cr char )*>:body (cr | empty) -> body,\x0a  cr = char:r ?{r.charCodeAt(0) == 10},\x0a  meeting = \x0a\x09fromTo2('', 'は'): title spaces \x0a\x09date:date 'の' time:from '〜' time:to 'に' spaces\x0a\x09<letter+>:place  spaces 'で' spaces\x0a\x09( spaces '-' spaces eol)+:todo -> (\x0a\x09\x09smalltalk.Event._new()._title_(title)\x0a\x09\x09._date_(date)\x0a\x09\x09._start_(from)._end_(to)\x0a\x09\x09._place_(smalltalk[place])\x0a\x09\x09._detail_(todo) )\x0a}",
messageSends: [],
referencedClasses: []
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_Events",
smalltalk.method({
selector: "Events",
category: 'events',
fn: function () {
    if (Events == null) {
        Events = objectThatDelegatesTo(OMeta, {date: function () {var $elf = this, _fromIdx = this.input.idx;return this._consumedBy(function () {return function () {this._apply("digit");this._apply("digit");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", "/");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", "/");this._apply("digit");return this._apply("digit");}.call(this);});}, time: function () {var $elf = this, _fromIdx = this.input.idx;return this._consumedBy(function () {return function () {this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", ":");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", ":");this._apply("digit");return this._apply("digit");}.call(this);});}, fromTo2: function () {var $elf = this, _fromIdx = this.input.idx, from, to, body;return function () {from = this._apply("anything");to = this._apply("anything");this._applyWithArgs("seq", from);body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._applyWithArgs("seq", to);});return this._apply("char");}.call(this);});});this._applyWithArgs("seq", to);return body;}.call(this);}, eol: function () {var $elf = this, _fromIdx = this.input.idx, body;return function () {body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._apply("cr");});return this._apply("char");}.call(this);});});this._or(function () {return this._apply("cr");}, function () {return this._apply("empty");});return body;}.call(this);}, cr: function () {var $elf = this, _fromIdx = this.input.idx, r;return function () {r = this._apply("char");return this._pred(r.charCodeAt(0) == 10);}.call(this);}, meeting: function () {var $elf = this, _fromIdx = this.input.idx, title, date, from, to, place, todo;return function () {title = this._applyWithArgs("fromTo2", "", "\u306F");this._apply("spaces");date = this._apply("date");this._applyWithArgs("exactly", "\u306E");from = this._apply("time");this._applyWithArgs("exactly", "\u301C");to = this._apply("time");this._applyWithArgs("exactly", "\u306B");this._apply("spaces");place = this._consumedBy(function () {return this._many1(function () {return this._apply("letter");});});this._apply("spaces");this._applyWithArgs("exactly", "\u3067");this._apply("spaces");todo = this._many1(function () {return function () {this._apply("spaces");this._applyWithArgs("exactly", "-");this._apply("spaces");return this._apply("eol");}.call(this);});return smalltalk.Event._new()._title_(title)._date_(date)._start_(from)._end_(to)._place_(smalltalk[place])._detail_(todo);}.call(this);}});
    }
    return Events;
},
args: [],
source: "ometa Events {\x0a  date = < digit digit digit digit '/' digit digit '/' digit digit > ,\x0a  time = < digit digit ':' digit digit ':' digit digit >,\x0a  fromTo2 :from :to = seq(from) <( ~seq(to) char )*>:body seq(to) -> body,\x0a  eol = <( ~cr char )*>:body (cr | empty) -> body,\x0a  cr = char:r ?{r.charCodeAt(0) == 10},\x0a  meeting = \x0a\x09fromTo2('', 'は'): title spaces \x0a\x09date:date 'の' time:from '〜' time:to 'に' spaces\x0a\x09<letter+>:place  spaces 'で' spaces\x0a\x09( spaces '-' spaces eol)+:todo -> (\x0a\x09\x09smalltalk.Event._new()._title_(title)\x0a\x09\x09._date_(date)\x0a\x09\x09._start_(from)._end_(to)\x0a\x09\x09._place_(smalltalk[place])\x0a\x09\x09._detail_(todo) )\x0a}",
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
"_latest",
smalltalk.method({
selector: "latest",
category: 'events',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_meeting10", []);
    return self;
},
args: [],
source: "latest\x0a\x09^ self meeting10",
messageSends: ["meeting10"],
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
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", ["DyNagoya MTG \uFF0309"]);smalltalk.send($rec, "_date_", ["2012/10/20"]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:00:00"]);smalltalk.send($rec, "_place_", [smalltalk.Mattariya || Mattariya]);return smalltalk.send($rec, "_detail_", [["OMeta\u3092\u3044\u3058\u308B", "Mist\u3092\u3044\u3058\u305F\u3044", "CPS\u5909\u63DB\u796D\u308A?"]]);}(smalltalk.send(self, "_new", []));
    return self;
},
args: [],
source: "meeting09\x0a\x09^ self new \x0a\x09\x09fixed: true;\x0a\x09\x09title: 'DyNagoya MTG ＃09';\x0a\x09\x09date: '2012/10/20';\x0a\x09\x09start: '18:00:00';\x0a\x09\x09end: '20:00:00';\x0a\x09\x09place: Mattariya;\x0a\x09\x09detail: {\x0a'OMetaをいじる'.\x0a'Mistをいじたい'.\x0a'CPS変換祭り?'\x0a}",
messageSends: ["fixed:", "title:", "date:", "start:", "end:", "place:", "detail:", "new"],
referencedClasses: ["Mattariya"]
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting10",
smalltalk.method({
selector: "meeting10",
category: 'events',
fn: function () {
    return this._Events().matchAll("DyNagoya MTG #10 \u306F \n2012/10/20\u306E18:00:00\u301C20:00:00\u306B\nMattariya \u3067\n - OMeta\u3092\u3044\u3058\u308B\n - Mist\u3092\u3044\u3058\u305F\u3044\n - CPS\u5909\u63DB\u796D\u308A", "meeting");
},
args: [],
source: "grammer Events:meeting > meeting10 \x0aDyNagoya MTG #10 は \x0a2012/10/20の18:00:00〜20:00:00に\x0aMattariya で\x0a - OMetaをいじる\x0a - Mistをいじたい\x0a - CPS変換祭り",
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


smalltalk.addClass('LoginPanel', smalltalk.Widget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_root", []), "_style_", ["position:fixed; font-size: 24px; right:0; padding: 3px"]);
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.Login || Login, "_new", [])]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html root style: 'position:fixed; font-size: 24px; right:0; padding: 3px'.\x0a\x09html div with: Login new.",
messageSends: ["style:", "root", "with:", "div", "new"],
referencedClasses: ["Login"]
}),
smalltalk.LoginPanel);


smalltalk.LoginPanel.klass.iVarNames = ['single'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    ($receiver = self['@single']) == nil || $receiver == undefined ? function () {return self['@single'] = smalltalk.send(self, "_new", [], smalltalk.LoginPanel.klass.superclass || nil);}() : $receiver;
    return self['@single'];
    return self;
},
args: [],
source: "new\x0a\x09single ifNil: [ single := super new ].\x0a\x0a\x09^ single",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.LoginPanel.klass);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_new", []), "_updateToJQuery_", [smalltalk.send("#login", "_asJQuery", [])]);
    return self;
},
args: [],
source: "show\x0a\x09self new updateToJQuery: '#login' asJQuery",
messageSends: ["updateToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
smalltalk.LoginPanel.klass);


smalltalk.addClass('OMeta', smalltalk.Object, [], 'DyNagoya');
smalltalk.OMeta.comment="code := 'ometa Factorial {\x0a  fact 0 -> 1,\x0a  fact :n = fact(n-1):m -> (n*m)\x0a}'.\x0atree := BSOMetaJSParser matchAll: code rule: 'topLevel'.\x0ajs := BSOMetaJSTranslator match:tree rule:'trans'.\x0a< eval(js) >.\x0aFactorial matchAll: '3' rule: 'fact'"


smalltalk.addClass('Page', smalltalk.Widget, ['body', 'todo'], 'DyNagoya');
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
    smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(self, "_new", [])]);
    return self;
},
args: [],
source: "show\x0a  Screen new flip: self new",
messageSends: ["flip:", "new"],
referencedClasses: ["Screen"]
}),
smalltalk.Page.klass);


smalltalk.addClass('AboutDyNagoya', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_dynagoya",
smalltalk.method({
selector: "dynagoya",
category: 'not yet classified',
fn: function () {
    if (smalltalk.AboutDyNagoya.dynagoya == null) {
        smalltalk.AboutDyNagoya.dynagoya = objectThatDelegatesTo(OMeta, {fact: function () {var $elf = this, _fromIdx = this.input.idx, n, m;return this._or(function () {return function () {this._applyWithArgs("exactly", 0);return 1;}.call(this);}, function () {return function () {n = this._apply("anything");m = this._applyWithArgs("fact", n - 1);return n * m;}.call(this);});}});
    }
    return smalltalk.AboutDyNagoya.dynagoya;
},
args: [],
source: "ometa dynagoya {\x0a  fact 0 -> 1,  \x0a  fact :n = fact(n-1):m -> (n*m)\x0a}",
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutDyNagoya);

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
"_hoge",
smalltalk.method({
selector: "hoge",
category: 'not yet classified',
fn: function () {
    return this._dynagoya().matchAll("8 ", "fact");
},
args: [],
source: "grammer dynagoya:fact > hoge\x0a8 ",
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
    (function ($rec) {smalltalk.send($rec, "_style_", ["margin-top: 30px"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_dynagoya", [])]);}(smalltalk.send(html, "_h1", [])));
    smalltalk.send([["\u540D\u53E4\u5C4B\u3067\u52D5\u7684\u8A00\u8A9E(Dynamic Language)\u306B\u3064\u3044\u3066\u8A9E\u308A\u5408\u3046\u30D7\u30ED\u30B0\u30E9\u30DE\u96C6\u56E3\u304CDyNagoya(Dynamic language + Nagoya = DyNagoya)\u3067\u3059\u3002", "\u52D5\u7684\u8A00\u8A9E\u5168\u822C\u3092\u6271\u3063\u3066\u307E\u3059\u304C\u3001\u4E2D\u5FC3\u3068\u306A\u308B\u306E\u306FSmalltalk\u3067\u3059\u3002", "Smalltalk\u306F\u30A2\u30E9\u30F3\u30B1\u30A4(Alan Kay 1940 - )\u306E\u7406\u60F3\u306E\u30D1\u30FC\u30BD\u30CA\u30EB\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3067\u3042\u308B\u300EDynabook\u300F\u306E\u66AB\u5B9A\u5B9F\u88C5\u304B\u3089\u8A95\u751F\u3057\u307E\u3057\u305F\u3002", "DyNagoya\u306E\u300CDy\u300D\u306FDynabook\u306E\u300CDy\u300D\u3082\u517C\u306D\u3066\u3044\u307E\u3059\u3002", "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u79C1\u305F\u3061\u306E\u7406\u60F3\u306E\u95A2\u4FC2\u3092\u6A21\u7D22\u3059\u308B\u3053\u3068\u304CDyNagoya\u306E\u76EE\u7684\u3067\u3059\u3002"], ["DyNagoya\u3067\u306F\u3001\u6708\u306B\uFF11\u56DE\u306E\u4F1A\u5408\u3092\u958B\u3044\u3066\u3044\u307E\u3059\u3002", "\u3053\u306E\u4F1A\u3067\u306F\u3001\u304A\u3044\u3057\u3044\u3054\u98EF\u3092\u98DF\u3079\u306A\u304C\u3089\u3001\u52D5\u7684\u8A00\u8A9E\u306B\u3064\u3044\u3066\u8A9E\u308A\u5408\u3063\u3066\u3044\u307E\u3059\u3002", "\u4F55\u306E\u6E96\u5099\u3082\u5FC3\u69CB\u3048\u3082\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002\u304A\u6C17\u8EFD\u306B\u3054\u53C2\u52A0\u304F\u3060\u3055\u3044\u3002"]], "_do_", [function (each) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "20px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(each, "_do_", [function (each2) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [each2]);}]);}]);}(smalltalk.send(html, "_h2", []));}]);
    return self;
},
args: ["html"],
source: "grammer renderBody: html\x0a\x09html h1 style: 'margin-top: 30px'; with: self dynagoya.\x0a{\x0a  { \x0a     '名古屋で動的言語(Dynamic Language)について語り合うプログラマ集団がDyNagoya(Dynamic language + Nagoya = DyNagoya)です。' .\x0a     '動的言語全般を扱ってますが、中心となるのはSmalltalkです。' .\x0a     'Smalltalkはアランケイ(Alan Kay 1940 - )の理想のパーソナルコンピュータである『Dynabook』の暫定実装から誕生しました。' .\x0a     'DyNagoyaの「Dy」はDynabookの「Dy」も兼ねています。'. \x0a     'コンピュータと私たちの理想の関係を模索することがDyNagoyaの目的です。' \x0a   }  .\x0a   {\x0a     'DyNagoyaでは、月に１回の会合を開いています。'.\x0a     'この会では、おいしいご飯を食べながら、動的言語について語り合っています。'.\x0a     '何の準備も心構えも必要ありません。お気軽にご参加ください。' \x0a   }\x0a}\x0ado: [ :each | html h2 css: 'margin-left' put: '20px'; with: [ each do: [ :each2 | html span with: each2 ] ] ].\x0a\x0a",
messageSends: ["style:", "with:", "dynagoya", "h1", "do:", "css:put:", "span", "h2"],
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
    smalltalk.send(html, "_h1_", [unescape("Smalltalk%u3068%u306F")]);
    smalltalk.send([[unescape("Smalltalk%u3068%u805E%u304F%u3068%u3001%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u6307%u5411%u306E%u30A4%u30E1%u30FC%u30B8%u304C%u5F37%u3044%u306E%u3067%u306F%u306A%u3044%u3067%u3057%u3087%u3046%u304B%uFF1F"), unescape("%u307E%u305F%u3001Java%u3084C++%u306A%u3069%u3067%u4E16%u306B%u6D78%u900F%u3057%u3066%u3044%u308B%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u6307%u5411%u3068Smalltalk%u306E%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u6307%u5411%u3068%u306F%u9055%u3046%u3068%u805E%u3044%u305F%u3053%u3068%u304C%u3042%u308B%u304B%u3082%u77E5%u308C%u307E%u305B%u3093%u3002"), unescape("%u5B9F%u969B%u5168%u304F%u7570%u306A%u308B%u3082%u306E%u3067%u3059%u304C%u3001%u8AAC%u660E%u3059%u308B%u306E%u3082%u9762%u5012%u306A%u306E%u3067%u3001%u3068%u308A%u3042%u3048%u305A%u3001%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u6307%u5411%u306F%u7F6E%u3044%u3066%u304A%u304D%u307E%u3057%u3087%u3046%u3002")], [], [unescape("Smalltalk%u306F%u8A00%u8A9E%u3068%u3044%u3046%u3088%u308A%u74B0%u5883%u3067%u3059%u3002"), unescape("PC%u4E0A%u306BSmalltalk%u3068%u3044%u3046%u4EEE%u60F3%u74B0%u5883%u3092%u8D77%u52D5%u3057%u3001%u305D%u306E%u4EEE%u60F3%u74B0%u5883%u306E%u4E2D%u3067%u30D7%u30ED%u30B0%u30E9%u30E0%u3092%u8A18%u8FF0%u3057%u307E%u3059%u3002"), unescape("%u91CD%u8981%u306A%u30DD%u30A4%u30F3%u30C8%u306F%u3001%u4EEE%u60F3%u74B0%u5883%u81EA%u4F53%u304CSmalltalk%u306E%u30B7%u30F3%u30D7%u30EB%u306A%u6587%u6CD5%u3067%u8A18%u8FF0%u3055%u308C%u3066%u3044%u308B%u70B9%u3042%u308A%u3001%u3057%u304B%u3082%u5B9F%u884C%u4E2D%u306B%u7C21%u5358%u306B%u66F8%u304D%u63DB%u3048%u308B%u3053%u3068%u304C%u53EF%u80FD%u3067%u3059%u3002"), unescape("%u4F8B%u3048%u3070%u3001%u4EEE%u60F3%u74B0%u5883%u306B%u306FIDE%u3082%u542B%u307E%u308C%u3066%u3044%u307E%u3059%u304C%u3001%u305D%u306EIDE%u81EA%u4F53%u306E%u30B3%u30FC%u30C9%u3092%u66F8%u304D%u63DB%u3048%u3066%u3001%u81EA%u5206%u597D%u307F%u306EIDE%u306B%u4ED5%u7ACB%u3066%u308B%u3053%u3068%u304C%u3067%u304D%u307E%u3059%u3002"), unescape("IDE%u3060%u3051%u3067%u306A%u304F%u3001%u30B3%u30F3%u30D1%u30A4%u30E9%u3084%u30A4%u30F3%u30BF%u30D7%u30EA%u30BF%u3001%u6587%u5B57%u5217%u30AF%u30E9%u30B9%u3084%u6570%u5024%u30AF%u30E9%u30B9%u306A%u3069%u306E%u57FA%u672C%u30AF%u30E9%u30B9%u3082%u30D7%u30ED%u30B0%u30E9%u30E0%u5B9F%u884C%u4E2D%u306B%u597D%u304D%u52DD%u624B%u306B%u66F8%u304D%u63DB%u3048%u308B%u3053%u3068%u304C%u3067%u304D%u307E%u3059%u3002"), unescape("%u4E16%u9593%u4E00%u822C%u306E%u30D7%u30ED%u30B0%u30E9%u30DF%u30F3%u30B0%u8A00%u8A9E%u3067%u306F%u3001%u30B3%u30FC%u30C9%u3092%u66F8%u304F%u30D5%u30A7%u30FC%u30BA%u3068%u30D7%u30ED%u30B0%u30E9%u30E0%u3092%u52D5%u304B%u3059%u30D5%u30A7%u30FC%u30BA%u306F%u5225%u7269%u3067%u3059%u304C%u3001Smalltalk%u306B%u306F%u305D%u306E%u57A3%u6839%u304C%u3086%u308B%u304F%u66D6%u6627%u306B%u306A%u3063%u3066%u3044%u307E%u3059%u3002"), unescape("%u751F%u304D%u3066%u3044%u308B%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u3092%u6355%u307E%u3048%u3066%u3001%u305D%u306E%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u3068%u5BFE%u8A71%u7684%u306B%u30D7%u30ED%u30B0%u30E9%u30E0%u3092%u52D5%u304B%u3059%u3053%u3068%u3082%u3067%u304D%u307E%u3059%u3002")], [unescape("Smalltalk%u306E%u5F37%u529B%u3055%u3092%u6D3B%u304B%u3057%u3066%u3001%u5B9F%u52D9%u3067%u4F7F%u3063%u3066%u3044%u308B%u65B9%u3082%u3044%u307E%u3059"), unescape("%28%u6570%u306F%u5C11%u306A%u3044%u3068%u306F%u601D%u3044%u307E%u3059%u304C%u30FB%u30FB%u30FB%29%u3002"), unescape("%u4E00%u65B9%u3067Smalltalk%u306F%u7406%u60F3%u306E%u30B3%u30F3%u30D4%u30E5%u30FC%u30BF%u74B0%u5883%u3092%u8FFD%u6C42%u3059%u308B%u305F%u3081%u306E%u5B9F%u9A13%u5834%u3068%u3082%u8A00%u3048%u307E%u3059%u3002"), unescape("%u65B0%u3057%u3044%u30C7%u30D0%u30A4%u30B9%u3068%u306E%u9023%u643A%u306B%u3082%u7A4D%u6975%u7684%u3067%u3001Arduino%u3084Kinect%u306A%u3069%u306E%u5916%u90E8%u30C7%u30D0%u30A4%u30B9%u3068%u306E%u9023%u643A%u3082%u53EF%u80FD%u3067%u3059%u3002"), unescape("iPad%u3084Android%u4E0A%u3067%u52D5%u4F5C%u3059%u308BSmalltalk%u3082%u6D3B%u767A%u306B%u958B%u767A%u3055%u308C%u3066%u3044%u307E%u3059%u3002")]], "_do_", [function (each) {return function ($rec) {smalltalk.send($rec, "_css_put_", [unescape("margin-left"), "20px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(each, "_do_", [function (each2) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [each2]);}]);}]);}(smalltalk.send(html, "_h3", []));}]);
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09html h1: 'Smalltalkとは'.\x0a{\x0a   {\x0a     'Smalltalkと聞くと、オブジェクト指向のイメージが強いのではないでしょうか？'.\x0a     'また、JavaやC++などで世に浸透しているオブジェクト指向とSmalltalkのオブジェクト指向とは違うと聞いたことがあるかも知れません。'.\x0a     '実際全く異なるものですが、説明するのも面倒なので、とりあえず、オブジェクト指向は置いておきましょう。' \x0a   }. {}. \x0a   {\x0a     'Smalltalkは言語というより環境です。'.\x0a     'PC上にSmalltalkという仮想環境を起動し、その仮想環境の中でプログラムを記述します。'.\x0a     '重要なポイントは、仮想環境自体がSmalltalkのシンプルな文法で記述されている点あり、しかも実行中に簡単に書き換えることが可能です。'.\x0a     '例えば、仮想環境にはIDEも含まれていますが、そのIDE自体のコードを書き換えて、自分好みのIDEに仕立てることができます。' .\x0a     'IDEだけでなく、コンパイラやインタプリタ、文字列クラスや数値クラスなどの基本クラスもプログラム実行中に好き勝手に書き換えることができます。'.\x0a     '世間一般のプログラミング言語では、コードを書くフェーズとプログラムを動かすフェーズは別物ですが、Smalltalkにはその垣根がゆるく曖昧になっています。' .\x0a     '生きているオブジェクトを捕まえて、そのオブジェクトと対話的にプログラムを動かすこともできます。'\x0a   } .\x0a\x22'EclipseやVisual Studioなどのデバッグ実行のイメージが近いかも知れません。Smalltalkの開発は、OSやコンパイラ自体をデバッグモードで動かして、ステップ実行したりオブジェクトの状態を見ながら、\x0aコードを書き換えていろいろ試したりできます。'.\x22\x0a   {\x0a     'Smalltalkの強力さを活かして、実務で使っている方もいます'.\x0a     '(数は少ないとは思いますが・・・)。'.\x0a     '一方でSmalltalkは理想のコンピュータ環境を追求するための実験場とも言えます。'.\x0a     '新しいデバイスとの連携にも積極的で、ArduinoやKinectなどの外部デバイスとの連携も可能です。'.\x0a     'iPadやAndroid上で動作するSmalltalkも活発に開発されています。'\x0a   }\x0a} do: [ :each | html h3 css: 'margin-left' put: '20px'; with: [ each do: [ :each2 | html span with: each2  ]]]\x0a\x0a",
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



smalltalk.addClass('TopPage', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Dolphin || Dolphin, "_new", [])]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Board || Board, "_new", [])]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Logo || Logo, "_new", [])]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(function () {return smalltalk.send(smalltalk.Screen || Screen, "_put_", [smalltalk.send(smalltalk.HowToJoin || HowToJoin, "_new", [])]);}, "_valueWithTimeout_", [2000]);
    return self;
},
args: ["html"],
source: "renderBody: html\x0a\x09\x09html div \x0a\x09\x09\x09with: Dolphin new;\x0a\x09\x09\x09with: Board new;\x0a\x09\x09\x09with: Logo new.\x0a\x09\x09[ Screen put: HowToJoin new] valueWithTimeout:2000\x0a\x09\x09\x0a",
messageSends: ["with:", "new", "div", "valueWithTimeout:", "put:"],
referencedClasses: ["Dolphin", "Board", "Logo", "Screen", "HowToJoin"]
}),
smalltalk.TopPage);



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



smalltalk.addClass('Screen', smalltalk.Widget, ['index', 'page'], 'DyNagoya');
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
"_flip_",
smalltalk.method({
selector: "flip:",
category: 'action',
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_skew_", [aPage]);
    return self;
},
args: ["aPage"],
source: "flip: aPage\x0a\x09self skew: aPage",
messageSends: ["skew:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_flip_before_after_",
smalltalk.method({
selector: "flip:before:after:",
category: 'action',
fn: function (aPage, beforeBlock, afterBlock) {
    var self = this;
    smalltalk.send(beforeBlock, "_value_value_", [self, smalltalk.send(self, "_current", [])]);
    smalltalk.send(self, "_nextIndex", []);
    self['@page'] = aPage;
    smalltalk.send(aPage, "_updateToJQuery_", [smalltalk.send(self, "_current", [])]);
    smalltalk.send(afterBlock, "_value_value_", [self, smalltalk.send(self, "_current", [])]);
    return self;
},
args: ["aPage", "beforeBlock", "afterBlock"],
source: "flip: aPage before: beforeBlock after: afterBlock\x0a\x09beforeBlock value: self value: self current.\x0a\x09self nextIndex.\x0a\x09page := aPage.\x0a\x09aPage updateToJQuery: (self current).\x0a\x09afterBlock value: self value: self current.",
messageSends: ["value:value:", "current", "nextIndex", "updateToJQuery:"],
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
"_normalize",
smalltalk.method({
selector: "normalize",
category: 'private',
fn: function () {
    var self = this;
    return {skewX: "0deg", scale: 1, x: 0, rotate: "0", opacity: 1, duration: 2000};
    return self;
},
args: [],
source: "normalize\x0a  ^ (< { skewX: '0deg', \x0a    scale: 1.0, x: 0, \x0a    rotate: '0', opacity: 1, \x0a    duration: 2000 } >)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_page",
smalltalk.method({
selector: "page",
category: 'action',
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
    (function ($rec) {smalltalk.send($rec, "_id_", ["screen"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(1, "_to_", [2]), "_do_", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(html, "_div", []), "_id_", [smalltalk.send("layer", "__comma", [thisisplaceholder1])]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div id: 'screen'; with: [\x0a\x09\x09(1 to: 2 ) do: [ html div id: 'layer', %1 ]\x0a\x09]",
messageSends: ["id:", "with:", "do:", "to:", "div", ","],
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
    smalltalk.send(self, "_flip_before_after_", [aPage, function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "_rollOut_", [thisisplaceholder2]);}, function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "_rollIn_", [thisisplaceholder2]);}]);
    return self;
},
args: ["aPage"],
source: "roll: aPage\x0a\x09self flip: aPage before: [ %1 rollOut: %2] after: [%1 rollIn: %2]",
messageSends: ["flip:before:after:", "rollOut:", "rollIn:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_rollIn_",
smalltalk.method({
selector: "rollIn:",
category: 'private',
fn: function (jq) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_show", []);smalltalk.send($rec, "_css_", [{x: -100, scale: 0.3, rotate: "-15deg"}]);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_transition_", [smalltalk.send(self, "_normalize", [])]);}]);}(jq));
    return self;
},
args: ["jq"],
source: "rollIn: jq\x0a  jq show; \x0a\x09css: (< { x: -100, scale:0.3, rotate: '-15deg'} >);\x0a\x09|> [ %1 transition: self normalize ]",
messageSends: ["show", "css:", "|>", "transition:", "normalize"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_rollOut_",
smalltalk.method({
selector: "rollOut:",
category: 'private',
fn: function (jq) {
    var self = this;
    smalltalk.send(jq, "_transition_callback_", [{x: 300, rotate: "8deg", opacity: 0, duration: 2000}, function () {return smalltalk.send(jq, "_hide", []);}]);
    return self;
},
args: ["jq"],
source: "rollOut: jq\x0a\x22\x09jq removeClass addClass: 'animated rollOut'\x22\x0a  jq transition: (< { x: 300, rotate: '8deg', opacity: 0, duration: 2000 } >) callback: [ jq hide ]",
messageSends: ["transition:callback:", "hide"],
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
    smalltalk.send(self, "_flip_before_after_", [aPage, function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "_skewOut_", [thisisplaceholder2]);}, function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "_skewIn_", [thisisplaceholder2]);}]);
    return self;
},
args: ["aPage"],
source: "skew: aPage\x0a\x09self flip: aPage before: [ %1 skewOut: %2] after: [%1 skewIn: %2]",
messageSends: ["flip:before:after:", "skewOut:", "skewIn:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_skewIn_",
smalltalk.method({
selector: "skewIn:",
category: 'private',
fn: function (jq) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_show", []);smalltalk.send($rec, "_css_", [{skewX: "40deg"}]);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_transition_", [smalltalk.send(self, "_normalize", [])]);}]);}(jq));
    return self;
},
args: ["jq"],
source: "skewIn: jq\x0a  jq show;\x0a  css: (< { skewX: '40deg' } >);\x0a  |> [ %1 transition: self normalize]",
messageSends: ["show", "css:", "|>", "transition:", "normalize"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_skewOut_",
smalltalk.method({
selector: "skewOut:",
category: 'private',
fn: function (jq) {
    var self = this;
    smalltalk.send(jq, "_transition_callback_", [{skewX: "-40deg", opacity: 0, duration: 2000}, function () {return smalltalk.send(jq, "_hide", []);}]);
    return self;
},
args: ["jq"],
source: "skewOut: jq\x0a  jq transition: (< { skewX: '-40deg', opacity: 0, duration: 2000 } >) callback: [ jq hide ]",
messageSends: ["transition:callback:", "hide"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_zoom_",
smalltalk.method({
selector: "zoom:",
category: 'action',
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_flip_before_after_", [aPage, function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "_zoomOut_", [thisisplaceholder2]);}, function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "_zoomIn_", [thisisplaceholder2]);}]);
    return self;
},
args: ["aPage"],
source: "zoom: aPage\x0a\x09self flip: aPage before: [ %1 zoomOut: %2] after: [%1 zoomIn: %2]",
messageSends: ["flip:before:after:", "zoomOut:", "zoomIn:"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_zoomIn_",
smalltalk.method({
selector: "zoomIn:",
category: 'private',
fn: function (jq) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_show", []);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_transition_", [smalltalk.send(self, "_normalize", [])]);}]);}(jq));
    return self;
},
args: ["jq"],
source: "zoomIn: jq\x0a  jq show;\x0a  |> [ %1 transition: self normalize]",
messageSends: ["show", "|>", "transition:", "normalize"],
referencedClasses: []
}),
smalltalk.Screen);

smalltalk.addMethod(
"_zoomOut_",
smalltalk.method({
selector: "zoomOut:",
category: 'private',
fn: function (jq) {
    var self = this;
    smalltalk.send(jq, "_transition_callback_", [{scale: 3, opacity: 0, duration: 2000}, function () {return smalltalk.send(jq, "_hide", []);}]);
    return self;
},
args: ["jq"],
source: "zoomOut: jq\x0a  jq transition: (< { scale:3.0, opacity: 0, \x0a    duration: 2000 } >) callback: [ jq hide ]",
messageSends: ["transition:callback:", "hide"],
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



