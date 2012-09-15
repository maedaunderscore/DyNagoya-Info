smalltalk.addPackage('Kernel-Objects', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.Object.comment="*Object is the root of the Smalltalk class system*. All classes in the system are subclasses of Object.\x0a\x0aObject provides default behavior common to all normal objects, such as: \x0a\x0a- access\x0a- copying\x0a- comparison\x0a- error handling\x0a- message sending\x0a- reflection\x0a\x0aAlso utility messages that all objects should respond to are defined here.\x0a\x0aObject has no instance variable.\x0a\x0a##Access\x0a\x0aInstance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `Object >> instanceVariableNames` answers a collection of all instance variable names.\x0aAccessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.\x0a\x0a##Copying\x0a\x0aCopying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.\x0aThe hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.\x0a\x0a##Comparison\x0a\x0aObjects understand equality  `#=` and identity `#==` comparison.\x0a\x0a##Error handling\x0a\x0a- `#halt` is the typical message to use for inserting breakpoints during debugging.\x0a- `#error:` throws a generic error exception\x0a- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.\x0a  Overriding this message can be useful to implement proxies for example."
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'collection handling',
fn: function (aCollection) {
    var self = this;
    return smalltalk.send([self], "__comma", [aCollection]);
    return self;
},
args: ["aCollection"],
source: ", aCollection\x0a\x09^ { self }, aCollection",
messageSends: [","],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"__minus_gt",
smalltalk.method({
selector: "->",
category: 'converting',
fn: function (anObject) {
    var self = this;
    return smalltalk.send(smalltalk.Association || Association, "_key_value_", [self, anObject]);
    return self;
},
args: ["anObject"],
source: "-> anObject\x0a\x09^Association key: self value: anObject",
messageSends: ["key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    return smalltalk.send(self, "__eq_eq", [anObject]);
    return self;
},
args: ["anObject"],
source: "= anObject\x0a\x09^self == anObject",
messageSends: ["=="],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_identityHash", []), "__eq", [smalltalk.send(anObject, "_identityHash", [])]);
    return self;
},
args: ["anObject"],
source: "== anObject\x0a\x09^self identityHash = anObject identityHash",
messageSends: ["=", "identityHash"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"__gt_gt_eq",
smalltalk.method({
selector: ">>=",
category: 'message handling',
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(aBlock, "_value_", [self]);
    return self;
},
args: ["aBlock"],
source: ">>= aBlock\x0a\x09^ aBlock value: self",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    var variables = nil;
    variables = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [function (each) {return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSON", [])]);}]);
    return variables;
    return self;
},
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09self class allInstanceVariableNames do: [:each |\x0a\x09\x09variables at: each put: (self instVarAt: each) asJSON].\x0a\x09^variables",
messageSends: ["new", "do:", "allInstanceVariableNames", "class", "at:put:", "asJSON", "instVarAt:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSONString",
smalltalk.method({
selector: "asJSONString",
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.JSON || JSON, "_stringify_", [smalltalk.send(self, "_asJSON", [])]);
    return self;
},
args: [],
source: "asJSONString\x0a\x09^JSON stringify: self asJSON",
messageSends: ["stringify:", "asJSON"],
referencedClasses: ["JSON"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_asString", []);
    return self;
},
args: [],
source: "asJavascript\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_printString", []);
    return self;
},
args: [],
source: "asString\x0a\x09^self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_",
smalltalk.method({
selector: "basicAt:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    return self[aString];
    return self;
},
args: ["aString"],
source: "basicAt: aString\x0a\x09<return self[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_put_",
smalltalk.method({
selector: "basicAt:put:",
category: 'accessing',
fn: function (aString, anObject) {
    var self = this;
    return self[aString] = anObject;
    return self;
},
args: ["aString", "anObject"],
source: "basicAt: aString put: anObject\x0a\x09<return self[aString] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicDelete_",
smalltalk.method({
selector: "basicDelete:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    delete self[aString];
    return aString;
    return self;
},
args: ["aString"],
source: "basicDelete: aString\x0a    <delete self[aString]; return aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_",
smalltalk.method({
selector: "basicPerform:",
category: 'message handling',
fn: function (aSymbol) {
    var self = this;
    return smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
    return self;
},
args: ["aSymbol"],
source: "basicPerform: aSymbol \x0a\x09^self basicPerform: aSymbol withArguments: #()",
messageSends: ["basicPerform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_withArguments_",
smalltalk.method({
selector: "basicPerform:withArguments:",
category: 'message handling',
fn: function (aSymbol, aCollection) {
    var self = this;
    return self[aSymbol].apply(self, aCollection);
    return self;
},
args: ["aSymbol", "aCollection"],
source: "basicPerform: aSymbol withArguments: aCollection\x0a\x09<return self[aSymbol].apply(self, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_class",
smalltalk.method({
selector: "class",
category: 'accessing',
fn: function () {
    var self = this;
    return self.klass;
    return self;
},
args: [],
source: "class\x0a\x09<return self.klass>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
category: 'copying',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
    return self;
},
args: [],
source: "copy\x0a\x09^self shallowCopy postCopy",
messageSends: ["postCopy", "shallowCopy"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    var copy = self.klass._new();
    for (var i in self) {
        if (/^@.+/.test(i)) {
            copy[i] = self[i]._deepCopy();
        }
    }
    return copy;
    return self;
},
args: [],
source: "deepCopy\x0a\x09<    \x0a\x09    var copy = self.klass._new();\x0a\x09    for(var i in self) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09    copy[i] = self[i]._deepCopy();\x0a\x09\x09}\x0a\x09    }\x0a\x09    return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_default_",
smalltalk.method({
selector: "default:",
category: 'accessing',
fn: function (aValue) {
    var self = this;
    return self;
    return self;
},
args: ["aValue"],
source: "default: aValue\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_deprecatedAPI",
smalltalk.method({
selector: "deprecatedAPI",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.getThisContext(), "_home", []), "_asString", []), "__comma", [" is deprecated! (in "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.getThisContext(), "_home", []), "_home", []), "_asString", [])]), "__comma", [")"])]);
    return self;
},
args: [],
source: "deprecatedAPI\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'",
messageSends: ["warn:", ",", "asString", "home"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'collection handling',
fn: function (aBlock) {
    var self = this;
    smalltalk.send([self], "_do_", [aBlock]);
    return self;
},
args: ["aBlock"],
source: "do: aBlock\x0a\x09{ self } do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'error handling',
fn: function (aMessage) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_receiver_", [self]);smalltalk.send($rec, "_message_", [aMessage]);return smalltalk.send($rec, "_signal", []);}(smalltalk.send(smalltalk.MessageNotUnderstood || MessageNotUnderstood, "_new", [])));
    return self;
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09MessageNotUnderstood new\x0a\x09\x09receiver: self;\x0a\x09\x09message: aMessage;\x0a\x09\x09signal",
messageSends: ["receiver:", "message:", "signal", "new"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
category: 'error handling',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.Error || Error, "_signal_", [aString]);
    return self;
},
args: ["aString"],
source: "error: aString\x0a\x09Error signal: aString",
messageSends: ["signal:"],
referencedClasses: ["Error"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_halt",
smalltalk.method({
selector: "halt",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Halt encountered"]);
    return self;
},
args: [],
source: "halt\x0a\x09self error: 'Halt encountered'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
category: 'accessing',
fn: function () {
    var self = this;
    var hash = self.identityHash;
    if (hash) {
        return hash;
    }
    hash = smalltalk.nextId();
    Object.defineProperty(self, "identityHash", {value: hash});
    return hash;
    return self;
},
args: [],
source: "identityHash\x0a\x09<\x0a\x09var hash=self.identityHash;\x0a\x09if (hash) return hash;\x0a\x09hash=smalltalk.nextId();\x0a\x09Object.defineProperty(self, 'identityHash', {value:hash});\x0a\x09return hash;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return self;
    return self;
},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return smalltalk.send(anotherBlock, "_value", []);
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^anotherBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(aBlock, "_value", []);
    return self;
},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return smalltalk.send(aBlock, "_value", []);
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_",
smalltalk.method({
selector: "instVarAt:",
category: 'accessing',
fn: function (aSymbol) {
    var self = this;
    var varname = nil;
    varname = smalltalk.send(aSymbol, "_asString", []);
    return self["@" + varname];
    return self;
},
args: ["aSymbol"],
source: "instVarAt: aSymbol\x0a\x09| varname |\x0a\x09varname := aSymbol asString.\x0a\x09<return self['@'+varname]>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_put_",
smalltalk.method({
selector: "instVarAt:put:",
category: 'accessing',
fn: function (aSymbol, anObject) {
    var self = this;
    var varname = nil;
    varname = smalltalk.send(aSymbol, "_asString", []);
    self["@" + varname] = anObject;
    return self;
},
args: ["aSymbol", "anObject"],
source: "instVarAt: aSymbol put: anObject\x0a\x09| varname |\x0a\x09varname := aSymbol asString.\x0a\x09<self['@' + varname] = anObject>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "isClass\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isKindOf_",
smalltalk.method({
selector: "isKindOf:",
category: 'testing',
fn: function (aClass) {
    var self = this;
    return ($receiver = smalltalk.send(self, "_isMemberOf_", [aClass])).klass === smalltalk.Boolean ? $receiver ? function () {return true;}() : function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return true;}, function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);}]);
    return self;
},
args: ["aClass"],
source: "isKindOf: aClass\x0a\x09^(self isMemberOf: aClass)\x0a\x09    ifTrue: [true]\x0a\x09    ifFalse: [self class inheritsFrom: aClass]",
messageSends: ["ifTrue:ifFalse:", "isMemberOf:", "inheritsFrom:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMemberOf_",
smalltalk.method({
selector: "isMemberOf:",
category: 'testing',
fn: function (aClass) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
    return self;
},
args: ["aClass"],
source: "isMemberOf: aClass\x0a\x09^self class = aClass",
messageSends: ["=", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "isMetaclass\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "isNil\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "isNumber\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isParseFailure",
smalltalk.method({
selector: "isParseFailure",
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "isParseFailure\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "isString\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
category: 'testing',
fn: function () {
    var self = this;
    return false;
    return self;
},
args: [],
source: "isSymbol\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_log_block_",
smalltalk.method({
selector: "log:block:",
category: 'printing',
fn: function (aString, aBlock) {
    var self = this;
    var result = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_millisecondsToRun_", [function () {return result = smalltalk.send(aBlock, "_value", []);}]), "_printString", [])])]);
    return result;
    return self;
},
args: ["aString", "aBlock"],
source: "log: aString block: aBlock\x0a\x0a\x09| result |\x0a\x09console log:  aString,  ' time: ', (Date millisecondsToRun: [result := aBlock value]) printString.\x0a\x09^result",
messageSends: ["log:", ",", "printString", "millisecondsToRun:", "value"],
referencedClasses: ["Date"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
category: 'testing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
    return self;
},
args: [],
source: "notNil\x0a\x09^self isNil not",
messageSends: ["not", "isNil"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_",
smalltalk.method({
selector: "perform:",
category: 'message handling',
fn: function (aSymbol) {
    var self = this;
    return smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
    return self;
},
args: ["aSymbol"],
source: "perform: aSymbol\x0a\x09^self perform: aSymbol withArguments: #()",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_withArguments_",
smalltalk.method({
selector: "perform:withArguments:",
category: 'message handling',
fn: function (aSymbol, aCollection) {
    var self = this;
    var selector = nil;
    selector = smalltalk.send(aSymbol, "_asSelector", []);
    return smalltalk.send(self, selector, aCollection);
    return self;
},
args: ["aSymbol", "aCollection"],
source: "perform: aSymbol withArguments: aCollection\x0a\x09| selector |\x0a\x09selector := aSymbol asSelector.\x0a\x09<return smalltalk.send(self, selector, aCollection)>",
messageSends: ["asSelector"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_postCopy",
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "postCopy",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
category: 'printing',
fn: function () {
    var self = this;
    console.log(self);
    return self;
},
args: [],
source: "printNl\x0a\x09<console.log(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
    return self;
},
args: [],
source: "printString\x0a\x09^'a ', self class name",
messageSends: [",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_respondsTo_",
smalltalk.method({
selector: "respondsTo:",
category: 'testing',
fn: function (aSelector) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_class", []), "_canUnderstand_", [aSelector]);
    return self;
},
args: ["aSelector"],
source: "respondsTo: aSelector\x0a\x09^self class canUnderstand: aSelector",
messageSends: ["canUnderstand:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function () {
    var self = this;
    var copy = self.klass._new();
    for (var i in self) {
        if (/^@.+/.test(i)) {
            copy[i] = self[i];
        }
    }
    return copy;
    return self;
},
args: [],
source: "shallowCopy\x0a\x09<\x0a\x09    var copy = self.klass._new();\x0a\x09    for(var i in self) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09    copy[i] = self[i];\x0a\x09\x09}\x0a\x09    }\x0a\x09    return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_shouldNotImplement",
smalltalk.method({
selector: "shouldNotImplement",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
    return self;
},
args: [],
source: "shouldNotImplement\x0a\x09self error: 'This method should not be implemented in ', self class name",
messageSends: ["error:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Object not indexable"]);
    return self;
},
args: [],
source: "size\x0a\x09self error: 'Object not indexable'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream) {
    var self = this;
    smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
    return self;
},
args: ["aStream"],
source: "storeOn: aStream\x0a\x09aStream nextPutAll: self printString",
messageSends: ["nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeString",
smalltalk.method({
selector: "storeString",
category: 'printing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.String || String, "_streamContents_", [function (s) {return smalltalk.send(self, "_storeOn_", [s]);}]);
    return self;
},
args: [],
source: "storeString\x0a\x09\x22Answer a String representation of the receiver from which the receiver \x0a\x09can be reconstructed.\x22\x0a\x0a\x09^ String streamContents: [:s | self storeOn: s]",
messageSends: ["streamContents:", "storeOn:"],
referencedClasses: ["String"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_subclassResponsibility",
smalltalk.method({
selector: "subclassResponsibility",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
    return self;
},
args: [],
source: "subclassResponsibility\x0a\x09self error: 'This method is a responsibility of a subclass'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_try_catch_",
smalltalk.method({
selector: "try:catch:",
category: 'error handling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    try {
        result = aBlock();
    } catch (e) {
        result = anotherBlock(e);
    }
    return result;
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "try: aBlock catch: anotherBlock\x0a\x09<try{result = aBlock()} catch(e) {result = anotherBlock(e)};\x0a\x09return result;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_unfold_",
smalltalk.method({
selector: "unfold:",
category: 'collection handling',
fn: function (aBlock) {
    var self = this;
    var loop = nil;
    loop = function (state, v) {return ($receiver = state) == nil || $receiver == undefined ? function () {return nil;}() : function () {return smalltalk.send(smalltalk.send(aBlock, "_value_", [state]), "_|_gt", [function (thisisplaceholder1) {return smalltalk.send(smalltalk.send(loop, "_value_value_", [smalltalk.send(thisisplaceholder1, "_first", []), smalltalk.send(thisisplaceholder1, "_second", [])]), "__comma", [v]);}]);}();};
    return smalltalk.send(loop, "_value_value_", [self, nil]);
    return self;
},
args: ["aBlock"],
source: "unfold: aBlock\x0a\x09| loop |\x0a\x09loop := [ :state :v | state \x0a\x09\x09ifNil: [ nil ] \x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09(aBlock value: state)\x0a\x09\x09\x09|> [ ( loop value: (%1 first) value: (%1 second) ), v ]]].\x0a\x09^ loop value: self value: nil",
messageSends: ["ifNil:ifNotNil:", "|>", "value:", ",", "value:value:", "first", "second"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_yourself",
smalltalk.method({
selector: "yourself",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
    return self;
},
args: [],
source: "yourself\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_|_gt",
smalltalk.method({
selector: "|>",
category: 'message handling',
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(aBlock, "_value_", [self]);
    return self;
},
args: ["aBlock"],
source: "|> aBlock\x0a\x09^ aBlock value: self",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_~_eq",
smalltalk.method({
selector: "~=",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
    return self;
},
args: ["anObject"],
source: "~= anObject\x0a\x09^(self = anObject) = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_~~",
smalltalk.method({
selector: "~~",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
    return self;
},
args: ["anObject"],
source: "~~ anObject\x0a\x09^(self == anObject) = false",
messageSends: ["=", "=="],
referencedClasses: []
}),
smalltalk.Object);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "initialize\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Boolean.comment="Boolean wraps the JavaScript `Boolean()` constructor. The `true` and `false` objects are the JavaScript boolean objects.\x0a\x0aBoolean defines the protocol for logic testing operations and conditional control structures for the logical values.\x0aBoolean instances are weither `true` or `false`."
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
category: 'controlling',
fn: function (aBoolean) {
    var self = this;
    if (self == true) {
        return aBoolean;
    } else {
        return false;
    }
    return self;
},
args: ["aBoolean"],
source: "& aBoolean\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return aBoolean;\x0a\x09    } else {\x0a\x09\x09return false;\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aBoolean) {
    var self = this;
    var $early = {};
    try {
        ($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean ? !$receiver ? function () {return function () {throw $early = [false];}();}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return function () {throw $early = [false];}();}]);
        return Boolean(self == true) == aBoolean;
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["aBoolean"],
source: "= aBoolean\x0a\x09aBoolean class = self class ifFalse: [^false].\x0a\x09<return Boolean(self == true) == aBoolean>",
messageSends: ["ifFalse:", "=", "class"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aBoolean) {
    var self = this;
    return smalltalk.send(self, "__eq", [aBoolean]);
    return self;
},
args: ["aBoolean"],
source: "== aBoolean\x0a\x09^self = aBoolean",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, function () {return false;}]);
    return self;
},
args: ["aBlock"],
source: "and: aBlock\x0a\x09^self = true\x0a\x09    ifTrue: aBlock\x0a\x09    ifFalse: [false]",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    return self;
    return self;
},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
    return self;
},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(self, "_ifTrue_ifFalse_", [function () {return nil;}, aBlock]);
    return self;
},
args: ["aBlock"],
source: "ifFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: [] ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: 'controlling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    return smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "ifFalse: aBlock ifTrue: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: anotherBlock ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, function () {return nil;}]);
    return self;
},
args: ["aBlock"],
source: "ifTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: aBlock ifFalse: []",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: 'controlling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    if (self == true) {
        return aBlock();
    } else {
        return anotherBlock();
    }
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return aBlock();\x0a\x09    } else {\x0a\x09\x09return anotherBlock();\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_not",
smalltalk.method({
selector: "not",
category: 'controlling',
fn: function () {
    var self = this;
    return smalltalk.send(self, "__eq", [false]);
    return self;
},
args: [],
source: "not\x0a\x09^self = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [function () {return true;}, aBlock]);
    return self;
},
args: ["aBlock"],
source: "or: aBlock\x0a\x09^self = true\x0a\x09    ifTrue: [true]\x0a\x09    ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return self.toString();
    return self;
},
args: [],
source: "printString\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
    return self;
},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
category: 'controlling',
fn: function (aBoolean) {
    var self = this;
    if (self == true) {
        return true;
    } else {
        return aBoolean;
    }
    return self;
},
args: ["aBoolean"],
source: "| aBoolean\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return true;\x0a\x09    } else {\x0a\x09\x09return aBoolean;\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Date.comment="The Date class is used to work with dates and times. Therefore `Date today` and `Date now` are both valid in\x0aAmber and answer the same date object.\x0a\x0aDate wraps the `Date()` JavaScript constructor, and Smalltalk date objects are JavaScript date objects."
smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aDate) {
    var self = this;
    return self + aDate;
    return self;
},
args: ["aDate"],
source: "+ aDate\x0a\x09<return self + aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aDate) {
    var self = this;
    return self - aDate;
    return self;
},
args: ["aDate"],
source: "- aDate\x0a\x09<return self - aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self < aDate;
    return self;
},
args: ["aDate"],
source: "< aDate\x0a\x09<return self < aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self <= aDate;
    return self;
},
args: ["aDate"],
source: "<= aDate\x0a\x09<return self <= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self > aDate;
    return self;
},
args: ["aDate"],
source: "> aDate\x0a\x09<return self >> aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self >= aDate;
    return self;
},
args: ["aDate"],
source: ">= aDate\x0a\x09<return self >>= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asDateString",
smalltalk.method({
selector: "asDateString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toDateString();
    return self;
},
args: [],
source: "asDateString\x0a\x09<return self.toDateString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asLocaleString",
smalltalk.method({
selector: "asLocaleString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toLocaleString();
    return self;
},
args: [],
source: "asLocaleString\x0a\x09<return self.toLocaleString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asMilliseconds",
smalltalk.method({
selector: "asMilliseconds",
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_time", []);
    return self;
},
args: [],
source: "asMilliseconds\x0a\x09^self time",
messageSends: ["time"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_asMilliseconds", []);
    return self;
},
args: [],
source: "asNumber\x0a\x09^self asMilliseconds",
messageSends: ["asMilliseconds"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toString();
    return self;
},
args: [],
source: "asString\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asTimeString",
smalltalk.method({
selector: "asTimeString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toTimeString();
    return self;
},
args: [],
source: "asTimeString\x0a\x09<return self.toTimeString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_day",
smalltalk.method({
selector: "day",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_dayOfWeek", []);
    return self;
},
args: [],
source: "day\x0a\x09^self dayOfWeek",
messageSends: ["dayOfWeek"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_day_",
smalltalk.method({
selector: "day:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    smalltalk.send(self, "_dayOfWeek_", [aNumber]);
    return self;
},
args: ["aNumber"],
source: "day: aNumber\x0a\x09self dayOfWeek: aNumber",
messageSends: ["dayOfWeek:"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth",
smalltalk.method({
selector: "dayOfMonth",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getDate();
    return self;
},
args: [],
source: "dayOfMonth\x0a\x09<return self.getDate()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth_",
smalltalk.method({
selector: "dayOfMonth:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setDate(aNumber);
    return self;
},
args: ["aNumber"],
source: "dayOfMonth: aNumber\x0a\x09<self.setDate(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek",
smalltalk.method({
selector: "dayOfWeek",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getDay() + 1;
    return self;
},
args: [],
source: "dayOfWeek\x0a\x09<return self.getDay() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek_",
smalltalk.method({
selector: "dayOfWeek:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    return self.setDay(aNumber - 1);
    return self;
},
args: ["aNumber"],
source: "dayOfWeek: aNumber\x0a\x09<return self.setDay(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours",
smalltalk.method({
selector: "hours",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getHours();
    return self;
},
args: [],
source: "hours\x0a\x09<return self.getHours()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours_",
smalltalk.method({
selector: "hours:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setHours(aNumber);
    return self;
},
args: ["aNumber"],
source: "hours: aNumber\x0a\x09<self.setHours(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds",
smalltalk.method({
selector: "milliseconds",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMilliseconds();
    return self;
},
args: [],
source: "milliseconds\x0a\x09<return self.getMilliseconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds_",
smalltalk.method({
selector: "milliseconds:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMilliseconds(aNumber);
    return self;
},
args: ["aNumber"],
source: "milliseconds: aNumber\x0a\x09<self.setMilliseconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes",
smalltalk.method({
selector: "minutes",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMinutes();
    return self;
},
args: [],
source: "minutes\x0a\x09<return self.getMinutes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes_",
smalltalk.method({
selector: "minutes:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMinutes(aNumber);
    return self;
},
args: ["aNumber"],
source: "minutes: aNumber\x0a\x09<self.setMinutes(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_month",
smalltalk.method({
selector: "month",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMonth() + 1;
    return self;
},
args: [],
source: "month\x0a\x09<return self.getMonth() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_month_",
smalltalk.method({
selector: "month:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMonth(aNumber - 1);
    return self;
},
args: ["aNumber"],
source: "month: aNumber\x0a\x09<self.setMonth(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_asString", []);
    return self;
},
args: [],
source: "printString\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds",
smalltalk.method({
selector: "seconds",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getSeconds();
    return self;
},
args: [],
source: "seconds\x0a\x09<return self.getSeconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds_",
smalltalk.method({
selector: "seconds:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setSeconds(aNumber);
    return self;
},
args: ["aNumber"],
source: "seconds: aNumber\x0a\x09<self.setSeconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getTime();
    return self;
},
args: [],
source: "time\x0a\x09<return self.getTime()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setTime(aNumber);
    return self;
},
args: ["aNumber"],
source: "time: aNumber\x0a\x09<self.setTime(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_year",
smalltalk.method({
selector: "year",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getFullYear();
    return self;
},
args: [],
source: "year\x0a\x09<return self.getFullYear()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_year_",
smalltalk.method({
selector: "year:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setFullYear(aNumber);
    return self;
},
args: ["aNumber"],
source: "year: aNumber\x0a\x09<self.setFullYear(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);


smalltalk.addMethod(
"_fromMilliseconds_",
smalltalk.method({
selector: "fromMilliseconds:",
category: 'instance creation',
fn: function (aNumber) {
    var self = this;
    return smalltalk.send(self, "_new_", [aNumber]);
    return self;
},
args: ["aNumber"],
source: "fromMilliseconds: aNumber\x0a\x09^self new: aNumber",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromSeconds_",
smalltalk.method({
selector: "fromSeconds:",
category: 'instance creation',
fn: function (aNumber) {
    var self = this;
    return smalltalk.send(self, "_fromMilliseconds_", [($receiver = aNumber).klass === smalltalk.Number ? $receiver * 1000 : smalltalk.send($receiver, "__star", [1000])]);
    return self;
},
args: ["aNumber"],
source: "fromSeconds: aNumber\x0a\x09^self fromMilliseconds: aNumber * 1000",
messageSends: ["fromMilliseconds:", "*"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString) {
    var self = this;
    return smalltalk.send(self, "_new_", [aString]);
    return self;
},
args: ["aString"],
source: "fromString: aString\x0a\x09\x22Example: Date fromString('2011/04/15 00:00:00')\x22\x0a\x09^self new: aString",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_millisecondsToRun_",
smalltalk.method({
selector: "millisecondsToRun:",
category: 'instance creation',
fn: function (aBlock) {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.Date || Date, "_now", []);
    smalltalk.send(aBlock, "_value", []);
    return ($receiver = smalltalk.send(smalltalk.Date || Date, "_now", [])).klass === smalltalk.Number ? $receiver - t : smalltalk.send($receiver, "__minus", [t]);
    return self;
},
args: ["aBlock"],
source: "millisecondsToRun: aBlock\x0a\x09| t |\x0a\x09t := Date now.\x0a\x09aBlock value.\x0a\x09^Date now - t",
messageSends: ["now", "value", "-"],
referencedClasses: ["Date"]
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anObject) {
    var self = this;
    return new Date(anObject);
    return self;
},
args: ["anObject"],
source: "new: anObject\x0a\x09<return new Date(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_now",
smalltalk.method({
selector: "now",
category: 'instance creation',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_today", []);
    return self;
},
args: [],
source: "now\x0a\x09^self today",
messageSends: ["today"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_today",
smalltalk.method({
selector: "today",
category: 'instance creation',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_new", []);
    return self;
},
args: [],
source: "today\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Date.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.JSObjectProxy.comment="JSObjectProxy handles sending messages to JavaScript object, therefore accessing JavaScript objects from Amber is transparent.\x0aJSOjbectProxy makes intensive use of `#doesNotUnderstand:`.\x0a\x0a## Examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a    window alert: 'hello world'.\x0a    window inspect.\x0a    (window jQuery: 'body') append: 'hello world'\x0a\x0aSmalltalk messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown. \x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes  `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`."
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aSymbol) {
    var self = this;
    var attr = nil;
    attr = smalltalk.send(aSymbol, "_asString", []);
    return self['@jsObject'][attr];
    return self;
},
args: ["aSymbol"],
source: "at: aSymbol\x0a\x09| attr |\x0a\x09attr := aSymbol asString.\x0a\x09<return self['@jsObject'][attr]>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aSymbol, anObject) {
    var self = this;
    var attr = nil;
    attr = smalltalk.send(aSymbol, "_asString", []);
    self['@jsObject'][attr] = anObject;
    return self;
},
args: ["aSymbol", "anObject"],
source: "at: aSymbol put: anObject\x0a\x09| attr |\x0a\x09attr := aSymbol asString.\x0a\x09<self['@jsObject'][attr] = anObject>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'proxy',
fn: function (aMessage) {
    var self = this;
    var obj = nil;
    var selector = nil;
    var jsSelector = nil;
    var arguments = nil;
    obj = smalltalk.send(self, "_jsObject", []);
    selector = smalltalk.send(aMessage, "_selector", []);
    jsSelector = smalltalk.send(selector, "_asJavaScriptSelector", []);
    arguments = smalltalk.send(aMessage, "_arguments", []);
    if (obj[jsSelector] != undefined) {
        return smalltalk.send(obj, jsSelector, arguments);
    }
    smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.JSObjectProxy.superclass || nil);
    return self;
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09| obj selector jsSelector arguments |\x0a\x09obj := self jsObject.\x0a\x09selector := aMessage selector.\x0a\x09jsSelector := selector asJavaScriptSelector.\x0a\x09arguments := aMessage arguments.\x0a\x09<if(obj[jsSelector] != undefined) {return smalltalk.send(obj, jsSelector, arguments)}>.\x0a\x09super doesNotUnderstand: aMessage",
messageSends: ["jsObject", "selector", "asJavaScriptSelector", "arguments", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: 'proxy',
fn: function (anInspector) {
    var self = this;
    var variables = nil;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", smalltalk.send(self, "_jsObject", [])]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    for (var i in self['@jsObject']) {
        variables._at_put_(i, self['@jsObject'][i]);
    }
    smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09anInspector setLabel: self printString.\x0a\x09<for(var i in self['@jsObject']) {\x0a\x09\x09variables._at_put_(i, self['@jsObject'][i]);\x0a\x09}>.\x0a\x09anInspector setVariables: variables",
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@jsObject'];
    return self;
},
args: [],
source: "jsObject\x0a\x09^jsObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject_",
smalltalk.method({
selector: "jsObject:",
category: 'accessing',
fn: function (aJSObject) {
    var self = this;
    self['@jsObject'] = aJSObject;
    return self;
},
args: ["aJSObject"],
source: "jsObject: aJSObject\x0a\x09jsObject := aJSObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'proxy',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
    return self;
},
args: [],
source: "printString\x0a\x09^self jsObject toString",
messageSends: ["toString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aJSObject) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_jsObject_", [aJSObject]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09^self new\x0a\x09\x09jsObject: aJSObject;\x0a\x09\x09yourself",
messageSends: ["jsObject:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Number.comment="Number holds the most general methods for dealing with numbers.  \x0aNumber is directly mapped to JavaScript Number.\x0a\x0aMost arithmetic methods like `#+` `#/` `#-` `#max:` are directly inlined into javascript. \x0a\x0a##Enumerating\x0aA Number can be used to evaluate a Block a fixed number of times:\x0a\x0a\x095 timesRepeat: [Transcript show: 'This will be printed 5 times'; cr].\x0a\x09\x0a\x091 to: 5 do: [:aNumber| Transcript show: aNumber asString; cr].\x0a\x09\x0a\x091 to: 10 by: 2 do: [:aNumber| Transcript show: aNumber asString; cr]."
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
category: 'converting',
fn: function (aNumber) {
    var self = this;
    return self & aNumber;
    return self;
},
args: ["aNumber"],
source: "& aNumber\x0a\x09<return self & aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self * aNumber;
    return self;
},
args: ["aNumber"],
source: "* aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self * aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self + aNumber;
    return self;
},
args: ["aNumber"],
source: "+ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self + aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self - aNumber;
    return self;
},
args: ["aNumber"],
source: "- aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self - aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self / aNumber;
    return self;
},
args: ["aNumber"],
source: "/ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self / aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self < aNumber;
    return self;
},
args: ["aNumber"],
source: "< aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self < aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self <= aNumber;
    return self;
},
args: ["aNumber"],
source: "<= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self <= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    var $early = {};
    try {
        ($receiver = smalltalk.send(aNumber, "_isNumber", [])).klass === smalltalk.Boolean ? !$receiver ? function () {return function () {throw $early = [false];}();}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return function () {throw $early = [false];}();}]);
        return Number(self) == aNumber;
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
       