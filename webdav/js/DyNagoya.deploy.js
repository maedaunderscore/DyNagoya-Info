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
    return "31px";
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
    return "23px";
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
    smalltalk.send(function () {return function ($rec) {smalltalk.send($rec, "_class_", ["animated bounceInDown"]);smalltalk.send($rec, "_css_put_", ["background", "pink"]);smalltalk.send($rec, "_css_put_", ["padding", "0"]);smalltalk.send($rec, "_css_put_", ["width", "100%"]);smalltalk.send($rec, "_css_put_", ["opacity", "0.8"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["text-align", "center"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_css_put_", ["padding", "10px 0"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["vertical-align", "top"]);smalltalk.send($rec, "_css_put_", ["margin-right", "10px"]);return smalltalk.send($rec, "_src_", [smalltalk.send(self, "_imageUrl", [])]);}(smalltalk.send(html, "_img", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["\u53C2\u52A0\u65B9\u6CD5\u306F"]);return smalltalk.send($rec, "_css_put_", ["color", "black"]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_css_put_", ["color", "#FF3322"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.HowToJoinPage || HowToJoinPage, "_show", []);}]);return smalltalk.send($rec, "_with_", ["\u3053\u3061\u3089"]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_h3", []));}]);}(div);}, "_valueWithTimeout_", [1000]);
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
    return "55px";
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
    return "475px";
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
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAABOCAYAAAAqyQ2iAAAPKklEQVR4nO2dW29c1RXH+Rb+BiO19OIXqxeqeZm2qmj9MJSqxQ+mDzRFfoBWTacSpVzcqhQiSxUQLNFysShUmUpFxSAIU4IIE5PYuDCTKTgxttPYSUwST2J77GPP2Offh+OJJ55znb322Xsfr5+0XqJoZp09a/29z76sdQuYxGPbQKMObFq71qgDsFV7xjCMTG5R7QBDjA3MzwHPDgE/ziyiu6via+nUJ/jdwFV8UADqlmrnGYahpE3gcwM20qlP8P2ecxJsBgeyl/HgwCr+OtTAu6PAhTkWFgquLAL39a8FCnqQ9facwUfFLdWPwzAMAW0Cf0emKiwSndpdmVm8OlJHdVHFUJiJZQF3SvnNxnB1YVv14zEMI0CbwGcVCvxeezy3hNWqimExg/cKkP4b/GvksurHZBimQ7QW+Kb19pRxZUHF8OjLozn54t60J3KfqX5chmE6wAiBb9rPs2exXeejH3dnrdjH/lBuSvVjMwwTEaMEvmmnCvt3V3ag31Y27uOFJdWPzzBMBIwU+O6uCu7NfuIc8N5HfFCMb1nG3U4BNm+8MowpGCvwjo2hYe2PI33bNvAV5eNdwZHhedVDwTBMSAwXeEfksdVQMXaxcnhI9ey9Zbx5Fs8wRpAAga8gnXpPxdjFRmNLj9l700rFa6qHhGGYECRC4Lu7kn3K4+8juszeHevteV/1kDAME4LECHx3VwXzU+sqxlA6X9RgbG+2ST6uyjAGkCiB7+46nriTNbWaXrP3pP8xZZgkkTCBr+DFoRkV4yiNyQk9Bf7I8Dmpz729BVg1YLkKrOxYbdmMMseNuuPr0uKurTV915hWvzdqwNVFZ9w3LWg/5iagIqYTJ/DdXSU0rDXPB15ZBo6NAicK0ezYKFzr4mzbwDsdfN6JAjBdDv6BHomxJEEUuzc7ESnQglivAa/ngXuyy6G+/wc9M3hqsIbpMmArPim7XAVeGgZu75kP5ftdmVm8lXdEXyWry8Ab+XBlpZ0xP4NXhi3S+lCm5WMUdIjpBAp8BYdyFc8Hfm64c8EccXk7WFjo/PPSqaOBPxBFdc906iTWd8RkvQZ8MzUj/Jl9mVMRwsyb8SJwG4E/B7LncGmOxKVQbNvAaF78dFM6dRonC4jt6KltA/8eBb4lOOaO3+KvJKblYxh0imlygQ9aItnecmY8HxaBBwY28VXBQXA377PaIidS3JYlPl/s/PN6e94N/IHE/+C23z61beBLwmN8LNB3Pz6bknP0s7enfOOPmSyOS6rieTS/KtXv8SIk5NspnJ/qfLppWj76oWNMkwt8J2uz40X6gZktu4+IaQH1nZ6LQuPg9TYjfvSy87IFgzEsOx3NX+/INz8aW7Jq7+9aOnWS/IRSHH4/ketsT8a0fPRC15jWQuBlDJLXuXiTAoqiPIHXpSQRvx2LLvCNLeAbBK+uYe1g/+lI/vlRrcZ52WwStSrNkk2cfqdTJyLHhEn56IbuMa2VwAOUl3reJP/8uAPKtoEvC47D9cVN18+OW+AtS/xZOrG+zGRoH72YnlKx0V0SFnk1fo9FegMxKR/3YkJMayfwFD40ba3avglkUkBRCPzSgvtGWJwCb1lqSy3cm/0olJ9unFUikk2b7LiY3n/LKv0ew3Z9I5SfJuVjK6bEtJYCT3W5Z2mh/TKOSQGVFIHX4Sbu+6NXQvnaypriJO7uqiCdeiey39eX1R+tDVsfyqR8bMWUmNZS4AGaxhZv5z9v+1yTAioJAn9oUL3Y3PA3YtVR0Q1uKota3O3rMa4J+1mYS4cm5WMTk2JaW4GnuMHp5otJAWW6wFeruiSCY4cHz/j624r65iq7FqVa6qt5ffzu7qrAWvZfYjIpHwHzYlpbgbcs8TO7LPBqBf7bmsyAd20y9Cxe/J4ArXltlreiS1OYVgtaKzYpHwHzYlpbgacQNxZ4dQJ/bk6vmU7TXhsJ7kj11qh+vvvdzm7ytDZNYW42vz9OJuWjiTHNAq9xQJks8PqWvCj4Bx702EBrt+O+Pus4e2+aX90ik/LRxJhmgdc4oEwV+I26jCvxVFZCveb9SqvbGmuruR37bVJReiwyyLyXEUzJR1NjWluBp2hTxwKvRuB1LXHctE8nap5jTrNJWcLJwvaNioAbFvB7glva44UlT7/pqo6W8KfcOh4cuIb7+9fIxny27F7h1ZR8NDWmtRV4ivUuFng1Ak8lNg8NXER10SmdumkB/yC65ex38qA/awl+/jHPm5wnBU/mHBn2XmuluC7/wlD7uep6naaOzTOD7kcmTclHU2NaW4F/XqCMqJ8vpgQUYK7Ai58fL3lWKFyrib/Z+fWUvVXosycDb3CK/AHxiheK9ffxgn+5wtyAWLx4+W5KPpoa09oKvFiiOeb2WmhKQAFmCjyF2CzO+bcDFL2p6VXLXtT310Yu+voNiJU+6MuckPJbhm3eInZ01L2dpgn5aHJMaynw7xLV2+ZaNPELvKjPjwwEHwcEgF8LzCjTKXehFPU9zFl1sb0ld5EU/S2DLiM1EdufcI8XE/LR5JjWTuDpjnuNGTtjaLIfBd6tfpAbYns06nwX+w53v8VO/rjniRuLQjGzfwVeZUxrJ/DfJbop5vU6KxJQbq/gLPC0Pnv5uxexm85yfJ+fMlHgwxeNE4sZeoGPKx9NjmltBP5alba2stftLpGAOpT7uO3zWOBpfQ6zzCH+PXJ8D1P5UYbfYr9l+PINZ4RKJ9MLfFz5aHJMKxf49RrwBwntrrwuhYgE1GGXo14iTX6TKPBxbFSKj428DeIXhhZi91skBp0xDy7fAIhqA73Ax5WPJse0XIG3b7ZGHagtA2fKwLND4p3dvcyv+p5Yx6j26+IPC/xxSqLAizf0DjejlJEMAPA1gpjsy1RuapK8vQVMFAHY21L83qiL/mGaRMNyv4jURLSBiNcxPhPy0eSYlibwKsuW+tXPFm0J2Jf5GBs1ADZwRPCzkijwFDEUpvG0LIGnuxFaQXdXCemWPxjNzbbOxdjbb/Hql2PY9Ljg+xHBLc6D/e3LKYA5+WhqTEsTeLreqlHtmO8gqvMrWkCJ/+COqRD45wguqXV3VXA0v4m65cyAl6vAS8PY+V5bmsDLrAO/tLACQI7Ai9/Adez5oRWsLTtv24sLwH39DZLP9eo+ZEo+mhrTiRP4oO43OpWCTarAyy2rekraUgcgt6iUTIGnujsiy7zO2puSj6bGdKIEPkznG7GzvPEFFGCuwFP4HfS9sgQeoJsNt/8W8gR+jaBBjjx703OsTclHU2M6UQIf5rypuLDFE1BUQaWqHrzIZleY75Up8KKnUrx/C3kCD9D0MZZhfs2hTcpHE2M6MQIfpuMNoFdjhCQLPEXLRb/vlSnwAHCHhOYOsgVetJ6JHPPfEzMpH02M6YQIvPcroBvileHiCSiTBR6QNeOJR+BlNP6QLfAA9SkgcQvaEwPMyUcTYzoBAj8WWKJ1L7ps7CRd4Cmatnh9r2yBB4DDxD1O4xB4vWbE3mWZWzElH02MacMF/njg2VI3dEmCpAs8IOPYYXwCDwA/JFyqiUPgAV26D/m3RmzFlHxsYlJMGyvwvT0ToavguUHRUER2QCVB4AHqzb94BR6gK4AXl8ADwDPEbx9Rza8tohsm5GMrpsS0kQL/RE685rz49WP5AZUUgQcoNy3jF3gA+CnB0ck4BR4AHlW0Hh/UHcoNE/JxLybEtHEC/+lEuNKbYVB9RGs/CTwA/Eaw7ZvsZAjiRcFZZlPg4/T7hZhnxjPlaPthreiej27oHtPGCPzB/lkgXOOZSIjeUEunzkoLqKQJPCBeL0SlwANOWesfdZgjSwsrWKmJNueI7jdFLZkwY1qrdjSkN6FzPnqhc0xrL/AHsjNYJQgcP6pV0U2ekpSASqLAA8DFBfFlClUC3+R6FfjzYLjnSKdO47mhFcC2sSRw/NKr72YY1mrA9yQdRzzYPy20H7YXXfPRD11juk3gRdeVKAS+t+cM3spvYotuNSYQ2waGI2xM9WU+xWRRLBCDAoridIGOAt9kNN/JxZHdZIhrLTuIRh1YmANOTwAnCsBkEThbBpYWAXvPW6fIkUARAWry8QTdiZXenjKu+Je/7xgd8zEMusV0m8DfLbiZ1LyWHKX62l2Z83hysIbpMmIVdTdsG5iZcurV35Ndwk8yF3bsPB7LXcd/ikDdcv7vacEa2Q8HNOO1beBWwST06iYjfpHHvQF0J0yVgfv710J+7+SNZOh8U47O96h8QWDMvUrudsL5OeCBgc0O/CjhqcGq9LfqJjrlYxR0iek2gSdjp8HHpgVYNafRx0rVsdqy8+9Qk2NkiDaHCNtJZ99gOyVUiwXgL0PAL/qv4WfZyzt2CQ8OXMMrw9GO3+mE6Pry2/kLUvxaXQY+LAJ/GwZ+O7CKX/Zf27GreCy3in+OANNlOHXXNUbLfFQc0/IEPuFQXHYI24yXMR+Zb2MM56MXLPAdUK1SFB0K3+yY0ZOwqzybdXFxp943SBKcj96wwDcJmaxvE9XNSKfekfs8jFSaG2KP5y77rkcfJ2rE0Zc5Ed/D6QDnIwks8NhN1r7M9E2bNk22t4DSBHAbYZNwXn83m/YjbSUcyC7gycENvDwM/DG3RVpadrbs3xQ7SXA+0sECD+/z5unUWUn1nycjV8Bk9EJuh5+95l9TPWlwPtLBAo+4k7WCRwiPYzFqiDNmZJ2e0RXORzpY4BF/QIUto8roS3wxo+7Mvio4H+lggUe8AXUoN6X6cRkC4oqZ8cKS6keNHc5HOljgEWdA8VG3pBBHzITtiJQ0OB/pYIFHfAE1P7Wu+lEZIuTHzKnEbvwFwflIBws84gmoUnFV9WMyhMiNmRJq1WTPLP3gfKSDBR7yA2q/BNN+Ql7MTMKK3hApUXA+0sECD7kBNT/F9UOSiJyYGUPDktDVxjA4H+lggYe8ZN3vM7EkQx0z1E0zTIbzkQ4WeNA01mi1pwcvqX4kRjJ0MTOG/03xrL0Vzkc6WOBBN2N4aOAiNjWvmc3QcadA97Nf9V/AxTnVT6AnnI90sMDvsGEBr+eB23vmIwVRX2YWHxTaW7Mx+4PtLafj0EvDTsehtEsBrHTqLA5kL+GV4boj6rwSEwjnIw0s8C7YO11YyhPAG3mn083LO/ZmHqhMOJ2pOFEZT2xwfBDB+dg5LPAMwzAJhQWeYRgmobDAMwzDJJT/A0Adrv0nAIIWAAAAAElFTkSuQmCC";
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
    return "829px";
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
    return "514px";
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



smalltalk.addClass('Dolphin', smalltalk.RawWidget, [], 'DyNagoya');
smalltalk.addMethod(
"_rawHtml",
smalltalk.method({
selector: "rawHtml",
fn: function () {
    var self = this;
    return "\n<svg version=\"1.1\" id=\"layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n\t y=\"0px\" width=\"800.5px\" height=\"800.5px\" viewBox=\"0 0 800 800.5\" enable-background=\"new 0 0 367.5 300.5\"\n\t xml:space=\"preserve\">\n<g transform=\"scale(1.8)\">\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path fill=\"#18A8E7\" d=\"M269.252,63.991c6.833,0.676,12.729-2.77,18.701-5.61c7.079-3.367,14.002-5.835,21.829-6.676\n\t\t\t\t\tc7.572-0.814,15.194-1.071,22.806-0.965c3.854,0.053,7.704,0.288,11.547,0.583c2.579,0.198,6.452-2.521,8.804-3.554\n\t\t\t\t\tc4.959-2.183,8.42-6.964,8.358-12.397c-0.064-5.72-5.688-10.646-10.499-12.758c-6.315-2.772-13.617-4.06-20.209-6.152\n\t\t\t\t\tc-7.537-2.393-15.592-0.97-23.275-0.282c-3.285,0.294-6.534,0.92-9.73,1.713c-3.831,0.95-5.777,2.66-9.342,0.295\n\t\t\t\t\tc-6.425-4.263-12.954-8.171-20.157-10.959c-14.81-5.733-30.096-6.436-45.693-4.599c-15.469,1.821-29.583,5.427-43.817,11.789\n\t\t\t\t\tc-13.257,5.925-26.099,12.48-37.043,22.131c-11.065,9.758-20.058,21.192-29.206,32.68c-1.777,2.232-4.581,4.114-6.007,6.549\n\t\t\t\t\tc-0.798,1.363-0.686,3.052-1.054,4.545c-0.46,1.867-1.578,3.73-2.421,5.449c-3.45,7.038-7.79,13.515-12.056,20.066\n\t\t\t\t\tc-3.985,6.121-6.874,13.195-10.067,19.751c-3.619,7.429-7.049,14.949-10.319,22.539c-6.118,14.196-11.164,28.466-14.714,43.522\n\t\t\t\t\tc-1.746,7.403-3.04,14.91-4.6,22.354c-0.781,3.724-1.676,7.42-2.664,11.094c-0.783,2.911-3.396,2.782-5.999,3.17\n\t\t\t\t\tc-12.032,1.792-25.298,9.743-32.516,19.553c-7.103,9.654,2.594,23.014,11.955,26.354c6.021,2.148,12.564,1.497,18.848,1.656\n\t\t\t\t\tc2.787,0.07,6.754-0.567,9.246,0.82c2.398,1.335,3.133,5.903,4.195,8.213c6.476,14.09,28.035,13.904,36.743,2.328\n\t\t\t\t\tc4.414-5.869-1.675-15.221-1.945-21.388c-0.21-4.793,4.439-8.756,6.769-12.668c2.633-4.422,4.961-8.945,7.901-13.185\n\t\t\t\t\tc5.597-8.068,13.787-15.732,21.898-21.215c3.895-2.632,6.661-6.179,9.955-9.502c3.692-3.725,7.713-7.119,11.762-10.444\n\t\t\t\t\tc8.279-6.8,16.654-13.708,25.583-19.63c4.193-2.781,8.847-5.204,12.685-8.475c3.181-2.711,6.434-7.32,11.169-6.561\n\t\t\t\t\tc6.307,1.013,9.013-8.622,2.658-9.643c-5.828-0.936-11.066,0.38-15.593,4.307c-5.544,4.812-11.332,8.663-17.458,12.726\n\t\t\t\t\tc-11.93,7.912-23.452,17.449-34.074,27.032c-5.033,4.541-9.139,9.601-14.622,13.576c-5.944,4.311-11.341,9.626-16.359,14.967\n\t\t\t\t\tc-4.633,4.932-8.393,10.692-11.673,16.582c-1.645,2.952-3.271,5.883-5.178,8.677c-2.123,3.112-4.192,5.337-5.046,9.135\n\t\t\t\t\tc-1.367,6.075,0.711,12.183,2.503,17.898c1.331,4.243-2.978,4.915-6.56,6.034c-5.703,1.781-11.132-1.734-13.072-7.066\n\t\t\t\t\tc-1.991-5.475-4.762-9.591-10.33-11.75c-10.284-3.986-29.787,5.175-34.084-9.849c-1.508-5.271,8.539-10.796,12.018-13.073\n\t\t\t\t\tc6.065-3.972,12.454-4.823,19.294-6.491c4.757-1.159,7.54-5.016,8.968-9.431c2.326-7.187,3.456-14.884,4.916-22.28\n\t\t\t\t\tc3.027-15.341,7.076-30.173,12.896-44.694c5.958-14.867,13.044-29.199,20.102-43.563c6.146-12.509,18.5-24.479,19.656-38.917\n\t\t\t\t\tc-0.488,1.179-0.977,2.357-1.464,3.536c4.852-4.72,8.806-10.117,12.992-15.424c4.745-6.015,9.917-11.574,15.325-16.993\n\t\t\t\t\tc10.688-10.709,22.682-17.539,36.208-24.072c27.577-13.319,63.342-20.322,91.977-6.158c6.081,3.008,11.37,8.229,17.856,10.272\n\t\t\t\t\tc2.771,0.873,5.812-0.014,8.419-0.939c3.88-1.378,7.973-2.13,12.062-2.496c7.976-0.714,14.679-1.255,22.428,1.185\n\t\t\t\t\tc6.195,1.951,15.838,2.562,19.754,8.304c1.445,2.118-4.881,4.282-5.999,4.742c-3.03,1.245-5.428,0.746-8.771,0.595\n\t\t\t\t\tc-8.252-0.373-16.523-0.056-24.747,0.667c-6.937,0.609-13.441,1.791-19.947,4.325c-6.503,2.533-13.64,7.967-20.677,8.325\n\t\t\t\t\tc-0.6-0.06-1.199-0.119-1.799-0.178C262.835,53.355,262.897,63.362,269.252,63.991L269.252,63.991z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path fill=\"#18A8E7\" d=\"M339.252,46.803c0.488,4.908-2.687,8.97-6.03,12.221c-4.72,4.589-11.889,5.176-17.911,7.06\n\t\t\t\t\tc-6.447,2.017-12.095,4.421-17.566,8.371c-4.803,3.466-10.548,5.107-15.351,8.69c-4.129,3.08-7.638,6.793-10.738,10.893\n\t\t\t\t\tc-3.678,4.862-6.247,10.582-10.215,15.184c-2.144,2.486-4.504,4.761-6.599,7.293c-0.499,0.603-1.734,2.876-2.521,3.085\n\t\t\t\t\tc-1.388,0.369-2.818,0.99-4.112,1.611c-5.28,2.533-11.272,8.657-17.206,9.093c-6.392,0.47-6.437,10.473,0,10\n\t\t\t\t\tc6.947-0.511,12.345-4.738,18.11-8.261c2.72-1.662,5.93-2.154,8.585-3.709c2.941-1.723,5.151-5.952,7.473-8.458\n\t\t\t\t\tc8.812-9.514,13.693-22.208,24.598-29.769c2.465-1.709,5.163-2.884,7.893-4.086c3.207-1.411,5.887-3.525,8.749-5.508\n\t\t\t\t\tc6.22-4.308,15.074-6.006,22.323-7.778c10.573-2.585,21.652-14.544,20.52-25.931C348.62,40.449,338.614,40.387,339.252,46.803\n\t\t\t\t\tL339.252,46.803z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path fill=\"#18A8E7\" d=\"M138.913,33.893c-5.063-4.363-9.859-1.314-15.734-0.527c-7.588,1.017-15.152,2.184-22.693,3.504\n\t\t\t\t\tc-7.43,1.301-14.894,2.62-22.215,4.445c-6.802,1.696-14.991,4.281-20.319,9.058c-3.847,3.449-6.074,8.219-4.279,13.332\n\t\t\t\t\tc1.932,5.502,7.804,7.932,13.001,9.271c6.564,1.691,13.59,1.309,20.276,2.217c6.946,0.943,14.661,3.604,20.779,7.053\n\t\t\t\t\tc5.625,3.171,10.663-5.469,5.047-8.635c-8.479-4.78-18.365-7.576-27.974-8.675c-5.156-0.59-10.372-0.567-15.47-1.604\n\t\t\t\t\tc-1.952-0.397-5.619-1.156-6.378-3.318c-0.582-1.656,4.403-3.977,5.41-4.518c9.893-5.318,21.955-6.637,32.847-8.636\n\t\t\t\t\tc5.8-1.064,11.626-1.987,17.459-2.851c3.446-0.51,6.899-0.967,10.355-1.407c0.801-0.045,1.581-0.199,2.336-0.461\n\t\t\t\t\tc0.398-0.168,0.796-0.336,1.195-0.504c1.446-0.414,1.208-0.638-0.714-0.673C136.7,45.15,143.806,38.109,138.913,33.893\n\t\t\t\t\tL138.913,33.893z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path fill=\"#18A8E7\" d=\"M222.056,113.724c-1.205,4.787,0.993,7.979,1.392,12.57c0.427,4.92,0.599,8.526,3.922,12.457\n\t\t\t\t\tc-0.261-2.02-0.521-4.04-0.782-6.059c-2.251,4.56-2.517,9.586-3.637,14.5c-1.247,5.47-3.039,10.859-5.234,16.02\n\t\t\t\t\tc-2.171,5.104-5.695,7.854-9.834,11.395c-3.812,3.263-6.697,7.851-12.13,7.447c-6.437-0.479-6.391,9.525,0,10\n\t\t\t\t\tc5.766,0.429,10.093-1.721,14.08-5.743c4.282-4.321,9.763-7.647,13.502-12.469c3.631-4.683,5.531-11.411,7.334-16.987\n\t\t\t\t\tc0.932-2.883,1.656-5.827,2.329-8.778c0.762-3.339,0.695-7.239,2.225-10.337c1.071-2.17,0.767-4.228-0.782-6.059\n\t\t\t\t\tc-1.429-1.691-0.93-4.663-1.108-6.718c-0.238-2.747-2.312-5.883-1.633-8.58C233.274,110.126,223.629,107.473,222.056,113.724\n\t\t\t\t\tL222.056,113.724z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path fill=\"#18A8E7\" d=\"M251.06,126.952c5.756,7.866,12.657,14.537,19.733,21.196c5.266,4.954,13.783,14.599,20.451,5.924\n\t\t\t\t\tc4.77-6.204,3.037-15.467,0.334-22.205c-3.166-7.889-9.267-13.654-16.053-18.505c-5.258-3.759-10.243,4.92-5.047,8.635\n\t\t\t\t\tc4.312,3.083,8.046,6.63,10.735,11.229c2.352,4.02,5.005,12.117,1.115,15.792c1.178-0.488,2.356-0.976,3.535-1.464\n\t\t\t\t\tc-2.663-0.22-4.907-3.544-6.74-5.287c-2.094-1.989-4.206-3.957-6.298-5.947c-4.713-4.484-9.283-9.154-13.132-14.413\n\t\t\t\t\tC255.928,116.758,247.245,121.739,251.06,126.952L251.06,126.952z\"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path fill=\"#18A8E7\" d=\"M203.502,119.553c0.032,12.208-2.452,24.716-8.046,35.63c-2.483,4.846-1.77,10.164-3.873,15.125\n\t\t\t\t\tc-2.309,5.446-3.144,10.344-2.069,16.199c1.607-2.109,3.214-4.22,4.821-6.329c-0.402,0-0.806,0-1.208,0c-6.448,0-6.448,10,0,10\n\t\t\t\t\tc0.402,0,0.806,0,1.208,0c3.464,0,5.4-3.174,4.821-6.329c-1.044-5.688,2.273-10.305,3.687-15.588\n\t\t\t\t\tc0.716-2.674,0.116-5.451,1.247-8.03c1.11-2.53,2.512-4.904,3.508-7.496c4.018-10.452,5.934-22.025,5.904-33.182\n\t\t\t\t\tC213.486,113.105,203.486,113.104,203.502,119.553L203.502,119.553z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<path fill=\"#18A8E7\" d=\"M232.625,38.239c-4.994-0.119-9.137-4.363-8.896-9.112c0.332-6.519,4.703-11.984,9.547-11.936\n\t\tc4.506,0.044,8.936,5.938,8.812,11.724C241.979,34.055,237.61,38.358,232.625,38.239z\"/>\n</g>\n</svg>\n";
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
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return "579px";
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
    return "57px";
    return self;
}
}),
smalltalk.Dolphin);


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


smalltalk.addClass('EntryPoint', smalltalk.Object, [], 'DyNagoya');

smalltalk.addMethod(
"_bottomPosition",
smalltalk.method({
selector: "bottomPosition",
fn: function () {
    var self = this;
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["600px"]);smalltalk.send($rec, "_height_", [200]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 600 : smalltalk.send($receiver, "__minus", [600])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 200 : smalltalk.send($receiver, "__minus", [200])]), "__comma", ["px"])]);}(thisisplaceholder1);};
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
    smalltalk.send(function () {smalltalk.send(smalltalk.send("#screen", "_asJQuery", []), "_remove", []);smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);return smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(smalltalk.TopPage || TopPage, "_new", [])]);}, "_valueWithTimeout_", [3000]);
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
    return function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_width_", ["350px"]);smalltalk.send($rec, "_height_", [300]);smalltalk.send($rec, "_x_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = ($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerWidth", [])).klass === smalltalk.Number ? $receiver * 0.9 : smalltalk.send($receiver, "__star", [0.9])).klass === smalltalk.Number ? $receiver - 350 : smalltalk.send($receiver, "__minus", [350])]), "__comma", ["px"])]);return smalltalk.send($rec, "_y_", [smalltalk.send(smalltalk.send("", "__comma", [($receiver = smalltalk.send(typeof window == "undefined" ? nil : window, "_innerHeight", [])).klass === smalltalk.Number ? $receiver * 0.1 : smalltalk.send($receiver, "__star", [0.1])]), "__comma", ["px"])]);}(thisisplaceholder1);};
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
    return function ($rec) {smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0302")]);smalltalk.send($rec, "_date_", [unescape("2012/01/28")]);smalltalk.send($rec, "_start_", ["17:00:00"]);smalltalk.send($rec, "_end_", ["20:00:00"]);smalltalk.send($rec, "_place_", [smalltalk.Doerya || Doerya]);return smalltalk.send($rec, "_detail_", [[unescape("%u3053%u306E%u30DA%u30FC%u30B8%u306B%u3064%u3044%u3066%u8AAC%u660E"), unescape("Make%3AOgaki%u306E%u30CD%u30BF%u3092%u8003%u3048%u308B"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29"), unescape("%u30A4%u30EB%u30AB%u306E%u540D%u524D%u3092%u8003%u3048%u308B")]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting03",
smalltalk.method({
selector: "meeting03",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0303")]);smalltalk.send($rec, "_date_", [unescape("2012/02/26")]);smalltalk.send($rec, "_start_", ["18:30:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.Hakkaku || Hakkaku]);return smalltalk.send($rec, "_detail_", [[unescape("cogdroid%u306B%u3064%u3044%u3066"), unescape("Test%u306B%u3064%u3044%u3066%u8003%u3048%u308B"), unescape("%u3053%u306E%u30DA%u30FC%u30B8%u306E%u30EA%u30F3%u30AF%u96C6%u306E%u8868%u793A%u3092%u304B%u3048%u308B"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29")]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting04",
smalltalk.method({
selector: "meeting04",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0304")]);smalltalk.send($rec, "_date_", [unescape("2012/03/31")]);smalltalk.send($rec, "_start_", ["18:30:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.Captina || Captina]);return smalltalk.send($rec, "_detail_", [[unescape("Scratch%20%u3092%u3044%u3058%u308B"), unescape("%u3053%u306E%u30DA%u30FC%u30B8%u306EAbout%u306E%u5185%u5BB9%u3092%u8003%u3048%u308B"), unescape("Newspeak%u3092%u3044%u3058%u308B"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29")]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting05",
smalltalk.method({
selector: "meeting05",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0305")]);smalltalk.send($rec, "_date_", [unescape("2012/04/28")]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.Tagen || Tagen]);return smalltalk.send($rec, "_detail_", [[unescape("%u5408%u540C%u52C9%u5F37%u4F1A%u7528%u306B%u540D%u53E4%u5C4B%u7684%u30CD%u30BF%u3092%u8003%u3048%u308B"), unescape("%u3053%u306E%u30DA%u30FC%u30B8%u306EAbout%u306E%u5185%u5BB9%u3092%u8003%u3048%u308B"), unescape("VMMaker%u3092%u52D5%u304B%u3059"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29")]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting06",
smalltalk.method({
selector: "meeting06",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", [unescape("DyNagoya%20MTG%20%uFF0306")]);smalltalk.send($rec, "_date_", [unescape("2012/05/19")]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.LokantaAYHAN || LokantaAYHAN]);return smalltalk.send($rec, "_detail_", [[unescape("%u5408%u540CSmalltalk%u52C9%u5F37%u4F1A%u306E%u6BB5%u53D6%u308A%u3092%u6C7A%u3081%u308B"), unescape("%u30D1%u30FC%u30B5%u30FC%u306E%u3044%u3058%u308A%u65B9"), unescape("VMMaker%u3092%u52D5%u304B%u3059"), unescape("Smalltalk%u5165%u9580%28%u5E0C%u671B%u8005%u304C%u3044%u308C%u3070%29")]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting07",
smalltalk.method({
selector: "meeting07",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", ["DyNagoya MTG \uFF0307"]);smalltalk.send($rec, "_date_", ["2012/06/23"]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.AmiyakiTei || AmiyakiTei]);return smalltalk.send($rec, "_detail_", [["Smalltalk\u52C9\u5F37\u4F1A\u3000\u672A\u8E0F\u30B9\u30DA\u30B7\u30E3\u30EB \u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF", "\u5408\u540CSmalltalk\u52C9\u5F37\u4F1A\u306E\u6BB5\u53D6\u308A\u3092\u6C7A\u3081\u308B", "Smalltalk\u5165\u9580(\u5E0C\u671B\u8005\u304C\u3044\u308C\u3070)"]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting08",
smalltalk.method({
selector: "meeting08",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_fixed_", [true]);smalltalk.send($rec, "_title_", ["DyNagoya MTG \uFF0308"]);smalltalk.send($rec, "_date_", ["2012/07/28"]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:30:00"]);smalltalk.send($rec, "_place_", [smalltalk.Doerya || Doerya]);return smalltalk.send($rec, "_detail_", [["\u5408\u540CSmalltalk\u52C9\u5F37\u4F1A\u306E\u767A\u8868\u30CD\u30BF\u3092\u6C7A\u3081\u308B", "Amber \u9B54\u6539\u9020\u306E\u8A71", "Smalltalk\u5165\u9580(\u5E0C\u671B\u8005\u304C\u3044\u308C\u3070)"]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting09",
smalltalk.method({
selector: "meeting09",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_title_", ["DyNagoya MTG \uFF0309"]);smalltalk.send($rec, "_date_", ["2012/10/20"]);smalltalk.send($rec, "_start_", ["18:00:00"]);smalltalk.send($rec, "_end_", ["20:00:00"]);smalltalk.send($rec, "_place_", [smalltalk.Mattariya || Mattariya]);return smalltalk.send($rec, "_detail_", [["OMeta\u3092\u3044\u3058\u308B", "Mist\u3092\u3044\u3058\u305F\u3044", "CPS\u5909\u63DB\u796D\u308A?"]]);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Event.klass);

smalltalk.addMethod(
"_meeting10",
smalltalk.method({
selector: "meeting10",
fn: function () {
    return this._Events().matchAll("DyNagoya MTG #10 \u306F \n2012/11/10\u306E12:00:00\u301C15:00:00\u306B\nImoni \u3067\n - OMeta\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\n - OMeta\u540D\u524D\u7A7A\u9593\u3092\u3061\u3083\u3093\u3068\u3059\u308B\n - NGK\u306E\u30CD\u30BF\u3092\u8003\u3048\u308B", "meeting");
}
}),
smalltalk.Event.klass);


smalltalk.addClass('JSViewer', smalltalk.Widget, ['sourceArea', 'outView'], 'DyNagoya');
smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
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
}
}),
smalltalk.JSViewer);

smalltalk.addMethod(
"_emit_",
smalltalk.method({
selector: "emit:",
fn: function (aString) {
    var self = this;
    return smalltalk.send(self, "_compile_", [aString]);
    return self;
}
}),
smalltalk.JSViewer);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    self['@sourceArea'] = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["width", "100%"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "white"]);smalltalk.send($rec, "_css_put_", ["color", "black"]);smalltalk.send($rec, "_css_put_", ["width", "45%"]);smalltalk.send($rec, "_css_put_", ["position", "absolute"]);smalltalk.send($rec, "_css_put_", ["top", "5%"]);smalltalk.send($rec, "_css_put_", ["bottom", "5%"]);return smalltalk.send($rec, "_with_", [self['@sourceArea']]);}(smalltalk.send(html, "_div", [])));self['@outView'] = function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "pink"]);smalltalk.send($rec, "_css_put_", ["color", "black"]);smalltalk.send($rec, "_css_put_", ["width", "45%"]);smalltalk.send($rec, "_css_put_", ["position", "absolute"]);smalltalk.send($rec, "_css_put_", ["left", "51%"]);smalltalk.send($rec, "_css_put_", ["top", "5%"]);smalltalk.send($rec, "_css_put_", ["bottom", "5%"]);return smalltalk.send($rec, "_with_", ["JS code"]);}(smalltalk.send(html, "_div", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_css_put_", ["clear", "both"]);}]);}(smalltalk.send(html, "_div", [])));
    smalltalk.send(self['@sourceArea'], "_onKeyUp_", [function () {return smalltalk.send(self, "_updateStatus", []);}]);
    return self;
}
}),
smalltalk.JSViewer);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
fn: function () {
    var self = this;
    smalltalk.send(self['@outView'], "_contents_", [function (html) {return smalltalk.send(html, "_span_", [smalltalk.send(self, "_emit_", [smalltalk.send(self['@sourceArea'], "_val", [])])]);}]);
    return self;
}
}),
smalltalk.JSViewer);


smalltalk.addMethod(
"_onDialog",
smalltalk.method({
selector: "onDialog",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(smalltalk.JSViewer || JSViewer, "_new", [])]);smalltalk.send($rec, "_title_", ["Javascript Viewer"]);smalltalk.send($rec, "_width_", ["50%"]);smalltalk.send($rec, "_modal_", [false]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", []));
    return self;
}
}),
smalltalk.JSViewer.klass);


smalltalk.addClass('Login', smalltalk.Widget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [unescape("/name"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("success", "__minus_gt", [function (x) {smalltalk.send(smalltalk.Login || Login, "_user_", [x]);return function ($rec) {smalltalk.send($rec, "_href_", [unescape("/logout")]);return smalltalk.send($rec, "_with_", [smalltalk.send(x, "__comma", [" Log Out"])]);}(smalltalk.send(html, "_a", []));}]), smalltalk.send("error", "__minus_gt", [function (x) {smalltalk.send(smalltalk.Login || Login, "_user_", [nil]);return function ($rec) {smalltalk.send($rec, "_href_", [unescape("/login")]);return smalltalk.send($rec, "_with_", [" Log In"]);}(smalltalk.send(html, "_a", []));}])])]);
    return self;
}
}),
smalltalk.Login);


smalltalk.Login.klass.iVarNames = ['user'];
smalltalk.addMethod(
"_user",
smalltalk.method({
selector: "user",
fn: function () {
    var self = this;
    return self['@user'];
    return self;
}
}),
smalltalk.Login.klass);

smalltalk.addMethod(
"_user_",
smalltalk.method({
selector: "user:",
fn: function (aStr) {
    var self = this;
    self['@user'] = aStr;
    return self;
}
}),
smalltalk.Login.klass);


smalltalk.addClass('LoginPanel', smalltalk.Widget, [], 'DyNagoya');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_root", []), "_style_", ["position:fixed; font-size: 24px; right:0; padding: 3px"]);
    smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.Login || Login, "_new", [])]);
    return self;
}
}),
smalltalk.LoginPanel);


smalltalk.LoginPanel.klass.iVarNames = ['single'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    ($receiver = self['@single']) == nil || $receiver == undefined ? function () {return self['@single'] = smalltalk.send(self, "_new", [], smalltalk.LoginPanel.klass.superclass || nil);}() : $receiver;
    return self['@single'];
    return self;
}
}),
smalltalk.LoginPanel.klass);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_new", []), "_updateToJQuery_", [smalltalk.send("#login", "_asJQuery", [])]);
    return self;
}
}),
smalltalk.LoginPanel.klass);


smalltalk.addClass('OMeta', smalltalk.Object, [], 'DyNagoya');


smalltalk.addClass('Page', smalltalk.Widget, ['body', 'todo'], 'DyNagoya');
smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock) {
    var self = this;
    ($receiver = self['@body']) == nil || $receiver == undefined ? function () {return smalltalk.send(self['@todo'], "_add_", [aBlock]);}() : function () {return smalltalk.send(aBlock, "_value_", [self['@body']]);}();
    return self;
}
}),
smalltalk.Page);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    self['@todo'] = [];
    return self;
}
}),
smalltalk.Page);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.Page);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    self['@body'] = html;
    smalltalk.send(self, "_renderBody_", [html]);
    smalltalk.send(self['@todo'], "_do_", [function (thisisplaceholder1) {return smalltalk.send(self, "_do_", [thisisplaceholder1]);}]);
    return self;
}
}),
smalltalk.Page);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_do_", [function (thisisplaceholder1) {return smalltalk.send(thisisplaceholder1, "_h1_", [aString]);}]);
    return self;
}
}),
smalltalk.Page);


smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(self, "_new", [])]);
    return self;
}
}),
smalltalk.Page.klass);


smalltalk.addClass('AboutDyNagoya', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
    var self = this;
    return "8000";
    return self;
}
}),
smalltalk.AboutDyNagoya);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", ["margin-top: 30px"]);return smalltalk.send($rec, "_with_", ["DyNagoya \u3068\u306F"]);}(smalltalk.send(html, "_h1", [])));
    smalltalk.send([["\u540D\u53E4\u5C4B\u3067\u52D5\u7684\u8A00\u8A9E(Dynamic Language)\u306B\u3064\u3044\u3066\u8A9E\u308A\u5408\u3046\u30D7\u30ED\u30B0\u30E9\u30DE\u96C6\u56E3\u304CDyNagoya(Dynamic language + Nagoya = DyNagoya)\u3067\u3059\u3002", "\u52D5\u7684\u8A00\u8A9E\u5168\u822C\u3092\u6271\u3063\u3066\u307E\u3059\u304C\u3001\u4E2D\u5FC3\u3068\u306A\u308B\u306E\u306FSmalltalk\u3067\u3059\u3002", "Smalltalk\u306F\u30A2\u30E9\u30F3\u30B1\u30A4(Alan Kay 1940 - )\u306E\u7406\u60F3\u306E\u30D1\u30FC\u30BD\u30CA\u30EB\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3067\u3042\u308B\u300EDynabook\u300F\u306E\u66AB\u5B9A\u5B9F\u88C5\u304B\u3089\u8A95\u751F\u3057\u307E\u3057\u305F\u3002", "DyNagoya\u306E\u300CDy\u300D\u306FDynabook\u306E\u300CDy\u300D\u3082\u517C\u306D\u3066\u3044\u307E\u3059\u3002", "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u79C1\u305F\u3061\u306E\u7406\u60F3\u306E\u95A2\u4FC2\u3092\u6A21\u7D22\u3059\u308B\u3053\u3068\u304CDyNagoya\u306E\u76EE\u7684\u3067\u3059\u3002"], ["DyNagoya\u3067\u306F\u3001\u6708\u306B\uFF11\u56DE\u306E\u4F1A\u5408\u3092\u958B\u3044\u3066\u3044\u307E\u3059\u3002", "\u3053\u306E\u4F1A\u3067\u306F\u3001\u304A\u3044\u3057\u3044\u3054\u98EF\u3092\u98DF\u3079\u306A\u304C\u3089\u3001\u52D5\u7684\u8A00\u8A9E\u306B\u3064\u3044\u3066\u8A9E\u308A\u5408\u3063\u3066\u3044\u307E\u3059\u3002", "\u4F55\u306E\u6E96\u5099\u3082\u5FC3\u69CB\u3048\u3082\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002\u304A\u6C17\u8EFD\u306B\u3054\u53C2\u52A0\u304F\u3060\u3055\u3044\u3002"]], "_do_", [function (each) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "20px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(each, "_do_", [function (each2) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [each2]);}]);}]);}(smalltalk.send(html, "_h2", []));}]);
    return self;
}
}),
smalltalk.AboutDyNagoya);



smalltalk.addClass('AboutSmalltalk', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
    var self = this;
    return "800";
    return self;
}
}),
smalltalk.AboutSmalltalk);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", [unescape("Smalltalk%u3068%u306F")]);
    smalltalk.send([[unescape("Smalltalk%u3068%u805E%u304F%u3068%u3001%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u6307%u5411%u306E%u30A4%u30E1%u30FC%u30B8%u304C%u5F37%u3044%u306E%u3067%u306F%u306A%u3044%u3067%u3057%u3087%u3046%u304B%uFF1F"), unescape("%u307E%u305F%u3001Java%u3084C++%u306A%u3069%u3067%u4E16%u306B%u6D78%u900F%u3057%u3066%u3044%u308B%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u6307%u5411%u3068Smalltalk%u306E%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u6307%u5411%u3068%u306F%u9055%u3046%u3068%u805E%u3044%u305F%u3053%u3068%u304C%u3042%u308B%u304B%u3082%u77E5%u308C%u307E%u305B%u3093%u3002"), unescape("%u5B9F%u969B%u5168%u304F%u7570%u306A%u308B%u3082%u306E%u3067%u3059%u304C%u3001%u8AAC%u660E%u3059%u308B%u306E%u3082%u9762%u5012%u306A%u306E%u3067%u3001%u3068%u308A%u3042%u3048%u305A%u3001%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u6307%u5411%u306F%u7F6E%u3044%u3066%u304A%u304D%u307E%u3057%u3087%u3046%u3002")], [], [unescape("Smalltalk%u306F%u8A00%u8A9E%u3068%u3044%u3046%u3088%u308A%u74B0%u5883%u3067%u3059%u3002"), unescape("PC%u4E0A%u306BSmalltalk%u3068%u3044%u3046%u4EEE%u60F3%u74B0%u5883%u3092%u8D77%u52D5%u3057%u3001%u305D%u306E%u4EEE%u60F3%u74B0%u5883%u306E%u4E2D%u3067%u30D7%u30ED%u30B0%u30E9%u30E0%u3092%u8A18%u8FF0%u3057%u307E%u3059%u3002"), unescape("%u91CD%u8981%u306A%u30DD%u30A4%u30F3%u30C8%u306F%u3001%u4EEE%u60F3%u74B0%u5883%u81EA%u4F53%u304CSmalltalk%u306E%u30B7%u30F3%u30D7%u30EB%u306A%u6587%u6CD5%u3067%u8A18%u8FF0%u3055%u308C%u3066%u3044%u308B%u70B9%u3042%u308A%u3001%u3057%u304B%u3082%u5B9F%u884C%u4E2D%u306B%u7C21%u5358%u306B%u66F8%u304D%u63DB%u3048%u308B%u3053%u3068%u304C%u53EF%u80FD%u3067%u3059%u3002"), unescape("%u4F8B%u3048%u3070%u3001%u4EEE%u60F3%u74B0%u5883%u306B%u306FIDE%u3082%u542B%u307E%u308C%u3066%u3044%u307E%u3059%u304C%u3001%u305D%u306EIDE%u81EA%u4F53%u306E%u30B3%u30FC%u30C9%u3092%u66F8%u304D%u63DB%u3048%u3066%u3001%u81EA%u5206%u597D%u307F%u306EIDE%u306B%u4ED5%u7ACB%u3066%u308B%u3053%u3068%u304C%u3067%u304D%u307E%u3059%u3002"), unescape("IDE%u3060%u3051%u3067%u306A%u304F%u3001%u30B3%u30F3%u30D1%u30A4%u30E9%u3084%u30A4%u30F3%u30BF%u30D7%u30EA%u30BF%u3001%u6587%u5B57%u5217%u30AF%u30E9%u30B9%u3084%u6570%u5024%u30AF%u30E9%u30B9%u306A%u3069%u306E%u57FA%u672C%u30AF%u30E9%u30B9%u3082%u30D7%u30ED%u30B0%u30E9%u30E0%u5B9F%u884C%u4E2D%u306B%u597D%u304D%u52DD%u624B%u306B%u66F8%u304D%u63DB%u3048%u308B%u3053%u3068%u304C%u3067%u304D%u307E%u3059%u3002"), unescape("%u4E16%u9593%u4E00%u822C%u306E%u30D7%u30ED%u30B0%u30E9%u30DF%u30F3%u30B0%u8A00%u8A9E%u3067%u306F%u3001%u30B3%u30FC%u30C9%u3092%u66F8%u304F%u30D5%u30A7%u30FC%u30BA%u3068%u30D7%u30ED%u30B0%u30E9%u30E0%u3092%u52D5%u304B%u3059%u30D5%u30A7%u30FC%u30BA%u306F%u5225%u7269%u3067%u3059%u304C%u3001Smalltalk%u306B%u306F%u305D%u306E%u57A3%u6839%u304C%u3086%u308B%u304F%u66D6%u6627%u306B%u306A%u3063%u3066%u3044%u307E%u3059%u3002"), unescape("%u751F%u304D%u3066%u3044%u308B%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u3092%u6355%u307E%u3048%u3066%u3001%u305D%u306E%u30AA%u30D6%u30B8%u30A7%u30AF%u30C8%u3068%u5BFE%u8A71%u7684%u306B%u30D7%u30ED%u30B0%u30E9%u30E0%u3092%u52D5%u304B%u3059%u3053%u3068%u3082%u3067%u304D%u307E%u3059%u3002")], [unescape("Smalltalk%u306E%u5F37%u529B%u3055%u3092%u6D3B%u304B%u3057%u3066%u3001%u5B9F%u52D9%u3067%u4F7F%u3063%u3066%u3044%u308B%u65B9%u3082%u3044%u307E%u3059"), unescape("%28%u6570%u306F%u5C11%u306A%u3044%u3068%u306F%u601D%u3044%u307E%u3059%u304C%u30FB%u30FB%u30FB%29%u3002"), unescape("%u4E00%u65B9%u3067Smalltalk%u306F%u7406%u60F3%u306E%u30B3%u30F3%u30D4%u30E5%u30FC%u30BF%u74B0%u5883%u3092%u8FFD%u6C42%u3059%u308B%u305F%u3081%u306E%u5B9F%u9A13%u5834%u3068%u3082%u8A00%u3048%u307E%u3059%u3002"), unescape("%u65B0%u3057%u3044%u30C7%u30D0%u30A4%u30B9%u3068%u306E%u9023%u643A%u306B%u3082%u7A4D%u6975%u7684%u3067%u3001Arduino%u3084Kinect%u306A%u3069%u306E%u5916%u90E8%u30C7%u30D0%u30A4%u30B9%u3068%u306E%u9023%u643A%u3082%u53EF%u80FD%u3067%u3059%u3002"), unescape("iPad%u3084Android%u4E0A%u3067%u52D5%u4F5C%u3059%u308BSmalltalk%u3082%u6D3B%u767A%u306B%u958B%u767A%u3055%u308C%u3066%u3044%u307E%u3059%u3002")]], "_do_", [function (each) {return function ($rec) {smalltalk.send($rec, "_css_put_", [unescape("margin-left"), "20px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(each, "_do_", [function (each2) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [each2]);}]);}]);}(smalltalk.send(html, "_h3", []));}]);
    return self;
}
}),
smalltalk.AboutSmalltalk);



smalltalk.addClass('BrowsePage', smalltalk.Page, ['selectedClass', 'methodName', 'browser'], 'DyNagoya');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function () {
    var self = this;
    return self['@browser'];
    return self;
}
}),
smalltalk.BrowsePage);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
fn: function (aString) {
    var self = this;
    self['@methodName'] = aString;
    return self;
}
}),
smalltalk.BrowsePage);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_css_put_", ["background", "black"]);smalltalk.send($rec, "_css_put_", ["color", "white"]);smalltalk.send($rec, "_css_put_", ["padding", "15px"]);return smalltalk.send($rec, "_with_", [self['@browser']]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.BrowsePage);

smalltalk.addMethod(
"_selectedClass_",
smalltalk.method({
selector: "selectedClass:",
fn: function (aClass) {
    var self = this;
    self['@selectedClass'] = aClass;
    return self;
}
}),
smalltalk.BrowsePage);


smalltalk.addMethod(
"_showWithBrowser_",
smalltalk.method({
selector: "showWithBrowser:",
fn: function (aBrowser) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(smalltalk.send(smalltalk.Page || Page, "_new", []), "_title_", [smalltalk.send(smalltalk.send(aBrowser, "_target", []), "_name", [])])]);
    smalltalk.send(smalltalk.Screen || Screen, "_add_", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_class_", ["tree-source workspace-effect"]);return smalltalk.send($rec, "_with_", [aBrowser]);}(smalltalk.send(thisisplaceholder1, "_div", []));}]);
    smalltalk.send(aBrowser, "_open", []);
    return self;
}
}),
smalltalk.BrowsePage.klass);


smalltalk.addClass('HowToJoinPage', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
    var self = this;
    return "800";
    return self;
}
}),
smalltalk.HowToJoinPage);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_style_", ["margin-top: 30px"]);return smalltalk.send($rec, "_with_", ["\u53C2\u52A0\u65B9\u6CD5"]);}(smalltalk.send(html, "_h1", [])));
    smalltalk.send([["DyNagoya\u3067\u306F\u3001\u6708\u306B\uFF11\u56DE\u306E\u4F1A\u5408\u3092\u958B\u3044\u3066\u3044\u307E\u3059\u3002", "\u3053\u306E\u4F1A\u3067\u306F\u3001\u304A\u3044\u3057\u3044\u3054\u98EF\u3092\u98DF\u3079\u306A\u304C\u3089\u3001\u52D5\u7684\u8A00\u8A9E\u306B\u3064\u3044\u3066\u8A9E\u308A\u5408\u3063\u3066\u3044\u307E\u3059\u3002", "\u4F55\u306E\u6E96\u5099\u3082\u5FC3\u69CB\u3048\u3082\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002\u304A\u6C17\u8EFD\u306B\u3054\u53C2\u52A0\u304F\u3060\u3055\u3044\u3002"], ["\u4F1A\u5408\u306B\u59CB\u3081\u3066\u53C2\u52A0\u3055\u308C\u308B\u65B9\u306F", "twitter\u306A\u3089 @maeda_ \u307E\u3067\u3001", "e-mail\u306A\u3089 clouds.across.the.moon at gmail.com \u307E\u3067\u3001", "\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002"], ["\u6700\u65B0\u306E\u60C5\u5831\u306F twitter \u30A2\u30AB\u30A6\u30F3\u30C8 @dynagoya_info \u304C\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002"]], "_do_", [function (each) {return function ($rec) {smalltalk.send($rec, "_css_put_", ["margin-left", "20px"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(each, "_do_", [function (each2) {return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [each2]);}]);}]);}(smalltalk.send(html, "_h2", []));}]);
    return self;
}
}),
smalltalk.HowToJoinPage);



smalltalk.addClass('Links', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_link_url_description_",
smalltalk.method({
selector: "link:url:description:",
fn: function (title, aUrl, aDescription) {
    var self = this;
    return [title, aUrl, aDescription];
    return self;
}
}),
smalltalk.Links);

smalltalk.addMethod(
"_list",
smalltalk.method({
selector: "list",
fn: function () {
    var self = this;
    return [smalltalk.send(self, "_link_url_description_", ["Amber Smalltalk", "http://amber-lang.net/", "Smalltalk\u306EJavascript\u5B9F\u88C5\u3002\u300CLearn\u300D\u304B\u3089Smalltalk\u306E\u52C9\u5F37\u304C\u59CB\u3081\u308C\u308B\u3002"]), smalltalk.send(self, "_link_url_description_", ["cog blog", "http://www.mirandabanda.org/cogblog", "\u9AD8\u901FSmalltalk VM\u306E\u5B9F\u88C5\u8AAC\u660E"]), smalltalk.send(self, "_link_url_description_", ["\u81EA\u7531\u81EA\u5728Squeak\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0 PDF\u7248\u30C9\u30E9\u30D5\u30C8", "http://www.box.com/s/bbc7kz53el13ktbxeed4", "\u6885\u6FA4\u3055\u3093\u306E\u672C\u304C\u6885\u6FA4\u3055\u3093\u306B\u3088\u308APDF\u5316\uFF01\uFF01\uFF01"]), smalltalk.send(self, "_link_url_description_", ["PEG.js", "http://pegjs.majda.cz/", "amber smalltalk \u306E\u30D1\u30FC\u30B5\u30FC\u306E\u5B9F\u88C5\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B"]), smalltalk.send(self, "_link_url_description_", ["CodeMirror", "http://codemirror.net/", "amber smtalltalk \u306E\u30A8\u30C7\u30A3\u30BF\u90E8\u5206\u306E\u5B9F\u88C5\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B"]), smalltalk.send(self, "_link_url_description_", ["Yengawa Blog", "http://blog.yengawa.com/", "Scratch + arduino \u306E\u5148\u99C6\u8005\u3002\u3059\u3067\u306BMake:Tokyo\u306B\u51FA\u5C55\u3057\u3066\u3044\u305F\u3002"]), smalltalk.send(self, "_link_url_description_", ["\u7B2C37\u56DE Smalltalk\u52C9\u5F37\u4F1A-\u6771\u4EAC UStream", "http://www.ustream.tv/recorded/18226602", "\u963F\u90E8\u3055\u3093\u306EScratch + Arduino\u306E\u30C7\u30E2"]), smalltalk.send(self, "_link_url_description_", ["ITPro \u7C21\u5358\u3060\u3051\u3069\u5965\u6DF1\u3044! Scratch\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u9B45\u529B", "http://itpro.nikkeibp.co.jp/article/COLUMN/20111019/371080/?ST=develop", "\u963F\u90E8\u3055\u3093\u306EScratch + Arduino\u306E\u8A18\u4E8B \u51685\u56DE"]), smalltalk.send(self, "_link_url_description_", ["A Smalltalk by the Seaside", "http://www.asmalltalkbytheseaside.com/", "Amber\u3067\u4F5C\u3089\u308C\u305F\u30B2\u30FC\u30E0\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u30B2\u30FC\u30E0\u306E\u30B5\u30F3\u30D7\u30EB"]), smalltalk.send(self, "_link_url_description_", ["cog blog - Under Cover Contexts and the Big Frame-Up", "http://www.mirandabanda.org/cogblog/2009/01/14/under-cover-contexts-and-the-big-frame-up/", "Context\u306E\u5B9F\u88C5\u306B\u3064\u3044\u3066\u306E\u8AAC\u660E"]), smalltalk.send(self, "_link_url_description_", ["Squeak\u3067\u306F\u3058\u3081\u308BSmalltalk\u5165\u9580\u30FB\u30A2\u30FC\u30AB\u30A4\u30D6", "http://squab.no-ip.com:8080/mosaren/", "MOSA\u767A\u884C\u306E\u30E1\u30FC\u30EB\u30DE\u30AC\u30B8\u30F3\u300CMOSA Developer News\u300D\u3001\u7565\u79F0\u201C\u30E2\u30B5\u4F1D\u201D\u3067 2007-04-17\u3000\u7B2C248\u53F7\u307E\u3067\u9023\u8F09\u3055\u308C\u305F\u3001\u300CSqueak\u3067\u306F\u3058\u3081\u308BSmalltalk\u5165\u9580\u300D\u306E\u30D0\u30C3\u30AF\u30CA\u30F3\u30D0\u30FC\u30FB\u30A2\u30FC\u30AB\u30A4\u30D6\u30DA\u30FC\u30B8\u3067\u3059\u3002\u57F7\u7B46\u6642\u70B9\u306E\u53E4\u3044\u60C5\u5831\u3084\u30EA\u30F3\u30AF\u3092\u542B\u3093\u3067\u3044\u308B\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]), smalltalk.send(self, "_link_url_description_", ["Scratch + Arduino", "http://www.yengawa.com/scratch_arduino", "Scratch \u304B\u3089 Arduino\u3092\u4F7F\u3046\u65B9\u6CD5"]), smalltalk.send(self, "_link_url_description_", ["scat", "http://code.google.com/p/scat/", "\u6A19\u6E96\u306EScratch\u306FIDE\u304C\u3057\u3087\u307C\u3044\u306E\u3067Pharo\u306BScrach\u3092\u5165\u308C\u308B\u3002"]), smalltalk.send(self, "_link_url_description_", ["cuis smalltalk", "http://www.jvuletich.org/Cuis/Index.html", "\u8EFD\u91CF\u306ASmalltalk\u30A4\u30E1\u30FC\u30B8\u3002\u52C9\u5F37\u7528"]), smalltalk.send(self, "_link_url_description_", ["Smalltalk\u306EHistoricalDocuments", "http://esug.org/data/HistoricalDocuments/", "\u8CB4\u91CD\u306A\u3082\u306E\u304C\u305F\u304F\u3055\u3093"])];
    return self;
}
}),
smalltalk.Links);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_title_", ["Links"]);smalltalk.send($rec, "_with_", [function (html) {return smalltalk.send(self, "_renderOn_", [html]);}]);return smalltalk.send($rec, "_width_", [600]);}(self));
    smalltalk.send(self, "_open", [], smalltalk.DialogBox);
    return self;
}
}),
smalltalk.Links);

smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
fn: function (html) {
    var self = this;
    smalltalk.send(html, "_h1_", ["Links"]);
    smalltalk.send(smalltalk.send(html, "_tag_", ["dl"]), "_with_", [function () {return smalltalk.send(smalltalk.send(self, "_list", []), "_do_", [function (link) {smalltalk.send(smalltalk.send(html, "_tag_", ["dt"]), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_at_put_", ["target", "_blank"]);smalltalk.send($rec, "_href_", [smalltalk.send(link, "_at_", [2])]);return smalltalk.send($rec, "_with_", [smalltalk.send(link, "_at_", [1])]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(smalltalk.send(html, "_tag_", ["dd"]), "_with_", [smalltalk.send(link, "_at_", [3])]);}]);}]);
    return self;
}
}),
smalltalk.Links);



smalltalk.addClass('TopPage', smalltalk.Page, [], 'DyNagoya');
smalltalk.addMethod(
"_renderBody_",
smalltalk.method({
selector: "renderBody:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Dolphin || Dolphin, "_new", [])]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Board || Board, "_new", [])]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.Logo || Logo, "_new", [])]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.HowToJoin || HowToJoin, "_new", [])]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.TopPage);



smalltalk.addClass('ParserEditor', smalltalk.Widget, ['source'], 'DyNagoya');
smalltalk.addMethod(
"_applyParser",
smalltalk.method({
selector: "applyParser",
fn: function () {
    var self = this;
    var parser = nil;
    smalltalk.send(self, "_try_catch_", [function () {parser = smalltalk.send(smalltalk.PEG || PEG, "_buildParser_", [smalltalk.send(self['@source'], "_val", [])]);return smalltalk.parser = parser;}, function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_title_", ["error"]);smalltalk.send($rec, "_message_", [thisisplaceholder1]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", []));}]);
    return self;
}
}),
smalltalk.ParserEditor);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    self['@source'] = function ($rec) {smalltalk.send($rec, "_css_put_", ["position", "absolute"]);smalltalk.send($rec, "_css_put_", ["width", "95%"]);smalltalk.send($rec, "_css_put_", ["height", "98%"]);smalltalk.send($rec, "_css_put_", ["left", "12px"]);smalltalk.send($rec, "_css_put_", ["right", "12px"]);smalltalk.send($rec, "_css_put_", ["top", "2px"]);return smalltalk.send($rec, "_css_put_", ["bottom", "2px"]);}(smalltalk.send(html, "_textarea", []));
    smalltalk.send(self, "_updateParserFromServer", []);
    return self;
}
}),
smalltalk.ParserEditor);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
    var self = this;
    return self['@source'];
    return self;
}
}),
smalltalk.ParserEditor);

smalltalk.addMethod(
"_updateParserFromServer",
smalltalk.method({
selector: "updateParserFromServer",
fn: function () {
    var self = this;
    return smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_option_", ["js/parser2.pegjs", smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("dataType", "__minus_gt", ["text"]), smalltalk.send("success", "__minus_gt", [function (thisisplaceholder1) {return smalltalk.send(self['@source'], "_val_", [thisisplaceholder1]);}])])]);
    return self;
}
}),
smalltalk.ParserEditor);


smalltalk.addMethod(
"_onDialog",
smalltalk.method({
selector: "onDialog",
fn: function () {
    var self = this;
    var this_ = nil;
    this_ = smalltalk.send(self, "_new", []);
    (function ($rec) {smalltalk.send($rec, "_widget_", [this_]);smalltalk.send($rec, "_modal_", [false]);smalltalk.send($rec, "_width_", ["50%"]);smalltalk.send($rec, "_title_", ["Parser Editor"]);smalltalk.send($rec, "_height_", [400]);smalltalk.send($rec, "_button_action_", ["apply", function () {return smalltalk.send(this_, "_applyParser", []);}]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", [])));
    return smalltalk.send(smalltalk.send(this_, "_source", []), "_css_put_", ["font-size", "2em"]);
    return self;
}
}),
smalltalk.ParserEditor.klass);


smalltalk.addClass('ParticipantsList', smalltalk.Object, ['event'], 'DyNagoya');
smalltalk.addMethod(
"_event_",
smalltalk.method({
selector: "event:",
fn: function (aEvent) {
    var self = this;
    self['@event'] = aEvent;
    return self;
}
}),
smalltalk.ParticipantsList);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_class", []), "_render", []);
    return self;
}
}),
smalltalk.ParticipantsList);

smalltalk.addMethod(
"_renderButton_users_",
smalltalk.method({
selector: "renderButton:users:",
fn: function (html, users) {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.Login || Login, "_user", [])) == nil ||
        $receiver == undefined ? function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn disabled"]);return smalltalk.send($rec, "_with_", [unescape("%u7533%u3057%u8FBC%u307F%u306B%u306F%u30ED%u30B0%u30A4%u30F3%28%u53F3%u4E0A%29%u304C%u5FC5%u8981%u3067%u3059")]);}(smalltalk.send(html, "_span", []));}() : function () {return ($receiver = smalltalk.send(users, "_includes_", [smalltalk.send(smalltalk.Login || Login, "_user", [])])).klass === smalltalk.Boolean ? !$receiver ? function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_with_", [unescape("%u53C2%u52A0%u3059%u308B")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_join", []);}]);}(smalltalk.send(html, "_a", []));}() : function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_with_", [unescape("%u53C2%u52A0%u3092%u53D6%u308A%u6D88%u3059")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_cancel", []);}]);}(smalltalk.send(html, "_a", []));}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_with_", [unescape("%u53C2%u52A0%u3059%u308B")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_join", []);}]);}(smalltalk.send(html, "_a", []));}, function () {return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_with_", [unescape("%u53C2%u52A0%u3092%u53D6%u308A%u6D88%u3059")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_cancel", []);}]);}(smalltalk.send(html, "_a", []));}]);}();
    return self;
}
}),
smalltalk.ParticipantsList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var users = nil;
    smalltalk.send(self['@event'], "_list_", [function (list) {smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("%u53C2%u52A0%u8005%uFF1A")]);smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {users = smalltalk.send(list, "_collect_", [function (each) {return smalltalk.send(each, "_user", []);}]);return smalltalk.send(users, "_do_", [function (each) {return smalltalk.send(smalltalk.Twitter || Twitter, "_link_user_", [html, each]);}]);}]);return function ($rec) {smalltalk.send($rec, "_css_put_", [unescape("margin-top"), "15px"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(self, "_renderButton_users_", [html, users]);return function ($rec) {smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_css_put_", [unescape("margin-left"), "10px"]);smalltalk.send($rec, "_with_", [unescape("Google%20Calendar%u306B%u767B%u9332")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self['@event'], "_addToCalendar", []);}]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_div", []));}]);
    return self;
}
}),
smalltalk.ParticipantsList);


smalltalk.ParticipantsList.klass.iVarNames = ['s'];
smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    ($receiver = self['@s']) == nil || $receiver == undefined ? function () {return self['@s'] = smalltalk.send(self, "_new", [], smalltalk.Widget.klass);}() : $receiver;
    return self['@s'];
    return self;
}
}),
smalltalk.ParticipantsList.klass);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
fn: function () {
    var self = this;
    var html = nil;
    html = smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_onJQuery_", [smalltalk.send(unescape("%23participants"), "_asJQuery", [])]);
    smalltalk.send(smalltalk.send(html, "_root", []), "_empty", []);
    smalltalk.send(smalltalk.send(self, "_new", []), "_renderOn_", [html]);
    return self;
}
}),
smalltalk.ParticipantsList.klass);


smalltalk.addClass('Participation', smalltalk.RemoteObject, [], 'DyNagoya');

smalltalk.addMethod(
"_afterDelete",
smalltalk.method({
selector: "afterDelete",
fn: function () {
    var self = this;
    return function () {return smalltalk.send(smalltalk.ParticipantsList || ParticipantsList, "_render", []);};
    return self;
}
}),
smalltalk.Participation.klass);

smalltalk.addMethod(
"_afterPut",
smalltalk.method({
selector: "afterPut",
fn: function () {
    var self = this;
    return function () {return smalltalk.send(smalltalk.ParticipantsList || ParticipantsList, "_render", []);};
    return self;
}
}),
smalltalk.Participation.klass);


smalltalk.addClass('Place', smalltalk.Widget, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Place);

smalltalk.addMethod(
"_gCalString",
smalltalk.method({
selector: "gCalString",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_address", []), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%29")]);
    return self;
}
}),
smalltalk.Place);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Place);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [unescape("%u5834%u6240%uFF1A")]);(function ($rec) {smalltalk.send($rec, "_href_", [smalltalk.send(self, "_url", [])]);smalltalk.send($rec, "_at_put_", ["target", "_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_name", [])]);}(smalltalk.send(html, "_a", [])));return smalltalk.send(smalltalk.GoogleMap || GoogleMap, "_link_address_", [html, smalltalk.send(self, "_address", [])]);}]);
    return self;
}
}),
smalltalk.Place);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Place);


smalltalk.addMethod(
"_openInDialog",
smalltalk.method({
selector: "openInDialog",
fn: function () {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(self, "_new", [])]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", [])));
    return self;
}
}),
smalltalk.Place.klass);


smalltalk.addClass('ATeam', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u897F%u533A%u725B%u5CF6%u753A6%u756A1%u53F7%20%u540D%u53E4%u5C4B%u30EB%u30FC%u30BB%u30F3%u30C8%u30BF%u30EF%u30FC32F");
    return self;
}
}),
smalltalk.ATeam);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u682A%u5F0F%u4F1A%u793E%u30A8%u30A4%u30C1%u30FC%u30E0");
    return self;
}
}),
smalltalk.ATeam);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.a-tm.co.jp/");
    return self;
}
}),
smalltalk.ATeam);



smalltalk.addClass('AmiyakiTei', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u5343\u7A2E\u533A\u4ECA\u6C602\u4E01\u76EE1-34";
    return self;
}
}),
smalltalk.AmiyakiTei);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u3042\u307F\u3084\u304D\u4EAD \u5343\u7A2E\u5E97";
    return self;
}
}),
smalltalk.AmiyakiTei);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://www.amiyakitei.co.jp/shop2.html#area_nagoya";
    return self;
}
}),
smalltalk.AmiyakiTei);



smalltalk.addClass('AnyWhere', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "";
    return self;
}
}),
smalltalk.AnyWhere);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u672A%u5B9A");
    return self;
}
}),
smalltalk.AnyWhere);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "";
    return self;
}
}),
smalltalk.AnyWhere);



smalltalk.addClass('Bambi', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u6771\u533A\u6CC9\u4E00\u4E01\u76EE4-5 \u30B0\u30E9\u30F3\u30C9\u30FC\u30EB\u30B7\u30E3\u30C8\u30FC1F";
    return self;
}
}),
smalltalk.Bambi);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u55AB\u8336\u30D0\u30F3\u30D3";
    return self;
}
}),
smalltalk.Bambi);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://r.tabelog.com/aichi/A2301/A230104/23040019/";
    return self;
}
}),
smalltalk.Bambi);



smalltalk.addClass('BondCoffee', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u6804%uFF11%u30FC%uFF11%uFF11%u30FC%uFF16");
    return self;
}
}),
smalltalk.BondCoffee);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u30DC%u30F3%u30C9%u30B3%u30FC%u30D2%u30FC");
    return self;
}
}),
smalltalk.BondCoffee);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.bondcoffee.jp/index.html");
    return self;
}
}),
smalltalk.BondCoffee);



smalltalk.addClass('Captina', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u540D%u99C53-28-12%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u30C2%u30F3%u30B0");
    return self;
}
}),
smalltalk.Captina);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u30AB%u30D7%u30C1%u30FC%u30CA%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u5E97");
    return self;
}
}),
smalltalk.Captina);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.dainagoya-building.com/cgi-bin/shop/page.cgi%3Fact%3Dpage%26id%3D5");
    return self;
}
}),
smalltalk.Captina);



smalltalk.addClass('Doerya', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u93263-25-20");
    return self;
}
}),
smalltalk.Doerya);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u30CF\u30F3\u30D0\u30FC\u30B0\u30CF\u30A6\u30B9\u6E90(\u65E7\u3069\u3048\u308A\u3083\u3042)";
    return self;
}
}),
smalltalk.Doerya);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://second.gensg.jp/gen/";
    return self;
}
}),
smalltalk.Doerya);



smalltalk.addClass('DyNagoyaBuilding', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u540D%u99C53-28-12%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u30C2%u30F3%u30B0");
    return self;
}
}),
smalltalk.DyNagoyaBuilding);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u30C2%u30F3%u30B0%20");
    return self;
}
}),
smalltalk.DyNagoyaBuilding);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.dainagoya-building.com/");
    return self;
}
}),
smalltalk.DyNagoyaBuilding);



smalltalk.addClass('Edelweiss', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u6771%u533A%u6771%u685C1-10-1");
    return self;
}
}),
smalltalk.Edelweiss);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u30A8%u30FC%u30C7%u30EB%u30EF%u30A4%u30B9");
    return self;
}
}),
smalltalk.Edelweiss);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www8.ocn.ne.jp/%7Eedel/");
    return self;
}
}),
smalltalk.Edelweiss);



smalltalk.addClass('Hakkaku', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u540D%u99C53-28-12%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u30C2%u30F3%u30B0B1");
    return self;
}
}),
smalltalk.Hakkaku);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u6D6A%u82B1%u308D%u3070%u305F%20%u516B%u89D2%20%u5927%u540D%u53E4%u5C4B%u30D3%u30EB%u5E97%20");
    return self;
}
}),
smalltalk.Hakkaku);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//r.gnavi.co.jp/n004601/");
    return self;
}
}),
smalltalk.Hakkaku);



smalltalk.addClass('Hina', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u4E2D\u533A\u5927\u98084-1-12";
    return self;
}
}),
smalltalk.Hina);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u967D\u83DC(\u3072\u306A)";
    return self;
}
}),
smalltalk.Hina);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://r.tabelog.com/aichi/A2301/A230103/23040495/";
    return self;
}
}),
smalltalk.Hina);



smalltalk.addClass('Imoni', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u7DD1\u533A\u5927\u9AD8\u753A\u5B57\u9AD8\u5C71\uFF11\uFF0D\uFF11";
    return self;
}
}),
smalltalk.Imoni);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u828B\u716E\u4F1A#2";
    return self;
}
}),
smalltalk.Imoni);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://partake.in/events/5e2b77db-4d10-4f7d-bba9-50d1890b104d";
    return self;
}
}),
smalltalk.Imoni);



smalltalk.addClass('Kako', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u540D%u99C55-30-4%u3000%u540D%u99C5KD%u30D3%u30EB1F");
    return self;
}
}),
smalltalk.Kako);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "Coffee shop KAKO";
    return self;
}
}),
smalltalk.Kako);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.coffeekako.com/index.html");
    return self;
}
}),
smalltalk.Kako);



smalltalk.addClass('Kakureya', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u5343\u7A2E\u533A\u56DB\u8C37\u901A1-8 \u30E9\u30D5\u30A9\u30FC\u30EC\u56DB\u30C4\u8C37B1";
    return self;
}
}),
smalltalk.Kakureya);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u6D1E\u98DF\u7A7A\u9593 \u96A0\u308C\u5BB6";
    return self;
}
}),
smalltalk.Kakureya);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://gourmet.walkerplus.com/157158314001/index.html";
    return self;
}
}),
smalltalk.Kakureya);



smalltalk.addClass('Katatumuri', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u4E38%u306E%u51852-14-15%20%u6CB3%u5408%u30D3%u30EB%u3000%uFF12%uFF26");
    return self;
}
}),
smalltalk.Katatumuri);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u30AB%u30BF%u30C4%u30E0%u30EA");
    return self;
}
}),
smalltalk.Katatumuri);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//r.tabelog.com/aichi/A2301/A230102/23007756/");
    return self;
}
}),
smalltalk.Katatumuri);



smalltalk.addClass('Lancia', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u662D%u548C%u533A%u96BC%u4EBA%u753A1-4%20%u6E05%u697D%u30D3%u30EB1F");
    return self;
}
}),
smalltalk.Lancia);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u30B5%u30E9%u30C0%u30B7%u30E7%u30C3%u30D7%20Lancia%20");
    return self;
}
}),
smalltalk.Lancia);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//r.tabelog.com/aichi/A2301/A230108/23005243/");
    return self;
}
}),
smalltalk.Lancia);



smalltalk.addClass('LokantaAYHAN', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u6804%uFF11%uFF0D%uFF11%uFF14%uFF0D%uFF12%uFF18");
    return self;
}
}),
smalltalk.LokantaAYHAN);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("Lokanta%20AYHAN%20%u30ED%u30AB%u30F3%u30BF%u30A2%u30A4%u30CF%u30F3");
    return self;
}
}),
smalltalk.LokantaAYHAN);

smalltalk.addMethod(
"_notice",
smalltalk.method({
selector: "notice",
fn: function () {
    var self = this;
    return unescape("%u65E5%u66DC%u65E5%u4F11%u307F");
    return self;
}
}),
smalltalk.LokantaAYHAN);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//star.gmobb.jp/lokanta_ayhan/");
    return self;
}
}),
smalltalk.LokantaAYHAN);



smalltalk.addClass('Maruichi', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u68043-8-102");
    return self;
}
}),
smalltalk.Maruichi);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u70AD%u706B%u713C%u304D%u9CE5%20%u307E%u308B%u3044%u3061");
    return self;
}
}),
smalltalk.Maruichi);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//r.tabelog.com/aichi/A2301/A230103/23030942/");
    return self;
}
}),
smalltalk.Maruichi);



smalltalk.addClass('Mattariya', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u5343\u7A2E\u533A\u5185\u5C71\uFF13-20-19";
    return self;
}
}),
smalltalk.Mattariya);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u307E\u3063\u305F\u308A\u3084 \u5343\u7A2E";
    return self;
}
}),
smalltalk.Mattariya);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://www.hotpepper.jp/strJ000725580";
    return self;
}
}),
smalltalk.Mattariya);



smalltalk.addClass('Moyorino', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u5343%u7A2E%u533A%u5BAE%u6839%u53F01-4-16%201F");
    return self;
}
}),
smalltalk.Moyorino);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("Moyorino%20%28%u30E2%u30E8%u30EA%u30CE%29");
    return self;
}
}),
smalltalk.Moyorino);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//moyo-reno.com/");
    return self;
}
}),
smalltalk.Moyorino);



smalltalk.addClass('NewCast', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u6771%u533A%u8475%uFF13%u4E01%u76EE%uFF12%uFF12%u2212%uFF18");
    return self;
}
}),
smalltalk.NewCast);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u30CB%u30E5%u30FC%u30AD%u30E3%u30B9%u30C8");
    return self;
}
}),
smalltalk.NewCast);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.xmldo.jp/about/seminarroom/");
    return self;
}
}),
smalltalk.NewCast);



smalltalk.addClass('Syushin', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u9326%uFF11%uFF0D%uFF11%uFF13%uFF0D%uFF13%uFF11%u30DF%u30C4%u30EF%u30D3%u30EB%uFF11%uFF26");
    return self;
}
}),
smalltalk.Syushin);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u5C45%u9152%u5C4B%20%u9152%u795E");
    return self;
}
}),
smalltalk.Syushin);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.hotpepper.jp/strJ000021742/");
    return self;
}
}),
smalltalk.Syushin);



smalltalk.addClass('Tagen', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u611B%u77E5%u770C%u540D%u53E4%u5C4B%u5E02%u5343%u7A2E%u533A%u4E0D%u8001%u753A");
    return self;
}
}),
smalltalk.Tagen);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5927%u5B66%u591A%u5143%u6570%u7406%u79D1%u5B66%u68DF");
    return self;
}
}),
smalltalk.Tagen);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.math.nagoya-u.ac.jp/ja/direction/campus.html");
    return self;
}
}),
smalltalk.Tagen);



smalltalk.addClass('Takoichi', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "\u540D\u53E4\u5C4B\u5E02\u4E2D\u533A\u5927\u98083-10-11";
    return self;
}
}),
smalltalk.Takoichi);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u305F\u3053\u3044\u3061 \u5927\u9808\u5E97";
    return self;
}
}),
smalltalk.Takoichi);

smalltalk.addMethod(
"_tel",
smalltalk.method({
selector: "tel",
fn: function () {
    var self = this;
    return "\uFF10\uFF15\uFF12\uFF0D\uFF12\uFF15\uFF11\uFF0D\uFF13\uFF10\uFF13\uFF13";
    return self;
}
}),
smalltalk.Takoichi);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://tako1.net/";
    return self;
}
}),
smalltalk.Takoichi);



smalltalk.addClass('Vinceness', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u533A%u93263-6-29%20%u30B5%u30A6%u30B9%u30CF%u30A6%u30B9B1");
    return self;
}
}),
smalltalk.Vinceness);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("%u30AB%u30D5%u30A7%20%u30F4%u30A1%u30F3%u30B5%u30F3%u30CC%u30C9%u30A5");
    return self;
}
}),
smalltalk.Vinceness);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.cafe-deux.com/cgi-bin/cafe-deuxcom/siteup.cgi%3Fcategory%3D5%26page%3D1");
    return self;
}
}),
smalltalk.Vinceness);



smalltalk.addClass('WindMonad', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return "\u611B\u77E5\u770C\u540D\u53E4\u5C4B\u5E02\u7DD1\u533A\u9CF4\u6D77\u753A\u5927\u6E05\u6C3469\u221247";
    return self;
}
}),
smalltalk.WindMonad);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return "\u98A8\u306E\u30E2\u30CA\u30C9";
    return self;
}
}),
smalltalk.WindMonad);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return "http://www.facebook.com/IhatovuCultureSchool";
    return self;
}
}),
smalltalk.WindMonad);



smalltalk.addClass('ZTres', smalltalk.Place, [], 'DyNagoya');
smalltalk.addMethod(
"_address",
smalltalk.method({
selector: "address",
fn: function () {
    var self = this;
    return unescape("%u540D%u53E4%u5C4B%u5E02%u4E2D%u6751%u533A%u693F%u753A3%u756A19%u53F7%u30A6%u30A4%u30F3%u30B0%u30D3%u30EB2F");
    return self;
}
}),
smalltalk.ZTres);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return unescape("Cafe%20Z-TRES");
    return self;
}
}),
smalltalk.ZTres);

smalltalk.addMethod(
"_url",
smalltalk.method({
selector: "url",
fn: function () {
    var self = this;
    return unescape("http%3A//www.forvex.co.jp/ztres/");
    return self;
}
}),
smalltalk.ZTres);



smalltalk.addClass('Screen', smalltalk.Widget, ['index', 'page'], 'DyNagoya');
smalltalk.addMethod(
"_animateIn_method_",
smalltalk.method({
selector: "animateIn:method:",
fn: function (jq, aString) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_show", []);return smalltalk.send($rec, "_toggleClass_", [aString]);}(jq));
    smalltalk.send(function () {return smalltalk.send(jq, "_toggleClass_", [aString]);}, "_valueWithTimeout_", [1000]);
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_animateOut_method_",
smalltalk.method({
selector: "animateOut:method:",
fn: function (jq, aString) {
    var self = this;
    smalltalk.send(jq, "_toggleClass_", [aString]);
    smalltalk.send(function () {return function ($rec) {smalltalk.send($rec, "_hide", []);return smalltalk.send($rec, "_toggleClass_", [aString]);}(jq);}, "_valueWithTimeout_", [1000]);
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send("#layer", "__comma", [self['@index']]), "_asJQuery", []);
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_fade_",
smalltalk.method({
selector: "fade:",
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_flip_before_after_", [aPage, "fadeOutDown", "fadeInUp"]);
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_flip_",
smalltalk.method({
selector: "flip:",
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_skew_", [aPage]);
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_flip_before_after_",
smalltalk.method({
selector: "flip:before:after:",
fn: function (aPage, beforeMethod, afterMethod) {
    var self = this;
    smalltalk.send(self, "_animateOut_method_", [smalltalk.send(self, "_current", []), beforeMethod]);
    smalltalk.send(self, "_nextIndex", []);
    self['@page'] = aPage;
    smalltalk.send(aPage, "_updateToJQuery_", [smalltalk.send(self, "_current", [])]);
    smalltalk.send(self, "_animateIn_method_", [smalltalk.send(self, "_current", []), afterMethod]);
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    self['@index'] = 1;
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_layers",
smalltalk.method({
selector: "layers",
fn: function () {
    var self = this;
    return ["#layer1", "#layer2"];
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_nextIndex",
smalltalk.method({
selector: "nextIndex",
fn: function () {
    var self = this;
    self['@index'] = ($receiver = smalltalk.send(self['@index'], "_\\\\", [smalltalk.send(smalltalk.send(self, "_layers", []), "_size", [])])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);
    return self['@index'];
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_page",
smalltalk.method({
selector: "page",
fn: function () {
    var self = this;
    return self['@page'];
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_id_", ["screen"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(1, "_to_", [2]), "_do_", [function (thisisplaceholder1) {return function ($rec) {smalltalk.send($rec, "_id_", [smalltalk.send("layer", "__comma", [thisisplaceholder1])]);return smalltalk.send($rec, "_class_", ["animated"]);}(smalltalk.send(html, "_div", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_roll_",
smalltalk.method({
selector: "roll:",
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_flip_before_after_", [aPage, "rollOut", "rollIn"]);
    return self;
}
}),
smalltalk.Screen);

smalltalk.addMethod(
"_skew_",
smalltalk.method({
selector: "skew:",
fn: function (aPage) {
    var self = this;
    smalltalk.send(self, "_flip_before_after_", [aPage, "lightSpeedOut", "lightSpeedIn"]);
    return self;
}
}),
smalltalk.Screen);


smalltalk.Screen.klass.iVarNames = ['single'];
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_page", []), "_do_", [aBlock]);
    return self;
}
}),
smalltalk.Screen.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    ($receiver = self['@single']) == nil || $receiver == undefined ? function () {return self['@single'] = smalltalk.send(self, "_new", [], smalltalk.Screen.klass.superclass || nil);}() : $receiver;
    return self['@single'];
    return self;
}
}),
smalltalk.Screen.klass);

smalltalk.addMethod(
"_put_",
smalltalk.method({
selector: "put:",
fn: function (aWidget) {
    var self = this;
    smalltalk.send(aWidget, "_appendToJQuery_", [smalltalk.send(smalltalk.send(self, "_new", []), "_current", [])]);
    return self;
}
}),
smalltalk.Screen.klass);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.Screen || Screen, "_new", []), "_flip_", [smalltalk.send(smalltalk.send(smalltalk.Page || Page, "_new", []), "_title_", [aString])]);
    return self;
}
}),
smalltalk.Screen.klass);


smalltalk.addClass('ToolBar', smalltalk.Widget, ['menu'], 'DyNagoya');
smalltalk.addMethod(
"_clearMenus",
smalltalk.method({
selector: "clearMenus",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(unescape("a.menu%2C%20.dropdown-toggle"), "_asJQuery", []), "_parent_", ["li"]), "_removeClass_", ["open"]);
    return self;
}
}),
smalltalk.ToolBar);

smalltalk.addMethod(
"_renderAbout_",
smalltalk.method({
selector: "renderAbout:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["dropdown class"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_class_", [unescape("dropdown-toggle")]);smalltalk.send($rec, "_at_put_", [unescape("data-toggle"), "dropdown"]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send("li.dropdown", "_asJQuery", []), "_addClass_", ["open"]);}]);return smalltalk.send($rec, "_with_", ["Menu"]);}(smalltalk.send(html, "_a", [])));return function ($rec) {smalltalk.send($rec, "_class_", [unescape("dropdown-menu")]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_onClick_", [function () {smalltalk.send(smalltalk.AboutDyNagoya || AboutDyNagoya, "_pan", []);return smalltalk.send(self, "_clearMenus", []);}]);return smalltalk.send($rec, "_with_", ["About DyNagoya"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_onClick_", [function () {smalltalk.send(smalltalk.AboutSmalltalk || AboutSmalltalk, "_pan", []);return smalltalk.send(self, "_clearMenus", []);}]);return smalltalk.send($rec, "_with_", ["About Smalltalk"]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_onClick_", [function () {smalltalk.send(smalltalk.Links || Links, "_pan", []);return smalltalk.send(self, "_clearMenus", []);}]);return smalltalk.send($rec, "_with_", ["Links"]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_ul", []));}]);}(smalltalk.send(html, "_li", [])));
    smalltalk.send(smalltalk.send(unescape("%23container"), "_asJQuery", []), "_bind_do_", ["click", function () {return smalltalk.send(self, "_clearMenus", []);}]);
    return self;
}
}),
smalltalk.ToolBar);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["fill"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_style_", ["float:right"]);smalltalk.send($rec, "_class_", ["nav"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Login || Login, "_new", []), "_appendToBrush_", [smalltalk.send(html, "_li", [])]);}]);}(smalltalk.send(html, "_ul", [])));return function ($rec) {smalltalk.send($rec, "_style_", ["float:left"]);smalltalk.send($rec, "_class_", ["nav"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [smalltalk.EntryPoint || EntryPoint]);}]);return smalltalk.send($rec, "_with_", ["Browser"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_style_", ["cursor: pointer"]);smalltalk.send($rec, "_onClick_", [function () {return function ($rec) {smalltalk.send($rec, "_widget_", [smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", [])]);smalltalk.send($rec, "_fontSize_", ["20px"]);smalltalk.send($rec, "_title_", ["Workspace"]);smalltalk.send($rec, "_modal_", [false]);return smalltalk.send($rec, "_open", []);}(smalltalk.send(smalltalk.DialogBox || DialogBox, "_new", []));}]);return smalltalk.send($rec, "_with_", ["Workspace"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.EntryPoint || EntryPoint, "_start", []);}]);return smalltalk.send($rec, "_with_", ["Redraw"]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(self, "_renderAbout_", [html]);smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//twitter.com/dynagoya_info")]);return smalltalk.send($rec, "_with_", ["Twitter"]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(html, "_li_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("https%3A//github.com/maeda-/DyNagoya-Info")]);return smalltalk.send($rec, "_with_", ["GitHub"]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_ul", []));}]);}(smalltalk.send(html, "_div", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.ToolBar);



