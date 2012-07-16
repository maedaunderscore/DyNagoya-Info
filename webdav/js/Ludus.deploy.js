smalltalk.addPackage('Ludus', {});
smalltalk.addClass('Sound', smalltalk.Widget, ['src'], 'Ludus');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
var sound=nil;
sound=(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_src_", [smalltalk.send(self, "_src", [])]);})(smalltalk.send(html, "_audio", []));
smalltalk.send(sound, "_at_put_", ["preload", true]);
return self;}
}),
smalltalk.Sound);

smalltalk.addMethod(
'_src',
smalltalk.method({
selector: 'src',
fn: function (){
var self=this;
return self['@src'];
return self;}
}),
smalltalk.Sound);

smalltalk.addMethod(
'_src_',
smalltalk.method({
selector: 'src:',
fn: function (anUrl){
var self=this;
self['@src']=anUrl;
return self;}
}),
smalltalk.Sound);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_src", []), "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_", [unescape("%5C..%7B2%2C3%7D%24")]), ""]), "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_", [unescape(".*%5C/")]), ""]);
return self;}
}),
smalltalk.Sound);

smalltalk.addMethod(
'_play',
smalltalk.method({
selector: 'play',
fn: function (){
var self=this;
smalltalk.send(self, "_stop", []);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_play", []);
return self;}
}),
smalltalk.Sound);

smalltalk.addMethod(
'_pause',
smalltalk.method({
selector: 'pause',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_pause", []);
return self;}
}),
smalltalk.Sound);

smalltalk.addMethod(
'_stop',
smalltalk.method({
selector: 'stop',
fn: function (){
var self=this;
smalltalk.send(self, "_pause", []);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_src_", [smalltalk.send(self, "_src", [])]);
return self;}
}),
smalltalk.Sound);

smalltalk.addMethod(
'_loop',
smalltalk.method({
selector: 'loop',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_at_put_", ["loop", true]);
smalltalk.send(self, "_play", []);
return self;}
}),
smalltalk.Sound);

smalltalk.addMethod(
'_resume',
smalltalk.method({
selector: 'resume',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_id", [])]), "_play", []);
return self;}
}),
smalltalk.Sound);


smalltalk.addMethod(
'_src_',
smalltalk.method({
selector: 'src:',
fn: function (anUrl){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_src_", [anUrl]);
return self;}
}),
smalltalk.Sound.klass);


smalltalk.addClass('Game', smalltalk.Widget, ['canvas', 'context', 'fps', 'keys', 'step', 'end', 'mousePosition', 'mouseDown', 'sounds'], 'Ludus');
smalltalk.addMethod(
'_width_',
smalltalk.method({
selector: 'width:',
fn: function (anInteger){
var self=this;
smalltalk.send(self['@canvas'], "_at_put_", ["width", anInteger]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_height_',
smalltalk.method({
selector: 'height:',
fn: function (anInteger){
var self=this;
smalltalk.send(self['@canvas'], "_at_put_", ["height", anInteger]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_width", []);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_height", []);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_backgroundColor_',
smalltalk.method({
selector: 'backgroundColor:',
fn: function (aColor){
var self=this;
smalltalk.send(self['@canvas'], "_at_put_", ["style", smalltalk.send(smalltalk.send(unescape("background-color%3A%20"), "__comma", [aColor]), "__comma", [unescape("%3B")])]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_addSound_',
smalltalk.method({
selector: 'addSound:',
fn: function (aSoundUrl){
var self=this;
var sound=nil;
sound=smalltalk.send((smalltalk.Sound || Sound), "_src_", [aSoundUrl]);
smalltalk.send(self['@sounds'], "_add_", [sound]);
smalltalk.send(sound, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_soundNamed_',
smalltalk.method({
selector: 'soundNamed:',
fn: function (aName){
var self=this;
return smalltalk.send(self['@sounds'], "_detect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_id", []), "__eq", [aName]);})]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_gameLoop',
smalltalk.method({
selector: 'gameLoop',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_gameOver", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((function(){smalltalk.send(self, "_step", []);smalltalk.send(self, "_draw", []);self['@step']=((($receiver = self['@step']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return smalltalk.send(self, "_gameLoop", []);}), "_valueWithTimeout_", [(1000) / self['@fps']]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((function(){smalltalk.send(self, "_step", []);smalltalk.send(self, "_draw", []);self['@step']=((($receiver = self['@step']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return smalltalk.send(self, "_gameLoop", []);}), "_valueWithTimeout_", [(1000) / self['@fps']]);})]));
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_end',
smalltalk.method({
selector: 'end',
fn: function (){
var self=this;
self['@end']=true;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_gameOver',
smalltalk.method({
selector: 'gameOver',
fn: function (){
var self=this;
return (($receiver = self['@end']) == nil || $receiver == undefined) ? (function(){return self['@end']=false;})() : $receiver;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_step',
smalltalk.method({
selector: 'step',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_stepCount',
smalltalk.method({
selector: 'stepCount',
fn: function (){
var self=this;
return self['@step'];
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_draw',
smalltalk.method({
selector: 'draw',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_clearCanvas',
smalltalk.method({
selector: 'clearCanvas',
fn: function (){
var self=this;
smalltalk.send(self['@context'], "_clearRect_y_width_height_", [(0), (0), smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_width", []), smalltalk.send(smalltalk.send(self['@canvas'], "_element", []), "_height", [])]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_drawSprite_',
smalltalk.method({
selector: 'drawSprite:',
fn: function (aSprite){
var self=this;
smalltalk.send(self['@context'], "_drawImage_originX_originY_frameWidth_frameHeight_x_y_scaleWidth_scaleHeight_", [smalltalk.send(aSprite, "_spriteSheet", []), ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_origin", []), "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_offset", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_offset", [])])), smalltalk.send(smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_origin", []), "_y", []), smalltalk.send(aSprite, "_width", []), smalltalk.send(aSprite, "_height", []), smalltalk.send(aSprite, "_x", []), smalltalk.send(aSprite, "_y", []), smalltalk.send(aSprite, "_width", []), smalltalk.send(aSprite, "_height", [])]);
((($receiver = smalltalk.send(smalltalk.send(self['@step'], "_\\\\", [smalltalk.send(smalltalk.send(aSprite, "_currentFrameGroup", []), "_frameRate", [])]), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aSprite, "_nextFrame", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(aSprite, "_nextFrame", []);})]));
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_keyDown_',
smalltalk.method({
selector: 'keyDown:',
fn: function (evt){
var self=this;
smalltalk.send(self['@keys'], "_at_put_", [smalltalk.send(evt, "_keyCode", []), true]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_keyUp_',
smalltalk.method({
selector: 'keyUp:',
fn: function (evt){
var self=this;
smalltalk.send(self['@keys'], "_at_put_", [smalltalk.send(evt, "_keyCode", []), false]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_keys',
smalltalk.method({
selector: 'keys',
fn: function (){
var self=this;
return (($receiver = self['@keys']) == nil || $receiver == undefined) ? (function(){self['@keys']=smalltalk.send((smalltalk.Array || Array), "_new", []);smalltalk.send((255), "_timesRepeat_", [(function(){return smalltalk.send(self['@keys'], "_add_", [false]);})]);return self['@keys'];})() : $receiver;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_mouseMove_',
smalltalk.method({
selector: 'mouseMove:',
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
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_mousePosition',
smalltalk.method({
selector: 'mousePosition',
fn: function (){
var self=this;
return (($receiver = self['@mousePosition']) == nil || $receiver == undefined) ? (function(){return self['@mousePosition']=smalltalk.send((0), "__at", [(0)]);})() : $receiver;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_mouseDown_',
smalltalk.method({
selector: 'mouseDown:',
fn: function (evt){
var self=this;
self['@mouseDown']=true;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_mouseUp_',
smalltalk.method({
selector: 'mouseUp:',
fn: function (evt){
var self=this;
self['@mouseDown']=false;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_whileMouseDownDo_',
smalltalk.method({
selector: 'whileMouseDownDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@mouseDown'], "_ifTrue_", [aBlock]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_onMouseClickDo_',
smalltalk.method({
selector: 'onMouseClickDo:',
fn: function (aBlock){
var self=this;
(($receiver = ($('#canvas').data('events')['click'])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self['@canvas'], "_onClick_", [aBlock]);})() : $receiver;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_whileKeyPressed_do_',
smalltalk.method({
selector: 'whileKeyPressed:do:',
fn: function (aKeyCode, aBlock){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self['@keys'], "_at_ifAbsent_", [aKeyCode, (function(){return false;})]), "_and_", [(function(){return smalltalk.send(self['@keys'], "_at_", [aKeyCode]);})]), "_ifTrue_", [aBlock]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_onMouseUpDo_',
smalltalk.method({
selector: 'onMouseUpDo:',
fn: function (aBlock){
var self=this;
(($receiver = ($('#canvas').data('events')['mouseup'])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_bind_do_", ["mouseup", aBlock]);})() : $receiver;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_onMouseDownDo_',
smalltalk.method({
selector: 'onMouseDownDo:',
fn: function (aBlock){
var self=this;
(($receiver = ($('#canvas').data('events')['mousedown'])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@canvas'], "_asJQuery", []), "_bind_do_", ["mousedown", aBlock]);})() : $receiver;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_whileMouseUpDo_',
smalltalk.method({
selector: 'whileMouseUpDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@mouseDown'], "_ifFalse_", [aBlock]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@fps']=(30);
self['@keys']=[];
self['@sounds']=[];
self['@mouseDown']=false;
self['@step']=(1);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_startGame',
smalltalk.method({
selector: 'startGame',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
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
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_drawSpriteCollection_',
smalltalk.method({
selector: 'drawSpriteCollection:',
fn: function (aSpriteCollection){
var self=this;
smalltalk.send(aSpriteCollection, "_do_", [(function(eachSprite){return smalltalk.send(self, "_drawSprite_", [eachSprite]);})]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_fps_',
smalltalk.method({
selector: 'fps:',
fn: function (anInteger){
var self=this;
self['@fps']=anInteger;
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_everyStepNumber_do_',
smalltalk.method({
selector: 'everyStepNumber:do:',
fn: function (anInteger, aBlock){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self['@step'], "_\\\\", [anInteger]), "__eq", [(0)]), "_ifTrue_", [aBlock]);
return self;}
}),
smalltalk.Game);

smalltalk.addMethod(
'_context',
smalltalk.method({
selector: 'context',
fn: function (){
var self=this;
return self['@context'];
return self;}
}),
smalltalk.Game);


smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;

return self;}
}),
smalltalk.Game.klass);

smalltalk.addMethod(
'_start',
smalltalk.method({
selector: 'start',
fn: function (){
var self=this;
var instance=nil;
instance=smalltalk.send(self, "_new", []);
smalltalk.send(instance, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return instance;
return self;}
}),
smalltalk.Game.klass);


smalltalk.addClass('Key', smalltalk.Object, [], 'Ludus');

smalltalk.addMethod(
'_doesNotUnderstand_',
smalltalk.method({
selector: 'doesNotUnderstand:',
fn: function (aMessage){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_size", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self, "_keyCodeFor_", [smalltalk.send(aMessage, "_selector", [])])}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object.klass)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self, "_keyCodeFor_", [smalltalk.send(aMessage, "_selector", [])])}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object.klass)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_doesNotUnderstand_'){return e.fn()} throw(e)}}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_leftArrow',
smalltalk.method({
selector: 'leftArrow',
fn: function (){
var self=this;
return (37);
return self;}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_upArrow',
smalltalk.method({
selector: 'upArrow',
fn: function (){
var self=this;
return (38);
return self;}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_rightArrow',
smalltalk.method({
selector: 'rightArrow',
fn: function (){
var self=this;
return (39);
return self;}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_downArrow',
smalltalk.method({
selector: 'downArrow',
fn: function (){
var self=this;
return (40);
return self;}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_tab',
smalltalk.method({
selector: 'tab',
fn: function (){
var self=this;
return (9);
return self;}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_enter',
smalltalk.method({
selector: 'enter',
fn: function (){
var self=this;
return (13);
return self;}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_keyCodeFor_',
smalltalk.method({
selector: 'keyCodeFor:',
fn: function (aValue){
var self=this;
return ((($receiver = smalltalk.send(aValue, "_isString", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aValue, "_asUppercase", []), "_first", []), "_asciiValue", []);})() : (function(){return smalltalk.send(smalltalk.send(aValue, "_asString", []), "_asciiValue", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aValue, "_asUppercase", []), "_first", []), "_asciiValue", []);}), (function(){return smalltalk.send(smalltalk.send(aValue, "_asString", []), "_asciiValue", []);})]));
return self;}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_space',
smalltalk.method({
selector: 'space',
fn: function (){
var self=this;
return (32);
return self;}
}),
smalltalk.Key.klass);

smalltalk.addMethod(
'_spaceBar',
smalltalk.method({
selector: 'spaceBar',
fn: function (){
var self=this;
return (32);
return self;}
}),
smalltalk.Key.klass);


smalltalk.addClass('Sprite', smalltalk.Object, ['position', 'direction', 'spriteSheet', 'currentFrameGroup', 'frameGroups', 'animating'], 'Ludus');
smalltalk.addMethod(
'_frameRate_',
smalltalk.method({
selector: 'frameRate:',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_do_", [(function(each){return smalltalk.send(each, "_frameRate_", [anInteger]);})]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_animating',
smalltalk.method({
selector: 'animating',
fn: function (){
var self=this;
return (($receiver = self['@animating']) == nil || $receiver == undefined) ? (function(){return self['@animating']=true;})() : $receiver;
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_toggleAnimation',
smalltalk.method({
selector: 'toggleAnimation',
fn: function (){
var self=this;
self['@animating']=smalltalk.send(self['@animating'], "_not", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_stopAnimation',
smalltalk.method({
selector: 'stopAnimation',
fn: function (){
var self=this;
self['@animating']=false;
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_startAnimation',
smalltalk.method({
selector: 'startAnimation',
fn: function (){
var self=this;
self['@animating']=true;
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_x',
smalltalk.method({
selector: 'x',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "_x", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_y',
smalltalk.method({
selector: 'y',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "_y", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_y_',
smalltalk.method({
selector: 'y:',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(self, "_position", []), "_y_", [anInteger]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_x_',
smalltalk.method({
selector: 'x:',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(self, "_position", []), "_x_", [anInteger]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_spriteSheet',
smalltalk.method({
selector: 'spriteSheet',
fn: function (){
var self=this;
(($receiver = self['@spriteSheet']) == nil || $receiver == undefined) ? (function(){return self['@spriteSheet']=new Image();;})() : $receiver;
return self['@spriteSheet'];
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_spriteSheet_',
smalltalk.method({
selector: 'spriteSheet:',
fn: function (anImageUrl){
var self=this;
smalltalk.send(smalltalk.send(self, "_spriteSheet", []), "_src_", [anImageUrl]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_height", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_width", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_centre',
smalltalk.method({
selector: 'centre',
fn: function (){
var self=this;
return smalltalk.send(((($receiver = ((($receiver = smalltalk.send(self, "_width", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_x", [])])), "__at", [((($receiver = ((($receiver = smalltalk.send(self, "_height", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_y", [])]))]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_centre_',
smalltalk.method({
selector: 'centre:',
fn: function (aPoint){
var self=this;
var xOffset=nil;
var yOffset=nil;
xOffset=((($receiver = smalltalk.send(self, "_width", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));
yOffset=((($receiver = smalltalk.send(self, "_height", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));
smalltalk.send(self, "_position_", [smalltalk.send(((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver -xOffset : smalltalk.send($receiver, "__minus", [xOffset])), "__at", [((($receiver = smalltalk.send(aPoint, "_y", [])).klass === smalltalk.Number) ? $receiver -yOffset : smalltalk.send($receiver, "__minus", [yOffset]))])]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return self['@position']=smalltalk.send((0), "__at", [(0)]);})() : $receiver;
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
fn: function (aPoint){
var self=this;
return self['@position']=aPoint;
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_direction',
smalltalk.method({
selector: 'direction',
fn: function (){
var self=this;
(($receiver = self['@direction']) != nil && $receiver != undefined) ? (function(){var angle=nil;
((($receiver = ((($receiver = smalltalk.send(self['@direction'], "_y", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return angle=smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(self['@direction'], "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@direction'], "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@direction'], "_y", [])]))]);})() : (function(){return angle=((($receiver = smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(self['@direction'], "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@direction'], "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@direction'], "_y", [])]))])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Number || Number), "_pi", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Number || Number), "_pi", [])]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return angle=smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(self['@direction'], "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@direction'], "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@direction'], "_y", [])]))]);}), (function(){return angle=((($receiver = smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(self['@direction'], "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@direction'], "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@direction'], "_y", [])]))])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Number || Number), "_pi", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Number || Number), "_pi", [])]));})]));return self['@direction']=smalltalk.send(smalltalk.send((smalltalk.Math || Math), "_sin_", [angle]), "__at", [smalltalk.send((smalltalk.Math || Math), "_cos_", [angle])]);})() : nil;
return (($receiver = self['@direction']) == nil || $receiver == undefined) ? (function(){return self['@direction']=smalltalk.send((0), "__at", [(1)]);})() : $receiver;
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_direction_',
smalltalk.method({
selector: 'direction:',
fn: function (aPoint){
var self=this;
var angle=nil;
((($receiver = ((($receiver = smalltalk.send(aPoint, "_y", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return angle=smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(aPoint, "_y", [])]))]);})() : (function(){return angle=((($receiver = smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(aPoint, "_y", [])]))])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Number || Number), "_pi", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Number || Number), "_pi", [])]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return angle=smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(aPoint, "_y", [])]))]);}), (function(){return angle=((($receiver = smalltalk.send((smalltalk.Math || Math), "_atan_", [((($receiver = smalltalk.send(aPoint, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(aPoint, "_y", [])]))])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Number || Number), "_pi", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Number || Number), "_pi", [])]));})]));
self['@direction']=smalltalk.send(smalltalk.send((smalltalk.Math || Math), "_sin_", [angle]), "__at", [smalltalk.send((smalltalk.Math || Math), "_cos_", [angle])]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_collidesWith_',
smalltalk.method({
selector: 'collidesWith:',
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
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_rightCollidesWith_',
smalltalk.method({
selector: 'rightCollidesWith:',
fn: function (aSprite){
var self=this;
var x0=nil;
var y0=nil;
var y1=nil;
x0=((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_width", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_width", [])]));
y1=((($receiver = smalltalk.send(aSprite, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aSprite, "_height", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aSprite, "_height", [])]));
y0=((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_height", [])]));
return smalltalk.send(smalltalk.send(smalltalk.send(((($receiver = x0).klass === smalltalk.Number) ? $receiver >=smalltalk.send(aSprite, "_x", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(aSprite, "_x", [])])), "_&", [((($receiver = y0).klass === smalltalk.Number) ? $receiver >=smalltalk.send(aSprite, "_y", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(aSprite, "_y", [])]))]), "_&", [((($receiver = y1).klass === smalltalk.Number) ? $receiver >=smalltalk.send(self, "_y", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(self, "_y", [])]))]), "_&", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(aSprite, "_x", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(aSprite, "_x", [])]))]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_leftCollidesWith_',
smalltalk.method({
selector: 'leftCollidesWith:',
fn: function (aSprite){
var self=this;
return smalltalk.send(aSprite, "_rightCollidesWith_", [self]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_topCollidesWith_',
smalltalk.method({
selector: 'topCollidesWith:',
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
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_bottomCollidesWith_',
smalltalk.method({
selector: 'bottomCollidesWith:',
fn: function (aSprite){
var self=this;
return smalltalk.send(aSprite, "_topCollidesWith_", [self]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_bottomCollidesWithAnyOf_',
smalltalk.method({
selector: 'bottomCollidesWithAnyOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_bottomCollidesWith_", [each]);})]), "_notEmpty", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_topCollidesWithAnyOf_',
smalltalk.method({
selector: 'topCollidesWithAnyOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_topCollidesWith_", [each]);})]), "_notEmpty", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_leftCollidesWithAnyOf_',
smalltalk.method({
selector: 'leftCollidesWithAnyOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_leftCollidesWith_", [each]);})]), "_notEmpty", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_rightCollidesWithAnyOf_',
smalltalk.method({
selector: 'rightCollidesWithAnyOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_rightCollidesWith_", [each]);})]), "_notEmpty", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_bottomCollidesWithWhichOf_',
smalltalk.method({
selector: 'bottomCollidesWithWhichOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(aSpriteCollection, "_detect_", [(function(each){return smalltalk.send(self, "_bottomCollidesWith_", [each]);})]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_leftCollidesWithWhichOf_',
smalltalk.method({
selector: 'leftCollidesWithWhichOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(aSpriteCollection, "_detect_", [(function(each){return smalltalk.send(self, "_leftCollidesWith_", [each]);})]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_rightCollidesWithWhichOf_',
smalltalk.method({
selector: 'rightCollidesWithWhichOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(aSpriteCollection, "_detect_", [(function(each){return smalltalk.send(self, "_rightCollidesWith_", [each]);})]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_topCollidesWithWhichOf_',
smalltalk.method({
selector: 'topCollidesWithWhichOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(aSpriteCollection, "_detect_", [(function(each){return smalltalk.send(self, "_topCollidesWith_", [each]);})]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_collidesWithAnyOf_',
smalltalk.method({
selector: 'collidesWithAnyOf:',
fn: function (aSpriteCollection){
var self=this;
return smalltalk.send(smalltalk.send(aSpriteCollection, "_select_", [(function(each){return smalltalk.send(self, "_collidesWith_", [each]);})]), "_notEmpty", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_currentFrameGroup',
smalltalk.method({
selector: 'currentFrameGroup',
fn: function (){
var self=this;
return (($receiver = self['@currentFrameGroup']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_first", []);})() : $receiver;
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_frameGroups',
smalltalk.method({
selector: 'frameGroups',
fn: function (){
var self=this;
return (($receiver = self['@frameGroups']) == nil || $receiver == undefined) ? (function(){return self['@frameGroups']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_currentFrameGroup_',
smalltalk.method({
selector: 'currentFrameGroup:',
fn: function (anIdentifier){
var self=this;
self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_detect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_identifier", []), "__eq", [anIdentifier]);})]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_nextFrame',
smalltalk.method({
selector: 'nextFrame',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_animating", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_nextFrame", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_nextFrame", []);})]));
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_addFrameGroupNamed_origin_size_frameCount_',
smalltalk.method({
selector: 'addFrameGroupNamed:origin:size:frameCount:',
fn: function (aString, anOriginPoint, aSizePoint, anInteger){
var self=this;
smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_add_", [smalltalk.send(smalltalk.send((smalltalk.FrameGroup || FrameGroup), "_new", []), "_identifier_origin_frameSize_frameCount_", [aString, anOriginPoint, aSizePoint, anInteger])]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_moveCentreBy_',
smalltalk.method({
selector: 'moveCentreBy:',
fn: function (anOffset){
var self=this;
smalltalk.send(self, "_centre_", [((($receiver = smalltalk.send(self, "_centre", [])).klass === smalltalk.Number) ? $receiver +anOffset : smalltalk.send($receiver, "__plus", [anOffset]))]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_distanceFromCentreTo_',
smalltalk.method({
selector: 'distanceFromCentreTo:',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Math || Math), "_sqrt_", [((($receiver = smalltalk.send((smalltalk.Math || Math), "_pow_to_", [((($receiver = smalltalk.send(smalltalk.send(self, "_centre", []), "_x", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(aPoint, "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(aPoint, "_x", [])])), (2)])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.Math || Math), "_pow_to_", [((($receiver = smalltalk.send(smalltalk.send(self, "_centre", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(aPoint, "_y", [])])), (2)]) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.Math || Math), "_pow_to_", [((($receiver = smalltalk.send(smalltalk.send(self, "_centre", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(aPoint, "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(aPoint, "_y", [])])), (2)])]))]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_isInsideCanvas_',
smalltalk.method({
selector: 'isInsideCanvas:',
fn: function (aCanvas){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)])), "_and_", [(function(){return ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]));})]), "_and_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(self, "_width", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_x", [])]))).klass === smalltalk.Number) ? $receiver <=smalltalk.send(aCanvas, "_width", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(aCanvas, "_width", [])]));})]), "_and_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(self, "_height", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_y", [])]))).klass === smalltalk.Number) ? $receiver <=smalltalk.send(aCanvas, "_height", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(aCanvas, "_height", [])]));})]);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_atLastFrame',
smalltalk.method({
selector: 'atLastFrame',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "_atLastFrame", []);
return self;}
}),
smalltalk.Sprite);

smalltalk.addMethod(
'_nextFrameGroup',
smalltalk.method({
selector: 'nextFrameGroup',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_currentFrameGroup", []), "__eq", [smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_last", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_at_", [((($receiver = smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_indexOf_", [smalltalk.send(self, "_currentFrameGroup", [])])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})() : (function(){return self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_first", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_at_", [((($receiver = smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_indexOf_", [smalltalk.send(self, "_currentFrameGroup", [])])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);}), (function(){return self['@currentFrameGroup']=smalltalk.send(smalltalk.send(self, "_frameGroups", []), "_first", []);})]));
return self;}
}),
smalltalk.Sprite);



smalltalk.addClass('FrameGroup', smalltalk.Object, ['identifier', 'origin', 'frameSize', 'frameCount', 'currentFrameNumber', 'frameRate'], 'Ludus');
smalltalk.addMethod(
'_identifier_origin_frameSize_frameCount_',
smalltalk.method({
selector: 'identifier:origin:frameSize:frameCount:',
fn: function (aString, anOriginPoint, aSizePoint, anInteger){
var self=this;
self['@identifier']=aString;
self['@origin']=anOriginPoint;
self['@frameSize']=aSizePoint;
self['@frameCount']=anInteger;
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_identifier',
smalltalk.method({
selector: 'identifier',
fn: function (){
var self=this;
return self['@identifier'];
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return smalltalk.send(self['@frameSize'], "_y", []);
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
fn: function (){
var self=this;
return smalltalk.send(self['@frameSize'], "_x", []);
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_origin',
smalltalk.method({
selector: 'origin',
fn: function (){
var self=this;
return self['@origin'];
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_currentFrameNumber',
smalltalk.method({
selector: 'currentFrameNumber',
fn: function (){
var self=this;
return (($receiver = self['@currentFrameNumber']) == nil || $receiver == undefined) ? (function(){return self['@currentFrameNumber']=(0);})() : $receiver;
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_nextFrame',
smalltalk.method({
selector: 'nextFrame',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_atLastFrame", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@currentFrameNumber']=(0);})() : (function(){return self['@currentFrameNumber']=((($receiver = self['@currentFrameNumber']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@currentFrameNumber']=(0);}), (function(){return self['@currentFrameNumber']=((($receiver = self['@currentFrameNumber']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]));
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_frameRate',
smalltalk.method({
selector: 'frameRate',
fn: function (){
var self=this;
return (($receiver = self['@frameRate']) == nil || $receiver == undefined) ? (function(){return self['@frameRate']=(5);})() : $receiver;
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_offset',
smalltalk.method({
selector: 'offset',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_width", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_currentFrameNumber", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_currentFrameNumber", [])]));
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_frameRate_',
smalltalk.method({
selector: 'frameRate:',
fn: function (anInteger){
var self=this;
self['@frameRate']=anInteger;
return self;}
}),
smalltalk.FrameGroup);

smalltalk.addMethod(
'_atLastFrame',
smalltalk.method({
selector: 'atLastFrame',
fn: function (){
var self=this;
return smalltalk.send(self['@currentFrameNumber'], "__eq", [((($receiver = self['@frameCount']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]);
return self;}
}),
smalltalk.FrameGroup);


smalltalk.addMethod(
'_identifier_origin_frameSize_frameCount_',
smalltalk.method({
selector: 'identifier:origin:frameSize:frameCount:',
fn: function (aString, anOriginPoint, aSizePoint, anInteger){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_identifier_origin_frameSize_frameCount_", [aString, anOriginPoint, aSizePoint, anInteger]);
return self;}
}),
smalltalk.FrameGroup.klass);


