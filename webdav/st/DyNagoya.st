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
  ^'32px'
!

y
  ^'18px'
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
  ^'60px'
!

y
  ^'505px'
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
		css: 'animation-duration' put: '1.5s';
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
] valueWithTimeout: 1500
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
  ^  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAABOCAYAAAAqyQ2iAAAPKklEQVR4nO2dW29c1RXH+Rb+BiO19OIXqxeqeZm2qmj9MJSqxQ+mDzRFfoBWTacSpVzcqhQiSxUQLNFysShUmUpFxSAIU4IIE5PYuDCTKTgxttPYSUwST2J77GPP2Offh+OJJ55znb322Xsfr5+0XqJoZp09a/29z76sdQuYxGPbQKMObFq71qgDsFV7xjCMTG5R7QBDjA3MzwHPDgE/ziyiu6via+nUJ/jdwFV8UADqlmrnGYahpE3gcwM20qlP8P2ecxJsBgeyl/HgwCr+OtTAu6PAhTkWFgquLAL39a8FCnqQ9facwUfFLdWPwzAMAW0Cf0emKiwSndpdmVm8OlJHdVHFUJiJZQF3SvnNxnB1YVv14zEMI0CbwGcVCvxeezy3hNWqimExg/cKkP4b/GvksurHZBimQ7QW+Kb19pRxZUHF8OjLozn54t60J3KfqX5chmE6wAiBb9rPs2exXeejH3dnrdjH/lBuSvVjMwwTEaMEvmmnCvt3V3ag31Y27uOFJdWPzzBMBIwU+O6uCu7NfuIc8N5HfFCMb1nG3U4BNm+8MowpGCvwjo2hYe2PI33bNvAV5eNdwZHhedVDwTBMSAwXeEfksdVQMXaxcnhI9ey9Zbx5Fs8wRpAAga8gnXpPxdjFRmNLj9l700rFa6qHhGGYECRC4Lu7kn3K4+8juszeHevteV/1kDAME4LECHx3VwXzU+sqxlA6X9RgbG+2ST6uyjAGkCiB7+46nriTNbWaXrP3pP8xZZgkkTCBr+DFoRkV4yiNyQk9Bf7I8Dmpz729BVg1YLkKrOxYbdmMMseNuuPr0uKurTV915hWvzdqwNVFZ9w3LWg/5iagIqYTJ/DdXSU0rDXPB15ZBo6NAicK0ezYKFzr4mzbwDsdfN6JAjBdDv6BHomxJEEUuzc7ESnQglivAa/ngXuyy6G+/wc9M3hqsIbpMmArPim7XAVeGgZu75kP5ftdmVm8lXdEXyWry8Ab+XBlpZ0xP4NXhi3S+lCm5WMUdIjpBAp8BYdyFc8Hfm64c8EccXk7WFjo/PPSqaOBPxBFdc906iTWd8RkvQZ8MzUj/Jl9mVMRwsyb8SJwG4E/B7LncGmOxKVQbNvAaF78dFM6dRonC4jt6KltA/8eBb4lOOaO3+KvJKblYxh0imlygQ9aItnecmY8HxaBBwY28VXBQXA377PaIidS3JYlPl/s/PN6e94N/IHE/+C23z61beBLwmN8LNB3Pz6bknP0s7enfOOPmSyOS6rieTS/KtXv8SIk5NspnJ/qfLppWj76oWNMkwt8J2uz40X6gZktu4+IaQH1nZ6LQuPg9TYjfvSy87IFgzEsOx3NX+/INz8aW7Jq7+9aOnWS/IRSHH4/ketsT8a0fPRC15jWQuBlDJLXuXiTAoqiPIHXpSQRvx2LLvCNLeAbBK+uYe1g/+lI/vlRrcZ52WwStSrNkk2cfqdTJyLHhEn56IbuMa2VwAOUl3reJP/8uAPKtoEvC47D9cVN18+OW+AtS/xZOrG+zGRoH72YnlKx0V0SFnk1fo9FegMxKR/3YkJMayfwFD40ba3avglkUkBRCPzSgvtGWJwCb1lqSy3cm/0olJ9unFUikk2b7LiY3n/LKv0ew3Z9I5SfJuVjK6bEtJYCT3W5Z2mh/TKOSQGVFIHX4Sbu+6NXQvnaypriJO7uqiCdeiey39eX1R+tDVsfyqR8bMWUmNZS4AGaxhZv5z9v+1yTAioJAn9oUL3Y3PA3YtVR0Q1uKota3O3rMa4J+1mYS4cm5WMTk2JaW4GnuMHp5otJAWW6wFeruiSCY4cHz/j624r65iq7FqVa6qt5ffzu7qrAWvZfYjIpHwHzYlpbgbcs8TO7LPBqBf7bmsyAd20y9Cxe/J4ArXltlreiS1OYVgtaKzYpHwHzYlpbgacQNxZ4dQJ/bk6vmU7TXhsJ7kj11qh+vvvdzm7ytDZNYW42vz9OJuWjiTHNAq9xQJks8PqWvCj4Bx702EBrt+O+Pus4e2+aX90ik/LRxJhmgdc4oEwV+I26jCvxVFZCveb9SqvbGmuruR37bVJReiwyyLyXEUzJR1NjWluBp2hTxwKvRuB1LXHctE8nap5jTrNJWcLJwvaNioAbFvB7glva44UlT7/pqo6W8KfcOh4cuIb7+9fIxny27F7h1ZR8NDWmtRV4ivUuFng1Ak8lNg8NXER10SmdumkB/yC65ex38qA/awl+/jHPm5wnBU/mHBn2XmuluC7/wlD7uep6naaOzTOD7kcmTclHU2NaW4F/XqCMqJ8vpgQUYK7Ai58fL3lWKFyrib/Z+fWUvVXosycDb3CK/AHxiheK9ffxgn+5wtyAWLx4+W5KPpoa09oKvFiiOeb2WmhKQAFmCjyF2CzO+bcDFL2p6VXLXtT310Yu+voNiJU+6MuckPJbhm3eInZ01L2dpgn5aHJMaynw7xLV2+ZaNPELvKjPjwwEHwcEgF8LzCjTKXehFPU9zFl1sb0ld5EU/S2DLiM1EdufcI8XE/LR5JjWTuDpjnuNGTtjaLIfBd6tfpAbYns06nwX+w53v8VO/rjniRuLQjGzfwVeZUxrJ/DfJbop5vU6KxJQbq/gLPC0Pnv5uxexm85yfJ+fMlHgwxeNE4sZeoGPKx9NjmltBP5alba2stftLpGAOpT7uO3zWOBpfQ6zzCH+PXJ8D1P5UYbfYr9l+PINZ4RKJ9MLfFz5aHJMKxf49RrwBwntrrwuhYgE1GGXo14iTX6TKPBxbFSKj428DeIXhhZi91skBp0xDy7fAIhqA73Ax5WPJse0XIG3b7ZGHagtA2fKwLND4p3dvcyv+p5Yx6j26+IPC/xxSqLAizf0DjejlJEMAPA1gpjsy1RuapK8vQVMFAHY21L83qiL/mGaRMNyv4jURLSBiNcxPhPy0eSYlibwKsuW+tXPFm0J2Jf5GBs1ADZwRPCzkijwFDEUpvG0LIGnuxFaQXdXCemWPxjNzbbOxdjbb/Hql2PY9Ljg+xHBLc6D/e3LKYA5+WhqTEsTeLreqlHtmO8gqvMrWkCJ/+COqRD45wguqXV3VXA0v4m65cyAl6vAS8PY+V5bmsDLrAO/tLACQI7Ai9/Adez5oRWsLTtv24sLwH39DZLP9eo+ZEo+mhrTiRP4oO43OpWCTarAyy2rekraUgcgt6iUTIGnujsiy7zO2puSj6bGdKIEPkznG7GzvPEFFGCuwFP4HfS9sgQeoJsNt/8W8gR+jaBBjjx703OsTclHU2M6UQIf5rypuLDFE1BUQaWqHrzIZleY75Up8KKnUrx/C3kCD9D0MZZhfs2hTcpHE2M6MQIfpuMNoFdjhCQLPEXLRb/vlSnwAHCHhOYOsgVetJ6JHPPfEzMpH02M6YQIvPcroBvileHiCSiTBR6QNeOJR+BlNP6QLfAA9SkgcQvaEwPMyUcTYzoBAj8WWKJ1L7ps7CRd4Cmatnh9r2yBB4DDxD1O4xB4vWbE3mWZWzElH02MacMF/njg2VI3dEmCpAs8IOPYYXwCDwA/JFyqiUPgAV26D/m3RmzFlHxsYlJMGyvwvT0ToavguUHRUER2QCVB4AHqzb94BR6gK4AXl8ADwDPEbx9Rza8tohsm5GMrpsS0kQL/RE685rz49WP5AZUUgQcoNy3jF3gA+CnB0ck4BR4AHlW0Hh/UHcoNE/JxLybEtHEC/+lEuNKbYVB9RGs/CTwA/Eaw7ZvsZAjiRcFZZlPg4/T7hZhnxjPlaPthreiej27oHtPGCPzB/lkgXOOZSIjeUEunzkoLqKQJPCBeL0SlwANOWesfdZgjSwsrWKmJNueI7jdFLZkwY1qrdjSkN6FzPnqhc0xrL/AHsjNYJQgcP6pV0U2ekpSASqLAA8DFBfFlClUC3+R6FfjzYLjnSKdO47mhFcC2sSRw/NKr72YY1mrA9yQdRzzYPy20H7YXXfPRD11juk3gRdeVKAS+t+cM3spvYotuNSYQ2waGI2xM9WU+xWRRLBCDAoridIGOAt9kNN/JxZHdZIhrLTuIRh1YmANOTwAnCsBkEThbBpYWAXvPW6fIkUARAWry8QTdiZXenjKu+Je/7xgd8zEMusV0m8DfLbiZ1LyWHKX62l2Z83hysIbpMmIVdTdsG5iZcurV35Ndwk8yF3bsPB7LXcd/ikDdcv7vacEa2Q8HNOO1beBWwST06iYjfpHHvQF0J0yVgfv710J+7+SNZOh8U47O96h8QWDMvUrudsL5OeCBgc0O/CjhqcGq9LfqJjrlYxR0iek2gSdjp8HHpgVYNafRx0rVsdqy8+9Qk2NkiDaHCNtJZ99gOyVUiwXgL0PAL/qv4WfZyzt2CQ8OXMMrw9GO3+mE6Pry2/kLUvxaXQY+LAJ/GwZ+O7CKX/Zf27GreCy3in+OANNlOHXXNUbLfFQc0/IEPuFQXHYI24yXMR+Zb2MM56MXLPAdUK1SFB0K3+yY0ZOwqzybdXFxp943SBKcj96wwDcJmaxvE9XNSKfekfs8jFSaG2KP5y77rkcfJ2rE0Zc5Ed/D6QDnIwks8NhN1r7M9E2bNk22t4DSBHAbYZNwXn83m/YjbSUcyC7gycENvDwM/DG3RVpadrbs3xQ7SXA+0sECD+/z5unUWUn1nycjV8Bk9EJuh5+95l9TPWlwPtLBAo+4k7WCRwiPYzFqiDNmZJ2e0RXORzpY4BF/QIUto8roS3wxo+7Mvio4H+lggUe8AXUoN6X6cRkC4oqZ8cKS6keNHc5HOljgEWdA8VG3pBBHzITtiJQ0OB/pYIFHfAE1P7Wu+lEZIuTHzKnEbvwFwflIBws84gmoUnFV9WMyhMiNmRJq1WTPLP3gfKSDBR7yA2q/BNN+Ql7MTMKK3hApUXA+0sECD7kBNT/F9UOSiJyYGUPDktDVxjA4H+lggYe8ZN3vM7EkQx0z1E0zTIbzkQ4WeNA01mi1pwcvqX4kRjJ0MTOG/03xrL0Vzkc6WOBBN2N4aOAiNjWvmc3QcadA97Nf9V/AxTnVT6AnnI90sMDvsGEBr+eB23vmIwVRX2YWHxTaW7Mx+4PtLafj0EvDTsehtEsBrHTqLA5kL+GV4boj6rwSEwjnIw0s8C7YO11YyhPAG3mn083LO/ZmHqhMOJ2pOFEZT2xwfBDB+dg5LPAMwzAJhQWeYRgmobDAMwzDJJT/A0Adrv0nAIIWAAAAAElFTkSuQmCC'
!

x
  ^'796px'
!

y
  ^'533px'
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

DraggableWidget subclass: #RaphaelWidget
	instanceVariableNames: ''
	package: 'DyNagoya'!

!RaphaelWidget methodsFor: 'accessing'!

height
	^ 300
!

rawHtml
	^''
!

width
	^ 300
! !

!RaphaelWidget methodsFor: 'rendering'!

renderBodyOn: html
	self renderRaphael: (html div asJQuery)
!

renderRaphael: jq
! !

RaphaelWidget subclass: #Dolphin
	instanceVariableNames: 'body left right eye group'
	package: 'DyNagoya'!
!Dolphin commentStamp!
anim := Dolphin new rightHand collect: [ :each | (<Raphael.animation({path: each}, 12000, "elastic")>)]
x animate: (anim at: 2)!

!Dolphin methodsFor: 'accessing'!

attribute
	^ #{
		'stroke-linejoin' -> 'round'.
		'stroke' -> '#18A8E7'. 
		'stroke-linecap' -> 'round'.
		'stroke-miterlimit' ->10.
		'stroke-width' -> 6.
		'fill' -> 'none'
	}
!

attributeFill
	^ #{
		'stroke' -> 'none'. 
		'fill' -> '#18A8E7'
	}
!

attributeLine
	^ #{
		'stroke-linejoin' -> 'round'.
		'stroke' -> '#18A8E7'. 
		'stroke-linecap' -> 'round'.
		'stroke-miterlimit' ->10.
		'stroke-width' -> 6.
		'fill' -> 'none'
	}
!

height
  ^800
!

renderRaphael: jq
  | paper |
	paper := (< Raphael(jq[0], this._width() + 'px', this._height() + 'px') >).
	body := paper path:'M265.875,60.562c4.945,0.915,9.002-1.543,13.111-3.589c6.877-3.423,13.809-7.102,21.409-8.062  c10.532-1.332,21.151-2.386,31.862-1.365c6.072,0.578,12.039-0.5,17.229-4.067c3.952-2.717,4.489-5.77,1.88-9.724  c-1.647-2.495-3.755-4.458-6.741-5.254c-7.648-2.042-15.043-4.982-22.873-6.39c-4.138-0.744-8.256-0.19-12.376,0.033  c-5.095,0.275-10.132,0.946-15.015,2.566c-0.852,0.283-1.789,0.044-2.639,0.757c-1.956,1.641-4.591,1.285-6.268,0.274  c-3.649-2.199-7.585-3.846-11.037-6.51c-5.219-4.027-11.682-5.616-17.898-7.666c-12.604-4.154-25.36-3.856-38.274-2.229  c-6.683,0.842-13.335,1.689-19.877,3.386c-13.55,3.514-26.072,9.438-38.214,16.204c-4.805,2.678-9.539,5.449-14.031,8.777  c-6.013,4.456-10.667,10.13-15.96,15.211c-7.019,6.735-12.078,15.186-18.617,22.271c-3.551,3.847-4.94,8.25-6.853,12.594  c-2.727,6.194-6.057,12.029-9.876,17.555c-3.282,4.747-5.514,9.999-8.243,15.012c-8.694,15.969-15.794,32.657-22.352,49.566  c-2.622,6.762-4.411,13.857-6.199,20.937c-3.108,12.306-4.779,24.914-8.157,37.148c-1.171,4.241-3.487,5.847-7.861,6.42  c-8.2,1.074-15.603,4.232-22.119,9.347c-2.858,2.242-5.862,4.321-8.268,7.104c-2.543,2.939-2.993,7.798-1.132,11.264  c3.708,6.907,9.411,10.221,17.264,10.151c5.749-0.05,11.5,0.178,17.249,0.354c4.16,0.127,7.261,3.152,9,8.611  c2.842,8.918,11.742,13.288,20.624,10.122c0.633-0.227,1.259-0.479,1.875-0.75c7.933-3.475,8.872-5.381,5.95-13.479  c-1.287-3.567-1.874-7.12-1.888-10.894c-0.01-2.719,0.505-5.205,2.35-7.09c4.48-4.577,6.834-10.464,10.026-15.822  c1.497-2.514,3.774-4.385,5.219-6.77c4.353-7.185,10.89-12.281,17.098-17.412c12.106-10.005,22.708-21.711,35.491-30.913  c8.67-6.24,17.112-12.817,26.288-18.313c2.6-1.557,4.93-3.611,6.55-5.803c3.22-4.353,6.796-5.028,11.417-3.252 M339.75,48c1.834,5.033-0.693,8.815-3.322,12.785c-4.779,7.216-12.437,8.928-19.948,10.756c-4.881,1.188-9.417,3.264-14.194,4.701  c-3.246,0.976-5.095,4.537-8.63,5.607c-2.407,0.729-4.481,2.499-6.789,3.632c-7.341,3.604-12.549,9.449-16.832,16.166  c-4.147,6.504-8.603,12.71-13.829,18.426c-2.882,3.151-5.65,5.812-9.732,7.644c-4.16,1.867-8.32,4.111-12.189,6.774  c-1.703,1.171-4.408,0.884-6.658,1.259'.
	back := paper path: 'M133.125,38.625c-4.107-0.772-8.007,0.396-12.03,0.87c-6.17,0.728-12.092,2.66-18.338,3.004c-4.782,0.264-9.43,1.931-14.241,2.613  c-7.69,1.09-15.257,2.901-22.548,5.807c-2.819,1.123-5.457,2.479-7.809,4.251c-6.609,4.98-3.16,10.782,1.836,13.09  c3.7,1.71,7.493,2.532,11.626,2.707c8.816,0.374,17.598,1.063,25.926,4.674c3.07,1.33,6.395,2.127,9.328,3.858'.
	left := paper path: 'M268.875,118.125c7.638,6.705,15.657,13.134,16.703,24.373c0.261,2.799,0.424,5.576-0.593,8.246  c-1.228,3.224-3.181,3.883-6.357,2.25c-0.646-0.333-1.366-0.633-1.861-1.136c-8.311-8.448-17.668-15.913-24.392-25.858'.
	right := paper path: (self rightHand at: 1).
	eye := paper path: 'M232.625,38.239c-4.994-0.119-9.137-4.363-8.896-9.112c0.332-6.519,4.703-11.984,9.547-11.936  c4.507,0.044,8.937,5.938,8.812,11.724C241.979,34.055,237.609,38.358,232.625,38.239z'.
	group := paper group.
	group scale: 1.8.
	{ body. back. left. right } do: [ %1 attr: self attributeLine. group push: %1].
	{ eye } do: [ %1 attr: self attributeFill. group push: %1]
!

rightHand
	^ {
'M223.125,118.125c0.417,5.931,2.029,11.581,3.531,17.307c0.658,2.505-0.927,5.636-1.144,8.564c-0.339,4.568-1.907,8.836-3.37,13.177 c-1.373,4.073-2.501,8.14-4.513,12.02c-1.344,2.593-2.869,4.886-5.043,6.636c-3.392,2.73-6.612,5.621-9.742,8.641 c-1.66,1.604-3.57,2.8-5.945,3.49c-4.725,1.371-5.946,0.653-6.434-4.205c-0.455-4.533,1.97-8.28,3.162-12.342 c0.366-1.247,0.838-2.443,1.034-3.781c0.474-3.223,1.014-6.338,2.457-9.441c2.855-6.14,4.861-12.554,6.037-19.391 c0.927-5.396,2.169-10.666,1.969-16.174'.
'M219.027,108.788c2.75,5.272,6.485,9.807,10.15,14.457c1.604,2.033,1.399,5.537,2.371,8.308c1.516,4.324,1.781,8.861,2.175,13.426 c0.368,4.283,0.958,8.463,0.664,12.822c-0.196,2.914-0.679,5.623-1.972,8.098c-2.021,3.857-3.817,7.795-5.481,11.812 c-0.881,2.133-2.154,3.992-4.056,5.574c-3.784,3.145-5.191,2.973-7.578-1.285c-2.229-3.975-1.502-8.377-2.03-12.576 c-0.163-1.291-0.208-2.576-0.563-3.881c-0.853-3.145-1.602-6.215-1.518-9.637c0.166-6.77-0.559-13.451-2.212-20.188 c-1.306-5.317-2.271-10.644-4.656-15.614'
}
!

rightHand2
	^ 'M219.027,108.788c2.75,5.272,6.485,9.807,10.15,14.457c1.604,2.033,1.399,5.537,2.371,8.308c1.516,4.324,1.781,8.861,2.175,13.426 c0.368,4.283,0.958,8.463,0.664,12.822c-0.196,2.914-0.679,5.623-1.972,8.098c-2.021,3.857-3.817,7.795-5.481,11.812 c-0.881,2.133-2.154,3.992-4.056,5.574c-3.784,3.145-5.191,2.973-7.578-1.285c-2.229-3.975-1.502-8.377-2.03-12.576 c-0.163-1.291-0.208-2.576-0.563-3.881c-0.853-3.145-1.602-6.215-1.518-9.637c0.166-6.77-0.559-13.451-2.212-20.188 c-1.306-5.317-2.271-10.644-4.656-15.614'
!

style
	^ super style,	'width: 376px;'
!

width
  ^800
!

x
  ^'514px'
!

y
  ^'59px'
! !

Dolphin class instanceVariableNames: 's'!

!Dolphin class methodsFor: 'not yet classified'!

new
	s ifNil: [ s := super new ].
	^ s
!

tweet: msg
	^Twitter tweet: msg
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
	x: '', (window innerWidth * 0.98 - 600), 'px';
	y: '', (window innerHeight * 0.95 - 200), 'px'
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
	| page |
	page := TopPage new.
	[
	  '#screen' asJQuery remove.
	  Screen new appendToJQuery: ('body' asJQuery).
	  Screen new flip: page
	] valueWithTimeout: 2000
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
	height: 200;
	x: '', (window innerWidth * 0.98 - 350), 'px';
	y: '', (window innerHeight * 0.25), 'px'
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
  ^ Screen new flip: self new
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

Page subclass: #TimeSchedulePage
	instanceVariableNames: 'sessionPlace sessions index'
	package: 'DyNagoya'!

!TimeSchedulePage methodsFor: 'not yet classified'!

asCode
	^ sessions inject: 'grammer Sessions:list > sessions'
		into: [ %1, '
', %2 asCode]
!

calcTime
	| current |
	current := moment value: self start value: 'HH:mm'.
	sessions do: [ :session |
		current := session update: current
	].
	Mod class: self class source: (self asCode)
!

current
	index ifNil: [ index := 1].
	^ sessions at: index
!

done: now
	| prev |
	prev := self current.
	index := index + 1.
	prev done ifTrue: [
		prev setEnd: now.
		self  calcTime.
		^ prev
	] ifFalse: [
		^ self done
	]
!

drawSessions
	sessionPlace contents: [ :html || div |
		div := html div.
		sessions do: [ div with: %1 ]
	]
!

end
!

evaluate: code
	sessions :=(< smalltalk.Wakame.fn.prototype._Sessions().matchAll(code, "list")>).
	self drawSessions.
	self calcTime
!

initialize
	sessions := self sessions.
	index := 1
!

renderBody: html
	self title: html.
	sessionPlace := html div.
	self drawSessions.
	html a with: '[Edit]'; css: 'cursor' put:'pointer';
		onClick: [ ScheduleEditor open: self class].
	self calcTime
!

sessions
	^ {}
!

source
	^ (self class 
		methodDictionary at: 'sessions') 
	source lines allButFirst
	|> [ (%1 allButFirst) inject: %1 first into: [ %1, '
', %2]]
!

start
!

title: html
	^ ''
! !

TimeSchedulePage class instanceVariableNames: 's'!

!TimeSchedulePage class methodsFor: 'not yet classified'!

adjust: aTime
	| c min h m |
	min := (<Math.ceil((aTime.hours()*60 + aTime.minutes() - 2) / 5) * 5>).
	h := (<Math.floor(min / 60)>).
	m := (<Math.floor(min % 60)>).
	^ (< moment([0]).hours(h).minutes(m) >)
!

done
	^ self new done: TimeSchedulePage now
!

done: aTimeString
	^ self new done: (moment value: aTimeString value: 'HH:mm')
!

isOrdered: a and: b
	^ (a diff: b) < 0
!

new
	s ifNil: [ s := super new ].
	^ s
!

now
	| c |
	c := moment value.
	^ (< moment([0]).hours(c.hours()).minutes(c.minutes()) >)
! !

TimeSchedulePage subclass: #Wakame
	instanceVariableNames: ''
	package: 'DyNagoya'!

!Wakame methodsFor: 'accessing'!

grammer Sessions:list > sessions
〜タイムスケジュールを決める〜 : 15min
モナモナいうモナド入門[@hiratara] : 105min
休憩 : 15min
CoqによるMaybeモナドを証明(+ Coq入門)[@mzp] : 30min
休憩 : 5min
CoqによるKleisli構成の説明[@t6s] : 40min
休憩 : 5min
モッジとワドラーとStrong MonadとFreeモナド[@t6s] : 30min
休憩 : 5min
余モナド[@uskz] : 50min
バッファ(18:20まで)
〜 懇親会（ビアバッシュ） 〜 : 130min
! !

!Wakame methodsFor: 'not yet classified'!

ometa Sessions {
  fromTo :from :to = seq(from) <( ~seq(to) char )*>:body seq(to) -> body,
  eol = <( ~cr char )*>:body (cr | empty) -> body,
  cr = char:r ?{r.charCodeAt(0) == 10},
  number = <digit+>:x -> parseInt(x),
  list = (session:s eol -> s)*,
  session = withMinutes | withoutMinutes,
  withMinutes = ( other | rest | talk ):session spaces ':' spaces number: long "min" "!!"?:done 
	-> session._long_(long)._isDone_(done == "!!"),
  withoutMinutes = buffer:session "!!"?:done -> session._isDone_(done == "!!"),
  other = fromTo('〜',  '〜'): title -> smalltalk.OtherSession._new()._title_(title),
  talk = fromTo('', '['): title fromTo('', ']'): speaker -> smalltalk.TalkSession._new()._title_(title)._speaker_(speaker),
  rest = "休憩" -> smalltalk.RestSession._new(),
  buffer = fromTo("バッファ(", "まで)"):deadline -> smalltalk.BufferSession._new()._deadline_(deadline)
}
!

end
	^ '18:00'
!

start
	^ '13:00'
!

title: html
	html h1 with:[
		html span with: 'わかめのモナド浸し'.
		html span with: ' - 基礎セッション -'; css: 'font-size' put: '36px'
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

Widget subclass: #ScheduleEditor
	instanceVariableNames: 'source klazz'
	package: 'DyNagoya'!

!ScheduleEditor methodsFor: 'not yet classified'!

apply
  klazz new evaluate: source val
!

handleKeys: anEvent
    <
	if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 190) { // ctrl + greater
			self._apply();
			anEvent.preventDefault();
			return false;
		}
	}
    >
!

klazz: aClass
	klazz := aClass
!

renderOn: html
	source := html textarea 
		css: 'position' put: 'absolute';
		css: 'width' put: '95%';
		css: 'height' put: '98%';
		css: 'left' put: '12px';
		css: 'right' put: '12px';
		css: 'top' put: '2px';
		css: 'bottom' put: '2px';
		val: (klazz new source);
		onKeyDown: [ self handleKeys: %1 ]
!

source
  ^ source
! !

!ScheduleEditor class methodsFor: 'not yet classified'!

open: aClass
	| this |
	this := self new.
	this klazz: aClass.
	DialogBox new widget: this; modal: false; width: '50%'; title: 'Schedule Editor'; height: 400; 
		button: 'apply' action: [ this apply ];
	open.
	^ this source css: 'font-size' put: '1.5em'
! !

Widget subclass: #Screen
	instanceVariableNames: 'index page'
	package: 'DyNagoya'!

!Screen methodsFor: 'action'!

fade: aPage
	self flip: aPage before: 'fadeOutDown' after: 'fadeInUp'
!

flip: aPage
	self skew: aPage.
	^ aPage
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

Widget subclass: #SeminarSession
	instanceVariableNames: 'title start end body long isDone'
	package: 'DyNagoya'!

!SeminarSession methodsFor: 'not yet classified'!

done
	isDone := true.
	body >>= [ self drawBackground: %1].
	^ ((self class) = RestSession) not
!

drawBackground: html
	isDone ifTrue: [
		html css: 'background' put: 'gray'
	]
!

end: aString
	end := moment value: aString value: 'HH:mm'
!

initialize
	isDone := false
!

isDone: aBool
	isDone := aBool
!

long
	^long
!

long: aMinutes
	long := aMinutes
!

minCode
  ^'min', 
    (isDone ifTrue: [ '!!' ] ifFalse: [ '' ])
!

redraw
!

renderOn: html
	body := html div
!

setEnd: aTime
	end := aTime.
	start ifNotNil: [
		long := end diff: start unit: 'minutes'
	]
!

start: aString
	start := moment value: aString value: 'HH:mm'
!

title: aString
	title := aString
!

update: from
	self updateTime: from.
	self redraw.
	^ end
!

updateTime: from
	| end |
	start := from clone.
	end := from clone add: 'm' min: long.
! !

SeminarSession subclass: #BufferSession
	instanceVariableNames: 'deadline'
	package: 'DyNagoya'!

!BufferSession methodsFor: 'not yet classified'!

adjust
	| t |
	t := (TimeSchedulePage isOrdered: end and: deadline)
		ifTrue: [ end ] ifFalse: [ deadline ].
	t := (TimeSchedulePage isOrdered: start and: t)
		ifTrue: [ t ] ifFalse: [ start ].
	self setEnd: t clone.
	^ end clone
!

asCode
  ^ 'バッファ(', 
	(deadline format: 'HH:mm'),
	'まで)'
!

deadline: aString
	deadline := moment value: aString value: 'HH:mm'
!

initialize
	title := '休憩'
!

updateTime: from
	| t |
	start := (TimeSchedulePage isOrdered: from and: deadline)
		ifTrue: [ from ] ifFalse: [ deadline ].
	self setEnd:( (TimeSchedulePage isOrdered: from and: deadline)
		ifTrue: [ deadline ] ifFalse: [ from ]).
	^ end
! !

SeminarSession subclass: #RestSession
	instanceVariableNames: ''
	package: 'DyNagoya'!

!RestSession methodsFor: 'not yet classified'!

adjust
	self setEnd: (TimeSchedulePage adjust: end).
	^ end clone
!

asCode
  ^ '休憩 : ' , long, self minCode
!

initialize
	title := '休憩'
!

updateTime: from
	super updateTime: from.
	self setEnd: (TimeSchedulePage adjust: end).
	^ end
! !

SeminarSession subclass: #TalkSession
	instanceVariableNames: 'speaker'
	package: 'DyNagoya'!

!TalkSession methodsFor: 'not yet classified'!

asCode
  ^ title, '[', speaker, '] : ', long, self minCode
!

drawTitle
	^ '「', title, '」'
!

redraw
	body css: 'border' put: '1px solid black'; css: 'margin' put: '1px'; css: 'padding' put: '2px';
		css: 'font-size' put: '20px'.  
	self drawBackground: body.
	body contents: [ :html |
		html span with: (start format: 'HH:mm'), '〜' , (end format: 'HH:mm'); css: 'width' put: '200px'; css: 'display' put: 'inline-block'.
		html span with: (self speakerLink: html with: speaker);
			css: 'margin' put: '0 5px'; css: 'width' put: '200px'; css: 'display' put: 'inline-block'.
		html span with: self drawTitle
	]
!

speaker: aString
	speaker := aString
!

speakerLink: name
	(name match: '^@') 
		ifTrue: [ ^ [ html a href: 'http://twitter.com/', name; with: '@',name ] ]
		ifFalse: [ ^ '' ]
!

speakerLink: html with: name
	(name match: '^@') 
		ifTrue: [ ^ [ html a href: 'http://twitter.com/', name; with: name ] ]
		ifFalse: [ ^ name ]
! !

TalkSession subclass: #OtherSession
	instanceVariableNames: ''
	package: 'DyNagoya'!

!OtherSession methodsFor: 'not yet classified'!

asCode
  ^ '〜', title, '〜 : ', long, self minCode
!

drawTitle
	^ title
!

initialize
	super initialize.
	speaker := ''
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

