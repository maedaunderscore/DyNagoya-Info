Smalltalk current createPackage: 'CodeModification' properties: #{}!
Object subclass: #Mod
	instanceVariableNames: ''
	package: 'CodeModification'!

!Mod class methodsFor: 'not yet classified'!

attr: name value: aValue
	^ name,'
  ^''', aValue, ''''
!

class: aClass attr: name value: aValue
	self class: aClass source: (self attr: name value: aValue)
!

class: aClass source: source
    | compiler method node | 
    compiler := Compiler new.
    compiler source: source.
    node := compiler parse: source.
    node isParseFailure ifTrue: [
      		^window alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].
    compiler currentClass: aClass.
    method := compiler eval: (compiler compileNode: node).
    method category: 'accessing'.
    aClass addCompiledMethod: method.
    compiler setupClass: aClass.
! !

