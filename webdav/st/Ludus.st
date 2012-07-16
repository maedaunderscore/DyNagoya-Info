Smalltalk current createPackage: 'Ludus' properties: #{}!
Widget subclass: #Sound
	instanceVariableNames: 'src'
	category: 'Ludus'!
!Sound commentStamp!
I am a sound. I have a source audio file.
I can be played, paused, stopped or looped.!

!Sound methodsFor: 'not yet classified'!

renderOn: html
	|sound|
	sound := html audio
		id: self id;
		src: self src.
	sound at: 'preload' put: true.
!

src
	^ src
!

src: anUrl
	src := anUrl
!

id
	"We take the file name, without extension"
	^ (self src 
           	replaceRegexp: (RegularExpression fromString: '\..{2,3}$') with: '')
			replaceRegexp: (RegularExpression fromString: '.*\/') with: ''
!

play
	self stop.
	(document getElementById: self id) play.
!

pause
	(document getElementById: self id) pause.
!

stop
	self pause.
	(document getElementById: self id) src: self src.
!

loop
	(document getElementById: self id) at: 'loop' put: true.
	self play.
!

resume
	(document getElementById: self id) play.
! !

!Sound class methodsFor: 'not yet classified'!

src: anUrl
	^ self new src: anUrl
! !

Widget subclass: #Game
	instanceVariableNames: 'canvas context fps keys step end mousePosition mouseDown sounds'
	category: 'Ludus'!
!Game commentStamp!
I am a game. You need to override a couple of my methods to make me usable:

#startGame → Here you can define my intial conditions, such as the size of the canvas, my sounds, the background properties, the FPS, etc.
#step → Here you can define what has to be done at each game cycle, or step. This method should control posititions, collisions, mouse and keyboard events, etc. This method should not deal with any graphic properties, these should be dealt with by:
#draw → This is the method that controls my view. Here you should define the drawing of sprites and other graphic elements. Don't forget to clear the canvas before re-drawing sprites, if your game requires so.!

!Game methodsFor: 'attributes'!

width: anInteger
	canvas at: 'width' put: anInteger.
!

height: anInteger
	canvas at: 'height' put: anInteger.
!

width
	^ canvas element width
!

height
	^ canvas element height
!

backgroundColor: aColor
	canvas at: 'style' put: ('background-color: ', aColor , ';')
! !

!Game methodsFor: 'audio'!

addSound: aSoundUrl
	|sound|
	sound := (Sound src: aSoundUrl).
	sounds add: sound.
	sound appendToJQuery: 'body' asJQuery.
!

soundNamed: aName
	^ sounds detect: [:each | each id = aName ]
! !

!Game methodsFor: 'control'!

gameLoop
	"Do not override me, use #step and #draw instead"
	self gameOver 
		ifFalse: [ [ 
                  	self step.
                  	self draw.
                  	step := step + 1.
                  	self gameLoop] valueWithTimeout: (1000 / fps)]
!

end
	end := true
!

gameOver
	^ end ifNil: [end := false]
!

step
	self subclassResponsibility
!

stepCount
	^ step
!

everyStepNumber: anInteger do: aBlock
	( step \\ anInteger ) = 0 ifTrue: aBlock
! !

!Game methodsFor: 'drawing'!

draw
	self subclassResponsibility
!

clearCanvas
	context clearRect: 0 y: 0 width: canvas element width height: canvas element height.
!

drawSprite: aSprite
	context 
		drawImage: aSprite spriteSheet
		originX: aSprite currentFrameGroup origin x + (aSprite currentFrameGroup offset)
		originY: aSprite currentFrameGroup origin y
		frameWidth: aSprite width
		frameHeight: aSprite height
		x: aSprite x 
		y: aSprite y
		scaleWidth: aSprite width
		scaleHeight: aSprite height.
	(step \\ aSprite currentFrameGroup frameRate) = 0 ifTrue: [aSprite nextFrame].
!

drawSpriteCollection: aSpriteCollection
	aSpriteCollection
		do: [:eachSprite | 
			self drawSprite: eachSprite]
!

context
	^ context
! !

!Game methodsFor: 'events'!

keyDown: evt
	keys at: evt keyCode put: true.
!

keyUp: evt
	keys at: evt keyCode put: false.
!

keys
	^ keys ifNil: [keys := Array new. 255 timesRepeat: [keys add: false]. keys]
!

mouseMove: evt
	|canvasPosition windowScrollTop windowScrollLeft canvasRelative|

	windowScrollTop := <$(window).scrollTop();>.
	windowScrollLeft := <$(window).scrollLeft();>.
	canvasPosition := 'canvas' asJQuery position.

	canvasRelative := (canvasPosition left - windowScrollLeft) @ ( canvasPosition top - windowScrollTop ) .
	mousePosition := (evt clientX - canvasRelative x) @ (evt clientY - canvasRelative y).
!

mousePosition
	^ mousePosition ifNil: [mousePosition := 0@0]
!

mouseDown: evt
	mouseDown := true.
!

mouseUp: evt
	mouseDown := false.
!

whileMouseDownDo: aBlock
	mouseDown ifTrue: aBlock
!

onMouseClickDo: aBlock
	(<($('#canvas').data('events')['click'])>)
		ifNil: [canvas onClick: aBlock]
!

whileKeyPressed: aKeyCode do: aBlock
	( ( keys at: aKeyCode ifAbsent: [ false ] ) and: [ keys at: aKeyCode ] ) ifTrue: aBlock
!

onMouseUpDo: aBlock
	(<($('#canvas').data('events')['mouseup'])>)
		ifNil: [canvas asJQuery bind: 'mouseup' do: aBlock]
!

onMouseDownDo: aBlock
	(<($('#canvas').data('events')['mousedown'])>)
		ifNil: [canvas asJQuery bind: 'mousedown' do: aBlock]
!

whileMouseUpDo: aBlock
	mouseDown ifFalse: aBlock
! !

!Game methodsFor: 'initialization'!

initialize
	super initialize.
	fps := 30.
	keys := #().
	sounds := #().
	mouseDown := false.
	step := 1.
!

startGame
	self subclassResponsibility
!

fps: anInteger
	fps := anInteger
! !

!Game methodsFor: 'rendering'!

renderOn: html
	"Do not override me, use #startGame instead"
	canvas := html canvas.
	canvas at: 'width' put: 250;
		at: 'height' put: 250;
		id: 'canvas'.
	context := canvas element getContext: '2d'.

	(window jQuery: document) keydown: [:evt | self keyDown: evt].
	(window jQuery: document) keyup: [:evt | self keyUp: evt].
	canvas asJQuery bind: 'mousedown' do: [:evt | self mouseDown: evt].
	canvas asJQuery bind: 'mouseup' do: [:evt | self mouseUp: evt].
	canvas asJQuery bind: 'mousemove' do: [:evt | self mouseMove: evt].

	self startGame.

	self gameLoop.
! !

!Game class methodsFor: 'initialization'!

initialize
	"uncomment if you want the game to start when loading the page"
"	'self start"
!

start
	|instance|
	instance := self new.
	instance appendToJQuery: ('body' asJQuery).
	^instance
! !

Object subclass: #Key
	instanceVariableNames: ''
	category: 'Ludus'!
!Key commentStamp!
I am a helper class that always returns the key code of a certain key.
I have a couple of methods defined for keys that have names, such as:

space (or spaceBar)
tab
enter
leftArrow
...

For the rest of the keys, my #doesNotUnderstand handles the conversion.!

!Key class methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	aMessage selector size = 1
		ifTrue: [^ self keyCodeFor: aMessage selector]
		ifFalse: [^ super doesNotUnderstand: aMessage]
! !

!Key class methodsFor: 'key codes'!

leftArrow
	^ 37
!

upArrow
	^ 38
!

rightArrow
	^ 39
!

downArrow
	^ 40
!

tab
	^9
!

enter
	^13
!

keyCodeFor: aValue
	^ aValue isString 
		ifTrue: [aValue asUppercase first asciiValue]
		ifFalse: [aValue asString asciiValue]
!

space
	^32
!

spaceBar
	^32
! !

Object subclass: #Sprite
	instanceVariableNames: 'position direction spriteSheet currentFrameGroup frameGroups animating'
	category: 'Ludus'!
!Sprite commentStamp!
I am a Sprite. I need to have a spritesheet, which is an image file that displays all possible frames I can paint organized in an ordered fashion.
You define different frame groups for this spritesheet, and you can cycle through these framegroups and through the frames of each of them.
I have a direction, defined by a unit vector. This vector will always be a unit vector. If someone tries to force-set my direction to a vector that is not a unit one, I will just convert it.
I handle collisions with other sprites and sprite collections.
Of course, I also have a position, defined by cartesian coordinates.!

!Sprite methodsFor: 'animation'!

frameRate: anInteger
	self frameGroups do: [:each | each frameRate: anInteger]
!

animating
	^ animating ifNil: [animating := true]
!

toggleAnimation
	animating := animating not
!

stopAnimation
	animating := false
!

startAnimation
	animating := true
! !

!Sprite methodsFor: 'attributes'!

x
	^ self position x
!

y
	^ self position y
!

y: anInteger
	self position y: anInteger
!

x: anInteger
	self position x: anInteger
!

spriteSheet
	spriteSheet ifNil: [spriteSheet := <new Image();>.].
        ^spriteSheet.
!

spriteSheet: anImageUrl
	self spriteSheet src: anImageUrl
!

height
	^ self currentFrameGroup height
!

width
	^ self currentFrameGroup width
!

centre
	^ ((self width / 2) + self x) @ ((self height / 2) + self y).
!

centre: aPoint
	|xOffset yOffset|
	xOffset := (self width / 2).
	yOffset := (self height / 2).

	self position: ((aPoint x - xOffset) @ (aPoint y - yOffset)).
!

position
	^ position ifNil: [position := 0@0]
!

position: aPoint
	^ position := aPoint
!

direction
	"The direction is always a unit vector"
	direction ifNotNil:
		[|angle|
                direction y >= 0
			ifTrue: [ angle := Math atan: (direction x / direction y) ]
			ifFalse: [ angle := (Math atan: (direction x / direction y)) + Number pi ].
		direction := (Math sin: angle) @ (Math cos: angle)].

	^ direction ifNil: [direction := 0@1]
!

direction: aPoint
	"The direction is always a unit vector"
	|angle|
	aPoint y >= 0
		ifTrue: [ angle := Math atan: (aPoint x / aPoint y) ]
		ifFalse: [ angle := (Math atan: (aPoint x / aPoint y)) + Number pi ].
	direction := (Math sin: angle) @ (Math cos: angle).
! !

!Sprite methodsFor: 'collisions'!

collidesWith: aSprite
	|x0 x1 y0 y1|
	x0 := self x + self width.
	x1 := aSprite x + aSprite width.
	y1 := aSprite y + aSprite height.
	y0 := self y + self height.

	^ (x0 > aSprite x) & (y0 > aSprite y) & (x1 > self x) & (y1 > self y).
!

rightCollidesWith: aSprite
	|x0  y0 y1|
	x0 := self x + self width.
	y1 := aSprite y + aSprite height.
	y0 := self y + self height.

	^ (x0 >= aSprite x) & (y0 >= aSprite y) & (y1 >= self y) & (self x < aSprite x).
!

leftCollidesWith: aSprite
	^ aSprite rightCollidesWith: self
!

topCollidesWith: aSprite
	|x0 x1 y0 y1|
	x0 := self x + self width.
	x1 := aSprite x + aSprite width.
	y1 := aSprite y + aSprite height.

	 ^ (self y <= y1) & (x0 >= aSprite x) & (self y > aSprite y) & (self x < x1)
!

bottomCollidesWith: aSprite
	^ aSprite topCollidesWith: self
!

bottomCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [:each | self bottomCollidesWith: each]) notEmpty
!

topCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [:each | self topCollidesWith: each]) notEmpty
!

leftCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [:each | self leftCollidesWith: each]) notEmpty
!

rightCollidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [:each | self rightCollidesWith: each]) notEmpty
!

bottomCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [:each | self bottomCollidesWith: each])
!

leftCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [:each | self leftCollidesWith: each])
!

rightCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [:each | self rightCollidesWith: each])
!

topCollidesWithWhichOf: aSpriteCollection
	^ (aSpriteCollection detect: [:each | self topCollidesWith: each])
!

collidesWithAnyOf: aSpriteCollection
	^ (aSpriteCollection select: [:each | self collidesWith: each]) notEmpty
!

isInsideCanvas: aCanvas
	^ ( ( ( self x >= 0 ) 
		and: [ self y >= 0 ] )
			and: [ self width + self x <= aCanvas width ] )
				and: [ self height + self y <= aCanvas height ]
! !

!Sprite methodsFor: 'frames'!

currentFrameGroup
	^ currentFrameGroup ifNil: [ self frameGroups first ]
!

frameGroups
	^ frameGroups ifNil: [frameGroups :=Array new]
!

currentFrameGroup: anIdentifier
	currentFrameGroup := self frameGroups detect: [:each | each identifier = anIdentifier].
!

nextFrame
	self animating ifTrue: [self currentFrameGroup nextFrame].
!

addFrameGroupNamed: aString origin: anOriginPoint size: aSizePoint frameCount: anInteger
	self frameGroups 
		add: 
			(FrameGroup new 
                         	identifier: aString
                         	origin: anOriginPoint
                         	frameSize: aSizePoint
                         	frameCount: anInteger)
!

atLastFrame
	^ self currentFrameGroup atLastFrame
!

nextFrameGroup
	( self currentFrameGroup = self frameGroups last )
		ifFalse: [ currentFrameGroup := self frameGroups at: ( ( self frameGroups indexOf: self currentFrameGroup ) + 1 ) ]
		ifTrue: [ currentFrameGroup := self frameGroups first ]
! !

!Sprite methodsFor: 'movement'!

moveCentreBy: anOffset
	"Example: aSprite moveCentreBy: 0@5"
	self centre: self centre + anOffset
! !

!Sprite methodsFor: 'trigonometry'!

distanceFromCentreTo: aPoint
	^  Math 
		sqrt: 
			((Math pow: ((self centre x) - (aPoint  x)) to: 2)
                         	+ (Math pow: ((self centre y) - (aPoint y)) to: 2))
! !

Object subclass: #FrameGroup
	instanceVariableNames: 'identifier origin frameSize frameCount currentFrameNumber frameRate'
	category: 'Ludus'!
!FrameGroup commentStamp!
I represent a group of ordered frames. Each frame is a clip rectangle that a Sprite can retrieve from me to paint itself.!

!FrameGroup methodsFor: 'attributes'!

identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger
	identifier := aString.
	origin := anOriginPoint.
	frameSize := aSizePoint.
	frameCount := anInteger.
!

identifier
	^ identifier
!

height
	^ frameSize y
!

width
	^ frameSize x
!

origin
	^ origin
! !

!FrameGroup methodsFor: 'frames'!

currentFrameNumber
	^ currentFrameNumber ifNil: [currentFrameNumber := 0]
!

nextFrame
	self atLastFrame
		ifTrue: [currentFrameNumber := 0]
		ifFalse: [currentFrameNumber := currentFrameNumber + 1]
!

frameRate
	^ frameRate ifNil: [frameRate := 5].
!

offset
	^ self width * self currentFrameNumber
!

frameRate: anInteger
	frameRate := anInteger
!

atLastFrame
	^ currentFrameNumber = (frameCount - 1)
! !

!FrameGroup class methodsFor: 'instance creation'!

identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger
	^ self new identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger
! !

