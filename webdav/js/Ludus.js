smalltalk.addPackage('Ludus', {});
smalltalk.addClass('Sound', smalltalk.Widget, ['src'], 'Ludus');
smalltalk.Sound.comment=unescape('I%20am%20a%20sound.%20I%20have%20a%20source%20audio%20file.%0AI%20can%20be%20played%2C%20paused%2C%20stopped%20or%20looped.')
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
var sound=nil;
sound=(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_src_", [smalltalk.send(self, "_src", [])]);})(smalltalk.send(html, "_audio", []));
smalltalk.send(sound, "_at_put_", ["preload", true]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7Csound%7C%0A%09sound%20%3A%3D%20html%20audio%0A%09%09id%3A%20self%20id%3B%0A%09%09src%3A%20self%20src.%0A%09sound%20at%3A%20%27preload%27%20put%3A%20true.'),
messageSends: ["id:", "id", "src:", "src", "audio", "at:put:"],
referencedClasses: []
}),
smalltalk.Sound);

smalltalk.addMethod(
unescape('_src'),
smalltalk.method({
selector: unescape('src'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@src'];
return self;},
args: [],
source: unescape('src%0A%09%5E%20src'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Sound);

smalltalk.addMethod(
unescape('_src_'),
smalltalk.method({
selector: unescape('src%3A'),
category: 'not yet classified',
fn: function (anUrl){
var self=this;
self['@src']=anUrl;
return self;},
args: ["anUrl"],
source: unescape('src%3A%20anUrl%0A%09src%20%3A%3D%20anUrl'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Sound);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_src", []), "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_", [unescape("%5C..%7B2%2C3%7D%24")]), ""]), "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_", [unescape(".*%5C/")]), ""]);
return self;},
args: [],
source: unescape('id%0A%09%22We%20take%20the%20file%20name%2C%20without%20extension%22%0A%09%5E%20%28self%20src%20%0A%20%20%20%20%20%20%20%20%20%20%20%09replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20%27%5C..%7B2%2C3%7D%24%27%29%20with%3A%20%27%27%29%0A%09%09%09replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20%27.*%5C/%27%29%20with%3A%20%27%27'),
messageSends: ["replaceRegexp:with:", "src", "fromString:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.Sound);

smalltalk.addMethod(
unescape('_play'),
smalltalk.method({
selector: unescape('play'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_stop", []);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_play", []);
return self;},
args: [],
source: unescape('play%0A%09self%20stop.%0A%09%28document%20getElementById%3A%20self%20id%29%20play.'),
messageSends: ["stop", "play", "getElementById:", "id"],
referencedClasses: []
}),
smalltalk.Sound);

smalltalk.addMethod(
unescape('_pause'),
smalltalk.method({
selector: unescape('pause'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_pause", []);
return self;},
args: [],
source: unescape('pause%0A%09%28document%20getElementById%3A%20self%20id%29%20pause.'),
messageSends: ["pause", "getElementById:", "id"],
referencedClasses: []
}),
smalltalk.Sound);

smalltalk.addMethod(
unescape('_stop'),
smalltalk.method({
selector: unescape('stop'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_pause", []);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_src_", [smalltalk.send(self, "_src", [])]);
return self;},
args: [],
source: unescape('stop%0A%09self%20pause.%0A%09%28document%20getElementById%3A%20self%20id%29%20src%3A%20self%20src.'),
messageSends: ["pause", "src:", "getElementById:", "id", "src"],
referencedClasses: []
}),
smalltalk.Sound);

smalltalk.addMethod(
unescape('_loop'),
smalltalk.method({
selector: unescape('loop'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_at_put_", ["loop", true]);
smalltalk.send(self, "_play", []);
return self;},
args: [],
source: unescape('loop%0A%09%28document%20getElementById%3A%20self%20id%29%20at%3A%20%27loop%27%20put%3A%20true.%0A%09self%20play.'),
messageSends: ["at:put:", "getElementById:", "id", "play"],
referencedClasses: []
}),
smalltalk.Sound);

smalltalk.addMethod(
unescape('_resume'),
smalltalk.method({
selector: unescape('resume'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_play", []);
return self;},
args: [],
source: unescape('resume%0A%09%28document%20getElementById%3A%20self%20id%29%20play.'),
messageSends: ["play", "getElementById:", "id"],
referencedClasses: []
}),
smalltalk.Sound);


smalltalk.addMethod(
unescape('_src_'),
smalltalk.method({
selector: unescape('src%3A'),
category: 'not yet classified',
fn: function (anUrl){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_src_", [anUrl]);
return self;},
args: ["anUrl"],
source: unescape('src%3A%20anUrl%0A%09%5E%20self%20new%20src%3A%20anUrl'),
messageSends: ["src:", "new"],
referencedClasses: []
}),
smalltalk.Sound.klass);


smalltalk.addClass('Game', smalltalk.Widget, ['canvas', 'context', 'fps', 'keys', 'step', 'end', 'mousePosition', 'mouseDown', 'sounds'], 'Ludus');
smalltalk.Game.comment=unescape('I%20am%20a%20game.%20You%20need%20to%20override%20a%20couple%20of%20my%20methods%20to%20make%20me%20usable%3A%0A%0A%23startGame%20%u2192%20Here%20you%20can%20define%20my%20intial%20conditions%2C%20such%20as%20the%20size%20of%20the%20canvas%2C%20my%20sounds%2C%20the%20background%20properties%2C%20the%20FPS%2C%20etc.%0A%23step%20%u2192%20Here%20you%20can%20define%20what%20has%20to%20be%20done%20at%20each%20game%20cycle%2C%20or%20step.%20This%20method%20should%20control%20posititions%2C%20collisions%2C%20mouse%20and%20keyboard%20events%2C%20etc.%20This%20method%20should%20not%20deal%20with%20any%20graphic%20properties%2C%20these%20should%20be%20dealt%20with%20by%3A%0A%23draw%20%u2192%20This%20is%20the%20method%20that%20controls%20my%20view.%20Here%20you%20should%20define%20the%20drawing%20of%20sprites%20and%20other%20graphic%20elements.%20Don%27t%20forget%20to%20clear%20the%20canvas%20before%20re-drawing%20sprites%2C%20if%20your%20game%20requires%20so.')
smalltalk.addMethod(
unescape('_width_'),
smalltalk.method({
selector: unescape('width%3A'),
category: 'attributes',
fn: function (anInteger){
var self=this;
smalltalk.send(self['@canvas'], "_at_put_", ["width", anInteger]);
return self;},
args: ["anInteger"],
source: unescape('width%3A%20anInteger%0A%09canvas%20at%3A%20%27width%27%20put%3A%20anInteger.'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_height_'),
smalltalk.method({
selector: unescape('height%3A'),
category: 'attributes',
fn: function (anInteger){
var self=this;
smalltalk.send(self['@canvas'], "_at_put_", ["height", anInteger]);
return self;},
args: ["anInteger"],
source: unescape('height%3A%20anInteger%0A%09canvas%20at%3A%20%27height%27%20put%3A%20anInteger.'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_width'),
smalltalk.method({
selector: unescape('width'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_width", []);
return self;},
args: [],
source: unescape('width%0A%09%5E%20canvas%20element%20width'),
messageSends: ["width", "element"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_height", []);
return self;},
args: [],
source: unescape('height%0A%09%5E%20canvas%20element%20height'),
messageSends: ["height", "element"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_backgroundColor_'),
smalltalk.method({
selector: unescape('backgroundColor%3A'),
category: 'attributes',
fn: function (aColor){
var self=this;
smalltalk.send(self['@canvas'], "_at_put_", ["style", smalltalk.send(smalltalk.send(unescape("background-color%3A%20"), "__comma", [aColor]), "__comma", [unescape("%3B")])]);
return self;},
args: ["aColor"],
source: unescape('backgroundColor%3A%20aColor%0A%09canvas%20at%3A%20%27style%27%20put%3A%20%28%27background-color%3A%20%27%2C%20aColor%20%2C%20%27%3B%27%29'),
messageSends: ["at:put:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_addSound_'),
smalltalk.method({
selector: unescape('addSound%3A'),
category: 'audio',
fn: function (aSoundUrl){
var self=this;
var sound=nil;
sound=smalltalk.send((smalltalk.Sound || Sound), "_src_", [aSoundUrl]);
smalltalk.send(self['@sounds'], "_add_", [sound]);
smalltalk.send(sound, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: ["aSoundUrl"],
source: unescape('addSound%3A%20aSoundUrl%0A%09%7Csound%7C%0A%09sound%20%3A%3D%20%28Sound%20src%3A%20aSoundUrl%29.%0A%09sounds%20add%3A%20sound.%0A%09sound%20appendToJQuery%3A%20%27body%27%20asJQuery.'),
messageSends: ["src:", "add:", "appendToJQuery:", "asJQuery"],
referencedClasses: ["Sound"]
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_soundNamed_'),
smalltalk.method({
selector: unescape('soundNamed%3A'),
category: 'audio',
fn: function (aName){
var self=this;
return smalltalk.send(self['@sounds'], "_detect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_id", []), "__eq", [aName]);})]);
return self;},
args: ["aName"],
source: unescape('soundNamed%3A%20aName%0A%09%5E%20sounds%20detect%3A%20%5B%3Aeach%20%7C%20each%20id%20%3D%20aName%20%5D'),
messageSends: ["detect:", unescape("%3D"), "id"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_gameLoop'),
smalltalk.method({
selector: unescape('gameLoop'),
category: 'control',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_gameOver", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((function(){smalltalk.send(self, "_step", []);smalltalk.send(self, "_draw", []);self['@step']=((($receiver = self['@step']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return smalltalk.send(self, "_gameLoop", []);}), "_valueWithTimeout_", [(1000) / self['@fps']]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((function(){smalltalk.send(self, "_step", []);smalltalk.send(self, "_draw", []);self['@step']=((($receiver = self['@step']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return smalltalk.send(self, "_gameLoop", []);}), "_valueWithTimeout_", [(1000) / self['@fps']]);})]));
return self;},
args: [],
source: unescape('gameLoop%0A%09%22Do%20not%20override%20me%2C%20use%20%23step%20and%20%23draw%20instead%22%0A%09self%20gameOver%20%0A%09%09ifFalse%3A%20%5B%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20step.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20draw.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09step%20%3A%3D%20step%20+%201.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20gameLoop%5D%20valueWithTimeout%3A%20%281000%20/%20fps%29%5D'),
messageSends: ["ifFalse:", "gameOver", "valueWithTimeout:", "step", "draw", unescape("+"), "gameLoop", unescape("/")],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_end'),
smalltalk.method({
selector: unescape('end'),
category: 'control',
fn: function (){
var self=this;
self['@end']=true;
return self;},
args: [],
source: unescape('end%0A%09end%20%3A%3D%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_gameOver'),
smalltalk.method({
selector: unescape('gameOver'),
category: 'control',
fn: function (){
var self=this;
return (($receiver = self['@end']) == nil || $receiver == undefined) ? (function(){return self['@end']=false;})() : $receiver;
return self;},
args: [],
source: unescape('gameOver%0A%09%5E%20end%20ifNil%3A%20%5Bend%20%3A%3D%20false%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_step'),
smalltalk.method({
selector: unescape('step'),
category: 'control',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('step%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_stepCount'),
smalltalk.method({
selector: unescape('stepCount'),
category: 'control',
fn: function (){
var self=this;
return self['@step'];
return self;},
args: [],
source: unescape('stepCount%0A%09%5E%20step'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_draw'),
smalltalk.method({
selector: unescape('draw'),
category: 'drawing',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('draw%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_clearCanvas'),
smalltalk.method({
selector: unescape('clearCanvas'),
category: 'drawing',
fn: function (){
var self=this;
smalltalk.send(self['@context'], "_clearRect_y_width_height_", [(0), (0), smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_width", []), smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_height", [])]);
return self;},
args: [],
source: unescape('clearCanvas%0A%09context%20clearRect%3A%200%20y%3A%200%20width%3A%20canvas%20element%20width%20height%3A%20canvas%20element%20height.'),
messageSends: ["clearRect:y:width:height:", "width", "element", "height"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_drawSprite_'),
smalltalk.method({
selector: unescape('drawSprite%3A'),
category: 'drawing',
fn: function (aSprite){
var self=this;
smalltalk.send(self['@context'], "_drawImage_originX_originY_frameWidth_frameHeight_x_y_scaleWidth_scaleHeight_", [smalltalk.send(aSprite, "_spriteSheet", []), ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_origin", []), "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_offset", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_offset", [])])), smalltalk.send(smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_origin", []), "_y", []), smalltalk.send(aSprite, "_width", []), smalltalk.send(aSprite, "_height", []), smalltalk.send(aSprite, "_x", []), smalltalk.send(aSprite, "_y", []), smalltalk.send(aSprite, "_width", []), smalltalk.send(aSprite, "_height", [])]);
((($receiver = smalltalk.send(smalltalk.send(self['@step'], "_\\\\", [smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_frameRate", [])]), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aSprite, "_nextFrame", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(aSprite, "_nextFrame", []);})]));
return self;},
args: ["aSprite"],
source: unescape('drawSprite%3A%20aSprite%0A%09context%20%0A%09%09drawImage%3A%20aSprite%20spriteSheet%0A%09%09originX%3A%20aSprite%20currentFrameGroup%20origin%20x%20+%20%28aSprite%20currentFrameGroup%20offset%29%0A%09%09originY%3A%20aSprite%20currentFrameGroup%20origin%20y%0A%09%09frameWidth%3A%20aSprite%20width%0A%09%09frameHeight%3A%20aSprite%20height%0A%09%09x%3A%20aSprite%20x%20%0A%09%09y%3A%20aSprite%20y%0A%09%09scaleWidth%3A%20aSprite%20width%0A%09%09scaleHeight%3A%20aSprite%20height.%0A%09%28step%20%5C%5C%20aSprite%20currentFrameGroup%20frameRate%29%20%3D%200%20ifTrue%3A%20%5BaSprite%20nextFrame%5D.'),
messageSends: ["drawImage:originX:originY:frameWidth:frameHeight:x:y:scaleWidth:scaleHeight:", "spriteSheet", unescape("+"), "x", "origin", "currentFrameGroup", "offset", "y", "width", "height", "ifTrue:", unescape("%3D"), unescape("%5C%5C%5C%5C"), "frameRate", "nextFrame"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_keyDown_'),
smalltalk.method({
selector: unescape('keyDown%3A'),
category: 'events',
fn: function (evt){
var self=this;
smalltalk.send(self['@keys'], "_at_put_", [smalltalk.send(evt, "_keyCode", []), true]);
return self;},
args: ["evt"],
source: unescape('keyDown%3A%20evt%0A%09keys%20at%3A%20evt%20keyCode%20put%3A%20true.'),
messageSends: ["at:put:", "keyCode"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_keyUp_'),
smalltalk.method({
selector: unescape('keyUp%3A'),
category: 'events',
fn: function (evt){
var self=this;
smalltalk.send(self['@keys'], "_at_put_", [smalltalk.send(evt, "_keyCode", []), false]);
return self;},
args: ["evt"],
source: unescape('keyUp%3A%20evt%0A%09keys%20at%3A%20evt%20keyCode%20put%3A%20false.'),
messageSends: ["at:put:", "keyCode"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_keys'),
smalltalk.method({
selector: unescape('keys'),
category: 'events',
fn: function (){
var self=this;
return (($receiver = self['@keys']) == nil || $receiver == undefined) ? (function(){self['@keys']=smalltalk.send((smalltalk.Array || Array), "_new", []);smalltalk.send((255), "_timesRepeat_", [(function(){return smalltalk.send(self['@keys'], "_add_", [false]);})]);return self['@keys'];})() : $receiver;
return self;},
args: [],
source: unescape('keys%0A%09%5E%20keys%20ifNil%3A%20%5Bkeys%20%3A%3D%20Array%20new.%20255%20timesRepeat%3A%20%5Bkeys%20add%3A%20false%5D.%20keys%5D'),
messageSends: ["ifNil:", "new", "timesRepeat:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_mouseMove_'),
smalltalk.method({
selector: unescape('mouseMove%3A'),
category: 'events',
fn: function (evt){
var self=this;
var canvasPosition=nil;
var windowScrollTop=nil;
var windowScrollLeft=nil;
var canvasRelative=nil;
windowScrollTop=$(window).scrollTop();;
windowScrollLeft=$(window).scrollLeft();;
canvasPosition=smalltalk.send(smalltalk.send("canvas", "_asJQuery", []), "_position", []);
canvasRelative=smalltalk.send(((($receiver = smalltalk.send(canvasPosition, "_left", [])).klass === smalltalk.Number) ? $receiver -windowScrollLeft : smalltalk.send($receiver, "__minus", [windowScrollLeft])), "__at", [((($receiver = smalltalk.send(canvasPosition, "_top", [])).klass === smalltalk.Number) ? $receiver -windowScrollTop : smalltalk.send($receiver, "__minus", [windowScrollTop]))]);
self['@mousePosition']=smalltalk.send(((($receiver = smalltalk.send(evt, "_clientX", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(canvasRelative, "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(canvasRelative, "_x", [])])), "__at", [((($receiver = smalltalk.send(evt, "_clientY", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(canvasRelative, "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(canvasRelative, "_y", [])]))]);
return self;},
args: ["evt"],
source: unescape('mouseMove%3A%20evt%0A%09%7CcanvasPosition%20windowScrollTop%20windowScrollLeft%20canvasRelative%7C%0A%0A%09windowScrollTop%20%3A%3D%20%3C%24%28window%29.scrollTop%28%29%3B%3E.%0A%09windowScrollLeft%20%3A%3D%20%3C%24%28window%29.scrollLeft%28%29%3B%3E.%0A%09canvasPosition%20%3A%3D%20%27canvas%27%20asJQuery%20position.%0A%0A%09canvasRelative%20%3A%3D%20%28canvasPosition%20left%20-%20windowScrollLeft%29%20@%20%28%20canvasPosition%20top%20-%20windowScrollTop%20%29%20.%0A%09mousePosition%20%3A%3D%20%28evt%20clientX%20-%20canvasRelative%20x%29%20@%20%28evt%20clientY%20-%20canvasRelative%20y%29.'),
messageSends: ["position", "asJQuery", unescape("@"), unescape("-"), "left", "top", "clientX", "x", "clientY", "y"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_mousePosition'),
smalltalk.method({
selector: unescape('mousePosition'),
category: 'events',
fn: function (){
var self=this;
return (($receiver = self['@mousePosition']) == nil || $receiver == undefined) ? (function(){return self['@mousePosition']=smalltalk.send((0), "__at", [(0)]);})() : $receiver;
return self;},
args: [],
source: unescape('mousePosition%0A%09%5E%20mousePosition%20ifNil%3A%20%5BmousePosition%20%3A%3D%200@0%5D'),
messageSends: ["ifNil:", unescape("@")],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_mouseDown_'),
smalltalk.method({
selector: unescape('mouseDown%3A'),
category: 'events',
fn: function (evt){
var self=this;
self['@mouseDown']=true;
return self;},
args: ["evt"],
source: unescape('mouseDown%3A%20evt%0A%09mouseDown%20%3A%3D%20true.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_mouseUp_'),
smalltalk.method({
selector: unescape('mouseUp%3A'),
category: 'events',
fn: function (evt){
var self=this;
self['@mouseDown']=false;
return self;},
args: ["evt"],
source: unescape('mouseUp%3A%20evt%0A%09mouseDown%20%3A%3D%20false.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_whileMouseDownDo_'),
smalltalk.method({
selector: unescape('whileMouseDownDo%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@mouseDown'], "_ifTrue_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('whileMouseDownDo%3A%20aBlock%0A%09mouseDown%20ifTrue%3A%20aBlock'),
messageSends: ["ifTrue:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_onMouseClickDo_'),
smalltalk.method({
selector: unescape('onMouseClickDo%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
(($receiver = ($('#canvas').data('events')['click'])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self['@canvas'], "_onClick_", [aBlock]);})() : $receiver;
return self;},
args: ["aBlock"],
source: unescape('onMouseClickDo%3A%20aBlock%0A%09%28%3C%28%24%28%27%23canvas%27%29.data%28%27events%27%29%5B%27click%27%5D%29%3E%29%0A%09%09ifNil%3A%20%5Bcanvas%20onClick%3A%20aBlock%5D'),
messageSends: ["ifNil:", "onClick:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_whileKeyPressed_do_'),
smalltalk.method({
selector: unescape('whileKeyPressed%3Ado%3A'),
category: 'events',
fn: function (aKeyCode, aBlock){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self['@keys'], "_at_ifAbsent_", [aKeyCode, (function(){return false;})]), "_and_", [(function(){return smalltalk.send(self['@keys'], "_at_", [aKeyCode]);})]), "_ifTrue_", [aBlock]);
return self;},
args: ["aKeyCode", "aBlock"],
source: unescape('whileKeyPressed%3A%20aKeyCode%20do%3A%20aBlock%0A%09%28%20%28%20keys%20at%3A%20aKeyCode%20ifAbsent%3A%20%5B%20false%20%5D%20%29%20and%3A%20%5B%20keys%20at%3A%20aKeyCode%20%5D%20%29%20ifTrue%3A%20aBlock'),
messageSends: ["ifTrue:", "and:", "at:ifAbsent:", "at:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_onMouseUpDo_'),
smalltalk.method({
selector: unescape('onMouseUpDo%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
(($receiver = ($('#canvas').data('events')['mouseup'])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_bind_do_", ["mouseup", aBlock]);})() : $receiver;
return self;},
args: ["aBlock"],
source: unescape('onMouseUpDo%3A%20aBlock%0A%09%28%3C%28%24%28%27%23canvas%27%29.data%28%27events%27%29%5B%27mouseup%27%5D%29%3E%29%0A%09%09ifNil%3A%20%5Bcanvas%20asJQuery%20bind%3A%20%27mouseup%27%20do%3A%20aBlock%5D'),
messageSends: ["ifNil:", "bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_onMouseDownDo_'),
smalltalk.method({
selector: unescape('onMouseDownDo%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
(($receiver = ($('#canvas').data('events')['mousedown'])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_bind_do_", ["mousedown", aBlock]);})() : $receiver;
return self;},
args: ["aBlock"],
source: unescape('onMouseDownDo%3A%20aBlock%0A%09%28%3C%28%24%28%27%23canvas%27%29.data%28%27events%27%29%5B%27mousedown%27%5D%29%3E%29%0A%09%09ifNil%3A%20%5Bcanvas%20asJQuery%20bind%3A%20%27mousedown%27%20do%3A%20aBlock%5D'),
messageSends: ["ifNil:", "bind:do:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_whileMouseUpDo_'),
smalltalk.method({
selector: unescape('whileMouseUpDo%3A'),
category: 'events',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@mouseDown'], "_ifFalse_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('whileMouseUpDo%3A%20aBlock%0A%09mouseDown%20ifFalse%3A%20aBlock'),
messageSends: ["ifFalse:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@fps']=(30);
self['@keys']=[];
self['@sounds']=[];
self['@mouseDown']=false;
self['@step']=(1);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09fps%20%3A%3D%2030.%0A%09keys%20%3A%3D%20%23%28%29.%0A%09sounds%20%3A%3D%20%23%28%29.%0A%09mouseDown%20%3A%3D%20false.%0A%09step%20%3A%3D%201.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_startGame'),
smalltalk.method({
selector: unescape('startGame'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('startGame%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@canvas']=smalltalk.send(html, "_canvas", []);
(function($rec){smalltalk.send($rec, "_at_put_", ["width", (250)]);smalltalk.send($rec, "_at_put_", ["height", (250)]);return smalltalk.send($rec, "_id_", ["canvas"]);})(self['@canvas']);
self['@context']=smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_getContext_", ["2d"]);
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof document == 'undefined' ? nil : document)]), "_keydown_", [(function(evt){return smalltalk.send(self, "_keyDown_", [evt]);})]);
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof document == 'undefined' ? nil : document)]), "_keyup_", [(function(evt){return smalltalk.send(self, "_keyUp_", [evt]);})]);
smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_bind_do_", ["mousedown", (function(evt){return smalltalk.send(self, "_mouseDown_", [evt]);})]);
smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_bind_do_", ["mouseup", (function(evt){return smalltalk.send(self, "_mouseUp_", [evt]);})]);
smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_bind_do_", ["mousemove", (function(evt){return smalltalk.send(self, "_mouseMove_", [evt]);})]);
smalltalk.send(self, "_startGame", []);
smalltalk.send(self, "_gameLoop", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%22Do%20not%20override%20me%2C%20use%20%23startGame%20instead%22%0A%09canvas%20%3A%3D%20html%20canvas.%0A%09canvas%20at%3A%20%27width%27%20put%3A%20250%3B%0A%09%09at%3A%20%27height%27%20put%3A%20250%3B%0A%09%09id%3A%20%27canvas%27.%0A%09context%20%3A%3D%20canvas%20element%20getContext%3A%20%272d%27.%0A%0A%09%28window%20jQuery%3A%20document%29%20keydown%3A%20%5B%3Aevt%20%7C%20self%20keyDown%3A%20evt%5D.%0A%09%28window%20jQuery%3A%20document%29%20keyup%3A%20%5B%3Aevt%20%7C%20self%20keyUp%3A%20evt%5D.%0A%09canvas%20asJQuery%20bind%3A%20%27mousedown%27%20do%3A%20%5B%3Aevt%20%7C%20self%20mouseDown%3A%20evt%5D.%0A%09canvas%20asJQuery%20bind%3A%20%27mouseup%27%20do%3A%20%5B%3Aevt%20%7C%20self%20mouseUp%3A%20evt%5D.%0A%09canvas%20asJQuery%20bind%3A%20%27mousemove%27%20do%3A%20%5B%3Aevt%20%7C%20self%20mouseMove%3A%20evt%5D.%0A%0A%09self%20startGame.%0A%0A%09self%20gameLoop.'),
messageSends: ["canvas", "at:put:", "id:", "getContext:", "element", "keydown:", "jQuery:", "keyDown:", "keyup:", "keyUp:", "bind:do:", "asJQuery", "mouseDown:", "mouseUp:", "mouseMove:", "startGame", "gameLoop"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_drawSpriteCollection_'),
smalltalk.method({
selector: unescape('drawSpriteCollection%3A'),
category: 'drawing',
fn: function (aSpriteCollection){
var self=this;
smalltalk.send(aSpriteCollection, "_do_", [(function(eachSprite){return smalltalk.send(self, "_drawSprite_", [eachSprite]);})]);
return self;},
args: ["aSpriteCollection"],
source: unescape('drawSpriteCollection%3A%20aSpriteCollection%0A%09aSpriteCollection%0A%09%09do%3A%20%5B%3AeachSprite%20%7C%20%0A%09%09%09self%20drawSprite%3A%20eachSprite%5D'),
messageSends: ["do:", "drawSprite:"],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_fps_'),
smalltalk.method({
selector: unescape('fps%3A'),
category: 'initialization',
fn: function (anInteger){
var self=this;
self['@fps']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('fps%3A%20anInteger%0A%09fps%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_everyStepNumber_do_'),
smalltalk.method({
selector: unescape('everyStepNumber%3Ado%3A'),
category: 'control',
fn: function (anInteger, aBlock){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self['@step'], "_\\\\", [anInteger]), "__eq", [(0)]), "_ifTrue_", [aBlock]);
return self;},
args: ["anInteger", "aBlock"],
source: unescape('everyStepNumber%3A%20anInteger%20do%3A%20aBlock%0A%09%28%20step%20%5C%5C%20anInteger%20%29%20%3D%200%20ifTrue%3A%20aBlock'),
messageSends: ["ifTrue:", unescape("%3D"), unescape("%5C%5C%5C%5C")],
referencedClasses: []
}),
smalltalk.Game);

smalltalk.addMethod(
unescape('_context'),
smalltalk.method({
selector: unescape('context'),
category: 'drawing',
fn: function (){
var self=this;
return self['@context'];
return self;},
args: [],
source: unescape('context%0A%09%5E%20context'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('initialize%0A%09%22uncomment%20if%20you%20want%20the%20game%20to%20start%20when%20loading%20the%20page%22%0A%22%09%27self%20start%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Game.klass);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'initialization',
fn: function (){
var self=this;
var instance=nil;
instance=smalltalk.send(self, "_new", []);
smalltalk.send(instance, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return instance;
return self;},
args: [],
source: unescape('start%0A%09%7Cinstance%7C%0A%09instance%20%3A%3D%20self%20new.%0A%09instance%20appendToJQuery%3A%20%28%27body%27%20asJQuery%29.%0A%09%5Einstance'),
messageSends: ["new", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Game.klass);


smalltalk.addClass('Key', smalltalk.Object, [], 'Ludus');
smalltalk.Key.comment=unescape('I%20am%20a%20helper%20class%20that%20always%20returns%20the%20key%20code%20of%20a%20certain%20key.%0AI%20have%20a%20couple%20of%20methods%20defined%20for%20keys%20that%20have%20names%2C%20such%20as%3A%0A%0Aspace%20%28or%20spaceBar%29%0Atab%0Aenter%0AleftArrow%0A...%0A%0AFor%20the%20rest%20of%20the%20keys%2C%20my%20%23doesNotUnderstand%20handles%20the%20conversion.')

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'error handling',
fn: function (aMessage){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_size", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self, "_keyCodeFor_", [smalltalk.send(aMessage, "_selector", [])])}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object.klass)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self, "_keyCodeFor_", [smalltalk.send(aMessage, "_selector", [])])}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object.klass)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_doesNotUnderstand_'){return e.fn()} throw(e)}},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%09aMessage%20selector%20size%20%3D%201%0A%09%09ifTrue%3A%20%5B%5E%20self%20keyCodeFor%3A%20aMessage%20selector%5D%0A%09%09ifFalse%3A%20%5B%5E%20super%20doesNotUnderstand%3A%20aMessage%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "size", "selector", "keyCodeFor:", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_leftArrow'),
smalltalk.method({
selector: unescape('leftArrow'),
category: 'key codes',
fn: function (){
var self=this;
return (37);
return self;},
args: [],
source: unescape('leftArrow%0A%09%5E%2037'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_upArrow'),
smalltalk.method({
selector: unescape('upArrow'),
category: 'key codes',
fn: function (){
var self=this;
return (38);
return self;},
args: [],
source: unescape('upArrow%0A%09%5E%2038'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_rightArrow'),
smalltalk.method({
selector: unescape('rightArrow'),
category: 'key codes',
fn: function (){
var self=this;
return (39);
return self;},
args: [],
source: unescape('rightArrow%0A%09%5E%2039'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_downArrow'),
smalltalk.method({
selector: unescape('downArrow'),
category: 'key codes',
fn: function (){
var self=this;
return (40);
return self;},
args: [],
source: unescape('downArrow%0A%09%5E%2040'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_tab'),
smalltalk.method({
selector: unescape('tab'),
category: 'key codes',
fn: function (){
var self=this;
return (9);
return self;},
args: [],
source: unescape('tab%0A%09%5E9'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_enter'),
smalltalk.method({
selector: unescape('enter'),
category: 'key codes',
fn: function (){
var self=this;
return (13);
return self;},
args: [],
source: unescape('enter%0A%09%5E13'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_keyCodeFor_'),
smalltalk.method({
selector: unescape('keyCodeFor%3A'),
category: 'key codes',
fn: function (aValue){
var self=this;
return ((($receiver = smalltalk.send(aValue, "_isString", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aValue, "_asUppercase", []), "_first", []), "_asciiValue", []);})() : (function(){return smalltalk.send(smalltalk.send(aValue, "_asString", []), "_asciiValue", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aValue, "_asUppercase", []), "_first", []), "_asciiValue", []);}), (function(){return smalltalk.send(smalltalk.send(aValue, "_asString", []), "_asciiValue", []);})]));
return self;},
args: ["aValue"],
source: unescape('keyCodeFor%3A%20aValue%0A%09%5E%20aValue%20isString%20%0A%09%09ifTrue%3A%20%5BaValue%20asUppercase%20first%20asciiValue%5D%0A%09%09ifFalse%3A%20%5BaValue%20asString%20asciiValue%5D'),
messageSends: ["ifTrue:ifFalse:", "isString", "asciiValue", "first", "asUppercase", "asString"],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_space'),
smalltalk.method({
selector: unescape('space'),
category: 'key codes',
fn: function (){
var self=this;
return (32);
return self;},
args: [],
source: unescape('space%0A%09%5E32'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Key.klass);

smalltalk.addMethod(
unescape('_spaceBar'),
smalltalk.method({
selector: unescape('spaceBar'),
category: 'key codes',
fn: function (){
var self=this;
return (32);
return self;},
args: [],
source: unescape('spaceBar%0A%09%5E32'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Key.klass);


smalltalk.addClass('Sprite', smalltalk.Object, ['position', 'direction', 'spriteSheet', 'currentFrameGroup', 'frameGroups', 'animating'], 'Ludus');
smalltalk.Sprite.comment=unescape('I%20am%20a%20Sprite.%20I%20need%20to%20have%20a%20spritesheet%2C%20which%20is%20an%20image%20file%20that%20displays%20all%20possible%20frames%20I%20can%20paint%20organized%20in%20an%20ordered%20fashion.%0AYou%20define%20different%20frame%20groups%20for%20this%20spritesheet%2C%20and%20you%20can%20cycle%20through%20these%20framegroups%20and%20through%20the%20frames%20of%20each%20of%20them.%0AI%20have%20a%20direction%2C%20defined%20by%20a%20unit%20vector.%20This%20vector%20will%20always%20be%20a%20unit%20vector.%20If%20someone%20tries%20to%20force-set%20my%20direction%20to%20a%20vector%20that%20is%20not%20a%20unit%20one%2C%20I%20will%20just%20convert%20it.%0AI%20handle%20collisions%20with%20other%20sprites%20and%20sprite%20collections.%0AOf%20course%2C%20I%20also%20have%20a%20position%2C%20defined%20by%20cartesian%20coordinates.')
smalltalk.addMethod(
unescape('_frameRate_'),
smalltalk.method({
selector: unescape('frameRate%3A'),
category: 'animation',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_do_", [(function(each){return smalltalk.send(each, "_frameRate_", [anInteger]);})]);
return self;},
args: ["anInteger"],
source: unescape('frameRate%3A%20anInteger%0A%09self%20frameGroups%20do%3A%20%5B%3Aeach%20%7C%20each%20frameRate%3A%20anInteger%5D'),
messageSends: ["do:", "frameGroups", "frameRate:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_animating'),
smalltalk.method({
selector: unescape('animating'),
category: 'animation',
fn: function (){
var self=this;
return (($receiver = self['@animating']) == nil || $receiver == undefined) ? (function(){return self['@animating']=true;})() : $receiver;
return self;},
args: [],
source: unescape('animating%0A%09%5E%20animating%20ifNil%3A%20%5Banimating%20%3A%3D%20true%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_toggleAnimation'),
smalltalk.method({
selector: unescape('toggleAnimation'),
category: 'animation',
fn: function (){
var self=this;
self['@animating']=smalltalk.send(self['@animating'], "_not", []);
return self;},
args: [],
source: unescape('toggleAnimation%0A%09animating%20%3A%3D%20animating%20not'),
messageSends: ["not"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_stopAnimation'),
smalltalk.method({
selector: unescape('stopAnimation'),
category: 'animation',
fn: function (){
var self=this;
self['@animating']=false;
return self;},
args: [],
source: unescape('stopAnimation%0A%09animating%20%3A%3D%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_startAnimation'),
smalltalk.method({
selector: unescape('startAnimation'),
category: 'animation',
fn: function (){
var self=this;
self['@animating']=true;
return self;},
args: [],
source: unescape('startAnimation%0A%09animating%20%3A%3D%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_x'),
smalltalk.method({
selector: unescape('x'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "_x", []);
return self;},
args: [],
source: unescape('x%0A%09%5E%20self%20position%20x'),
messageSends: ["x", "position"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_y'),
smalltalk.method({
selector: unescape('y'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "_y", []);
return self;},
args: [],
source: unescape('y%0A%09%5E%20self%20position%20y'),
messageSends: ["y", "position"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_y_'),
smalltalk.method({
selector: unescape('y%3A'),
category: 'attributes',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(self, "_position", []), "_y_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('y%3A%20anInteger%0A%09self%20position%20y%3A%20anInteger'),
messageSends: ["y:", "position"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_x_'),
smalltalk.method({
selector: unescape('x%3A'),
category: 'attributes',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(self, "_position", []), "_x_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('x%3A%20anInteger%0A%09self%20position%20x%3A%20anInteger'),
messageSends: ["x:", "position"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_spriteSheet'),
smalltalk.method({
selector: unescape('spriteSheet'),
category: 'attributes',
fn: function (){
var self=this;
(($receiver = self['@spriteSheet']) == nil || $receiver == undefined) ? (function(){return self['@spriteSheet']=new Image();;})() : $receiver;
return self['@spriteSheet'];
return self;},
args: [],
source: unescape('spriteSheet%0A%09spriteSheet%20ifNil%3A%20%5BspriteSheet%20%3A%3D%20%3Cnew%20Image%28%29%3B%3E.%5D.%0A%20%20%20%20%20%20%20%20%5EspriteSheet.'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_spriteSheet_'),
smalltalk.method({
selector: unescape('spriteSheet%3A'),
category: 'attributes',
fn: function (anImageUrl){
var self=this;
smalltalk.send(smalltalk.send(self, "_spriteSheet", []), "_src_", [anImageUrl]);
return self;},
args: ["anImageUrl"],
source: unescape('spriteSheet%3A%20anImageUrl%0A%09self%20spriteSheet%20src%3A%20anImageUrl'),
messageSends: ["src:", "spriteSheet"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_height", []);
return self;},
args: [],
source: unescape('height%0A%09%5E%20self%20currentFrameGroup%20height'),
messageSends: ["height", "currentFrameGroup"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_width'),
smalltalk.method({
selector: unescape('width'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_width", []);
return self;},
args: [],
source: unescape('width%0A%09%5E%20self%20currentFrameGroup%20width'),
messageSends: ["width", "currentFrameGroup"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_centre'),
smalltalk.method({
selector: unescape('centre'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(((($receiver = ((($receiver = smalltalk.send(self, "_width", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_x", [])])), "__at", [((($receiver = ((($receiver = smalltalk.send(self, "_height", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_y", [])]))]);
return self;},
args: [],
source: unescape('centre%0A%09%5E%20%28%28self%20width%20/%202%29%20+%20self%20x%29%20@%20%28%28self%20height%20/%202%29%20+%20self%20y%29.'),
messageSends: [unescape("@"), unescape("+"), unescape("/"), "width", "x", "height", "y"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_centre_'),
smalltalk.method({
selector: unescape('centre%3A'),
category: 'attributes',
fn: function (aPoint){
var self=this;
var xOffset=nil;
var yOffset=nil;
xOffset=((($receiver = smalltalk.send(self, "_width", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));
yOffset=((($receiver = smalltalk.send(self, "_height", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));
smalltalk.send(self, "_position_", [smalltalk.send(((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver -xOffset : smalltalk.send($receiver, "__minus", [xOffset])), "__at", [((($receiver = smalltalk.send(aPoint, "_y", [])).klass === smalltalk.Number) ? $receiver -yOffset : smalltalk.send($receiver, "__minus", [yOffset]))])]);
return self;},
args: ["aPoint"],
source: unescape('centre%3A%20aPoint%0A%09%7CxOffset%20yOffset%7C%0A%09xOffset%20%3A%3D%20%28self%20width%20/%202%29.%0A%09yOffset%20%3A%3D%20%28self%20height%20/%202%29.%0A%0A%09self%20position%3A%20%28%28aPoint%20x%20-%20xOffset%29%20@%20%28aPoint%20y%20-%20yOffset%29%29.'),
messageSends: [unescape("/"), "width", "height", "position:", unescape("@"), unescape("-"), "x", "y"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
category: 'attributes',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return self['@position']=smalltalk.send((0), "__at", [(0)]);})() : $receiver;
return self;},
args: [],
source: unescape('position%0A%09%5E%20position%20ifNil%3A%20%5Bposition%20%3A%3D%200@0%5D'),
messageSends: ["ifNil:", unescape("@")],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_position_'),
smalltalk.method({
selector: unescape('position%3A'),
category: 'attributes',
fn: function (aPoint){
var self=this;
return self['@position']=aPoint;
return self;},
args: ["aPoint"],
source: unescape('position%3A%20aPoint%0A%09%5E%20position%20%3A%3D%20aPoint'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_direction'),
smalltalk.method({
selector: unescape('direction'),
category: 'attributes',
fn: function (){
var self=this;
(($receiver = self['@direction']) != nil && $receiver != undefined) ? (function(){var angle=nil;
((($receiver = ((($receiver = smalltalk.send(self['@direction'], "_y", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return angle=smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(self['@direction'], "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@direction'], "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@direction'], "_y", [])]))]);})() : (function(){return angle=((($receiver = smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(self['@direction'], "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@direction'], "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@direction'], "_y", [])]))])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Number || Number), "_pi", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Number || Number), "_pi", [])]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return angle=smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(self['@direction'], "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@direction'], "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@direction'], "_y", [])]))]);}), (function(){return angle=((($receiver = smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(self['@direction'], "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@direction'], "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@direction'], "_y", [])]))])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Number || Number), "_pi", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Number || Number), "_pi", [])]));})]));return self['@direction']=smalltalk.send(smalltalk.send((smalltalk.Math || Math), "_sin_", [angle]), "__at", [smalltalk.send((smalltalk.Math || Math), "_cos_", [angle])]);})() : nil;
return (($receiver = self['@direction']) == nil || $receiver == undefined) ? (function(){return self['@direction']=smalltalk.send((0), "__at", [(1)]);})() : $receiver;
return self;},
args: [],
source: unescape('direction%0A%09%22The%20direction%20is%20always%20a%20unit%20vector%22%0A%09direction%20ifNotNil%3A%0A%09%09%5B%7Cangle%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20direction%20y%20%3E%3D%200%0A%09%09%09ifTrue%3A%20%5B%20angle%20%3A%3D%20Math%20atan%3A%20%28direction%20x%20/%20direction%20y%29%20%5D%0A%09%09%09ifFalse%3A%20%5B%20angle%20%3A%3D%20%28Math%20atan%3A%20%28direction%20x%20/%20direction%20y%29%29%20+%20Number%20pi%20%5D.%0A%09%09direction%20%3A%3D%20%28Math%20sin%3A%20angle%29%20@%20%28Math%20cos%3A%20angle%29%5D.%0A%0A%09%5E%20direction%20ifNil%3A%20%5Bdirection%20%3A%3D%200@1%5D'),
messageSends: ["ifNotNil:", "ifTrue:ifFalse:", unescape("%3E%3D"), "y", "atan:", unescape("/"), "x", unescape("+"), "pi", unescape("@"), "sin:", "cos:", "ifNil:"],
referencedClasses: ["Math", "Number"]
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_direction_'),
smalltalk.method({
selector: unescape('direction%3A'),
category: 'attributes',
fn: function (aPoint){
var self=this;
var angle=nil;
((($receiver = ((($receiver = smalltalk.send(aPoint, "_y", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return angle=smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(aPoint, "_y", [])]))]);})() : (function(){return angle=((($receiver = smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(aPoint, "_y", [])]))])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Number || Number), "_pi", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Number || Number), "_pi", [])]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return angle=smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(aPoint, "_y", [])]))]);}), (function(){return angle=((($receiver = smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(aPoint, "_y", [])]))])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Number || Number), "_pi", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Number || Number), "_pi", [])]));})]));
self['@direction']=smalltalk.send(smalltalk.send((smalltalk.Math || Math), "_sin_", [angle]), "__at", [smalltalk.send((smalltalk.Math || Math), "_cos_", [angle])]);
return self;},
args: ["aPoint"],
source: unescape('direction%3A%20aPoint%0A%09%22The%20direction%20is%20always%20a%20unit%20vector%22%0A%09%7Cangle%7C%0A%09aPoint%20y%20%3E%3D%200%0A%09%09ifTrue%3A%20%5B%20angle%20%3A%3D%20Math%20atan%3A%20%28aPoint%20x%20/%20aPoint%20y%29%20%5D%0A%09%09ifFalse%3A%20%5B%20angle%20%3A%3D%20%28Math%20atan%3A%20%28aPoint%20x%20/%20aPoint%20y%29%29%20+%20Number%20pi%20%5D.%0A%09direction%20%3A%3D%20%28Math%20sin%3A%20angle%29%20@%20%28Math%20cos%3A%20angle%29.'),
messageSends: ["ifTrue:ifFalse:", unescape("%3E%3D"), "y", "atan:", unescape("/"), "x", unescape("+"), "pi", unescape("@"), "sin:", "cos:"],
referencedClasses: ["Math", "Number"]
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_collidesWith_'),
smalltalk.method({
selector: unescape('collidesWith%3A'),
category: 'collisions',
fn: function (aSprite){
var self=this;
var x0=nil;
var x1=nil;
var y0=nil;
var y1=nil;
x0=((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_width", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_width", [])]));
x1=((($receiver = smalltalk.send(aSprite, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aSprite, "_width", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aSprite, "_width", [])]));
y1=((($receiver = smalltalk.send(aSprite, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aSprite, "_height", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aSprite, "_height", [])]));
y0=((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_height", [])]));
return smalltalk.send(smalltalk.send(smalltalk.send(((($receiver = x0).klass === smalltalk.Number) ? $receiver >smalltalk.send(aSprite, "_x", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(aSprite, "_x", [])])), "_&", [((($receiver = y0).klass === smalltalk.Number) ? $receiver >smalltalk.send(aSprite, "_y", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(aSprite, "_y", [])]))]), "_&", [((($receiver = x1).klass === smalltalk.Number) ? $receiver >smalltalk.send(self, "_x", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(self, "_x", [])]))]), "_&", [((($receiver = y1).klass === smalltalk.Number) ? $receiver >smalltalk.send(self, "_y", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(self, "_y", [])]))]);
return self;},
args: ["aSprite"],
source: unescape('collidesWith%3A%20aSprite%0A%09%7Cx0%20x1%20y0%20y1%7C%0A%09x0%20%3A%3D%20self%20x%20+%20self%20width.%0A%09x1%20%3A%3D%20aSprite%20x%20+%20aSprite%20width.%0A%09y1%20%3A%3D%20aSprite%20y%20+%20aSprite%20height.%0A%09y0%20%3A%3D%20self%20y%20+%20self%20height.%0A%0A%09%5E%20%28x0%20%3E%20aSprite%20x%29%20%26%20%28y0%20%3E%20aSprite%20y%29%20%26%20%28x1%20%3E%20self%20x%29%20%26%20%28y1%20%3E%20self%20y%29.'),
messageSends: [unescape("+"), "x", "width", "y", "height", unescape("%26"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_rightCollidesWith_'),
smalltalk.method({
selector: unescape('rightCollidesWith%3A'),
category: 'collisions',
fn: function (aSprite){
var self=this;
var x0=nil;
var y0=nil;
var y1=nil;
x0=((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_width", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_width", [])]));
y1=((($receiver = smalltalk.send(aSprite, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aSprite, "_height", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aSprite, "_height", [])]));
y0=((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_height", [])]));
return smalltalk.send(smalltalk.send(smalltalk.send(((($receiver = x0).klass === smalltalk.Number) ? $receiver >=smalltalk.send(aSprite, "_x", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(aSprite, "_x", [])])), "_&", [((($receiver = y0).klass === smalltalk.Number) ? $receiver >=smalltalk.send(aSprite, "_y", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(aSprite, "_y", [])]))]), "_&", [((($receiver = y1).klass === smalltalk.Number) ? $receiver >=smalltalk.send(self, "_y", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(self, "_y", [])]))]), "_&", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(aSprite, "_x", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(aSprite, "_x", [])]))]);
return self;},
args: ["aSprite"],
source: unescape('rightCollidesWith%3A%20aSprite%0A%09%7Cx0%20%20y0%20y1%7C%0A%09x0%20%3A%3D%20self%20x%20+%20self%20width.%0A%09y1%20%3A%3D%20aSprite%20y%20+%20aSprite%20height.%0A%09y0%20%3A%3D%20self%20y%20+%20self%20height.%0A%0A%09%5E%20%28x0%20%3E%3D%20aSprite%20x%29%20%26%20%28y0%20%3E%3D%20aSprite%20y%29%20%26%20%28y1%20%3E%3D%20self%20y%29%20%26%20%28self%20x%20%3C%20aSprite%20x%29.'),
messageSends: [unescape("+"), "x", "width", "y", "height", unescape("%26"), unescape("%3E%3D"), unescape("%3C")],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_leftCollidesWith_'),
smalltalk.method({
selector: unescape('leftCollidesWith%3A'),
category: 'collisions',
fn: function (aSprite){
var self=this;
return smalltalk.send(aSprite, "_rightCollidesWith_", [self]);
return self;},
args: ["aSprite"],
source: unescape('leftCollidesWith%3A%20aSprite%0A%09%5E%20aSprite%20rightCollidesWith%3A%20self'),
messageSends: ["rightCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_topCollidesWith_'),
smalltalk.method({
selector: unescape('topCollidesWith%3A'),
category: 'collisions',
fn: function (aSprite){
var self=this;
var x0=nil;
var x1=nil;
var y0=nil;
var y1=nil;
x0=((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_width", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_width", [])]));
x1=((($receiver = smalltalk.send(aSprite, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aSprite, "_width", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aSprite, "_width", [])]));
y1=((($receiver = smalltalk.send(aSprite, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aSprite, "_height", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aSprite, "_height", [])]));
return smalltalk.send(smalltalk.send(smalltalk.send(((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver <=y1 : smalltalk.send($receiver, "__lt_eq", [y1])), "_&", [((($receiver = x0).klass === smalltalk.Number) ? $receiver >=smalltalk.send(aSprite, "_x", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(aSprite, "_x", [])]))]), "_&", [((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(aSprite, "_y", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(aSprite, "_y", [])]))]), "_&", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver <x1 : smalltalk.send($receiver, "__lt", [x1]))]);
return self;},
args: ["aSprite"],
source: unescape('topCollidesWith%3A%20aSprite%0A%09%7Cx0%20x1%20y0%20y1%7C%0A%09x0%20%3A%3D%20self%20x%20+%20self%20width.%0A%09x1%20%3A%3D%20aSprite%20x%20+%20aSprite%20width.%0A%09y1%20%3A%3D%20aSprite%20y%20+%20aSprite%20height.%0A%0A%09%20%5E%20%28self%20y%20%3C%3D%20y1%29%20%26%20%28x0%20%3E%3D%20aSprite%20x%29%20%26%20%28self%20y%20%3E%20aSprite%20y%29%20%26%20%28self%20x%20%3C%20x1%29'),
messageSends: [unescape("+"), "x", "width", "y", "height", unescape("%26"), unescape("%3C%3D"), unescape("%3E%3D"), unescape("%3E"), unescape("%3C")],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_bottomCollidesWith_'),
smalltalk.method({
selector: unescape('bottomCollidesWith%3A'),
category: 'collisions',
fn: function (aSprite){
var self=this;
return smalltalk.send(aSprite, "_topCollidesWith_", [self]);
return self;},
args: ["aSprite"],
source: unescape('bottomCollidesWith%3A%20aSprite%0A%09%5E%20aSprite%20topCollidesWith%3A%20self'),
messageSends: ["topCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_bottomCollidesWithAnyOf_'),
smalltalk.method({
selector: unescape('bottomCollidesWithAnyOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_bottomCollidesWith_", [each]);})]), "_notEmpty", []);
return self;},
args: ["aSpriteCollection"],
source: unescape('bottomCollidesWithAnyOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20select%3A%20%5B%3Aeach%20%7C%20self%20bottomCollidesWith%3A%20each%5D%29%20notEmpty'),
messageSends: ["notEmpty", "select:", "bottomCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_topCollidesWithAnyOf_'),
smalltalk.method({
selector: unescape('topCollidesWithAnyOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_topCollidesWith_", [each]);})]), "_notEmpty", []);
return self;},
args: ["aSpriteCollection"],
source: unescape('topCollidesWithAnyOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20select%3A%20%5B%3Aeach%20%7C%20self%20topCollidesWith%3A%20each%5D%29%20notEmpty'),
messageSends: ["notEmpty", "select:", "topCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_leftCollidesWithAnyOf_'),
smalltalk.method({
selector: unescape('leftCollidesWithAnyOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_leftCollidesWith_", [each]);})]), "_notEmpty", []);
return self;},
args: ["aSpriteCollection"],
source: unescape('leftCollidesWithAnyOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20select%3A%20%5B%3Aeach%20%7C%20self%20leftCollidesWith%3A%20each%5D%29%20notEmpty'),
messageSends: ["notEmpty", "select:", "leftCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_rightCollidesWithAnyOf_'),
smalltalk.method({
selector: unescape('rightCollidesWithAnyOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_rightCollidesWith_", [each]);})]), "_notEmpty", []);
return self;},
args: ["aSpriteCollection"],
source: unescape('rightCollidesWithAnyOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20select%3A%20%5B%3Aeach%20%7C%20self%20rightCollidesWith%3A%20each%5D%29%20notEmpty'),
messageSends: ["notEmpty", "select:", "rightCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_bottomCollidesWithWhichOf_'),
smalltalk.method({
selector: unescape('bottomCollidesWithWhichOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(aSpriteCollection, "_detect_", [(function(each){return smalltalk.send(self, "_bottomCollidesWith_", [each]);})]);
return self;},
args: ["aSpriteCollection"],
source: unescape('bottomCollidesWithWhichOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20detect%3A%20%5B%3Aeach%20%7C%20self%20bottomCollidesWith%3A%20each%5D%29'),
messageSends: ["detect:", "bottomCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_leftCollidesWithWhichOf_'),
smalltalk.method({
selector: unescape('leftCollidesWithWhichOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(aSpriteCollection, "_detect_", [(function(each){return smalltalk.send(self, "_leftCollidesWith_", [each]);})]);
return self;},
args: ["aSpriteCollection"],
source: unescape('leftCollidesWithWhichOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20detect%3A%20%5B%3Aeach%20%7C%20self%20leftCollidesWith%3A%20each%5D%29'),
messageSends: ["detect:", "leftCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_rightCollidesWithWhichOf_'),
smalltalk.method({
selector: unescape('rightCollidesWithWhichOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(aSpriteCollection, "_detect_", [(function(each){return smalltalk.send(self, "_rightCollidesWith_", [each]);})]);
return self;},
args: ["aSpriteCollection"],
source: unescape('rightCollidesWithWhichOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20detect%3A%20%5B%3Aeach%20%7C%20self%20rightCollidesWith%3A%20each%5D%29'),
messageSends: ["detect:", "rightCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_topCollidesWithWhichOf_'),
smalltalk.method({
selector: unescape('topCollidesWithWhichOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(aSpriteCollection, "_detect_", [(function(each){return smalltalk.send(self, "_topCollidesWith_", [each]);})]);
return self;},
args: ["aSpriteCollection"],
source: unescape('topCollidesWithWhichOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20detect%3A%20%5B%3Aeach%20%7C%20self%20topCollidesWith%3A%20each%5D%29'),
messageSends: ["detect:", "topCollidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_collidesWithAnyOf_'),
smalltalk.method({
selector: unescape('collidesWithAnyOf%3A'),
category: 'collisions',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_collidesWith_", [each]);})]), "_notEmpty", []);
return self;},
args: ["aSpriteCollection"],
source: unescape('collidesWithAnyOf%3A%20aSpriteCollection%0A%09%5E%20%28aSpriteCollection%20select%3A%20%5B%3Aeach%20%7C%20self%20collidesWith%3A%20each%5D%29%20notEmpty'),
messageSends: ["notEmpty", "select:", "collidesWith:"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_currentFrameGroup'),
smalltalk.method({
selector: unescape('currentFrameGroup'),
category: 'frames',
fn: function (){
var self=this;
return (($receiver = self['@currentFrameGroup']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_first", []);})() : $receiver;
return self;},
args: [],
source: unescape('currentFrameGroup%0A%09%5E%20currentFrameGroup%20ifNil%3A%20%5B%20self%20frameGroups%20first%20%5D'),
messageSends: ["ifNil:", "first", "frameGroups"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_frameGroups'),
smalltalk.method({
selector: unescape('frameGroups'),
category: 'frames',
fn: function (){
var self=this;
return (($receiver = self['@frameGroups']) == nil || $receiver == undefined) ? (function(){return self['@frameGroups']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('frameGroups%0A%09%5E%20frameGroups%20ifNil%3A%20%5BframeGroups%20%3A%3DArray%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_currentFrameGroup_'),
smalltalk.method({
selector: unescape('currentFrameGroup%3A'),
category: 'frames',
fn: function (anIdentifier){
var self=this;
self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_detect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_identifier", []), "__eq", [anIdentifier]);})]);
return self;},
args: ["anIdentifier"],
source: unescape('currentFrameGroup%3A%20anIdentifier%0A%09currentFrameGroup%20%3A%3D%20self%20frameGroups%20detect%3A%20%5B%3Aeach%20%7C%20each%20identifier%20%3D%20anIdentifier%5D.'),
messageSends: ["detect:", "frameGroups", unescape("%3D"), "identifier"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_nextFrame'),
smalltalk.method({
selector: unescape('nextFrame'),
category: 'frames',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_animating", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_nextFrame", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_nextFrame", []);})]));
return self;},
args: [],
source: unescape('nextFrame%0A%09self%20animating%20ifTrue%3A%20%5Bself%20currentFrameGroup%20nextFrame%5D.'),
messageSends: ["ifTrue:", "animating", "nextFrame", "currentFrameGroup"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_addFrameGroupNamed_origin_size_frameCount_'),
smalltalk.method({
selector: unescape('addFrameGroupNamed%3Aorigin%3Asize%3AframeCount%3A'),
category: 'frames',
fn: function (aString, anOriginPoint, aSizePoint, anInteger){
var self=this;
smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_add_", [smalltalk.send(smalltalk.send((smalltalk.FrameGroup || FrameGroup), "_new", []), "_identifier_origin_frameSize_frameCount_", [aString, anOriginPoint, aSizePoint, anInteger])]);
return self;},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: unescape('addFrameGroupNamed%3A%20aString%20origin%3A%20anOriginPoint%20size%3A%20aSizePoint%20frameCount%3A%20anInteger%0A%09self%20frameGroups%20%0A%09%09add%3A%20%0A%09%09%09%28FrameGroup%20new%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09identifier%3A%20aString%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09origin%3A%20anOriginPoint%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09frameSize%3A%20aSizePoint%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09frameCount%3A%20anInteger%29'),
messageSends: ["add:", "frameGroups", "identifier:origin:frameSize:frameCount:", "new"],
referencedClasses: ["FrameGroup"]
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_moveCentreBy_'),
smalltalk.method({
selector: unescape('moveCentreBy%3A'),
category: 'movement',
fn: function (anOffset){
var self=this;
smalltalk.send(self, "_centre_", [((($receiver = smalltalk.send(self, "_centre", [])).klass === smalltalk.Number) ? $receiver +anOffset : smalltalk.send($receiver, "__plus", [anOffset]))]);
return self;},
args: ["anOffset"],
source: unescape('moveCentreBy%3A%20anOffset%0A%09%22Example%3A%20aSprite%20moveCentreBy%3A%200@5%22%0A%09self%20centre%3A%20self%20centre%20+%20anOffset'),
messageSends: ["centre:", unescape("+"), "centre"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_distanceFromCentreTo_'),
smalltalk.method({
selector: unescape('distanceFromCentreTo%3A'),
category: 'trigonometry',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Math || Math), "_sqrt_", [((($receiver = smalltalk.send((smalltalk.Math || Math), "_pow_to_", [((($receiver = smalltalk.send(smalltalk.send(self, "_centre", []), "_x", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(aPoint, "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(aPoint, "_x", [])])), (2)])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Math || Math), "_pow_to_", [((($receiver = smalltalk.send(smalltalk.send(self, "_centre", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(aPoint, "_y", [])])), (2)]) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Math || Math), "_pow_to_", [((($receiver = smalltalk.send(smalltalk.send(self, "_centre", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(aPoint, "_y", [])])), (2)])]))]);
return self;},
args: ["aPoint"],
source: unescape('distanceFromCentreTo%3A%20aPoint%0A%09%5E%20%20Math%20%0A%09%09sqrt%3A%20%0A%09%09%09%28%28Math%20pow%3A%20%28%28self%20centre%20x%29%20-%20%28aPoint%20%20x%29%29%20to%3A%202%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09+%20%28Math%20pow%3A%20%28%28self%20centre%20y%29%20-%20%28aPoint%20y%29%29%20to%3A%202%29%29'),
messageSends: ["sqrt:", unescape("+"), "pow:to:", unescape("-"), "x", "centre", "y"],
referencedClasses: ["Math"]
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_isInsideCanvas_'),
smalltalk.method({
selector: unescape('isInsideCanvas%3A'),
category: 'collisions',
fn: function (aCanvas){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)])), "_and_", [(function(){return ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]));})]), "_and_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(self, "_width", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_x", [])]))).klass === smalltalk.Number) ? $receiver <=smalltalk.send(aCanvas, "_width", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(aCanvas, "_width", [])]));})]), "_and_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(self, "_height", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_y", [])]))).klass === smalltalk.Number) ? $receiver <=smalltalk.send(aCanvas, "_height", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(aCanvas, "_height", [])]));})]);
return self;},
args: ["aCanvas"],
source: unescape('isInsideCanvas%3A%20aCanvas%0A%09%5E%20%28%20%28%20%28%20self%20x%20%3E%3D%200%20%29%20%0A%09%09and%3A%20%5B%20self%20y%20%3E%3D%200%20%5D%20%29%0A%09%09%09and%3A%20%5B%20self%20width%20+%20self%20x%20%3C%3D%20aCanvas%20width%20%5D%20%29%0A%09%09%09%09and%3A%20%5B%20self%20height%20+%20self%20y%20%3C%3D%20aCanvas%20height%20%5D'),
messageSends: ["and:", unescape("%3E%3D"), "x", "y", unescape("%3C%3D"), unescape("+"), "width", "height"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_atLastFrame'),
smalltalk.method({
selector: unescape('atLastFrame'),
category: 'frames',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_atLastFrame", []);
return self;},
args: [],
source: unescape('atLastFrame%0A%09%5E%20self%20currentFrameGroup%20atLastFrame'),
messageSends: ["atLastFrame", "currentFrameGroup"],
referencedClasses: []
}),
smalltalk.Sprite);

smalltalk.addMethod(
unescape('_nextFrameGroup'),
smalltalk.method({
selector: unescape('nextFrameGroup'),
category: 'frames',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "__eq", [smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_last", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_at_", [((($receiver = smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_indexOf_", [smalltalk.send(self, "_currentFrameGroup", [])])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})() : (function(){return self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_first", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_at_", [((($receiver = smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_indexOf_", [smalltalk.send(self, "_currentFrameGroup", [])])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);}), (function(){return self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_first", []);})]));
return self;},
args: [],
source: unescape('nextFrameGroup%0A%09%28%20self%20currentFrameGroup%20%3D%20self%20frameGroups%20last%20%29%0A%09%09ifFalse%3A%20%5B%20currentFrameGroup%20%3A%3D%20self%20frameGroups%20at%3A%20%28%20%28%20self%20frameGroups%20indexOf%3A%20self%20currentFrameGroup%20%29%20+%201%20%29%20%5D%0A%09%09ifTrue%3A%20%5B%20currentFrameGroup%20%3A%3D%20self%20frameGroups%20first%20%5D'),
messageSends: ["ifFalse:ifTrue:", unescape("%3D"), "currentFrameGroup", "last", "frameGroups", "at:", unescape("+"), "indexOf:", "first"],
referencedClasses: []
}),
smalltalk.Sprite);



smalltalk.addClass('FrameGroup', smalltalk.Object, ['identifier', 'origin', 'frameSize', 'frameCount', 'currentFrameNumber', 'frameRate'], 'Ludus');
smalltalk.FrameGroup.comment=unescape('I%20represent%20a%20group%20of%20ordered%20frames.%20Each%20frame%20is%20a%20clip%20rectangle%20that%20a%20Sprite%20can%20retrieve%20from%20me%20to%20paint%20itself.')
smalltalk.addMethod(
unescape('_identifier_origin_frameSize_frameCount_'),
smalltalk.method({
selector: unescape('identifier%3Aorigin%3AframeSize%3AframeCount%3A'),
category: 'attributes',
fn: function (aString, anOriginPoint, aSizePoint, anInteger){
var self=this;
self['@identifier']=aString;
self['@origin']=anOriginPoint;
self['@frameSize']=aSizePoint;
self['@frameCount']=anInteger;
return self;},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: unescape('identifier%3A%20aString%20origin%3A%20anOriginPoint%20frameSize%3A%20aSizePoint%20frameCount%3A%20anInteger%0A%09identifier%20%3A%3D%20aString.%0A%09origin%20%3A%3D%20anOriginPoint.%0A%09frameSize%20%3A%3D%20aSizePoint.%0A%09frameCount%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_identifier'),
smalltalk.method({
selector: unescape('identifier'),
category: 'attributes',
fn: function (){
var self=this;
return self['@identifier'];
return self;},
args: [],
source: unescape('identifier%0A%09%5E%20identifier'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(self['@frameSize'], "_y", []);
return self;},
args: [],
source: unescape('height%0A%09%5E%20frameSize%20y'),
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_width'),
smalltalk.method({
selector: unescape('width'),
category: 'attributes',
fn: function (){
var self=this;
return smalltalk.send(self['@frameSize'], "_x", []);
return self;},
args: [],
source: unescape('width%0A%09%5E%20frameSize%20x'),
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_origin'),
smalltalk.method({
selector: unescape('origin'),
category: 'attributes',
fn: function (){
var self=this;
return self['@origin'];
return self;},
args: [],
source: unescape('origin%0A%09%5E%20origin'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_currentFrameNumber'),
smalltalk.method({
selector: unescape('currentFrameNumber'),
category: 'frames',
fn: function (){
var self=this;
return (($receiver = self['@currentFrameNumber']) == nil || $receiver == undefined) ? (function(){return self['@currentFrameNumber']=(0);})() : $receiver;
return self;},
args: [],
source: unescape('currentFrameNumber%0A%09%5E%20currentFrameNumber%20ifNil%3A%20%5BcurrentFrameNumber%20%3A%3D%200%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_nextFrame'),
smalltalk.method({
selector: unescape('nextFrame'),
category: 'frames',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_atLastFrame", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@currentFrameNumber']=(0);})() : (function(){return self['@currentFrameNumber']=((($receiver = self['@currentFrameNumber']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@currentFrameNumber']=(0);}), (function(){return self['@currentFrameNumber']=((($receiver = self['@currentFrameNumber']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]));
return self;},
args: [],
source: unescape('nextFrame%0A%09self%20atLastFrame%0A%09%09ifTrue%3A%20%5BcurrentFrameNumber%20%3A%3D%200%5D%0A%09%09ifFalse%3A%20%5BcurrentFrameNumber%20%3A%3D%20currentFrameNumber%20+%201%5D'),
messageSends: ["ifTrue:ifFalse:", "atLastFrame", unescape("+")],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_frameRate'),
smalltalk.method({
selector: unescape('frameRate'),
category: 'frames',
fn: function (){
var self=this;
return (($receiver = self['@frameRate']) == nil || $receiver == undefined) ? (function(){return self['@frameRate']=(5);})() : $receiver;
return self;},
args: [],
source: unescape('frameRate%0A%09%5E%20frameRate%20ifNil%3A%20%5BframeRate%20%3A%3D%205%5D.'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_offset'),
smalltalk.method({
selector: unescape('offset'),
category: 'frames',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_width", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_currentFrameNumber", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_currentFrameNumber", [])]));
return self;},
args: [],
source: unescape('offset%0A%09%5E%20self%20width%20*%20self%20currentFrameNumber'),
messageSends: [unescape("*"), "width", "currentFrameNumber"],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_frameRate_'),
smalltalk.method({
selector: unescape('frameRate%3A'),
category: 'frames',
fn: function (anInteger){
var self=this;
self['@frameRate']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('frameRate%3A%20anInteger%0A%09frameRate%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
unescape('_atLastFrame'),
smalltalk.method({
selector: unescape('atLastFrame'),
category: 'frames',
fn: function (){
var self=this;
return smalltalk.send(self['@currentFrameNumber'], "__eq", [((($receiver = self['@frameCount']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]);
return self;},
args: [],
source: unescape('atLastFrame%0A%09%5E%20currentFrameNumber%20%3D%20%28frameCount%20-%201%29'),
messageSends: [unescape("%3D"), unescape("-")],
referencedClasses: []
}),
smalltalk.FrameGroup);


smalltalk.addMethod(
unescape('_identifier_origin_frameSize_frameCount_'),
smalltalk.method({
selector: unescape('identifier%3Aorigin%3AframeSize%3AframeCount%3A'),
category: 'instance creation',
fn: function (aString, anOriginPoint, aSizePoint, anInteger){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_identifier_origin_frameSize_frameCount_", [aString, anOriginPoint, aSizePoint, anInteger]);
return self;},
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: unescape('identifier%3A%20aString%20origin%3A%20anOriginPoint%20frameSize%3A%20aSizePoint%20frameCount%3A%20anInteger%0A%09%5E%20self%20new%20identifier%3A%20aString%20origin%3A%20anOriginPoint%20frameSize%3A%20aSizePoint%20frameCount%3A%20anInteger'),
messageSends: ["identifier:origin:frameSize:frameCount:", "new"],
referencedClasses: []
}),
smalltalk.FrameGroup.klass);


