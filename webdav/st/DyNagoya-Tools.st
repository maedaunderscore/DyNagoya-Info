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
		add: (<{text: label, click: function() { aBlock(); $(this).dialog("close"); }}>).
!

closeButton: label
	(option at: 'buttons' ifAbsentPut:[ {} ])
		add: (<{text: label, click: function() { $(this).dialog("close"); }}>).
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

withCancel
	^ self new closeButton: 'Cancel'
! !

DialogBox subclass: #BrowserDialog
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!

!BrowserDialog class methodsFor: 'not yet classified'!

open: aClass
	| browser ret |
	browser := ClassBrowser hierarchy: aClass.
	ret := self new 
		widget: browser;
		width: '600px';
		height:  (window innerHeight * 0.5)
		modal: false;
		open.

	browser open: aClass.
	^ ret
! !

DialogBox subclass: #ImageEditor
	instanceVariableNames: 'img canvas jcrop'
	package: 'DyNagoya-Tools'!
!ImageEditor commentStamp!
x := ImageEditor openWithProxy: 'http://xxxx.com/abc.png'; open
(* select area by drag the image *)

x crop
x src!

!ImageEditor methodsFor: 'accessing'!

area
	self isSelected 
		ifTrue: [ ^ jcrop tellSelect ]
		ifFalse: [ | imgJQ | 
                          imgJQ := img asJQuery.
                          ^ #{ #x -> 0. #y -> 0. #x2 -> imgJQ width. #y2 -> imgJQ height. #w -> imgJQ width. #h -> imgJQ height } ]
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

!ImageEditor methodsFor: 'action'!

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

!ImageEditor methodsFor: 'initalization'!

defaultOption
	^ #{ 'modal' -> false }
! !

!ImageEditor methodsFor: 'opening'!

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

!ImageEditor methodsFor: 'private'!

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

ImageEditor subclass: #ProxyImageEditor
	instanceVariableNames: ''
	package: 'DyNagoya-Tools'!
!ProxyImageEditor commentStamp!
x := ProxyImageEditor open: 'http://cdn-ak.f.st-hatena.com/images/fotolife/c/chun_it/20080512/20080512162247.jpg'; open!

!ProxyImageEditor class methodsFor: 'not yet classified'!

open: url
	^ self new openWithProxy: url
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

Widget subclass: #IconText
	instanceVariableNames: 'image text size root'
	package: 'DyNagoya-Tools'!

!IconText methodsFor: 'accessing'!

image: url
	image := url
!

redraw
	root contents: [ :html |  html span
		with: text;
		css: 'padding-left' put: '', (size + 3), 'px';
		css: 'background' put: 'url(', image, ') no-repeat 0 50%'
	]
!

renderOn: html
	root := html root.
	self redraw.
!

size: aSize
	size := aSize
!

text: aText
	text := aText
! !

IconText subclass: #PlusMinusIcon
	instanceVariableNames: 'image text size'
	package: 'DyNagoya-Tools'!

!PlusMinusIcon methodsFor: 'not yet classified'!

close
	image := '/images/Plus-icon.png'.
	self redraw
!

none
	image := '/images/None-icon.png'.
	self redraw
!

open
	image := '/images/Minus-icon.png'.
	self redraw
! !

!PlusMinusIcon class methodsFor: 'not yet classified'!

text: aString
	^ self new 
		size: 16;
		text: aString
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

