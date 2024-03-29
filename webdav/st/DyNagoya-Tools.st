Smalltalk current createPackage: 'DyNagoya-Tools' properties: #{}!
Widget subclass: #Circle
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!

!Circle methodsFor: 'accessing'!

radiusX
	^ 60
!

radiusY
	^ 100
! !

!Circle methodsFor: 'rendering'!

body: html
!

circleStyle
	| rx ry |
	rx := self radiusX.
	ry := self radiusY.
	^ 'width: ', (rx * 2), 'px;height: ', (rx * 2), 'px; -moz-border-radius:',rx,'px;-webkit-border-radius:',rx,'px;border-radius: ', rx, 'px; line-height:', (rx * 2), 'px; text-align:center;position:absolute;'
!

renderOn: html
	html div class: 'circle'; style: (self circleStyle, self style); with: [
			self body: html
	]
! !

Widget subclass: #DialogBox
	instanceVariableNames: 'message option body aspectRatio fontSize x y widget'
	package: 'DyNagoya-Tools'!
!DialogBox commentStamp!
Must need to use 'with' or message.

ex)
 DialogBox new message: 'hoge'; title: 'fuga'; open!

!DialogBox methodsFor: 'accessing'!

body
	" not raw body"
	^ body asJQuery
!

body: aBody
	"aBody will receive asJQuery"
	body :=  aBody
!

button: label action: aBlock
	(option at: 'buttons' ifAbsentPut:[ {} ])
		add: (<{text: label, click: function() { aBlock(); }}>).
!

closeButton: label
	(option at: 'buttons' ifAbsentPut:[ {} ])
		add: (<{text: label, click: function() { $(this).dialog("close"); }}>).
!

closeButton: label action: aBlock
	(option at: 'buttons' ifAbsentPut:[ {} ])
		add: (<{text: label, click: function() { aBlock(); $(this).dialog("close"); }}>).
!

fontSize
	^ fontSize default: '12px'
!

fontSize: sizeStr
	fontSize := sizeStr
!

height: aHeight
	option at: 'height' put: aHeight
!

image: url
	^ self with: [ :html | html img src: url]
!

message: aMessage
	body := '<div>', aMessage, '</div>'
!

modal: flag
	option at: 'modal' put: flag
!

option
	^ option
!

tabWidget: aWidget
	^ self with: [:html | aWidget renderBoxOn: html ]
!

title: aTitle
	option at: 'title' put: aTitle
!

widget: aWidget
	widget := aWidget.
	^ self with: [:html | aWidget renderOn: html ]
!

width: aWidth
	option at: 'width' put: aWidth
!

with: aBlock
	| body |
	body := HTMLCanvas new.
	aBlock value: body.
	^ self body: body root.
!

x
	^ x default: '50px'
!

x: strPos
	x := strPos
!

y
	^ y default: '50px'
!

y: strPos
	y := strPos
! !

!DialogBox methodsFor: 'action'!

close
	 body asJQuery dialog: 'destroy'.
	 body asJQuery empty
!

open
	 body asJQuery
		css: 'font-size' at: (self fontSize); 
		dialog: option.
         body asJQuery parent
		addClass: 'workspace-effect';
		css: 'position' at: 'fixed';
		css: 'left' at: (self x);
		css: 'top' at: (self y)
! !

!DialogBox methodsFor: 'initialization'!

defaultOption
	^ #{ 
		'modal' -> true .
		 'sticky' -> true. 
		'close' -> [ self close ].
		'maxHeight' -> (window innerHeight * 0.9)
	}
!

initialize
	super initialize.
	option := self defaultOption
! !

!DialogBox class methodsFor: 'not yet classified'!

toggleShow
	'.ui-dialog:hidden' asJQuery length = 0 
		ifTrue: [ '.ui-dialog:visible' asJQuery hide ]
		ifFalse: [ '.ui-dialog:hidden' asJQuery show ]
!

withCancel
	^ self new closeButton: 'Cancel'
! !

DialogBox subclass: #BrowserDialog
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!

!BrowserDialog class methodsFor: 'not yet classified'!

open: aClass
	^ self open: aClass browser:  ClassBrowser
!

open: aClass browser: browserClass
	| browser ret |
	browser := browserClass hierarchy: aClass.
	ret := self new 
		widget: browser;
		width: '600px';
		height:  (window innerHeight * 0.5);
		modal: false;
		title: aClass name;
		open.

	browser open: aClass.
	^ ret
!

openWithBrowser: browser
	| ret |
	ret := self new 
		widget: browser;
		width: '600px';
		height:  (window innerHeight * 0.5);
		modal: false;
		title: browser target name;
		open.

	browser open.
! !

DialogBox subclass: #ImageClipper
	instanceVariableNames: 'img canvas jcrop'
	package: 'DyNagoya-Tools'!
!ImageClipper commentStamp!
x := ImageEditor openWithProxy: 'http://xxxx.com/abc.png'; open
(* select area by drag the image *)

x crop
x src!

!ImageClipper methodsFor: 'accessing'!

area
	self isSelected 
		ifTrue: [ ^ jcrop tellSelect ]
		ifFalse: [ | imgJQ | 
                          imgJQ := img asJQuery.
                          ^ Dictionary new 
   at: #x put: 0;
   at: #y put: 0;
   at: #x2 put: (imgJQ width);
   at: #y2 put: (imgJQ height);
   at: #w put: (imgJQ width);
   at: #h put: (imgJQ height);
   yourself ]
!

canvas
	^canvas asJQuery at:0
!

context
	^ self canvas  getContext:'2d'
!

img
	^(img asJQuery at: 0)
!

isSelected
	| area|
	area := jcrop tellSelect.
	^ ((area at: #w) = 0) not
!

src
	^ self img src
!

src: url
	img src: url.
! !

!ImageClipper methodsFor: 'action'!

crop
	| area|
	area := self area.
	self canvas width: (area at: #w); height: (area at: #h).
	self context drawImage: (self img) 
		sx: (area at: #x)		sy: (area at: #y)
		sw: (area at: #w)		sh: (area at: #h)
		dx: 0					dy: 0
		dw: (area at: #w)		dh: (area at: #h).
	self copyToImg.
!

redraw
	self croppable
!

resizeWidth: w height:h
	| area |
	area := self area.
	self canvas width: w; height: h.
	self context drawImage: (self img) 
		sx: (area at: #x)		sy: (area at: #y)
		sw: (area at: #w)		sh: (area at: #h)
		dx: 0					dy: 0
		dw: w		dh: h.
	self copyToImg.
!

scale: s
	| area|
	area := self area.
	self resizeWidth: (area at: #w) * s height: (area at: #h) * s.
!

selectWidth: width height: height
	| area |
	area := jcrop tellSelect.
	jcrop animateTo: {
		area at: #x.
		area at: #y.
		(area at: #x) + width.
		(area at: #y) + height }.
!

selectX: x y: y
	| area |
	area := jcrop tellSelect.
	jcrop animateTo: {
		x.
		y.
		x + (area at: #w).
		y + (area at: #h) }
! !

!ImageClipper methodsFor: 'initalization'!

defaultOption
	^ #{ 'modal' -> false. 'close' -> [self close] }
! !

!ImageClipper methodsFor: 'opening'!

open: url
	self with:[ :html | 
                   img := html img.
                   canvas := html canvas css:'display' put: 'none'];
		width:800;
		modal: false;
		open.
	self src: url.
	self redraw.
!

openWithProxy: url
	self open: (self proxy: url)
! !

!ImageClipper methodsFor: 'private'!

copyToImg
	self src: (self canvas toDataURL).
	self redraw.
!

croppable
	| jq |
	jcrop ifNotNil: [ jcrop destroy ].
	jq := img asJQuery. 
	< jq.Jcrop({}, function(){ self['@jcrop'] = this})>
!

proxy:url
	^ '/proxy?remote=', url
! !

ImageClipper subclass: #ProxyImageClipper
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!
!ProxyImageClipper commentStamp!
editor := ProxyImageClipper open: 'http://cdn-ak.f.st-hatena.com/images/fotolife/c/chun_it/20080512/20080512162247.jpg'!

!ProxyImageClipper class methodsFor: 'not yet classified'!

open: url
	^ self new openWithProxy: url
! !

DialogBox subclass: #ImageEditor
	instanceVariableNames: 'sk'
	package: 'DyNagoya-Tools'!

!ImageEditor methodsFor: 'not yet classified'!

doesNotUnderstand: aMessage
	aMessage sendTo: widget
!

height: aInt
	widget height: aInt.
	super height: aInt + 65
!

initialize
	super initialize.
	sk := Sketch new.
	self 
		widget: sk; 
		title: 'Image Editor';
		width: 330;
		modal: false.
!

open
	super open.
	self sketch
!

src
	^ widget src
!

width: aInt
	widget width: aInt.
	super width: (aInt + 30)
! !

DialogBox subclass: #InspectorDialog
	instanceVariableNames: 'inspector'
	package: 'DyNagoya-Tools'!
!InspectorDialog commentStamp!
element.style {
    background: url("../images/sprite.amber.png") repeat scroll 0 -27px #DBD9C9;
    font-weight: bold;
    height: 22px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 150px;
    width: 100%;
}!

!InspectorDialog methodsFor: 'not yet classified'!

initialize
	super initialize.
	inspector := Inspector new.
	self 
		title: 'Inspector'; 
		height: 500;
		modal: false
!

inspector
	^ inspector
!

inspector: aInspector
	inspector := aInspector
!

open
	self widget: inspector.
	super open
! !

DialogBox subclass: #TranscriptDialog
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!

!TranscriptDialog methodsFor: 'not yet classified'!

close
	 body asJQuery dialog: 'destroy'
!

initialize
	super initialize.
	self 
		widget: (IDETranscript current); 
		title: 'Transcript'; 
		modal: false
! !

TranscriptDialog class instanceVariableNames: 's'!

!TranscriptDialog class methodsFor: 'not yet classified'!

new
	s ifNil: [ s := super new ].
	^ s
! !

DialogBox subclass: #WorkspaceDialog
	instanceVariableNames: 'workspace'
	package: 'DyNagoya-Tools'!

!WorkspaceDialog methodsFor: 'not yet classified'!

big
	(< self["@widget"]["@sourceArea"]["@editor"] >)
		setOption: 'lineNumbers' value: false;
		setOption: 'theme' value: 'amberbig'
!

close
	 body asJQuery dialog: 'destroy'
!

initialize
	super initialize.
	workspace := Workspace new.
	self 
		widget: workspace;
		title: 'Workspace'; 
		modal: false
!

normal
	(< self["@widget"]["@sourceArea"]["@editor"] >)
		setOption: 'lineNumbers' value: true;
		setOption: 'theme' value: 'amber'
!

print: aStr
	(< self["@widget"]["@sourceArea"]>)
		printOnly: aStr
! !

WorkspaceDialog class instanceVariableNames: 's'!

!WorkspaceDialog class methodsFor: 'not yet classified'!

new
	s ifNil: [ s := super new ].
	^ s
! !

Object subclass: #EventSource
	instanceVariableNames: 'observers lastValue'
	package: 'DyNagoya-Tools'!

!EventSource methodsFor: 'not yet classified'!

>>> aBlock
	| second |
	second := ConnectedEventSource new converter: aBlock.
	self subscribe: second.
	^ second
!

fire: ev
	lastValue := ev.
	observers do: [ %1 value: ev ]
!

initialize
	observers := Set new
!

subscribe: ob
	observers add: ob
!

unsubscribe: ob
	observers remove: ob
!

value
	^ lastValue
! !

!EventSource class methodsFor: 'not yet classified'!

toggle: flag
	^ [ flag := flag not. flag ]
! !

EventSource subclass: #ConnectedEventSource
	instanceVariableNames: 'converter'
	package: 'DyNagoya-Tools'!

!ConnectedEventSource methodsFor: 'not yet classified'!

converter
	^ converter
!

converter: aConverter
	converter := aConverter
!

value: aObj
	self fire: ( converter value: aObj )
! !

Object subclass: #GoogleMap
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!

!GoogleMap class methodsFor: 'not yet classified'!

link: html address: aStr
	html a 
		href: (self url: aStr);
		title: aStr;
		at: 'target' put: '_blank'; 
		with:'(map)'
!

url: address
	^ 'http://maps.google.co.jp/maps?q=', (Util encode: address)
! !

Object subclass: #RemoteObject
	instanceVariableNames: 'obj group key'
	package: 'DyNagoya-Tools'!

!RemoteObject methodsFor: 'not yet classified'!

delete
	RemoteObject delete: self class group: group key: key
!

doesNotUnderstand: aMessage
	aMessage arguments 
		ifEmpty:[ ^ obj at: aMessage selector ];
		ifNotEmpty: [ ^ super doesNotUnderStand: aMessage ]
!

initialize: aObj group: aGroup key: aKey
	obj := aObj.
	group := aGroup.
	key := aKey
! !

!RemoteObject class methodsFor: 'event handling'!

afterDelete
	^ [ :num | ]
!

afterGet: aBlock
	^ [ :all | 
		aBlock value: 
			(all collect: [ :each | self new initialize: each body group: each group key: each key] ) ]
!

afterPut
	^ [ :num | ]
! !

!RemoteObject class methodsFor: 'not yet classified'!

delete: clazz group: group key: key
	^ jQuery
		ajax: (self url: (clazz asString) group: group key: key)
		option: #{
			'type' -> 'DELETE'.
			'success' -> self afterDelete
		}
!

doesNotUnderstand: aMessage
	| map group key |
	map := Util messageMap: aMessage.
	group := map first value.
	key := map second value.
	map last key = 'delete'
		ifTrue: [ self delete: self group: group key: key]
		ifFalse: [ self put: self group: group key: key body: ((HashedCollection fromPairs: map) asJSONString) ]
!

list: group
	^ jQuery
		ajax: ('/data/', self asString, '/', group)
		option: #{
			'type' -> 'GET'.
			'dataType' -> 'json'.
			'success' -> self onSuccess
		}
!

list: group callback: aBlock
	^ jQuery
		ajax: ('/data/', self asString, '/', group)
		option: #{
			'type' -> 'GET'.
			'dataType' -> 'json'.
			'success' -> (self afterGet: aBlock)
		}
!

put: clazz group: group key: key body: body
	^ jQuery
		ajax: (self url: (clazz asString) group: group key: key)
		option: #{
			'type' -> 'PUT'.
			'data' -> #{'body' -> body} asJSON.
			'success' -> self afterPut
		}
! !

!RemoteObject class methodsFor: 'private'!

url: clazz group: group key: key
	^ '/data/', clazz asString, '/', group, '/', key
! !

Widget subclass: #Sketch
	instanceVariableNames: 'canvas sketch width height'
	package: 'DyNagoya-Tools'!

!Sketch methodsFor: 'not yet classified'!

color: aStr
	sketch sketch: 'color' color: aStr
!

height: aInt
	height := aInt.
	canvas >>= [ %1 height: '', aInt, 'px' ]
!

initialize
	width := 100.
	height := 100.
!

renderOn: html
	html div with: 'ここに何か描きましょう。'.
	canvas := html canvas 
		css: 'border' put: 'solid 1px black';
		css: 'background' put: 'white'.
	self width: width.
	self height: height.
	sketch := canvas asJQuery
!

size: aInt
	sketch sketch: 'size' size: aInt
!

sketch
"after sketch, you can't change width or height"
	sketch sketch
!

src
	^ canvas element toDataURL: 'image/png'
!

width: aInt
	width := aInt.
	canvas >>= [ %1 width: '', aInt, 'px' ]
! !

Widget subclass: #ToggleButton
	instanceVariableNames: 'state source body renderWhenOn renderWhenOff'
	package: 'DyNagoya-Tools'!

!ToggleButton methodsFor: 'not yet classified'!

initialize
	source := EventSource new.
	state := source >>> (EventSource toggle: false).
	state >>>  [ %1
				ifTrue: [ renderWhenOn ]
				ifFalse: [ renderWhenOff] ] 
		>>> [ self redraw: %1].
	renderWhenOn := [ :html | ].
	renderWhenOff := [ :html | ].
!

redraw: aBlock
	body contents: aBlock
!

renderOn: html
	body := html span 
		onClick: [ source fire: %1 ];  
		css: 'cursor' put: 'pointer'.
	state fire: false
!

renderWhenOff: aBlock
	renderWhenOff := aBlock
!

renderWhenOn: aBlock
	renderWhenOn := aBlock
!

toggle
	^ state
! !

ToggleButton subclass: #RectangleButton
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!

!RectangleButton methodsFor: 'not yet classified'!

label: aString frontColor: front backColor: back
	label := aString.
	renderWhenOn := [ :html | 
		html span with: label; |> ( self onStyle: back fontColor: front )
	].
	renderWhenOff := [ :html |
		html span with: label; |> self offStyle
	]
!

offStyle
  ^ [ %1
	css: 'margin-left' put: '10px';
	css: 'padding' put: '2px';
	css: 'font-size' put: '0.8em';
	css: 'border' put: '1px solid white';
	css: 'background' put: '';
	css: 'color' put: ''
     ]
!

onStyle: backColor fontColor: fontColor
  ^ [ %1
	css: 'margin-left' put: '10px';
	css: 'padding' put: '2px';
	css: 'font-size' put: '0.8em';
	css: 'border' put: '1px solid ', backColor;
	css: 'background' put: backColor;
	css: 'color' put: fontColor
     ]
! !

Object subclass: #Twitter
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!

!Twitter class methodsFor: 'not yet classified'!

iconUrl: user 
	^ 'http://img.tweetimag.es/i/', user, '_m'
!

link: html user: user
	html a href: (self linkUrl: user); at: 'title' put: user; at: 'target' put: '_blank'; with:[
		html img src: (self iconUrl: user)
	]
!

linkUrl: user 
	^ 'http://twitter.com/', user
!

tweet: msg
	jQuery
		ajax: '/tweet'
		option: #{
			'type' -> 'POST'.
			'dataType' -> 'json'.
			'data' -> (<{tweet: msg}>)
		}.
  ^ msg
! !

Object subclass: #Util
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!

!Util class methodsFor: 'not yet classified'!

encode: str
	^ (< encodeURIComponent(str) >)
!

encodeURI: str
	^ (< encodeURI(str) >)
!

escape: str
	^ (< escape(str) >)
!

messageMap: aMessage
	| selectors arguments ret |
	selectors := Util split: (aMessage selector) with: ':'.
	arguments := aMessage arguments.
	ret := Array new.
	arguments withIndexDo: [ :each :i | ret add: ((selectors at: i) -> each )].
	^ ret
!

split: str with: delimiter
	^ < str.split(delimiter) >
! !

