smalltalk.addPackage('DyNagoya', {});
smalltalk.addClass('Action', smalltalk.Object, ['idx', 'maxSize'], 'DyNagoya');
smalltalk.addMethod(
"_all",
smalltalk.method({
selector: "all",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23AboutDyNagoya%20span"), "_asJQuery", []), "_toArray", []), "__comma", [smalltalk.send(smalltalk.send(unescape("%23AboutSmalltalk%20span"), "_asJQuery", []), "_toArray", [])]);
    return self;
}
}),
smalltalk.Action);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    self['@idx'] = 0;
    self['@maxSize'] = smalltalk.send(smalltalk.send(self, "_all", []), "_size", []);
    return self;
}
}),
smalltalk.Action);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self['@idx'], "__eq", [0])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", [" "]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", [" "]);}]);
    self['@idx'] = smalltalk.send(($receiver = self['@idx']).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), "_min_", [self['@maxSize']]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", ["strong"]);
    return self;
}
}),
smalltalk.Action);

smalltalk.addMethod(
"_prev",
smalltalk.method({
selector: "prev",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", [" "]);
    self['@idx'] = smalltalk.send(($receiver = self['@idx']).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]), "_max_", [1]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_all", []), "_at_", [self['@idx']]), "_className_", ["strong"]);
    return self;
}
}),
smalltalk.Action);



smalltalk.addClass('Agenda', smalltalk.Object, [], 'DyNagoya');

smalltalk.addMethod(
"_joint02",
smalltalk.method({
selector: "joint02",
fn: function () {
    var self = this;
    return "\nLinks show.\nAboutDyNagoya show.\nBrowser open.\n\nEvent browser onDialog\nEvent browser onPage\nTopPage show\neditor := ImageEditor new open: '/images/20080512162247.jpg'\neditor scale: 2.0.\nLogo browser onDialog openMethod: 'imageUrl'.\nTopPage show.\nLogo browser onPage openMethod: 'x'.\n\nScreen title: 'About Amber Smalltalk'.\nScreen add: (Amber goodPoint at:1).\nScreen title: 'Smalltalk\u306E\u601D\u3046\u3068\u3053\u308D'.\nScreen add: [ :html | html h2: 'Smalltalk \u306F\u30D6\u30ED\u30C3\u30AF\uFF08\u7121\u540D\u95A2\u6570\uFF09\u3092\u3088\u304F\u4F7F\u3044\u307E\u3059']\nScreen add: [ :html | html h2: '\u5F15\u6570\u3092\u66F8\u304F\u306E\u304C\u5104\u52AB' ].\nScreen add: [ %1 h2: 'Clojure\u98A8\u306B\u66F8\u304D\u305F\u3044' ].\n(1 to: 10) inject: 0 into: [ %1 + %2 ]. \n\nScreen add: [ it h2: 'Groovy\u98A8\u306A\u3089\u3053\u3093\u306A\u304B\u3093\u3058'].\n\nParserEditor  onDialog \n\nScreen add: [ _ h2: 'Scala\u98A8\u306A\u3089\u3053\u3093\u306A\u304B\u3093\u3058'].\n(1 to: 10) inject: 0 into: [ _ + _ ]. \n\nObject browser onPage openMethod: '|>'.\ndesc := PipelineDesc new.\nScreen put: desc\ndesc |> [ Screen put: %1].\nbrowser := DraggableWidget browser onPage openMethod: 'renderOn:'.\nbrowser openMethod: 'style'.\ndesc style.\nEntryPoint browser onPage openClassMethod: 'start'.\n\nScreen title: '\u307E\u3068\u3081'.\nScreen add: [ %1 h2: 'Amber Smalltalk\u3092\u3044\u3058\u308B\u306E\u697D\u3057\u3044'].\nScreen add: [ %1 h2: '\u8208\u5473\u6301\u3063\u305F\u65B9\u306FDyNagoya\u306B\u3082\u662F\u975E' ].\nScreen title:'\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F'; put: Building new; put: FinDesc new.\n";
    return self;
}
}),
smalltalk.Agenda.klass);


smalltalk.addClass('Amber', smalltalk.Object, [], 'DyNagoya');

smalltalk.addMethod(
"_goodPoint",
smalltalk.method({
selector: "goodPoint",
fn: function () {
    var self = this;
    return [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_h2_", ["\u30B3\u30F3\u30D1\u30AF\u30C8\uFF01"]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "30px"]);return smalltalk.send($rec, "_with_", ["Smalltalk\u521D\u5FC3\u8005\u3082\u628A\u63E1\u3057\u3084\u3059\u3044"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "40px"]);return smalltalk.send($rec, "_with_", ["Squeak 4.3: Smalltalk allClasses size \u2192 2105"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "40px"]);return smalltalk.send($rec, "_with_", ["Cuis 4.0: Smalltalk allClasses size \u2192 654"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "40px"]);return smalltalk.send($rec, "_with_", ["Amber (2012/8/26\u6642\u70B9): Smalltalk current classes size \u2192 103"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);}(thisisplaceholder1);}, function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_h2_", ["JS\u3068\u306E\u89AA\u548C\u6027\u304C\u9AD8\u3044\uFF01"]);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "30px"]);return smalltalk.send($rec, "_with_", [" JS\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u6D3B\u7528\u3067\u304D\u308B"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);}(thisisplaceholder1);}, function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_h2_", ["\u52D5\u4F5C\u74B0\u5883\u304C\u591A\u3044\uFF01"]);return smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["font-size", "30px"]);smalltalk.send($rec, "_css_put_", ["margin-left", "30px"]);return smalltalk.send($rec, "_with_", [" Windows 8 App\u3082\u3067\u304D\u305F"]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);}(thisisplaceholder1);}];
    return self;
}
}),
smalltalk.Amber.klass);


smalltalk.addClass('DraggableWidget', smalltalk.Widget, [], 'DyNagoya');
smalltalk.addMethod(
"_dragOption",
smalltalk.method({
selector: "dragOption",
fn: function () {
    var self = this;
    var callback = nil;
    callback = function (e, ui) {var x = nil;var y = nil;smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [ui]);x = smalltalk.send(smalltalk.send(ui, "_position", []), "_left", []);y = smalltalk.send(smalltalk.send(ui, "_position", []), "_top", []);smalltalk.send(smalltalk.Mod || Mod, "_class_attr_value_", [smalltalk.send(self, "_class", []), "x", smalltalk.send(smalltalk.send("", "__comma", [x]), "__comma", ["px"])]);smalltalk.send(smalltalk.Mod || Mod, "_class_attr_value_", [smalltalk.send(self, "_class", []), "y", smalltalk.send(smalltalk.send("", "__comma", [y]), "__comma", ["px"])]);return function ($rec) {smalltalk.send($rec, "_show_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Dropped (", "__comma", [x]), "__comma", [":"]), "__comma", [y]), "__comma", [")"])]);return smalltalk.send($rec, "_cr", []);}(smalltalk.Transcript || Transcript);};
    return {stop: callback};
    return self;
}
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_asString", []), "__comma", [" animated"])]);smalltalk.send($rec, "_style_", [smalltalk.send(self, "_style", [])]);smalltalk.send($rec, "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(thisisplaceholder1, "_asJQuery", []), "_draggable_", [smalltalk.send(self, "_dragOption", [])]);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderBodyOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_style",
smalltalk.method({
selector: "style",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send([smalltalk.send(smalltalk.send(self, "_x", []), "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send("left:", "__comma", [thisisplaceholder1]), "__comma", [";"]);}]), smalltalk.send(smalltalk.send(self, "_y", []), "__gt_gt_eq", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send("top:", "__comma", [thisisplaceholder1]), "__comma", [";"]);}])], "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_select_", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_notNil", []);}]);}]), "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_inject_into_", ["position:fixed;", function (thisisplaceholder1, thisisplaceholder2) {return smalltalk.send(thisisplaceholder1, "__comma", [thisisplaceholder2]);}]);}]);
    return self;
}
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return nil;
    return self;
}
}),
smalltalk.DraggableWidget);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return nil;
    return self;
}
}),
smalltalk.DraggableWidget);


smalltalk.addMethod(
"_asJQuery",
smalltalk.method({
selector: "asJQuery",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(".", "__comma", [smalltalk.send(self, "_asString", [])]), "_asJQuery", []);
    return self;
}
}),
smalltalk.DraggableWidget.klass);


smalltalk.addClass('Announcement', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
fn: function () {
    var self = this;
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEnklEQVRYhd3YW4hVVRgH8F8Xoh6iHkrM0ggMIgiieol68i0igki6QG/1EERJD0FYdKceKpJESYgi7ELTRSVyHrxUhppj5mg1OqM43mtGy0sz41x3D9/a7D1nzpw554z20Aebtdc6a3/7/93+6zub/5mcj6cxhKzKdQa//tegRkoAerEffaW1L3AtXimtrT9XYK4w0Ss9VdZ+RCe+qaLjlrTnjrMF6ozC4qvxeAnIrtL93zhWAfTyCl0jOJl0TEta8XaN3z/DKZxOQLqwIQHYWAI4E3vwrjA0mw6oFvxT596DCdA8dGAdjuMEdicgownUKMbS2txGQV2PLQ3sz7AogcrnGVak+Ul8io9wSHh2SwLZkDTi6hsVFJE/15nGGWntSWxP90fwpcjJ4428ax9uagDYTPwpKGMU12ClIlx3Cy8dTGDa8b6o6h7huXemesl56K/x+0VYKqr0w/TiIZFLZW7rx814VIQtE4SbFwQR+kx4d99UwPpq/JaJChzFVuwVYTkmSLUFm0tA8msvdqb75SaG7jlFcVSVC4X7K6U3rQ9hNTYlRT/gVRGKYeG103hLVPMuDIrcWinCnQlPT2b4i9V+OI6LS/OZCdB2Uf5D4vg5nJTswwGsTQCWGO+pFSK3tqX55+kdtaRqIZQX96R5G3YIiwfT2mkR0i5BA10ijOVQrC4B3CW4bGMy9IEawO7BDZWLPWnMSzgPxSZx9vWlK2f5w8IL6yazNMkaEdrepPOkiMZkMlyeXCJyrDu9ZA2WKazeJhL9kzTfokjsRbiuxou6hMcXiry8FT/X2N9anrSUQHyfxu8UHcNouj8mKm9MeHi7qUv9GVEQGX5L40KTe3nc+pESsFbjk3izopx/Sfd9GMBXU4CCF0TRZKJy30v3w6KgKqW7PFmuYOoNCk/9Jbw5pqjGTOTd77igDmBzsUpU6AGRBlsVTWWlTPBkzuJ5yAZE9fULb+1P1g6L3Kr3jJud9n6cdPXjWXF+ZiY2lVWBdSaLPhCM3Iv7xDmXCQ/moGbUCewq0XUcFL1di6CPNkVqPDYVsK/TOCI80yN47Nu0PiDC3lH5cA25raS7HW+k+So8LDxYBjMB2ICCQFuxWNDDqOCe9nStbQAUzEp6+8Vx9IgoglaRMqPGF0GPKpL3VcOKw7gjja+ncUeDwB5Mzz0l2p4WYeAJYWS7oqHsEx1OVWCjCqLN86l8NSpL8SYWiGgcEnyWh3SJoqup1kSAOSUAP4kzc1C0LR3q461KyQRN5HoHcFTxr+poWp+n4jiqpqhMHbnXRpoAletrE5W4Ps27FUmfE28mjsZJ5X5FSPMHx0xhTQ05lYAMipCtVjSM+/FH2lNXpVfmVYbLmgA1SxhUbru7FZyYif6/7tydozjfmk16mJ+AdZb0tAnyHsPLwosLGlGatzg7TS+/hkUYl+El0e/dq/g7t7gZxTl3HZoGsAyviZzdZrz3epvUiyDBZkOZCVrI8ywHNZbWpy13NQHuTsFRTxifqzkNnVXJP5BcWsfeHMhuxeeDep9tWvKOt0d8PayU+SUg+dfGh84loEqZjSvxfBUg+XV7M4r/BQzgKv4ax4CBAAAAAElFTkSuQmCC";
    return self;
}
}),
smalltalk.Announcement);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_root", []), "_css_put_", ["width", "270px"]);
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "pink"]);smalltalk.send($rec, "_css_put_", ["padding", "0"]);smalltalk.send($rec, "_css_put_", ["width", "100%"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.8"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["text-align", "center"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["padding", "10px 0"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["vertical-align", "top"]);smalltalk.send($rec, "_css_put_", ["margin-right", "10px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(self, "_imageUrl", [])]);}(smalltalk.send(html, "_img", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["\u8A73\u7D30\u306F"]);return smalltalk.send($rec, "_css_put_", ["color", "black"]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_href_", ["http://atnd.org/events/30524"]);smalltalk.send($rec, "_target_", ["_blank"]);smalltalk.send($rec, "_css_put_", ["color", "#FF3322"]);return smalltalk.send($rec, "_with_", ["\u3053\u3061\u3089"]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_h3", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Announcement);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return "70px";
    return self;
}
}),
smalltalk.Announcement);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return "527px";
    return self;
}
}),
smalltalk.Announcement);



smalltalk.addClass('Board', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["alert-message block-message warning ui-draggable"]);smalltalk.send($rec, "_style_", ["margin: 10px"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Event || Event, "_latest", [])]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Board);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return "32px";
    return self;
}
}),
smalltalk.Board);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return "18px";
    return self;
}
}),
smalltalk.Board);



smalltalk.addClass('FinDesc', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["width", "350px"]);smalltalk.send($rec, "_css_put_", ["background-color", "yellow"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.7"]);smalltalk.send($rec, "_css_put_", ["padding", "10px"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin", "0"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["\u5927\u540D\u53E4\u5C4B\u30D3\u30EB\u30C2\u30F3\u30B0\u306F"]);smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["2012\u5E749\u670830\u65E5\u306B"]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", ["\u9589\u9928\u3057\u307E\u3059\u3002"]);}]);}(smalltalk.send(html, "_h2", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.FinDesc);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return "543px";
    return self;
}
}),
smalltalk.FinDesc);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return "-341px";
    return self;
}
}),
smalltalk.FinDesc);



smalltalk.addClass('HowToJoin', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
fn: function () {
    var self = this;
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEnklEQVRYhd3YW4hVVRgH8F8Xoh6iHkrM0ggMIgiieol68i0igki6QG/1EERJD0FYdKceKpJESYgi7ELTRSVyHrxUhppj5mg1OqM43mtGy0sz41x3D9/a7D1nzpw554z20Aebtdc6a3/7/93+6zub/5mcj6cxhKzKdQa//tegRkoAerEffaW1L3AtXimtrT9XYK4w0Ss9VdZ+RCe+qaLjlrTnjrMF6ozC4qvxeAnIrtL93zhWAfTyCl0jOJl0TEta8XaN3z/DKZxOQLqwIQHYWAI4E3vwrjA0mw6oFvxT596DCdA8dGAdjuMEdicgownUKMbS2txGQV2PLQ3sz7AogcrnGVak+Ul8io9wSHh2SwLZkDTi6hsVFJE/15nGGWntSWxP90fwpcjJ4428ax9uagDYTPwpKGMU12ClIlx3Cy8dTGDa8b6o6h7huXemesl56K/x+0VYKqr0w/TiIZFLZW7rx814VIQtE4SbFwQR+kx4d99UwPpq/JaJChzFVuwVYTkmSLUFm0tA8msvdqb75SaG7jlFcVSVC4X7K6U3rQ9hNTYlRT/gVRGKYeG103hLVPMuDIrcWinCnQlPT2b4i9V+OI6LS/OZCdB2Uf5D4vg5nJTswwGsTQCWGO+pFSK3tqX55+kdtaRqIZQX96R5G3YIiwfT2mkR0i5BA10ijOVQrC4B3CW4bGMy9IEawO7BDZWLPWnMSzgPxSZx9vWlK2f5w8IL6yazNMkaEdrepPOkiMZkMlyeXCJyrDu9ZA2WKazeJhL9kzTfokjsRbiuxou6hMcXiry8FT/X2N9anrSUQHyfxu8UHcNouj8mKm9MeHi7qUv9GVEQGX5L40KTe3nc+pESsFbjk3izopx/Sfd9GMBXU4CCF0TRZKJy30v3w6KgKqW7PFmuYOoNCk/9Jbw5pqjGTOTd77igDmBzsUpU6AGRBlsVTWWlTPBkzuJ5yAZE9fULb+1P1g6L3Kr3jJud9n6cdPXjWXF+ZiY2lVWBdSaLPhCM3Iv7xDmXCQ/moGbUCewq0XUcFL1di6CPNkVqPDYVsK/TOCI80yN47Nu0PiDC3lH5cA25raS7HW+k+So8LDxYBjMB2ICCQFuxWNDDqOCe9nStbQAUzEp6+8Vx9IgoglaRMqPGF0GPKpL3VcOKw7gjja+ncUeDwB5Mzz0l2p4WYeAJYWS7oqHsEx1OVWCjCqLN86l8NSpL8SYWiGgcEnyWh3SJoqup1kSAOSUAP4kzc1C0LR3q461KyQRN5HoHcFTxr+poWp+n4jiqpqhMHbnXRpoAletrE5W4Ps27FUmfE28mjsZJ5X5FSPMHx0xhTQ05lYAMipCtVjSM+/FH2lNXpVfmVYbLmgA1SxhUbru7FZyYif6/7tydozjfmk16mJ+AdZb0tAnyHsPLwosLGlGatzg7TS+/hkUYl+El0e/dq/g7t7gZxTl3HZoGsAyviZzdZrz3epvUiyDBZkOZCVrI8ywHNZbWpy13NQHuTsFRTxifqzkNnVXJP5BcWsfeHMhuxeeDep9tWvKOt0d8PayU+SUg+dfGh84loEqZjSvxfBUg+XV7M4r/BQzgKv4ax4CBAAAAAElFTkSuQmCC";
    return self;
}
}),
smalltalk.HowToJoin);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    var div = nil;
    smalltalk.send(smalltalk.send(html, "_root", []), "_css_put_", ["width", "350px"]);
    div = smalltalk.send(html, "_div", []);
    smalltalk.send(function () {return function ($rec) {smalltalk.send($rec, "_class_", ["animated bounceInDown"]);smalltalk.send($rec, "_css_put_", ["background", "pink"]);smalltalk.send($rec, "_css_put_", ["padding", "0"]);smalltalk.send($rec, "_css_put_", ["width", "100%"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.8"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["text-align", "center"]);smalltalk.send($rec, "_css_put_", ["animation-duration", "1.5s"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["padding", "10px 0"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["vertical-align", "top"]);smalltalk.send($rec, "_css_put_", ["margin-right", "10px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(self, "_imageUrl", [])]);}(smalltalk.send(html, "_img", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["\u53C2\u52A0\u65B9\u6CD5\u306F"]);return smalltalk.send($rec, "_css_put_", ["color", "black"]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_css_put_", ["color", "#FF3322"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.HowToJoinPage || HowToJoinPage, "_show", []);}]);return smalltalk.send($rec, "_with_", ["\u3053\u3061\u3089"]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_h3", []));}]);}(div);}, "_valueWithTimeout_", [1500]);
    return self;
}
}),
smalltalk.HowToJoin);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return "60px";
    return self;
}
}),
smalltalk.HowToJoin);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return "505px";
    return self;
}
}),
smalltalk.HowToJoin);



smalltalk.addClass('Icon', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
fn: function () {
    var self = this;
    return "";
    return self;
}
}),
smalltalk.Icon);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl", [])]);
    return self;
}
}),
smalltalk.Icon);



smalltalk.addClass('Logo', smalltalk.Icon, [], 'DyNagoya');
smalltalk.addMethod(
"_imageUrl",
smalltalk.method({
selector: "imageUrl",
fn: function () {
    var self = this;
    return "data:image/png;base64,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";
    return self;
}
}),
smalltalk.Logo);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return "796px";
    return self;
}
}),
smalltalk.Logo);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return "533px";
    return self;
}
}),
smalltalk.Logo);



smalltalk.addClass('PipelineDesc', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["width", "450px"]);smalltalk.send($rec, "_css_put_", ["background-color", "pink"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(html, "_h2_", ["\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u6F14\u7B97\u5B50(|>)\u306FF#\u3067\u3088\u304F\u4F7F\u308F\u308C\u308B\u6F14\u7B97\u5B50"]);return smalltalk.send(html, "_h3_", ["Smalltalk\u3067\u3082\u610F\u5916\u306B\u4FBF\u5229"]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.PipelineDesc);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return "551px";
    return self;
}
}),
smalltalk.PipelineDesc);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return "-230px";
    return self;
}
}),
smalltalk.PipelineDesc);



smalltalk.addClass('RaphaelWidget', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
    var self = this;
    return 300;
    return self;
}
}),
smalltalk.RaphaelWidget);

smalltalk.addMethod(
"_rawHtml",
smalltalk.method({
selector: "rawHtml",
fn: function () {
    var self = this;
    return "";
    return self;
}
}),
smalltalk.RaphaelWidget);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(self, "_renderRaphael_", [smalltalk.send(smalltalk.send(html, "_div", []), "_asJQuery", [])]);
    return self;
}
}),
smalltalk.RaphaelWidget);

smalltalk.addMethod(
"_renderRaphael_",
smalltalk.method({
selector: "renderRaphael:",
fn: function (jq) {
    var self = this;
    return self;
}
}),
smalltalk.RaphaelWidget);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
fn: function () {
    var self = this;
    return 300;
    return self;
}
}),
smalltalk.RaphaelWidget);



smalltalk.addClass('Dolphin', smalltalk.RaphaelWidget, ['body', 'left', 'right', 'eye', 'group'], 'DyNagoya');
smalltalk.addMethod(
"_attribute",
smalltalk.method({
selector: "attribute",
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("stroke-linejoin", "__minus_gt", ["round"]), smalltalk.send("stroke", "__minus_gt", ["#18A8E7"]), smalltalk.send("stroke-linecap", "__minus_gt", ["round"]), smalltalk.send("stroke-miterlimit", "__minus_gt", [10]), smalltalk.send("stroke-width", "__minus_gt", [6]), smalltalk.send("fill", "__minus_gt", ["none"])]);
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_attributeFill",
smalltalk.method({
selector: "attributeFill",
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("stroke", "__minus_gt", ["none"]), smalltalk.send("fill", "__minus_gt", ["#18A8E7"])]);
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_attributeLine",
smalltalk.method({
selector: "attributeLine",
fn: function () {
    var self = this;
    return smalltalk.HashedCollection._fromPairs_([smalltalk.send("stroke-linejoin", "__minus_gt", ["round"]), smalltalk.send("stroke", "__minus_gt", ["#18A8E7"]), smalltalk.send("stroke-linecap", "__minus_gt", ["round"]), smalltalk.send("stroke-miterlimit", "__minus_gt", [10]), smalltalk.send("stroke-width", "__minus_gt", [6]), smalltalk.send("fill", "__minus_gt", ["none"])]);
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
    var self = this;
    return 800;
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_renderRaphael_",
smalltalk.method({
selector: "renderRaphael:",
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
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_rightHand",
smalltalk.method({
selector: "rightHand",
fn: function () {
    var self = this;
    return ["M223.125,118.125c0.417,5.931,2.029,11.581,3.531,17.307c0.658,2.505-0.927,5.636-1.144,8.564c-0.339,4.568-1.907,8.836-3.37,13.177 c-1.373,4.073-2.501,8.14-4.513,12.02c-1.344,2.593-2.869,4.886-5.043,6.636c-3.392,2.73-6.612,5.621-9.742,8.641 c-1.66,1.604-3.57,2.8-5.945,3.49c-4.725,1.371-5.946,0.653-6.434-4.205c-0.455-4.533,1.97-8.28,3.162-12.342 c0.366-1.247,0.838-2.443,1.034-3.781c0.474-3.223,1.014-6.338,2.457-9.441c2.855-6.14,4.861-12.554,6.037-19.391 c0.927-5.396,2.169-10.666,1.969-16.174", "M219.027,108.788c2.75,5.272,6.485,9.807,10.15,14.457c1.604,2.033,1.399,5.537,2.371,8.308c1.516,4.324,1.781,8.861,2.175,13.426 c0.368,4.283,0.958,8.463,0.664,12.822c-0.196,2.914-0.679,5.623-1.972,8.098c-2.021,3.857-3.817,7.795-5.481,11.812 c-0.881,2.133-2.154,3.992-4.056,5.574c-3.784,3.145-5.191,2.973-7.578-1.285c-2.229-3.975-1.502-8.377-2.03-12.576 c-0.163-1.291-0.208-2.576-0.563-3.881c-0.853-3.145-1.602-6.215-1.518-9.637c0.166-6.77-0.559-13.451-2.212-20.188 c-1.306-5.317-2.271-10.644-4.656-15.614"];
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_rightHand2",
smalltalk.method({
selector: "rightHand2",
fn: function () {
    var self = this;
    return "M219.027,108.788c2.75,5.272,6.485,9.807,10.15,14.457c1.604,2.033,1.399,5.537,2.371,8.308c1.516,4.324,1.781,8.861,2.175,13.426 c0.368,4.283,0.958,8.463,0.664,12.822c-0.196,2.914-0.679,5.623-1.972,8.098c-2.021,3.857-3.817,7.795-5.481,11.812 c-0.881,2.133-2.154,3.992-4.056,5.574c-3.784,3.145-5.191,2.973-7.578-1.285c-2.229-3.975-1.502-8.377-2.03-12.576 c-0.163-1.291-0.208-2.576-0.563-3.881c-0.853-3.145-1.602-6.215-1.518-9.637c0.166-6.77-0.559-13.451-2.212-20.188 c-1.306-5.317-2.271-10.644-4.656-15.614";
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_style",
smalltalk.method({
selector: "style",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_style", [], smalltalk.Dolphin.superclass || nil), "__comma", ["width: 376px;"]);
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
fn: function () {
    var self = this;
    return 800;
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return "514px";
    return self;
}
}),
smalltalk.Dolphin);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return "59px";
    return self;
}
}),
smalltalk.Dolphin);


smalltalk.Dolphin.klass.iVarNames = ['s'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    ($receiver = self['@s']) == nil || $receiver == undefined ? function () {return self['@s'] = smalltalk.send(self, "_new", [], smalltalk.Dolphin.klass.superclass || nil);}() : $receiver;
    return self['@s'];
    return self;
}
}),
smalltalk.Dolphin.klass);

smalltalk.addMethod(
"_tweet_",
smalltalk.method({
selector: "tweet:",
fn: function (msg) {
    var self = this;
    return smalltalk.send(smalltalk.Twitter || Twitter, "_tweet_", [msg]);
    return self;
}
}),
smalltalk.Dolphin.klass);


smalltalk.addClass('RawWidget', smalltalk.DraggableWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_rawHtml",
smalltalk.method({
selector: "rawHtml",
fn: function () {
    var self = this;
    return "";
    return self;
}
}),
smalltalk.RawWidget);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(html, "_div", []), "_asJQuery", []), "_html_", [smalltalk.send(self, "_rawHtml", [])]);
    return self;
}
}),
smalltalk.RawWidget);



smalltalk.addClass('EntryPoint', smalltalk.Object, [], 'DyNagoya');

smalltalk.addMethod(
"_bottomPosition",
smalltalk.method({
selector: "bottomPosition",
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["600px"]);smalltalk.send($rec, "_height_", [200]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.98 : smalltalk.send($receiver, "__star", [0.98])).klass === smalltalk.Number ? $receiver - 600 : smalltalk.send($receiver, "__minus", [600])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.95 : smalltalk.send($receiver, "__star", [0.95])).klass === smalltalk.Number ? $receiver - 200 : smalltalk.send($receiver, "__minus", [200])]), "__comma", ["px"])]);}(thisisplaceholder1);};
    return self;
}
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_leftPosition",
smalltalk.method({
selector: "leftPosition",
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["300px"]);smalltalk.send($rec, "_height_", ["300px"]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 300 : smalltalk.send($receiver, "__minus", [300])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.1 : smalltalk.send($receiver, "__star", [0.1])]), "__comma", ["px"])]);}(thisisplaceholder1);};
    return self;
}
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_messages",
smalltalk.method({
selector: "messages",
fn: function () {
    var self = this;
    return ["Type one of below lines on workspace, then click \"DoIt\"", "    AboutDyNagoya show         \"to see what DyNagoya is\"", "    Links show                           \"to see Links about our interest\"", "    Browser open                       \"to open default class browser\"", "    Page browser onDialog          \"to open browser on Dialog\"", "    Icon browser onPage open: Logo method: 'x'", "     JSViewer onDialog               \"to show js code will be emitted\"", "     ParserEditor onDialog          \"to modify parser\""];
    return self;
}
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_positionY",
smalltalk.method({
selector: "positionY",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 200 : smalltalk.send($receiver, "__minus", [200])]), "__comma", ["px"]);
    return self;
}
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_screenPreparation",
smalltalk.method({
selector: "screenPreparation",
fn: function () {
    var self = this;
    var page = nil;
    page = smalltalk.send(smalltalk.TopPage || TopPage, "_new", []);
    smalltalk.send(function () {smalltalk.send(smalltalk.send("#screen", "_asJQuery", []), "_remove", []);smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);return smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [page]);}, "_valueWithTimeout_", [2000]);
    return self;
}
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_showMessage",
smalltalk.method({
selector: "showMessage",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_messages", []), "_do_", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_show_", [thisisplaceholder1]);return smalltalk.send($rec, "_cr", []);}(smalltalk.Transcript || Transcript);}]);
    return self;
}
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_bottomPosition", [])]);smalltalk.send($rec, "_open", []);return smalltalk.send($rec, "_big", []);}(smalltalk.send(smalltalk.WorkspaceDialog || WorkspaceDialog, "_new", [])));
    (function ($rec) {smalltalk.send($rec, "_|_gt", [smalltalk.send(self, "_topPosition", [])]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.TranscriptDialog || TranscriptDialog, "_new", [])));
    smalltalk.send(self, "_screenPreparation", []);
    smalltalk.send(smalltalk.LoginPanel || LoginPanel, "_show", []);
    smalltalk.send(self, "_showMessage", []);
    return self;
}
}),
smalltalk.EntryPoint.klass);

smalltalk.addMethod(
"_topPosition",
smalltalk.method({
selector: "topPosition",
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["350px"]);smalltalk.send($rec, "_height_", [200]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.98 : smalltalk.send($receiver, "__star", [0.98])).klass === smalltalk.Number ? $receiver - 350 : smalltalk.send($receiver, "__minus", [350])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.25 : smalltalk.send($receiver, "__star", [0.25])]), "__comma", ["px"])]);}(thisisplaceholder1);};
    return self;
}
}),
smalltalk.EntryPoint.klass);


smalltalk.addClass('Event', smalltalk.Widget, ['title', 'date', 'start', 'end', 'place', 'detail', 'fixed'], 'DyNagoya');
smalltalk.addMethod(
"_addToCalendar",
smalltalk.method({
selector: "addToCalendar",
fn: function () {
    var self = this;
    smalltalk.send(typeof window == "undefined" ? nil : window, "_open_target_", [smalltalk.send(self, "_gcalUrl", []), "_blank"]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_addToDSTokai",
smalltalk.method({
selector: "addToDSTokai",
fn: function () {
    var self = this;
    smalltalk.send(typeof window == "undefined" ? nil : window, "_open_target_", [smalltalk.send(self, "_gcalUrl_description_", [smalltalk.send(self, "_dstokaiId", []), smalltalk.send(self, "_descriptionForDSTokai", [])]), "_blank"]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_cancel",
smalltalk.method({
selector: "cancel",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.Login || Login, "_user", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.Window || Window, "_alert_", [unescape("You%20need%20to%20log%20in%21")]);}() : function () {return smalltalk.send(smalltalk.Participation || Participation, "_event_user_delete_", [self['@title'], smalltalk.send(smalltalk.Login || Login, "_user", []), true]);}();
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_date_",
smalltalk.method({
selector: "date:",
fn: function (aDate) {
    var self = this;
    self['@date'] = aDate;
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_description",
smalltalk.method({
selector: "description",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(unescape("%3Cul%3E"), "__comma", [smalltalk.send(smalltalk.send(self['@detail'], "_collect_", [function (each) {return smalltalk.send(smalltalk.send(unescape("%3Cli%3E"), "__comma", [each]), "__comma", [unescape("%3C/li%3E")]);}]), "_join_", [""])]), "__comma", [unescape("%3C/ul%3E")]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_descriptionForDSTokai",
smalltalk.method({
selector: "descriptionForDSTokai",
fn: function () {
    var self = this;
    return unescape("%u52D5%u7684%u8A00%u8A9E%u3001%u7279%u306BSmalltalk%u3092%u4E2D%u5FC3%u3068%u3057%u305F%u96C6%u307E%u308A%3Ca%20href%3D%22http%3A//dynagoya.info/index.html%22%20target%3D%22_blank%22%3E%u30DA%u30FC%u30B8%3C/a%3E");
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_detail_",
smalltalk.method({
selector: "detail:",
fn: function (str) {
    var self = this;
    self['@detail'] = str;
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_dstokaiId",
smalltalk.method({
selector: "dstokaiId",
fn: function () {
    var self = this;
    return unescape("6ef63uicdv7l17h035m1grg7fs@group.calendar.google.com");
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_end_",
smalltalk.method({
selector: "end:",
fn: function (aTime) {
    var self = this;
    self['@end'] = aTime;
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_fixed",
smalltalk.method({
selector: "fixed",
fn: function () {
    var self = this;
    return ($receiver = self['@fixed']) == nil || $receiver == undefined ? function () {return true;}() : $receiver;
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_fixed_",
smalltalk.method({
selector: "fixed:",
fn: function (aBool) {
    var self = this;
    self['@fixed'] = aBool;
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_format_",
smalltalk.method({
selector: "format:",
fn: function (aTime) {
    var self = this;
    var d = nil;
    var formatted = nil;
    d = smalltalk.send(smalltalk.Date || Date, "_fromString_", [smalltalk.send(smalltalk.send(self['@date'], "__comma", [" "]), "__comma", [aTime])]);
    formatted = moment(d).add("minutes", moment(d).zone()).format("YYYYMMDDTHHmmss");
    return smalltalk.send(formatted, "__comma", ["Z"]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_formatPeriod",
smalltalk.method({
selector: "formatPeriod",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(moment(this['@date']).format("YYYY/MM/DD(ddd) "), "__comma", [self['@start']]), "__comma", [unescape("%u301C")]), "__comma", [self['@end']]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_gcalParams_desc_",
smalltalk.method({
selector: "gcalParams:desc:",
fn: function (src, aStr) {
    var self = this;
    var base = nil;
    base = [unescape("ctz%3DAsia/Tokyo"), smalltalk.send(unescape("ctext%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [self['@title']])]), smalltalk.send(unescape("details%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [aStr])]), smalltalk.send(unescape("location%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [smalltalk.send(self['@place'], "_gCalString", [])])]), smalltalk.send(unescape("dates%3D"), "__comma", [smalltalk.send(smalltalk.Util || Util, "_encode_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_format_", [self['@start']]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_format_", [self['@end']])])])])];
    ($receiver = src) != nil && $receiver != undefined ? function () {return smalltalk.send(base, "_add_", [smalltalk.send(unescape("src%3D"), "__comma", [src])]);}() : nil;
    return base;
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_gcalUrl",
smalltalk.method({
selector: "gcalUrl",
fn: function () {
    var self = this;
    return smalltalk.send(self, "_gcalUrl_description_", [nil, smalltalk.send(self, "_description", [])]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_gcalUrl_description_",
smalltalk.method({
selector: "gcalUrl:description:",
fn: function (src, aStr) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_gcalParams_desc_", [src, aStr]), "_inject_into_", [unescape("http%3A//www.google.com/calendar/event%3Faction%3DTEMPLATE"), function (acc, x) {return smalltalk.send(smalltalk.send(acc, "__comma", [unescape("%26")]), "__comma", [x]);}]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_ifJS",
smalltalk.method({
selector: "ifJS",
fn: function () {
    var self = this;
    return "\n\tvar ret = new this();\n\tret.title(\"DyNagoya MTG \uFF0309\");\n\tret.date(\"2012/10/20\");\n\tret.start(\"18:00:00\");\n\tret.end(\"20:00:00\");\n\tret.place(Mattariya);\n\tret.detail( [\n\t\t\t\"OMeta\u3092\u3044\u3058\u308B\",\n\t\t\t\"Mist\u3092\u3044\u3058\u305F\u3044\",\n\t\t\t\"CPS\u5909\u63DB\u796D\u308A?\"\n\t\t]);\n\treturn ret;\n";
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_join",
smalltalk.method({
selector: "join",
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.Login || Login, "_user", [])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.Window || Window, "_alert_", [unescape("You%20need%20to%20log%20in%21")]);}() : function () {return smalltalk.send(smalltalk.Participation || Participation, "_event_user_", [self['@title'], smalltalk.send(smalltalk.Login || Login, "_user", [])]);}();
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_list_",
smalltalk.method({
selector: "list:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(smalltalk.Participation || Participation, "_list_callback_", [self['@title'], aBlock]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_listDo_",
smalltalk.method({
selector: "listDo:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self, "_list_", [function (list) {return smalltalk.send(list, "_do_", [aBlock]);}]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_place_",
smalltalk.method({
selector: "place:",
fn: function (aPlaceClass) {
    var self = this;
    self['@place'] = smalltalk.send(aPlaceClass, "_new", []);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", [self['@title']]);
    smalltalk.send(html, "_h2_", [smalltalk.send(smalltalk.send("\u65E5\u6642\uFF1A", "__comma", [smalltalk.send(self, "_formatPeriod", [])]), "__comma", [($receiver = smalltalk.send(self, "_fixed", [])).klass === smalltalk.Boolean ? $receiver ? function () {return "";}() : function () {return "?";}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return "";}, function () {return "?";}])])]);
    smalltalk.send(self['@place'], "_renderOn_", [html]);
    smalltalk.send(html, "_h2_", ["\u5185\u5BB9\uFF1A"]);
    smalltalk.send(smalltalk.send(html, "_h3", []), "_with_", [function ($rec) {smalltalk.send($rec, "_style_", ["margin-left: 30px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self['@detail'], "_do_", [function (each) {return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [each]);}]);}]);}(smalltalk.send(html, "_div", []))]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
fn: function (aTime) {
    var self = this;
    self['@start'] = aTime;
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (str) {
    var self = this;
    self['@title'] = str;
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_tweet",
smalltalk.method({
selector: "tweet",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.Dolphin || Dolphin, "_tweet_", [smalltalk.send(self, "_tweetMessage", [])]);
    return self;
}
}),
smalltalk.Event);

smalltalk.addMethod(
"_tweetMessage",
smalltalk.method({
selector: "tweetMessage",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("\u6B21\u56DE\u306E\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306F", "__comma", [smalltalk.send(self, "_formatPeriod", [])]), "__comma", [" \u5834\u6240:"]), "__comma", [smalltalk.send(self['@place'], "_name", [])]), "__comma", [" \u3067\u958B\u50AC\u3057\u307E\u3059\u3002\u8A73\u7D30\u306F\u3053\u3061\u3089 \u2192 http://dynagoya.info/"]);
    return self;
}
}),
smalltalk.Event);


smalltalk.addMethod(
"_Events",
smalltalk.method({
selector: "Events",
fn: function () {
    if (typeof Events === "undefined" || Events == null) {
        Events = objectThatDelegatesTo(OMeta, {date: function () {var $elf = this, _fromIdx = this.input.idx;return this._consumedBy(function () {return function () {this._apply("digit");this._apply("digit");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", "/");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", "/");this._apply("digit");return this._apply("digit");}.call(this);});}, time: function () {var $elf = this, _fromIdx = this.input.idx;return this._consumedBy(function () {return function () {this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", ":");this._apply("digit");this._apply("digit");this._applyWithArgs("exactly", ":");this._apply("digit");return this._apply("digit");}.call(this);});}, fromTo: function () {var $elf = this, _fromIdx = this.input.idx, from, to, body;return function () {from = this._apply("anything");to = this._apply("anything");this._applyWithArgs("seq", from);body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._applyWithArgs("seq", to);});return this._apply("char");}.call(this);});});this._applyWithArgs("seq", to);return body;}.call(this);}, eol: function () {var $elf = this, _fromIdx = this.input.idx, body;return function () {body = this._consumedBy(function () {return this._many(function () {return function () {this._not(function () {return this._apply("cr");});return this._apply("char");}.call(this);});});this._or(function () {return this._apply("cr");}, function () {return this._apply("empty");});return body;}.call(this);}, cr: function () {var $elf = this, _fromIdx = this.input.idx, r;return function () {r = this._apply("char");return this._pred(r.charCodeAt(0) == 10);}.call(this);}, meeting: function () {var $elf = this, _fromIdx = this.input.idx, title, date, from, to, place, todo;return function () {title = this._applyWithArgs("fromTo", "", "\u306F");this._apply("spaces");date = this._apply("date");this._applyWithArgs("exactly", "\u306E");from = this._apply("time");this._applyWithArgs("exactly", "\u301C");to = this._apply("time");this._applyWithArgs("exactly", "\u306B");this._apply("spaces");place = this._consumedBy(function () {return this._many1(function () {return this._apply("letter");});});this._apply("spaces");this._applyWithArgs("exactly", "\u3067");this._apply("spaces");todo = this._many1(function () {return function () {this._apply("spaces");this._applyWithArgs("exactly", "-");this._apply("spaces");return this._apply("eol");}.call(this);});return smalltalk.Event._new()._title_(title)._date_(date)._start_(from)._end_(to)._place_(smalltalk[place])._detail_(todo);}.call(this);}});
    }
    return Events;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_jointStStudy02",
smalltalk.method({
selector: "jointStStudy02",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", ["\u5408\u540CSmalltalk\u52C9\u5F37\u4F1A@\u540D\u53E4\u5C4B"]);smalltalk.send($rec, "_date_", ["2012/09/29"]);smalltalk.send($rec, "_start_", ["13:30:00"]);smalltalk.send($rec, "_end_", ["18:00:00"]);smalltalk.send($rec, "_place_", [smalltalk.ATeam || ATeam]);return smalltalk.send($rec, "_detail_", [["Amber Smalltalk\u306B\u3088\u308BWeb\u958B\u767A(@maeda_)", "Object Calculus\u306E\u8A71(@t6s)", "OpenQwaq\u306E\u8A71(@umejava)", "Squeak\u304B\u3089Haskell\u3092\u4F7F\u3063\u3066\u307F\u305F(@tomooda)", "Seaside\u3092\u4F7F\u3063\u305F\u30E9\u30D4\u30C3\u30C9\u30D7\u30ED\u30C8\u30BF\u30A4\u30D4\u30F3\u30B0(@kuritar)"]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_latest",
smalltalk.method({
selector: "latest",
fn: function () {
    var self = this;
    return smalltalk.send(self, "_meeting10", []);
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting02",
smalltalk.method({
selector: "meeting02",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0302")]);smalltalk.send($rec, "_date_", [unescape("2012/01/28")]);smalltalk.send($rec, "_start_", ["17:00:00"]);smalltalk.send($rec, 