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
source: "renderBodyOn: html\x0a\x09html div css: 'width' put: '350px'; css: 'background-color' put: 'yellow'; css: 'opacity' put: '0.7'; css: 'padding' put: '10px'; with: [\x0a\x09\x09html h2 css: 'margin' put: '0'; with: [\x0a\x09\x09\x09html div with:'大名古屋ビルヂングは'.\x0a\x09\x09\x09html div with: '2012年9月30日に'.\x0a\x09\x09\x09html div with: '閉