Smalltalk current createPackage: 'Kernel-Classes' properties: #{}!
Object subclass: #Behavior
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!Behavior commentStamp!
Behavior is the superclass of all class objects. 

It defines the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).
Instances know about the subclass/superclass relationships between classes, contain the description that instances are created from, 
and hold the method dictionary that's associated with each class.

Behavior also  provides methods for compiling methods, examining the method dictionary, and iterating over the class hierarchy.!

!Behavior methodsFor: 'accessing'!

allInstanceVariableNames
	| result |
	result := self instanceVariableNames copy.
	self superclass ifNotNil: [
	    result addAll: self superclass allInstanceVariableNames].
	^result
!

allSubclasses
	| result |
	result := self subclasses.
	self subclasses do: [:each |
	    result addAll: each allSubclasses].
	^result
!

ancestors
	^ (self unfold: [ { %1 superclass. %1 superclass } ]) default: {}
!

comment
    ^(self basicAt: 'comment') ifNil: ['']
!

comment: aString
    self basicAt: 'comment' put: aString
!

commentStamp
    ^ClassCommentReader new
	class: self;
	yourself
!

commentStamp: aStamp prior: prior
        ^self commentStamp
!

instanceVariableNames
	<return self.iVarNames>
!

methodAt: aString
	<return smalltalk.methods(self)[aString]>
!

methodDictionary
	<var dict = smalltalk.HashedCollection._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict>
!

methodsFor: aString
	^ClassCategoryReader new
	    class: self category: aString;
	    yourself
!

methodsFor: aString stamp: aStamp
	"Added for compatibility, right now ignores stamp."
	^self methodsFor: aString
!

name
	<return self.className || nil>
!

protocols
    | protocols |
    protocols := Array new.
    self methodDictionary do: [:each |
	    (protocols includes: each category) ifFalse: [
		protocols add: each category]].
    ^protocols sort
!

protocolsDo: aBlock
	"Execute aBlock for each method category with
	its collection of methods in the sort order of category name."

	| methodsByCategory |
	methodsByCategory := HashedCollection new.
	self methodDictionary values do: [:m |
		(methodsByCategory at: m category ifAbsentPut: [Array new])
 			add: m]. 
	self protocols do: [:category |
		aBlock value: category value: (methodsByCategory at: category)]
!

prototype
	<return self.fn.prototype>
!

subclasses
	<return smalltalk.subclasses(self)>
!

superclass
	<return self.superclass || nil>
!

withAllSubclasses
	^(Array with: self) addAll: self allSubclasses; yourself
! !

!Behavior methodsFor: 'compiling'!

addCompiledMethod: aMethod
	<smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self)>
!

compile: aString
	self compile: aString category: ''
!

compile: aString category: anotherString
	Compiler new
		install: aString forClass: self category: anotherString;
		setupClass: self
!

removeCompiledMethod: aMethod
	<delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);>
! !

!Behavior methodsFor: 'instance creation'!

basicNew
	<return new self.fn()>
!

new
	^self basicNew initialize
! !

!Behavior methodsFor: 'testing'!

canUnderstand: aSelector
	^(self methodDictionary keys includes: aSelector asString) or: [
		self superclass notNil and: [self superclass canUnderstand: aSelector]]
!

inheritsFrom: aClass
	^aClass allSubclasses includes: self
! !

Behavior subclass: #Class
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!Class commentStamp!
Class is __the__ class object. 

Instances are the classes of the system.
Class creation is done throught a `ClassBuilder`!

!Class methodsFor: 'accessing'!

browse
	Browser openOn: self
!

browser
	^  (ClassBrowser hierarchy: self) target: self; yourself
!

category
	^self package ifNil: ['Unclassified'] ifNotNil: [self package name]
!

package
	<return self.pkg>
!

package: aPackage
	<self.pkg = aPackage>
!

rename: aString
	<
		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	>
! !

!Class methodsFor: 'class creation'!

subclass: aString
	"Kept for compatibility."
	^self subclass: aString instanceVariableNames: '' package: nil
!

subclass: aString instanceVariableNames: anotherString
	"Kept for compatibility."
	^self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for compatibility."
	self deprecatedAPI.
	^self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Just ignore class variables and pools. Added for compatibility."
	^self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ClassBuilder new
	    superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3
! !

!Class methodsFor: 'printing'!

printString
	^self name
! !

!Class methodsFor: 'testing'!

isClass
	^true
! !

Behavior subclass: #Metaclass
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!Metaclass commentStamp!
Metaclass is the root of the class hierarchy.

Metaclass instances are metaclasses, one for each real class. 
Metaclass instances have a single instance, which they hold onto, which is the class that they are the metaclass of.!

!Metaclass methodsFor: 'accessing'!

instanceClass
	<return self.instanceClass>
!

instanceVariableNames: aCollection
	ClassBuilder new
	    class: self instanceVariableNames: aCollection
! !

!Metaclass methodsFor: 'printing'!

printString
	^self instanceClass name, ' class'
! !

!Metaclass methodsFor: 'testing'!

isMetaclass
	^true
! !

Object subclass: #ClassBuilder
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!ClassBuilder commentStamp!
ClassBuilder is responsible for compiling new classes or modifying existing classes in the system.

Rather than using ClassBuilder directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.!

!ClassBuilder methodsFor: 'class creation'!

class: aClass instanceVariableNames: aString
	aClass isMetaclass ifFalse: [self error: aClass name, ' is not a metaclass'].
	aClass basicAt: 'iVarNames' put: (self instanceVariableNamesFor: aString).
	self setupClass: aClass
!

superclass: aClass subclass: aString
	^self superclass: aClass subclass: aString instanceVariableNames: '' package: nil
!

superclass: aClass subclass: aString instanceVariableNames: aString2 package: aString3
	| newClass |
	newClass := self addSubclassOf: aClass
				named: aString instanceVariableNames: (self instanceVariableNamesFor: aString2)
				package: (aString3 ifNil: ['unclassified']).
	self setupClass: newClass.
	^newClass
! !

!ClassBuilder methodsFor: 'private'!

addSubclassOf: aClass named: aString instanceVariableNames: aCollection
	<smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString]>
!

addSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName
	<smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString]>
!

copyClass: aClass named: aString
	| newClass |

	newClass := self 
		addSubclassOf: aClass superclass
		named: aString 
		instanceVariableNames: aClass instanceVariableNames 
		package: aClass package name.

	self setupClass: newClass.

	aClass methodDictionary values do: [:each |
		Compiler new install: each source forClass: newClass category: each category].

	aClass class methodDictionary values do: [:each |
		Compiler new install: each source forClass: newClass class category: each category].

	self setupClass: newClass.
	^newClass
!

instanceVariableNamesFor: aString
	^(aString tokenize: ' ') reject: [:each | each isEmpty]
!

setupClass: aClass
	<smalltalk.init(aClass);>
! !

Object subclass: #ClassCategoryReader
	instanceVariableNames: 'class category chunkParser'
	package: 'Kernel-Classes'!
!ClassCategoryReader commentStamp!
ClassCategoryReader represents a mechanism for retrieving class descriptions stored on a file.!

!ClassCategoryReader methodsFor: 'accessing'!

class: aClass category: aString
	class := aClass.
	category := aString
! !

!ClassCategoryReader methodsFor: 'fileIn'!

scanFrom: aChunkParser
	| chunk |
	[chunk := aChunkParser nextChunk.
	chunk isEmpty] whileFalse: [
	    self compileMethod: chunk].
	Compiler new setupClass: class
! !

!ClassCategoryReader methodsFor: 'initialization'!

initialize
	super initialize.
	chunkParser := ChunkParser new.
! !

!ClassCategoryReader methodsFor: 'private'!

compileMethod: aString
	Compiler new install: aString forClass: class category: category
! !

Object subclass: #ClassCommentReader
	instanceVariableNames: 'class chunkParser'
	package: 'Kernel-Classes'!
!ClassCommentReader commentStamp!
ClassCommentReader represents a mechanism for retrieving class descriptions stored on a file.
See `ClassCategoryReader` too.!

!ClassCommentReader methodsFor: 'accessing'!

class: aClass
	class := aClass
! !

!ClassCommentReader methodsFor: 'fileIn'!

scanFrom: aChunkParser
	| chunk |
	chunk := aChunkParser nextChunk.
	chunk isEmpty ifFalse: [
	    self setComment: chunk].
! !

!ClassCommentReader methodsFor: 'initialization'!

initialize
	super initialize.
	chunkParser := ChunkParser new.
! !

!ClassCommentReader methodsFor: 'private'!

setComment: aString
    class comment: aString
! !

Object subclass: #ClassSorterNode
	instanceVariableNames: 'theClass level nodes'
	package: 'Kernel-Classes'!

!ClassSorterNode methodsFor: 'accessing'!

getNodesFrom: aCollection
	| children others |
	children := #().
	others := #().
	aCollection do: [:each |
		(each superclass = self theClass)
			ifTrue: [children add: each]
			ifFalse: [others add: each]].
	nodes:= children collect: [:each |
		ClassSorterNode on: each classes: others level: self level + 1]
!

level
	^level
!

level: anInteger
	level := anInteger
!

nodes
	^nodes
!

theClass
	^theClass
!

theClass: aClass
	theClass := aClass
! !

!ClassSorterNode methodsFor: 'visiting'!

traverseClassesWith: aCollection
	"sort classes alphabetically Issue #143"

	aCollection add: self theClass.
	(self nodes sorted: [:a :b | a theClass name <= b theClass name ]) do: [:aNode |
		aNode traverseClassesWith: aCollection ].
! !

!ClassSorterNode class methodsFor: 'instance creation'!

on: aClass classes: aCollection level: anInteger
	^self new
		theClass: aClass;
		level: anInteger;
		getNodesFrom: aCollection;
		yourself
! !

