Smalltalk current createPackage: 'DyNagoya-Tools' properties: #{}!
Widget subclass: #DialogBox
	instanceVariableNames: 'message option body aspectRatio'
	category: 'DyNagoya-Tools'!
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
	option at: #modal put: flag
!

option
	^ option
!

title: aTitle
	option at: 'title' put: aTitle
!

width: aWidth
	option at: 'width' put: aWidth
!

with: aBlock
	| body |
	body := HTMLCanvas new.
	aBlock value: body.
	^ self body: body root.
! !

!DialogBox methodsFor: 'action'!

close
	 body asJQuery dialog: 'destroy'
!

open
	 body asJQuery dialog: option
! !

!DialogBox methodsFor: 'initialization'!

defaultOption
	^ #{ 'modal' -> true }
!

initialize
	super initialize.
	option := self defaultOption
! !

!DialogBox class methodsFor: 'not yet classified'!

withCancel
	^ self new closeButton: 'Cancel'
! !

DialogBox subclass: #ImageEditor
	instanceVariableNames: 'img canvas jcrop'
	category: 'DyNagoya-Tools'!
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

Widget subclass: #Circle
	instanceVariableNames: ''
	category: 'DyNagoya-Tools'!

!Circle methodsFor: 'accessing'!

radiusX
	^ 60
!

radiusY
	^ 100
! !

!Circle methodsFor: 'rendering'!

renderOn: html
	html div class: 'circle'; style: (self circleStyle, self style); with: [
			self body: html
	]
!

body: html
!

circleStyle
	| rx ry |
	rx := self radiusX.
	ry := self radiusY.
	^ 'width: ', (rx * 2), 'px;height: ', (rx * 2), 'px; -moz-border-radius:',rx,'px;-webkit-border-radius:',rx,'px;border-radius: ', rx, 'px; line-height:', (rx * 2), 'px; text-align:center;position:absolute;'
! !

Object subclass: #Util
	instanceVariableNames: ''
	category: 'DyNagoya-Tools'!

!Util class methodsFor: 'not yet classified'!

encodeURI: str
	^ (< encodeURI(str) >)
!

split: str with: delimiter
	^ < str.split(delimiter) >
!

messageMap: aMessage
	| selectors arguments ret |
	selectors := Util split: (aMessage selector) with: ':'.
	arguments := aMessage arguments.
	ret := Array new.
	arguments withIndexDo: [ :each :i | ret add: ((selectors at: i) -> each )].
	^ ret
! !

