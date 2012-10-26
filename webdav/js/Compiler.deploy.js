smalltalk.addPackage('Compiler', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Compiler');
smalltalk.addMethod(
"_nextChunk",
smalltalk.method({
selector: "nextChunk",
fn: function () {
    var self = this;
    var $early = {};
    try {
        var char_ = nil;
        var result = nil;
        var chunk = nil;
        result = smalltalk.send("", "_writeStream", []);
        (function () {while (function () {char_ = smalltalk.send(self['@stream'], "_next", []);return smalltalk.send(char_, "_notNil", []);}()) {(function () {($receiver = smalltalk.send(char_, "__eq", ["!"])).klass === smalltalk.Boolean ? $receiver ? function () {return ($receiver = smalltalk.send(smalltalk.send(self['@stream'], "_peek", []), "__eq", ["!"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@stream'], "_next", []);}() : function () {return function () {throw $early = [smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])];}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@stream'], "_next", []);}, function () {return function () {throw $early = [smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])];}();}]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return ($receiver = smalltalk.send(smalltalk.send(self['@stream'], "_peek", []), "__eq", ["!"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self['@stream'], "_next", []);}() : function () {return function () {throw $early = [smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])];}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self['@stream'], "_next", []);}, function () {return function () {throw $early = [smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])];}();}]);}]);return smalltalk.send(result, "_nextPut_", [char_]);}());}}());
        return nil;
        return self;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
}
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream) {
    var self = this;
    self['@stream'] = aStream;
    return self;
}
}),
smalltalk.ChunkParser);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aStream) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_stream_", [aStream]);
    return self;
}
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables'], 'Compiler');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
fn: function () {
    var self = this;
    return smalltalk.FunCodeGenerator || FunCodeGenerator;
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function (aString) {
    var self = this;
    return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parse_", [aString])]);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_forClass_",
smalltalk.method({
selector: "compile:forClass:",
fn: function (aString, aClass) {
    var self = this;
    smalltalk.send(self, "_currentClass_", [aClass]);
    smalltalk.send(self, "_source_", [aString]);
    return smalltalk.send(self, "_compile_", [aString]);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileExpression_",
smalltalk.method({
selector: "compileExpression:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_currentClass_", [smalltalk.DoIt || DoIt]);
    smalltalk.send(self, "_source_", [smalltalk.send(smalltalk.send("doIt ^[", "__comma", [aString]), "__comma", ["] value"])]);
    return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parse_", [smalltalk.send(self, "_source", [])])]);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode) {
    var self = this;
    var generator = nil;
    var result = nil;
    generator = smalltalk.send(smalltalk.send(self, "_codeGeneratorClass", []), "_new", []);
    (function ($rec) {smalltalk.send($rec, "_source_", [smalltalk.send(self, "_source", [])]);return smalltalk.send($rec, "_currentClass_", [smalltalk.send(self, "_currentClass", [])]);}(generator));
    result = smalltalk.send(generator, "_compileNode_", [aNode]);
    smalltalk.send(self, "_unknownVariables_", [smalltalk.send(generator, "_unknownVariables", [])]);
    return result;
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
fn: function () {
    var self = this;
    return self['@currentClass'];
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
fn: function (aClass) {
    var self = this;
    self['@currentClass'] = aClass;
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString) {
    var self = this;
    return eval(aString);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_evaluateExpression_",
smalltalk.method({
selector: "evaluateExpression:",
fn: function (aString) {
    var self = this;
    var result = nil;
    smalltalk.send(smalltalk.DoIt || DoIt, "_addCompiledMethod_", [smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compileExpression_", [aString])])]);
    result = smalltalk.send(smalltalk.send(smalltalk.DoIt || DoIt, "_new", []), "_doIt", []);
    smalltalk.send(smalltalk.DoIt || DoIt, "_removeCompiledMethod_", [smalltalk.send(smalltalk.send(smalltalk.DoIt || DoIt, "_methodDictionary", []), "_at_", ["doIt"])]);
    return result;
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_install_forClass_category_",
smalltalk.method({
selector: "install:forClass:category:",
fn: function (aString, aBehavior, anotherString) {
    var self = this;
    var compiled = nil;
    compiled = smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compile_forClass_", [aString, aBehavior])]);
    smalltalk.send(compiled, "_category_", [anotherString]);
    smalltalk.send(aBehavior, "_addCompiledMethod_", [compiled]);
    return compiled;
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (aString) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_parse_", [aString]);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parseExpression_",
smalltalk.method({
selector: "parseExpression:",
fn: function (aString) {
    var self = this;
    return smalltalk.send(self, "_parse_", [smalltalk.send(smalltalk.send("doIt ^[", "__comma", [aString]), "__comma", ["] value"])]);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
fn: function (aClass) {
    var self = this;
    smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [function (each) {return smalltalk.send(self, "_install_forClass_category_", [smalltalk.send(each, "_source", []), aClass, smalltalk.send(each, "_category", [])]);}]);
    smalltalk.send(self, "_setupClass_", [aClass]);
    ($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);}]);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_do_", [function (each) {(function ($rec) {smalltalk.send($rec, "_show_", [each]);return smalltalk.send($rec, "_cr", []);}(smalltalk.Transcript || Transcript));return smalltalk.send(function () {return smalltalk.send(self, "_recompile_", [each]);}, "_valueWithTimeout_", [100]);}]);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
fn: function (aClass) {
    var self = this;
    smalltalk.init(aClass);
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
    var self = this;
    return ($receiver = self['@source']) == nil || $receiver == undefined ? function () {return "";}() : $receiver;
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
    var self = this;
    self['@source'] = aString;
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function () {
    var self = this;
    return self['@unknownVariables'];
    return self;
}
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables_",
smalltalk.method({
selector: "unknownVariables:",
fn: function (aCollection) {
    var self = this;
    self['@unknownVariables'] = aCollection;
    return self;
}
}),
smalltalk.Compiler);


smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
fn: function (aClass) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_new", []), "_recompile_", [aClass]);
    return self;
}
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_do_", [function (each) {return smalltalk.send(self, "_recompile_", [each]);}]);
    return self;
}
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('Exporter', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass) {
    var self = this;
    return ($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}() : function () {return ($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {return "nil";}() : function () {return smalltalk.send(aClass, "_name", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return "nil";}, function () {return smalltalk.send(aClass, "_name", []);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}, function () {return ($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {return "nil";}() : function () {return smalltalk.send(aClass, "_name", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return "nil";}, function () {return smalltalk.send(aClass, "_name", []);}]);}]);
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportAll",
smalltalk.method({
selector: "exportAll",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.String || String, "_streamContents_", [function (stream) {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packages", []), "_do_", [function (pkg) {return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self, "_exportPackage_", [smalltalk.send(pkg, "_name", [])])]);}]);}]);
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportClass_",
smalltalk.method({
selector: "exportClass:",
fn: function (aClass) {
    var self = this;
    return smalltalk.send(smalltalk.String || String, "_streamContents_", [function (stream) {smalltalk.send(self, "_exportDefinitionOf_on_", [aClass, stream]);smalltalk.send(self, "_exportMethodsOf_on_", [aClass, stream]);smalltalk.send(self, "_exportMetaDefinitionOf_on_", [aClass, stream]);return smalltalk.send(self, "_exportMethodsOf_on_", [smalltalk.send(aClass, "_class", []), stream]);}]);
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["smalltalk.addClass("]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("'", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", ["', "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [", ["]);}(aStream));
    smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send("'", "__comma", [each]), "__comma", ["'"])]);}, function () {return smalltalk.send(aStream, "_nextPutAll_", [", "]);}]);
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["], '"]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", ["'"])]);return smalltalk.send($rec, "_nextPutAll_", [");"]);}(aStream));
    ($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function ($rec) {smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [".comment="]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_asJavascript", [])]);}(aStream);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function ($rec) {smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [".comment="]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_asJavascript", [])]);}(aStream);}]);
    smalltalk.send(aStream, "_lf", []);
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass, aStream) {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean ? !$receiver ? function () {(function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [".iVarNames = ["]);}(aStream));smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send("'", "__comma", [each]), "__comma", ["'"])]);}, function () {return smalltalk.send(aStream, "_nextPutAll_", [","]);}]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send("];", "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])])]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {(function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [".iVarNames = ["]);}(aStream));smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send("'", "__comma", [each]), "__comma", ["'"])]);}, function () {return smalltalk.send(aStream, "_nextPutAll_", [","]);}]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send("];", "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])])]);}]);
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod, aClass, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["smalltalk.addMethod("]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", []), "_asJavascript", []), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk.method({"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("selector: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("category: '", "__comma", [smalltalk.send(aMethod, "_category", [])]), "__comma", ["',"])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_arguments", []), "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("source: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_source", []), "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("messageSends: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_messageSends", []), "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("referencedClasses: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_referencedClasses", []), "_asJavascript", [])])]);}(aStream));
    (function ($rec) {smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["}),"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [");"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);}(aStream));
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
fn: function (aClass, aStream) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_sorted_", [function (a, b) {return ($receiver = smalltalk.send(a, "_selector", [])).klass === smalltalk.Number ? $receiver <= smalltalk.send(b, "_selector", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(b, "_selector", [])]);}]), "_do_", [function (each) {return ($receiver = smalltalk.send(smalltalk.send(each, "_category", []), "_match_", ["^\\*"])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);}]);}]);
    smalltalk.send(aStream, "_lf", []);
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackage_",
smalltalk.method({
selector: "exportPackage:",
fn: function (packageName) {
    var self = this;
    var package = nil;
    return smalltalk.send(smalltalk.String || String, "_streamContents_", [function (stream) {package = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_", [packageName]);smalltalk.send(self, "_exportPackageDefinitionOf_on_", [package, stream]);smalltalk.send(smalltalk.send(smalltalk.send(package, "_sortedClasses", []), "_asSet", []), "_do_", [function (each) {return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self, "_exportClass_", [each])]);}]);return smalltalk.send(self, "_exportPackageExtensionsOf_on_", [package, stream]);}]);
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["smalltalk.addPackage("]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("'", "__comma", [smalltalk.send(package, "_name", [])]), "__comma", ["', "]), "__comma", [smalltalk.send(package, "_propertiesAsJSON", [])]), "__comma", [");"])]);}(aStream));
    smalltalk.send(aStream, "_lf", []);
    return self;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
fn: function (package, aStream) {
    var self = this;
    var name = nil;
    name = smalltalk.send(package, "_name", []);
    smalltalk.send(smalltalk.send(smalltalk.Package || Package, "_sortedClasses_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", [])]), "_do_", [function (each) {return smalltalk.send([each, smalltalk.send(each, "_class", [])], "_do_", [function (aClass) {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_sorted_", [function (a, b) {return ($receiver = smalltalk.send(a, "_selector", [])).klass === smalltalk.Number ? $receiver <= smalltalk.send(b, "_selector", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(b, "_selector", [])]);}]), "_do_", [function (method) {return ($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "_match_", [smalltalk.send("^\\*", "__comma", [name])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_exportMethod_of_on_", [method, aClass, aStream]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_exportMethod_of_on_", [method, aClass, aStream]);}]);}]);}]);}]);
    return self;
}
}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Compiler');
smalltalk.addMethod(
"_chunkEscape_",
smalltalk.method({
selector: "chunkEscape:",
fn: function (aString) {
    var self = this;
    return smalltalk.send(smalltalk.send(aString, "_replace_with_", ["!", "!!"]), "_trimBoth", []);
    return self;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass) {
    var self = this;
    return ($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);}() : function () {return ($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {return "nil";}() : function () {return smalltalk.send(aClass, "_name", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return "nil";}, function () {return smalltalk.send(aClass, "_name", []);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);}, function () {return ($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {return "nil";}() : function () {return smalltalk.send(aClass, "_name", []);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return "nil";}, function () {return smalltalk.send(aClass, "_name", []);}]);}]);
    return self;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(" subclass: #", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["\tinstanceVariableNames: '"]);}(aStream));
    smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(aStream, "_nextPutAll_", [each]);}, function () {return smalltalk.send(aStream, "_nextPutAll_", [" "]);}]);
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["'"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("\tpackage: '", "__comma", [smalltalk.send(aClass, "_category", [])]), "__comma", ["'!"])]);return smalltalk.send($rec, "_lf", []);}(aStream));
    ($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {return function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("!", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [" commentStamp!"])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", ["!"])]);return smalltalk.send($rec, "_lf", []);}(aStream);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("!", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [" commentStamp!"])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", ["!"])]);return smalltalk.send($rec, "_lf", []);}(aStream);}]);
    smalltalk.send(aStream, "_lf", []);
    return self;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass, aStream) {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean ? !$receiver ? function () {(function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [" instanceVariableNames: '"]);}(aStream));smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(aStream, "_nextPutAll_", [each]);}, function () {return smalltalk.send(aStream, "_nextPutAll_", [" "]);}]);return function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["'!"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);}(aStream);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {(function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [" instanceVariableNames: '"]);}(aStream));smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(aStream, "_nextPutAll_", [each]);}, function () {return smalltalk.send(aStream, "_nextPutAll_", [" "]);}]);return function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["'!"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);}(aStream);}]);
    return self;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod, aClass, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aMethod, "_source", [])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["!"]);}(aStream));
    return self;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethods_category_of_on_",
smalltalk.method({
selector: "exportMethods:category:of:on:",
fn: function (methods, category, aClass, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("!", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(" methodsFor: '", "__comma", [category]), "__comma", ["'!"])]);}(aStream));
    smalltalk.send(smalltalk.send(methods, "_sorted_", [function (a, b) {return ($receiver = smalltalk.send(a, "_selector", [])).klass === smalltalk.Number ? $receiver <= smalltalk.send(b, "_selector", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(b, "_selector", [])]);}]), "_do_", [function (each) {return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);}]);
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", [" !"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);}(aStream));
    return self;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
fn: function (aClass, aStream) {
    var self = this;
    var map = nil;
    map = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(aClass, "_protocolsDo_", [function (category, methods) {return ($receiver = smalltalk.send(category, "_match_", ["^\\*"])).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(map, "_at_put_", [category, methods]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return smalltalk.send(map, "_at_put_", [category, methods]);}]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(map, "_keys", []), "_sorted_", [function (a, b) {return ($receiver = a).klass === smalltalk.Number ? $receiver <= b : smalltalk.send($receiver, "__lt_eq", [b]);}]), "_do_", [function (category) {var methods = nil;methods = smalltalk.send(map, "_at_", [category]);return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);}]);
    return self;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Smalltalk current createPackage: '", "__comma", [smalltalk.send(package, "_name", [])]), "__comma", ["' properties: "]), "__comma", [smalltalk.send(smalltalk.send(package, "_properties", []), "_storeString", [])]), "__comma", ["!"])]);return smalltalk.send($rec, "_lf", []);}(aStream));
    return self;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
fn: function (package, aStream) {
    var self = this;
    var name = nil;
    var map = nil;
    name = smalltalk.send(package, "_name", []);
    smalltalk.send(smalltalk.send(smalltalk.Package || Package, "_sortedClasses_", [smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", [])]), "_do_", [function (each) {return smalltalk.send([each, smalltalk.send(each, "_class", [])], "_do_", [function (aClass) {map = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);smalltalk.send(aClass, "_protocolsDo_", [function (category, methods) {return ($receiver = smalltalk.send(category, "_match_", [smalltalk.send("^\\*", "__comma", [name])])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(map, "_at_put_", [category, methods]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(map, "_at_put_", [category, methods]);}]);}]);return smalltalk.send(smalltalk.send(smalltalk.send(map, "_keys", []), "_sorted_", [function (a, b) {return ($receiver = a).klass === smalltalk.Number ? $receiver <= b : smalltalk.send($receiver, "__lt_eq", [b]);}]), "_do_", [function (category) {var methods = nil;methods = smalltalk.send(map, "_at_", [category]);return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);}]);}]);}]);
    return self;
}
}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Compiler');
smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["smalltalk.addClass("]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("'", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", ["', "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [", ["]);}(aStream));
    smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [function (each) {return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send("'", "__comma", [each]), "__comma", ["'"])]);}, function () {return smalltalk.send(aStream, "_nextPutAll_", [", "]);}]);
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["], '"]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", ["'"])]);return smalltalk.send($rec, "_nextPutAll_", [");"]);}(aStream));
    smalltalk.send(aStream, "_lf", []);
    return self;
}
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod, aClass, aStream) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_nextPutAll_", ["smalltalk.addMethod("]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", []), "_asJavascript", []), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk.method({"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("selector: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["}),"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [");"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);}(aStream));
    return self;
}
}),
smalltalk.StrippedExporter);



smalltalk.addClass('Importer', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
"_import_",
smalltalk.method({
selector: "import:",
fn: function (aStream) {
    var self = this;
    var chunk = nil;
    var result = nil;
    var parser = nil;
    var lastEmpty = nil;
    parser = smalltalk.send(smalltalk.ChunkParser || ChunkParser, "_on_", [aStream]);
    lastEmpty = false;
    (function () {while (!function () {chunk = smalltalk.send(parser, "_nextChunk", []);return smalltalk.send(chunk, "_isNil", []);}()) {(function () {return ($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean ? $receiver ? function () {return lastEmpty = true;}() : function () {result = smalltalk.send(smalltalk.send(smalltalk.Compiler || Compiler, "_new", []), "_evaluateExpression_", [chunk]);return ($receiver = lastEmpty).klass === smalltalk.Boolean ? $receiver ? function () {lastEmpty = false;return smalltalk.send(result, "_scanFrom_", [parser]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {lastEmpty = false;return smalltalk.send(result, "_scanFrom_", [parser]);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return lastEmpty = true;}, function () {result = smalltalk.send(smalltalk.send(smalltalk.Compiler || Compiler, "_new", []), "_evaluateExpression_", [chunk]);return ($receiver = lastEmpty).klass === smalltalk.Boolean ? $receiver ? function () {lastEmpty = false;return smalltalk.send(result, "_scanFrom_", [parser]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {lastEmpty = false;return smalltalk.send(result, "_scanFrom_", [parser]);}]);}]);}());}}());
    return self;
}
}),
smalltalk.Importer);



smalltalk.addClass('Node', smalltalk.Object, ['nodes'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitNode_", [self]);
    return self;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_nodes", []), "_add_", [aNode]);
    return self;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function () {
    var self = this;
    return ($receiver = self['@nodes']) == nil || $receiver == undefined ? function () {return self['@nodes'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
fn: function (aCollection) {
    var self = this;
    self['@nodes'] = aCollection;
    return self;
}
}),
smalltalk.Node);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitAssignmentNode_", [self]);
    return self;
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left",
smalltalk.method({
selector: "left",
fn: function () {
    var self = this;
    return self['@left'];
    return self;
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left_",
smalltalk.method({
selector: "left:",
fn: function (aNode) {
    var self = this;
    self['@left'] = aNode;
    smalltalk.send(self['@left'], "_assigned_", [true]);
    return self;
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right",
smalltalk.method({
selector: "right",
fn: function () {
    var self = this;
    return self['@right'];
    return self;
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right_",
smalltalk.method({
selector: "right:",
fn: function (aNode) {
    var self = this;
    self['@right'] = aNode;
    return self;
}
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'inlined'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitBlockNode_", [self]);
    return self;
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_inlined",
smalltalk.method({
selector: "inlined",
fn: function () {
    var self = this;
    return ($receiver = self['@inlined']) == nil || $receiver == undefined ? function () {return false;}() : $receiver;
    return self;
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_inlined_",
smalltalk.method({
selector: "inlined:",
fn: function (aBoolean) {
    var self = this;
    self['@inlined'] = aBoolean;
    return self;
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters",
smalltalk.method({
selector: "parameters",
fn: function () {
    var self = this;
    return ($receiver = self['@parameters']) == nil || $receiver == undefined ? function () {return self['@parameters'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters_",
smalltalk.method({
selector: "parameters:",
fn: function (aCollection) {
    var self = this;
    self['@parameters'] = aCollection;
    return self;
}
}),
smalltalk.BlockNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitCascadeNode_", [self]);
    return self;
}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function () {
    var self = this;
    return self['@receiver'];
    return self;
}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (aNode) {
    var self = this;
    self['@receiver'] = aNode;
    return self;
}
}),
smalltalk.CascadeNode);



smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitDynamicArrayNode_", [self]);
    return self;
}
}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitDynamicDictionaryNode_", [self]);
    return self;
}
}),
smalltalk.DynamicDictionaryNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitJSStatementNode_", [self]);
    return self;
}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
    var self = this;
    return ($receiver = self['@source']) == nil || $receiver == undefined ? function () {return "";}() : $receiver;
    return self;
}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
    var self = this;
    self['@source'] = aString;
    return self;
}
}),
smalltalk.JSStatementNode);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitMethodNode_", [self]);
    return self;
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function () {
    var self = this;
    return ($receiver = self['@arguments']) == nil || $receiver == undefined ? function () {return [];}() : $receiver;
    return self;
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection) {
    var self = this;
    self['@arguments'] = aCollection;
    return self;
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
    var self = this;
    return self['@selector'];
    return self;
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString) {
    var self = this;
    self['@selector'] = aString;
    return self;
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
    var self = this;
    return self['@source'];
    return self;
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
    var self = this;
    self['@source'] = aString;
    return self;
}
}),
smalltalk.MethodNode);



smalltalk.addClass('OMetaDefineNode', smalltalk.MethodNode, ['grammerName', 'grammerBody'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitOMetaDefineNode_", [self]);
    return self;
}
}),
smalltalk.OMetaDefineNode);

smalltalk.addMethod(
"_body",
smalltalk.method({
selector: "body",
fn: function () {
    var self = this;
    return self['@grammerBody'];
    return self;
}
}),
smalltalk.OMetaDefineNode);

smalltalk.addMethod(
"_body_",
smalltalk.method({
selector: "body:",
fn: function (aString) {
    var self = this;
    self['@grammerBody'] = aString;
    return self;
}
}),
smalltalk.OMetaDefineNode);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return self['@grammerName'];
    return self;
}
}),
smalltalk.OMetaDefineNode);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString) {
    var self = this;
    self['@grammerName'] = aString;
    return self;
}
}),
smalltalk.OMetaDefineNode);



smalltalk.addClass('OMetaNode', smalltalk.MethodNode, ['grammerName', 'grammerBody', 'rule'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitOMetaNode_", [self]);
    return self;
}
}),
smalltalk.OMetaNode);

smalltalk.addMethod(
"_body",
smalltalk.method({
selector: "body",
fn: function () {
    var self = this;
    return self['@grammerBody'];
    return self;
}
}),
smalltalk.OMetaNode);

smalltalk.addMethod(
"_body_",
smalltalk.method({
selector: "body:",
fn: function (aString) {
    var self = this;
    self['@grammerBody'] = aString;
    return self;
}
}),
smalltalk.OMetaNode);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return self['@grammerName'];
    return self;
}
}),
smalltalk.OMetaNode);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString) {
    var self = this;
    self['@grammerName'] = aString;
    return self;
}
}),
smalltalk.OMetaNode);

smalltalk.addMethod(
"_rule",
smalltalk.method({
selector: "rule",
fn: function () {
    var self = this;
    return self['@rule'];
    return self;
}
}),
smalltalk.OMetaNode);

smalltalk.addMethod(
"_rule_",
smalltalk.method({
selector: "rule:",
fn: function (aString) {
    var self = this;
    self['@rule'] = aString;
    return self;
}
}),
smalltalk.OMetaNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitReturnNode_", [self]);
    return self;
}
}),
smalltalk.ReturnNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitSendNode_", [self]);
    return self;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function () {
    var self = this;
    return ($receiver = self['@arguments']) == nil || $receiver == undefined ? function () {return self['@arguments'] = [];}() : $receiver;
    return self;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection) {
    var self = this;
    self['@arguments'] = aCollection;
    return self;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_cascadeNodeWithMessages_",
smalltalk.method({
selector: "cascadeNodeWithMessages:",
fn: function (aCollection) {
    var self = this;
    var first = nil;
    first = function ($rec) {smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.SendNode || SendNode, "_new", []));
    return function ($rec) {smalltalk.send($rec, "_receiver_", [smalltalk.send(self, "_receiver", [])]);smalltalk.send($rec, "_nodes_", [smalltalk.send(smalltalk.send(smalltalk.Array || Array, "_with_", [first]), "__comma", [aCollection])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.CascadeNode || CascadeNode, "_new", []));
    return self;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function () {
    var self = this;
    return self['@receiver'];
    return self;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (aNode) {
    var self = this;
    self['@receiver'] = aNode;
    return self;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
    var self = this;
    return self['@selector'];
    return self;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString) {
    var self = this;
    self['@selector'] = aString;
    return self;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_valueForReceiver_",
smalltalk.method({
selector: "valueForReceiver:",
fn: function (anObject) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_receiver_", [($receiver = smalltalk.send(self, "_receiver", [])) == nil || $receiver == undefined ? function () {return anObject;}() : function () {return smalltalk.send(smalltalk.send(self, "_receiver", []), "_valueForReceiver_", [anObject]);}()]);smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.SendNode || SendNode, "_new", []));
    return self;
}
}),
smalltalk.SendNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitSequenceNode_", [self]);
    return self;
}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_asBlockSequenceNode",
smalltalk.method({
selector: "asBlockSequenceNode",
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_nodes_", [smalltalk.send(self, "_nodes", [])]);smalltalk.send($rec, "_temps_", [smalltalk.send(self, "_temps", [])]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.BlockSequenceNode || BlockSequenceNode, "_new", []));
    return self;
}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_placeHolders",
smalltalk.method({
selector: "placeHolders",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.PlaceHolderExtractor || PlaceHolderExtractor, "_new", []), "_find_", [self]);
    return self;
}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
fn: function () {
    var self = this;
    return ($receiver = self['@temps']) == nil || $receiver == undefined ? function () {return [];}() : $receiver;
    return self;
}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps_",
smalltalk.method({
selector: "temps:",
fn: function (aCollection) {
    var self = this;
    self['@temps'] = aCollection;
    return self;
}
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitBlockSequenceNode_", [self]);
    return self;
}
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitValueNode_", [self]);
    return self;
}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function () {
    var self = this;
    return self['@value'];
    return self;
}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anObject) {
    var self = this;
    self['@value'] = anObject;
    return self;
}
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned'], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitVariableNode_", [self]);
    return self;
}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned",
smalltalk.method({
selector: "assigned",
fn: function () {
    var self = this;
    return ($receiver = self['@assigned']) == nil || $receiver == undefined ? function () {return false;}() : $receiver;
    return self;
}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned_",
smalltalk.method({
selector: "assigned:",
fn: function (aBoolean) {
    var self = this;
    self['@assigned'] = aBoolean;
    return self;
}
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
    var self = this;
    smalltalk.send(aVisitor, "_visitClassReferenceNode_", [self]);
    return self;
}
}),
smalltalk.ClassReferenceNode);



smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(aNode, "_accept_", [self]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitNode_",
smalltalk.method({
selector: "visitNode:",
fn: function (aNode) {
    var self = this;
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitNode_", [aNode]);
    return self;
}
}),
smalltalk.NodeVisitor);



sm