smalltalk.addPackage('CodeModification', {});
smalltalk.addClass('Mod', smalltalk.Object, [], 'CodeModification');

smalltalk.addMethod(
"_attr_value_",
smalltalk.method({
selector: "attr:value:",
fn: function (name, aValue) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(name, "__comma", [unescape("%0A%20%20%5E%27")]), "__comma", [aValue]), "__comma", [unescape("%27")]);
    return self;
}
}),
smalltalk.Mod.klass);

smalltalk.addMethod(
"_class_attr_value_",
smalltalk.method({
selector: "class:attr:value:",
fn: function (aClass, name, aValue) {
    var self = this;
    smalltalk.send(self, "_class_source_", [aClass, smalltalk.send(self, "_attr_value_", [name, aValue])]);
    return self;
}
}),
smalltalk.Mod.klass);

smalltalk.addMethod(
"_class_source_",
smalltalk.method({
selector: "class:source:",
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
}
}),
smalltalk.Mod.klass);


