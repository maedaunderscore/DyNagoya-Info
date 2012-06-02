smalltalk.addPackage('CodeModification', {});
smalltalk.addClass('Mod', smalltalk.Object, [], 'CodeModification');

smalltalk.addMethod(
"_attr_value_",
smalltalk.method({
selector: "attr:value:",
category: 'not yet classified',
fn: function (name, aValue) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(name, "__comma", [unescape("%0A%20%20%5E%27")]), "__comma", [aValue]), "__comma", [unescape("%27")]);
    return self;
},
args: ["name", "aValue"],
source: "attr: name value: aValue\x0a\x09^ name,'\x0a  ^''', aValue, ''''",
messageSends: [","],
referencedClasses: []
}),
smalltalk.Mod.klass);

smalltalk.addMethod(
"_class_attr_value_",
smalltalk.method({
selector: "class:attr:value:",
category: 'not yet classified',
fn: function (aClass, name, aValue) {
    var self = this;
    smalltalk.send(self, "_class_source_", [aClass, smalltalk.send(self, "_attr_value_", [name, aValue])]);
    return self;
},
args: ["aClass", "name", "aValue"],
source: "class: aClass attr: name value: aValue\x0a\x09self class: aClass source: (self attr: name value: aValue)",
messageSends: ["class:source:", "attr:value:"],
referencedClasses: []
}),
smalltalk.Mod.klass);

smalltalk.addMethod(
"_class_source_",
smalltalk.method({
selector: "class:source:",
category: 'not yet classified',
fn: function (aClass, source) {
    var self = this;
    var $early = {};
    try {
        var compiler = nil;
        var method = nil;
        var node = nil;
        compiler = smalltalk.send(smalltalk.Compiler || Compiler, "_new", []);
        smalltalk.send(compiler, "_source_", [source]);
        node = smalltalk.send(compiler, "_parse_", [source]);
        ($receiver = smalltalk.send(node, "_isParseFailure", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {throw $early = [smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [", position: "]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])];}();}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function () {throw $early = [smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [", position: "]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])];}();}]);
        smalltalk.send(compiler, "_currentClass_", [aClass]);
        method = smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compileNode_", [node])]);
        smalltalk.send(method, "_category_", ["accessing"]);
        smalltalk.send(aClass, "_addCompiledMethod_", [method]);
        smalltalk.send(compiler, "_setupClass_", [aClass]);
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["aClass", "source"],
source: "class: aClass source: source\x0a    | compiler method node | \x0a    compiler := Compiler new.\x0a    compiler source: source.\x0a    node := compiler parse: source.\x0a    node isParseFailure ifTrue: [\x0a      \x09\x09^window alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].\x0a    compiler currentClass: aClass.\x0a    method := compiler eval: (compiler compileNode: node).\x0a    method category: 'accessing'.\x0a    aClass addCompiledMethod: method.\x0a    compiler setupClass: aClass.\x0a",
messageSends: ["new", "source:", "parse:", "ifTrue:", "isParseFailure", "alert:", ",", "reason", "asString", "position", "currentClass:", "eval:", "compileNode:", "category:", "addCompiledMethod:", "setupClass:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Mod.klass);


