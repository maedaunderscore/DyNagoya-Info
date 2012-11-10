Smalltalk current createPackage: 'DyNagoya' properties: #{}!
Object subclass: #Action
	instanceVariableNames: 'idx maxSize'
	package: 'DyNagoya'!

!Action methodsFor: 'not yet classified'!

all
	^  ('#AboutDyNagoya span' asJQuery toArray),
		('#AboutSmalltalk span' asJQuery toArray)
!

initialize
    idx := 0.
   maxSize := (self all size)
!

next
  (idx = 0) ifFalse: [  (self all at: idx) className: ' ' ].
  idx := (idx + 1) min: maxSize.
  (self all at: idx) className: 'strong'.
!

prev
  (self all at: idx) className: ' '.
  idx := (idx - 1) max: 1.
  (self all at: idx) className: 'strong'.
! !

Object subclass: #Agenda
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Agenda class methodsFor: 'not yet classified'!

joint02
	^ '
Links show.
AboutDyNagoya show.
Browser open.

Event browser onDialog
Event browser onPage
TopPage show
editor := ImageEditor new open: ''/images/20080512162247.jpg''
editor scale: 2.0.
Logo browser onDialog openMethod: ''imageUrl''.
TopPage show.
Logo browser onPage openMethod: ''x''.

Screen title: ''About Amber Smalltalk''.
Screen add: (Amber goodPoint at:1).
Screen title: ''Smalltalkの思うところ''.
Screen add: [ :html | html h2: ''Smalltalk はブロック（無名関数）をよく使います'']
Screen add: [ :html | html h2: ''引数を書くのが億劫'' ].
Screen add: [ %1 h2: ''Clojure風に書きたい'' ].
(1 to: 10) inject: 0 into: [ %1 + %2 ]. 

Screen add: [ it h2: ''Groovy風ならこんなかんじ''].

ParserEditor  onDialog 

Screen add: [ _ h2: ''Scala風ならこんなかんじ''].
(1 to: 10) inject: 0 into: [ _ + _ ]. 

Object browser onPage openMethod: ''|>''.
desc := PipelineDesc new.
Screen put: desc
desc |> [ Screen put: %1].
browser := DraggableWidget browser onPage openMethod: ''renderOn:''.
browser openMethod: ''style''.
desc style.
EntryPoint browser onPage openClassMethod: ''start''.

Screen title: ''まとめ''.
Screen add: [ %1 h2: ''Amber Smalltalkをいじるの楽しい''].
Screen add: [ %1 h2: ''興味持った方はDyNagoyaにも是非'' ].
Screen title:''ありがとうございました''; put: Building new; put: FinDesc new.
'
! !

Object subclass: #Amber
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Amber class methodsFor: 'not yet classified'!

goodPoint
	^ {
	[ %1
            h2: 'コンパクト！';
            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '30px'; with: 'Smalltalk初心者も把握しやすい'];
            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '40px'; with: 'Squeak 4.3: Smalltalk allClasses size → 2105'];
            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '40px'; with: 'Cuis 4.0: Smalltalk allClasses size → 654'];
            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '40px'; with: 'Amber (2012/8/26時点): Smalltalk current classes size → 103']
	]. [ %1
            h2: 'JSとの親和性が高い！';
            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '30px'; with: ' JSのライブラリを活用できる']
	]. [ %1
            h2: '動作環境が多い！';
            |> [ %1 div css: 'font-size' put: '30px'; css: 'margin-left' put: '30px'; with: ' Windows 8 Appもできた']
	] }
! !

Widget subclass: #DraggableWidget
	instanceVariableNames: ''
	package: 'DyNagoya'!

!DraggableWidget methodsFor: 'not yet classified'!

dragOption
	| callback |
	callback := [ :e :ui || x y |
		console log: ui.
		x := ui position left.
		y := ui position top.
		Mod class: self class attr: 'x' value: '', x, 'px'.
		Mod class: self class attr: 'y' value: '', y, 'px'.
		Transcript show: 'Dropped (', x, ':', y, ')'; cr
	].
	^ (< { stop: callback }>)
!

renderBodyOn: html
!

renderOn: html
	html div 
		class: self class asString, ' animated';
		style: (self style);
		|> [ %1 asJQuery draggable: (self dragOption)];
		with: [ self renderBodyOn: html ]
!

style
	^ {
		(self x) >>= [ 'left:', %1, ';' ].
		(self y) >>= [ 'top:', %1, ';' ]
	   } 
	   |> [ %1 select: [ %1 notNil ] ]
	   |> [ %1 inject: 'position:fixed;' into: [ %1, %2] ]
!

x
	^ nil
!

y
	^ nil
! !

!DraggableWidget class methodsFor: 'not yet classified'!

asJQuery
	^ ('.', self asString) asJQuery
! !

DraggableWidget subclass: #Announcement
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Announcement methodsFor: 'accessing'!

imageUrl
  ^ 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEnklEQVRYhd3YW4hVVRgH8F8Xoh6iHkrM0ggMIgiieol68i0igki6QG/1EERJD0FYdKceKpJESYgi7ELTRSVyHrxUhppj5mg1OqM43mtGy0sz41x3D9/a7D1nzpw554z20Aebtdc6a3/7/93+6zub/5mcj6cxhKzKdQa//tegRkoAerEffaW1L3AtXimtrT9XYK4w0Ss9VdZ+RCe+qaLjlrTnjrMF6ozC4qvxeAnIrtL93zhWAfTyCl0jOJl0TEta8XaN3z/DKZxOQLqwIQHYWAI4E3vwrjA0mw6oFvxT596DCdA8dGAdjuMEdicgownUKMbS2txGQV2PLQ3sz7AogcrnGVak+Ul8io9wSHh2SwLZkDTi6hsVFJE/15nGGWntSWxP90fwpcjJ4428ax9uagDYTPwpKGMU12ClIlx3Cy8dTGDa8b6o6h7huXemesl56K/x+0VYKqr0w/TiIZFLZW7rx814VIQtE4SbFwQR+kx4d99UwPpq/JaJChzFVuwVYTkmSLUFm0tA8msvdqb75SaG7jlFcVSVC4X7K6U3rQ9hNTYlRT/gVRGKYeG103hLVPMuDIrcWinCnQlPT2b4i9V+OI6LS/OZCdB2Uf5D4vg5nJTswwGsTQCWGO+pFSK3tqX55+kdtaRqIZQX96R5G3YIiwfT2mkR0i5BA10ijOVQrC4B3CW4bGMy9IEawO7BDZWLPWnMSzgPxSZx9vWlK2f5w8IL6yazNMkaEdrepPOkiMZkMlyeXCJyrDu9ZA2WKazeJhL9kzTfokjsRbiuxou6hMcXiry8FT/X2N9anrSUQHyfxu8UHcNouj8mKm9MeHi7qUv9GVEQGX5L40KTe3nc+pESsFbjk3izopx/Sfd9GMBXU4CCF0TRZKJy30v3w6KgKqW7PFmuYOoNCk/9Jbw5pqjGTOTd77igDmBzsUpU6AGRBlsVTWWlTPBkzuJ5yAZE9fULb+1P1g6L3Kr3jJud9n6cdPXjWXF+ZiY2lVWBdSaLPhCM3Iv7xDmXCQ/moGbUCewq0XUcFL1di6CPNkVqPDYVsK/TOCI80yN47Nu0PiDC3lH5cA25raS7HW+k+So8LDxYBjMB2ICCQFuxWNDDqOCe9nStbQAUzEp6+8Vx9IgoglaRMqPGF0GPKpL3VcOKw7gjja+ncUeDwB5Mzz0l2p4WYeAJYWS7oqHsEx1OVWCjCqLN86l8NSpL8SYWiGgcEnyWh3SJoqup1kSAOSUAP4kzc1C0LR3q461KyQRN5HoHcFTxr+poWp+n4jiqpqhMHbnXRpoAletrE5W4Ps27FUmfE28mjsZJ5X5FSPMHx0xhTQ05lYAMipCtVjSM+/FH2lNXpVfmVYbLmgA1SxhUbru7FZyYif6/7tydozjfmk16mJ+AdZb0tAnyHsPLwosLGlGatzg7TS+/hkUYl+El0e/dq/g7t7gZxTl3HZoGsAyviZzdZrz3epvUiyDBZkOZCVrI8ywHNZbWpy13NQHuTsFRTxifqzkNnVXJP5BcWsfeHMhuxeeDep9tWvKOt0d8PayU+SUg+dfGh84loEqZjSvxfBUg+XV7M4r/BQzgKv4ax4CBAAAAAElFTkSuQmCC'
!

x
  ^'70px'
!

y
  ^'527px'
! !

!Announcement methodsFor: 'rendering'!

renderBodyOn: html
	html root css:'width' put: '270px'.
	html div 
		css: 'background' put: 'pink';
		css: 'padding' put: '0';
"		css: 'width' put: '', window innerWidth , 'px';"
		css: 'width' put: '100%';
		css: 'opacity' put: '0.8';
		css: 'color' put: 'white';
		css: 'text-align' put: 'center';
	with: [
		html h3 
			css: 'padding' put: '10px 0';
			with: [
				html img css: 'vertical-align' put: 'top'; css:'margin-right' put:'10px'; src: self imageUrl.
				html span with: '詳細は'; 
					css: 'color' put: 'black'.
				html a href: 'http://atnd.org/events/30524'; target: '_blank'; css: 'color' put: '#FF3322';
				with: 'こちら'.
			]
	]
! !

DraggableWidget subclass: #Board
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Board methodsFor: 'accessing'!

x
  ^'31px'
!

y
  ^'23px'
! !

!Board methodsFor: 'rendering'!

renderBodyOn: html
	html div 
		class: 'alert-message block-message warning ui-draggable';
		style: 'margin: 10px';
		with: Event latest
! !

DraggableWidget subclass: #FinDesc
	instanceVariableNames: ''
	package: 'DyNagoya'!

!FinDesc methodsFor: 'accessing'!

x
  ^'543px'
!

y
  ^'-341px'
! !

!FinDesc methodsFor: 'rendering'!

renderBodyOn: html
	html div css: 'width' put: '350px'; css: 'background-color' put: 'yellow'; css: 'opacity' put: '0.7'; css: 'padding' put: '10px'; with: [
		html h2 css: 'margin' put: '0'; with: [
			html div with:'大名古屋ビルヂングは'.
			html div with: '2012年9月30日に'.
			html div with: '閉館します。'.
		]
	]
! !

DraggableWidget subclass: #HowToJoin
	instanceVariableNames: ''
	package: 'DyNagoya'!

!HowToJoin methodsFor: 'accessing'!

imageUrl
  ^ 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEnklEQVRYhd3YW4hVVRgH8F8Xoh6iHkrM0ggMIgiieol68i0igki6QG/1EERJD0FYdKceKpJESYgi7ELTRSVyHrxUhppj5mg1OqM43mtGy0sz41x3D9/a7D1nzpw554z20Aebtdc6a3/7/93+6zub/5mcj6cxhKzKdQa//tegRkoAerEffaW1L3AtXimtrT9XYK4w0Ss9VdZ+RCe+qaLjlrTnjrMF6ozC4qvxeAnIrtL93zhWAfTyCl0jOJl0TEta8XaN3z/DKZxOQLqwIQHYWAI4E3vwrjA0mw6oFvxT596DCdA8dGAdjuMEdicgownUKMbS2txGQV2PLQ3sz7AogcrnGVak+Ul8io9wSHh2SwLZkDTi6hsVFJE/15nGGWntSWxP90fwpcjJ4428ax9uagDYTPwpKGMU12ClIlx3Cy8dTGDa8b6o6h7huXemesl56K/x+0VYKqr0w/TiIZFLZW7rx814VIQtE4SbFwQR+kx4d99UwPpq/JaJChzFVuwVYTkmSLUFm0tA8msvdqb75SaG7jlFcVSVC4X7K6U3rQ9hNTYlRT/gVRGKYeG103hLVPMuDIrcWinCnQlPT2b4i9V+OI6LS/OZCdB2Uf5D4vg5nJTswwGsTQCWGO+pFSK3tqX55+kdtaRqIZQX96R5G3YIiwfT2mkR0i5BA10ijOVQrC4B3CW4bGMy9IEawO7BDZWLPWnMSzgPxSZx9vWlK2f5w8IL6yazNMkaEdrepPOkiMZkMlyeXCJyrDu9ZA2WKazeJhL9kzTfokjsRbiuxou6hMcXiry8FT/X2N9anrSUQHyfxu8UHcNouj8mKm9MeHi7qUv9GVEQGX5L40KTe3nc+pESsFbjk3izopx/Sfd9GMBXU4CCF0TRZKJy30v3w6KgKqW7PFmuYOoNCk/9Jbw5pqjGTOTd77igDmBzsUpU6AGRBlsVTWWlTPBkzuJ5yAZE9fULb+1P1g6L3Kr3jJud9n6cdPXjWXF+ZiY2lVWBdSaLPhCM3Iv7xDmXCQ/moGbUCewq0XUcFL1di6CPNkVqPDYVsK/TOCI80yN47Nu0PiDC3lH5cA25raS7HW+k+So8LDxYBjMB2ICCQFuxWNDDqOCe9nStbQAUzEp6+8Vx9IgoglaRMqPGF0GPKpL3VcOKw7gjja+ncUeDwB5Mzz0l2p4WYeAJYWS7oqHsEx1OVWCjCqLN86l8NSpL8SYWiGgcEnyWh3SJoqup1kSAOSUAP4kzc1C0LR3q461KyQRN5HoHcFTxr+poWp+n4jiqpqhMHbnXRpoAletrE5W4Ps27FUmfE28mjsZJ5X5FSPMHx0xhTQ05lYAMipCtVjSM+/FH2lNXpVfmVYbLmgA1SxhUbru7FZyYif6/7tydozjfmk16mJ+AdZb0tAnyHsPLwosLGlGatzg7TS+/hkUYl+El0e/dq/g7t7gZxTl3HZoGsAyviZzdZrz3epvUiyDBZkOZCVrI8ywHNZbWpy13NQHuTsFRTxifqzkNnVXJP5BcWsfeHMhuxeeDep9tWvKOt0d8PayU+SUg+dfGh84loEqZjSvxfBUg+XV7M4r/BQzgKv4ax4CBAAAAAElFTkSuQmCC'
!

x
  ^'55px'
!

y
  ^'475px'
! !

!HowToJoin methodsFor: 'rendering'!

renderBodyOn: html
	| div |
	html root css:'width' put: '350px'.
	div := html div.
[
	div 
		class: 'animated bounceInDown';
		css: 'background' put: 'pink';
		css: 'padding' put: '0';
		css: 'width' put: '100%';
		css: 'opacity' put: '0.8';
		css: 'color' put: 'white';
		css: 'text-align' put: 'center';
	with: [
		html h3 
			css: 'padding' put: '10px 0';
			with: [
				html img css: 'vertical-align' put: 'top'; css:'margin-right' put:'10px'; src: self imageUrl.
				html span with: '参加方法は'; 
					css: 'color' put: 'black'.
				html a css: 'color' put: '#FF3322';
					onClick: [ HowToJoinPage show];
					with: 'こちら'.
			]
	]
] valueWithTimeout: 1000
! !

DraggableWidget subclass: #Icon
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Icon methodsFor: 'accessing'!

imageUrl
	^''
! !

!Icon methodsFor: 'rendering'!

renderBodyOn: html
	html img src: self imageUrl
! !

Icon subclass: #Logo
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Logo methodsFor: 'accessing'!

imageUrl
  ^  'data:image/png;base64,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'
!

x
  ^'829px'
!

y
  ^'514px'
! !

DraggableWidget subclass: #PipelineDesc
	instanceVariableNames: ''
	package: 'DyNagoya'!

!PipelineDesc methodsFor: 'accessing'!

x
  ^'551px'
!

y
  ^'-230px'
! !

!PipelineDesc methodsFor: 'rendering'!

renderBodyOn: html
	html div css: 'width' put: '450px'; css: 'background-color' put: 'pink'; with: [
		html h2:'パイプライン演算子(|>)はF#でよく使われる演算子'.
		html h3: 'Smalltalkでも意外に便利'
	]
! !

DraggableWidget subclass: #RawWidget
	instanceVariableNames: ''
	package: 'DyNagoya'!

!RawWidget methodsFor: 'accessing'!

rawHtml
	^''
! !

!RawWidget methodsFor: 'rendering'!

renderBodyOn: html
	html div asJQuery html: self rawHtml
! !

RawWidget subclass: #Dolphin
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Dolphin methodsFor: 'accessing'!

rawHtml
  ^ '
<svg version="1.1" id="layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" width="800.5px" height="800.5px" viewBox="0 0 800 800.5" enable-background="new 0 0 367.5 300.5"
	 xml:space="preserve">
<g transform="scale(1.8)">
	<g>
		<g>
			<g>
				<path fill="#18A8E7" d="M269.252,63.991c6.833,0.676,12.729-2.77,18.701-5.61c7.079-3.367,14.002-5.835,21.829-6.676
					c7.572-0.814,15.194-1.071,22.806-0.965c3.854,0.053,7.704,0.288,11.547,0.583c2.579,0.198,6.452-2.521,8.804-3.554
					c4.959-2.183,8.42-6.964,8.358-12.397c-0.064-5.72-5.688-10.646-10.499-12.758c-6.315-2.772-13.617-4.06-20.209-6.152
					c-7.537-2.393-15.592-0.97-23.275-0.282c-3.285,0.294-6.534,0.92-9.73,1.713c-3.831,0.95-5.777,2.66-9.342,0.295
					c-6.425-4.263-12.954-8.171-20.157-10.959c-14.81-5.733-30.096-6.436-45.693-4.599c-15.469,1.821-29.583,5.427-43.817,11.789
					c-13.257,5.925-26.099,12.48-37.043,22.131c-11.065,9.758-20.058,21.192-29.206,32.68c-1.777,2.232-4.581,4.114-6.007,6.549
					c-0.798,1.363-0.686,3.052-1.054,4.545c-0.46,1.867-1.578,3.73-2.421,5.449c-3.45,7.038-7.79,13.515-12.056,20.066
					c-3.985,6.121-6.874,13.195-10.067,19.751c-3.619,7.429-7.049,14.949-10.319,22.539c-6.118,14.196-11.164,28.466-14.714,43.522
					c-1.746,7.403-3.04,14.91-4.6,22.354c-0.781,3.724-1.676,7.42-2.664,11.094c-0.783,2.911-3.396,2.782-5.999,3.17
					c-12.032,1.792-25.298,9.743-32.516,19.553c-7.103,9.654,2.594,23.014,11.955,26.354c6.021,2.148,12.564,1.497,18.848,1.656
					c2.787,0.07,6.754-0.567,9.246,0.82c2.398,1.335,3.133,5.903,4.195,8.213c6.476,14.09,28.035,13.904,36.743,2.328
					c4.414-5.869-1.675-15.221-1.945-21.388c-0.21-4.793,4.439-8.756,6.769-12.668c2.633-4.422,4.961-8.945,7.901-13.185
					c5.597-8.068,13.787-15.732,21.898-21.215c3.895-2.632,6.661-6.179,9.955-9.502c3.692-3.725,7.713-7.119,11.762-10.444
					c8.279-6.8,16.654-13.708,25.583-19.63c4.193-2.781,8.847-5.204,12.685-8.475c3.181-2.711,6.434-7.32,11.169-6.561
					c6.307,1.013,9.013-8.622,2.658-9.643c-5.828-0.936-11.066,0.38-15.593,4.307c-5.544,4.812-11.332,8.663-17.458,12.726
					c-11.93,7.912-23.452,17.449-34.074,27.032c-5.033,4.541-9.139,9.601-14.622,13.576c-5.944,4.311-11.341,9.626-16.359,14.967
					c-4.633,4.932-8.393,10.692-11.673,16.582c-1.645,2.952-3.271,5.883-5.178,8.677c-2.123,3.112-4.192,5.337-5.046,9.135
					c-1.367,6.075,0.711,12.183,2.503,17.898c1.331,4.243-2.978,4.915-6.56,6.034c-5.703,1.781-11.132-1.734-13.072-7.066
					c-1.991-5.475-4.762-9.591-10.33-11.75c-10.284-3.986-29.787,5.175-34.084-9.849c-1.508-5.271,8.539-10.796,12.018-13.073
					c6.065-3.972,12.454-4.823,19.294-6.491c4.757-1.159,7.54-5.016,8.968-9.431c2.326-7.187,3.456-14.884,4.916-22.28
					c3.027-15.341,7.076-30.173,12.896-44.694c5.958-14.867,13.044-29.199,20.102-43.563c6.146-12.509,18.5-24.479,19.656-38.917
					c-0.488,1.179-0.977,2.357-1.464,3.536c4.852-4.72,8.806-10.117,12.992-15.424c4.745-6.015,9.917-11.574,15.325-16.993
					c10.688-10.709,22.682-17.539,36.208-24.072c27.577-13.319,63.342-20.322,91.977-6.158c6.081,3.008,11.37,8.229,17.856,10.272
					c2.771,0.873,5.812-0.014,8.419-0.939c3.88-1.378,7.973-2.13,12.062-2.496c7.976-0.714,14.679-1.255,22.428,1.185
					c6.195,1.951,15.838,2.562,19.754,8.304c1.445,2.118-4.881,4.282-5.999,4.742c-3.03,1.245-5.428,0.746-8.771,0.595
					c-8.252-0.373-16.523-0.056-24.747,0.667c-6.937,0.609-13.441,1.791-19.947,4.325c-6.503,2.533-13.64,7.967-20.677,8.325
					c-0.6-0.06-1.199-0.119-1.799-0.178C262.835,53.355,262.897,63.362,269.252,63.991L269.252,63.991z"/>
			</g>
		</g>
		<g>
			<g>
				<path fill="#18A8E7" d="M339.252,46.803c0.488,4.908-2.687,8.97-6.03,12.221c-4.72,4.589-11.889,5.176-17.911,7.06
					c-6.447,2.017-12.095,4.421-17.566,8.371c-4.803,3.466-10.548,5.107-15.351,8.69c-4.129,3.08-7.638,6.793-10.738,10.893
					c-3.678,4.862-6.247,10.582-10.215,15.184c-2.144,2.486-4.504,4.761-6.599,7.293c-0.499,0.603-1.734,2.876-2.521,3.085
					c-1.388,0.369-2.818,0.99-4.112,1.611c-5.28,2.533-11.272,8.657-17.206,9.093c-6.392,0.47-6.437,10.473,0,10
					c6.947-0.511,12.345-4.738,18.11-8.261c2.72-1.662,5.93-2.154,8.585-3.709c2.941-1.723,5.151-5.952,7.473-8.458
					c8.812-9.514,13.693-22.208,24.598-29.769c2.465-1.709,5.163-2.884,7.893-4.086c3.207-1.411,5.887-3.525,8.749-5.508
					c6.22-4.308,15.074-6.006,22.323-7.778c10.573-2.585,21.652-14.544,20.52-25.931C348.62,40.449,338.614,40.387,339.252,46.803
					L339.252,46.803z"/>
			</g>
		</g>
		<g>
			<g>
				<path fill="#18A8E7" d="M138.913,33.893c-5.063-4.363-9.859-1.314-15.734-0.527c-7.588,1.017-15.152,2.184-22.693,3.504
					c-7.43,1.301-14.894,2.62-22.215,4.445c-6.802,1.696-14.991,4.281-20.319,9.058c-3.847,3.449-6.074,8.219-4.279,13.332
					c1.932,5.502,7.804,7.932,13.001,9.271c6.564,1.691,13.59,1.309,20.276,2.217c6.946,0.943,14.661,3.604,20.779,7.053
					c5.625,3.171,10.663-5.469,5.047-8.635c-8.479-4.78-18.365-7.576-27.974-8.675c-5.156-0.59-10.372-0.567-15.47-1.604
					c-1.952-0.397-5.619-1.156-6.378-3.318c-0.582-1.656,4.403-3.977,5.41-4.518c9.893-5.318,21.955-6.637,32.847-8.636
					c5.8-1.064,11.626-1.987,17.459-2.851c3.446-0.51,6.899-0.967,10.355-1.407c0.801-0.045,1.581-0.199,2.336-0.461
					c0.398-0.168,0.796-0.336,1.195-0.504c1.446-0.414,1.208-0.638-0.714-0.673C136.7,45.15,143.806,38.109,138.913,33.893
					L138.913,33.893z"/>
			</g>
		</g>
		<g>
			<g>
				<path fill="#18A8E7" d="M222.056,113.724c-1.205,4.787,0.993,7.979,1.392,12.57c0.427,4.92,0.599,8.526,3.922,12.457
					c-0.261-2.02-0.521-4.04-0.782-6.059c-2.251,4.56-2.517,9.586-3.637,14.5c-1.247,5.47-3.039,10.859-5.234,16.02
					c-2.171,5.104-5.695,7.854-9.834,11.395c-3.812,3.263-6.697,7.851-12.13,7.447c-6.437-0.479-6.391,9.525,0,10
					c5.766,0.429,10.093-1.721,14.08-5.743c4.282-4.321,9.763-7.647,13.502-12.469c3.631-4.683,5.531-11.411,7.334-16.987
					c0.932-2.883,1.656-5.827,2.329-8.778c0.762-3.339,0.695-7.239,2.225-10.337c1.071-2.17,0.767-4.228-0.782-6.059
					c-1.429-1.691-0.93-4.663-1.108-6.718c-0.238-2.747-2.312-5.883-1.633-8.58C233.274,110.126,223.629,107.473,222.056,113.724
					L222.056,113.724z"/>
			</g>
		</g>
		<g>
			<g>
				<path fill="#18A8E7" d="M251.06,126.952c5.756,7.866,12.657,14.537,19.733,21.196c5.266,4.954,13.783,14.599,20.451,5.924
					c4.77-6.204,3.037-15.467,0.334-22.205c-3.166-7.889-9.267-13.654-16.053-18.505c-5.258-3.759-10.243,4.92-5.047,8.635
					c4.312,3.083,8.046,6.63,10.735,11.229c2.352,4.02,5.005,12.117,1.115,15.792c1.178-0.488,2.356-0.976,3.535-1.464
					c-2.663-0.22-4.907-3.544-6.74-5.287c-2.094-1.989-4.206-3.957-6.298-5.947c-4.713-4.484-9.283-9.154-13.132-14.413
					C255.928,116.758,247.245,121.739,251.06,126.952L251.06,126.952z"/>
			</g>
		</g>
		<g>
			<g>
				<path fill="#18A8E7" d="M203.502,119.553c0.032,12.208-2.452,24.716-8.046,35.63c-2.483,4.846-1.77,10.164-3.873,15.125
					c-2.309,5.446-3.144,10.344-2.069,16.199c1.607-2.109,3.214-4.22,4.821-6.329c-0.402,0-0.806,0-1.208,0c-6.448,0-6.448,10,0,10
					c0.402,0,0.806,0,1.208,0c3.464,0,5.4-3.174,4.821-6.329c-1.044-5.688,2.273-10.305,3.687-15.588
					c0.716-2.674,0.116-5.451,1.247-8.03c1.11-2.53,2.512-4.904,3.508-7.496c4.018-10.452,5.934-22.025,5.904-33.182
					C213.486,113.105,203.486,113.104,203.502,119.553L203.502,119.553z"/>
			</g>
		</g>
	</g>
	<path fill="#18A8E7" d="M232.625,38.239c-4.994-0.119-9.137-4.363-8.896-9.112c0.332-6.519,4.703-11.984,9.547-11.936
		c4.506,0.044,8.936,5.938,8.812,11.724C241.979,34.055,237.61,38.358,232.625,38.239z"/>
</g>
</svg>
'
!

style
	^ super style,	'width: 376px;'
!

x
  ^'579px'
!

y
  ^'57px'
! !

!Dolphin class methodsFor: 'not yet classified'!

tweet: msg
	^Twitter tweet: msg
! !

Object subclass: #EntryPoint
	instanceVariableNames: ''
	package: 'DyNagoya'!
!EntryPoint commentStamp!
EntryPoint makeWorkspaceNormalTheme!

!EntryPoint class methodsFor: 'not yet classified'!

bottomPosition
  ^ [ %1
	width: '600px';
	height: 200;
	x: '', (window innerWidth * 0.9 - 600), 'px';
	y: '', (window innerHeight * 0.9 - 200), 'px'
  ]
!

leftPosition
  ^ [ %1
	width: '300px';
	height: '300px';
	x: '', (window innerWidth * 0.9 - 300), 'px';
	y: '', (window innerHeight * 0.1), 'px'
  ]
!

messages
	^{
	 'Type one of below lines on workspace, then click "DoIt"'.
	 '    AboutDyNagoya show         "to see what DyNagoya is"'.
	 '    Links show                           "to see Links about our interest"'.
	 '    Browser open                       "to open default class browser"'.
	'    Page browser onDialog          "to open browser on Dialog"'.
	 '    Icon browser onPage open: Logo method: ''x'''.
	'     JSViewer onDialog               "to show js code will be emitted"'.
	'     ParserEditor onDialog          "to modify parser"'
	}
!

positionY
  ^ '', (window innerHeight * 0.9 - 200), 'px'
!

screenPreparation
	[
	  '#screen' asJQuery remove.
	  Screen new appendToJQuery: ('body' asJQuery).
	  Screen new flip: (TopPage new)
	] valueWithTimeout: 3000
!

showMessage
	self messages do: [
		Transcript show: %1; cr
	]
!

start
  WorkspaceDialog new  |> self bottomPosition; open; big.
  TranscriptDialog new |> self topPosition ; open.

   self screenPreparation.
  LoginPanel show.
  self showMessage.
!

topPosition
  ^ [ %1
	width: '350px';
	height: 300;
	x: '', (window innerWidth * 0.9 - 350), 'px';
	y: '', (window innerHeight * 0.1), 'px'
  ]
! !

Widget subclass: #Event
	instanceVariableNames: 'title date start end place detail fixed'
	package: 'DyNagoya'!
!Event commentStamp!
Event latest addToDSTokai
Event latest tweet!

!Event methodsFor: 'Twitter'!

formatPeriod
  ^ (< moment(this['@date']).format("YYYY/MM/DD(ddd) ") >), start, '〜', end
!

tweet
	^ Dolphin tweet: self tweetMessage
!

tweetMessage
	^ '次回のミーティングは',
	(self formatPeriod),
	' 場所:', (place name),
	' で開催します。詳細はこちら → http://dynagoya.info/'
! !

!Event methodsFor: 'accessing'!

date: aDate
  date := aDate
!

detail: str
  detail := str
!

end: aTime
  end := aTime
!

fixed
  ^ fixed ifNil: [ true ]
!

fixed: aBool
  fixed := aBool
!

place: aPlaceClass
  place := aPlaceClass new
!

start: aTime
  start := aTime
!

title: str
  title := str
! !

!Event methodsFor: 'google calendar'!

addToCalendar
  window open: (self gcalUrl) target: '_blank'
!

addToDSTokai
  window 
	open: (self 
		gcalUrl: self dstokaiId 
		description: self descriptionForDSTokai) 
	target: '_blank'
!

description
  ^ '<ul>', (
	(detail collect: [:each | '<li>', each, '</li>' ]) join: ''
  ), '</ul>'
!

descriptionForDSTokai
  ^ '動的言語、特にSmalltalkを中心とした集まり<a href="http://dynagoya.info/index.html" target="_blank">ページ</a>'
!

dstokaiId
	^ '6ef63uicdv7l17h035m1grg7fs@group.calendar.google.com'
!

format: aTime
  | d formatted |
  d := Date fromString: (date, ' ', aTime).
  formatted := (< moment(d).add('minutes', moment(d).zone()).format('YYYYMMDDTHHmmss') >).
  ^ formatted, 'Z'
!

gcalParams: src desc: aStr
	| base |
	base := {
		'ctz=Asia/Tokyo'.
		'ctext=', (Util encode: title).
		'details=', (Util encode: aStr).
		'location=', (Util encode: place gCalString).
		'dates=', (Util encode: ((self format: start) , '/', (self format: end)))
	}.

	src ifNotNil: [ base add: 'src=', src ].
	^ base
!

gcalUrl
	^ self gcalUrl: nil description: self description
!

gcalUrl: src description: aStr
	^  (self gcalParams: src desc: aStr)
		inject: 'http://www.google.com/calendar/event?action=TEMPLATE'
		into: [ :acc :x | acc, '&', x ]
!

ifJS
  ^ '
	var ret = new this();
	ret.title("DyNagoya MTG ＃09");
	ret.date("2012/10/20");
	ret.start("18:00:00");
	ret.end("20:00:00");
	ret.place(Mattariya);
	ret.detail( [
			"OMetaをいじる",
			"Mistをいじたい",
			"CPS変換祭り?"
		]);
	return ret;
'
! !

!Event methodsFor: 'participation'!

cancel
	Login user 
		ifNotNil: [ Participation event: title user: Login user delete: true ]
		ifNil: [ Window alert: 'You need to log in!!' ]
!

join
	Login user 
		ifNotNil: [ Participation event: title user: Login user ]
		ifNil: [ Window alert: 'You need to log in!!' ]
!

list: aBlock
	Participation list: title callback: aBlock
!

listDo: aBlock
	self list: [ :list | list do: aBlock ]
! !

!Event methodsFor: 'rendering'!

renderOn: html
	html h1: title.
	html h2: '日時：', self formatPeriod, (self fixed ifTrue: [''] ifFalse: [ '?' ]).
	place renderOn: html.
	html h2: '内容：'.
	html h3 with: (html div style: 'margin-left: 30px'; with:[
		detail do: [ :each | html div with: each ].
	])
! !

!Event class methodsFor: 'events'!

ometa Events  {
  date = < digit digit digit digit '/' digit digit '/' digit digit > ,
  time = < digit digit ':' digit digit ':' digit digit >,
  fromTo :from :to = seq(from) <( ~seq(to) char )*>:body seq(to) -> body,
  eol = <( ~cr char )*>:body (cr | empty) -> body,
  cr = char:r ?{r.charCodeAt(0) == 10},
  meeting = 
	fromTo('', 'は'): title spaces 
	date:date 'の' time:from '〜' time:to 'に' spaces
	<letter+>:place  spaces 'で' spaces
	( spaces '-' spaces eol)+:todo -> (
		smalltalk.Event._new()._title_(title)
		._date_(date)
		._start_(from)._end_(to)
		._place_(smalltalk[place])
		._detail_(todo) )
}
!

jointStStudy02
	^ self new 
		fixed: true;
		title: '合同Smalltalk勉強会@名古屋';
		date: '2012/09/29';
		start: '13:30:00';
		end: '18:00:00';
		place: ATeam;
		detail: {
'Amber SmalltalkによるWeb開発(@maeda_)'.
'Object Calculusの話(@t6s)'.
'OpenQwaqの話(@umejava)'.
'SqueakからHaskellを使ってみた(@tomooda)'.
'Seasideを使ったラピッドプロトタイピング(@kuritar)'
}
!

latest
	^ self meeting10
!

meeting02
	^ self new 
		title: 'DyNagoya MTG ＃02';
		date: '2012/01/28';
		start: '17:00:00';
		end: '20:00:00';
		place: Doerya;
		detail: {
'このページについて説明'.
'Make:Ogakiのネタを考える'.
'Smalltalk入門(希望者がいれば)'.
'イルカの名前を考える'
}
!

meeting03
	^ self new 
		title: 'DyNagoya MTG ＃03';
		date: '2012/02/26';
		start: '18:30:00';
		end: '20:30:00';
		place: Hakkaku;
		detail: {
'cogdroidについて'.
'Testについて考える'.
'このページのリンク集の表示をかえる'.
'Smalltalk入門(希望者がいれば)'
}
!

meeting04
	^ self new 
		fixed: true;
		title: 'DyNagoya MTG ＃04';
		date: '2012/03/31';
		start: '18:30:00';
		end: '20:30:00';
		place: Captina;
		detail: {
'Scratch をいじる'.
'このページのAboutの内容を考える'.
'Newspeakをいじる'.
'Smalltalk入門(希望者がいれば)'
}
!

meeting05
	^ self new 
		fixed: true;
		title: 'DyNagoya MTG ＃05';
		date: '2012/04/28';
		start: '18:00:00';
		end: '20:30:00';
		place: Tagen;
		detail: {
'合同勉強会用に名古屋的ネタを考える'.
'このページのAboutの内容を考える'.
'VMMakerを動かす'.
'Smalltalk入門(希望者がいれば)'
}
!

meeting06
	^ self new 
		fixed: true;
		title: 'DyNagoya MTG ＃06';
		date: '2012/05/19';
		start: '18:00:00';
		end: '20:30:00';
		place: LokantaAYHAN;
		detail: {
'合同Smalltalk勉強会の段取りを決める'.
'パーサーのいじり方'.
'VMMakerを動かす'.
'Smalltalk入門(希望者がいれば)'
}
!

meeting07
	^ self new 
		fixed: true;
		title: 'DyNagoya MTG ＃07';
		date: '2012/06/23';
		start: '18:00:00';
		end: '20:30:00';
		place: AmiyakiTei;
		detail: {
'Smalltalk勉強会　未踏スペシャル フィードバック'.
'合同Smalltalk勉強会の段取りを決める'.
'Smalltalk入門(希望者がいれば)'
}
!

meeting08
	^ self new 
		fixed: true;
		title: 'DyNagoya MTG ＃08';
		date: '2012/07/28';
		start: '18:00:00';
		end: '20:30:00';
		place: Doerya;
		detail: {
'合同Smalltalk勉強会の発表ネタを決める'.
'Amber 魔改造の話'.
'Smalltalk入門(希望者がいれば)'
}
!

meeting09
	^ self new 
		title: 'DyNagoya MTG ＃09';
		date: '2012/10/20';
		start: '18:00:00';
		end: '20:00:00';
		place: Mattariya;
		detail: {
			'OMetaをいじる'.
			'Mistをいじたい'.
			'CPS変換祭り?'
		}
!

grammer Events:meeting > meeting10 

DyNagoya MTG #10 は 
2012/11/10の12:00:00〜15:00:00に
Imoni で
 - OMetaパフォーマンスチューニング
 - OMeta名前空間をちゃんとする
 - NGKのネタを考える
! !

Widget subclass: #JSViewer
	instanceVariableNames: 'sourceArea outView'
	package: 'DyNagoya'!

!JSViewer methodsFor: 'not yet classified'!

compile: aString
	| compiler parsed source result|
	compiler := Compiler new.
	source := 'doIt ^[', aString, '] value'.

	self try: [
		Smalltalk current basicParse: source.
		result := (compiler eval: (compiler compile: source forClass: DoIt)) fn 
	] catch: [:ex | ^ ex  ].
	^ result compiledSource
!

emit: aString
	^ (self compile: aString)
!

renderOn: html
	sourceArea := SourceArea new.

	html div css: 'width' put: '100%'; with: [
		html div 
			css: 'background' put: 'white'; 
			css: 'color' put: 'black'; 
			css: 'width' put: '45%';
			css: 'position' put: 'absolute';
			css: 'top' put: '5%';
			css: 'bottom' put: '5%';
			with: sourceArea.
		outView := html div 
			css: 'background' put: 'pink'; 
			css: 'color' put: 'black';
			css: 'width' put: '45%';
			css: 'position' put: 'absolute';
			css: 'left' put: '51%';
			css: 'top' put: '5%';
			css: 'bottom' put: '5%';
			with: 'JS code'.
		html span css: 'clear' put: 'both'
	].
	sourceArea onKeyUp: [ self updateStatus ]
!

updateStatus
	outView contents: [ :html |
		html span: (self emit: sourceArea val)
	]
! !

!JSViewer class methodsFor: 'not yet classified'!

onDialog
	^ DialogBox new widget: JSViewer new; title: 'Javascript Viewer'; width: '50%'; modal: false; open
! !

Widget subclass: #Login
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Login methodsFor: 'not yet classified'!

renderOn: html
	jQuery ajax: '/name' options: #{ 
		'success' -> [ :x | 
			Login user: x.
			html a href: '/logout'; with: ( x, ' Log Out' ) ].
		 'error'       -> [ :x | 
			Login user: nil.
			html a href: '/login'; with: ' Log In'  ]
	}
! !

Login class instanceVariableNames: 'user'!

!Login class methodsFor: 'not yet classified'!

user
	^user
!

user: aStr
	user := aStr
! !

Widget subclass: #LoginPanel
	instanceVariableNames: ''
	package: 'DyNagoya'!

!LoginPanel methodsFor: 'not yet classified'!

renderOn: html
	html root style: 'position:fixed; font-size: 24px; right:0; padding: 3px'.
	html div with: Login new.
! !

LoginPanel class instanceVariableNames: 'single'!

!LoginPanel class methodsFor: 'not yet classified'!

new
	single ifNil: [ single := super new ].

	^ single
!

show
	self new updateToJQuery: '#login' asJQuery
! !

Object subclass: #OMeta
	instanceVariableNames: ''
	package: 'DyNagoya'!
!OMeta commentStamp!
code := 'ometa Factorial {
  fact 0 -> 1,
  fact :n = fact(n-1):m -> (n*m)
}'.
tree := BSOMetaJSParser matchAll: code rule: 'topLevel'.
js := BSOMetaJSTranslator match:tree rule:'trans'.
< eval(js) >.
Factorial matchAll: '3' rule: 'fact'!

Widget subclass: #Page
	instanceVariableNames: 'body todo'
	package: 'DyNagoya'!

!Page methodsFor: 'not yet classified'!

do: aBlock
  body ifNil: [
	todo add: aBlock
  ] ifNotNil: [ 
	aBlock value: body
  ]
!

initialize
  todo := {}
!

renderBody: html
!

renderOn: html
	body := html.
	self renderBody: html.
	
	todo do: [ self do: %1 ]
!

title: aString
  self do: [ %1 h1: aString]
! !

!Page class methodsFor: 'not yet classified'!

show
  Screen new flip: self new
! !

Page subclass: #AboutDyNagoya
	instanceVariableNames: ''
	package: 'DyNagoya'!

!AboutDyNagoya methodsFor: 'not yet classified'!

height
  ^ '8000'
!

renderBody: html
	html h1 style: 'margin-top: 30px'; with: 'DyNagoya とは'.
{
  { 
     '名古屋で動的言語(Dynamic Language)について語り合うプログラマ集団がDyNagoya(Dynamic language + Nagoya = DyNagoya)です。' .
     '動的言語全般を扱ってますが、中心となるのはSmalltalkです。' .
     'Smalltalkはアランケイ(Alan Kay 1940 - )の理想のパーソナルコンピュータである『Dynabook』の暫定実装から誕生しました。' .
     'DyNagoyaの「Dy」はDynabookの「Dy」も兼ねています。'. 
     'コンピュータと私たちの理想の関係を模索することがDyNagoyaの目的です。' 
   }  .
   {
     'DyNagoyaでは、月に１回の会合を開いています。'.
     'この会では、おいしいご飯を食べながら、動的言語について語り合っています。'.
     '何の準備も心構えも必要ありません。お気軽にご参加ください。' 
   }
}
do: [ :each | html h2 css: 'margin-left' put: '20px'; with: [ each do: [ :each2 | html span with: each2 ] ] ].
! !

Page subclass: #AboutSmalltalk
	instanceVariableNames: ''
	package: 'DyNagoya'!

!AboutSmalltalk methodsFor: 'not yet classified'!

height
  ^ '800'
!

renderBody: html
	html h1: 'Smalltalkとは'.
{
   {
     'Smalltalkと聞くと、オブジェクト指向のイメージが強いのではないでしょうか？'.
     'また、JavaやC++などで世に浸透しているオブジェクト指向とSmalltalkのオブジェクト指向とは違うと聞いたことがあるかも知れません。'.
     '実際全く異なるものですが、説明するのも面倒なので、とりあえず、オブジェクト指向は置いておきましょう。' 
   }. {}. 
   {
     'Smalltalkは言語というより環境です。'.
     'PC上にSmalltalkという仮想環境を起動し、その仮想環境の中でプログラムを記述します。'.
     '重要なポイントは、仮想環境自体がSmalltalkのシンプルな文法で記述されている点あり、しかも実行中に簡単に書き換えることが可能です。'.
     '例えば、仮想環境にはIDEも含まれていますが、そのIDE自体のコードを書き換えて、自分好みのIDEに仕立てることができます。' .
     'IDEだけでなく、コンパイラやインタプリタ、文字列クラスや数値クラスなどの基本クラスもプログラム実行中に好き勝手に書き換えることができます。'.
     '世間一般のプログラミング言語では、コードを書くフェーズとプログラムを動かすフェーズは別物ですが、Smalltalkにはその垣根がゆるく曖昧になっています。' .
     '生きているオブジェクトを捕まえて、そのオブジェクトと対話的にプログラムを動かすこともできます。'
   } .
"'EclipseやVisual Studioなどのデバッグ実行のイメージが近いかも知れません。Smalltalkの開発は、OSやコンパイラ自体をデバッグモードで動かして、ステップ実行したりオブジェクトの状態を見ながら、
コードを書き換えていろいろ試したりできます。'."
   {
     'Smalltalkの強力さを活かして、実務で使っている方もいます'.
     '(数は少ないとは思いますが・・・)。'.
     '一方でSmalltalkは理想のコンピュータ環境を追求するための実験場とも言えます。'.
     '新しいデバイスとの連携にも積極的で、ArduinoやKinectなどの外部デバイスとの連携も可能です。'.
     'iPadやAndroid上で動作するSmalltalkも活発に開発されています。'
   }
} do: [ :each | html h3 css: 'margin-left' put: '20px'; with: [ each do: [ :each2 | html span with: each2  ]]]
! !

Page subclass: #BrowsePage
	instanceVariableNames: 'selectedClass methodName browser'
	package: 'DyNagoya'!

!BrowsePage methodsFor: 'not yet classified'!

browser
	^ browser
!

method: aString
	methodName := aString
!

renderBody: html
	html div 
		css: 'background' put: 'black';
		css: 'color' put: 'white';
		css: 'padding' put: '15px';
		with: browser
!

selectedClass: aClass
	selectedClass := aClass
! !

!BrowsePage class methodsFor: 'not yet classified'!

showWithBrowser: aBrowser
	Screen new flip: (Page new title: (aBrowser target name)).
	Screen add: [ %1 div class: 'tree-source workspace-effect'; with: aBrowser ].
	aBrowser open
! !

Page subclass: #HowToJoinPage
	instanceVariableNames: ''
	package: 'DyNagoya'!

!HowToJoinPage methodsFor: 'not yet classified'!

height
  ^ '800'
!

renderBody: html
	html h1 style: 'margin-top: 30px'; with: '参加方法'. 
{
   {
     'DyNagoyaでは、月に１回の会合を開いています。'.
     'この会では、おいしいご飯を食べながら、動的言語について語り合っています。'.
     '何の準備も心構えも必要ありません。お気軽にご参加ください。' 
   }.
   {
     '会合に始めて参加される方は'.
     'twitterなら @maeda_ まで、'.
     'e-mailなら clouds.across.the.moon at gmail.com まで、'.
     'ご連絡ください。'
   }.
   {
      '最新の情報は twitter アカウント @dynagoya_info がお知らせします。'
   }
}
do: [ :each | html h2 css: 'margin-left' put: '20px'; with: [ each do: [ :each2 | html span with: each2 ] ] ].
! !

Page subclass: #Links
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Links methodsFor: 'link'!

list
	^ {
		self 
			link: 'Amber Smalltalk'
			url: 'http://amber-lang.net/'
			description: 'SmalltalkのJavascript実装。「Learn」からSmalltalkの勉強が始めれる。'.
		self
			link: 'cog blog'
			url: 'http://www.mirandabanda.org/cogblog'
			description: '高速Smalltalk VMの実装説明'.
		self
			link: '自由自在Squeakプログラミング PDF版ドラフト'
			url: 'http://www.box.com/s/bbc7kz53el13ktbxeed4'
			description: '梅澤さんの本が梅澤さんによりPDF化！！！'.
		self			
			link: 'PEG.js'
			url: 'http://pegjs.majda.cz/'
			description: 'amber smalltalk のパーサーの実装に使われている'.
		self			
			link: 'CodeMirror'
			url: 'http://codemirror.net/'
			description: 'amber smtalltalk のエディタ部分の実装に使われている'.

		self			
			link: 'Yengawa Blog'
			url: 'http://blog.yengawa.com/'
			description: 'Scratch + arduino の先駆者。すでにMake:Tokyoに出展していた。'.
		self			
			link: '第37回 Smalltalk勉強会-東京 UStream'
			url: 'http://www.ustream.tv/recorded/18226602'
			description: '阿部さんのScratch + Arduinoのデモ'.
		self			
			link: 'ITPro 簡単だけど奥深い!! Scratchプログラミングの魅力'
			url: 'http://itpro.nikkeibp.co.jp/article/COLUMN/20111019/371080/?ST=develop'
			description: '阿部さんのScratch + Arduinoの記事 全5回'.
		self			
			link: 'A Smalltalk by the Seaside'
			url: 'http://www.asmalltalkbytheseaside.com/'
			description: 'Amberで作られたゲームライブラリとゲームのサンプル'.
		self
			link: 'cog blog - Under Cover Contexts and the Big Frame-Up'
			url: 'http://www.mirandabanda.org/cogblog/2009/01/14/under-cover-contexts-and-the-big-frame-up/'
			description: 'Contextの実装についての説明'.
		self
			link: 'SqueakではじめるSmalltalk入門・アーカイブ'
			url: 'http://squab.no-ip.com:8080/mosaren/'
			description: 'MOSA発行のメールマガジン「MOSA Developer News」、略称“モサ伝”で 2007-04-17　第248号まで連載された、「SqueakではじめるSmalltalk入門」のバックナンバー・アーカイブページです。執筆時点の古い情報やリンクを含んでいるので注意してください。'.
		self
			link: 'Scratch + Arduino'
			url: 'http://www.yengawa.com/scratch_arduino'
			description: 'Scratch から Arduinoを使う方法'.
		self
			link: 'scat'
			url: 'http://code.google.com/p/scat/'
			description: '標準のScratchはIDEがしょぼいのでPharoにScrachを入れる。'.
		self
			link: 'cuis smalltalk'
			url: 'http://www.jvuletich.org/Cuis/Index.html'
			description: '軽量なSmalltalkイメージ。勉強用'.
		self
			link: 'SmalltalkのHistoricalDocuments'
			url: 'http://esug.org/data/HistoricalDocuments/'
			description: '貴重なものがたくさん'
	}
! !

!Links methodsFor: 'private'!

link: title url: aUrl description: aDescription
	^ { title. aUrl. aDescription }
!

open
	self title: 'Links'; with: [:html | self renderOn: html ]; width: 600.
	super open.
! !

!Links methodsFor: 'rendering'!

renderBody: html
	html h1: 'Links'.
	(html tag: 'dl') with: [
		self list do: [ :link |
			(html tag: 'dt') with: [ html a at: 'target' put: '_blank'; href: (link at: 2); with: (link at: 1) ].
			(html tag: 'dd') with: (link at: 3)
		]
	]
! !

Page subclass: #TopPage
	instanceVariableNames: ''
	package: 'DyNagoya'!

!TopPage methodsFor: 'not yet classified'!

renderBody: html
		html div 
			with: Dolphin new;
			with: Board new;
			with: Logo new;
			with: HowToJoin new
! !

Widget subclass: #ParserEditor
	instanceVariableNames: 'source'
	package: 'DyNagoya'!
!ParserEditor commentStamp!
editor := ParserEditor onDialog

editor source css: 'font-size' put: '2em'!

!ParserEditor methodsFor: 'not yet classified'!

applyParser
	| parser |
	self try: [
		parser := PEG buildParser: source val.
		< smalltalk.parser = parser >
	] catch: [ 
		DialogBox new title: 'error'; message: %1; open
	]
!

renderOn: html
	source := html textarea 
		css: 'position' put: 'absolute';
		css: 'width' put: '95%';
		css: 'height' put: '98%';
		css: 'left' put: '12px';
		css: 'right' put: '12px';
		css: 'top' put: '2px';
		css: 'bottom' put: '2px'.
	self updateParserFromServer
!

source
  ^ source
!

updateParserFromServer
	^ jQuery
		ajax: 'js/parser2.pegjs'
		option: #{
			'type' -> 'GET'.
			'dataType' -> 'text'.
			'success' -> [ source val: %1 ]
		}
! !

!ParserEditor class methodsFor: 'not yet classified'!

onDialog
	| this |
	this := self new.
	DialogBox new widget: this; modal: false; width: '50%'; title: 'Parser Editor'; height: 400; 
		button: 'apply' action: [ this applyParser ];
	open.
	^ this source css: 'font-size' put: '2em'
! !

Object subclass: #ParticipantsList
	instanceVariableNames: 'event'
	package: 'DyNagoya'!

!ParticipantsList methodsFor: 'accessing'!

event: aEvent
	event := aEvent
! !

!ParticipantsList methodsFor: 'rendering'!

render
	self class render
!

renderButton: html users: users
		Login user 
			ifNil: [ html span class: 'btn disabled'; with: '申し込みにはログイン(右上)が必要です' ]
			ifNotNil:[
				(users includes: Login user)
					ifFalse: [ html a class: 'btn'; with: '参加する'; onClick: [ event join ] ]
					ifTrue: [html a class: 'btn'; with: '参加を取り消す'; onClick: [event  cancel ] ]
			]
!

renderOn: html
	| users |
	event list: [ :list |
		html h2 with: '参加者：'.
		html div with: [
			users := list collect: [ :each | each user ].
			users do:[ :each | Twitter link:html user: each ]
		].
		html div css: 'margin-top' put: '15px'; with: [
			self renderButton: html users: users.
			html a class: 'btn'; css: 'margin-left' put: '10px'; with: 'Google Calendarに登録'; onClick: [ event addToCalendar ]
		]
	]
! !

ParticipantsList class instanceVariableNames: 's'!

!ParticipantsList class methodsFor: 'not yet classified'!

new
	s ifNil: [  s := super new ].
	^ s
!

render
	| html |
	html := HTMLCanvas onJQuery: '#participants' asJQuery.
	html root empty.
	self new renderOn: html.
! !

RemoteObject subclass: #Participation
	instanceVariableNames: ''
	package: 'DyNagoya'!
!Participation commentStamp!
Participation event: 'meeting02' name: 'maeda_'
Participation event: 'meeting02' name: 'bleis'

Participation list: 'meeting02' callback: [ :list | console log: list size ]
Participation list: 'meeting02' callback: [ :list | list inspect ] 

Participation list: 'meeting02' callback: [ :list | list do: [:each | each delete] ]!

!Participation class methodsFor: 'not yet classified'!

afterDelete
	^ [ ParticipantsList render ]
!

afterPut
	^ [ ParticipantsList render ]
! !

Widget subclass: #Place
	instanceVariableNames: ''
	package: 'DyNagoya'!
!Place commentStamp!
DialogBox new widget: (Edelweiss new); open!

!Place methodsFor: 'accessing'!

address
!

gCalString
  ^ (self address), '(', (self name), ')'
!

name
!

renderOn: html
	html h2 with:[ 
		html span with: '場所：'.
		html a href: self url; at: 'target' put: '_blank'; with: self name. 
		GoogleMap link: html address: self address 
	]
!

url
! !

!Place class methodsFor: 'not yet classified'!

openInDialog
	DialogBox new widget: (self new); open
! !

Place subclass: #ATeam
	instanceVariableNames: ''
	package: 'DyNagoya'!

!ATeam methodsFor: 'not yet classified'!

address
	^ '名古屋市西区牛島町6番1号 名古屋ルーセントタワー32F'
!

name
	^ '株式会社エイチーム'
!

url
	^ 'http://www.a-tm.co.jp/'
! !

Place subclass: #AmiyakiTei
	instanceVariableNames: ''
	package: 'DyNagoya'!

!AmiyakiTei methodsFor: 'not yet classified'!

address
	^ '名古屋市千種区今池2丁目1-34'
!

name
	^ 'あみやき亭 千種店'
!

url
	^ 'http://www.amiyakitei.co.jp/shop2.html#area_nagoya'
! !

Place subclass: #AnyWhere
	instanceVariableNames: ''
	package: 'DyNagoya'!

!AnyWhere methodsFor: 'not yet classified'!

address
	^ ''
!

name
	^ '未定'
!

url
	^ ''
! !

Place subclass: #Bambi
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Bambi methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市東区泉一丁目4-5 グランドールシャトー1F'
!

name
	^ '喫茶バンビ'
!

url
	^ 'http://r.tabelog.com/aichi/A2301/A230104/23040019/'
! !

Place subclass: #BondCoffee
	instanceVariableNames: ''
	package: 'DyNagoya'!

!BondCoffee methodsFor: 'not yet classified'!

address
	^ '名古屋市中区栄１ー１１ー６'
!

name
	^ 'ボンドコーヒー'
!

url
	^ 'http://www.bondcoffee.jp/index.html'
! !

Place subclass: #Captina
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Captina methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市中村区名駅3-28-12 大名古屋ビルヂング'
!

name
	^ 'カプチーナ 大名古屋ビル店'
!

url
	^ 'http://www.dainagoya-building.com/cgi-bin/shop/page.cgi?act=page&id=5'
! !

Place subclass: #Doerya
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Doerya methodsFor: 'not yet classified'!

address
	^ '名古屋市中区錦3-25-20'
!

name
	^ 'ハンバーグハウス源(旧どえりゃあ)'
!

url
	^ 'http://second.gensg.jp/gen/'
! !

Place subclass: #DyNagoyaBuilding
	instanceVariableNames: ''
	package: 'DyNagoya'!

!DyNagoyaBuilding methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市中村区名駅3-28-12 大名古屋ビルヂング'
!

name
	^ '大名古屋ビルヂング '
!

url
	^ 'http://www.dainagoya-building.com/'
! !

Place subclass: #Edelweiss
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Edelweiss methodsFor: 'not yet classified'!

address
	^ '名古屋市東区東桜1-10-1'
!

name
	^ 'エーデルワイス'
!

url
	^ 'http://www8.ocn.ne.jp/~edel/'
! !

Place subclass: #Hakkaku
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Hakkaku methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市中村区名駅3-28-12 大名古屋ビルヂングB1'
!

name
	^ '浪花ろばた 八角 大名古屋ビル店 '
!

url
	^ 'http://r.gnavi.co.jp/n004601/'
! !

Place subclass: #Hina
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Hina methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市中区大須4-1-12'
!

name
	^ '陽菜(ひな)'
!

url
	^ 'http://r.tabelog.com/aichi/A2301/A230103/23040495/'
! !

Place subclass: #Imoni
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Imoni methodsFor: 'not yet classified'!

address
	^ '名古屋市緑区大高町字高山１－１'
!

name
	^ '名古屋芋煮会#2'
!

url
	^ 'http://partake.in/events/5e2b77db-4d10-4f7d-bba9-50d1890b104d'
! !

Place subclass: #Kako
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Kako methodsFor: 'not yet classified'!

address
	^ '名古屋市中村区名駅5-30-4　名駅KDビル1F'
!

name
	^ 'Coffee shop KAKO'
!

url
	^ 'http://www.coffeekako.com/index.html'
! !

Place subclass: #Kakureya
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Kakureya methodsFor: 'not yet classified'!

address
	^ '名古屋市千種区四谷通1-8 ラフォーレ四ツ谷B1'
!

name
	^ '洞食空間 隠れ家'
!

url
	^ 'http://gourmet.walkerplus.com/157158314001/index.html'
! !

Place subclass: #Katatumuri
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Katatumuri methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市中区丸の内2-14-15 河合ビル　２Ｆ'
!

name
	^ 'カタツムリ'
!

url
	^ 'http://r.tabelog.com/aichi/A2301/A230102/23007756/'
! !

Place subclass: #Lancia
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Lancia methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市昭和区隼人町1-4 清楽ビル1F'
!

name
	^ 'サラダショップ Lancia '
!

url
	^ 'http://r.tabelog.com/aichi/A2301/A230108/23005243/'
! !

Place subclass: #LokantaAYHAN
	instanceVariableNames: ''
	package: 'DyNagoya'!

!LokantaAYHAN methodsFor: 'not yet classified'!

address
	^ '名古屋市中区栄１－１４－２８'
!

name
	^ 'Lokanta AYHAN ロカンタアイハン'
!

notice
  ^ '日曜日休み'
!

url
	^ 'http://star.gmobb.jp/lokanta_ayhan/'
! !

Place subclass: #Maruichi
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Maruichi methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市中区栄3-8-102'
!

name
	^ '炭火焼き鳥 まるいち'
!

url
	^ 'http://r.tabelog.com/aichi/A2301/A230103/23030942/'
! !

Place subclass: #Mattariya
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Mattariya methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市千種区内山３-20-19'
!

name
	^ 'まったりや 千種'
!

url
	^ 'http://www.hotpepper.jp/strJ000725580'
! !

Place subclass: #Moyorino
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Moyorino methodsFor: 'not yet classified'!

address
	^ '名古屋市千種区宮根台1-4-16 1F'
!

name
	^ 'Moyorino (モヨリノ)'
!

url
	^ 'http://moyo-reno.com/'
! !

Place subclass: #NewCast
	instanceVariableNames: ''
	package: 'DyNagoya'!

!NewCast methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市東区葵３丁目２２−８'
!

name
	^ 'ニューキャスト'
!

url
	^ 'http://www.xmldo.jp/about/seminarroom/'
! !

Place subclass: #Syushin
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Syushin methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市中区錦１－１３－３１ミツワビル１Ｆ'
!

name
	^ '居酒屋 酒神'
!

url
	^ 'http://www.hotpepper.jp/strJ000021742/'
! !

Place subclass: #Tagen
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Tagen methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市千種区不老町'
!

name
	^ '名古屋大学多元数理科学棟'
!

url
	^ 'http://www.math.nagoya-u.ac.jp/ja/direction/campus.html'
! !

Place subclass: #Takoichi
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Takoichi methodsFor: 'not yet classified'!

address
	^ '名古屋市中区大須3-10-11'
!

name
	^ 'たこいち 大須店'
!

tel
  ^ '０５２－２５１－３０３３'
!

url
	^ 'http://tako1.net/'
! !

Place subclass: #Vinceness
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Vinceness methodsFor: 'not yet classified'!

address
	^ '名古屋市中区錦3-6-29 サウスハウスB1'
!

name
	^ 'カフェ ヴァンサンヌドゥ'
!

url
	^ 'http://www.cafe-deux.com/cgi-bin/cafe-deuxcom/siteup.cgi?category=5&page=1'
! !

Place subclass: #WindMonad
	instanceVariableNames: ''
	package: 'DyNagoya'!

!WindMonad methodsFor: 'not yet classified'!

address
	^ '愛知県名古屋市緑区鳴海町大清水69−47'
!

name
	^ '風のモナド'
!

url
	^ 'http://www.facebook.com/IhatovuCultureSchool'
! !

Place subclass: #ZTres
	instanceVariableNames: ''
	package: 'DyNagoya'!

!ZTres methodsFor: 'not yet classified'!

address
	^ '名古屋市中村区椿町3番19号ウイングビル2F'
!

name
	^ 'Cafe Z-TRES'
!

url
	^ 'http://www.forvex.co.jp/ztres/'
! !

Widget subclass: #Screen
	instanceVariableNames: 'index page'
	package: 'DyNagoya'!

!Screen methodsFor: 'action'!

fade: aPage
	self flip: aPage before: 'fadeOutDown' after: 'fadeInUp'
!

flip: aPage
	self skew: aPage
!

flip: aPage before: beforeMethod after: afterMethod
	self animateOut: (self current) method: beforeMethod.
	self nextIndex.
	page := aPage.
	aPage updateToJQuery: (self current).
	self animateIn: (self current) method: afterMethod
!

roll: aPage
	self flip: aPage before: 'rollOut' after: 'rollIn'
!

skew: aPage
	self flip: aPage before: 'lightSpeedOut' after: 'lightSpeedIn'
! !

!Screen methodsFor: 'initialization'!

initialize
	index := 1
! !

!Screen methodsFor: 'private'!

animateIn: jq method: aString
  jq show; toggleClass: aString.
  [jq toggleClass: aString]  valueWithTimeout:1000
!

animateOut: jq method: aString
  jq toggleClass: aString.
  [jq hide; toggleClass: aString]  valueWithTimeout:1000
!

current
	^ ('#layer', index) asJQuery
!

layers
	^ { '#layer1'. '#layer2' }
!

nextIndex
	index := index \\ (self layers size ) + 1.
	^ index
!

page
  ^ page
! !

!Screen methodsFor: 'rendering'!

renderOn: html
	html div id: 'screen'; with: [
		(1 to: 2 ) do: [ html div id: 'layer', %1; class: 'animated' ]
	]
! !

Screen class instanceVariableNames: 'single'!

!Screen class methodsFor: 'not yet classified'!

add: aBlock
	Screen new page do: aBlock
!

new
	single ifNil: [ 
		single := super new.
	].
	
	^ single
!

put:  aWidget
	aWidget appendToJQuery: self new current
!

title: aString
	Screen new flip:  (Page new title: aString)
! !

Widget subclass: #ToolBar
	instanceVariableNames: 'menu'
	package: 'DyNagoya'!

!ToolBar methodsFor: 'not yet classified'!

clearMenus
	('a.menu, .dropdown-toggle' asJQuery parent: 'li') removeClass: 'open'
!

renderAbout: html
  html li class: 'dropdown class'; with: [ 
	html a style: 'cursor: pointer'; class: 'dropdown-toggle'; at: 'data-toggle' put: 'dropdown'; onClick: [ 'li.dropdown' asJQuery addClass: 'open'  ]; with: 'Menu'.
	html ul class: 'dropdown-menu'; with: [
		html li: [ html a style: 'cursor: pointer';onClick: [ AboutDyNagoya pan. self clearMenus ]; with: 'About DyNagoya' ].
		html li: [ html a style: 'cursor: pointer'; onClick: [ AboutSmalltalk pan. self clearMenus ]; with: 'About Smalltalk' ].
		html li: [ html a style: 'cursor: pointer'; onClick: [ Links pan. self clearMenus ]; with: 'Links' ]
	]
  ].
  '#container' asJQuery bind: 'click' do: [self clearMenus ]
!

renderOn: html
	html div class: 'fill'; with:[
		html div class: 'container'; with:[
			html ul style: 'float:right'; class: 'nav'; with:[
				Login new appendToBrush: html li.
			].
			html ul style: 'float:left'; class: 'nav'; with:[
				html li: [ html a href: '#'; onClick: [ Browser openOn: EntryPoint ]; with: 'Browser' ].
				html li: [ html a style: 'cursor: pointer'; onClick: [ DialogBox new widget: (SourceArea new); fontSize: '20px'; title: 'Workspace'; modal: false; open ]; with: 'Workspace' ].
				html li: [ html a href: '#'; onClick: [ EntryPoint start ]; with: 'Redraw' ].
				self renderAbout: html.
				html li: [ html a href: 'http://twitter.com/dynagoya_info'; with: 'Twitter' ].
				html li: [ html a href: 'https://github.com/maeda-/DyNagoya-Info'; with: 'GitHub' ].
			]
		]
	]
! !

