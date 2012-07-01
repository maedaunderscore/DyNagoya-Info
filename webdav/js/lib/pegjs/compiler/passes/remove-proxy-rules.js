/*
 * Removes proxy rules -- that is, rules that only delegate to other rule.
 */
PEG.compiler.passes.removeProxyRules = function(ast) {
  function isProxyRule(node) {
    return node.type === "rule" && node.expression.type === "rule_ref";
  }

  function replaceRuleRefs(ast, from, to) {
    function nop() {}

    function replaceInExpression(node, from, to) {
      replace(node.expression, from, to);
    }

    function replaceInSubnodes(propertyName) {
      return function(node, from, to) {
        each(node[propertyName], function(subnode) {
          replace(subnode, from, to);
        });
      };
    }

    var replace = buildNodeVisitor({
      grammar:      replaceInSubnodes("rules"),
      rule:         replaceInExpression,
      named:        replaceInExpression,
      choice:       replaceInSubnodes("alternatives"),
      sequence:     replaceInSubnodes("elements"),
      labeled:      replaceInExpression,
      simple_and:   replaceInExpression,
      simple_not:   replaceInExpression,
      semantic_and: nop,
      semantic_not: nop,
      optional:     replaceInExpression,
      zero_or_more: replaceInExpression,
      one_or_more:  replaceInExpression,
      action:       replaceInExpression,

      rule_ref:
        function(node, from, to) {
          if (node.name === from) {
            node.name = to;
          }
        },

      literal:      nop,
      "class":      nop,
      any:          nop
    });

    replace(ast, from, to);
  }

  var indices = [];

  each(ast.rules, function(rule, i) {
    if (isProxyRule(rule)) {
      replaceRuleRefs(ast, rule.name, rule.expression.name);
      if (rule.name === ast.startRule) {
        ast.startRule = rule.expression.name;
      }
      indices.push(i);
    }
  });

  indices.reverse();

  each(indices, function(index) {
    ast.rules.splice(index, 1);
  });
};
